// discord_app/stores/native/MobileVoiceOverlayStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import MetaQuestUtils from "../../modules/device/MetaQuestUtils.android.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
let flag = false;
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class MobileVoiceOverlayStore extends DeviceSettingsStore {
  getUserAgnosticState() {
    return { enabled: flag };
  }
  initialize(enabled) {
    flag = undefined;
    if (enabled != null) {
      flag = enabled.enabled;
    }
    if (flag == null) {
      flag = false;
    }
  }
  getEnabled() {
    const obj = PlatformUtils;
    let isAndroidResult = obj.isAndroid();
    if (isAndroidResult) {
      const tmpResult = MetaQuestUtils;
      isAndroidResult = !tmpResult.isMetaQuest();
    }
    if (isAndroidResult) {
      isAndroidResult = flag;
    }
    return isAndroidResult;
  }
}
const prototype = MobileVoiceOverlayStore.prototype;
MobileVoiceOverlayStore.displayName = "MobileVoiceOverlayStore";
MobileVoiceOverlayStore.persistKey = "MobileVoiceOverlayStore";
let obj = {
  MOBILE_VOICE_OVERLAY_STATE_CHANGED: function handleMobileVoiceOverlayStateChanged(enabled) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { enabled: enabled.enabled };
    obj.track(AnalyticEvents.MOBILE_OVERLAY_TOGGLED, obj2);
  },
};
const mobileVoiceOverlayStore = new MobileVoiceOverlayStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/native/MobileVoiceOverlayStore.tsx");

export default mobileVoiceOverlayStore;
export const isMobileOverlaySupported = function isMobileOverlaySupported() {
  const obj = PlatformUtils;
  let isAndroidResult = obj.isAndroid();
  if (isAndroidResult) {
    const tmpResult = MetaQuestUtils;
    isAndroidResult = !tmpResult.isMetaQuest();
  }
  return isAndroidResult;
};
