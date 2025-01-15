const image = document.querySelector("img");
image.addEventListener("load", function () {
  console.log("Image loaded!");
});

const audio = document.querySelector("audio");
audio.addEventListener("pause", function (event) {
  console.log("Paused");
});

const video = document.querySelector("video");

video.addEventListener("time", function (event) {
  console.log("time event:", event);
});

video.addEventListener("pause", function (event) {
  console.log("time event", event);
});
