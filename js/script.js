// Like
const likes = document.querySelectorAll(".like");

for (let like of likes) {
  like.addEventListener("click", () => liked(like));
}

const liked = (item) => {
  if (item.classList.contains("far")) {
    item.classList.remove("far");
    item.classList.add("fas");
  } else {
    item.classList.remove("fas");
    item.classList.add("far");
  }
};

// Animation
if (window.SimpleAnime) {
  new SimpleAnime();
}

// Search
const input = document.getElementById("search-bar");
const articles = document.querySelectorAll("article");
const titles = document.querySelectorAll(".title");
const tags = document.querySelectorAll(".tag");

function search() {
  input.addEventListener("keyup", () => {
    const value = input.value.toLowerCase();

    for (let i = 0; i < articles.length; i++) {
      const title = titles[i].innerText.toLowerCase();
      let corresponde = title.toLowerCase().indexOf(value) >= 0;
      articles[i].style.display = corresponde ? "" : "none";
    }
  });
}
search();
