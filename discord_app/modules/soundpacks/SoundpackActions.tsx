// === Module 16597: setSoundpack ===

// Module 16597 (setSoundpack)
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import Soundpacks from "Soundpacks" /* 10041 */;
import { AnalyticEvents } from "ME" /* 676 */;

const result = require("obj132").fileFinishedImporting("modules/soundpacks/SoundpackActions.tsx");

export const setSoundpack = function setSoundpack(CLASSIC, name) {
  let obj = { soundpack: CLASSIC, previous_soundpack: soundpack.getSoundpack() };
  obj.track(AnalyticEvents.SOUNDPACK_UPDATED, obj);
  obj = { type: "SET_SOUNDPACK", soundpack: CLASSIC, forExperimentId: name };
  dispatcherDefault.dispatch(obj);
};