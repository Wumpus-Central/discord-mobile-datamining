// === Module 10888: getUserAgnosticState ===

// Module 10888 (getUserAgnosticState)
import { AnalyticEvents } from "ME";
import { DeviceSettingsStore } from "initialize";

let c4 = false;
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
  let isAndroidResult = require(500) /* set */.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = !require(1577) /* isMetaQuest */.isMetaQuest();
    const tmpResult = require(1577) /* isMetaQuest */;
  }
  if (isAndroidResult) {
    isAndroidResult = c4;
  }
  return isAndroidResult;
};
MobileVoiceOverlayStore.displayName = "MobileVoiceOverlayStore";
MobileVoiceOverlayStore.persistKey = "MobileVoiceOverlayStore";
const mobileVoiceOverlayStore = new MobileVoiceOverlayStore(require("dispatcher"), {
  MOBILE_VOICE_OVERLAY_STATE_CHANGED: function handleMobileVoiceOverlayStateChanged(enabled) {
    let obj = importDefault(698);
    obj = { enabled: enabled.enabled };
    obj.track(AnalyticEvents.MOBILE_OVERLAY_TOGGLED, obj);
    enabled = enabled.enabled;
  }
});
const result = require("set").fileFinishedImporting("stores/native/MobileVoiceOverlayStore.tsx");

export default mobileVoiceOverlayStore;
export const isMobileOverlaySupported = function isMobileOverlaySupported() {
  let isAndroidResult = require(500) /* set */.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = !require(1577) /* isMetaQuest */.isMetaQuest();
    const tmpResult = require(1577) /* isMetaQuest */;
  }
  return isAndroidResult;
};