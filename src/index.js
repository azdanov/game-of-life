import GameOfLife from './GameOfLife';

window.gol = {
  game: null,
  interval: null,
  init(rows = 20, columns = 20) {
    this.game = new GameOfLife(rows, columns);
  },
  start() {
    this.interval = setInterval(() => {
      this.game.generate();
      this.game.display();
    }, 1000 / 10);
  },

  stop() {
    clearInterval(this.interval);
  },

  reset() {
    this.game.init();
  },
};
