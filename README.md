# Classic Arcade Game Clone Project

## Table of Contents

-   [Instructions](#instructions)
-   [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

## I did following steps to develop the Project

1. I downloaded rubric structure from[Classical-Arcade-Game](https://github.com/udacity/frontend-nanodegree-arcade-game).
2. After downloading the project,  extract the zip file.
3. When i opened `index.html` in browser and i saw the error in console.
4. Creating the `allEnemies[]` array according to need.
5. I given positions of enemy with `locationEnemy[]` array with map function .
6. The file `engine.js` represent the creation of game environment in 2D.
7. The file `resources.js` is used to load all URLs.
8. `images` folder contain different sprits and game environmental images. and `README.md` file gives overall description about the game.
9. For the player sprite I used these functions `render()`,`update()` and `handleInput`.
10. I used `scoreClass` variable by creating div element in `app.js` file for displaying score in the index.html.
11. `score` variable counts the number of times player reached to end(water blocks) stage.
12. I used `timer` variable and `startTime()` function for displaying time in the index.html in browser.
13. `collisiontimes` variable will counts the number of times collisions occur between player and enemy.
14. When collision occurred between player and enemy I used sweetalert2 it will give pop message with `restart` button to restart the game and `cancel` button used to continue the game.

## Procedure to playing the arcade game
- I opened the index.html file in browser.
- User have to reach the water level at top of canvas with out touching the Enemy.
- If player moves across the water then automatically score will be incremented.
- If player touch the Enemy then collision occurs. then collision items will increased and pop up message will be appear if want to play again at the same stage click the cancel button. if you click
the restart button then the game will started as new.
- I clicked the cancel button then play again up to score "5".
- If I reached to score "five" then pop message will appear with time and score.
- Then finally restart the game.

## Goal
user play the game with less time and less collisions to reach the highest score.
