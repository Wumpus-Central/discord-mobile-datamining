// discord_app/modules/rpc/native/SocialRpcNetworkConfigManager.tsx
import set from "../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import sendRequest from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import set2 from "../../../utils/PlatformUtils.tsx";
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";
import closure_4 from "../../user_settings/LocaleStore.tsx";
import closure_5 from "../../../stores/AuthenticationStore.tsx";

function updateSocialRpcNetworkConfig() {
  let obj = {
    "X-Super-Properties": expandEventPropertiesDefault.getSuperPropertiesBase64(),
    "X-Fingerprint": store.getFingerprint(),
    "X-Installation-ID": store.getInstallationForTracking(),
    "X-Discord-Locale": locale.locale,
  };
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
  applyArgumentsResult.handleUpdate = set2.isAndroid() ? updateSocialRpcNetworkConfig : () => {};
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
prototype = new prototype();
let result = set.fileFinishedImporting("modules/rpc/native/SocialRpcNetworkConfigManager.tsx");

export default prototype;
