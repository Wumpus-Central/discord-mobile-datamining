// === Module 17385: setSoundpack ===

// Module 17385 (setSoundpack)
import dispatcherDefault from "dispatcher" /* 573 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 1242 */;
import closure_2 from "Soundpacks" /* 9903 */;
import { AnalyticEvents } from "ME" /* 1074 */;

const result = require("set").fileFinishedImporting("modules/soundpacks/SoundpackActions.tsx");

export const setSoundpack = function setSoundpack(CLASSIC, name) {
  let obj = expandEventPropertiesDefault;
  obj = { soundpack: CLASSIC, previous_soundpack: soundpack.getSoundpack() };
  obj.track(AnalyticEvents.SOUNDPACK_UPDATED, obj);
  obj = { type: "SET_SOUNDPACK", soundpack: CLASSIC, forExperimentId: name };
  dispatcherDefault.dispatch(obj);
};