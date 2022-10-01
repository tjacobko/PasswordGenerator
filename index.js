let generate_passwords = document.getElementById("btn")
let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

function create_passwords() {
    let p1 = ""
    let p2 = ""

    for (let i = 0; i < 15; i++) {
        p1 += characters[Math.floor(Math.random()*characters.length)]
        p2 += characters[Math.floor(Math.random()*characters.length)]
    }

    pass1.textContent = p1
    pass2.textContent = p2
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