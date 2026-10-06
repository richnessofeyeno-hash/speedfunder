'use client';
import {useMemo,useState} from 'react';
import {Shell} from '../_shared';
import {categories, portfolio} from '../../data/portfolio';

export default function Page(){
  const [filter,setFilter]=useState<'ALL'|typeof categories[number]>('ALL');
  const visible=useMemo(()=>filter==='ALL'?portfolio:portfolio.filter(x=>x.category===filter),[filter]);
  return <Shell eyebrow="Portfolio" title="VERIFIED CAMPAIGNS. EIGHT CROWDFUNDING CATEGORIES.">
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="muted">A curated portfolio of Kickstarter campaigns selected for funding strength, recency and category relevance. We only publish a direct campaign link when the exact Kickstarter URL has been verified.</p>
        </div>
        <div className="filters" role="tablist" aria-label="Portfolio categories">
          {['ALL',...categories].map(x=><button key={x} className={`filter ${filter===x?'active':''}`} onClick={()=>setFilter(x as any)}>{x}</button>)}
        </div>
        <div className="portfolio-grid">
          {visible.map((x,i)=><a className="card portfolio-card" key={x.url} href={x.url} target="_blank" rel="noreferrer">
            <div className="portfolio-image"><div className="portfolio-art"><span>{x.category}</span><strong>{String(i+1).padStart(2,'0')}</strong></div></div>
            <div className="portfolio-body">
              <div className="eyebrow">{x.year} · {x.category}</div>
              <h3>{x.title}</h3>
              <div className="metric"><strong>{x.funding}</strong><small>FUNDED</small></div>
              <div className="portfolio-meta">Goal {x.goal || '—'}{x.backers ? ` · ${x.backers} backers` : ''}</div>
              <span className="text-link">VIEW KICKSTARTER CAMPAIGN ↗</span>
            </div>
          </a>)}
        </div>
        <div className="portfolio-note card">
          <div className="eyebrow">Portfolio data integrity</div>
          <h3>Exact links first. No invented campaigns.</h3>
          <p>Additional portfolio campaigns will be added as their exact Kickstarter links are verified. This keeps every public portfolio card traceable to the correct campaign.</p>
        </div>
      </div>
    </section>
  </Shell>
}
