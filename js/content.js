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
    {tag:"ERC ADVANCED", title:"AETHER", text:"Exploring light-induced phenomena with ultrafast and tunable optical excitation in cryogenic STM."}
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
      {initials:"GS", name:"Guillaume Schull", role:"Research Director, CNRS", description:"STM · Molecular nanophysics · Light–matter interactions", photo:"assets/gs.png",homepage: "https://..."},
      {initials:"KK", name:"Katharina Kaiser", role:"Chaire de Professeur Junior, CNRS", description:"STM/AFM · Molecular photophysics", photo:"assets/KK.png",homepage: "https://..."},
      {initials:"FS", name:"Fabrice Scheurer", role:"Researcher, CNRS", description:"Synchrotron · Molecular optics and magnetism", photo:"assets/FS.png",homepage: "https://..."},
     {initials:"SJ", name:"Song Jiang", role:"Research Engineer, CNRS", description:"STM · Graphen NanoRibbons . Optical spectroscopy", photo:"assets/SJ.png",homepage: "https://..."}
    ],
    technical: [
     
      {initials:"VS", name:"Virginie Speisser", role:"Research Engineer, CNRS", description:"", photo:"assets/VS.png",homepage: "https://..."},
      {initials:"MR", name:"Michelangelo Romeo", role:"Research Engineer, CNRS", description:"", photo:"assets/MR.png",homepage: "https://..."}
    ],
    postdocs: [
      {initials:"FC", name:"Fabio Costa", role:"Postdoctoral researcher", description:"", photo:"assets/FC.png",homepage: "https://..."}
    ],
    phd: [
      {initials:"QS", name:"Quentin Stein", role:"PhD student", description:"", photo:"assets/QS.png",homepage: "https://..."},
      {initials:"MB", name:"Manas Biswas", role:"PhD student", description:"", photo:"assets/MB.png",homepage: "https://..."},
     {initials:"VF", name:"Victor Feitosa", role:"PhD student", description:"", photo:"assets/VF.png",homepage: "https://..."}, 
     {initials:"MC", name:"Marc Chevaleyre", role:"PhD student", description:"", photo:"assets/MC.png",homepage: "https://..."}
    ]
  },

  publications: [

  {
    year: 2026,
    title: "Length-Independent Quantum Transport through Engineered Band States in Graphene Nanoribbon Junctions",
    authors: "Song Jiang, Fabrice Scheurer, Qiang Sun, Pascal Ruffieux, Xuelin Yao, Akimitsu Narita, Klaus Müllen, Roman Fasel, Thomas Frederiksen, Guillaume Schull",
    journal: "ACS Nano 20, 23929–23940 (2026)",
    journalLink: "https://pubs.acs.org/doi/10.1021/acsnano.6c08307",
    toc: "assets/Transport 1.png",
    hal: "https://hal.science/hal-05744254v1/document",
    arxiv: "https://arxiv.org/abs/2208.03145",
    zenodo: "https://zenodo.org/records/15688130"
  },

  {
    year: 2026,
    title: "Tip-enhanced molecular fluorescence microscopy with atomic-scale resolution",
    authors: "Anna Rosławska, Katharina Kaiser, Sofia Canola, Song Jiang, Fabrice Scheurer, Javier Aizpurua, Tomáš Neuman, Guillaume Schull",
    journal: "Reviews of Modern Physics 98, 025007 (2026)",
    journalLink: "https://journals.aps.org/rmp/abstract/10.1103/pqvw-kv92",
    toc: "assets/rmp.png",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2025,
    title: "Electrically Driven Cascaded Photon Emission in a Single Molecule",
    authors: "Katharina Kaiser, Anna Rosławska, Michelangelo Romeo, Tomáš Neuman, Guillaume Schull",
    journal: "Physical Review X 15, 021072 (2025)",
    journalLink: "https://journals.aps.org/prx/abstract/10.1103/PhysRevX.15.021072",
    toc: "assets/cascade.png",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2024,
    title: "Fluorescence from a single-molecule probe directly attached to a plasmonic STM tip",
    authors: "Niklas Friedrich, Anna Rosławska, Xabier Arrieta, Katharina Kaiser, Michelangelo Romeo, Eric Le Moal, Fabrice Scheurer, Javier Aizpurua, Andrei G. Borisov, Tomáš Neuman, Guillaume Schull",
    journal: "Nature Communications 15, 9733 (2024)",
    journalLink: "https://www.nature.com/articles/s41467-024-53707-2",
    toc: "assets/ptcdatip.png",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2024,
    title: "Exploring the Role of Excited States’ Degeneracy on Vibronic Coupling with Atomic-Scale Optics",
    authors: "Konstantin Vasilev, Francesca Canola, Fabrice Scheurer, Alex Boeglin, Felix Lotthammer, Franck Chérioux, Tomáš Neuman, Guillaume Schull",
    journal: "ACS Nano 18, 28052–28061 (2024)",
    journalLink: "https://doi.org/10.1021/acsnano.4c07136",
    toc: "assets/kiril2.png",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2024,
    title: "Gating Single-Molecule Fluorescence with Electrons",
    authors: "Katharina Kaiser, Song Jiang, Michelangelo Romeo, Fabrice Scheurer, Guillaume Schull, Anna Rosławska",
    journal: "Physical Review Letters 133, 156902 (2024)",
    journalLink: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.133.156902",
    toc: "assets/gating.png",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2024,
    title: "Submolecular-scale control of phototautomerization",
    authors: "Anna Rosławska, Katharina Kaiser, Michelangelo Romeo, Eloïse Devaux, Fabrice Scheurer, Stéphane Berciaud, Tomáš Neuman, Guillaume Schull",
    journal: "Nature Nanotechnology 19, 738–743 (2024)",
    journalLink: "https://www.nature.com/articles/s41565-024-01622-4",
    toc: "assets/phototo.png",
    hal: "",
    arxiv: "https://arxiv.org/abs/2305.13157",
    zenodo: "https://doi.org/10.5281/zenodo.10547040"
  },

  {
    year: 2023,
    title: "Many-Body Description of STM-Induced Fluorescence of Charged Molecules",
    authors: "Song Jiang, Tomáš Neuman, Rémi Bretel, Alex Boeglin, Fabrice Scheurer, Eric Le Moal, Guillaume Schull",
    journal: "Physical Review Letters 130, 126202 (2023)",
    journalLink: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.130.126202",
    toc: "assets/many.png",
    hal: "",
    arxiv: "https://arxiv.org/abs/2210.00126",
    zenodo: ""
  },

  {
    year: 2023,
    title: "Tip-induced excitonic luminescence nanoscopy of an atomically resolved van der Waals heterostructure",
    authors: "L. E. Parra López, Anna Rosławska, Fabrice Scheurer, Stéphane Berciaud, Guillaume Schull",
    journal: "Nature Materials 22, 482–488 (2023)",
    journalLink: "https://www.nature.com/articles/s41563-023-01494-4",
    toc: "assets/2D.png",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2023,
    title: "Topologically localized excitons in single graphene nanoribbons",
    authors: "Song Jiang, Tomáš Neuman, Alex Boeglin, Fabrice Scheurer, Guillaume Schull",
    journal: "Science 379, 1049–1054 (2023)",
    journalLink: "https://www.science.org/doi/10.1126/science.abq6948",
    toc: "assets/GNR.png",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2022,
    title: "Internal Stark effect of single-molecule fluorescence",
    authors: "Konstantin Vasilev, Benjamin Doppagne, Tomáš Neuman, Anna Rosławska, Hervé Bulou, Alex Boeglin, Fabrice Scheurer, Guillaume Schull",
    journal: "Nature Communications 13, 677 (2022)",
    journalLink: "https://www.nature.com/articles/s41467-022-28225-0",
    toc: "",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2022,
    title: "Electroluminescence of monolayer WS2 in a scanning tunneling microscope: Effect of bias polarity on spectral and angular distribution of emitted light",
    authors: "R. J. Peña Román, D. Pommier, R. Bretel, L. E. Parra López, E. Lorchat, J. Chaste, A. Ouerghi, S. Le Moal, E. Boer-Duchemin, G. Dujardin, A. G. Borisov, L. F. Zagonel, G. Schull, S. Berciaud, E. Le Moal",
    journal: "Physical Review B 106, 165414 (2022)",
    journalLink: "https://journals.aps.org/prb/",
    toc: "",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2022,
    title: "Mapping Lamb, Stark, and Purcell Effects at a Chromophore-Picocavity Junction with Hyper-Resolved Fluorescence Microscopy",
    authors: "Anna Rosławska, Tomáš Neuman, Benjamin Doppagne, Andrei G. Borisov, Michelangelo Romeo, Fabrice Scheurer, Javier Aizpurua, Guillaume Schull",
    journal: "Physical Review X 12, 011012 (2022)",
    journalLink: "https://journals.aps.org/prx/abstract/10.1103/PhysRevX.12.011012",
    toc: "",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2021,
    title: "Energy funnelling within multichromophore architectures monitored with subnanometre resolution",
    authors: "S. Cao, Anna Rosławska, Benjamin Doppagne, Michelangelo Romeo, M. Féron, F. Chérioux, H. Bulou, F. Scheurer, Guillaume Schull",
    journal: "Nature Chemistry 13, 766–770 (2021)",
    journalLink: "https://www.nature.com/articles/s41557-021-00728-x",
    toc: "",
    hal: "https://hal.science/hal-03221348",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2020,
    title: "Single-molecule tautomerization tracking through space- and time-resolved fluorescence spectroscopy",
    authors: "Benjamin Doppagne, Tomáš Neuman, R. Soria-Martinez, L. E. Parra López, Hervé Bulou, Michelangelo Romeo, Stéphane Berciaud, Fabrice Scheurer, Javier Aizpurua, Guillaume Schull",
    journal: "Nature Nanotechnology 15, 207–211 (2020)",
    journalLink: "https://www.nature.com/articles/s41565-019-0618-4",
    toc: "",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2019,
    title: "Scanning Tunneling Microscope-Induced Excitonic Luminescence of a Two-Dimensional Semiconductor",
    authors: "D. Pommier, R. Bretel, L. E. Parra López, F. Fabre, A. Mayne, E. Boer-Duchemin, G. Dujardin, G. Schull, S. Berciaud, E. Le Moal",
    journal: "Physical Review Letters 123, 027402 (2019)",
    journalLink: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.123.027402",
    toc: "",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2018,
    title: "Electrofluorochromism at the single-molecule level",
    authors: "Benjamin Doppagne, Michael C. Chong, Hervé Bulou, Alex Boeglin, Fabrice Scheurer, Guillaume Schull",
    journal: "Science 361, 251–255 (2018)",
    journalLink: "https://www.science.org/doi/10.1126/science.aat1603",
    toc: "",
    hal: "",
    arxiv: "https://arxiv.org/abs/1802.00764",
    zenodo: ""
  },

  {
    year: 2018,
    title: "Fano Description of Single-Hydrocarbon Fluorescence Excited by a Scanning Tunneling Microscope",
    authors: "Jörg Kröger, Benjamin Doppagne, Fabrice Scheurer, Guillaume Schull",
    journal: "Nano Letters 18, 3407–3413 (2018)",
    journalLink: "https://pubs.acs.org/doi/10.1021/acs.nanolett.8b00304",
    toc: "",
    hal: "",
    arxiv: "https://arxiv.org/abs/1801.07143",
    zenodo: ""
  },

  {
    year: 2018,
    title: "Bright Electroluminescence from Single Graphene Nanoribbon Junctions",
    authors: "Michael C. Chong, Nasima Afshar-Imani, Fabrice Scheurer, Claudia Cardoso, Andrea Ferretti, Deborah Prezzi, Guillaume Schull",
    journal: "Nano Letters 18, 175–181 (2018)",
    journalLink: "https://pubs.acs.org/doi/10.1021/acs.nanolett.7b03797",
    toc: "",
    hal: "",
    arxiv: "https://arxiv.org/abs/1802.10335",
    zenodo: ""
  },

  {
    year: 2017,
    title: "Conductance and Electroluminescence from On-surface Synthesized Molecular Wires",
    authors: "Michael C. Chong, Guillaume Schull",
    journal: "Reference Module in Chemistry, Molecular Sciences and Chemical Engineering (2017)",
    journalLink: "",
    toc: "",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2017,
    title: "Imaging isodensity contours of molecular states with STM",
    authors: "G. Reecht, B. Heinrich, H. Bulou, F. Scheurer, L. Limot, G. Schull",
    journal: "New Journal of Physics 19, 113033 (2017)",
    journalLink: "https://iopscience.iop.org/article/10.1088/1367-2630/aa969a",
    toc: "",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2017,
    title: "Le fil moléculaire qui éclaire comme une LED",
    authors: "Fabrice Scheurer, Guillaume Schull",
    journal: "La Recherche 552 (2017)",
    journalLink: "",
    toc: "",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2017,
    title: "Vibronic Spectroscopy with Submolecular Resolution from STM-Induced Electroluminescence",
    authors: "Benjamin Doppagne, Michael C. Chong, E. Lorchat, Stéphane Berciaud, Michelangelo Romeo, Hervé Bulou, Alex Boeglin, Fabrice Scheurer, Guillaume Schull",
    journal: "Physical Review Letters 118, 127401 (2017)",
    journalLink: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.118.127401",
    toc: "",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2016,
    title: "Ordinary and Hot Electroluminescence from Single-Molecule Devices: Controlling the Emission Color by Chemical Engineering",
    authors: "Michael C. Chong, L. Sosa-Vargas, Hervé Bulou, Alex Boeglin, Fabrice Scheurer, F. Mathevet, Guillaume Schull",
    journal: "Nano Letters 16, 6480–6484 (2016)",
    journalLink: "https://pubs.acs.org/doi/10.1021/acs.nanolett.6b02997",
    toc: "",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2016,
    title: "A close-up view of coupled molecules",
    authors: "Guillaume Schull",
    journal: "Nature 531, 587 (2016)",
    journalLink: "https://www.nature.com/articles/531587a",
    toc: "",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2016,
    title: "Launching plasmons with molecules",
    authors: "Guillaume Schull",
    journal: "Nature Photonics 10, 208 (2016)",
    journalLink: "",
    toc: "",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2016,
    title: "Single molecules as whispering galleries for electrons",
    authors: "G. Reecht, H. Bulou, G. Schull, F. Scheurer",
    journal: "Journal of Physics: Condensed Matter 28, 165001 (2016)",
    journalLink: "https://iopscience.iop.org/article/10.1088/0953-8984/28/16/165001",
    toc: "",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2016,
    title: "Narrow-Line Single-Molecule Transducer between Electronic Circuits and Surface Plasmons",
    authors: "Michael C. Chong, G. Reecht, H. Bulou, A. Boeglin, F. Scheurer, F. Mathevet, Guillaume Schull",
    journal: "Physical Review Letters 116, 036802 (2016)",
    journalLink: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.116.036802",
    toc: "",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2015,
    title: "Pulling and Stretching a Molecular Wire to Tune its Conductance",
    authors: "G. Reecht, H. Bulou, F. Scheurer, V. Speisser, F. Mathevet, C. Gonzalez, Y. J. Dappe, Guillaume Schull",
    journal: "Journal of Physical Chemistry Letters 6, 2987–2992 (2015)",
    journalLink: "https://pubs.acs.org/doi/10.1021/acs.jpclett.5b01283",
    toc: "",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2014,
    title: "Une diode électroluminescente à une molécule",
    authors: "Guillaume Schull, Fabrice Scheurer, Gaël Reecht",
    journal: "Photoniques 72, 42–46 (2014)",
    journalLink: "https://www.photoniques.com/",
    toc: "",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2014,
    title: "Emission de lumière sous la pointe d’un microscope à effet tunnel",
    authors: "Guillaume Schull, E. Boer-Duchemin, G. Comtet, G. Dujardin",
    journal: "Reflets de la Physique 38, 4 (2014)",
    journalLink: "https://www.refletsdelaphysique.fr/",
    toc: "",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2014,
    title: "Chemical control of electrical contact to sp2 carbon atoms",
    authors: "Thomas Frederiksen, G. Foti, Fabrice Scheurer, V. Speisser, Guillaume Schull",
    journal: "Nature Communications 5, 3659 (2014)",
    journalLink: "https://www.nature.com/articles/ncomms4659",
    toc: "",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2014,
    title: "Electroluminescence of a Polythiophene Molecular Wire Suspended between a Metallic Surface and the Tip of a Scanning Tunneling Microscope",
    authors: "Gaël Reecht, Fabrice Scheurer, Virginie Speisser, Yannick J. Dappe, Fabrice Mathevet, Guillaume Schull",
    journal: "Physical Review Letters 112, 047403 (2014)",
    journalLink: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.112.047403",
    toc: "",
    hal: "",
    arxiv: "",
    zenodo: ""
  },


  {
    year: 2013,
    title: "Oligothiophene nano-rings as electron resonators for whispering gallery modes",
    authors: "G. Reecht, H. Bulou, F. Scheurer, V. Speisser, B. Carrière, F. Mathevet, Guillaume Schull",
    journal: "Physical Review Letters 110, 056802 (2013)",
    journalLink: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.110.056802",
    toc: "",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

  {
    year: 2011,
    title: "Charge Injection through Single and Double Carbon Bonds",
    authors: "Guillaume Schull, Yannick J. Dappe, César González, Hervé Bulou, Richard Berndt",
    journal: "Nano Letters 11, 3142–3146 (2011)",
    journalLink: "https://pubs.acs.org/doi/10.1021/nl201185y",
    toc: "",
    hal: "",
    arxiv: "",
    zenodo: ""
  },

]
};
