function checkWarnings(checkWarnings_input)
{
    var init_pass2 = checkWarnings_input;
    var warningsFound ="";

    if(init_pass2.includes('.length(') == true)
    {
        warningsFound = "•length() method for getting the number of elements in an array (requires GLSL ES 1.2 or later) \n\n".concat(warningsFound);
    }

    if(  (init_pass2.includes('fwidth(') == true) || (init_pass2.includes('dFdx(') == true) || (init_pass2.includes('dFdy(') == true) )
    {
        warningsFound = "•fwidth(), dFdx(), dFdy() derivative functions often used to aid texture filtering (requires GL_OES_standard_derivatives) \n\n".concat(warningsFound);
    }

    if(warningsFound !== "")
    {
        warningsFound = "Incompatible functions have been detected in the input code!\n\n".concat(warningsFound);
    }

    var checkWarnings_output = warningsFound;
    return checkWarnings_output;
}
