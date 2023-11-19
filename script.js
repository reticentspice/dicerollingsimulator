//Currently everything works.
//Variable names should be cleaned up and standardized.
//Fix chart number display because it looks stupid sometimes now.
//What the hell colour works with a multicoloured background picture?
//User input for all numbers should be sanitized.
//Change position of tooltip.
//Add accessibility features such as text descriptions.
//Title text should permanently stay on the image.
//Error messages should appear once the user tabs away or submits

//Create the concept of a die
class Die {
    constructor(number_sides) {
        this.number_sides = number_sides;
    }
}

function rollthosedice() {

    //Set up variables
    let number_sides = parseInt(document.getElementById("numberofsides").value.replace(/\D/g, ""), 10);
    let number_dice = parseInt(document.getElementById("numberofdice").value.replace(/\D/g, ""), 10);
    let roll_num = parseInt(document.getElementById("timesrolled").value.replace(/\D/g, ""), 10);

    //Output error messages if the user enters non-numeric characters
    var errorone = document.getElementById("errorone");
    var errortwo = document.getElementById("errortwo");
    var errorthree = document.getElementById("errorthree");

    if (isNaN(number_sides)) {
        errorone.innerHTML = "<span style='color: red;'>" +
            "Please enter only numbers</span>"
    }

    else if (isNaN(number_dice)) {
        errortwo.innerHTML = "<span style='color: red;'>" +
            "Please enter only numbers</span>"
    }

    else if (isNaN(roll_num)) {
        errorthree.innerHTML = "<span style='color: red;'>" +
            "Please enter only numbers</span>"
    };

    // Collect the number of dice to be rolled in a list
    // get the number rolled by those dice
    let dice_list = [];
    for (let n = 0; n < number_dice; n++) {
        let die = new Die(number_sides);
        dice_list.push(die);
    }

    //Collect results of a roll for each dice and add them together to get the total,
    //then append it to a list of results
    let all_results = [];
    for (let i = 0; i < roll_num; i++) {
        let single_roll_results = 0;
        for (die of dice_list) {
            single_roll_result = Math.floor(Math.random() * (die.number_sides)) + 1;
            single_roll_results += single_roll_result;
        }
        all_results.push(single_roll_results);
    }

    //Collect frequencies
    let frequencies = [];
    let max_result = number_sides * number_dice;
    for (let v = number_dice; v <= max_result; v++) {
        let frequency = all_results.filter(value => value === v).length;
        frequencies.push(frequency)
    };

    //Make the bar graph
    function makeChart() {

        var chart = new CanvasJS.Chart("chartContainer", {
            title: {
                text: "Results of Rolling"
            },
            axisX: { title: "Result" },
            axisY: { title: "Times Obtained" },
            data: [{
                type: "column",
                dataPoints: frequencies.map((count, index) => ({
                    label: (index + number_dice).toString(),
                    y: count
                })),
            }],
        });
        chart.render()

    };

    //This part creates the list of results and frequences for the right side of the page.
    const rollsList = document.getElementById('result-list');
    const frequencyList = document.getElementById('frequency-list');

    function populateLists() {
        rollsList.innerHTML = '<b><u>Result</u></b>';
        frequencyList.innerHTML = '<b><u>Times Obtained</u></b>';

        for (let i = 0; i < frequencies.length; i++) {
            const rollItem = document.createElement("li");
            rollItem.textContent = i + number_dice;
            rollsList.appendChild(rollItem);


            const freqItem = document.createElement("li");
            freqItem.textContent = `${frequencies[i]}`;
            frequencyList.appendChild(freqItem);
        }
    };
    makeChart();
    populateLists();
};

