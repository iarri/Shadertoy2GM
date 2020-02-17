# Shadertoy2GM

This javascript webapp converts GLSL code from shadertoy.com to Gamemaker GLSL ES as well as output other necessary code to run.

## What does it do?
* Adds ```varying vec2 fragCoord;```
* Replaces ```void MainImage()``` with ```void main(void)```.
* Replaces ```fragColor``` with ```gl_FragColor```.
* Replaces all instances of ```texture``` to ```texture2D```.
* Replaces all instances of ```iChannel0``` to ```gm_BaseTexture```.
* Replaces all instances of ```iTime``` to ```iGlobalTime```.
* Adds ```uniform vec3 iResolution;``` if ```iResolution.xy``` is found, else...
* ...Adds ```uniform float iResolution;``` if ```iResolution``` is found
* Adds ```uniform float iGlobalTime;```.
* Edits the pow(x, y) function to pow(abs(x), y)
* Outputs vertex, fragment, create event, and draw event.

This works for simple shaders. More complex shaders require more manual work on your part.

Tested/works with the following:
* https://www.shadertoy.com/view/ldXGW4
* 
* 

Any feedback is welcomed :)