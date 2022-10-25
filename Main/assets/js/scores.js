function printHighscores() {
  // Either gets scores from localstorage or sets to an empty array
  var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];

  // Sorts highscores by score property in descending order
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  for (var i = 0; i < highscores.length; i += 1) {
    // creates li tag for each highscore
    var liTag = document.createElement('li');
    liTag.textContent = highscores[i].initials + ' - ' + highscores[i].score;

    // Displays on page
    var olEl = document.getElementById('highscores');
    olEl.appendChild(liTag);
  }
}

function clearHighscores() {
  window.localStorage.removeItem('highscores');
  window.location.reload();
}

document.getElementById('clear').onclick = clearHighscores;

// Runs function when page loads
printHighscores();
