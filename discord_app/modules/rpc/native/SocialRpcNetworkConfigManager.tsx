// === Module 17252: updateSocialRpcNetworkConfig ===

// Module 17252 (updateSocialRpcNetworkConfig)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import set2 from "set" /* 500 */;
import sendRequest from "sendRequest" /* 530 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import initializeDefault from "initialize" /* 5433 */;
import closure_4 from "_getSystemLocale" /* 1996 */;
import closure_5 from "fetchFingerprint" /* 1218 */;

function updateSocialRpcNetworkConfig() {
  let obj = { "X-Super-Properties": expandEventPropertiesDefault.getSuperPropertiesBase64(), "X-Fingerprint": store.getFingerprint(), "X-Installation-ID": store.getInstallationForTracking(), "X-Discord-Locale": locale.locale };
  const NativeCacheModule = NativeModules.NativeCacheModule;
  if (NativeCacheModule != null) {
    const _JSON = JSON;
    obj = { apiBaseUrl: null, headers: null };
    obj[0] = sendRequest.getAPIBaseURL();
    obj[1] = obj;
    const result = NativeCacheModule.setItem("socialRpcNetworkRequest", JSON.stringify(obj));
    const obj4 = sendRequest;
  }
}
const NativeModules = get_ActivityIndicator.NativeModules;
initializeDefault;
let prototype = function SocialRpcNetworkConfigManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.handleUpdate = set2.isAndroid() ? updateSocialRpcNetworkConfig : (() => {

  });
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = set.fileFinishedImporting("modules/rpc/native/SocialRpcNetworkConfigManager.tsx");

export default prototype;