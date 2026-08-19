// === Module 12548: getUserAgnosticState ===

// Module 12548 (getUserAgnosticState)
import obj132 from "obj132" /* 2 */;
import obj1322 from "obj132" /* 500 */;
import initializeDefault from "initialize" /* 589 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;

const AnalyticEvents = ME.AnalyticEvents;
let c4 = false;
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class MobileVoiceOverlayStore extends DeviceSettingsStore {
}
const prototype = MobileVoiceOverlayStore.prototype;
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return { enabled: c4 };
};
prototype["initialize"] = function initialize(enabled) {
  let flag;
  if (enabled != null) {
    flag = enabled.enabled;
  }
  if (flag == null) {
    flag = false;
  }
};
prototype["getEnabled"] = function getEnabled() {
  let isAndroidResult = obj1322.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = !isMetaQuest.isMetaQuest();
    const tmpResult = isMetaQuest;
  }
  if (isAndroidResult) {
    isAndroidResult = c4;
  }
  return isAndroidResult;
};
MobileVoiceOverlayStore.displayName = "MobileVoiceOverlayStore";
MobileVoiceOverlayStore.persistKey = "MobileVoiceOverlayStore";
const mobileVoiceOverlayStore = new MobileVoiceOverlayStore(dispatcherDefault, {
  MOBILE_VOICE_OVERLAY_STATE_CHANGED: function handleMobileVoiceOverlayStateChanged(enabled) {
    const obj = { enabled: enabled.enabled };
    obj.track(AnalyticEvents.MOBILE_OVERLAY_TOGGLED, obj);
    enabled = enabled.enabled;
  }
});
const result = obj132.fileFinishedImporting("stores/native/MobileVoiceOverlayStore.tsx");

export default mobileVoiceOverlayStore;
export const isMobileOverlaySupported = function isMobileOverlaySupported() {
  let isAndroidResult = obj1322.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = !isMetaQuest.isMetaQuest();
    const tmpResult = isMetaQuest;
  }
  return isAndroidResult;
};