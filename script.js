const buttonsKey = document.getElementsByClassName('key');
let lastKey;


function getRandomKey() {
    index = Math.floor(Math.random() * buttonsKey.length);
    console.log(index)
    const key = buttonsKey[index];
    if (key === lastKey) {
       console.log('The same key!!!')
       return getRandomKey()
    }
    lastKey = key;
    return key;
};

function losuj(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};


console.log(getRandomKey())