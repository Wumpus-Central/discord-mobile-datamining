// discord_app/modules/chat/native/NativeExperimentBridgeManager.tsx
import { NativeModules } from "get ActivityIndicator";
import _getSystemLocale from "_getSystemLocale";
import fetchFingerprint from "fetchFingerprint";
import "initialize";

function syncYYTextReplacementExperiment() {
  if (obj.isIOS()) {
    const NSUserDefaultsBridge = NativeModules.NSUserDefaultsBridge;
    if (NSUserDefaultsBridge != null) {
      const setShouldEnableYYTextReplacement = NSUserDefaultsBridge.setShouldEnableYYTextReplacement;
      if (setShouldEnableYYTextReplacement != null) {
        const result = setShouldEnableYYTextReplacement(require(16778) /* shouldEnableYYTextReplacement */.shouldEnableYYTextReplacement({ location: "NativeExperimentBridgeManager" }));
        const tmpResult = require(16778) /* shouldEnableYYTextReplacement */;
      }
    }
  }
}
function updateIOSExperiments() {
  if (obj.isIOS()) {
    const NSUserDefaultsBridge = NativeModules.NSUserDefaultsBridge;
    if (NSUserDefaultsBridge != null) {
      const setShouldEnableYYTextReplacement = NSUserDefaultsBridge.setShouldEnableYYTextReplacement;
      if (setShouldEnableYYTextReplacement != null) {
        let tmpResult = tmp(16778);
        const result = setShouldEnableYYTextReplacement(tmpResult.shouldEnableYYTextReplacement({ location: "NativeExperimentBridgeManager" }));
      }
    }
  }
  const NSUserDefaultsBridge2 = NativeModules.NSUserDefaultsBridge;
  if (NSUserDefaultsBridge2 != null) {
    const setShouldFixPushNotificationRawPayload = NSUserDefaultsBridge2.setShouldFixPushNotificationRawPayload;
    if (setShouldFixPushNotificationRawPayload != null) {
      tmpResult = tmp(4958);
      const result1 = setShouldFixPushNotificationRawPayload(tmpResult.isIOSPushNotificationRawPayloadFixExperimentEnabled());
    }
  }
  obj = require(500) /* set */;
  if (obj4.getConfig({ location: "NativeExperimentBridgeManager" }).enabled) {
    const RNVVideo = tmp6.RNVVideo;
    if (RNVVideo != null) {
      const result2 = RNVVideo.setOptimizeConfigureAudio(true);
    }
    const RNVVideo2 = tmp6.RNVVideo;
    if (RNVVideo2 != null) {
      const result3 = RNVVideo2.setUseBackgroundProgressQueue(true);
    }
  }
}
function updateAndroidExperiments() {
  let obj = { "X-Super-Properties": null, "X-Fingerprint": null, "X-Installation-ID": null, "X-Discord-Locale": null };
  obj[0] = importDefault(698).getSuperPropertiesBase64();
  obj[1] = store.getFingerprint();
  obj[2] = store.getInstallationForTracking();
  obj[3] = locale.locale;
  const obj2 = importDefault(698);
  const obj3 = store;
  const config = importDefault(16780).getConfig({ location: "NativeExperimentBridgeManager" });
  const NativeCacheModule = NativeModules.NativeCacheModule;
  if (NativeCacheModule != null) {
    const _JSON = JSON;
    obj = { headers: null, userId: null, enabled: null, apiBaseUrl: null, urlQueryParams: null, cooldownMs: null, debounceMs: null };
    obj[0] = obj;
    obj[1] = obj3.getId();
    obj[2] = tmp3;
    obj[3] = require(530) /* sendRequest */.getAPIBaseURL();
    const _HermesInternal = HermesInternal;
    obj[4] = "?limit=" + tmp4;
    obj[5] = tmp5;
    obj[6] = tmp6;
    const result = NativeCacheModule.setItem("notificationNetworkRequest", JSON.stringify(obj));
    const obj6 = require(530) /* sendRequest */;
  }
}
let prototype = function NativeExperimentBridgeManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  let obj = require(500) /* set */;
  if (obj.isIOS()) {
    let tmp5 = updateIOSExperiments;
  } else {
    tmp5 = require(500) /* set */.isAndroid() ? updateAndroidExperiments : (() => {

    });
    const tmp3Result = require(500) /* set */;
  }
  applyArgumentsResult.handleUpdate = tmp5;
  obj = { APP_STATE_UPDATE: syncYYTextReplacementExperiment, POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate };
  applyArgumentsResult.actions = obj;
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = require("fetchFingerprint").fileFinishedImporting("modules/chat/native/NativeExperimentBridgeManager.tsx");

export default prototype;