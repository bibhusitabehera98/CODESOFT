window.onload = function () {
  fillProgressBar("html-bar", 90); // HTML - 90%
  fillProgressBar("css-bar", 90); // CSS - 80%
  fillProgressBar("js-bar", 80); // JavaScript - 70%
  fillProgressBar("bootstrap-bar", 80); // JavaScript - 70%
  fillProgressBar("react-bar", 70); // JavaScript - 70%
};

function fillProgressBar(barId, percentage) {
  let progressBar = document.getElementById(barId);
  progressBar.style.width = percentage + "%";
  progressBar.textContent = percentage + "%";
}
