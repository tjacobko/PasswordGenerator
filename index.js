const generate_passwords = document.getElementById("btn")
let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")

let length = document.getElementById("length")
let symbols = document.getElementById("symbols")
let numbers = document.getElementById("numbers")

const all = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const noSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const noNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const onlyLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function create_passwords() {
    let p1 = ""
    let p2 = ""
    let len = length.value

    if (len < 10 || len > 25) {
        alert("Please enter a length between 10 and 25.")
    }
    else {
        if (symbols.checked === false && numbers.checked === false) {
            p1 = write(all)
            p2 = write(all)
        }
        else if (symbols.checked === true && numbers.checked === false) {
            p1 = write(noSymbols)
            p2 = write(noSymbols)
        }
        else if (symbols.checked === false && numbers.checked === true) {
            p1 = write(noNumbers)
            p2 = write(noNumbers)
        }
        else {
            p1 = write(onlyLetters)
            p2 = write(onlyLetters)
        }

        pass1.textContent = p1
        pass2.textContent = p2
    }
}

function copy(id) {
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    alert("Password copied to clipboard.")
}

function write(arr) {
    let p = ""
    for (let i = 0; i < length.value; i++) {
        p += arr[Math.floor(Math.random()*arr.length)]
    }
    return p
}