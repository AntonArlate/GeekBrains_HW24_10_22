const celsius = Number.parseFloat(prompt("Введите температуру в градусах цельсия:"));
alert(`${(celsius).toFixed(1)} \u00B0C = ${((celsius * (9 / 5)) + 32).toFixed(1)} \u00B0F`);
