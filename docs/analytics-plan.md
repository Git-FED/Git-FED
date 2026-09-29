# Analytics Plan

Analytics should answer product questions, not create a surveillance layer.

## Questions

1. Which path do first-time visitors choose?
2. Do people reach a project or starter build?
3. Which page causes confusion or support requests?
4. Do supporters understand what their support enables?
5. Which content should be improved or retired?

## Suggested events

| Event | Trigger | Minimal properties | Decision supported |
|---|---|---|---|
| `path_selected` | Visitor clicks Learn, Tools, Build, or Support | `path`, `page` | Improve navigation |
| `project_opened` | Project link selected | `project_id`, `status` | Curate catalog |
| `support_started` | Support area becomes active | `method` | Improve support explanation |
| `submission_started` | Submission form opened | `source_page` | Reduce friction |
| `contact_clicked` | Email link clicked | `channel` | Route support capacity |

Do not collect payment details, message contents, full birth dates, private repository data, or unnecessary identifiers. The age gate should never send a date of birth to analytics.

## Data governance

- Name an analytics owner.
- Document provider, retention, access, and deletion.
- Provide a privacy notice before deploying non-essential tracking.
- Prefer aggregated reporting.
- Disable or defer tracking when consent is required and absent.
