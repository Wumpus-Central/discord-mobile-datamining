// === Module 17199: setSoundpack ===

// Module 17199 (setSoundpack)
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import closure_2 from "Soundpacks" /* 10016 */;
import { AnalyticEvents } from "ME" /* 673 */;

const result = require("set").fileFinishedImporting("modules/soundpacks/SoundpackActions.tsx");

export const setSoundpack = function setSoundpack(CLASSIC, name) {
  let obj = expandEventPropertiesDefault;
  obj = { soundpack: CLASSIC, previous_soundpack: soundpack.getSoundpack() };
  obj.track(AnalyticEvents.SOUNDPACK_UPDATED, obj);
  obj = { type: "SET_SOUNDPACK", soundpack: CLASSIC, forExperimentId: name };
  dispatcherDefault.dispatch(obj);
};