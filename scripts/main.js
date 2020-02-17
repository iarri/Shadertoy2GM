function convertToGM_GLSL()
{
    var inputCode = document.getElementById("input").value;

    var wordsReplaced= wordReplace(inputCode);

    var stringsConcated = uniformsConcat(wordsReplaced);

    var outputCode = functionWrap(stringsConcated);

    document.getElementById("output").value = outputCode;

    if((document.getElementById("output").value) !== "undefined")
    {
        document.getElementById("VERTEX_output").value ="attribute vec3 in_Position; \nvarying vec2 fragCoord; \n void main() \n {\n    vec4 Position = vec4( in_Position, 1); \n   gl_Position = gm_Matrices[MATRIX_WORLD_VIEW_PROJECTION] * Position; \n   fragCoord = in_Position.xy; \n }  "
    }


    document.getElementById("CREATE_EVENT_output").value = createObjectCode(outputCode);
    document.getElementById("DRAW_EVENT_output").value = drawObjectCode(outputCode);

} 