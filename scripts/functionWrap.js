/* pow(x, y) -> pow(abs(x), y) */
function functionWrap(functionWrap_input)
{
    var result = functionWrap_input;

    /* turn the base x parameter in pow(x, y) to an absolute value with abs() -> pow(abs(x), y)  */

    while (  result.includes("pow(", n)  == true )     //while there exists " pow(" after index n...
    {
        /* initialize string variables and counters */
        var n = result.indexOf("pow(", n) + 4; // n is the index of where the first instance of "pow(" is plus 4 units of "lead"
        var pre_x = "";     //store pre-changed x parameter
        var part_y = "";    //store y parameter
        var post_x = "";    //store post-change x parameter
        var new_pow = "";   //the new power function with abs() around the x parameter
        var old_pow = "";   //the old power function without abs()
        var openPar = 0;    //counter for open parenthesis
        var closedPar = 0;    //counter for closed parenthesis


        if(result.charAt(n)!== 'a' && result.charAt(n+1)!== 'b' && result.charAt(n+2)!== 's')
        {
            /* concat non-comma chars into the base 'x' */
            while(result.charAt(n) !== ',')     //while char at n in 'result' isn't a comma...
            {   
                var openPar = 0;
                var closedPar = 0; 
                if(result.charAt(n) == '(')     //if char at n in 'result' is open parenthesis...
                {
                    openPar++;
                    pre_x = pre_x.concat(result.charAt(n));
                    n++;        //incremement n

                    /* for when the x parameter has parenthesis */
                    while(openPar !== closedPar)        //while the # of closed and open parenthesis are un-even...
                    {
                        if(result.charAt(n) == '(')
                        {
                            pre_x = pre_x.concat(result.charAt(n));
                            openPar++;
                        }
                        else if((result.charAt(n) !== '(') && (result.charAt(n) !== ')'))
                        {
                            pre_x = pre_x.concat(result.charAt(n));
                        }
                        else if(result.charAt(n) == ')')
                        {
                            pre_x = pre_x.concat(result.charAt(n));
                            closedPar++;
                        }

                        n++; 
                    }

                    n--;        //decremement n (so the char after the last close parenthesis wont be skipped...)
                }
                else
                    pre_x = pre_x.concat(result.charAt(n));       //concat char at n to pre_x var
                    n++;        //incremement n
            }
        }
        else
            n = n+1;

        /* if comma found, begin concating chars into exponent 'y' */
        if(result.charAt(n) == ',')     //if char at n in 'result' is a comma...
        {
            n++;        //Skip the comma. will be added in manually               
            while (result.charAt(n) !== ')')
            {
                var openPar = 0;    //counter for open parenthesis
                var closedPar = 0;    //counter for closed parenthesis
                if(result.charAt(n) == '(')     //if char at n in 'result' is open parenthesis...
                {
                    openPar++;
                    part_y = part_y.concat(result.charAt(n));
                    n++; 

                    /* for when the x parameter has parenthesis */
                    while(openPar !== closedPar)        //while the # of closed and open parenthesis are un-even...
                    {
                        if(result.charAt(n) == '(')
                        {
                            part_y = pre_x.concat(result.charAt(n));
                            openPar++;
                        }
                        else if((result.charAt(n) !== '(') && (result.charAt(n) !== ')'))
                        {
                            part_y = part_y.concat(result.charAt(n));
                        }
                        else if(result.charAt(n) == ')')
                        {
                            part_y = part_y.concat(result.charAt(n));
                            closedPar++;
                        }

                        n++;
                    }

                    n--;        //decremement n (so the char after the last close parenthesis wont be skipped...)
                }
                else
                    part_y = part_y.concat(result.charAt(n));       //concat char at n to pre_x var
                    n++; 
            }
        }
        /* new pow and old pow builder  */
        post_x = "abs(".concat(pre_x);      //post_x = abs(x
        post_x = post_x.concat(')');        //post_x = abs(x)

        new_pow = "pow(".concat(post_x);   //new_pow = pow(abs(x)  
        new_pow = new_pow.concat(',');      //new_pow = pow(abs(x),  
        new_pow = new_pow.concat(part_y);   //new_pow = pow(abs(x) ,y
        new_pow = new_pow. concat(')');     //new_pow = pow(abs(x) ,y)

        old_pow = old_pow.concat("pow(");       //old_pow = pow(
        old_pow = old_pow.concat(pre_x);        //old_pow = pow(x
        old_pow = old_pow.concat(',');        //old_pow = pow(x,
        old_pow = old_pow.concat(part_y);        //old_pow = pow(x,y
        old_pow = old_pow.concat(')');        //old_pow = pow(x,y)

        /* replace old power function with new in input string and increment n  */
        result = result.replace(old_pow , new_pow)
        n++;
    }

    var functionWrap_output = result;
    return functionWrap_output;
}