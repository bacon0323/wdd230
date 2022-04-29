var time = new Date();
var dd = String(time.getDate()).padStart(2, '0');
var mm = String(time.getMonth() + 1).padStart(2, '0');
var yyyy = time.getFullYear();
time = mm + '/' + dd + '/' + yyyy;
document.querySelector('#time').innerHTML = time;

var year = new Date(document.lastModified);
document.querySelector('#year').innerHTML = year.getFullYear();
