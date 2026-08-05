// discord_app/modules/rpc/native/SocialRpcNetworkConfigManager.tsx
import { NativeModules } from "get ActivityIndicator";
import _getSystemLocale from "_getSystemLocale";
import fetchFingerprint from "fetchFingerprint";
import "initialize";

function updateSocialRpcNetworkConfig() {
  let obj = { "X-Super-Properties": null, "X-Fingerprint": null, "X-Installation-ID": null, "X-Discord-Locale": null };
  obj[0] = require("../../../utils/AnalyticsUtils.tsx").getSuperPropertiesBase64();
  obj[1] = store.getFingerprint();
  obj[2] = store.getInstallationForTracking();
  obj[3] = locale.locale;
  const NativeCacheModule = NativeModules.NativeCacheModule;
  if (NativeCacheModule != null) {
    const _JSON = JSON;
    obj = { apiBaseUrl: null, headers: null };
    obj[0] = require("../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.getAPIBaseURL();
    obj[1] = obj;
    const result = NativeCacheModule.setItem("socialRpcNetworkRequest", JSON.stringify(obj));
    const obj4 = require("../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */;
  }
}
let prototype = function SocialRpcNetworkConfigManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.handleUpdate = require("../../../utils/PlatformUtils.tsx") /* set */.isAndroid() ? updateSocialRpcNetworkConfig : (() => {

  });
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = require("fetchFingerprint").fileFinishedImporting("modules/rpc/native/SocialRpcNetworkConfigManager.tsx");

export default prototype;