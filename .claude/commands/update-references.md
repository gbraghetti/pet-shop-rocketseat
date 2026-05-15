Analyze the current state of this project and update the memory files at `C:\Users\usert\.claude\projects\c--workspace-c-next-projects-pet-shop\memory\`.

Follow these steps:

1. **Read the current MEMORY.md index** at the memory path above to see what already exists.

2. **Explore the project** to detect what has changed or is new:
   - `package.json` — dependencies and scripts
   - `prisma/schema.prisma` — database models
   - `src/app/` — routes and pages
   - `src/components/` — UI components
   - `src/lib/` — utilities
   - `src/styles/` or `src/app/globals.css` — design tokens
   - `docker-compose.yml` — infrastructure
   - Root config files (`next.config.ts`, `components.json`, etc.)

3. **Compare** what you find against existing memory entries. For each memory file:
   - If still accurate → leave it alone
   - If outdated → update the file with current state
   - If new significant info exists → create a new memory file

4. **Memory files to maintain** (create or update as needed):
   - `project_overview.md` — stack, purpose, current stage
   - `project_database.md` — Prisma models, migrations, Docker DB setup
   - `project_routes.md` — app routes, pages, layouts
   - `project_components.md` — UI components available
   - `project_design_system.md` — CSS variables, color tokens, typography
   - `project_tooling.md` — scripts, lint, format, git hooks, lefthook

5. **Update MEMORY.md** index to reflect all current files (one line per entry, under 150 chars each).

Use the `Write` tool to save each memory file with proper frontmatter:

```
---
name: <name>
description: <one-line description>
type: project
---
```

Report a short summary of what was updated, created, or left unchanged.
