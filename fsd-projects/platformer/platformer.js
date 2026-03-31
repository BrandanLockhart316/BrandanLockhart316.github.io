$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300,610,175,20,"turquoise")
    createPlatform(1025,610,175,20,"turquoise")
    createPlatform(700,525,100,20,"crimson")
    createPlatform(300,410,175,20,"turquoise")
    createPlatform(1025,410,175,20,"turquoise")
    createPlatform(700,325,100,20,"crimson")
    createPlatform(300,210,175,20,"turquoise")
    createPlatform(1025,210,175,20,"turquoise")




    // TODO 3 - Create Collectables


   createCollectable("database",375,575)
    createCollectable("database",1090,575)
    createCollectable("database",375,370)
    createCollectable("database",1090,370)
    createCollectable("database",375,170)
    createCollectable("database",1090,170)

    
    // TODO 4 - Create Cannons
    createCannon("left",500,3000)
    createCannon("right",620,3000)
    createCannon("left",300,3000)
    createCannon("right",420,3000)
    createCannon("left",100,3000)
    createCannon("right",220,3000)
    createCannon("top",800,6000)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
