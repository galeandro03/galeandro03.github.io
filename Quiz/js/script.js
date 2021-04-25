var cognome;
var nome;
var cognome2;
var nome2;
var giorno;
var mese;
var anno;
var punteggio;

function elabora() {
    cognome = document.getElementById("cognome").value.toString().toUpperCase();
    nome = document.getElementById("nome").value.toString().toUpperCase();
    cognome2 = document.getElementById("cognome").value;
    nome2 = document.getElementById("nome").value;
    giorno = document.getElementById("giorno").value;
    mese = document.getElementById("mese").value;
    anno = document.getElementById("anno").value;
    punteggio = 0;
    
    if(cognome != "" && nome != "" && giorno != "" && mese != "" && anno != "" 
       && cognome == cognome2 && nome == nome2){
        // alert("Dati inseriti correttamente");
    }
    else {
        alert("Controlla se hai inserito correttamente i dati anagrafici.")
    }


    var risposta1 = "PHP";

    var risposta1Utente = document.getElementById("d1").value;

    if(risposta1Utente.toString() == risposta1.toString()) {
        punteggio = punteggio +  1;
    }
    

    var risposta2 = "2";

    var risposta2Utente = document.getElementById("d2").value;

    if(risposta2Utente.toString() == risposta2.toString()) {
        punteggio = punteggio +  1;
    }

    if(document.getElementsByName("domanda3")[1].checked){
        punteggio = punteggio + 1;
    }

    if(document.getElementsByName("check")[0].checked && document.getElementsByName("check")[2].checked){
        punteggio = punteggio + 1;
    }

    var risposta5 = "1 byte";

    var risposta5Utente = document.getElementById("domanda5").value;

    if(risposta5Utente.toString() == risposta5.toString()){
        punteggio = punteggio +  1;
    }
    console.log(punteggio);
    document.getElementById("punteggio").value = punteggio;

}

function visualizzaCodice(){
    var codice = cognome.slice(0, 3) + nome.slice(0, 3) + mese.slice(0, 3) + anno.slice(0, 2) + punteggio.toString();
    document.getElementById("up").value = codice;
}