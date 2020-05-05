// Création des 30 personnages
for (let i = 0; i < 31; i++) {
    let img = document.createElement('img'); 
    img.src = './src/man.png';
    img.style = "margin-left: 10px" 
    document.getElementById('people').appendChild(img);
    
}

let CreationFormulaire = ()=>{
    //Création du formulaire au clics
    let Form = document.createElement('form');
    Form.setAttribute('method',"post");
    Form.setAttribute('action',"#");
    UnePersonne.appendChild(Form);

    let Select = document.createElement('select');
    Select.setAttribute('name', "selection");
    Select.setAttribute('id', "selection");
    document.querySelector('form').appendChild(Select);

    let OptionDev = document.createElement('option');
    OptionDev.setAttribute('value', "Dev");
    document.querySelector('Select').appendChild(OptionDev);
}



//Détection clic de chaque personnage
let TousLesGens = document.querySelectorAll('#people img');
for (let i = 0; i < TousLesGens.length; i++) {
    var UnePersonne = TousLesGens[i];
    this.addEventListener('click',()=>{
        
        CreationFormulaire();
    });
}