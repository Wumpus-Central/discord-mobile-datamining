// === Module 17194: updateSoundpack ===

// Module 17194 (updateSoundpack)
import initializeDefault from "initialize" /* 5494 */;
import getSoundPackDefault from "getSoundPack" /* 10018 */;
import HolidayEmojiAnimationTypeDefault from "HolidayEmojiAnimationType" /* 17195 */;
import HolidayEmojiAnimationTypeDefault2 from "HolidayEmojiAnimationType" /* 17198 */;
import setSoundpack from "setSoundpack" /* 17199 */;
import setIncomingRingtone from "setIncomingRingtone" /* 17200 */;
import closure_3 from "initialize" /* 1209 */;
import closure_4 from "Soundpacks" /* 10016 */;
import { Soundpacks } from "Soundpacks" /* 10017 */;

require = arg1;
initializeDefault;
class HolidayEventsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    map = new Map();
    applyArgumentsResult.stores = map.set(closure_3, () => applyArgumentsResult.handleExperimentUpdated());
    applyArgumentsResult.actions = { NOTIFICATIONS_SET_DISABLED_SOUNDS: applyArgumentsResult.updateRingtone };
    applyArgumentsResult.handleExperimentUpdated = function handleExperimentUpdated() {
      if (!closure_1_1(closure_1_2[4]).isDesktopOnly) {
        applyArgumentsResult.updateSoundpack();
        applyArgumentsResult.updateRingtone();
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = HolidayEventsManager.prototype;
prototype["updateSoundpack"] = function updateSoundpack() {
  const soundpack = store.getSoundpack();
  const lastSoundpackExperimentId = store.getLastSoundpackExperimentId();
  const experiment = HolidayEmojiAnimationTypeDefault.experiment;
  if (experiment != null) {
    const name = experiment.definition.name;
  }
  let isEligibleResult = HolidayEmojiAnimationTypeDefault2.isEligible();
  if (isEligibleResult) {
    if (isEligibleResult) {
      isEligibleResult = null != tmp3(17195).soundpack;
    }
    if (isEligibleResult) {
      isEligibleResult = name !== lastSoundpackExperimentId;
    }
    if (isEligibleResult) {
      isEligibleResult = soundpack !== tmp3(17195).soundpack;
    }
    if (isEligibleResult) {
      setSoundpack.setSoundpack(tmp3(17195).soundpack, name);
      const obj3 = setSoundpack;
    }
  } else {
    setSoundpack.setSoundpack(Soundpacks.CLASSIC, null);
    const obj2 = setSoundpack;
  }
};
prototype["updateRingtone"] = function updateRingtone() {
  if (obj.isEligible()) {
    const tmpResult = getSoundPackDefault;
    if (null != tmpResultResult.call_ringing) {
      setIncomingRingtone.setIncomingRingtone("call_ringing", `${tmp7.call_ringing}.mp3`);
      const obj3 = setIncomingRingtone;
    }
    tmpResultResult = getSoundPackDefault(store.getSoundpack());
  } else {
    setIncomingRingtone.setIncomingRingtone("call_ringing", "call_ringing.mp3");
    const obj2 = setIncomingRingtone;
  }
};
const holidayEventsManager = new HolidayEventsManager();
const result = require("set").fileFinishedImporting("modules/holidays/HolidayEventsManager.tsx");

export default holidayEventsManager;