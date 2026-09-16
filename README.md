# Atomic-scale optics with STM — editable version

## The file you should edit
Open **`js/content.js`**.

This is the control panel for the website. You can manually change:

- navigation labels and links
- hero title and presentation text
- research section title
- research topics: add, remove or reorder them
- project titles and descriptions
- news: add, remove or reorder news items
- team members, roles, descriptions and photos
- publications, tags, TOCs, DOI and HAL links
- contact email/address

### Adding a research topic
Copy an existing object in `research`, then change `title` and `text`.

### Adding news
Copy an existing object in `news` and change `date`, `title`, `text`, `image` and `link`.
Put new items at the top so the newest appears first.

### Adding a photo or graphical TOC
Put the image in `assets/` and use a path such as:
`photo: "assets/guillaume.jpg"`
`toc: "assets/toc_znpc.jpg"`

## Changing the design
Open **`css/style.css`**. The main colours are at the beginning:

`--ink` = black
`--red` = accent red
`--purple` = purple accent
`--paper` = background

You normally do not need to touch the HTML files.

## Website structure
- `index.html` = home
- `news.html` = News
- `team.html` = Team
- `publications.html` = Publications
- `js/content.js` = content you edit
- `js/site.js` = rendering logic (normally leave this alone)
- `css/style.css` = visual design
- `assets/` = images

## GitHub Pages
Upload the whole folder to a GitHub repository, then enable GitHub Pages from Settings → Pages → Deploy from branch.
