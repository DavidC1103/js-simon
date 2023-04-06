const numbers = [];

// Genero i numeri random (5) \\
while (numbers.length < 5) {
    const getRandom = Math.floor(Math.random() * 100) + 1;

    if (!numbers.includes(getRandom)){
        numbers.push(getRandom);
    }
    console.log(getRandom);
}

// Pusho i numeri random sull'HTML \\
const numRand = document.getElementById('numbers');
// Restituisco una stringa ai numeri dell'array \\
numRand.innerHTML = numbers.join(' - ');

// Creo il TIMER 
setTimeout(function() {
    numRand.innerHTML = '';
}, 4000);

setTimeout(() => {
    const arrUser = [];
    for (let i = 1; i <= 5; i++) {
        const numUser = parseInt(prompt(`Inserisci il numero ${i}`))
        if(numUser.includes(numbers)){
            arrUser.push(numUser);  
        }
        console.log(arrUser);
    }
    
   
    if (arrUser.length === 0) {
        document.getElementById('msg2').textContent = (`Non hai indovinato nemmeno un numero :( )`);
    }else {
        document.getElementById('msg1').textContent = (`Sei riuscito a trovare ${numbers.length} numeri su ${arrUser.length} : ${arrUser.join(' - ')}`);
    }
},5000);