function checkInput()
{
    if(wy.input.isDown("right"))
    {
        if(!checkCollisions(+1,-1))
        {
            currBlockX += 1;
            ++camRotY;
        }
    }
    if(wy.input.isDown("left"))
    {
        if(!checkCollisions(-1,-1))
        {
            currBlockX -= 1;
            --camRotY
        }
    }

    if(wy.input.isDown("space"))
    {
        if(!checkCollisions())
        {
            rotateCurrentBlock();
        }
    }
}