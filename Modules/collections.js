/**
 * @class
 */
class Skill {

    /**
     * Title of the `Skill`
     * @type {string} 
     */
    #title;

    /**
     * Array of strings representing the steps of the `Skill`
     * @type {Array<string>}
     */
    #steps;

    /**
     * @constructor
     * @param {string} title - Title of the `Skill`
     * @param {Array<string>} [steps] - Array of strings defining the steps of the `Skill` 
     */
    constructor (title, steps=[]) {
        this.#title = title;
        this.#steps = steps;
    }

    get title() { return this.#title }
    get steps() { return this.#steps }

    set title(title) { this.#title = title }
    set steps(steps) { this.#steps = steps }

}

const skills = {

    "Collare Cervicale": new Skill(
        "Collare Cervicale",
        [
            "Fa immobilizzare il capo in posizione neutra",
            "Si presenta al paziente e gli spiega la manovra",
            "Libera il collo da impedimenti e ispeziona il collo",
            "Misura con le dita affiancate la distanza tra il mento ed il margine superiore del muscolo trapezio (base del collo)",
            "Identifica il collare della misura adeguata rapportando la misura con la parte laterale del collare",
            "Afferra con la mano la parte anteriore del collare piegandola leggermente su se stessa",
            "Posiziona la parte anteriore facendola scivolare sino ad appoggiarsi alla parte inferiore della mandibola",
            "Fissa la parte anteriore con il velcro senza ruotare il collo",
            "Posiziona la parte posteriore",
            "Stringe il velcro applicando trazione di eguale forza da entrambi i lati in contemporanea",
            "Posiziona uno spessore adeguato sotto la nuca (se necessario)",
            "Fa continuare il mantenimento dell'immobilizzazione amnuale al secondo soccorritore"
        ]
    ),
    "Rimozione Del Casco": new Skill(
        "Rimozione Del Casco",
        [
            "Fa immobilizzare il capo",
            "Chiama il paziente, apre la visiera, si presenta e gli spiega la manovra",
            "Rimuove oggetti mobili non conficcati (occhiali, auricolari, etc.)",
            "Fa raggiungere e mantenere posizione neutra del capo, allinea gli arti del paziente (se necessario)",
            "Slaccia o taglia il cinturino, controlla il collo",
            "Inserisce una mano sotto il casco e afferra la nuca (gomito e avambraccio appoggiato a terra)",
            "Posiziona delicatamente l'avambraccio sul torace e afferra la mandibola con pollice e indice",
            "Il 2° soccorritore afferra i lati del casco con il cinturino, li allarga, bascula il casco all'indietro ed inizia a sfilarlo",
            "Quando è visibile il naso, avvisa il 1° soccorritore di tenersi pronto e sfila il casco",
            "Il 1° soccorritore mantiene stabile il capo (attenzione alla mano sulla nuca che si sposta sorreggendo il capo) dopo l'estrazione completa del casco",
            "Il 2° soccorritore afferra il capo e lo immobilizza in posizione neutra",
            "Da indicazione di posizionare il collare cervicale (previa ulteriore valutazione del collo"
        ]
    ),
    "Pronosupinazione Su Terreno": new Skill(
        "Pronosupinazione Su Terreno",
        [
            "Fa immobilizzare manualmente il capo, in posizione già pronta per la rotazione al 1° soccorritore, si presenta al paziente, gli spiega la manovra (2° soccorritore)",
            "Allinea gli arti superiori lungo l'asse del corpo e gli arti inferiori avvicinandoli tra loro senza effettuare rotazioni o trazioni anomale",
            "Si inginocchia a lato del paziente posiziona le mani all'altezza della spalla e del bacino contenendo il polso del paziente",
            "Il 3° soccorritore si posiziona a lato del paziente, con la mano a livello del torace incrociando il braccio con quello del 2° soccorritore e l'altra mano a livello del fermore poco sopra l'articolazione del ginocchio",
            "Il 1° soccorritore (alla testa) dà il via alla manovra di rotazione del paziente di 90° (sul fianco); la testa va portata in posizione neutra",
            "Il 2° soccorritore cambia orientamento delle mani; sposta la mano dalla spalla al centro del dorso posteriormente a la mano del bacino lungo il tronco anteriormente",
            "Il 3° soccorritore cambia orientamento delle mani; sposta la mano dal torace al centro del tratto lombo-sacrale posteriormente a la mano sul femore lungo il bacino anteriormente",
            "Al via del 1° soccorritore si porta il paziente in posizione supina mantenendo la colonna vertebrale allineata"
        ]

    )
}