# 🎁 Gifty Navigator

🌐 **Live Site:** [https://mtr587.github.io/gifty-navigator/](https://mtr587.github.io/gifty-navigator/)

**Data-Driven Gift Recommendations** — Stop guessing what to give. We study what Americans actually give vs. what they actually want, so you can give gifts that land.

## About

Americans spend over **$979 billion** on gifts annually, but an estimated **45% of gifts are returned, re-gifted, or left unused**. Gifty Navigator maps the gap between giver intention and receiver desire across 15+ occasions, 7 age groups, and every budget.

## Features

- 📊 **The Gift Mismatch** — Side-by-side comparison of most-given vs. most-wanted gifts per occasion
- 🎯 **Interactive Gift Finder Quiz** — 5 questions → personalized recommendations
- 👶👴 **Age-Based Insights** — Gift preferences change dramatically by age. We map it.
- 💰 **Smart Price Filters** — Recommendations from under $25 to luxury
- 🎭 **Personality-Based Shopping** — Match gifts to who they are, not just the occasion
- 📖 **Free Annual Gift Report** — Research-backed data, free to cite and share

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Homepage with survey summary, occasion grid, mismatch preview |
| `report.html` | Full American Gift Report 2026 |
| `quiz.html` | Interactive gift finder (5 questions) |
| `occasions/christmas.html` | Christmas gift guide with mismatch data |
| `occasions/valentines-day.html` | Valentine's Day guide |
| `occasions/mothers-day.html` | Mother's Day guide |
| `occasions/fathers-day.html` | Father's Day guide |
| `occasions/birthday.html` | Birthday guide (all 7 age groups) |
| `occasions/wedding.html` | Wedding gift guide |
| `occasions/baby-shower.html` | Baby shower guide |
| `occasions/housewarming.html` | Housewarming guide |
| `occasions/graduation.html` | Graduation guide |
| `occasions/anniversary.html` | Anniversary guide |
| `occasions/retirement.html` | Retirement guide |
| `occasions/thanksgiving.html` | Thanksgiving host gift guide |
| `occasions/easter.html` | Easter guide |
| `occasions/corporate-gifts.html` | Office/Corporate gift guide |
| `occasions/just-because.html` | Just Because & appreciation gifts |

## Tech Stack

- Static HTML/CSS/JS (no frameworks, no build step)
- Deployed on GitHub Pages
- CSS custom properties for theming
- Vanilla JS for interactivity (quiz, filters, tabs, animations)
- JSON-LD structured data for SEO
- Mobile-first responsive design

## Data Sources

Gift preference and spending data synthesized from:
- National Retail Federation (NRF) annual surveys
- Gallup consumer spending polls
- YouGov gift preference surveys
- Statista retail data
- U.S. Census Bureau retail trade data

## Amazon Associates

This site is built for Amazon Associates monetization. All product recommendations include:
- Price information
- "Why this works" mismatch-avoidance explanation
- Amazon affiliate links (replace placeholder links before launch)
- Required affiliate disclosure

### Before Launch
1. Replace placeholder Amazon links with your Associate ID (`tag=YOUR-ID-20`)
2. Add your Amazon Associates disclosure page
3. Set up Google Analytics / Search Console
4. Configure custom domain (optional)

## Deployment

This is a static site. Deploy to GitHub Pages:

```bash
# Option 1: Push to main branch, enable Pages in repo settings
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/gifty-navigator.git
git push -u origin main

# Option 2: Use gh-pages branch
git checkout -b gh-pages
git push origin gh-pages
```

Then enable GitHub Pages in repository Settings → Pages.

## License

Proprietary. All rights reserved.
