document.lastModified
document.querySelector('#time').innerHTML = document.lastModified;

var year = new Date(document.lastModified);
document.querySelector('#year').innerHTML = year.getFullYear();
