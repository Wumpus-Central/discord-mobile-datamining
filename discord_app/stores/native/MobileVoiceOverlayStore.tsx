// discord_app/stores/native/MobileVoiceOverlayStore.tsx
import { AnalyticEvents } from "ME";
import { DeviceSettingsStore } from "initialize";
import { isMetaQuest } from "../../modules/device/MetaQuestUtils.android.tsx";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { set } from "../../utils/PlatformUtils.tsx";

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
  let isAndroidResult = set /* set */.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = !isMetaQuest /* isMetaQuest */.isMetaQuest();
    const tmpResult = isMetaQuest /* isMetaQuest */;
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
    let obj = expandEventProperties;
    obj = { enabled: enabled.enabled };
    obj.track(AnalyticEvents.MOBILE_OVERLAY_TOGGLED, obj);
    enabled = enabled.enabled;
  }
});
const result = require("set").fileFinishedImporting("stores/native/MobileVoiceOverlayStore.tsx");

export default mobileVoiceOverlayStore;
export const isMobileOverlaySupported = function isMobileOverlaySupported() {
  let isAndroidResult = set /* set */.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = !isMetaQuest /* isMetaQuest */.isMetaQuest();
    const tmpResult = isMetaQuest /* isMetaQuest */;
  }
  return isAndroidResult;
};