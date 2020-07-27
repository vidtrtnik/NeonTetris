var blocks_S = [];
var blocks_Z = [];
var blocks_J = [];
var blocks_L = [];
var blocks_O = [];

var c_S = 0;
var c_Z = 0;
var c_J = 0;
var c_L = 0;
var c_O = 0;

var grid = null;

function createBlock_S(color)
{
    var p1 = new wy3d_Object("S1_" + c_S.toString(), m_cube, t_cube, 0,0,z, 0,0,0, 0.5,0.5,0.5, color[0],color[1],color[2]);
    var p2 = new wy3d_Object("S2_" + c_S.toString(), m_cube, t_cube, 1,0,z, 0,0,0, 0.5,0.5,0.5, color[0],color[1],color[2]);
    var p3 = new wy3d_Object("S3_" + c_S.toString(), m_cube, t_cube, 1,1,z, 0,0,0, 0.5,0.5,0.5, color[0],color[1],color[2]);
    var p4 = new wy3d_Object("S4_" + c_S.toString(), m_cube, t_cube, 2,1,z, 0,0,0, 0.5,0.5,0.5, color[0],color[1],color[2]);
    
    var block_S = new wy3d_ObjectGroup("S_" + c_S.toString(), [p1, p2, p3, p4]);
    c_S++;

    return block_S;
}

function createBlock_Z(color)
{
    var p1 = new wy3d_Object("Z1_" + c_Z.toString(), m_cube, t_cube, 0,0,z, 0,0,0, 0.5,0.5,0.5, color[0],color[1],color[2]);
    var p2 = new wy3d_Object("Z2_" + c_Z.toString(), m_cube, t_cube, -1,0,z, 0,0,0, 0.5,0.5,0.5, color[0],color[1],color[2]);
    var p3 = new wy3d_Object("Z3_" + c_Z.toString(), m_cube, t_cube, -1,1,z, 0,0,0, 0.5,0.5,0.5, color[0],color[1],color[2]);
    var p4 = new wy3d_Object("Z4_" + c_Z.toString(), m_cube, t_cube, -2,1,z, 0,0,0, 0.5,0.5,0.5, color[0],color[1],color[2]);
    
    var block_Z = new wy3d_ObjectGroup("Z_" + c_Z.toString(), [p1, p2, p3, p4]);
    c_Z++;

    return block_Z;
}

function createBlock_J(color)
{
    var p1 = new wy3d_Object("J1_" + c_J.toString(), m_cube, t_cube, 0,0,z, 0,0,0, 0.5,0.5,0.5, color[0],color[1],color[2]);
    var p2 = new wy3d_Object("J2_" + c_J.toString(), m_cube, t_cube, 1,0,z, 0,0,0, 0.5,0.5,0.5, color[0],color[1],color[2]);
    var p3 = new wy3d_Object("J3_" + c_J.toString(), m_cube, t_cube, 2,0,z, 0,0,0, 0.5,0.5,0.5, color[0],color[1],color[2]);
    var p4 = new wy3d_Object("J4_" + c_J.toString(), m_cube, t_cube, 0,1,z, 0,0,0, 0.5,0.5,0.5, color[0],color[1],color[2]);
    
    var block_J = new wy3d_ObjectGroup("J_" + c_J.toString(), [p1, p2, p3, p4]);
    c_J++;

    return block_J;
}

function createBlock_L(color)
{
    var p1 = new wy3d_Object("L1_" + c_L.toString(), m_cube, t_cube, 0,0,z, 0,0,0, 0.5,0.5,0.5, color[0],color[1],color[2]);
    var p2 = new wy3d_Object("L2_" + c_L.toString(), m_cube, t_cube, 1,0,z, 0,0,0, 0.5,0.5,0.5, color[0],color[1],color[2]);
    var p3 = new wy3d_Object("L3_" + c_L.toString(), m_cube, t_cube, 2,0,z, 0,0,0, 0.5,0.5,0.5, color[0],color[1],color[2]);
    var p4 = new wy3d_Object("L4_" + c_L.toString(), m_cube, t_cube, 0,-1,z, 0,0,0, 0.5,0.5,0.5, color[0],color[1],color[2]);
    
    var block_L = new wy3d_ObjectGroup("L_" + c_L.toString(), [p1, p2, p3, p4]);
    c_L++;

    return block_L;
}

