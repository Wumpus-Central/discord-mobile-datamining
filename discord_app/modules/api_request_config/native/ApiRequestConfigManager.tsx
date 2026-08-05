// discord_app/modules/api_request_config/native/ApiRequestConfigManager.tsx
import { NativeModules } from "get ActivityIndicator";
import fetchFingerprint from "fetchFingerprint";
import "initialize";

function updateApiRequestConfig() {
  const NativeCacheModule = NativeModules.NativeCacheModule;
  if (NativeCacheModule != null) {
    const _JSON = JSON;
    let obj = { apiBaseUrl: null, headers: null };
    obj[0] = require("../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.getAPIBaseURL();
    obj = { "X-Super-Properties": null, "X-Fingerprint": null, "X-Installation-ID": null };
    const obj2 = require("../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */;
    obj[0] = require("../../../utils/AnalyticsUtils.tsx").getSuperPropertiesBase64();
    obj[1] = store.getFingerprint();
    obj[2] = store.getInstallationForTracking();
    obj[1] = obj;
    const result = NativeCacheModule.setItem("discordApiRequestConfig", JSON.stringify(obj));
    const obj4 = require("../../../utils/AnalyticsUtils.tsx");
  }
}
let prototype = function ApiRequestConfigManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.handleUpdate = require("../../../utils/PlatformUtils.tsx") /* set */.isAndroid() ? updateApiRequestConfig : (() => {

  });
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate, APP_STATE_UPDATE: applyArgumentsResult.handleUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = require("sendRequest").fileFinishedImporting("modules/api_request_config/native/ApiRequestConfigManager.tsx");

export default prototype;