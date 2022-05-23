document.querySelector('#time').innerHTML = document.lastModified;

let year = new Date(document.lastModified);
document.querySelector('#year').innerHTML = year.getFullYear();
