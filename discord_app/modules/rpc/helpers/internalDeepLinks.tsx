// discord_app/modules/rpc/helpers/internalDeepLinks.tsx
import isDiscordProxiedAssetUrlDefault from "../../../utils/URLUtils.tsx";
import _openURL from "../../../lib/openURL.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import set from "../../../../_runtime/00002_set.js";

require = arg1;
let set = new Set(["channels", "users", "events"]);
const set1 = new Set(["", "-"]);
const result = set.fileFinishedImporting("modules/rpc/helpers/internalDeepLinks.tsx");

export const resolveInternalDeepLink = function resolveInternalDeepLink(closure_1_1) {
  const toURLSafeResult = isDiscordProxiedAssetUrlDefault.toURLSafe(closure_1_1);
  if (null == toURLSafeResult) {
    return null;
  } else {
    ({ hostname: hostname2, protocol, host } = toURLSafeResult);
    let tmpResult = tmp(1485);
    if (tmpResult.isDiscordProtocol(protocol)) {
      ({ hostname, pathname } = toURLSafeResult);
      if (!set1.has(hostname)) {
        tmpResult = tmp(1485);
        if (!tmpResult.isDiscordHostname(hostname)) {
          const _HermesInternal = HermesInternal;
          let combined = "/" + hostname + pathname;
        }
      }
      let combined1 = pathname;
      if (!pathname.startsWith("/")) {
        const _HermesInternal2 = HermesInternal;
        combined1 = "/" + pathname;
      }
      combined = combined1;
    } else {
      if (!tmpResult1.isDiscordHostname(hostname2)) {
        if (!tmpResult2.isDiscordLocalhost(host, hostname2)) {
          return null;
        }
        tmpResult2 = tmp(1485);
      }
      const tmp11 = callback(toURLSafeResult.pathname.split("/"), 2)[1];
      let combined2 = null;
      if (null != tmp11) {
        combined2 = null;
        if (set.has(tmp11)) {
          const _HermesInternal3 = HermesInternal;
          combined2 = "https://discord.com" + str + toURLSafeResult.search + toURLSafeResult.hash;
        }
      }
      return combined2;
    }
  }
};
export const openInternalDeepLink = function openInternalDeepLink(internalDeepLink) {
  _openURL.default(internalDeepLink);
  return true;
};
