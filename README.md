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

1.I downloaded rubric structure from[Classical-Arcade-Game](https://github.com/udacity/frontend-nanodegree-arcade-game).
2.I extract the zip file into folder.
3.I created  root file `index.html`.
4.creating the classes according to need.
5.matching all links in index.html file.
6.added new information to `app.js` for graphical JavaScript.
7.The file`engine.js` represent the creation of game environment in 2D.
8.The file `resources.js` is used to load all URLs.
9.`style.css` is a cascade style sheet to add styles to html file externally.
10.`image`file contain different sprits and game environmental images. and `README.md` file gives overall discription about the game.
11.for the player sprite I used these functions `render()`,`update()` and `handleInput`.
12.I used scoreClass element for displaying score on the webpage.
13.`score` variable counts the number of times player reached to end stage.
14.I used `time` element and `startTime` function for displaying time on the webpage.
15.`collision` describes about the player touch the Enemy it will occur.
16.`collisiontimes` will counts the number of times collision occur.
17.I used sweetalert2 it will give pop message. under this message we have `restart` button to restart the game. and cancel button used to continue the game.

## Procedure to playing the arcade game

1.user have to play the game with out touching the Enemy.
2.if player moves across the water then automatically score will be incremented.
2.if player touch the Enemy then collision occurs. then collision items will increased. and pop up message will be appear if want to play again at the same stage click the cancel button. if you click
the restart button then the game will started as new.
3.you clicked the cancel button then play again up to score "5".
4.if you reached to score "five" then pop message will appear with time and score.
5.then finally restart the game.

## Goal
user play the game with less time and less collisions to reach the highest score.
