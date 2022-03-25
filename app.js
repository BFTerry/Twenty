com = 0;
user = 0;
coms = 0;
users = 0;

alert = `Welcome to 20!`;

do {

    do {
        var number = Math.floor(Math.random() * 10 + 1);
        com = com + number
        alert(`Computer got ${number}, the Computer now has ${com}.`)
    } while (com <= 16);

    alert(`Now it's your turn.`)

    do {
        var number = Math.floor(Math.random() * 10 + 1);
        user = user + number
        alert(`You got ${number}, You now have ${user}.`)
        var userinput = prompt(`If you want to play again press "y"`)
    } while (userinput == "y");








}   while (user1 == y)



























