const nav1 = document.querySelector("#nav1");
const nav2 = document.querySelector("#nav2");

function createNav() {
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      objects = data.objects;
      for (let i = 0; i < 6; i++) {
        let obj = objects[i];
        nav1.innerHTML += ` <li ><a href="card.html?id=${obj.id}" class="button button-nav">${obj.name}<img class="mini" alt=${obj.name} src="assets/images/${obj.name}.jpg"/></a></li> `;
      }
      for (let i = 6; i < objects.length; i++) {
        let obj = objects[i];
        nav2.innerHTML += `<li><a href="card.html?id=${obj.id}" class="button">${obj.name}<img class="mini" alt=${obj.name} src="assets/images/${obj.name}.jpg"/></a></li>`;
      }
    });
}
createNav();
