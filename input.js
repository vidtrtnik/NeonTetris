function checkInput()
{
    if(wy.input.isDown("right"))
    {
        currBlockX += 1;
        ++camRotY;
    }
    if(wy.input.isDown("left"))
    {
        currBlockX -= 1;
        --camRotY
    }

    if(wy.input.isDown("space"))
    {
        rotateCurrentBlock();
    }
}