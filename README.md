# Game of Life
The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.

__Rules__:

* A live cell with two or three live neighbours lives on to the next generation.

  :large_blue_circle: :arrow_right: :large_blue_circle:

* A dead cell with exactly three live neighbours becomes a live cell.

  :red_circle: :arrow_right: :large_blue_circle:

* A live cell with fewer than two or more than three live neighbours dies.

  :large_blue_circle: :arrow_right: :red_circle:

## Commands

In browser console:

```
gol.init()  - Initialize a board, with optional (x, y)
gol.start() - Start the game
gol.stop()  - Stop the game
gol.reset() - Reset the game
```


## Build

`yarn` to install

__scripts__:

```
yarn build
yarn build:dev
yarn build:watch
```

## Inspiration

[![The Game of Life - The Nature of Code](https://i.ytimg.com/vi/6vX8wT1G798/hqdefault.jpg)](https://www.youtube.com/watch?v=tENSCEO-LEc)

[The Nature of Code book](http://natureofcode.com/)

[The Nature of Code repo](https://github.com/shiffman/The-Nature-of-Code)
