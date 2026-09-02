// === Module 17642: updateApiRequestConfig ===

// Module 17642 (updateApiRequestConfig)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import sendRequest from "sendRequest" /* 527 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import set2 from "set" /* 1234 */;
import initializeDefault from "initialize" /* 5494 */;
import closure_4 from "fetchFingerprint" /* 1215 */;

function updateApiRequestConfig() {
  const NativeCacheModule = NativeModules.NativeCacheModule;
  if (NativeCacheModule != null) {
    const _JSON = JSON;
    let obj = { apiBaseUrl: null, headers: null };
    obj[0] = sendRequest.getAPIBaseURL();
    obj = { "X-Super-Properties": null, "X-Fingerprint": null, "X-Installation-ID": null };
    const obj2 = sendRequest;
    obj[0] = expandEventPropertiesDefault.getSuperPropertiesBase64();
    obj[1] = store.getFingerprint();
    obj[2] = store.getInstallationForTracking();
    obj[1] = obj;
    const result = NativeCacheModule.setItem("discordApiRequestConfig", JSON.stringify(obj));
    const obj4 = expandEventPropertiesDefault;
  }
}
const NativeModules = get_ActivityIndicator.NativeModules;
initializeDefault;
let prototype = function ApiRequestConfigManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.handleUpdate = set2.isAndroid() ? updateApiRequestConfig : (() => {

  });
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate, APP_STATE_UPDATE: applyArgumentsResult.handleUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = set.fileFinishedImporting("modules/api_request_config/native/ApiRequestConfigManager.tsx");

export default prototype;