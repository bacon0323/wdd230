const temp = parseFloat(document.querySelector('#temp').textContent);
const speed = parseFloat(document.querySelector('#speed').textContent);

let windChill = Math.round(35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16)));
console.log(windChill)

if(temp <= 50 && speed > 3) {
    document.querySelector('#chill').textContent = 'The Wincdchill: ' + windChill + '\xB0F';
} else {
    document.querySelector('#chill').textContent = 'No Wind Chill Today';
}