/* output code for draw object in GM */
function drawObjectCode(drawObjectCode_input)
{
    var drawObjectCode_output = "";
    var str2 = drawObjectCode_input;

    var drawObjectCode_output = "draw_self(); \nshader_reset(); \n".concat(drawObjectCode_output);

    if(str2.includes('iGlobalTime') == true) 
    {
        drawObjectCode_output = "shader_set_uniform_f(Time,current_time/1000); \n".concat(drawObjectCode_output);
    }

    if(str2.includes('iResolution') == true) 
    {
        drawObjectCode_output = "shader_set_uniform_f(Res,512,512,0); \n".concat(drawObjectCode_output);
    }
    
    drawObjectCode_output = "shader_set(SHADER_NAME_HERE) \n".concat(drawObjectCode_output);
    return drawObjectCode_output;
}