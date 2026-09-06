// discord_app/stores/native/MobileVoiceOverlayStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import MetaQuestUtils from "../../modules/device/MetaQuestUtils.android.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
let enabled = false;
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class MobileVoiceOverlayStore extends DeviceSettingsStore {}
const prototype = MobileVoiceOverlayStore.prototype;
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return { enabled };
};
prototype["initialize"] = function initialize(enabled) {
  let flag;
  if (enabled != null) {
    flag = enabled.enabled;
  }
  if (flag == null) {
    flag = false;
  }
  enabled = flag;
};
prototype["getEnabled"] = function getEnabled() {
  let isAndroidResult = PlatformUtils.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = !MetaQuestUtils.isMetaQuest();
    const tmpResult = MetaQuestUtils;
  }
  if (isAndroidResult) {
    isAndroidResult = enabled;
  }
  return isAndroidResult;
};
MobileVoiceOverlayStore.displayName = "MobileVoiceOverlayStore";
MobileVoiceOverlayStore.persistKey = "MobileVoiceOverlayStore";
const mobileVoiceOverlayStore = new MobileVoiceOverlayStore(DispatcherDefault, {
  MOBILE_VOICE_OVERLAY_STATE_CHANGED: function handleMobileVoiceOverlayStateChanged(enabled) {
    const obj = { enabled: enabled.enabled };
    obj.track(AnalyticEvents.MOBILE_OVERLAY_TOGGLED, obj);
    enabled = enabled.enabled;
  },
});
const result = size.fileFinishedImporting("stores/native/MobileVoiceOverlayStore.tsx");

export default mobileVoiceOverlayStore;
export const isMobileOverlaySupported = function isMobileOverlaySupported() {
  let isAndroidResult = PlatformUtils.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = !MetaQuestUtils.isMetaQuest();
    const tmpResult = MetaQuestUtils;
  }
  return isAndroidResult;
};
