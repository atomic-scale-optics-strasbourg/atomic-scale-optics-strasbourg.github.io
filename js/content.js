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
  siteSubtitle: "with SPM",
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
    {
      year: 2026,
      title: "Length-independent quantum transport through engineered band states",
      authors: "S. Jiang, Fabrice Scheurer, Qiang Sun, Pascal Ruffieux, Xuelin Yao, Akimitsu Narita, Klaus Müllen, Roman Fasel, Thomas Frederiksen, Guillaume Schull",
      journal: "ACS Nano 20, 23929 (2026)",
      toc: "assets/Transport 1.png",
      journalLink: "https://pubs.acs.org/doi/10.1021/acsnano.6c08307",
      doi: "10.1021/acsnano.6c08307",
      hal: "https://hal.science/hal-05744254v1/document",
      arxiv: "",
      zenodo: "https://zenodo.org/records/15688130"
    },

    {
      year: 2026,
      title: "Tip-enhanced molecular fluorescence microscopy with atomic-scale resolution",
      authors: "A. Rosławska, K. Kaiser, S. Canola, S. Jiang, J. Aizpurua, T. Neuman, G. Schull",
      journal: "Rev. Mod. Phys. 98, 025007 (2026)",
      toc: "",
      journalLink: "https://journals.aps.org/rmp/",
      doi: "",
      hal: "",
      arxiv: ""
    },

    {
      year: 2025,
      title: "Electrically Driven Cascaded Photon Emission in a Single Molecule",
      authors: "K. Kaiser, A. Rosławska, M. Romeo, F. Scheurer, T. Neuman, G. Schull",
      journal: "Phys. Rev. X 15, 021072 (2025)",
      toc: "",
      journalLink: "https://journals.aps.org/prx/",
      doi: "",
      hal: "",
      arxiv: ""
    },

    {
      year: 2024,
      title: "Fluorescence from a single-molecule probe directly attached to a plasmonic STM tip",
      authors: "N. Friedrich, A. Rosławska, X. Arrieta, K. Kaiser, M. Romeo, E. Le Moal, J. Aizpurua, A. G. Borisov, T. Neuman, G. Schull",
      journal: "Nature Communications 15, 9733 (2024)",
      toc: "",
      journalLink: "https://www.nature.com/articles/s41467-024-54074-8",
      doi: "",
      hal: "",
      arxiv: ""
    },

    {
      year: 2024,
      title: "Exploring the Role of Excited States’ Degeneracy on Vibronic Coupling with Atomic-Scale Optics",
      authors: "K. Vasilev, F. Canola, F. Scheurer, A. Boeglin, F. Lotthammer, F. Chérioux, T. Neuman, G. Schull",
      journal: "ACS Nano 18, 28052 (2024)",
      toc: "",
      journalLink: "https://pubs.acs.org/journal/ancac3",
      doi: "",
      hal: "",
      arxiv: ""
    },

    {
      year: 2024,
      title: "Gating Single-Molecule Fluorescence with Electrons",
      authors: "K. Kaiser, S. Jiang, M. Romeo, F. Scheurer, G. Schull, A. Rosławska",
      journal: "Phys. Rev. Lett. 133, 156902 (2024)",
      toc: "",
      journalLink: "https://journals.aps.org/prl/",
      doi: "",
      hal: "",
      arxiv: ""
    },

    {
      year: 2024,
      title: "Submolecular-scale control of phototautomerization",
      authors: "A. Rosławska, K. Kaiser, M. Romeo, E. Devaux, F. Scheurer, S. Berciaud, T. Neuman, G. Schull",
      journal: "Nature Nanotechnology 19, 738 (2024)",
      toc: "",
      journalLink: "https://www.nature.com/nnano/",
      doi: "",
      hal: "",
      arxiv: ""
    },

    {
      year: 2023,
      title: "Many-Body Description of STM-Induced Fluorescence of Charged Molecules",
      authors: "S. Jiang, T. Neuman, R. Bretel, A. Boeglin, F. Scheurer, E. Le Moal, G. Schull",
      journal: "Phys. Rev. Lett. 130, 126202 (2023)",
      toc: "",
      journalLink: "https://journals.aps.org/prl/",
      doi: "",
      hal: "",
      arxiv: ""
    },

    {
      year: 2023,
      title: "Tip-induced excitonic luminescence nanoscopy of an atomically resolved van der Waals heterostructure",
      authors: "L. E. P. López, A. Rosławska, F. Scheurer, S. Berciaud, G. Schull",
      journal: "Nature Materials 22, 482 (2023)",
      toc: "",
      journalLink: "https://www.nature.com/nmat/",
      doi: "10.1038/s41563-023-01494-4",
      hal: "",
      arxiv: ""
    },

    {
      year: 2023,
      title: "Topologically localized excitons in single graphene nanoribbons",
      authors: "S. Jiang, T. Neuman, A. Boeglin, F. Scheurer, G. Schull",
      journal: "Science 379, 1049 (2023)",
      toc: "",
      journalLink: "https://www.science.org/",
      doi: "",
      hal: "",
      arxiv: ""
    },

    {
      year: 2022,
      title: "Internal Stark effect of single-molecule fluorescence",
      authors: "K. Vasilev, B. Doppagne, T. Neuman, A. Rosławska, H. Bulou, A. Boeglin, F. Scheurer, G. Schull",
      journal: "Nature Communications 13, 677 (2022)",
      toc: "",
      journalLink: "https://www.nature.com/ncomms/",
      doi: "",
      hal: "",
      arxiv: ""
    },

    {
      year: 2022,
      title: "Electroluminescence of monolayer WS2 in a scanning tunneling microscope",
      authors: "R. J. Peña Román, D. Pommier, R. Bretel, L. E. P. Parra López, E. Lorchat, J. Chaste, A. Ouerghi, S. Le Moal, E. Boer-Duchemin, G. Dujardin, A. G. Borisov, L. F. Zagonel, G. Schull, S. Berciaud, E. Le Moal",
      journal: "Phys. Rev. B 22, 9244 (2022)",
      toc: "",
      journalLink: "https://journals.aps.org/prb/",
      doi: "",
      hal: "",
      arxiv: ""
    },

    {
      year: 2022,
      title: "Tip-Induced and Electrical Control of the Photoluminescence Yield of Monolayer WS2",
      authors: "R. J. Peña Román, R. Bretel, D. Pommier, L. E. P. Parra López, E. Lorchat, E. Boer-Duchemin, G. Dujardin, A. G. Borisov, L. F. Zagonel, G. Schull, S. Berciaud, E. Le Moal",
      journal: "Nano Lett. 22, 9244 (2022)",
      toc: "",
      journalLink: "https://pubs.acs.org/journal/nalefd",
      doi: "",
      hal: "",
      arxiv: ""
    },

    {
      year: 2022,
      title: "Mapping Lamb, Stark, and Purcell Effects at a Chromophore-Picocavity Junction with Hyper-Resolved Fluorescence Microscopy",
      authors: "A. Rosławska, T. Neuman, B. Doppagne, A. G. Borisov, M. Romeo, F. Scheurer, J. Aizpurua, G. Schull",
      journal: "Phys. Rev. X 12, 011012 (2022)",
      toc: "",
      journalLink: "https://journals.aps.org/prx/",
      doi: "",
      hal: "",
      arxiv: ""
    }
     {
    year: 2021,
    title: "Energy funnelling within multichromophore architectures monitored with subnanometre resolution",
    authors: "S. Cao, A. Rosławska, B. Doppagne, M. Romeo, M. Féron, F. Chérioux, H. Bulou, F. Scheurer, G. Schull",
    journal: "Nature Chemistry 13, 766 (2021)",
    journalLink: "https://www.nature.com/articles/s41557-021-00697-z",
    doi: "10.1038/s41557-021-00697-z"
  },

  {
    year: 2020,
    title: "Single-molecule tautomerization tracking through space- and time-resolved fluorescence spectroscopy",
    authors: "B. Doppagne, T. Neuman, R. Soria-Martinez, L. E. Parra López, H. Bulou, M. Romeo, S. Berciaud, F. Scheurer, J. Aizpurua, G. Schull",
    journal: "Nature Nanotechnology 15, 207 (2020)",
    journalLink: "https://www.nature.com/articles/s41565-019-0620-x",
    doi: "10.1038/s41565-019-0620-x"
  },

  {
    year: 2019,
    title: "Scanning Tunneling Microscope-Induced Excitonic Luminescence of a Two-Dimensional Semiconductor",
    authors: "D. Pommier, R. Bretel, L. E. Parra López, F. Fabre, A. Mayne, E. Boer-Duchemin, G. Dujardin, G. Schull, S. Berciaud, E. Le Moal",
    journal: "Phys. Rev. Lett. 123, 027402 (2019)",
    journalLink: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.123.027402",
    doi: "10.1103/PhysRevLett.123.027402"
  },

  {
    year: 2018,
    title: "Electrofluorochromism at the single-molecule level",
    authors: "B. Doppagne, M. C. Chong, H. Bulou, A. Boeglin, F. Scheurer, G. Schull",
    journal: "Science 361, 251–255 (2018)",
    journalLink: "https://www.science.org/doi/10.1126/science.aat1603",
    doi: "10.1126/science.aat1603"
  },
  {
    year: 2018,
    title: "Fano Description of Single-Hydrocarbon Fluorescence Excited by a Scanning Tunneling Microscope",
    authors: "J. Kröger, B. Doppagne, F. Scheurer, G. Schull",
    journal: "Nano Letters 18, 3407–3413 (2018)",
    journalLink: "https://pubs.acs.org/doi/10.1021/acs.nanolett.8b00304",
    doi: "10.1021/acs.nanolett.8b00304"
  },
  {
    year: 2018,
    title: "Bright Electroluminescence from Single Graphene Nanoribbon Junctions",
    authors: "M. C. Chong, N. Afshar-Imani, F. Scheurer, C. Cardoso, A. Ferretti, D. Prezzi, G. Schull",
    journal: "Nano Letters 18, 175–181 (2018)",
    journalLink: "https://pubs.acs.org/doi/10.1021/acs.nanolett.7b03797",
    doi: "10.1021/acs.nanolett.7b03797"
  },

  {
    year: 2017,
    title: "Conductance and Electroluminescence from On-surface Synthesized Molecular Wires",
    authors: "M. C. Chong, G. Schull",
    journal: "Reference Module in Chemistry, Molecular Sciences and Chemical Engineering (2017)"
  },
  {
    year: 2017,
    title: "Imaging isodensity contours of molecular states with STM",
    authors: "G. Reecht, B. W. Heinrich, H. Bulou, F. Scheurer, L. Limot, G. Schull",
    journal: "New Journal of Physics 19, 113033 (2017)",
    journalLink: "https://iopscience.iop.org/article/10.1088/1367-2630/aa969a",
    doi: "10.1088/1367-2630/aa969a"
  },
  {
    year: 2017,
    title: "Le fil moléculaire qui éclaire comme une LED",
    authors: "F. Scheurer, G. Schull",
    journal: "La Recherche 552 (2017)"
  },
  {
    year: 2017,
    title: "Vibronic Spectroscopy with Submolecular Resolution from STM-Induced Electroluminescence",
    authors: "B. Doppagne, M. C. Chong, E. Lorchat, S. Berciaud, M. Romeo, H. Bulou, A. Boeglin, F. Scheurer, G. Schull",
    journal: "Phys. Rev. Lett. 118, 127401 (2017)",
    journalLink: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.118.127401",
    doi: "10.1103/PhysRevLett.118.127401"
  },

  {
    year: 2016,
    title: "Ordinary and Hot Electroluminescence from Single-Molecule Devices: Controlling the Emission Color by Chemical Engineering",
    authors: "M. C. Chong, L. Sosa-Vargas, H. Bulou, A. Boeglin, F. Scheurer, F. Mathevet, G. Schull",
    journal: "Nano Letters 16, 6480–6484 (2016)",
    journalLink: "https://pubs.acs.org/doi/10.1021/acs.nanolett.6b02997",
    doi: "10.1021/acs.nanolett.6b02997"
  },
  {
    year: 2016,
    title: "A close-up view of coupled molecules",
    authors: "G. Schull",
    journal: "Nature 531, 587 (2016)"
  },
  {
    year: 2016,
    title: "Launching plasmons with molecules",
    authors: "G. Schull",
    journal: "Nature Photonics 10, 208 (2016)"
  },
  {
    year: 2016,
    title: "Single molecules as whispering galleries for electrons",
    authors: "G. Reecht, H. Bulou, G. Schull, F. Scheurer",
    journal: "J. Phys. Condens. Matter 28, 165001 (2016)",
    journalLink: "https://iopscience.iop.org/article/10.1088/0953-8984/28/16/165001",
    doi: "10.1088/0953-8984/28/16/165001"
  },
  {
    year: 2016,
    title: "Narrow-Line Single-Molecule Transducer between Electronic Circuits and Surface Plasmons",
    authors: "M. C. Chong, G. Reecht, H. Bulou, A. Boeglin, F. Scheurer, F. Mathevet, G. Schull",
    journal: "Phys. Rev. Lett. 116, 036802 (2016)",
    journalLink: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.116.036802",
    doi: "10.1103/PhysRevLett.116.036802"
  },

  {
    year: 2015,
    title: "Pulling and Stretching a Molecular Wire to Tune its Conductance",
    authors: "G. Reecht, H. Bulou, F. Scheurer, V. Speisser, F. Mathevet, C. González, Y. J. Dappe, G. Schull",
    journal: "J. Phys. Chem. Lett. 6, 2987–2992 (2015)",
    journalLink: "https://pubs.acs.org/doi/10.1021/acs.jpclett.5b01283",
    doi: "10.1021/acs.jpclett.5b01283"
  },

  {
    year: 2014,
    title: "Une diode électroluminescente à une molécule",
    authors: "G. Schull, F. Scheurer, G. Reecht",
    journal: "Photoniques 72, 42–46 (2014)"
  },
  {
    year: 2014,
    title: "Emission de lumière sous la pointe d'un microscope à effet tunnel",
    authors: "G. Schull, E. Boer-Duchemin, G. Comtet, G. Dujardin",
    journal: "Reflets de la Physique 38, 4 (2014)"
  },
  {
    year: 2014,
    title: "Structure and dynamics of C60 molecules on Au(111)",
    authors: "H. Shin, A. Schwarze, R. D. Diehl, K. Pussi, A. Colombier, E. Gaudry, J. Ledieu, G. M. McGuirk, L. N. Serkovic Loli, V. Fournée, L. L. Wang, G. Schull, R. Berndt",
    journal: "Phys. Rev. B 89, 245428 (2014)",
    journalLink: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.89.245428",
    doi: "10.1103/PhysRevB.89.245428"
  },
  {
    year: 2014,
    title: "Chemical control of electrical contact to sp2 carbon atoms",
    authors: "T. Frederiksen, G. Foti, F. Scheurer, V. Speisser, G. Schull",
    journal: "Nature Communications 5, 3659 (2014)",
    journalLink: "https://www.nature.com/articles/ncomms4659",
    doi: "10.1038/ncomms4659"
  },
  {
    year: 2014,
    title: "Electroluminescence of a Polythiophene Molecular Wire Suspended between a Metallic Surface and the Tip of a Scanning Tunneling Microscope",
    authors: "G. Reecht, F. Scheurer, V. Speisser, Y. J. Dappe, F. Mathevet, G. Schull",
    journal: "Phys. Rev. Lett. 112, 047403 (2014)",
    journalLink: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.112.047403",
    doi: "10.1103/PhysRevLett.112.047403"
  },
  ]
};
