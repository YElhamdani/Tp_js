// Création des 30 personnages
for (let i = 0; i < 31; i++) {
    let nombre = 0
    var div = document.createElement('div');
    div.setAttribute('class', "Mesdiv");
    div.setAttribute('id', "id["+ i +"]"  )
    document.getElementById('people').appendChild(div);
    
    
    // var btn = document.createElement('input');
    // btn.setAttribute('type', "button");
    // btn.setAttribute('class', "ok");
    // document.getElementById(i).appendChild(btn);
} 

let CreationFormulaire = ()=>{
    //Création du formulaire au clics
    let Form = document.createElement('form');
    Form.setAttribute('method',"post");
    Form.setAttribute('action',"#");
    document.querySelector('#people').appendChild(Form);

    let Select = document.createElement('select');
    Select.setAttribute('name', "selection");
    Select.setAttribute('id', "selection");
    document.querySelector('form').appendChild(Select);

    let OptionSelect = document.createElement('option');
    OptionSelect.setAttribute('value', "Selection");
    OptionSelect.setAttribute('name', "Selection");
    document.querySelector('select').appendChild(OptionSelect);

    let OptionDev = document.createElement('option');
    OptionDev.setAttribute('value', "Dev");
    OptionDev.setAttribute('name', "Dev");
    document.querySelector('select').appendChild(OptionDev);

    let OptionDesign  = document.createElement('option');
    OptionDesign .setAttribute('value', "Design");
    OptionDesign .setAttribute('name', "Design");
    document.querySelector('select').appendChild(OptionDesign);

    let OptionMkt = document.createElement('option');
    OptionMkt.setAttribute('value', "Mkt");
    OptionMkt.setAttribute('name', "Mkt");
    document.querySelector('select').appendChild(OptionMkt);
    
    let OptionDev_SSelection = document.querySelector('option[name=Selection]').text = "Selection"
    let OptionDev_SDev = document.querySelector('option[name=Dev]').text = "Développement"
    let OptionDev_SDesign = document.querySelector('option[name=Design]').text = "Design"
    let OptionDev_SMkt = document.querySelector('option[name=Mkt]').text = "Marketing"
}



//Détection clic de chaque personnage
let TousLesGens = document.querySelectorAll('#people img');
for (let i = 0; i < TousLesGens.length; i++) {
    let UnePersonne = TousLesGens[i];
    UnePersonne.addEventListener('click',function(){
        
        CreationFormulaire();
       
    });

}

// Génere couleur 
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);
    document.body.style.background = bgColor;
    }




document.getElementsByClassName('ok').onclick = function() {
    CreationFormulaire();
}

document.oncontextmenu = function() {
    CreationFormulaire();
}

