import Link from 'next/link';
export function Shell({title,eyebrow,children}:{title:string;eyebrow:string;children:React.ReactNode}){return <>
  <header className="nav">
  <div className="container nav-inner">
  <Link className="brand" href="/">
  <span className="brand-circle">
    <img src="/logo.png" alt="SpeedFunders" />
  </span>
</Link><nav className="links">
  <Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/process">Process</Link><Link href="/our-backers-community">Our Backers Community</Link><Link href="/portfolio" target="_blank">Portfolio ↗</Link><Link href="/pricing">Pricing</Link><Link href="/contact">Contact</Link><Link className="btn btn-primary" href="/contact">START YOUR CAMPAIGN →</Link></nav></div></header><main><section className="page-hero"><div className="container"><div className="eyebrow">{eyebrow}</div><h1 className="display">{title}</h1></div></section>{children}</main><footer className="footer"><div className="container footer-grid"><div>
<span className="footer-logo-circle">
  <img src="/logo.png" className="footer-logo" alt="SpeedFunders" />
</span>
    <p>YOUR FASTEST FUNDING PARTNERS</p><p>447 Broadway, 2nd Floor<br/>New York, NY 10013, United States</p><a href="mailto:team@speedfunders.com">team@speedfunders.com</a></div><div><h4>Explore</h4><div className="footer-links"><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/process">Process</Link><Link href="/portfolio" target="_blank">Portfolio ↗</Link><Link href="/pricing">Pricing</Link><Link href="/contact">Contact</Link></div></div><div><h4>Community</h4><div className="footer-links"><Link href="/our-backers-community">Our Backers Community</Link><Link href="/contact">Start Your Campaign</Link></div></div><div><h4>Social</h4><div className="footer-links"><a href="https://www.facebook.com/speedfunders" target="_blank">Facebook ↗</a><a href="https://www.instagram.com/speedfunders" target="_blank">Instagram ↗</a><a href="https://twitter.com/speedfunders" target="_blank">X / Twitter ↗</a></div></div></div><div className="container copyright"><span>© 2026 SpeedFunders. All Rights Reserved.</span><span><Link href="/privacy-policy">Privacy Policy</Link> · <Link href="/terms-and-conditions">Terms & Conditions</Link> · <Link href="/disclaimer">Disclaimer</Link></span></div></footer></>}
