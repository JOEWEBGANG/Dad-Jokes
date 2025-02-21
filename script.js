const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();

  jokeEl.textContent = data.joke;
}

generateJoke();

// listeners
jokeBtn.addEventListener('click', generateJoke);

// scroll progress bar
function updateScrollBar() {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollPercent = (scrollTop / scrollHeight) * 100;

  document.querySelector(".progress-bar").style.width = scrollPercent + "%";
}

window.addEventListener("scroll", updateScrollBar);