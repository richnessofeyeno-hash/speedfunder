# SpeedFunders Website

Premium Kickstarter-focused crowdfunding marketing site based on the approved SpeedFunders development specification.

## Run

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm start
```

## Production integrations still to wire

- Cloudflare Turnstile + Worker endpoint
- Cloudflare D1 submission storage
- Resend creator/team notifications
- Brevo double-opt-in newsletter endpoint
- Analytics event transport
- Final exact Kickstarter URL dataset for every portfolio card where a direct campaign URL was not already available in the build context

The UI deliberately does not invent missing campaign URLs.
