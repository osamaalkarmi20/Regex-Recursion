/* Write a function to do the division operation without using the built-in division*/

function division( number, dividedBy)
    {
        if (number == 0)
            return 0;
        if ( dividedBy == 0)
            return null;
       
  
        if (number < 0) 
        {
            number = -number;
            if ( dividedBy < 0)
                 dividedBy = - dividedBy;
            else
                neg = true;
        } 
        else if ( dividedBy < 0) 
        {
             dividedBy = - dividedBy;
            neg = true;
        }
  
        
        let = 0;
        for (let i=0;number >=  dividedBy;i++)
        {
            number = number -  dividedBy;
           
        } 
       
        if (neg)
            i = -i;
        return i;
    }
  /* Write a function that implement Math.pow(x,n) but using recursion
Example:
pow(2,4) = 16
*/

function pow(x , n) {
 
    if (n == 0)
        return 1;

    if (x == 0)
        return 0;


    return x * pow(x, n - 1);
}
/*Write a function that take n as parameter and return the nth element in the Fibonacci Series*/
function fibonacci(n) {
    if (n = 1){return n;}
        
      else{
    return fibonacci(n-1) + fibonacci(n-2);
      }}
  
    
 