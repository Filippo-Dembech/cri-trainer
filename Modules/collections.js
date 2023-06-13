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

    ),
    "Pronosupinazione Su Tavola Spinale": new Skill(
        "Pronosupinazione Su Tavola Spinale",
        [
            "Fa immobilizzare manualmente il capo, in posizione già pronta per la rotazione",
            "Si presenta al paziente e gli spiega la manovra",
            "Allinea gli arti del paziente lungo l'asse del corpo",
            "Fa posizionare la tavola spinale a lato del paziente (lato opposto dello sguardo)",
            "Si inginocchia a lato del paziente, con un ginocchio sopra la tavola spinale e posiziona le mani all'altezza della spalla e del bacino contenendo il polso del paziente",
            "Fa posizionare il 3° soccorritore a lato del paziente, con un ginocchio sopra la tavola spinale con le mani a livello del torace e del femore",
            "Al via del soccorritore alla testa, si ruota il paziente di 90° gradi; la testa va portata in posizione neutra",
            "Il 2° e 3° soccorritore spostano le mani postariormente sulla schiena",
            "Al via del soccorritore alla testa, si ruota il paziente adagiandolo sulla tavola spinale",
            "Il soccorritore alla testa comunica la necessità di centrare il paziente sulla spinale",
            "Se necessario i soccorritori si posizionano a lato (o a cavalcioni) del paziente, lo afferrano all'altezza delle spalle e del bacino",
            "Al via del soccorritore alla testa, si centra il paziente sulla tavola spinale"
        ]
    ),
    "Immobilizzazione Frattura": new Skill(
        "Immobilizzazione Frattura",
        [
            "Si presenta la paziente e gli spiega la manovra",
            "Individua il punto dolente sull'arto, taglia gli indumenti ed espone l'arto",
            "Se indicato rimuove la scarpa, taglia o allenta le stringhe evitando movimenti bruschi",
            "Valuta il colorito cutaneo e la sensibilità, se possibile valuta polso periferico",
            "Afferra l'arto con le due mani (fulcro sulle articolazioni prossimali e distali) e lo riallinea, se possibile e se non frattura esposta",
            "Il secondo soccorritore prepara la stecca di misura adeguata distandendo il contenuto della stessa",
            "Solleva l'arto di pochi centimetri mantenendolo in lieve trazione e fa infilare la stecca al di sotto dell'arto",
            "Adagia l'arto sulla stecca e continua a mantenerlo immobilizzato con le mani",
            "Fa mettere in depressione la stecca / Fissa i lacci con il velcro/gancio",
            "Si assicura del corretto posizionamento dell'arto all'interno del presidio",
            "Rivaluta la presenza di dolore, il colorito cutaneo e la sensibilità",
            "Controlla la tenuta del presidio e fa predisporre il materiale necessario al caricamento ed al trasporto del peziente"
        ]

    ),
    "Estricazione Rapida (Rautek)": new Skill(
        "Estricazione Rapida (Rautek)",
        [
            "Valuta la scena e il numero di soccorritori per effettuare la manovra",
            "Cerca la collaborazione del paziente, spiegandogli la manovra",
            "Fa predisporre il braccio sotto l'ascella distale del paziente ed afferra l'avambraccio opposto",
            "Infila l'altra mano sotto l'ascella più vicina della vittima e blocca la testa a livello della mandibola facendola appoggiare sulla propria spalla",
            "Tira la vittima verso di sé appoggiandola sul priorio torace e si allontana dall'auto",
            "Il secondo soccorritore controlla l'estricazione degli arti inferiori e collabora all'effettuazione della manovra dopo",
            "Insieme al secondo soccorritore esegue la manovra di posizionamento su tavola spinale e gli fa immobilizzare il rachide cervicale"
        ]
    ),
    "Immobilizzatore Spinale (KED)": new Skill(
        "Immobilizzatore Spinale (KED)",
        [
            "Fa immobilizzare il capo in posizione neutra",
            "Chiama il paziente, si presenta, spiega la manovra; posiziona il collare cervicale previo controllo del collo",
            "Fa distanziare il paziente dallo schienale con l'aiuto di un altro soccorritore (mano sul petto e altra dietro la schiena)",
            "Posiziona l'immobilizzatore, infilandolo dal basso verso l'alto dietro la schina del paziente con le cinghie sulla parete esterna",
            "Centra l'immobilizzatore dietro il paziente; sfila i ferma gambe e li estrae",
            "Avvolge i supporti laterali al tronco del paziente e chiude le tre cinghie nell'ordine: centrale, inferiore e superiore",
            "Tira l'immobilizzatore verso l'alto in modo da farlo calzare bene sotto le ascelle e tira bene le tre cinghie (attenzione ai problemi respiratori e addominali)",
            "Colloca, con un movimento lento e a zig zag, le cinghie per le gambe portandole sotto le cosce e le natiche e le fissa ciascuna dal suo lato",
            "Se necessario posiziona il cuscino in modo da riempie il vuoto tra la nuca della vittima e l'immobilizzatore",
            "Posiziona i supporti per il capo fissandoli con i lacci in velcro, il fermafronte e il sottogola vanno incrociati ai lati",
            "Controlla la tenuta di tutte le cinghie posizionate",
            "Estrae il paziente con il terzo soccorritore ruotandolo sulla spinale con l'ausilio delle maniglie, il primo soccorritore sostiene gli arti inferiori"
        ]
    ),
    "Ragno e Fermacapo": new Skill(
        "Ragno e Fermacapo",
        [
            "Verifica la corretta posizione del paziente sulla tavola spinale e l'immobilizzazione della testa mantenuta da un soccorritore",
            "Appoggia il ragno sul corpo del paziente regolando la lunghezza della cinghia verticale",
            "Posiziona le cinghie a V all'altezza delle spalle, nella maniglia più bassa fasciando la parte superiore delle spalle",
            "Posiziona le cinghie sopra la caviglia",
            "Posiziona le cinghie a livello toracico sotto la linea mammaria (contenendo le braccia)",
            "Posiziona le cinghie a livello del bacino (contenendo i polsi del paziente)",
            "Posiziona le cinghie sopra l'articolazione del ginocchio (sotto al ginocchio se la tavola deve essere messa in verticale)",
            "Tira le cinghie applicando trazione di eguale forza da entrambi i lati, mettendosi a cavalcioni della tavola spinale, facendo attenzione a eventuali problemi respiratori o addominali",
            "Posiziona i 2 cuscinetti fermacapo",
            "Posiziona i cinghioli sulla fronte e sul collare fissandoli ai lati in modo incrociato",
            "Fa sospendere l'immobilizzazione manuale del capo",
            "Solleva la spinale ai lati utilizzando le maniglie laterali"
        ]
    ),
    "Materasso A Depressione": new Skill(
        "Materasso A Depressione",
        [
            "Stende il materassino al suolo facendo attenzione agli oggetti taglienti",
            "Distribuisce uniformemente le palline di polistirolo al suo interno eliminando le pieghe della tela",
            "Solleva il paziente con la barella a cucchiaio, coordinando l'equipaggio",
            "Depone il paziente sul materassino con la testa allineata al bordo superiore",
            "Toglie le valvole della barella a cucchiaio mentenendo la stabilità del rachide"
        ]
    )

}