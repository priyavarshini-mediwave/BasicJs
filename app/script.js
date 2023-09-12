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
    title: "Vikram",
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
  btnremove.setAttribute("class", "btn-remove");
  btnremove.setAttribute("id", `btn-${movie.id}`);
  btnremove.innerText = "Delete";
  btnremove.addEventListener("click", function () {
    removeMovie(movie["id"]);
  });

  div.appendChild(h2);
  div.appendChild(h3);
  div.appendChild(btnremove);

  return div;
}
function removeMovie(movieId) {
  const toDeleteIndex = movies.findIndex((movie) => movie.id == movieId);
  movies.splice(toDeleteIndex, 1);
  updateUI();
}

function appendtoapp(m) {
  const app = document.querySelector("#app");
  app.appendChild(m);
}

function clearapp() {
  const app = document.querySelector("#app");
  app.innerHTML = "";
}
//updateUI
function updateUI() {
  clearapp();
  for (let i = 0; i < movies.length; i++) {
    let m = makeMoviediv(movies[i]);
    appendtoapp(m);
  }
}
//addMovie
function addMovie(movie) {
  movies.push(movie);

  updateUI();
}
function refresh() {
  let n = document.querySelector("#movie-name");
  let y = document.querySelector("#year");
  n.value = "";
  y.value = "";
}
//hookform
function hookform() {
  const form = document.querySelector("#Add-movie-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.querySelector("#movie-name").value;
    let year = document.querySelector("#year").value;

    const movie = {
      id: new Date().getTime(),
      title: name,
      releaseYear: year,
    };
    addMovie(movie);
    refresh();
  });
}

//start of the app
updateUI();
hookform();
