// let movies = [
//   {
//     id: "1",
//     title: "EndGame",
//     releaseYear: "2019",
//     isEdit: false,
//   },
//   {
//     id: "2",
//     title: "Jailer",
//     releaseYear: "2023",
//     isEdit: false,
//   },
//   {
//     id: "3",
//     title: "Gilli",
//     releaseYear: "2004",
//     isEdit: false,
//   },
//   {
//     id: "4",
//     title: "Enthiran",
//     releaseYear: "2010",
//     isEdit: false,
//   },
//   {
//     id: "5",
//     title: "Sita-Ramam",
//     releaseYear: "2022",
//     isEdit: false,
//   },
//   {
//     id: "6",
//     title: "Vikram",
//     releaseYear: "2022",
//     isEdit: false,
//   },
//   {
//     id: "7",
//     title: "Spiderman - Far from home",
//     releaseYear: "2021",
//     isEdit: false,
//   },
//   {
//     id: "8",
//     title: "Don",
//     releaseYear: "2022",
//     isEdit: false,
//   },
//   {
//     id: "9",
//     title: "RRR",
//     releaseYear: "2022",
//     isEdit: false,
//   },
//   {
//     id: "10",
//     title: "KRK",
//     releaseYear: "2022",
//     isEdit: false,
//   },
// ];
let movies = [];
function makeMoviediv(movie) {
  if (movie.isEdit) {
    const div = document.createElement("div");
    div.setAttribute("class", "mv-card");

    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", `edit-${movie.id}-name`);
    nameInput.setAttribute("id", `edit-${movie.id}-name`);
    nameInput.setAttribute("placeholder", "Enter new movie name");
    nameInput.setAttribute("value", movie.title);

    const yearInput = document.createElement("input");
    yearInput.setAttribute("type", "number");
    yearInput.setAttribute("name", `edit-${movie.id}-year`);
    yearInput.setAttribute("id", `edit-${movie.id}-year`);
    yearInput.setAttribute("placeholder", "Enter new movie year");
    yearInput.setAttribute("value", movie.releaseYear);

    const btnUpdate = document.createElement("button");
    btnUpdate.innerHTML = "UpdateMovie";
    btnUpdate.setAttribute("class", "btnUpdate-class");
    btnUpdate.addEventListener("click", function () {
      const newTitle = document.querySelector(`#edit-${movie.id}-name`).value;
      const newYear = document.querySelector(`#edit-${movie.id}-year`).value;
      const toUpdateIndex = movies.findIndex((m) => m.id == movie.id);
      if (toUpdateIndex != -1) {
        movies[toUpdateIndex]["title"] = newTitle;
        movies[toUpdateIndex]["releaseYear"] = newYear;
        movies[toUpdateIndex]["isEdit"] = false;
        updateUI();
        savetoLocal();
      }
    });
    div.appendChild(nameInput);
    div.appendChild(yearInput);
    div.appendChild(btnUpdate);

    return div;
  } else {
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

    const btnEdit = document.createElement("button");
    btnEdit.setAttribute("class", "btnEdit");
    btnEdit.setAttribute("id", `editbtn-${movie.id}`);
    btnEdit.innerText = "Edit";
    btnEdit.addEventListener("click", function () {
      editMovie(movie["id"]);
    });

    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(btnremove);
    div.appendChild(btnEdit);

    return div;
  }
}
function removeMovie(movieId) {
  const toDeleteIndex = movies.findIndex((movie) => movie.id == movieId);
  movies.splice(toDeleteIndex, 1);
  updateUI();
  savetoLocal();
}

function editMovie(movieId) {
  const toEditIndex = movies.findIndex((movie) => movie.id == movieId);
  if (toEditIndex != -1) {
    movies[toEditIndex]["isEdit"] = true;
    updateUI();
  }
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
  savetoLocal();
}
// refresh
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

//savetolocal
function savetoLocal() {
  const str = JSON.stringify(movies);
  localStorage.setItem("my-movies-list", str);
}

//getfromLocal
function getfromLocal() {
  const str = localStorage.getItem("my-movies-list");
  if (!str) {
    movies = [];
  } else {
    movies = JSON.parse(str);
  }
}

//start of the app
getfromLocal();
updateUI();
hookform();
