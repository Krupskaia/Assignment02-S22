var playGame = window.prompt("Are you ready to play the game? Yes / No");

if (playGame === "Yes") {
    alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.");
    var direction = window.prompt("Which direction would you like to head:? Please enter forward, left, or right.");
    window.console.log(direction);
    switch (direction) {
        case "left":
            alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!");
        break;
        case "forward":
            alert("You walk 100 yards and safely make your way out of the cave.");
        break;
        case "right":
            alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!");
        break;
        default:
            alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.");
    }
    var rate = parseInt(window.prompt("Would you like to rate the game? Please enter a number between 1 to 10."), 10);
    if (rate >=1 && rate <= 10) {
        if (rate >= 6){
            alert("Thank you. Come back and play again.")
        }else {
            alert("Thank you.  We are working hard to improve the game.");
        }
    } else {
        alert("Thank you for playing.");
    }
}else {
    window.document.write("Thank you and play again sometimes.");
}
