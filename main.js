var currentBlock = null;
var currentBlockRotation = 0;

var oldBlocks = [];
var oldBlocksPositions = [];
var oldBlocksRotations = [];

var time = 0;

function start() {
  var canvas = document.getElementById("canvas");
  resy = window.innerHeight * 0.85;
  resx = resy * (16 / 9);
  canvas.width = resx;
  canvas.height = resy;

  wy = new Wineyard3D(canvas, resx, resy, 1);
  loadResources(wy);

  createGameScene();

  wy.renderScene(game_Scene, gameFunction);
}

function createGameScene() {
  game_Scene = wy.addScene("test");
  var block = generateNewBlock();
  game_Scene.addObjectGroup(block);
  game_Scene.moveCamera(0, -7, 0);
  currentBlock = block;
}

function getNewBlock()
{
  oldBlocks.push(currentBlock);
  oldBlocksPositions.push([currBlockX, currBlockY+1]);
  oldBlocksRotations.push(currentBlockRotation);

  var block = generateNewBlock();
  game_Scene.addObjectGroup(block);
  currBlockX = defaultBlockX;
  currBlockY = defaultBlockY;
  currentBlock = block;
  currentBlock.setPosition(currBlockX, currBlockY, z);
  currentBlockRotation = 0;
}

var pause=0;
function gameFunction() {

  checkInput();

  if(pause)
    return;

  currentBlock.setPosition(currBlockX, currBlockY, z);

  if(time == 0)
  {
    if(checkCollisions())
    {
      getNewBlock();
      var f = findFullRow();

      camRotY = 0;
      camRotX = 0;

    }
    else
    {
      updateGrid();
      currBlockY--;

      camRotX = (gridY - currBlockY)/3.5;
    }
  }

  time++;
  if(time >= timeInt)
    time = 0;

  updateCamera();
}

function updateCamera()
{
  if(currCamRotY < camRotY)
  {
      currCamRotY += 0.2;
      if(currCamRotY > camRotY)
        currCamRotY = camRotY;
  }

  else if(currCamRotY > camRotY)
  {
      currCamRotY -= 0.2;
      if(currCamRotY < camRotY)
        currCamRotY = camRotY;
  }

  if(currCamRotX < camRotX)
  {
      currCamRotX += 0.2;
      if(currCamRotX > camRotX)
        currCamRotX = camRotX;
  }

  else if(currCamRotX > camRotX)
  {
      currCamRotX -= 0.2;
      if(currCamRotX < camRotX)
        currCamRotX = camRotX;
  }

  game_Scene.rotateCamera(currCamRotX, currCamRotY, 0);
}