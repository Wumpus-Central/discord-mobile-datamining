// discord_app/modules/rpc/native/SocialRpcNetworkConfigManager.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import LocaleStore from "../../user_settings/LocaleStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function updateSocialRpcNetworkConfig() {
  let obj2;
  let obj4;
  const obj = {
    "X-Super-Properties": obj2.getSuperPropertiesBase64(),
    "X-Fingerprint": AuthenticationStore.getFingerprint(),
    "X-Installation-ID": AuthenticationStore.getInstallationForTracking(),
    "X-Discord-Locale": LocaleStore.locale,
  };
  const NativeCacheModule = NativeModules.NativeCacheModule;
  obj2 = AnalyticsUtilsDefault;
  if (NativeCacheModule != null) {
    const _JSON = JSON;
    const setItem = NativeCacheModule.setItem;
    const obj3 = { apiBaseUrl: obj4.getAPIBaseURL(), headers: obj };
    obj4 = HTTPUtils;
    const result = setItem("socialRpcNetworkRequest", stringify(obj3));
  }
}
const NativeModules = react_native.NativeModules;
class SocialRpcNetworkConfigManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = PlatformUtils;
    applyArgumentsResult.handleUpdate = obj.isAndroid() ? updateSocialRpcNetworkConfig : () => {};
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate };
    return applyArgumentsResult;
  }
}
const socialRpcNetworkConfigManager = new SocialRpcNetworkConfigManager();
let result = size.fileFinishedImporting("modules/rpc/native/SocialRpcNetworkConfigManager.tsx");

export default socialRpcNetworkConfigManager;
