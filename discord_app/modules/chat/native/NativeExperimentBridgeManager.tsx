// === Module 17038: syncYYTextReplacementExperiment ===

// Module 17038 (syncYYTextReplacementExperiment)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import obj1322 from "obj132" /* 500 */;
import sendRequest from "sendRequest" /* 530 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import isIOSPushNotificationRawPayloadFixExperimentEnabled from "isIOSPushNotificationRawPayloadFixExperimentEnabled" /* 4999 */;
import initializeDefault from "initialize" /* 5038 */;
import shouldEnableYYTextReplacement from "shouldEnableYYTextReplacement" /* 17039 */;
import apexExperimentDefault from "apexExperiment" /* 17040 */;
import apexExperimentDefault2 from "apexExperiment" /* 17041 */;
import _getSystemLocale from "_getSystemLocale" /* 1994 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;

function syncYYTextReplacementExperiment() {
  if (obj.isIOS()) {
    const NSUserDefaultsBridge = NativeModules.NSUserDefaultsBridge;
    if (NSUserDefaultsBridge != null) {
      const setShouldEnableYYTextReplacement = NSUserDefaultsBridge.setShouldEnableYYTextReplacement;
      if (setShouldEnableYYTextReplacement != null) {
        const result = setShouldEnableYYTextReplacement(shouldEnableYYTextReplacement.shouldEnableYYTextReplacement({ location: "NativeExperimentBridgeManager" }));
        const tmpResult = shouldEnableYYTextReplacement;
      }
    }
  }
  obj = obj1322;
}
function updateIOSExperiments() {
  if (obj.isIOS()) {
    const NSUserDefaultsBridge = NativeModules.NSUserDefaultsBridge;
    if (NSUserDefaultsBridge != null) {
      const setShouldEnableYYTextReplacement = NSUserDefaultsBridge.setShouldEnableYYTextReplacement;
      if (setShouldEnableYYTextReplacement != null) {
        let tmpResult = shouldEnableYYTextReplacement;
        const result = setShouldEnableYYTextReplacement(tmpResult.shouldEnableYYTextReplacement({ location: "NativeExperimentBridgeManager" }));
      }
    }
  }
  const NSUserDefaultsBridge2 = NativeModules.NSUserDefaultsBridge;
  if (NSUserDefaultsBridge2 != null) {
    const setShouldFixPushNotificationRawPayload = NSUserDefaultsBridge2.setShouldFixPushNotificationRawPayload;
    if (setShouldFixPushNotificationRawPayload != null) {
      tmpResult = isIOSPushNotificationRawPayloadFixExperimentEnabled;
      const result1 = setShouldFixPushNotificationRawPayload(tmpResult.isIOSPushNotificationRawPayloadFixExperimentEnabled());
    }
  }
  obj = obj1322;
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
  obj4 = apexExperimentDefault;
}
function updateAndroidExperiments() {
  let obj = { "X-Super-Properties": expandEventPropertiesDefault.getSuperPropertiesBase64(), "X-Fingerprint": store.getFingerprint(), "X-Installation-ID": store.getInstallationForTracking(), "X-Discord-Locale": locale.locale };
  const config = apexExperimentDefault2.getConfig({ location: "NativeExperimentBridgeManager" });
  const NativeCacheModule = NativeModules.NativeCacheModule;
  if (NativeCacheModule != null) {
    const _JSON = JSON;
    obj = { headers: null, userId: null, enabled: null, apiBaseUrl: null, urlQueryParams: null, cooldownMs: null, debounceMs: null };
    obj[0] = obj;
    obj[1] = store.getId();
    obj[2] = tmp3;
    obj[3] = sendRequest.getAPIBaseURL();
    const _HermesInternal = HermesInternal;
    obj[4] = "?limit=" + tmp4;
    obj[5] = tmp5;
    obj[6] = tmp6;
    const result = NativeCacheModule.setItem("notificationNetworkRequest", JSON.stringify(obj));
  }
}
const NativeModules = get_ActivityIndicator.NativeModules;
initializeDefault;
let prototype = function NativeExperimentBridgeManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  let obj = obj1322;
  if (obj.isIOS()) {
    let tmp5 = updateIOSExperiments;
  } else {
    tmp5 = obj1322.isAndroid() ? updateAndroidExperiments : (() => {

    });
    const tmp3Result = obj1322;
  }
  applyArgumentsResult.handleUpdate = tmp5;
  obj = { APP_STATE_UPDATE: syncYYTextReplacementExperiment, POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate };
  applyArgumentsResult.actions = obj;
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = obj132.fileFinishedImporting("modules/chat/native/NativeExperimentBridgeManager.tsx");

export default prototype;