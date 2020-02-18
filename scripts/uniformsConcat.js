/* concats necessary words to passsing code*/ 
function uniformsConcat(uniformsConcat_input)
{
    var init_pass = uniformsConcat_input;
    var vec3_iResolution_pass;
    var float_iResolution_pass;
    var vec3_or_float_iRes_pass;
    var iGlobalTime_pass;

    if(init_pass.includes('varying vec2 fragCoord') !== true)   //if passing code does not contain "varying vec2 fragCoord", then add it.
    {
        init_pass = "varying vec2 fragCoord; \n".concat(init_pass);
    }

    if(init_pass.includes('iResolution') == true)       //If the word "iResolution" is found in the input text...
    {
        if(init_pass.includes('iResolution.xy') == true)           //If the word "iResolution.xy" is found in the input text...
        {
            vec3_iResolution_pass = "uniform vec3 iResolution; \n".concat(init_pass)        //...then add "uniform vec3 iResolution;" to the top of the result, result temporarily held in 'vec3_iResolution_pass'
            vec3_or_float_iRes_pass = vec3_iResolution_pass;        //result temporarily held in 'vec3_or_float_iRes_pass'
        }
        else                                                        //else if it isn't found...
        {
            float_iResolution_pass = "uniform float iResolution; \n".concat(init_pass)      //...then add "uniform float iResolution;" to the top of the result, result temporarily held in 'float_iResolution_pass'
            vec3_or_float_iRes_pass = float_iResolution_pass;       //result temporarily held in 'vec3_or_float_iRes_pass'
        }
    }
    else
        vec3_or_float_iRes_pass = init_pass;           //...else make vec3_or_float_iRes_pass equal to the initial pass                
                                                      
    if(vec3_or_float_iRes_pass.includes('iGlobalTime') == true)         //If iGlobalTime is found in the input text...
    {
        iGlobalTime_pass = "uniform float iGlobalTime; \n".concat(vec3_or_float_iRes_pass);       //...then add 'uniform float iGlobalTime' to the top of the result, temporarily held in 'iGlobalTime_pass'
    }
    else
        iGlobalTime_pass = vec3_or_float_iRes_pass;

    var uniformsConcat_output = iGlobalTime_pass;
    return uniformsConcat_output;
}