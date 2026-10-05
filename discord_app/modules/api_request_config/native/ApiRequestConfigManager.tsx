// discord_app/modules/api_request_config/native/ApiRequestConfigManager.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
    obj3 = {
      "X-Super-Properties": obj4.getSuperPropertiesBase64(),
      "X-Fingerprint": AuthenticationStore.getFingerprint(),
      "X-Installation-ID": AuthenticationStore.getInstallationForTracking(),
    };
    obj4 = AnalyticsUtilsDefault;
    const result = setItem("discordApiRequestConfig", stringify(obj));
  }
}
const NativeModules = react_native.NativeModules;
class ApiRequestConfigManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = PlatformUtils;
    applyArgumentsResult.handleUpdate = obj.isAndroid() ? updateApiRequestConfig : () => {};
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate,
      APP_STATE_UPDATE: applyArgumentsResult.handleUpdate,
    };
    return applyArgumentsResult;
  }
}
const apiRequestConfigManager = new ApiRequestConfigManager();
let result = size.fileFinishedImporting("modules/api_request_config/native/ApiRequestConfigManager.tsx");

export default apiRequestConfigManager;
