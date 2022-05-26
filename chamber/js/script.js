// Menu Toggle
function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}
const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

// Time stamps
document.querySelector('#time').innerHTML = document.lastModified;
let year = new Date(document.lastModified);
document.querySelector('#year').innerHTML = year.getFullYear();

const datefieldUK = document.getElementById("date-uk");
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

// Pop-up Message
const daynumber = now.getDay();
const banner = document.getElementById('banner');
if (daynumber === 1 || daynumber === 2) {
    banner.style.display = "block";
}