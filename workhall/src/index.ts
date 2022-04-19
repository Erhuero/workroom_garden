/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
    
    WA.room.onEnterLayer('ttsZone_1').subscribe(() => {
        currentPopup = WA.ui.openPopup("tts1Popup","TTS 1 : Automatisation robotisée des processus (RPA)",[]);
    })

    WA.room.onEnterLayer('ttsZone_2').subscribe(() => {
        currentPopup = WA.ui.openPopup("tts2Popup","TTS 2 : Des containers dans notre paysage technologique",[]);
    })

    WA.room.onEnterLayer('ttsZone_3').subscribe(() => {
        currentPopup = WA.ui.openPopup("tts3Popup","TTS 3: Accessibilité et le Handicap",[]);
    })

    WA.room.onEnterLayer('ttsZone_4').subscribe(() => {
        currentPopup = WA.ui.openPopup("tts4Popup","TTS 4: Pratiques centrées utilisateurs : l'UX research",[]);
    })

    WA.room.onEnterLayer('ttsZone_5').subscribe(() => {
        currentPopup = WA.ui.openPopup("tts5Popup","TTS 5: Outillage Ansible, AWX et Maestro",[]);
    })

    WA.room.onEnterLayer('ttsZone_6_1').subscribe(() => {
        currentPopup = WA.ui.openPopup("tts6_1Popup","TTS 6 partie 1: Intelligence Artificielle - Vulgarisation et démystification",[]);
    })

    WA.room.onEnterLayer('ttsZone_6_2').subscribe(() => {
        currentPopup = WA.ui.openPopup("tts6_2Popup","TTS 6 partie 2: Cadrer et piloter les cas d’usage dans les mutuelles et les assurances",[]);
    })

    WA.room.onEnterLayer('ttsZone_7').subscribe(() => {
        currentPopup = WA.ui.openPopup("tts7Popup", "TTS 7 : L’automatisation dans les projets applicatifs, accélérateur DevSecOps d’aujourd’hui et de demain",[]);
    })

    WA.room.onEnterLayer('ttsZone_8').subscribe(() => {
        currentPopup = WA.ui.openPopup("tts8Popup","TTS 8 : L’écosystème des applications mobiles MGEN",[]);
    })

    WA.room.onEnterLayer('ttsZone_9').subscribe(() => {
        currentPopup = WA.ui.openPopup("tts8Popup","TTS 9 : Les cas d’usage de la Blockchain",[]);
    })


    WA.room.onLeaveLayer('ttsZone_1').subscribe(closePopUp)
    WA.room.onLeaveLayer('ttsZone_2').subscribe(closePopUp)
    WA.room.onLeaveLayer('ttsZone_3').subscribe(closePopUp)
    WA.room.onLeaveLayer('ttsZone_4').subscribe(closePopUp)
    WA.room.onLeaveLayer('ttsZone_5').subscribe(closePopUp)
    WA.room.onLeaveLayer('ttsZone_6_1').subscribe(closePopUp)
    WA.room.onLeaveLayer('ttsZone_6_2').subscribe(closePopUp)
    WA.room.onLeaveLayer('ttsZone_7').subscribe(closePopUp)
    WA.room.onLeaveLayer('ttsZone_8').subscribe(closePopUp)
    WA.room.onLeaveLayer('ttsZone_9').subscribe(closePopUp)


    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));
    
}).catch(e => console.error(e));


function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

/*
let messagePopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
    
    WA.room.onEnterLayer('ttsZone2').subscribe(() => {
        currentPopup = WA.ui.openPopup("messagePopup","TTS 2 : Des containers dans notre paysage technologique",[]);
    })

    WA.room.onLeaveLayer('ttsZone2').subscribe(closeMessagePopUp)


    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));
    
}).catch(e => console.error(e));


function closeMessagePopUp(){
    if (messagePopup !== undefined) {
        messagePopup.close();
        messagePopup = undefined;
    }
}
*/