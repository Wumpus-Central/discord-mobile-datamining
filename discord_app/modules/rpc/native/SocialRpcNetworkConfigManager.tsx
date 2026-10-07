// discord_app/modules/rpc/native/SocialRpcNetworkConfigManager.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function updateSocialRpcNetworkConfig() {
  const obj = {
    "X-Super-Properties": AnalyticsUtilsDefault.getSuperPropertiesBase64(),
    "X-Fingerprint": AuthenticationStore.getFingerprint(),
    "X-Installation-ID": AuthenticationStore.getInstallationForTracking(),
    "X-Discord-Locale": LocaleStore.locale,
  };
  const NativeCacheModule = NativeModules.NativeCacheModule;
  if (NativeCacheModule != null) {
    const _JSON = JSON;
    const obj3 = { apiBaseUrl: HTTPUtils.getAPIBaseURL(), headers: obj };
    const result = NativeCacheModule.setItem("socialRpcNetworkRequest", JSON.stringify(obj3));
  }
}
const NativeModules = _mod17.NativeModules;
const prototype = function SocialRpcNetworkConfigManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.handleUpdate = PlatformUtils.isAndroid() ? updateSocialRpcNetworkConfig : () => {};
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
const prototype1 = new prototype();
let result = size.fileFinishedImporting("modules/rpc/native/SocialRpcNetworkConfigManager.tsx");

export default prototype1;
