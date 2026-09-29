# Design System

## Tokens

```css
--bg: #07070a;
--panel: #11121a;
--cyan: #00f0ff;
--violet: #7000ff;
--text: #f6f7fb;
--muted: #9da4b8;
--line: #262838;
--gold: #ffdd00;
```

## Layout rules

- Use a wide, calm hero with one dominant message.
- Group information into panels only when the panel clarifies a decision.
- Keep supporting copy under 70 characters per line where practical.
- Use asymmetry as emphasis, not as an excuse for unclear hierarchy.
- Keep background effects behind content with `pointer-events: none`.

## Component rules

**Buttons:** one primary action per section; hover movement should be subtle and never shift surrounding layout.

**Cards:** show status and date; do not use a glowing card to make an unverified project look official.

**Navigation:** provide a working destination for every visible link. If a surface is planned but not live, label it as planned.

**Payment:** separate support copy from transaction controls and include a visible route to support.
