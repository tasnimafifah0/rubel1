function openVideo(url) {
  const overlay = document.getElementById("overlay");
  const iframe = document.getElementById("video-frame");
  iframe.src = url;
  overlay.style.display = "flex";
}

function closeVideo() {
  const overlay = document.getElementById("overlay");
  const iframe = document.getElementById("video-frame");
  iframe.src = "";
  overlay.style.display = "none";
}
