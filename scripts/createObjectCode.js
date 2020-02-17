/* Output code for create object in GM*/ 
function createObjectCode(createObjectCode_input)
{
    var str1 = createObjectCode_input;
    var createObjectCode_output = "";

    if(str1.includes('iGlobalTime') == true) 
    {
        var createObjectCode_output = "Time = shader_get_uniform(shdr_distort,\"iGlobalTime\"); \n".concat(createObjectCode_output);
    }
    if(str1.includes('iResolution') == true)
    {
        var createObjectCode_output = "Res = shader_get_uniform(shdr_distort,\"iResolution\"); \n".concat(createObjectCode_output);
    }

    return createObjectCode_output;
}