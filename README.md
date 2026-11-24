# Slint AI plugins

Official Slint plugin and skills for AI coding agents — build, debug, and
review [Slint](https://slint.dev) GUI applications with Claude Code, Cursor,
Codex, and more.

> [!IMPORTANT]
> **This repository is generated.** Its content is published from the
> [`ai-plugins/`](https://github.com/slint-ui/slint/tree/master/ai-plugins)
> directory of the [slint-ui/slint](https://github.com/slint-ui/slint) monorepo
> by a scheduled workflow. **Do not edit files here** — they are overwritten on
> every sync. Open pull requests against the monorepo instead.

## Install

For installation instructions, see the [AI coding assistants
guide](https://slint.dev/docs/slint/guide/tooling/ai-coding-assistants/).

For the nightly plugin, which follows Slint's `master` branch, use
[slint-ui/ai-plugins-nightly](https://github.com/slint-ui/ai-plugins-nightly).

## What's inside

This `claude-directory` branch holds only the Claude Code plugin, at the
repository root, for the Claude plugin directory. It is a copy of the `mcp/`
folder on the default branch, which also holds the marketplace and the plugins
for other agents.

- `.claude-plugin/plugin.json` — the Claude Code plugin manifest.
- `claude-skills/slint/` — the Slint skill for Claude Code.
- `guidance/` — the reference files that the skill links to.
- `slint-preview/` — the MCP server that checks `.slint` files and renders a
  preview.

## License

Same as Slint: `GPL-3.0-only OR LicenseRef-Slint-Royalty-free-2.0 OR
LicenseRef-Slint-Software-3.0`. See the
[monorepo](https://github.com/slint-ui/slint) for details.
