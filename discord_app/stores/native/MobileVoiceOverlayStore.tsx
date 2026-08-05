// discord_app/stores/native/MobileVoiceOverlayStore.tsx
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
  let isAndroidResult = require("../../utils/PlatformUtils.tsx") /* set */.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = !require("../../modules/device/MetaQuestUtils.android.tsx") /* isMetaQuest */.isMetaQuest();
    const tmpResult = require("../../modules/device/MetaQuestUtils.android.tsx") /* isMetaQuest */;
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
    let obj = require("../../utils/AnalyticsUtils.tsx");
    obj = { enabled: enabled.enabled };
    obj.track(AnalyticEvents.MOBILE_OVERLAY_TOGGLED, obj);
    enabled = enabled.enabled;
  }
});
const result = require("set").fileFinishedImporting("stores/native/MobileVoiceOverlayStore.tsx");

export default mobileVoiceOverlayStore;
export const isMobileOverlaySupported = function isMobileOverlaySupported() {
  let isAndroidResult = require("../../utils/PlatformUtils.tsx") /* set */.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = !require("../../modules/device/MetaQuestUtils.android.tsx") /* isMetaQuest */.isMetaQuest();
    const tmpResult = require("../../modules/device/MetaQuestUtils.android.tsx") /* isMetaQuest */;
  }
  return isAndroidResult;
};