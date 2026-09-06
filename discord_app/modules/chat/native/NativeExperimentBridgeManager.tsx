// discord_app/modules/chat/native/NativeExperimentBridgeManager.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import IOSPushNotificationRawPayloadFixExperiment from "../../notifications/IOSPushNotificationRawPayloadFixExperiment.tsx";
import YYTextReplacementExperiment from "../../messages/YYTextReplacementExperiment.tsx";
import VideoStutterMitigationExperimentDefault from "../../media_engine/VideoStutterMitigationExperiment.tsx";
import NotificationLoadMessagesExperimentDefault from "../../cache/NotificationLoadMessagesExperiment.tsx";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function syncYYTextReplacementExperiment() {
  if (obj.isIOS()) {
    const NSUserDefaultsBridge = NativeModules.NSUserDefaultsBridge;
    if (NSUserDefaultsBridge != null) {
      const setShouldEnableYYTextReplacement = NSUserDefaultsBridge.setShouldEnableYYTextReplacement;
      if (setShouldEnableYYTextReplacement != null) {
        const result = setShouldEnableYYTextReplacement(
          YYTextReplacementExperiment.shouldEnableYYTextReplacement({ location: "NativeExperimentBridgeManager" }),
        );
        const tmpResult = YYTextReplacementExperiment;
      }
    }
  }
  obj = PlatformUtils;
}
function updateIOSExperiments() {
  if (obj.isIOS()) {
    const NSUserDefaultsBridge = NativeModules.NSUserDefaultsBridge;
    if (NSUserDefaultsBridge != null) {
      const setShouldEnableYYTextReplacement = NSUserDefaultsBridge.setShouldEnableYYTextReplacement;
      if (setShouldEnableYYTextReplacement != null) {
        let tmpResult = YYTextReplacementExperiment;
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
      tmpResult = IOSPushNotificationRawPayloadFixExperiment;
      const result1 = setShouldFixPushNotificationRawPayload(
        tmpResult.isIOSPushNotificationRawPayloadFixExperimentEnabled(),
      );
    }
  }
  obj = PlatformUtils;
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
  obj4 = VideoStutterMitigationExperimentDefault;
}
function updateAndroidExperiments() {
  let obj = {
    "X-Super-Properties": AnalyticsUtilsDefault.getSuperPropertiesBase64(),
    "X-Fingerprint": AuthenticationStore.getFingerprint(),
    "X-Installation-ID": AuthenticationStore.getInstallationForTracking(),
    "X-Discord-Locale": LocaleStore.locale,
  };
  const config = NotificationLoadMessagesExperimentDefault.getConfig({ location: "NativeExperimentBridgeManager" });
  const NativeCacheModule = NativeModules.NativeCacheModule;
  if (NativeCacheModule != null) {
    const _JSON = JSON;
    obj = {
      headers: null,
      userId: null,
      enabled: null,
      apiBaseUrl: null,
      urlQueryParams: null,
      cooldownMs: null,
      debounceMs: null,
    };
    obj.headers = obj;
    obj.userId = AuthenticationStore.getId();
    obj.enabled = tmp3;
    obj.apiBaseUrl = HTTPUtils.getAPIBaseURL();
    const _HermesInternal = HermesInternal;
    obj.urlQueryParams = "?limit=" + tmp4;
    obj.cooldownMs = tmp5;
    obj.debounceMs = tmp6;
    const result = NativeCacheModule.setItem("notificationNetworkRequest", JSON.stringify(obj));
  }
}
const NativeModules = _mod17.NativeModules;
let prototype = function NativeExperimentBridgeManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  let obj = PlatformUtils;
  if (obj.isIOS()) {
    let tmp5 = updateIOSExperiments;
  } else {
    tmp5 = PlatformUtils.isAndroid() ? updateAndroidExperiments : () => {};
    const tmp3Result = PlatformUtils;
  }
  applyArgumentsResult.handleUpdate = tmp5;
  obj = { APP_STATE_UPDATE: syncYYTextReplacementExperiment, POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate };
  applyArgumentsResult.actions = obj;
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
prototype = new prototype();
let result = size.fileFinishedImporting("modules/chat/native/NativeExperimentBridgeManager.tsx");

export default prototype;
