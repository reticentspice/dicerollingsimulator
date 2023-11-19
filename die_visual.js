

// Get user input    
let num_sides = parseInt(prompt("How many sides should the dice have? "));
let number_dice = parseInt(prompt("How many dice do you want to roll? "));
let roll_num = parseInt(prompt("How many times do you want to roll the dice? "));

//Create the concept of a die
class Die {
    constructor(num_sides) {
        this.num_sides = num_sides;
    }
}

function roll(die) {
    return randint(1, self.num_sides);
    Math.floor(Math.random() * (num_sides + 1));
}


// Collect the number of dice to be rolled in a list
let dice_list = [];
for (let n = 0; n <= number_dice; n++) {
    die = Die(num_sides);
    dice_list.push(die);
}


//Get the results of rolling the dice in the list
//Roll the dice as many times as requested
let results = [];
for (let n = 0; n <= roll_num; n++) {
    let single_roll_results = 0;
    for (let o = 0; 0 <= dice_list.length(); o++) {
        let result = die.roll();
        single_roll_results += result;
    }
    results.push(single_roll_results);
}

//Collect frequencies
let frequencies = [];
let max_result = num_sides * number_dice;
for (let v = 1; v <= max_result; v++) {
    let frequency = results.count(value);
    frequencies.push(frequency);
}

//Draw the bar chart
//hist = pygal.Bar()
//hist.title = "Results of rolling dice"
//hist.x_labels = list(range(2, max_result + 1))
//hist.x_title = "Result"
//hist.y_title = "Frequency of Result"

//hist.add("D" + str(num_sides), frequencies)
//hist.render_to_file("die_visual.svg")