// === Module 18280: ApiRequestConfigManager ===

// Module 18280 (ApiRequestConfigManager)
import _mod17 from "module_17" /* 17 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7363 */;
import size from "module_2" /* 2 */;

function updateApiRequestConfig() {
  const NativeCacheModule = NativeModules.NativeCacheModule;
  if (NativeCacheModule != null) {
    const _JSON = JSON;
    const obj = { apiBaseUrl: HTTPUtils.getAPIBaseURL(), headers: null };
    const obj3 = { "X-Super-Properties": null, "X-Fingerprint": null, "X-Installation-ID": null };
    obj3["X-Super-Properties"] = AnalyticsUtilsDefault.getSuperPropertiesBase64();
    obj3["X-Fingerprint"] = AuthenticationStore.getFingerprint();
    obj3["X-Installation-ID"] = AuthenticationStore.getInstallationForTracking();
    obj.headers = obj3;
    const result = NativeCacheModule.setItem("discordApiRequestConfig", JSON.stringify(obj));
  }
}
const NativeModules = _mod17.NativeModules;
const prototype = function ApiRequestConfigManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.handleUpdate = PlatformUtils.isAndroid() ? updateApiRequestConfig : (() => {

  });
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate, APP_STATE_UPDATE: applyArgumentsResult.handleUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
let result = size.fileFinishedImporting("modules/api_request_config/native/ApiRequestConfigManager.tsx");

export default prototype1;