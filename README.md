# mdhasanai.github.io

My personal website — [mdhasanai.github.io](https://mdhasanai.github.io)

Plain HTML, CSS and JavaScript. No framework, no build step: what's in the repo
is what ships. Every push to `main` publishes the root of the repo to the
`gh-pages` branch via GitHub Actions.

## Layout

```
index.html                  Home — hero, stats, research, skills, timeline, projects, publications
projects.html               Project index
projects/<slug>.html        One page per project
publications.html           Publications with abstracts
blog/index.html             Blog index
blog/post-template.html     Starting point for a new post
contact.html                Contact details + Formspree form
404.html                    Not-found page
assets/css/style.css        All styling, tokens at the top
assets/js/main.js           Theme toggle, mobile nav, scroll reveals, form
assets/js/theme-init.js     Runs in <head> to avoid a flash of the wrong theme
img/, projects/*/           Images
```

## Working on it locally

```bash
python3 -m http.server 4321
```

Then open <http://localhost:4321>. There is nothing to compile or watch — edit a
file and refresh.

## Adding a blog post

1. Copy `blog/post-template.html` to `blog/your-post-slug.html`.
2. Edit the `<title>`, the `<meta name="description">`, the `<link rel="canonical">`,
   the heading, the date line and the body inside `<article class="prose">`.
3. In `blog/index.html`, delete the `.empty-state` block and uncomment the
   `.post-list` block below it, then add one `.post-row` link per post.

## Adding a project

1. Copy an existing page in `projects/` and edit its content.
2. Add a matching `.card.proj` block to `projects.html` (and to the Projects
   section of `index.html` if it should appear on the home page).

## Changing the look

Colours, spacing, radii and fonts are all CSS custom properties defined at the
top of `assets/css/style.css` — under `:root` for the dark theme and
`[data-theme="light"]` for the light one. Change them there and the whole site
follows.
