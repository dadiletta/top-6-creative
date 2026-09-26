# Top 6

Six of something you are genuinely expert in, on a page you assemble.

**See it running: <https://dadiletta.github.io/top-6-creative/>** — that page is
built from this branch, so it is exactly what you get when you copy it.

**Treat it like a portfolio template you found online.** It ships with six
photos in its portfolio grid, so your page is a Top 6. Working inside a
template's shape, instead of fighting it, is how you build fast. The six NASA
photos are placeholders, like the words: replace them with photos of your six.

The form is fixed so everyone's craft is comparable. **The subject is yours**,
so the expertise is real. Six best breakfasts in Cleveland. Six worst bus stops.
Six albums nobody asked about. Six trails, six recipes, six pieces of gear, six
arguments.

Pick something you actually know. A page about nothing looks fine no matter what
you do to it, which means you learn nothing from it.

```
index.html      nav · hero · the six · method · footer
styles.css      your palette, your type, the hover and reveal rules
js/reveal.js    the navbar, the entries arriving, number one's countdown
img/            the six photos and the tab icon
AGENTS.md       what AI help may do on this project (read it)
```

## Start here

1. When VS Code offers to install this folder's recommended extensions, say
   yes. They are **Live Server**, which runs the page, and **Live Share**,
   which is how you show it to your teacher when it misbehaves — click **Live
   Share** in the status bar, paste the link it copies into Google Chat, and go
   back to work.
2. Open `index.html` with **Live Server** — the **Go Live** button in the
   status bar. Not by double-clicking: see Unit 4 for why `file://` is not a
   website.
3. Change `data-theme="retro"` on the `<html>` tag to something else. Do this
   **first**. It takes five seconds and it is the fastest way to find the mood
   you want. Try `synthwave`, `forest`, `cupcake`, `dracula`, `nord`, `autumn`,
   `lofi`, `night`. All 35 are at
   [daisyui.com/docs/themes](https://daisyui.com/docs/themes/).
4. Replace the headline, the six entries and the six photos with your own.
   Every photo you keep or add gets a line in the footer's credits.
5. Commit as you go. Push at least once a session — a commit is local until you
   push it, and **pushed is submitted**.

## How the effects work

Read `js/reveal.js`; it is short and it explains itself. The short version:

- **The navbar** is see-through over the hero and solid once you scroll past
  it.
- **Each entry arrives** as it scrolls into view, fanned out by a few
  milliseconds so they do not all land at once.
- **Number one counts down** from 06 to 01 as it arrives, then a band of light
  sweeps across it once. Delete `data-count-from` in `index.html` to turn the
  count off.
- **The footer year** keeps itself current: `data-year` on the `<span>`.
- **Nothing is hidden by CSS alone.** The script puts a class on `<html>`
  first, and only that class turns on the rules that hide things. So if the
  script is blocked or broken you get the whole page with no flourish — never a
  blank one. **That is the part worth copying into your own work.**
- **None of the movement runs** for a reader whose system asks for reduced
  motion. Add anything new you animate to that block at the foot of
  `styles.css`.

## Things that will bite you

- **Six entries that are not parallel.** If one has a photo they all do; if one
  has two sentences they all do. Parallel is what makes it read as a ranking
  instead of six paragraphs.
- **Deleting structure to "simplify".** `entry-body` inside `entry-card`,
  `shot-cap` inside `shot` — these look like extra wrappers and are not. Remove
  one and the component stops laying out.
- **Number one is deliberately different** — wider, its photo beside its words,
  the only one wearing the primary color. That is the point of a ranking. Six
  cards where one is *slightly* bigger reads as a mistake instead.
- **The sticky navbar covering your anchors.** Handled by `scroll-margin-top`
  in `styles.css`. Change the navbar's height, change that number.
- **`aspect-ratio` on the photo slot** keeps the grid tidy whatever shape your
  photos are. They get cropped to fit; that is `object-fit: cover` doing its
  job, so keep the subject near the middle of each one.

## Check your own work before you hand it in

This is the list your work is read against. Tick it yourself first — auditing a
page against a written spec is a graded skill in its own right (`WD3.B`), and it
is much better to find these than to have them found.

### Structure

- [ ] Every section is the element it should be — `nav`, `header`, `main`,
      `footer`, `article` — not a `div` wearing a class.
- [ ] The headings outline the page. Read `h1`, `h2`, `h3` alone, in order: one
      `h1`, no levels skipped.
- [ ] Every placeholder is gone. Search the file for `Your`, `20XX`, `[your`
      and `______`.
- [ ] There is **one** obvious call to action, and its label says what happens.
      Not "Click here".

### Craft

- [ ] Your palette is recorded as a comment block at the top of `styles.css`,
      with a mood sentence and a job for each color.
- [ ] Two type faces at most: one for headings, one for body.
- [ ] Body text against its background is at least **4.5:1**. Check it — do not
      guess. If you changed `--color-primary`, check white on it too.
- [ ] One column on a phone, more on wider screens. Check at 380px, 768px and
      full width. Nothing scrolls sideways at 380px.

### Honesty

- [ ] Every image has `alt` text that says what the image is FOR. Decorative
      images take an empty `alt=""`.
- [ ] Every image has its creator, source and license in the footer. **If you
      cannot write that line, you are not allowed to use it.**
- [ ] The page still works with JavaScript off. Nothing should disappear.
- [ ] If you used AI to generate any part of this, say so and say which part.
      That is the professional norm and it costs you nothing. `AGENTS.md`
      says what AI may help with, and when.
- [ ] It works from a fresh clone — no absolute paths to your own disk.
- [ ] It is **pushed**.

## Credits

Component classes are [daisyUI](https://daisyui.com/) by Pouya Saadeghi (MIT),
on [Tailwind CSS](https://tailwindcss.com/) (MIT). Both load from a CDN via the
three tags in `<head>`.

The six photos are NASA's and in the public domain; each is credited in the
page's footer.

Everything else here was written for this course, MIT licensed. See `LICENSE`.
