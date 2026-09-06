// discord_app/modules/holidays/HolidayEventsManager.tsx
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import getSoundPackDefault from "../soundpacks/getSoundsForPack.tsx";
import HolidayEmojiAnimationTypeDefault from "HolidayEventsConfig.tsx";
import HolidayEmojiAnimationTypeDefault2 from "HolidayEventsUtils.tsx";
import setSoundpack from "../soundpacks/SoundpackActions.tsx";
import setIncomingRingtone from "setIncomingRingtone.android.tsx";
import closure_3 from "../experiments/apex/ApexExperimentStore.tsx";
import closure_4 from "../soundpacks/SoundpackStore.tsx";
import { Soundpacks } from "../soundpacks/Constants.tsx";

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
      isEligibleResult = null != tmp3(17381).soundpack;
    }
    if (isEligibleResult) {
      isEligibleResult = name !== lastSoundpackExperimentId;
    }
    if (isEligibleResult) {
      isEligibleResult = soundpack !== tmp3(17381).soundpack;
    }
    if (isEligibleResult) {
      setSoundpack.setSoundpack(tmp3(17381).soundpack, name);
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
