// Define your games here
const games = [
  {
    title: "Google Dino Game",
    url: "https://pwa-dino.github.io/", // replace with real URL
    tag: "Runner",
    description: "Fast-paced endless runner with retro pixel vibes.",
    difficulty: "Easy",
    length: "Quick"
  },
  {
    title: "2048 Classic",
    url: "https://ovolve.github.io/2048-AI/", // replace with real URL
    tag: "Puzzle",
    description: "The classic sliding number puzzle—simple to learn, hard to master.",
    difficulty: "Medium",
    length: "Chill"
  },
  {
    title: "Slope",
    url: "https://gitallgames.github.io/projects/slope/index.html", // replace with real URL
    tag: "Arcade",
    description: "Roll past obstacles as it increasingly gets faster and harder!",
    difficulty: "Medium/Hard",
    length: "Infinite"
  },
   {
    title: "Dino Bridge game",
    url: "https://dinogamemods.org/dino-bridge/", // replace with real URL
    tag: "Arcade",
    description: "Create a brdige to cross multiple towers, but dont make it too long or short!",
    difficulty: "Hard",
    length: "Infinite"
  }
];

const gamesGrid = document.getElementById("gamesGrid");
const searchInput = document.getElementById("searchInput");

function createGameCard(game) {
  const card = document.createElement("article");
  card.className = "game-card";
  card.onclick = () => {
    window.open(game.url, "_blank");
  };

  card.innerHTML = `
    <div class="game-header">
      <div class="game-title">${game.title}</div>
      <span class="game-tag">${game.tag}</span>
    </div>
    <p class="game-desc">${game.description}</p>
    <div class="game-meta">
      <span>⭐ <span>${game.difficulty}</span></span>
      <span>⏱ <span>${game.length}</span></span>
    </div>
    <button class="game-play-btn" type="button">
      ▶ Play
    </button>
  `;

  return card;
}

function renderGames(filter = "") {
  gamesGrid.innerHTML = "";
  const query = filter.toLowerCase().trim();

  const filtered = games.filter((game) => {
    if (!query) return true;
    return (
      game.title.toLowerCase().includes(query) ||
      game.tag.toLowerCase().includes(query) ||
      game.description.toLowerCase().includes(query)
    );
  });

  if (filtered.length === 0) {
    const msg = document.createElement("p");
    msg.style.color = "#9ca3af";
    msg.style.fontSize = "0.9rem";
    msg.textContent = "No games found. Try a different search term.";
    gamesGrid.appendChild(msg);
    return;
  }

  filtered.forEach((game) => {
    gamesGrid.appendChild(createGameCard(game));
  });
}

searchInput.addEventListener("input", (e) => {
  renderGames(e.target.value);
});

// Initial render
renderGames();
