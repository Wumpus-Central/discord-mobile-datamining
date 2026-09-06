// === Module 17822: ApiRequestConfigManager ===

// Module 17822 (ApiRequestConfigManager)
import _mod17 from "module_17" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;
import size from "module_2" /* 2 */;

function updateApiRequestConfig() {
  const NativeCacheModule = NativeModules.NativeCacheModule;
  if (NativeCacheModule != null) {
    const _JSON = JSON;
    let obj = { apiBaseUrl: HTTPUtils.getAPIBaseURL(), headers: null };
    obj = { "X-Super-Properties": null, "X-Fingerprint": null, "X-Installation-ID": null };
    obj["X-Super-Properties"] = AnalyticsUtilsDefault.getSuperPropertiesBase64();
    obj["X-Fingerprint"] = AuthenticationStore.getFingerprint();
    obj["X-Installation-ID"] = AuthenticationStore.getInstallationForTracking();
    obj.headers = obj;
    const result = NativeCacheModule.setItem("discordApiRequestConfig", JSON.stringify(obj));
  }
}
const NativeModules = _mod17.NativeModules;
let prototype = function ApiRequestConfigManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.handleUpdate = PlatformUtils.isAndroid() ? updateApiRequestConfig : (() => {

  });
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate, APP_STATE_UPDATE: applyArgumentsResult.handleUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = size.fileFinishedImporting("modules/api_request_config/native/ApiRequestConfigManager.tsx");

export default prototype;