function createBlock_O(color)
{
    var p1 = new wy3d_Object("O1_" + c_O.toString(), m_cube, t_cube, 0,0,z, 0,0,0, 0.5,0.5,0.5, color[0],color[1],color[2]);
    var p2 = new wy3d_Object("O2_" + c_O.toString(), m_cube, t_cube, 1,0,z, 0,0,0, 0.5,0.5,0.5, color[0],color[1],color[2]);
    var p3 = new wy3d_Object("O3_" + c_O.toString(), m_cube, t_cube, 0,1,z, 0,0,0, 0.5,0.5,0.5, color[0],color[1],color[2]);
    var p4 = new wy3d_Object("O4_" + c_O.toString(), m_cube, t_cube, 1,1,z, 0,0,0, 0.5,0.5,0.5, color[0],color[1],color[2]);
    
    var block_O = new wy3d_ObjectGroup("O_" + c_O.toString(), [p1, p2, p3, p4]);
    c_O++;

    return block_O;
}

function generateNewBlock()
{
    var newBlock = null;

    var type = Math.floor(Math.random() * 5);
    var color = [Math.random(), Math.random(), Math.random()];

    if(type == 0)
        newBlock = createBlock_S(color);
    if(type == 1)
        newBlock = createBlock_Z(color);
    if(type == 2)
        newBlock = createBlock_J(color);
    if(type == 3)
        newBlock = createBlock_L(color);
    if(type == 4)
        newBlock = createBlock_O(color);

    return newBlock;
}

function rotateCurrentBlock()
{
    currentBlockRotation += 90;
    if(currentBlockRotation == 360)
        currentBlockRotation = 0;

    currentBlock.setRotation(0,0,currentBlockRotation);
}

function getCoordinates(block, rotation)
{
    var ret = [];

    var blk = block;
    var blkRot = rotation;

    for(var i=0; i < blk.group.length; i++)
    {
        var cube = blk.group[i];
        var cubePosX = cube.position[0];
        var cubePosY = cube.position[1];

        for(var j = 0; j < blkRot/90; j++)
        {
            var tmpCubePosX = cubePosX;
            cubePosX = -cubePosY;
            cubePosY = tmpCubePosX;
        }
        cubePosX += blk.position[0];
        cubePosY += blk.position[1];

        ret.push([cubePosX, cubePosY]);
    }
    return ret;
}

function initializeGrid()
{
    grid = [];

    for(var i = 0; i < gridY; i++)
    {
        var row = [];
        for(var j = 0; j < gridX; j++)
            row.push(0);

        grid.push(row);
    }
}

function printGrid()
{
    console.log();
    for(var j=gridY; j >= 0; j--)
    console.log(grid[j]);
}

function checkCollisions(futCoordX, futCoordY)
{
    var blk = currentBlock;
    var blkRot = currentBlockRotation;
    var coords = getCoordinates(blk, blkRot);
    for(var i=0; i < blk.group.length; i++)
    {
        if(grid !== null && grid[coords[i][1]][coords[i][0]] == 1)
            return true;

        if(futCoordX !== undefined && futCoordY !== undefined)
        {
            if(grid !== null && grid[coords[i][1] - futCoordY][coords[i][0] + futCoordX] == 1)
                return true;
        }

        if(coords[i][1] == 0)
            return true;
    }
    return false;
}

function findFullRow()
{
    if(grid !== null)
    for(var i=0; i < gridY; i++)
    {
        var row = grid[i];

        var full = 1;
        for(var j=0; j < row.length; j++)
            if(row[j] == 0)
            {
                full=0;
                break;
            }

        if(full == 1)
            return i-1;
    }

    return -1;
}

function updateGrid()
{
    initializeGrid();

    for(var i=0; i < currentBlock.group.length; i++)
    {
        var coords = getCoordinates(currentBlock, currentBlockRotation);
        grid[coords[i][1]][coords[i][0]] = 2;
    }

    for(var i=0; i < oldBlocks.length; i++)
    {
        var oldBlock = oldBlocks[i];
        var oldBlockRot = oldBlocksRotations[i];
        var oldBlockPos = oldBlocksPositions[i];

        for(var j=0; j < oldBlock.group.length; j++)
        {
            var cube = oldBlock.group[j];
            var cubePosX = cube.position[0];
            var cubePosY = cube.position[1];
            for(var k = 0; k < oldBlockRot/90; k++)
            {
                var tmpCubePosX = cubePosX;
                cubePosX = -cubePosY;
                cubePosY = tmpCubePosX;
            }
            cubePosX += oldBlockPos[0];
            cubePosY += oldBlockPos[1];

            grid[cubePosY][cubePosX] = 1;
            //console.log(j + ", " + cubePosY + "," + cubePosX)
        }
    }
    printGrid();
}