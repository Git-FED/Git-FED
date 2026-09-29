# FedPromptly Master Build Prompt

Copy this prompt into an AI website builder or coding assistant when generating or extending the site.

```text
Role: Act as an elite creative frontend developer, product writer, and UI/UX designer working on FedPromptly.

Product identity: FedPromptly is a place where people turn ideas into software. It connects practical learning, useful tools, open-source development, experiments, and community pathways.

Goal: Build a fully responsive, immersive, accessible promotional experience that makes the next step obvious to a stranger within 30 seconds.

Visual direction:
- Deep obsidian background #07070a.
- Neon cyan #00f0ff and soft violet #7000ff as restrained accents.
- Plus Jakarta Sans for authoritative headings and Inter for readable body copy.
- Asymmetrical layout with a large left-aligned hero, glass panels, thin borders, generous negative space, and a subtle grid/particle atmosphere.
- Background effects must use pointer-events: none and must never block content.

Required page structure:
1. Sticky navigation with FedPromptly mark and working anchor links.
2. Hero with the exact core message: “A place where people turn ideas into software.”
3. Four pathways: Learn, Tools, Build, Support.
4. Selected project showcase rendered from data/portfolio.json.
5. Build-in-public explanation and project status labels.
6. Support section with separate one-time support and subscription areas.
7. Footer with careers@fedpromptly.com, support@fedpromptly.com, business@fedpromptly.com, contact@fedpromptly.com.

Interaction:
- Use lightweight CSS and vanilla JavaScript.
- Add reveal, hover, and card tilt effects only as progressive enhancement.
- Respect prefers-reduced-motion.
- Do not make essential content depend on JavaScript.
- Make the mobile navigation usable and keyboard accessible.

Payment boundary:
- Any PayPal or Stripe subscription embed must be placed behind the approved age/eligibility experience.
- The age gate is not a security boundary or legal compliance solution.
- Do not collect or transmit full birth dates to analytics.
- Include clear support, privacy, terms, refund, and cancellation destinations once verified.

Copy constraints:
- Do not invent customers, user counts, revenue, partnerships, security certifications, launch dates, or product availability.
- Label concepts, experiments, planned work, and live work differently.
- Prefer plain language: “Start with a small build” is better than “Unlock your limitless potential.”

Output:
- Give a file tree first.
- Then provide complete files, not pseudocode.
- Include a validation checklist and list every placeholder that still requires owner confirmation.
```
