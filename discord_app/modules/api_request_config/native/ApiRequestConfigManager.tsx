// discord_app/modules/api_request_config/native/ApiRequestConfigManager.tsx
import { NativeModules } from "get ActivityIndicator";
import fetchFingerprint from "fetchFingerprint";
import "initialize";

function updateApiRequestConfig() {
  const NativeCacheModule = NativeModules.NativeCacheModule;
  if (NativeCacheModule != null) {
    const _JSON = JSON;
    let obj = { apiBaseUrl: null, headers: null };
    obj[0] = require(530) /* sendRequest */.getAPIBaseURL();
    obj = { "X-Super-Properties": null, "X-Fingerprint": null, "X-Installation-ID": null };
    const obj2 = require(530) /* sendRequest */;
    obj[0] = importDefault(698).getSuperPropertiesBase64();
    obj[1] = store.getFingerprint();
    obj[2] = store.getInstallationForTracking();
    obj[1] = obj;
    const result = NativeCacheModule.setItem("discordApiRequestConfig", JSON.stringify(obj));
    const obj4 = importDefault(698);
  }
}
let prototype = function ApiRequestConfigManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.handleUpdate = require(500) /* set */.isAndroid() ? updateApiRequestConfig : (() => {

  });
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate, APP_STATE_UPDATE: applyArgumentsResult.handleUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = require("sendRequest").fileFinishedImporting("modules/api_request_config/native/ApiRequestConfigManager.tsx");

export default prototype;