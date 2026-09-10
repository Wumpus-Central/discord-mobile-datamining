// === Module 17473: HolidayEventsManager ===

// Module 17473 (HolidayEventsManager)
import getSoundsForPackDefault from "getSoundsForPack" /* 9975 */;
import HolidayEventsConfigDefault from "HolidayEventsConfig" /* 17474 */;
import HolidayEventsUtilsDefault from "HolidayEventsUtils" /* 17477 */;
import SoundpackActions from "SoundpackActions" /* 17478 */;
import setIncomingRingtone from "setIncomingRingtone" /* 17479 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1236 */;
import SoundpackStore from "SoundpackStore" /* 9973 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7170 */;

require = fn;
const Soundpacks = fn(9974).Soundpacks;
class HolidayEventsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    map = new Map();
    applyArgumentsResult.stores = map.set(closure_3, () => applyArgumentsResult.handleExperimentUpdated());
    applyArgumentsResult.actions = { NOTIFICATIONS_SET_DISABLED_SOUNDS: applyArgumentsResult.updateRingtone };
    applyArgumentsResult.handleExperimentUpdated = function handleExperimentUpdated() {
      if (!HolidayEventsConfigDefault.isDesktopOnly) {
        applyArgumentsResult.updateSoundpack();
        applyArgumentsResult.updateRingtone();
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = HolidayEventsManager.prototype;
prototype["updateSoundpack"] = function updateSoundpack() {
  const soundpack = SoundpackStore.getSoundpack();
  const lastSoundpackExperimentId = SoundpackStore.getLastSoundpackExperimentId();
  const experiment = HolidayEventsConfigDefault.experiment;
  if (experiment != null) {
    const name = experiment.definition.name;
  }
  let isEligibleResult = HolidayEventsUtilsDefault.isEligible();
  if (isEligibleResult) {
    if (isEligibleResult) {
      isEligibleResult = null != HolidayEventsConfigDefault.soundpack;
    }
    if (isEligibleResult) {
      isEligibleResult = name !== lastSoundpackExperimentId;
    }
    if (isEligibleResult) {
      isEligibleResult = soundpack !== HolidayEventsConfigDefault.soundpack;
    }
    if (isEligibleResult) {
      SoundpackActions.setSoundpack(HolidayEventsConfigDefault.soundpack, name);
    }
  } else {
    SoundpackActions.setSoundpack(Soundpacks.CLASSIC, null);
  }
  const tmp3Result = HolidayEventsUtilsDefault;
};
prototype["updateRingtone"] = function updateRingtone() {
  if (obj.isEligible()) {
    const tmpResult = getSoundsForPackDefault;
    if (null != tmpResultResult.call_ringing) {
      setIncomingRingtone.setIncomingRingtone("call_ringing", `${tmp7.call_ringing}.mp3`);
    }
    tmpResultResult = getSoundsForPackDefault(SoundpackStore.getSoundpack());
  } else {
    setIncomingRingtone.setIncomingRingtone("call_ringing", "call_ringing.mp3");
  }
  obj = HolidayEventsUtilsDefault;
};
const holidayEventsManager = new HolidayEventsManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/holidays/HolidayEventsManager.tsx");

export default holidayEventsManager;