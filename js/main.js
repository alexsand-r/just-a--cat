"use strict";

const myCat = {
  btn: document.getElementById("btn"),
  getCat() {
    return fetch("https://api.thecatapi.com/v1/images/search")
      .then((data) => {
        if (!data.ok) {
          throw new Error(`HTTP error! status: ${data.status}`);
        }
        return data.json();
      })
      .then((cat) => cat);
  },
  async nextCat() {
    try {
      const cat = await myCat.getCat();
      const img = document.getElementById("img");
      img.src = "";
      console.log(cat);
      const linkCat = cat[0].url;
      console.log(linkCat);
      img.src = linkCat;
    } catch (error) {
      // console.error("Ошибка получения данных:", error.message);
      alert("Failed to load cat image. Try again!");
    }
  },
};

myCat.btn.addEventListener("click", myCat.nextCat);
