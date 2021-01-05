const unitSections = document.querySelectorAll('.unit-section');

const convertFromWeight = document.getElementById('from-weight');
const convertToWeight = document.getElementById('to-weigth');

const convertFromTemperature = document.getElementById('from-temperature');
const convertToTemperature = document.getElementById('to-temperature');

const convertFromLength = document.getElementById('from-length');
const convertToLength = document.getElementById('to-length');

const input = document.getElementById('input');
const output = document.getElementById('output');


const btnContainer = document.querySelector(".btn-container");
const btns = document.querySelectorAll('.btn');


btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
    input.value= '';
    output.value = '';
    convertFromWeight.selectedIndex = 0;
    convertToWeight.selectedIndex = 0;
    convertFromTemperature.selectedIndex = 0;
    convertToTemperature.selectedIndex = 0;
    convertFromLength.selectedIndex = 0;
    convertToLength.selectedIndex = 0;
    })
});


btnContainer.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        unitSections.forEach(function (unitSection) {
            unitSection.classList.remove("active");
        })
        const elem = document.getElementById(id);
        elem.classList.add("active");
    }
});


let weightSection = document.getElementById('weight');
let temperatureSection = document.getElementById('temperature');
let lengthSection = document.getElementById('length');

weightSection.addEventListener('change', function() {
    if(input.value) {
        convertWeightValue();
    }
});

temperatureSection.addEventListener('change', function() {
    if(input.value) {
        convertTemperatureValue();
    }
});

lengthSection.addEventListener('change', function() {
    if(input.value) {
        convertLengthValue();
    }
});

input.addEventListener('input', function() {
    if (weightSection.classList.contains('active')) {
        convertWeightValue();
    } else if (temperatureSection.classList.contains('active')) {
        convertTemperatureValue();
    } else if (lengthSection.classList.contains('active')) {
        convertLengthValue();
    };
});


function convertWeightValue() {
    let fromWeight = convertFromWeight.value;
    let toWeight = convertToWeight.value;
    let inputValue = input.value;

        if(fromWeight === 'Tonne' && toWeight === 'Tonne') {
            output.value = inputValue;
        } else if (fromWeight === 'Tonne' && toWeight === 'Kilogram') {
            output.value = +(inputValue * 1000).toFixed(6);
        } else if (fromWeight === 'Tonne' && toWeight === 'Gram') {
            output.value = +(inputValue * 1000000).toFixed(6);
        } else if (fromWeight === 'Tonne' && toWeight === 'Pound') {
            output.value = +(inputValue * 2205).toFixed(6);
        } else if (fromWeight === 'Tonne' && toWeight === 'Ounce') {
            output.value = +(inputValue * 35274).toFixed(6);
        } else if(fromWeight === 'Kilogram' && toWeight === 'Kilogram') {
            output.value = inputValue;
        } else if (fromWeight === 'Kilogram' && toWeight === 'Tonne') {
            output.value = +(inputValue / 1000).toFixed(6);
        } else if (fromWeight === 'Kilogram' && toWeight === 'Gram') {
            output.value = +(inputValue * 1000).toFixed(6);
        } else if (fromWeight === 'Kilogram' && toWeight === 'Pound') {
            output.value = +(inputValue * 2.205).toFixed(6);
        } else if (fromWeight === 'Kilogram' && toWeight === 'Ounce') {
            output.value = +(inputValue * 35.274).toFixed(6);
        } else if (fromWeight === 'Gram' && toWeight === 'Tonne') {
            output.value = +(inputValue / 1000000).toFixed(6);
        } else if (fromWeight === 'Gram' && toWeight === 'Kilogram') {
            output.value = +(inputValue / 1000).toFixed(6);
        } else if (fromWeight === 'Gram' && toWeight === 'Gram') {
            output.value = inputValue;
        } else if (fromWeight === 'Gram' && toWeight === 'Pound') {
            output.value = +(inputValue / 454).toFixed(6);
        } else if (fromWeight === 'Gram' && toWeight === 'Ounce') {
            output.value = +(inputValue / 28.35).toFixed(6);
        } else if (fromWeight === 'Pound' && toWeight === 'Tonne') {
            output.value = +(inputValue / 2205).toFixed(6);
        } else if (fromWeight === 'Pound' && toWeight === 'Pound') {
            output.value = inputValue;
        } else if (fromWeight === 'Pound' && toWeight === 'Ounce') {
            output.value = +(inputValue * 16).toFixed(6);
        } else if (fromWeight === 'Pound' && toWeight === 'Kilogram') {
            output.value = +(inputValue / 2.205).toFixed(6);
        } else if (fromWeight === 'Pound' && toWeight === 'Gram') {
            output.value = +(inputValue * 454).toFixed(6);
        } else if (fromWeight === 'Ounce' && toWeight === 'Tonne') {
            output.value = +(inputValue / 35274).toFixed(6);
        } else if (fromWeight === 'Ounce' && toWeight === 'Ounce') {
            output.value = inputValue;
        } else if (fromWeight === 'Ounce' && toWeight === 'Kilogram') {
            output.value = +(inputValue / 35.274).toFixed(6);
        } else if (fromWeight === 'Ounce' && toWeight === 'Gram') {
            output.value = +(inputValue * 28.35).toFixed(6);
        } else if (fromWeight === 'Foot' && toWeight === 'Pound') {
            output.value = +(inputValue / 16).toFixed(6);
        } 
};


