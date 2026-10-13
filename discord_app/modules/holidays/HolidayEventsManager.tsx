// === Module 18124: HolidayEventsManager ===

// Module 18124 (HolidayEventsManager)
import getSoundsForPackDefault from "getSoundsForPack" /* 10983 */;
import HolidayEventsConfigDefault from "HolidayEventsConfig" /* 18125 */;
import HolidayEventsUtilsDefault from "HolidayEventsUtils" /* 18129 */;
import SoundpackActions from "SoundpackActions" /* 18130 */;
import setIncomingRingtone from "setIncomingRingtone" /* 18131 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1259 */;
import SoundpackStore from "SoundpackStore" /* 10981 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6808 */;

require = fn;
const Soundpacks = fn(10982).Soundpacks;
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