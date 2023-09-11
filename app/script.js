let movies = [
  {
    id: "1",
    title: "EndGame",
    releaseYear: "2019",
  },
  {
    id: "2",
    title: "Jailer",
    releaseYear: "2023",
  },
  {
    id: "3",
    title: "Gilli",
    releaseYear: "2004",
  },
  {
    id: "4",
    title: "Enthiran",
    releaseYear: "2010",
  },
  {
    id: "5",
    title: "Sita-Ramam",
    releaseYear: "2022",
  },
  {
    id: "6",
    title: "Viram",
    releaseYear: "2022",
  },
  {
    id: "7",
    title: "Spiderman - Far from home",
    releaseYear: "2021",
  },
  {
    id: "8",
    title: "Don",
    releaseYear: "2022",
  },
  {
    id: "9",
    title: "RRR",
    releaseYear: "2022",
  },
  {
    id: "10",
    title: "KRK",
    releaseYear: "2022",
  },
];
function makeMoviediv(movie) {
  const div = document.createElement("div");
  div.setAttribute("class", "mv-card");
  div.setAttribute("id", `card-${movie.id}`);

  const h2 = document.createElement("h2");
  h2.innerText = movie["title"];

  const h3 = document.createElement("h3");
  h3.innerText = movie.releaseYear;

  const btnremove = document.createElement("button");
  btnremove.setAttribute("id", `btn-${movie.id}`);
  btnremove.innerText = "Delete";
  btnremove.addEventListener("click", function () {
    div.remove();
  });
  div.appendChild(h2);
  div.appendChild(h3);
  div.appendChild(btnremove);

  return div;
}

function appendtoapp(m) {
  const app = document.querySelector("#app");
  app.appendChild(m);
}

for (let i = 0; i < movies.length; i++) {
  let m = makeMoviediv(movies[i]);
  appendtoapp(m);
}
