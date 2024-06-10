const UnitExchangeW = (value, unit) => {
    const Unit = {
        'kg': 1,
        'lb': 0.45359237
    };
    return value * Unit[unit];
}

const UnitExchangeM = (value, unit) => {
    const Unit = {
        'm': 1,
        'inch': 0.0254,
        'ft':0.3048
    };
    return value * Unit[unit];
}

function BMI(event) {
    event.preventDefault();
    const valueW = parseFloat(document.getElementById("Input-W").value);
    const unitW = document.getElementById("Weight").value;
    const kg = UnitExchangeW(valueW, unitW);

    const valueM = parseFloat(document.getElementById("Input-M").value);
    const unitM = document.getElementById("Height").value;
    const m = UnitExchangeM(valueM, unitM);

    const BodyMassIndex = kg / (m * m);

    document.getElementsByClassName("BMI-output")[0].innerHTML = "Body Mass Index is " + BodyMassIndex.toFixed(2);

    let conclusion;
    if (BodyMassIndex < 18.5) {
        conclusion = "Your BMI is <strong>" + BodyMassIndex.toFixed(2) + "</strong>, indicating your weight is in the <strong>Underweight</strong> category for adults of your height.";
    } else if (BodyMassIndex >= 18.5 && BodyMassIndex <= 24.9) {
        conclusion = "Your BMI is <strong>" + BodyMassIndex.toFixed(2) + "</strong>, indicating your weight is in the <strong>Normal</strong> category for adults of your height.";
    } else if (BodyMassIndex >= 25 && BodyMassIndex <= 29.9) {
        conclusion = "Your BMI is <strong>" + BodyMassIndex.toFixed(2) + "</strong>, indicating your weight is in the <strong>Overweight</strong> category for adults of your height.";
    } else if(BodyMassIndex>30){
        conclusion = "Your BMI is <strong>" + BodyMassIndex.toFixed(2) + "</strong>, indicating your weight is in the <strong>Obesity</strong> category for adults of your height.";
    }
    else
        conclusion = "Error";

    document.getElementsByClassName("conclusion")[0].innerHTML = conclusion;
}
