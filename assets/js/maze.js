(function() {
            // canvas variables
            let canvas = document.querySelector("canvas");
            let drawingSurface = canvas.getContext("2d");

            // to display timer and collected bones
            let timerOutput = document.querySelector("#timerOutput");
            let collectOutput = document.querySelector("#collectOutput");

            // After I managed to get the maze to display, Mutty and the camera to move and scroll;
            // and the colision js to make the walls solid, I am now attemping to get the levels up and running.
            // Game Map Levels
            // Arrays to store the levelmaps and objects upon loading
            let levelMaps = [];
            let levelGameObjects = [];

            // To get the levels to load in order
            // A level counter
            let levelCounter = 0;

            // A level shnge counter
            // This is from "foundation game design " that initally I will need to get the levels working but
            // I would like a different transition between levels
            //let levelChangeTimer = 0;
            // now that I have the modal level transition I can comment this out

            
            // game map variables
            // level 1 is map0
            let map0 = [
                [2, 2, 2, 2, 2, 2, 2],
                [2, 1, 1, 1, 2, 1, 2],
                [2, 1, 2, 1, 2, 1, 2],
                [2, 1, 2, 1, 1, 1, 2],
                [2, 1, 2, 2, 2, 1, 2],
                [2, 1, 1, 1, 2, 1, 1],
                [2, 2, 2, 2, 2, 2, 2]
            ];

            // push map0 to the levelMaps array
            levelMaps.push(map0);

            // game object variable
            // level 1 objects is also 0
            let gameObjects0 = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 3, 0, 0, 0, 5, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 5, 0, 4, 0],
                [0, 0, 0, 0, 0, 0, 0]
            ];

            //Push gameObjects0 into the levelGameObjects array
            levelGameObjects.push(gameObjects0);

            // now to add the 2 levels that I have ready
            // level 2 will be map1
            let map1 = [
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
                [2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2],
                [2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2],
                [2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 1, 2],
                [2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
                [2, 1, 2, 1, 2, 2, 2, 2, 1, 1, 1, 2],
                [2, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 2],
                [2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 2],
                [2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
                [2, 1, 2, 2, 1, 2, 1, 1, 1, 2, 1, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
            ];

            //Push map1 into the leveMaps array
            levelMaps.push(map1);

            // I have yet to complete gameObjects array yet so will leave this empty, 
            // array completed now adding
            let gameObjects1 = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 3, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ];

            //Push gameObjects1 into the levelGameObjects array
            levelGameObjects.push(gameObjects1);

            // Level3 will be map2
            let map2 = [
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2],
                [2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2],
                [2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                [2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 1, 2],
                [2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
                [2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2],
                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 2],
                [2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 1, 1, 1, 2, 1, 2],
                [2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2],
                [2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 1, 2, 1, 1, 1, 2],
                [2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 2, 2, 1, 2],
                [2, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 1, 1, 2, 1, 2],
                [2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 2, 2, 1, 2, 1, 2],
                [2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 2, 2, 2, 1, 2, 1, 1, 1, 2, 1, 2],
                [2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 2, 2, 1, 2],
                [2, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2],
                [2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2],
                [2, 1, 2, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2],
                [2, 1, 2, 1, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2],
                [2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
            ];

            // push map2 into the levelMaps array
            levelMaps.push(map2);

            // once again I have yet to complete this 
            // completed adding
            // gameObjects map
            let gameObjects2 = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 5, 0],
                [0, 5, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ];

            //Push gameObjects2 into the levelGameObjects array
            levelGameObjects.push(gameObjects2);


            //map codes
            const EMPTY = 0;
            const FLOOR  = 1;
            const WALL = 2;
            const MUTTY = 3;
            const GATE = 4;
            const BONE = 5;

            // the size of each tile cell, this is what I need to be able to adapt make this work
            const SIZE = 64;
            // lets see if that works?



            let mutty = null;

            // forgot to include the sprite objects
            let spriteObject = {
                sourceX: 0,
                sourceY: 0,
                sourceWidth: 64,
                sourceHeight: 64,
                height: 64,
                width: 64,
                x: 0,
                y: 0,
                vx: 0,
                vy: 0,
                visible: true,

                //Getters
                centerX: function(){
                    return this.x + (this.width / 2);
                },
                centerY: function(){
                    return this.y + (this.height / 2);
                },
                halfWidth: function(){
                    return this.width / 2;
                },
                halfHeight: function(){
                    return this.height / 2;
                },
            };

            //--- The gameTimer object

            let gameTimer = {
                time: 0,
                interval: undefined,
  
                start: function(){
                    let self = this;
	                this.interval = setInterval(function(){self.tick();}, 1000);
                },
                tick: function(){
                    this.time++;
                },
                stop: function(){
                    clearInterval(this.interval);
                },
                reset: function(){
                    this.time = 0;
                }
            };


            // the number of columns on the tilesheet,  not sure about how this works yet but will observe
            let tilesheetColumns = 5;

            // the arrays for the game objects
            let sprites = [];
            let walls = [];
            let gates = [];
            let bones = [];


            // now to start the rendering proccess 
            let assetsToLoad = [];
            let assetsLoaded = 0;

            // load the tilesheet image
            let image = new Image();
            image.addEventListener("load", loadHandler, false);
            image.src = "assets/images/mutty-tile-4.png";
            assetsToLoad.push(image);

            // to test the rendering I will contstruct basic loadHandler, buildMap and render functions.
            // This did not work so I am adapting the update from the book to the update function.
            

            //setting up variables for collecting bones
            let bonesCollected = 0;

            //variables to display timer and collected bones
            let timeDisplay = 00;
            let collectedMessage = "You have Collected " + bonesCollected + " Bones.";
            
            //Game states
            const LOADING = 0;
            const BUILD_MAP = 1;
            const PLAYING = 2;
            const OVER = 3;
            const LEVEL_COMPLETE = 4;
            let gameState = LOADING;

            //--- The gameWorld object
            let gameWorld = {
                x: 0,
                y: 0,
                width: levelMaps[levelCounter][0].length * SIZE,
                height: levelMaps[levelCounter].length * SIZE,
            };

            //--- The camera object
            let camera = {
                x: 0,
                y: 0,
                width: canvas.width,
                height: canvas.height,
  
                //The camera's inner scroll boundaries
                rightInnerBoundary: function(){
                    return this.x + (this.width / 2) + (this.width / 4);
                },
                leftInnerBoundary: function(){
                    return this.x + (this.width / 2) - (this.width / 4);
                },
                topInnerBoundary: function(){
                    return this.y + (this.height / 2) - (this.height / 4);
                },
                bottomInnerBoundary: function(){
                    return this.y + (this.height / 2) + (this.height / 4);
                }
            };

            //Center the camera over the gameWorld
            camera.x = (gameWorld.x + gameWorld.width / 2) - camera.width / 2;
            camera.y = (gameWorld.y + gameWorld.height / 2) - camera.height / 2;

            //Arrow key codes
            let UP = 38;
            let DOWN = 40;
            let RIGHT = 39;
            let LEFT = 37;
                        
            //Directions
            let moveUp = false;
            let moveDown = false;
            let moveRight = false;
            let moveLeft = false;

            //Add keyboard listeners
            window.addEventListener("keydown", function(event){
                switch(event.keyCode){
                    case UP:
	                    moveUp = true;
	                    break;
	  
	                case DOWN:
	                    moveDown = true;
	                    break;
	    
	                case LEFT:
	                    moveLeft = true;
	                    break;  
	    
	                case RIGHT:
	                    moveRight = true;
	                break; 
                }
            }, false);

            window.addEventListener("keyup", function(event){
                switch(event.keyCode){
                    case UP:
	                    moveUp = false;
	                    break;
	  
	                case DOWN:
	                    moveDown = false;
	                    break;
	    
	                case LEFT:
	                    moveLeft = false;
	                    break;  
	    
	                case RIGHT:
	                    moveRight = false;
	                    break; 
                }
            }, false);

            //OK now that we have Mutty moving time to activate the buttons
            
            let btnUP = document.getElementById("up");
            let btnDOWN = document.getElementById("down");
            let btnRIGHT = document.getElementById("right");
            let btnLEFT = document.getElementById("left");

            btnUP.addEventListener("mousedown", function(event){
                moveUp = true;
                
            }, false);

            btnUP.addEventListener("mouseup", function(event){
                moveUp = false;
                
            }, false);

            btnDOWN.addEventListener("mousedown", function(event){
                moveDown = true;
                
            }, false);

            btnDOWN.addEventListener("mouseup", function(event){
                moveDown = false;
                
            }, false);

            btnRIGHT.addEventListener("mousedown", function(event){
                moveRight = true;
                
            }, false);

            btnRIGHT.addEventListener("mouseup", function(event){
                moveRight = false;
                
            }, false);

            btnLEFT.addEventListener("mousedown", function(event){
                moveLeft = true;
                
            }, false);

            btnLEFT.addEventListener("mouseup", function(event){
                moveLeft = false;
                
            }, false);
            

            //Start the game animation loop
            update();

            function update()
            { 
                //The animation loop
                //setTimeout(update, 16);
                requestAnimationFrame(update, canvas);

                //Change what the game is doing based on the game state
                    switch(gameState)
                        {
                            case LOADING:
                                console.log("loading...");
                                break;
      
                            case BUILD_MAP:
                                buildMap(levelMaps[levelCounter]);
                                buildMap(levelGameObjects[levelCounter]);
                                //createOtherObjects();
                                gameState = PLAYING;
                                break;
    
                            case PLAYING:
                                playGame();
                                break;

                            case LEVEL_COMPLETE:
                                levelComplete();
                                break;

                            case OVER:
                                endGame();
                                break;
                        }

                // and call the render function
                render();  
            }

            function levelComplete(){
                //Make the leveCompleteDisplay visible
                //levelCompleteDisplay.visible = true;
                /*
  
                //Update the timer that changes the level by one
                levelChangeTimer++;
  
                //Load the next level after 60 frames
                if(levelChangeTimer === 60){
                    loadNextLevel();
                }*/

                // changing put the timer with a modal
                // creating the modal vatiable
                let levelModal = document.getElementById("endLevelModal");
                
                //creating the next level button
                let levelReady = document.getElementById("nextLevel");

                // calling the level transition function
                transLevel();

                //this should open the modal
                function transLevel() {
                    levelModal.style.display = "block";
                }

                levelReady.onclick = function() {
                    levelModal.style.display = "none";
                    loadNextLevel()
                }

  
                function loadNextLevel(){
                    //Reset the timer that changes the level
                    //levelChangeTimer = 0;
		
	                //Update the levelCounter by 1
                    levelCounter++;
  
                    //Load the next level if there is one or end the game if there isn't
                    if(levelCounter < levelMaps.length){
                        //Clear the arrays of objects
      
	                    sprites = [];
	                    walls = [];
	                    gates = [];
	                    bones = [];
	    
                        //Reset any gameVariables
                        bonesCollected = 0;

                        gameWorld.width = levelMaps[levelCounter][0].length * SIZE;
                        gameWorld.height = levelMaps[levelCounter].length * SIZE;
	    
                        //Re-center the camera
                        camera.x = (gameWorld.x + gameWorld.width / 2) - camera.width / 2;
                        camera.y = (gameWorld.y + gameWorld.height / 2) - camera.height / 2;
	    
                        //Build the maps for the next level
                        gameState = BUILD_MAP;
                    } else {
                        gameState = OVER;
                    }
                }
            }

            function loadHandler() {
                assetsLoaded++;
                if(assetsLoaded === assetsToLoad.length) {
                    // when assetsLoaded is finished remove the load handler
                    image.removeEventListener("load", loadHandler, false);

                    // this is to test if my idea will render calling the buildmap function twice to be able to render it
                    //that didn't works so back to basics
                    //Build the level 
                    gameState = BUILD_MAP;
                    

                                      
                }
            }

            // the buildMap function
            function buildMap(levelMap) {
                for(let row = 0; row < levelMaps[levelCounter].length; row++) {
                    for(let column = 0; column < levelMaps[levelCounter][0].length; column++) {
                        let currentTile = levelMap[row][column];
                        if(currentTile !== EMPTY) {
                            // find the tile's x and y position on the tile sheet
                            let tilesheetX = Math.floor((currentTile - 1) % tilesheetColumns) * SIZE;
                            let tilesheetY = Math.floor((currentTile - 1) / tilesheetColumns) * SIZE;

                            switch(currentTile) {
                                case FLOOR: 
                                    let floor = Object.create(spriteObject);
                                    floor.sourceX = tilesheetX;
                                    floor.sourceY = tilesheetY;
                                    floor.x = column * SIZE;
                                    floor.y = row * SIZE;
                                    sprites.push(floor);
                                    break;
                                
                                case WALL:
                                    let wall = Object.create(spriteObject);
                                    wall.sourceX = tilesheetX;
                                    wall.sourceY = tilesheetY;
                                    wall.x = column * SIZE;
                                    wall.y = row *  SIZE;
                                    sprites.push(wall);
                                    walls.push(wall);
                                    break;
                                
                                case MUTTY:
                                    mutty = Object.create(spriteObject);
                                    mutty.sourceX = tilesheetX;
                                    mutty.sourceY = tilesheetY;
                                    mutty.x = column * SIZE;
                                    mutty.y = row * SIZE;
                                    sprites.push(mutty);
                                    break;
                                
                                case GATE:
                                    let gate = Object.create(spriteObject);
                                    gate.sourceX = tilesheetX;
                                    gate.sourceY = tilesheetY;
                                    gate.x = column * SIZE;
                                    gate.y = row * SIZE;
                                    sprites.push(gate);
                                    gates.push(gate);
                                    break;
                                
                                case BONE:
                                    let bone = Object.create(spriteObject);
                                    bone.sourceX = tilesheetX;
                                    bone.sourceY = tilesheetY;
                                    bone.x = column * SIZE;
                                    bone.y = row * SIZE;
                                    sprites.push(bone);
                                    bones.push(bone);
                                    break;
                            }
                        }
                    }
                }

                //Display the gameTimer
                timeDisplay.text = gameTimer.time;
  
                //This modification adds an extra "0" to the time
                //if the time is less than 10
                if(gameTimer.time < 10){
                    timeDisplay.text = "0" + gameTimer.time;
                }
            }

            function playGame(){ 
                //Up
                if(moveUp && !moveDown){
                    mutty.vy = -4;
                }
                //Down
                if(moveDown && !moveUp){
                    mutty.vy = 4;
                }
                //Left
                if(moveLeft && !moveRight){
                    mutty.vx = -4;
                }
                //Right
                if(moveRight && !moveLeft){
                    mutty.vx = 4;
                }

                //Set the alien's velocity to zero if none of the keys are being pressed
                if(!moveUp && !moveDown){
                    mutty.vy = 0;
                }
                if(!moveLeft && !moveRight){
                    mutty.vx = 0;
                }
  
                //Move mutty and set its screen boundaries
                mutty.x = Math.max(64, Math.min(mutty.x + mutty.vx, gameWorld.width - mutty.width - 64)); 
                mutty.y = Math.max(64, Math.min(mutty.y + mutty.vy, gameWorld.height - mutty.height - 64));
                
                //Collisions with walls
                for(let i = 0; i < walls.length; i++){
                    blockRectangle(mutty, walls[i]);
                }

                //collecting bones
                //collisions with bones turns bone.visible = false
                for(let i = 0; i < bones.length; i++){
                    let bone = bones[i];
                    if(hitTestCircle(mutty, bone) && bone.visible){
                        bone.visible = false;
                        bonesCollected++;

                        //I need to display bones collected here.
                        //this will be a html display outlet
                        collectedMessage = "You have Collected " + bonesCollected + " Bones."                }
                }

                //Check for collisions with gate
                for(var i = 0; i < gates.length; i++){ 
                    let gate = gates[i];
                    if(hitTestCircle(mutty, gate)){
                        gameState = LEVEL_COMPLETE;
                    }
                }
                
                //Scroll the camera
                if(mutty.x < camera.leftInnerBoundary()){
                    camera.x = Math.floor(mutty.x - (camera.width / 6));
                }
                if(mutty.y < camera.topInnerBoundary()){
                    camera.y = Math.floor(mutty.y - (camera.height / 6));
                }
                if(mutty.x + mutty.width > camera.rightInnerBoundary()){
                    camera.x = Math.floor(mutty.x + mutty.width - (camera.width / 6 * 3));
                }
                if(mutty.y + mutty.height > camera.bottomInnerBoundary()){
                    camera.y = Math.floor(mutty.y + mutty.height - (camera.height / 6 * 3));
                }

                
                //The camera's gameWorld boundaries
                if(camera.x < gameWorld.x){
                    camera.x = gameWorld.x;
                }
                if(camera.y < gameWorld.y){
                    camera.y = gameWorld.y;
                }
                if(camera.x + camera.width > gameWorld.x + gameWorld.width){
                    camera.x = gameWorld.x + gameWorld.width - camera.width;
                }
                if(camera.y + camera.height > gameWorld.height){
                    camera.y = gameWorld.height - camera.height;
                } 
            }

            function endGame(){  
                //You win if you're on the last level and touch the gate
                if(levelCounter === levelMaps.length){
                    let modalEndGame = document.getElementById("endGameModal");

                    let btnEndGame = document.getElementById("endGame");

                    endModal()
                    function endModal(){
                        modalEndGame.style.display = "block";
                    }
                    
                    btnEndGame.onclick = function() {
                        modalEndGame.style.display = "none";
                    }

                }
            }

            // thats the map built need to render it with a render function next
            function render(event) {
                drawingSurface.clearRect(0, 0, canvas.width, canvas.height);

                //Position the gameWorld inside the camera
                drawingSurface.save();
                drawingSurface.translate(-camera.x, -camera.y);
                
                //Display the sprites
                    if(sprites.length !== 0){
                        for(let i = 0; i < sprites.length; i++){
	                        let sprite = sprites[i];
                                drawingSurface.drawImage(
                                    image, 
                                    sprite.sourceX,
                                    sprite.sourceY, 
                                    sprite.sourceWidth, 
                                    sprite.sourceHeight,
                                    Math.floor(sprite.x), 
                                    Math.floor(sprite.y), 
                                    sprite.width, 
                                    sprite.height);
                        }
                    }
                drawingSurface.restore();

                // I am using innerHTML to display timer and boes collected
                // starting withe the timer
                timerOutput.innerHTML = timeDisplay;

                // Then the Collected bones message

                collectOutput.innerHTML = collectedMessage;
            }
        }());