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
const titles = document.querySelectorAll(".title");
const searchBar = document.getElementById("search-bar");
const articles = document.querySelectorAll("article");
const tags = document.querySelectorAll(".tag");

searchBar.addEventListener("keyup", () => {
  const searchValue = searchBar.value;
  for (let i = 0; i < articles.length; i++) {
    let titleContent = titles[i].innerText;
    let corresponde = titleContent.toLowerCase().indexOf(searchValue) >= 0;
    articles[i].style.display = corresponde ? "" : "none";
  }
});
