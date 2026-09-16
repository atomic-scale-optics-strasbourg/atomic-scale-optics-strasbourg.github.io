/*
====================================================================
 CONTENT FILE — THIS IS THE FILE YOU WILL MOSTLY EDIT
====================================================================

You can change the text, titles, sections, people, news and papers here.
You normally do NOT need to edit index.html, team.html or news.html.

Rules:
- Put text between quotation marks.
- To add an item, copy one existing item and edit it.
- To remove an item, delete that item.
- For an image, put the image in assets/ and write its path, e.g.
  "assets/guillaume.jpg"

DESIGN (colours/fonts/sizes) is in css/style.css.
*/

const siteContent = {
  // ---------- GENERAL ----------
  siteTitle: "Atomic-scale optics",
  siteSubtitle: "with STM",
  institution: "IPCMS · CNRS & Université de Strasbourg",
  heroTitle: "Light–matter interactions",
  heroTitleAccent: "at the atomic scale.",
  heroText: "Imaging, controlling and understanding quantum phenomena with light and scanning probe microscopy.",
  contactEmail: "guillaume.schull@ipcms.fr",
  contactText: "IPCMS — CNRS & Université de Strasbourg\nCampus de Cronenbourg, Strasbourg, France",

  // ---------- MENU ----------
  navigation: [
    {label: "News", href: "news.html"},
    {label: "Research", href: "research"},
    {label: "Team", href: "team.html"},
    {label: "Publications", href: "publications.html"},
    {label: "Projects", href: "projects"},
    {label: "Contact", href: "index.html#contact"}
  ],

  // ---------- HOMEPAGE SECTION TITLES ----------
  sectionTitles: {
    research: "Research",
    projects: "Selected projects",
    publications: "Latest publications",
    news: "Latest news"
  },

  // ---------- RESEARCH TOPICS ----------
  // Add/remove/reorder topics here. No HTML editing needed.
  research: [
    {title:"Atomic-scale optics", text:"Optical excitation and emission probed with sub-nanometre spatial resolution using STM.", featured:true},
    {title:"Single molecules", text:"Electronic structure, molecular excitations and light–matter interactions at the single-molecule level."},
    {title:"Quantum emitters", text:"Creation, spectroscopy and control of nanoscale light emitters and their environments."},
    {title:"Graphene nanoribbons", text:"Atomically precise nanostructures with engineered electronic and optical properties."},
    {title:"2D materials", text:"Excitons, defects and light–matter interactions in van der Waals materials."},
    {title:"Ultrafast phenomena", text:"Time-resolved approaches to electronic and optical dynamics at the nanoscale."}
  ],

  // ---------- PROJECTS ----------
  projects: [
    {tag:"ERC ADVANCED", title:"AETHER", text:"Exploring light-induced phenomena with ultrafast and tunable optical excitation in cryogenic STM."},
    {tag:"NATIONAL & EUROPEAN", title:"Quantum matter at the atomic scale", text:"From engineered molecular states to nanoscale quantum emitters and 2D materials."}
  ],

  // ---------- NEWS ----------
  // The first item is the newest one. Add new news at the top.
  news: [
    {date:"2026-09-16", title:"Website launch", text:"The new Atomic-scale optics with STM website is online.", image:"", link:""},
    {date:"2026-08-11", title:"New publication in ACS Nano", text:"Our work on length-independent quantum transport through engineered band states has been accepted for publication in ACS Nano.", image:"", link:"https://doi.org/10.1021/acsnano.6c08307"}
  ],

  // ---------- TEAM ----------
  people: {
    permanent: [
      {initials:"GS", name:"Guillaume Schull", role:"Research Director, CNRS", description:"STM · Molecular nanophysics · Light–matter interactions", photo:""},
      {initials:"KK", name:"Katharina Kaiser", role:"Chaire de Professeur Junior, CNRS", description:"Scanning probe microscopy · Molecular photophysics", photo:""},
      {initials:"FS", name:"Fabrice Scheurer", role:"Researcher, CNRS", description:"Theory · Molecular and quantum materials", photo:""},
      {initials:"SJ", name:"Song Jiang", role:"Research Engineer, CNRS", description:"STM · Optical spectroscopy", photo:""}
    ],
    technical: [
      {initials:"VS", name:"Virginie Speisser", role:"Research Engineer, CNRS", description:"", photo:""},
      {initials:"MR", name:"Michelangelo Romeo", role:"Research Engineer, CNRS", description:"", photo:""}
    ],
    postdocs: [
      {initials:"FC", name:"Fabio Costa", role:"Postdoctoral researcher", description:"", photo:""}
    ],
    phd: [
      {initials:"QS", name:"Quentin Stein", role:"PhD student", description:"", photo:""},
      {initials:"MB", name:"Manas Biswas", role:"PhD student", description:"", photo:""},
      {initials:"MC", name:"Marc Chevaleyre", role:"PhD student", description:"", photo:""}
    ]
  },

  // ---------- PUBLICATIONS ----------
  publications: [
    {year:2026, title:"Length-independent quantum transport through engineered band states", authors:"S. Jiang, et al.", journal:"ACS Nano", tags:["Quantum transport","STM","Molecular systems"], toc:"", doi:"10.1021/acsnano.6c08307", hal:""},
  ]
};
