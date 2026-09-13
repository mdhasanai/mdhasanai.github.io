# mdhasanai.github.io

My personal website — [mdhasanai.github.io](https://mdhasanai.github.io)

Plain HTML, CSS and JavaScript. No framework, no build step, no CI: what's in
`docs/` is what ships. GitHub Pages serves the `docs/` folder of `main`
directly, so merging to `main` publishes the site.

## Layout

Everything served by the site lives under `docs/`:

```
docs/index.html                  Home — hero, stats, research, skills, timeline, projects, publications
docs/projects.html               Project index
docs/projects/<slug>.html        One page per project
docs/publications.html           Publications with abstracts
docs/blog/index.html             Blog index
docs/blog/post-template.html     Starting point for a new post
docs/contact.html                Contact details + Formspree form
docs/404.html                    Not-found page
docs/assets/css/style.css        All styling, tokens at the top
docs/assets/js/main.js           Theme toggle, mobile nav, scroll reveals, form
docs/assets/js/theme-init.js     Runs in <head> to avoid a flash of the wrong theme
docs/img/, docs/projects/*/      Images
```

## Working on it locally

```bash
python3 -m http.server 4321 --directory docs
```

Then open <http://localhost:4321>. There is nothing to compile or watch — edit a
file and refresh.

## Adding a blog post

1. Copy `docs/blog/post-template.html` to `docs/blog/your-post-slug.html`.
2. Edit the `<title>`, the `<meta name="description">`, the `<link rel="canonical">`,
   the heading, the date line and the body inside `<article class="prose">`.
3. In `docs/blog/index.html`, delete the `.empty-state` block and uncomment the
   `.post-list` block below it, then add one `.post-row` link per post.

## Adding a project

1. Copy an existing page in `docs/projects/` and edit its content.
2. Add a matching `.card.proj` block to `docs/projects.html` (and to the Projects
   section of `docs/index.html` if it should appear on the home page).

## Changing the look

Colours, spacing, radii and fonts are all CSS custom properties defined at the
top of `docs/assets/css/style.css` — under `:root` for the dark theme and
`[data-theme="light"]` for the light one. Change them there and the whole site
follows.
