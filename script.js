function changerImage() {
    const select = document.getElementById("memorySelect");
    const image = document.getElementById("memoryImage");
    const value = select.value;

    if (value === "") {
        image.style.display = "none";
        image.src = "";
        image.alt = "";
        return;
    }

    const cheminImage = "ressources1/" + value + ".png";

    image.src = cheminImage;
    image.alt = "Image de " + value;
    image.style.display = "block";
}

function passwordVisibility() {

    //ajouter un evènement au click sur l'image
    document.getElementById('oeil').addEventListener('click', function () {
    
        //changer la source de l'image, le alt et le type de l'input
        const pwdInput = document.getElementById('idMDP')

        if (pwdInput.type === "password") {
            pwdInput.type = "text";
            this.src = "ressources1/oeil-ouvert.png"
            //this.setAttribute('src', 'images/eye-open.png');
            this.alt = "Icône oeil ouvert"
        } else {
            pwdInput.type = "password";
            this.src = "ressources1/oeil-ferme.png"
            this.alt = "Icône oeil fermé"
        }
    })
}

function checkPassword() {
    let pwd = document.getElementById('idMDP').value

    let pwdLen = checkPwdLength(pwd)
    let pwdNum = checkPwdNumber(pwd)
    let pwdMin = checkPwdMinus(pwd)
    let pwdMax = checkPwdMaxus(pwd)

    if (pwdLen && pwdNum && pwdMin && pwdMax) {
        document.getElementById('creation-compte').disabled = false
    } else {
        document.getElementById('creation-compte').disabled = true
    }
}
function checkPwdMinus(pwd) {
    // /[a-z]+/ expression régulière qui vérifie si
    //le mdp contient une minuscule
    let isOk = /[a-z]+/.test(pwd)

    if (isOk) {
        colorTextGreen('minuscule')
    } else {
        colorTextRed('minuscule')
    }

    return isOk
}
function checkPwdMaxus(pwd) {
    // /[A-Z]+/ expression régulière qui vérifie si
    //le mdp contient une majuscule
    let isOk = /[A-Z]+/.test(pwd)

    if (isOk) {
        colorTextGreen('majuscule')
    } else {
        colorTextRed('majuscule')
    }

    return isOk
}
function checkPwdNumber(pwd) {

    // /[0-9]+/ expression régulière qui vérifie si
    //le mdp contient un chiffre
    let isOk = /[0-9]+/.test(pwd)

    if (isOk) {
        colorTextGreen('chiffre')
    } else {
        colorTextRed('chiffre')
    }

    return isOk
}
function checkPwdLength(pwd) {

    let isOk = pwd.length >= 6
    //tester la longueur du mot
    if (isOk) {
        //modifier la couleur de la consigne concernée (vert ou rouge)
        colorTextGreen('nbCaracteres')
    } else {
        colorTextRed('nbCaracteres')
    }

    return isOk
}

function colorTextGreen(id) {
    document.getElementById(id).style.color = "chartreuse"
}

function colorTextRed(id) {
    document.getElementById(id).style.color = "red"
}

function init() {
    passwordVisibility()
    document.getElementById('idMDP').addEventListener('input', checkPassword)
}

window.onload = init

document.getElementById('idMDP').addEventListener('input', checkPasswords);
document.getElementById('idVMDP').addEventListener('input', checkPasswords);

function checkPasswords() {
  const password = document.getElementById('idMDP').value;
  const confirmPassword = document.getElementById('idVMDP').value;
  const btnValider = document.getElementById('valider');

  // Vérification de la correspondance des mots de passe
  if (password === confirmPassword && password !== "") {
    btnValider.disabled = false; // Active le bouton si les mots de passe correspondent
  } else {
    btnValider.disabled = true; // Désactive le bouton si les mots de passe ne correspondent pas
  }
}

document.querySelector("form").addEventListener("submit", function(event) {
  // Récupérer les valeurs des champs mot de passe
  const password = document.getElementById('idMDP').value;
  const confirmPassword = document.getElementById('idVMDP').value;

  // Vérifier si les mots de passe correspondent
  if (password !== confirmPassword) {
    // event.preventDefault(); // Empêcher la soumission du formulaire
    alert("Les mots de passe ne correspondent pas.");
  }
});

