```javascript
function renderNavigation(active="") {
  document.querySelector(".site-nav").innerHTML = siteContent.navigation.map(n =>
    `<a class="${active && n.label.toLowerCase()===active ? "active":""}" href="${n.href}">${n.label}</a>`
  ).join("");
}

function renderHome(){
  document.getElementById("institution").textContent = siteContent.institution;
  document.getElementById("hero-title").innerHTML = `${siteContent.heroTitle}<br><em>${siteContent.heroTitleAccent}</em>`;
  document.getElementById("hero-text").textContent = siteContent.heroText;
  document.getElementById("research-heading").textContent = siteContent.sectionTitles.research;
  document.getElementById("projects-heading").textContent = siteContent.sectionTitles.projects;
  document.getElementById("publications-heading").textContent = siteContent.sectionTitles.publications;

  document.getElementById("research-grid").innerHTML =
    siteContent.research.map((r,i)=>
      `<article class="research-card ${r.featured?"featured":""}">
        <span>${String(i+1).padStart(2,"0")}</span>
        <h3>${r.title}</h3>
        <p>${r.text}</p>
      </article>`
    ).join("");

  document.getElementById("project-row").innerHTML =
    siteContent.projects.map((p,i)=>
      (i?'<div class="project-line"></div>':'')+
      `<div>
        <p class="project-tag">${p.tag}</p>
        <h3>${p.title}</h3>
        <p>${p.text}</p>
      </div>`
    ).join("");

  renderPublications(
    document.getElementById("latest-publications"),
    siteContent.publications.slice(0,3)
  );

  renderNavigation();
}

function personCard(p){
  return `<div class="person">
    <div class="portrait">
      ${p.photo
        ? `<img src="${p.photo}" alt="${p.name}">`
        : p.initials
      }
    </div>

    <div class="person-name-row">
      <h3>${p.name}</h3>
      ${p.homepage
        ? `<a class="person-homepage" href="${p.homepage}" target="_blank" rel="noopener">Homepage ↗</a>`
        : ""
      }
    </div>

    <p>${p.role}</p>

    ${p.description
      ? `<small>${p.description}</small>`
      : ""
    }
  </div>`;
}

function renderTeam(){
  const groups=[
    ["Permanent researchers",siteContent.people.permanent,false],
    ["Technical support",siteContent.people.technical,true],
    ["Postdoctoral researcher",siteContent.people.postdocs,true],
    ["PhD students",siteContent.people.phd,true]
  ];

  document.getElementById("team-content").innerHTML =
    groups.map(g=>
      `<h2 class="subheading">${g[0]}</h2>
       <div class="people-grid ${g[2]?"compact":""}">
         ${g[1].map(personCard).join("")}
       </div>`
    ).join("");

  renderNavigation("team");
}

function renderPublications(target,list){
  target.innerHTML=list.map((p,i)=>`
    <article class="pub-card">

      ${i === 0 || p.year !== list[i - 1].year
        ? `<div class="pub-year">${p.year}</div>`
        : ""
      }

      <div class="pub-main">

        ${p.toc
          ? `<img class="toc" src="${p.toc}" alt="Graphical TOC">`
          : `<div class="toc placeholder"><span>TOC</span></div>`
        }

        <div>

          <h3>${p.title}</h3>

          <p class="authors">${p.authors}</p>

          <p class="journal">${p.journal}</p>

          <div class="pub-links">
            ${p.journalLink
              ? `<a href="${p.journalLink}" target="_blank" rel="noopener">Journal ↗</a>`
              : ""
            }

            ${p.doi
              ? `<a href="https://doi.org/${p.doi}" target="_blank" rel="noopener">DOI ↗</a>`
              : ""
            }

            ${p.hal
              ? `<a href="${p.hal}" target="_blank" rel="noopener">HAL ↗</a>`
              : ""
            }

            ${p.arxiv
              ? `<a href="${p.arxiv}" target="_blank" rel="noopener">arXiv ↗</a>`
              : ""
            }

            ${p.zenodo
              ? `<a href="${p.zenodo}" target="_blank" rel="noopener">Zenodo ↗</a>`
              : ""
            }
          </div>

        </div>
      </div>

    </article>
  `).join("");
}

function newsCard(n){
  const media = n.image
    ? `<img class="news-image" src="${n.image}" alt="">`
    : `<div class="news-image news-placeholder"><span>NEWS</span></div>`;

  const link = n.link
    ? `<a class="news-link" href="${n.link}" target="_blank" rel="noopener">Read more ↗</a>`
    : "";

  return `<article class="news-card">
    ${media}
    <div class="news-card-body">
      <div class="news-date">${formatDate(n.date)}</div>
      <h3>${n.title}</h3>
      <p>${n.text}</p>
      ${link}
    </div>
  </article>`;
}

function formatDate(d){
  const x=new Date(d+"T12:00:00");

  return x.toLocaleDateString("en-GB",{
    day:"2-digit",
    month:"short",
    year:"numeric"
  });
}

function renderNews(target,list=siteContent.news){
  target.innerHTML=list.map(newsCard).join("");
  renderNavigation("news");
}

