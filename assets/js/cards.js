let id = query("id");

function init() {
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let object = "";
      if (id && id != 0) {
        object = data.objects.filter((object) => object.id == id)[0];
      }

      renderObject(object);
    });
}

function renderObject(object) {
  const name = document.querySelector("#name");
  const image = document.querySelector("img");
  const title = document.querySelector("#title");
  const texte = document.querySelector("#backSide");

  let thisPara = object.texts;

  name.innerHTML = `${object.name}`;
  image.src = "assets/images/" + object.name + ".jpg";
  image.alt = object.name + " " + object.title;
  title.innerHTML = `${object.title}`;

  for (let i = 0; i < thisPara.length; i++) {
    let para = thisPara[i];

    texte.innerHTML += `<p>${para.text}</p>
`;
  }
}

init();

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", close);
function close() {
  if (id < 7) {
    window.location.href = "/#menu1";
  } else window.location.href = "/#menu2";
}

const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

if (id == 1) {
  previous.style.opacity = 0;
}
if (id == 12) {
  next.style.opacity = 0;
}

previous.addEventListener("click", previousObj);
next.addEventListener("click", nextObj);

let nextId = parseInt(id) + 1;
nextId = nextId.toString();
let prevId = parseInt(id) - 1;
function previousObj() {
  window.location.href = "/card.html?id=" + prevId;
}
function nextObj() {
  window.location.href = "/card.html?id=" + nextId;
}
