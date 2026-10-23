// === Module 18742: HolidayEventsManager ===

// Module 18742 (HolidayEventsManager)
import getSoundsForPackDefault from "getSoundsForPack" /* 11485 */;
import HolidayEventsConfigDefault from "HolidayEventsConfig" /* 18743 */;
import HolidayEventsUtilsDefault from "HolidayEventsUtils" /* 18747 */;
import SoundpackActions from "SoundpackActions" /* 18748 */;
import setIncomingRingtone from "setIncomingRingtone" /* 18749 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1261 */;
import SoundpackStore from "SoundpackStore" /* 11483 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7199 */;

require = fn;
const Soundpacks = fn(11484).Soundpacks;
class HolidayEventsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    map = new Map();
    applyArgumentsResult.stores = map.set(closure_3, () => applyArgumentsResult.handleExperimentUpdated());
    applyArgumentsResult.actions = { NOTIFICATIONS_SET_DISABLED_SOUNDS: applyArgumentsResult.updateRingtone };
    applyArgumentsResult.handleExperimentUpdated = function handleExperimentUpdated() {
      const isDesktopOnly = HolidayEventsConfigDefault.isDesktopOnly;
      let tmp = !isDesktopOnly;
      if (!isDesktopOnly) {
        tmp = null != AuthenticationStore.getId();
      }
      if (tmp) {
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
  if (!isEligibleResult) {
    if (soundpack !== Soundpacks.CLASSIC) {
      SoundpackActions.setSoundpack(tmp6.CLASSIC, null);
    }
  }
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