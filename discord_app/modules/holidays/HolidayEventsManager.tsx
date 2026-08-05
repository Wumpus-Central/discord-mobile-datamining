import { getSoundPack } from "../soundpacks/getSoundsForPack.tsx";
import { setSoundpack } from "../soundpacks/SoundpackActions.tsx";
import { HolidayEmojiAnimationType } from "HolidayEventsConfig.tsx";
import { HolidayEmojiAnimationType } from "HolidayEventsUtils.tsx";
import { setIncomingRingtone } from "setIncomingRingtone.android.tsx";
// discord_app/modules/holidays/HolidayEventsManager.tsx
import initialize from "initialize";
import Soundpacks from "Soundpacks";
import { Soundpacks } from "Soundpacks";
import "initialize";

let require = arg1;
class HolidayEventsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    map = new Map();
    applyArgumentsResult.stores = map.set(initialize, () => applyArgumentsResult.handleExperimentUpdated());
    applyArgumentsResult.actions = { NOTIFICATIONS_SET_DISABLED_SOUNDS: applyArgumentsResult.updateRingtone };
    applyArgumentsResult.handleExperimentUpdated = function handleExperimentUpdated() {
      if (!outer1_1(outer1_2[4]).isDesktopOnly) {
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
  const experiment = HolidayEmojiAnimationType.experiment;
  if (experiment != null) {
    const name = experiment.definition.name;
  }
  let isEligibleResult = HolidayEmojiAnimationType.isEligible();
  if (isEligibleResult) {
    if (isEligibleResult) {
      isEligibleResult = null != tmp3(16327).soundpack;
    }
    if (isEligibleResult) {
      isEligibleResult = name !== lastSoundpackExperimentId;
    }
    if (isEligibleResult) {
      isEligibleResult = soundpack !== tmp3(16327).soundpack;
    }
    if (isEligibleResult) {
      setSoundpack /* setSoundpack */.setSoundpack(tmp3(16327).soundpack, name);
      const obj3 = setSoundpack /* setSoundpack */;
    }
  } else {
    setSoundpack /* setSoundpack */.setSoundpack(Soundpacks.CLASSIC, null);
    const obj2 = setSoundpack /* setSoundpack */;
  }
};
prototype["updateRingtone"] = function updateRingtone() {
  if (obj.isEligible()) {
    const tmpResult = getSoundPack;
    if (null != tmpResultResult.call_ringing) {
      setIncomingRingtone /* setIncomingRingtone */.setIncomingRingtone("call_ringing", `${tmp7.call_ringing}.mp3`);
      const obj3 = setIncomingRingtone /* setIncomingRingtone */;
    }
    tmpResultResult = getSoundPack(store.getSoundpack());
  } else {
    setIncomingRingtone /* setIncomingRingtone */.setIncomingRingtone("call_ringing", "call_ringing.mp3");
    const obj2 = setIncomingRingtone /* setIncomingRingtone */;
  }
};
const holidayEventsManager = new HolidayEventsManager();
const result = require("Soundpacks").fileFinishedImporting("modules/holidays/HolidayEventsManager.tsx");

export default holidayEventsManager;