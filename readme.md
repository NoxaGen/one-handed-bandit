Project: One-armed bandit game.

You can try it here: https://noxagen.github.io/one-handed-bandit/

How it looks:
![machingan](https://user-images.githubusercontent.com/87094041/174311040-ccc96b2e-ffdb-4a4f-9985-5b036f68df95.jpg)


Diagram of the project: (I'm still learning about diagrams and ULM )
![proper_diag](https://user-images.githubusercontent.com/87094041/174278467-cb63ca78-7d62-4aa5-8376-067b590eac7f.jpg)

Rules of the game:

1. You have starting wallet value 200$. 

2. In the input field you can put whatever amout of credit you want, but remember - minimum value is 1$.
Even if you try to put for example 0.66$, program will round up bid value or won't allow you to spin.

3. You can't spin for more that your actually wallet value is. Also, the program will not allows you to pass anything except numbers in the input.

4. After spin, from your wallet dissapear value of the bid and machine will start draw-procedure. Draw-procedure is completly fair. I'ts builded on three completly independent methods.

5. If you draw three same fruits - you win. Also if you draw three diffrent fruits in each screen - you win. When you win, the bid value is multiplied by three and feeds your wallet by it.

6. If you draw diffrent fruits-combinations then from rule above, then - you lose. You lost your bid value forever and machine will not feeds your wallet by any credits.



Description:

Welcome in my another project, it's simple casino game also known as "One-armed bandit".
Actualy it is my first project with OOP techniques, so there are many comments in code. 
I was never worked with classes, constructors and closures, so I was struggling a little, but beyond the struggle there is also excitement because I am moving forward with programming :)

Technologies i used in project:

HTML5, CSS3, Vanillia Java-Script with OOP paradigms.
