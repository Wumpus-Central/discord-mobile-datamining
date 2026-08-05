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
  const experiment = require("HolidayEventsConfig.tsx").experiment;
  if (experiment != null) {
    const name = experiment.definition.name;
  }
  let isEligibleResult = require("HolidayEventsUtils.tsx").isEligible();
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
      require("../soundpacks/SoundpackActions.tsx") /* setSoundpack */.setSoundpack(tmp3(16327).soundpack, name);
      const obj3 = require("../soundpacks/SoundpackActions.tsx") /* setSoundpack */;
    }
  } else {
    require("../soundpacks/SoundpackActions.tsx") /* setSoundpack */.setSoundpack(Soundpacks.CLASSIC, null);
    const obj2 = require("../soundpacks/SoundpackActions.tsx") /* setSoundpack */;
  }
};
prototype["updateRingtone"] = function updateRingtone() {
  if (obj.isEligible()) {
    const tmpResult = require("../soundpacks/getSoundsForPack.tsx");
    if (null != tmpResultResult.call_ringing) {
      require("setIncomingRingtone.android.tsx") /* setIncomingRingtone */.setIncomingRingtone("call_ringing", `${tmp7.call_ringing}.mp3`);
      const obj3 = require("setIncomingRingtone.android.tsx") /* setIncomingRingtone */;
    }
    tmpResultResult = require("../soundpacks/getSoundsForPack.tsx")(store.getSoundpack());
  } else {
    require("setIncomingRingtone.android.tsx") /* setIncomingRingtone */.setIncomingRingtone("call_ringing", "call_ringing.mp3");
    const obj2 = require("setIncomingRingtone.android.tsx") /* setIncomingRingtone */;
  }
};
const holidayEventsManager = new HolidayEventsManager();
const result = require("Soundpacks").fileFinishedImporting("modules/holidays/HolidayEventsManager.tsx");

export default holidayEventsManager;