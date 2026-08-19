// === Module 17042: updateSocialRpcNetworkConfig ===

// Module 17042 (updateSocialRpcNetworkConfig)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import obj1322 from "obj132" /* 500 */;
import sendRequest from "sendRequest" /* 530 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import initializeDefault from "initialize" /* 5038 */;
import _getSystemLocale from "_getSystemLocale" /* 1994 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;

function updateSocialRpcNetworkConfig() {
  let obj = { "X-Super-Properties": expandEventPropertiesDefault.getSuperPropertiesBase64(), "X-Fingerprint": store.getFingerprint(), "X-Installation-ID": store.getInstallationForTracking(), "X-Discord-Locale": locale.locale };
  const NativeCacheModule = NativeModules.NativeCacheModule;
  if (NativeCacheModule != null) {
    const _JSON = JSON;
    obj = { apiBaseUrl: null, headers: null };
    obj[0] = sendRequest.getAPIBaseURL();
    obj[1] = obj;
    const result = NativeCacheModule.setItem("socialRpcNetworkRequest", JSON.stringify(obj));
  }
}
const NativeModules = get_ActivityIndicator.NativeModules;
initializeDefault;
let prototype = function SocialRpcNetworkConfigManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.handleUpdate = obj1322.isAndroid() ? updateSocialRpcNetworkConfig : (() => {

  });
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = obj132.fileFinishedImporting("modules/rpc/native/SocialRpcNetworkConfigManager.tsx");

export default prototype;