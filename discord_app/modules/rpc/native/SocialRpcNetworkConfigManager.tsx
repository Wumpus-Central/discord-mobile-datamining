// === Module 17821: SocialRpcNetworkConfigManager ===

// Module 17821 (SocialRpcNetworkConfigManager)
import _mod17 from "module_17" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;
import size from "module_2" /* 2 */;

function updateSocialRpcNetworkConfig() {
  let obj = { "X-Super-Properties": AnalyticsUtilsDefault.getSuperPropertiesBase64(), "X-Fingerprint": AuthenticationStore.getFingerprint(), "X-Installation-ID": AuthenticationStore.getInstallationForTracking(), "X-Discord-Locale": LocaleStore.locale };
  const NativeCacheModule = NativeModules.NativeCacheModule;
  if (NativeCacheModule != null) {
    const _JSON = JSON;
    obj = { apiBaseUrl: HTTPUtils.getAPIBaseURL(), headers: null };
    obj.headers = obj;
    const result = NativeCacheModule.setItem("socialRpcNetworkRequest", JSON.stringify(obj));
  }
}
const NativeModules = _mod17.NativeModules;
let prototype = function SocialRpcNetworkConfigManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.handleUpdate = PlatformUtils.isAndroid() ? updateSocialRpcNetworkConfig : (() => {

  });
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = size.fileFinishedImporting("modules/rpc/native/SocialRpcNetworkConfigManager.tsx");

export default prototype;