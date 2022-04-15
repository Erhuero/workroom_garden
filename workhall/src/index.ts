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

    WA.room.onLeaveLayer('ttsZone_1').subscribe(closePopUp)
    WA.room.onLeaveLayer('ttsZone_2').subscribe(closePopUp)


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