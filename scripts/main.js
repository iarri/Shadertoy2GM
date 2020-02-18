function convertToGM_GLSL()
{
    var inputCode = document.getElementById("input").value;     //inputCode holds everything in input textbox.

    var wordsReplaced= wordReplace(inputCode);  //first function: replace words.

    var stringsConcated = uniformsConcat(wordsReplaced);    //Second function: concat necessary strings.

    var outputCode = functionWrap(stringsConcated);     //Third function finds pow(,), if any, and changes it to pow(abs(),).

    /* display variables if input isn't empty */
    if((document.getElementById("input").value) !== "")
    {
        document.getElementById("output").value = outputCode;
        document.getElementById("VERTEX_output").value ="attribute vec3 in_Position; \nvarying vec2 fragCoord; \n void main() \n {\n    vec4 Position = vec4( in_Position, 1); \n   gl_Position = gm_Matrices[MATRIX_WORLD_VIEW_PROJECTION] * Position; \n   fragCoord = in_Position.xy; \n }"
        document.getElementById("CREATE_EVENT_output").value = createObjectCode(outputCode);        //fourth function creates code for create-object code
        document.getElementById("DRAW_EVENT_output").value = drawObjectCode(outputCode);        //fifth function creates code for object draw
    }

} 