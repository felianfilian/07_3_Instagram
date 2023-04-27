let posts = [
  {
    name: "post01",
    id: document.getElementById("post01-like"),
    like: 0,
  },
  {
    name: "post02",
    id: document.getElementById("post02-like"),
    like: 0,
  },
];

// let post01Like = document.getElementById("post01-like");
// let post02Like = document.getElementById("post02-like");

function drawPosts() {
  // draw posts
}

function addLike(index) {
  if (posts[index]["like"] == 0) {
    posts[index]["like"] = 1;
    posts[index]["id"].src = "img/icons/heart-full.png";
  } else {
    posts[index]["like"] = 0;
    posts[index]["id"].src = "img/icons/heart.png";
  }
}
