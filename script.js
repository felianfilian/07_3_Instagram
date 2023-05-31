let posts = [
  {
    name: "post01",
    img: "img/post-img/img07.jpg",
    likeId: document.getElementById("post01-like"),
    starId: document.getElementById("post01-star"),
    like: 0,
    star: 0,
    commentsId: document.getElementById("comments01"),
    comments: [],
  },
  {
    name: "post02",
    img: "img/post-img/img07.jpg",
    likeId: document.getElementById("post02-like"),
    starId: document.getElementById("post02-star"),
    like: 0,
    star: 0,
    commentsId: document.getElementById("comments02"),
    comments: [],
  },
];

// let post01Like = document.getElementById("post01-like");
// let post02Like = document.getElementById("post02-like");

function addLike(index) {
  if (posts[index]["like"] == 0) {
    posts[index]["like"] = 1;
    posts[index]["likeId"].src = "img/icons/heart-full.png";
  } else {
    posts[index]["like"] = 0;
    posts[index]["likeId"].src = "img/icons/heart.png";
  }
}

function addComment(index) {
  posts[index]["commentsId"].innerHTML += `
  <p>Hallo Welt</p>
  `;
}

function addStar(index) {
  if (posts[index]["star"] == 0) {
    posts[index]["star"] = 1;
    posts[index]["starId"].src = "img/icons/star-full.png";
  } else {
    posts[index]["star"] = 0;
    posts[index]["starId"].src = "img/icons/star.png";
  }
}

function sendMessage() {
  alert("Message send");
}
