# Utkarsh Mishra — Data Analyst Portfolio

A creative, single-page portfolio built to feel like **scrolling through a live BI dashboard**:
animated KPI tiles, real charts (Chart.js), a Situation → Action → Impact career timeline,
and a recruiter-focused narrative tuned for **MBB / consulting and product roles**.

Pure **HTML + CSS + vanilla JS** (no build step, no framework). Open it or drop it on any
static host.

---

## Run locally

Just open `index.html` in a browser. For best results (so the resume download and fonts
behave like production), serve it:

```bash
# Python
python -m http.server 8000
# then visit http://localhost:8000

# or Node
npx serve .
```

## Deploy (any static host)

- **Vercel** — `vercel` in this folder, or drag-and-drop in the dashboard. No config needed.
- **Netlify** — drag the folder onto the Netlify drop zone, or connect the repo.
- **GitHub Pages** — push to a repo, enable Pages on the `main` branch / root.

No environment variables, no backend.

---

## File structure

```
.
├── index.html                  # markup + section shells (content is injected from app.js)
├── css/
│   └── styles.css              # theme tokens, layout, components, animations, responsive
├── js/
│   └── app.js                  # SINGLE JS FILE: DATA + charts + interactions
├── assets/                     # (favicon is inline SVG; add images here if needed)
├── Utkarsh_Mishra_Resume.pdf   # resume served by the "Download Resume" buttons
└── README.md
```

---

## How to edit (single source of truth)

**You almost never touch HTML.** Nearly all visible text, numbers, and links come from one
object: `const DATA = { ... }` at the **top of `js/app.js`**. Change values there and reload.

In `index.html`, each section is marked with an `<!-- EDIT: ... -->` comment that tells you
which `DATA` key fills it.

### Edit map — section → `DATA` key

| Page section | `DATA` key | What it controls |
|---|---|---|
| Name / brand (nav, hero, footer) | `name` | Your name everywhere |
| Hero headline | `headline` | The one-line role tagline under your name |
| Hero sub-tagline | `tagline` | The longer value-proposition sentence |
| Hero location | `location` | Location text |
| Download Resume buttons | `resumeFile` | Filename of the PDF to download |
| **Years of experience tile** | `experiencePeriods` | Active work periods used to **auto-compute** years, excluding breaks |
| Hero KPI tiles | `heroKpis` | The 4 tiles at the top (`value`, `suffix`, `label`) |
| Profile paragraph | `profile.summary` | About-me text |
| Profile positioning line | `profile.positioning` | The highlighted one-liner |
| Profile treemap | `profile.industries` | Industry exposure blocks sized by the percentages explicitly present in the data |
| Consulting & Product Fit cards | `fit` | 6 competency cards (`title`, `proof`) |
| Skills radar chart | `skills.radar` | Category labels + 0–100 values |
| Skills proficiency bars | `skills.bars` | Tool name + `level` (0–100) |
| Tool logo wall | `skills.tools` | Tool logo cards (`name`, `logo`, `category`, `fallback`) rendered above the radar/proficiency visuals |
| Additional skills | `skills.additionalSkills` | Soft skills and cross-functional strengths shown below the radar/proficiency visuals |
| Career trend chart | `careerTrend` + `experiencePeriods` | Timeline trend of active professional experience |
| Career timeline + education | `experience` | Work and education cards with `bullets`, `impacts`, optional `visuals`, and optional `sectionHeading` |
| Projects and Dashboards cards | `caseStudies` | Project title, context, problem, solution, tools, metric movement cards, and business meaning |
| Side Hustles case studies | `ventures` | Venture title, role, period, subline, thesis, detail bullets, skills tags, compact-card `gallery` image paths |
| "What these translate into" chips | `venturesTransferable` | List of transferable-skill strings |
| Achievement and Certifications | `certifications` | Certificate title and thumbnail/modal image path |
| Impact band (30-sec skim) | `impact` | The 5 aggregate metric tiles |
| Contact cards | `contact` | `email`, `phone`, `linkedin`, `leetcode` |

> **Action item:** update `contact.linkedin` and `contact.leetcode` to your real profile URLs —
> they currently use best-guess placeholders.

### Numbers / KPIs format

KPI and impact entries accept:

```js
{ value: 25, prefix: "+", suffix: "%", label: "Collection rate" }
// renders:  +25%   Collection rate   (and counts up from 0 on scroll)
```

`prefix` and `suffix` are optional. The big number animates (count-up) when it scrolls into view.

### Charts

Timeline roles can have a `chartSpec`. Supported `type` values: `line`, `bar`,
`doughnut`, and `pie`. Example:

```js
chartSpec: {
  type: "line",
  labels: ["Q1", "Q2", "Q3", "Q4"],
  series: [{ label: "Order visibility", data: [60, 68, 74, 80] }],
}
```

Colors, gridlines, and dark/light theming are handled automatically.

### Projects and Dashboards cards

The `caseStudies` array powers the **Projects and Dashboards** section. Each project uses:

```js
{
  title: "Life of an Order Dashboard",
  context: "Global CPG client · PwC",
  problem: "Short problem statement...",
  solution: "What was implemented...",
  tools: ["Power BI", "SQL", "Excel"],
  metrics: [
    { value: "+20%", label: "Order visibility", type: "increase", note: "Improved" },
    { value: "-15%", label: "Processing time", type: "reduction", note: "Reduced" },
  ],
  businessMeaning: "Why this mattered to the business...",
}
```

Use `type: "increase"` for positive gains, `type: "reduction"` for metrics that went down in a good way, `type: "saving"` for time saved, `type: "consolidation"` for before-to-after consolidation, and `type: "scale"` for volume/coverage metrics.

---

## Dynamic years of experience

The "Active Professional Experience" hero tile is **computed on every page load** — it never goes stale and does not overstate the Feb-Nov 2025 break.

- It reads `DATA.experiencePeriods`, not a single start date.
- Current periods are `Jan 2023-Feb 2025` and `Dec 2025-Present`.
- On load, `app.js` sums only those active periods and renders the result (e.g. `2.6+` depending on today's date).
- The display format lives in the `formatYears()` helper in `js/app.js`. It currently shows
  **one decimal place**; the `+` comes from the tile's `suffix`. To show a whole number,
  change `.toFixed(1)` to `.toFixed(0)` in `formatYears()` and set `data-decimals` accordingly
  (the tile already reads `dynamicYears` to pick decimals).

To update experience later, add or edit entries in `DATA.experiencePeriods`.

## Side-hustle case studies

The side-hustle section intentionally avoids unverified outcome KPIs. Each venture is shown as
a mini case study with:

- `problem`
- `approach`
- `businessAngle`
- `metricsToTrack`
- `skills`

Only replace `metricsToTrack` with hard KPI results if you have verified numbers you are
comfortable discussing with recruiters.

---

## Swapping the resume PDF

Replace `Utkarsh_Mishra_Resume.pdf` in the project root with your new file. If you rename it,
update `DATA.resumeFile` to match. (Optionally keep it in `assets/` and point `resumeFile` to
`assets/your-file.pdf`.)

---

## Theme

- Dark theme by default with a one-click light/dark toggle in the nav (preference is saved to
  `localStorage`).
- All colors are CSS variables at the top of `css/styles.css` (`--accent`, `--accent-2`,
  `--bg`, etc.). Change them in one place to re-skin the whole site.

## Accessibility / performance notes

- Respects `prefers-reduced-motion` (disables the animated background, count-ups, and reveals).
- Charts render lazily as you scroll, and the background animation pauses when the tab is hidden.
