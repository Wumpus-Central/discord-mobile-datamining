// discord_app/modules/rpc/native/SocialRpcNetworkConfigManager.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function updateSocialRpcNetworkConfig() {
  let obj = {
    "X-Super-Properties": AnalyticsUtilsDefault.getSuperPropertiesBase64(),
    "X-Fingerprint": AuthenticationStore.getFingerprint(),
    "X-Installation-ID": AuthenticationStore.getInstallationForTracking(),
    "X-Discord-Locale": LocaleStore.locale,
  };
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
  applyArgumentsResult.handleUpdate = PlatformUtils.isAndroid() ? updateSocialRpcNetworkConfig : () => {};
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
prototype = new prototype();
let result = size.fileFinishedImporting("modules/rpc/native/SocialRpcNetworkConfigManager.tsx");

export default prototype;
