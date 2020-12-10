document.getElementById('loose').style.display = 'none' // message de défaite désactivé par défaut

// 1. Créer un tableau de mot

let word = ["CRAINTE", "ANXIETE", "PANIQUE", "HORREUR", "FRAYEUR", "TERREUR", "EPOUVANTE", "AFFOLEMENT", "ALARME", "ANGOISSE", "PHOBIE", "APPREHENSION", "PRESSENTIMENT", "EFFROI", "HANTISE", "INQUIETUDE", "PSYCHOSE", "CAUCHEMAR", "FROUSSE", "TROUILLE", "CRAINTIF", "ANXIEUX", "PANIQUE", "HORRIFIE", "APEURE", "AFFOLE", "INQUIET", "EFFRAYE", "TERRIFIE", "TERRORISE", "PEUREUX", "POLTRON", "COUARD", "TIMORE", "ANXIEUX", "PUSILLANIME", "CRAINDRE", "PANIQUER", "APPREHENDER", "REDOUTER", "EFFRAYER", "TERRIFIER", "TERRORISER", "AFFOLER", "EPOUVANTER", "APEURER", "EFFAROUCHER"]

// 2. Stocker dans une variable un mot aléatoire obtenu du tableau

let randomNumber = Math.floor(Math.random() * (word.length))  // variable nombre aléatoire
let randomWord = word[randomNumber]
let underscore = [] //Variable qui scotckera l'état du mot à trouver

// 3. Transformer le mot "solution" en tableau de lettres (1 index = 1 lettre du mot)

randomWord = randomWord.split('')
console.log(randomWord)

// 4. Initialiser un compteur d'erreur à 0

let errorCounter = 0
let count = 0 // compteur de lettre juste

// 5. Pour chaque element du tableau, afficher un "_" dans la zone "à deviner"

for (let i = 0; i < randomWord.length; i++) {
    underscore.push('_')
}
document.querySelector('#hiddenWord').innerHTML = underscore.join(' ') // on lie entre eux les "_" qu'on a push dans le tableau "underscore" par des espaces
// et on affiche le tout dans la balise HTML choisit

let buttons = document.querySelectorAll('button') //variable pour sélectionner tous les <button>

// 6. au clic sur un bouton du clavier

for (let button of buttons) {
    button.addEventListener('click', function () {
        let letter = this.innerHTML // on stock le contenu de l'élément cliqué dans une variable
        let error = true //erreur actif par défaut
        // a. faire disparaitre les boutons HTML cliqués

        this.style.display = 'none'

        // b. POUR chaque élement du tableau "randomWord"

        for (let i = 0; i < randomWord.length; i++) {
            if (letter === randomWord[i]) {    // Si contenu du bouton cliqué === une des lettres du tableau randomWord
                underscore[i] = letter // ALORS on remplace le "_" correspondant par le contenu du bouton cliqué dans le tableau underscore en se repérant avec [i]
                error = false // Alors erreur inactif 
                count++ // on incrémentaire le compteur de lettre juste
                console.log(count)
                document.querySelector('#hiddenWord').innerHTML = underscore.join(' ') //on affiche le nouveau contenu de underscore à chaque nouvelle correspondance
            }
        }

        if (error === true) {    // Si il y a une erreur (error === true) 
            errorCounter++ // on incrémente le compteur d'erreur
            document.querySelector('#hanged').innerHTML = `<img src="img/pendu${errorCounter}.png">` // on ajoute une image du pendu dont le nom === valeur du compteur d'erreur
        }

        if (errorCounter >= 4) {   // SI le compteur d'erreurs >= nombre d'image dispo (nb d'erreur max)
            document.getElementById('keyboard').style.display = 'none' //je fais disparaître le clavier
            document.getElementById('loose').style.display = 'block'  // et apparaître le message de defaite
        }
        console.log(underscore)

        // 8. Si count === longueur du mot "solution"
        if (count === underscore.length) {
            document.getElementById('keyboard').style.display = 'none'
            document.querySelector('#loose').innerHTML = 'You live...'   // Partie gagnée
            document.getElementById('loose').style.display = 'block'
        }
    })
}


