// === Module 18062: ApiRequestConfigManager ===

// Module 18062 (ApiRequestConfigManager)
import react_native from "react-native" /* 17 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;
import size from "module_2" /* 2 */;

function updateApiRequestConfig() {
  let obj2;
  let obj3;
  let obj4;
  const NativeCacheModule = NativeModules.NativeCacheModule;
  if (NativeCacheModule != null) {
    const _JSON = JSON;
    const setItem = NativeCacheModule.setItem;
    const obj = { apiBaseUrl: obj2.getAPIBaseURL(), headers: obj3 };
    obj2 = HTTPUtils;
    obj3 = { "X-Super-Properties": obj4.getSuperPropertiesBase64(), "X-Fingerprint": AuthenticationStore.getFingerprint(), "X-Installation-ID": AuthenticationStore.getInstallationForTracking() };
    obj4 = AnalyticsUtilsDefault;
    const result = setItem("discordApiRequestConfig", stringify(obj));
  }
}
const NativeModules = react_native.NativeModules;
class ApiRequestConfigManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = PlatformUtils;
    applyArgumentsResult.handleUpdate = obj.isAndroid() ? updateApiRequestConfig : (() => {

    });
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate, APP_STATE_UPDATE: applyArgumentsResult.handleUpdate };
    return applyArgumentsResult;
  }
}
const apiRequestConfigManager = new ApiRequestConfigManager();
let result = size.fileFinishedImporting("modules/api_request_config/native/ApiRequestConfigManager.tsx");

export default apiRequestConfigManager;