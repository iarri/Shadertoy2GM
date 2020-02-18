/* replaces necessary words in code*/
function wordReplace(wordReplace_input)
{
    var tempChange_1 = wordReplace_input;
    var tempChange_2 = tempChange_1.replace("mainImage", "main");
    var tempChange_3 = tempChange_2.replace("out vec4 fragColor, in vec2 fragCoord", "void");
    var tempChange_4 = tempChange_3.replace('fragColor','gl_FragColor');
    var tempChange_5 = tempChange_4.replace(/texture/g,'texture2D');    // / /g -> all instances.
    var tempChange_6 = tempChange_5.replace(/iChannel0/g,'gm_BaseTexture');
    var tempChange_7 = tempChange_6.replace(/iTime/g,'iGlobalTime');
    var wordReplace_output = tempChange_7;
    return wordReplace_output
}