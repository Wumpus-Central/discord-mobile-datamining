// === Module 16684: updateSocialRpcNetworkConfig ===

// Module 16684 (updateSocialRpcNetworkConfig)
import { NativeModules } from "get ActivityIndicator";
import _getSystemLocale from "_getSystemLocale";
import fetchFingerprint from "fetchFingerprint";
import "initialize";

function updateSocialRpcNetworkConfig() {
  let obj = { "X-Super-Properties": null, "X-Fingerprint": null, "X-Installation-ID": null, "X-Discord-Locale": null };
  obj[0] = importDefault(698).getSuperPropertiesBase64();
  obj[1] = store.getFingerprint();
  obj[2] = store.getInstallationForTracking();
  obj[3] = locale.locale;
  const NativeCacheModule = NativeModules.NativeCacheModule;
  if (NativeCacheModule != null) {
    const _JSON = JSON;
    obj = { apiBaseUrl: null, headers: null };
    obj[0] = require(530) /* sendRequest */.getAPIBaseURL();
    obj[1] = obj;
    const result = NativeCacheModule.setItem("socialRpcNetworkRequest", JSON.stringify(obj));
    const obj4 = require(530) /* sendRequest */;
  }
}
let prototype = function SocialRpcNetworkConfigManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.handleUpdate = require(500) /* set */.isAndroid() ? updateSocialRpcNetworkConfig : (() => {

  });
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = require("fetchFingerprint").fileFinishedImporting("modules/rpc/native/SocialRpcNetworkConfigManager.tsx");

export default prototype;