function convertTemperature() {
    const tempInput = document.getElementById('temperatureInput').value;
    const unitInput = document.getElementById('unitInput').value;
    const unitOutput = document.getElementById('unitOutput').value;
    const resultDiv = document.getElementById('result');

    // Validate input
    const temperature = parseFloat(tempInput);
    if (isNaN(temperature)) {
      resultDiv.textContent = 'Please enter a valid number.';
      return;
    }

    let convertedTemp = '';

    if (unitInput === 'celsius') {
        if(unitOutput === 'fahrenheit'){
            const toFahrenheit = (temperature * 9/5) + 32;
            convertedTemp = `${temperature}°C = ${toFahrenheit.toFixed(2)}°F`;
        }else if(unitOutput === 'kelvin') {
            const toKelvin = temperature + 273.15;
            convertedTemp = `${temperature}°C =  ${toKelvin.toFixed(2)}K`;
        }else {
            convertedTemp = `${temperature}°C =  ${temperature}°C`;
        }
    } else if (unitInput === 'fahrenheit') {
        if(unitOutput === 'celsius'){
            const toCelsius = (temperature - 32) * 5/9;
            convertedTemp = `${temperature}°F = ${toCelsius.toFixed(2)}°C`;
        }else if (unitOutput === 'kelvin') {
            const toCelsius = (temperature - 32) * 5/9;
            const toKelvin = toCelsius + 273.15;
            convertedTemp = `${temperature}°F = ${toKelvin.toFixed(2)}K`;
        }else {
            convertedTemp = `${temperature}°F =  ${temperature}°F`;
        }
    } else if (unitInput === 'kelvin') {
        if(unitOutput === 'celsius'){
            const toCelsius = temperature - 273.15;
            convertedTemp = `${temperature}°K = ${toCelsius.toFixed(2)}°C`;
        }else if(unitOutput === 'fahrenheit') {
            const toCelsius = temperature - 273.15;
            const toFahrenheit = (toCelsius * 9/5) + 32;
            convertedTemp = `${temperature}°K = ${toFahrenheit.toFixed(2)}°F`;
        }else {
            convertedTemp = `${temperature}°K =  ${temperature}°K`;
        }
    }
    resultDiv.textContent = convertedTemp;
  }