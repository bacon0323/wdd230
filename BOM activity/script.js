document.getElementById('btn').addEventListener('click', function() {
    let myText = document.getElementById('favchap').value;

    if (myText !== '') {
        const newBtn = document.createElement('button');
        newBtn.innerHTML= '\u274C';

        const newLi = document.createElement('li');
        newLi.textContent= myText;
        newLi.appendChild(newBtn);

        document.getElementById('list').appendChild(newLi);

        document.getElementById('favchap').value = '';
    

    newBtn.addEventListener('click', () => {
        document.getElementById('list').removeChild(newLi);
    });
    
    }
    document.getElementById('favchap').focus();
});
