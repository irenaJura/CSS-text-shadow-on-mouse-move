### Text shadow effect on mouse move

This project shows you how to set up a moving text shadow on a text, that will move depending on the way the user moves the mouse.

You will need to add an event listener to the hero element, which will call the shadow function. Then we need to calculate the width and height of the hero element (offsetWidth, offsetHeigh) and the current mouse location (offsetX, offsetY). 

I used ES6 destructuring when creating these variables.

Then we set the maximum amount of movement (distance in px) in a varible named walk. We add another calculation for xWalk and yWalk, to make sure the movement stays within our set limit of pixels.

Finally, we use those values to style our text shadow.

