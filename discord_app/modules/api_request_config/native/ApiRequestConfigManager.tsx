// === Module 17043: updateApiRequestConfig ===

// Module 17043 (updateApiRequestConfig)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import obj1322 from "obj132" /* 500 */;
import sendRequest from "sendRequest" /* 530 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import initializeDefault from "initialize" /* 5038 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;

function updateApiRequestConfig() {
  const NativeCacheModule = NativeModules.NativeCacheModule;
  if (NativeCacheModule != null) {
    const _JSON = JSON;
    let obj = { apiBaseUrl: null, headers: null };
    obj[0] = sendRequest.getAPIBaseURL();
    obj = { "X-Super-Properties": null, "X-Fingerprint": null, "X-Installation-ID": null };
    obj[0] = expandEventPropertiesDefault.getSuperPropertiesBase64();
    obj[1] = store.getFingerprint();
    obj[2] = store.getInstallationForTracking();
    obj[1] = obj;
    const result = NativeCacheModule.setItem("discordApiRequestConfig", JSON.stringify(obj));
  }
}
const NativeModules = get_ActivityIndicator.NativeModules;
initializeDefault;
let prototype = function ApiRequestConfigManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.handleUpdate = obj1322.isAndroid() ? updateApiRequestConfig : (() => {

  });
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate, APP_STATE_UPDATE: applyArgumentsResult.handleUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = obj132.fileFinishedImporting("modules/api_request_config/native/ApiRequestConfigManager.tsx");

export default prototype;