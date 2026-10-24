// === Module 19368: NativeExperimentBridgeManager ===

// Module 19368 (NativeExperimentBridgeManager)
import _mod17 from "module_17" /* 17 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import HTTPUtils from "HTTPUtils" /* 1297 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import IOSPushNotificationRawPayloadFixExperiment from "IOSPushNotificationRawPayloadFixExperiment" /* 6494 */;
import IOSAnchoredChatScrollerExperiment from "IOSAnchoredChatScrollerExperiment" /* 7748 */;
import YYTextReplacementExperiment from "YYTextReplacementExperiment" /* 19369 */;
import VideoStutterMitigationExperimentDefault from "VideoStutterMitigationExperiment" /* 19370 */;
import NotificationLoadMessagesExperimentDefault from "NotificationLoadMessagesExperiment" /* 19371 */;
import LocaleStore from "LocaleStore" /* 2068 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaPlaybackExperiment_mod from "MediaPlaybackExperiment" /* 8792 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7214 */;
import size from "module_2" /* 2 */;

function syncYYTextReplacementExperiment() {
  if (obj.isIOS()) {
    const NSUserDefaultsBridge = NativeModules.NSUserDefaultsBridge;
    if (NSUserDefaultsBridge != null) {
      const setShouldEnableYYTextReplacement = NSUserDefaultsBridge.setShouldEnableYYTextReplacement;
      if (setShouldEnableYYTextReplacement != null) {
        const result = setShouldEnableYYTextReplacement(YYTextReplacementExperiment.shouldEnableYYTextReplacement({ location: "NativeExperimentBridgeManager" }));
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
        const result = setShouldEnableYYTextReplacement(YYTextReplacementExperiment.shouldEnableYYTextReplacement({ location: "NativeExperimentBridgeManager" }));
        const tmpResult = YYTextReplacementExperiment;
      }
    }
  }
  const NSUserDefaultsBridge2 = NativeModules.NSUserDefaultsBridge;
  if (NSUserDefaultsBridge2 != null) {
    const setShouldFixPushNotificationRawPayload = NSUserDefaultsBridge2.setShouldFixPushNotificationRawPayload;
    if (setShouldFixPushNotificationRawPayload != null) {
      const result1 = setShouldFixPushNotificationRawPayload(IOSPushNotificationRawPayloadFixExperiment.isIOSPushNotificationRawPayloadFixExperimentEnabled());
      const tmpResult3 = IOSPushNotificationRawPayloadFixExperiment;
    }
  }
  const NSUserDefaultsBridge3 = NativeModules.NSUserDefaultsBridge;
  if (NSUserDefaultsBridge3 != null) {
    const setShouldUseAnchoredChatScroller = NSUserDefaultsBridge3.setShouldUseAnchoredChatScroller;
    if (setShouldUseAnchoredChatScroller != null) {
      const result2 = setShouldUseAnchoredChatScroller(IOSAnchoredChatScrollerExperiment.shouldUseIOSAnchoredChatScroller({ location: "NativeExperimentBridgeManager" }));
      const tmpResult4 = IOSAnchoredChatScrollerExperiment;
    }
  }
  obj = PlatformUtils;
  if (obj5.getConfig({ location: "NativeExperimentBridgeManager" }).enabled) {
    const RNVVideo = NativeModules.RNVVideo;
    if (RNVVideo != null) {
      const result3 = RNVVideo.setOptimizeConfigureAudio(true);
    }
    const RNVVideo2 = NativeModules.RNVVideo;
    if (RNVVideo2 != null) {
      const result4 = RNVVideo2.setUseBackgroundProgressQueue(true);
    }
  }
  obj5 = VideoStutterMitigationExperimentDefault;
}
function updateAndroidExperiments() {
  const obj = { "X-Super-Properties": AnalyticsUtilsDefault.getSuperPropertiesBase64(), "X-Fingerprint": AuthenticationStore.getFingerprint(), "X-Installation-ID": AuthenticationStore.getInstallationForTracking(), "X-Discord-Locale": LocaleStore.locale };
  const config = NotificationLoadMessagesExperimentDefault.getConfig({ location: "NativeExperimentBridgeManager" });
  const NativeCacheModule = NativeModules.NativeCacheModule;
  if (NativeCacheModule != null) {
    const _JSON = JSON;
    const obj5 = { headers: obj, userId: AuthenticationStore.getId(), enabled: tmp3, apiBaseUrl: HTTPUtils.getAPIBaseURL(), urlQueryParams: null, cooldownMs: null, debounceMs: null };
    const _HermesInternal = HermesInternal;
    obj5.urlQueryParams = "?limit=" + tmp4;
    obj5.cooldownMs = tmp5;
    obj5.debounceMs = tmp6;
    const result = NativeCacheModule.setItem("notificationNetworkRequest", JSON.stringify(obj5));
  }
}
const NativeModules = _mod17.NativeModules;
let MediaPlaybackExperiment = MediaPlaybackExperiment_mod;
MediaPlaybackExperiment = MediaPlaybackExperiment.initializeMediaPlaybackExperiment();
const prototype = function NativeExperimentBridgeManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  if (obj.isIOS()) {
    let tmp5 = updateIOSExperiments;
  } else {
    tmp5 = PlatformUtils.isAndroid() ? updateAndroidExperiments : (() => {

    });
    const tmp3Result = PlatformUtils;
  }
  applyArgumentsResult.handleUpdate = tmp5;
  applyArgumentsResult.actions = { APP_STATE_UPDATE: syncYYTextReplacementExperiment, POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
const prototype1 = new prototype();
let result1 = size.fileFinishedImporting("modules/chat/native/NativeExperimentBridgeManager.tsx");

export default prototype1;