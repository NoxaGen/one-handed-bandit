Project: One-handed bandit game.

You can try it here: https://noxagen.github.io/one-handed-bandit/

How it looks:
![onehanded bandit screenshot](https://user-images.githubusercontent.com/87094041/173856729-72224ab3-75a7-4029-80a4-71f4c0214e5a.jpg)


Plan of the objects: (Polish language, sorry)
![project_plan](https://user-images.githubusercontent.com/87094041/173852898-fac92648-0096-4bc4-b82b-74a6f4d92996.jpg)

Description:

Welcome in my another project, actualy is my first project with OOP techniques, so there is many comments in code. 
I never work with classes, constructors and closures, so i was struggle a little but behind the struggle there is also excitement because i moving forward :)

1. There is two options of win the game, one is to get three diffrent fruits and the second way is to get all fruit the same.
2. User have 200$ credits on start, and can manage the bid value, if he win's the bid will be multiply by 3, if he lose, he will gain nothing. The colorfull spans will change dynamicly after every spin.
3. There is a lot if-statments wich responsible for proper input, also methods wich checking some game-rules init, like:

3.1 User can't spin less then 1$, if user put 1.4$, the input will be floored to the 1 and viceversa.
3.2 Input type allow input only numbers.
3.3 Methods checks Wallet of the user are enough credits for another spin.

4. Everyspin will randomize fruit in each div, so there is 3 independent draws, the game is 100% fair.

Technologies i use in project:

HTML5, CSS3, Vanillia Java-Script with OOP paradigms.
