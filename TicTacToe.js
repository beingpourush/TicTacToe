function check() {
  let box = [];
  for (let i = 0; i < 9; i++) box[i] = document.getElementById(i);
  let b = [];
  for (let i = 0; i < 9; i++) b[i] = box[i].innerText;

  if (b[0] && b[0] === b[1] && b[1] === b[2]) {
    box[0].classList.add('winner'); box[1].classList.add('winner'); box[2].classList.add('winner');
    document.querySelector('.message').innerHTML = `<span>${box[0].innerText} Won !!</span>`;
    return b[0] === 'X' ? 'x_win' : 'o_win';
  }
  else if (b[3] && b[3] === b[4] && b[4] === b[5]) {
    box[3].classList.add('winner'); box[4].classList.add('winner'); box[5].classList.add('winner');
    return b[3] === 'X' ? 'x_win' : 'o_win';
  }
  else if (b[6] && b[6] === b[7] && b[7] === b[8]) {
    box[6].classList.add('winner'); box[7].classList.add('winner'); box[8].classList.add('winner');
    return b[6] === 'X' ? 'x_win' : 'o_win';
  }
  else if (b[0] && b[0] === b[3] && b[3] === b[6]) {
    box[0].classList.add('winner'); box[3].classList.add('winner'); box[6].classList.add('winner');
    return b[0] === 'X' ? 'x_win' : 'o_win';
  }
  else if (b[1] && b[1] === b[4] && b[4] === b[7]) {
    box[1].classList.add('winner'); box[4].classList.add('winner'); box[7].classList.add('winner');
    return b[1] === 'X' ? 'x_win' : 'o_win';
  }
  else if (b[2] && b[2] === b[5] && b[5] === b[8]) {
    box[2].classList.add('winner'); box[5].classList.add('winner'); box[8].classList.add('winner');
    return b[2] === 'X' ? 'x_win' : 'o_win';
  }
  else if (b[0] && b[0] === b[4] && b[4] === b[8]) {
    box[0].classList.add('winner'); box[4].classList.add('winner'); box[8].classList.add('winner');
    return b[0] === 'X' ? 'x_win' : 'o_win';
  }
  else if (b[2] && b[2] === b[4] && b[4] === b[6]) {
    box[2].classList.add('winner'); box[4].classList.add('winner'); box[6].classList.add('winner');
    return b[2] === 'X' ? 'x_win' : 'o_win';
  }

  let full = true;
  for (let i = 0; i < 9; i++) {
    if (b[i] === '') { full = false; break; }
  }
  if (full) {
    box.forEach((btn) => btn.classList.add('tie'));
    return 'tie';
  }
  return null;
}

function playGame(choice) {
  let move = choice.innerText === 'X' ? 'X' : 'O';
  document.querySelector('.wrapper').innerHTML = `
    <div class="message"><span>${move}'s turn</span></div>
    <div class="game">
      <div class="row0 row"><button id="0" class="js-cell"></button><button id="1" class="js-cell"></button><button id="2" class="js-cell"></button></div>
      <div class="row1 row"><button id="3" class="js-cell"></button><button id="4" class="js-cell"></button><button id="5" class="js-cell"></button></div>
      <div class="row2 row"><button id="6" class="js-cell"></button><button id="7" class="js-cell"></button><button id="8" class="js-cell"></button></div>
    </div>
    <div><button class="button-newGame" onclick="showFirstScreen()">New Game</button></div>
  `;

  let gameOver = false;
  document.querySelectorAll('.js-cell').forEach((cell) => {
    cell.addEventListener('click', () => {
      if (cell.innerText === '' && !gameOver) {
        cell.innerText = move;
        cell.classList.add('occupied');
        const result = check();
        if (result === 'x_win' || result === 'o_win' || result === 'tie') {
          gameOver = true;
          if (result === 'x_win') document.querySelector('.message').innerHTML = `<span>X is the winner!!!🎉🎊</span>`;
          else if (result === 'o_win') document.querySelector('.message').innerHTML = `<span>O is the winner!!🎉🎊</span>`;
          if (result === 'tie') document.querySelector('.message').innerHTML = `<span>Its a Tie 🤝</span>`;
          return;
        }
        move = move === 'X' ? 'O' : 'X';
        document.querySelector('.message').innerHTML = `${move}'s Turn`;
      }
    });
  });
}

function showFirstScreen() {
  document.querySelector('.wrapper').innerHTML = `
    <div id="question"><span>Select First Move</span></div>
    <div id="options"><button onclick="playGame(this)">X</button><button onclick="playGame(this)">O</button></div>
  `;
}
