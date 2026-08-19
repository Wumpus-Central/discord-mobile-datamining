// === Module 16592: updateSoundpack ===

// Module 16592 (updateSoundpack)
import initializeDefault from "initialize" /* 5038 */;
import getSoundPackDefault from "getSoundPack" /* 10043 */;
import HolidayEmojiAnimationTypeDefault from "HolidayEmojiAnimationType" /* 16593 */;
import HolidayEmojiAnimationTypeDefault2 from "HolidayEmojiAnimationType" /* 16596 */;
import setSoundpack from "setSoundpack" /* 16597 */;
import setIncomingRingtone from "setIncomingRingtone" /* 16598 */;
import initialize from "initialize" /* 1212 */;
import Soundpacks from "Soundpacks" /* 10041 */;
import { Soundpacks } from "Soundpacks" /* 10042 */;

require = fn;
initializeDefault;
class HolidayEventsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    map = new Map();
    applyArgumentsResult.stores = map.set(closure_3, () => applyArgumentsResult.handleExperimentUpdated());
    applyArgumentsResult.actions = { NOTIFICATIONS_SET_DISABLED_SOUNDS: applyArgumentsResult.updateRingtone };
    applyArgumentsResult.handleExperimentUpdated = function handleExperimentUpdated() {
      if (!HolidayEmojiAnimationTypeDefault.isDesktopOnly) {
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
      isEligibleResult = null != HolidayEmojiAnimationTypeDefault.soundpack;
    }
    if (isEligibleResult) {
      isEligibleResult = name !== lastSoundpackExperimentId;
    }
    if (isEligibleResult) {
      isEligibleResult = soundpack !== HolidayEmojiAnimationTypeDefault.soundpack;
    }
    if (isEligibleResult) {
      setSoundpack.setSoundpack(HolidayEmojiAnimationTypeDefault.soundpack, name);
    }
  } else {
    setSoundpack.setSoundpack(Soundpacks.CLASSIC, null);
  }
  const tmp3Result = HolidayEmojiAnimationTypeDefault2;
};
prototype["updateRingtone"] = function updateRingtone() {
  if (obj.isEligible()) {
    const tmpResult = getSoundPackDefault;
    if (null != tmpResultResult.call_ringing) {
      setIncomingRingtone.setIncomingRingtone("call_ringing", `${tmp7.call_ringing}.mp3`);
    }
    tmpResultResult = getSoundPackDefault(store.getSoundpack());
  } else {
    setIncomingRingtone.setIncomingRingtone("call_ringing", "call_ringing.mp3");
  }
  obj = HolidayEmojiAnimationTypeDefault2;
};
const holidayEventsManager = new HolidayEventsManager();
const result = require("obj132").fileFinishedImporting("modules/holidays/HolidayEventsManager.tsx");

export default holidayEventsManager;