// discord_app/modules/chat/native/NativeExperimentBridgeManager.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import IOSPushNotificationRawPayloadFixExperiment from "../../notifications/IOSPushNotificationRawPayloadFixExperiment.tsx";
import YYTextReplacementExperiment from "../../messages/YYTextReplacementExperiment.tsx";
import VideoStutterMitigationExperimentDefault from "../../media_engine/VideoStutterMitigationExperiment.tsx";
import NotificationLoadMessagesExperimentDefault from "../../cache/NotificationLoadMessagesExperiment.tsx";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function syncYYTextReplacementExperiment() {
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    const NSUserDefaultsBridge = NativeModules.NSUserDefaultsBridge;
    if (NSUserDefaultsBridge != null) {
      const setShouldEnableYYTextReplacement = NSUserDefaultsBridge.setShouldEnableYYTextReplacement;
      if (setShouldEnableYYTextReplacement != null) {
        const tmpResult = YYTextReplacementExperiment;
        const result = setShouldEnableYYTextReplacement(
          tmpResult.shouldEnableYYTextReplacement({ location: "NativeExperimentBridgeManager" }),
        );
      }
    }
  }
}
function updateIOSExperiments() {
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    const NSUserDefaultsBridge = NativeModules.NSUserDefaultsBridge;
    if (NSUserDefaultsBridge != null) {
      const setShouldEnableYYTextReplacement = NSUserDefaultsBridge.setShouldEnableYYTextReplacement;
      if (setShouldEnableYYTextReplacement != null) {
        const tmpResult = YYTextReplacementExperiment;
        const result = setShouldEnableYYTextReplacement(
          tmpResult.shouldEnableYYTextReplacement({ location: "NativeExperimentBridgeManager" }),
        );
      }
    }
  }
  const NSUserDefaultsBridge2 = NativeModules.NSUserDefaultsBridge;
  if (NSUserDefaultsBridge2 != null) {
    const setShouldFixPushNotificationRawPayload = NSUserDefaultsBridge2.setShouldFixPushNotificationRawPayload;
    if (setShouldFixPushNotificationRawPayload != null) {
      const tmpResult2 = IOSPushNotificationRawPayloadFixExperiment;
      const result1 = setShouldFixPushNotificationRawPayload(
        tmpResult2.isIOSPushNotificationRawPayloadFixExperimentEnabled(),
      );
    }
  }
  const obj4 = VideoStutterMitigationExperimentDefault;
  if (obj4.getConfig({ location: "NativeExperimentBridgeManager" }).enabled) {
    const RNVVideo = NativeModules.RNVVideo;
    if (RNVVideo != null) {
      const result2 = RNVVideo.setOptimizeConfigureAudio(true);
    }
    const RNVVideo2 = NativeModules.RNVVideo;
    if (RNVVideo2 != null) {
      const result3 = RNVVideo2.setUseBackgroundProgressQueue(true);
    }
  }
}
function updateAndroidExperiments() {
  let obj2;
  let obj6;
  const obj = {
    "X-Super-Properties": obj2.getSuperPropertiesBase64(),
    "X-Fingerprint": AuthenticationStore.getFingerprint(),
    "X-Installation-ID": AuthenticationStore.getInstallationForTracking(),
    "X-Discord-Locale": LocaleStore.locale,
  };
  obj2 = AnalyticsUtilsDefault;
  const obj4 = NotificationLoadMessagesExperimentDefault;
  const config = obj4.getConfig({ location: "NativeExperimentBridgeManager" });
  const NativeCacheModule = NativeModules.NativeCacheModule;
  if (NativeCacheModule != null) {
    const _JSON = JSON;
    const setItem = NativeCacheModule.setItem;
    const obj5 = {
      headers: obj,
      userId: AuthenticationStore.getId(),
      enabled: tmp3,
      apiBaseUrl: obj6.getAPIBaseURL(),
      urlQueryParams: "?limit=" + tmp4,
      cooldownMs: tmp5,
      debounceMs: tmp6,
    };
    const _HermesInternal = HermesInternal;
    obj6 = HTTPUtils;
    const result = setItem("notificationNetworkRequest", stringify(obj5));
  }
}
const NativeModules = react_native.NativeModules;
class NativeExperimentBridgeManager extends AutomaticLifecycleManager {
  constructor() {
    let tmp5;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = PlatformUtils;
    if (obj.isIOS()) {
      tmp5 = updateIOSExperiments;
    } else {
      const tmp3Result = PlatformUtils;
      tmp5 = tmp3Result.isAndroid() ? updateAndroidExperiments : () => {};
    }
    applyArgumentsResult.handleUpdate = tmp5;
    const obj2 = {
      APP_STATE_UPDATE: syncYYTextReplacementExperiment,
      POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate,
    };
    applyArgumentsResult.actions = obj2;
    return applyArgumentsResult;
  }
}
const nativeExperimentBridgeManager = new NativeExperimentBridgeManager();
let result = size.fileFinishedImporting("modules/chat/native/NativeExperimentBridgeManager.tsx");

export default nativeExperimentBridgeManager;
