// discord_app/modules/api_request_config/native/ApiRequestConfigManager.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  applyArgumentsResult.handleUpdate = PlatformUtils.isAndroid() ? updateApiRequestConfig : () => {};
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate,
    APP_STATE_UPDATE: applyArgumentsResult.handleUpdate,
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
prototype = new prototype();
let result = size.fileFinishedImporting("modules/api_request_config/native/ApiRequestConfigManager.tsx");

export default prototype;