function convertTemperatureValue() {
    let fromTemperature = convertFromTemperature.value;
    let toTemperature = convertToTemperature.value;
    let inputValue = input.value;

    if (fromTemperature === 'Celsieus' && toTemperature === 'Celsieus') {
        output.value = inputValue;
    } else if (fromTemperature === 'Celsieus' && toTemperature === 'Fahrenheit') {
        output.value = +((inputValue * 9/5) + 32).toFixed(6);
    } else if (fromTemperature === 'Celsieus' && toTemperature === 'Kelvin') {
        output.value = parseFloat(inputValue) + 273.15;
    } else if (fromTemperature === 'Fahrenheit' && toTemperature === 'Celsieus') {
        output.value = +((inputValue - 32) * 5/9).toFixed(6);
    } else if (fromTemperature === 'Fahrenheit' && toTemperature === 'Fahrenheit') {
        output.value = inputValue;
    } else if (fromTemperature === 'Fahrenheit' && toTemperature === 'Kelvin') {
        output.value = +((inputValue - 32) * 5/9 + 273.15).toFixed(6);
    } else if (fromTemperature === 'Kelvin' && toTemperature === 'Celsieus') {
        output.value = +inputValue - 273.15;
    } else if (fromTemperature === 'Kelvin' && toTemperature === 'Fahrenheit') {
        output.value = +((inputValue - 273.15) * 9/5 + 32).toFixed(6);
    } else if (fromTemperature === 'Kelvin' && toTemperature === 'Kelvin') {
        output.value = inputValue;
    }
}

function convertLengthValue () {
    let fromLength = convertFromLength.value;
    let toLength = convertToLength.value;
    let inputValue = input.value;
    
        if (fromLength === 'Inch' && toLength === 'Inch') {
            output.value = inputValue;
        } else if (fromLength === 'Inch' && toLength === 'Meter') {
            output.value = +(inputValue / 39.37).toFixed(6);
        } else if (fromLength === 'Inch' && toLength === 'Mile') {
            output.value = +(inputValue / 63360).toFixed(6);
        } else if (fromLength === 'Inch' && toLength === 'Foot') {
            output.value = +(inputValue / 12).toFixed(6);
        } else if (fromLength === 'Inch' && toLength === 'Kilometre') {
            output.value = +(inputValue * 39370).toFixed(6);
        } else if(fromLength === 'Kilometre' && toLength === 'Kilometre') {
            output.value = inputValue;
        } else if (fromLength === 'Kilometre' && toLength === 'Meter') {
            output.value = +(inputValue * 1000).toFixed(6);
        } else if (fromLength === 'Kilometre' && toLength === 'Mile') {
            output.value = +(inputValue / 1.609).toFixed(6);
        } else if (fromLength === 'Kilometre' && toLength === 'Foot') {
            output.value = +(inputValue * 3281).toFixed(6);
        } else if (fromLength === 'Kilometre' && toLength === 'Inch') {
            output.value = +(inputValue * 39370).toFixed(6);
        } else if (fromLength === 'Meter' && toLength === 'Kilometre') {
            output.value = +(inputValue / 1000).toFixed(6);
        } else if (fromLength === 'Meter' && toLength === 'Meter') {
            output.value = inputValue;
        } else if (fromLength === 'Meter' && toLength === 'Mile') {
            output.value = +(inputValue / 1609).toFixed(6);
        } else if (fromLength === 'Meter' && toLength === 'Foot') {
            output.value = +(inputValue * 3.281).toFixed(6);
        } else if (fromLength === 'Meter' && toLength === 'Inch') {
            output.value = +(inputValue * 39.37).toFixed(6);
        } else if (fromLength === 'Mile' && toLength === 'Mile') {
            output.value = inputValue;
        } else if (fromLength === 'Mile' && toLength === 'Foot') {
            output.value = +(inputValue * 5280).toFixed(6);
        } else if (fromLength === 'Mile' && toLength === 'Kilometre') {
            output.value = +(inputValue * 1.609).toFixed(6);
        } else if (fromLength === 'Mile' && toLength === 'Meter') {
            output.value = +(inputValue * 1609).toFixed(6);
        } else if (fromLength === 'Mile' && toLength === 'Inch') {
            output.value = +(inputValue * 63360).toFixed(6);
        } else if (fromLength === 'Foot' && toLength === 'Foot') {
            output.value = inputValue;
        } else if (fromLength === 'Foot' && toLength === 'Kilometre') {
            output.value = +(inputValue / 3281).toFixed(6);
        } else if (fromLength === 'Foot' && toLength === 'Meter') {
            output.value = +(inputValue /3.281).toFixed(6);
        } else if (fromLength === 'Foot' && toLength === 'Mile') {
            output.value = +(inputValue / 5280).toFixed(6);
        } else if (fromLength === 'Foot' && toLength === 'Inch') {
            output.value = +(inputValue / 12).toFixed(6);
        } 
}