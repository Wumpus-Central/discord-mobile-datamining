// === Module 14482: internalDeepLinks ===

// Module 14482 (internalDeepLinks)
import URLUtilsDefault from "URLUtils" /* 1365 */;
import openURL from "openURL" /* 4249 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const set = new Set(["channels", "users", "events"]);
const set1 = new Set(["", "-"]);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/internalDeepLinks.tsx");

export const resolveInternalDeepLink = function resolveInternalDeepLink(url) {
  const toURLSafeResult = URLUtilsDefault.toURLSafe(url);
  if (null == toURLSafeResult) {
    return null;
  } else {
    ({ hostname: hostname2, protocol, host } = toURLSafeResult);
    let tmpResult = tmp(1365);
    if (tmpResult.isDiscordProtocol(protocol)) {
      ({ hostname, pathname } = toURLSafeResult);
      if (!set1.has(hostname)) {
        tmpResult = tmp(1365);
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
        tmpResult2 = tmp(1365);
      }
      const tmp11 = _slicedToArray(toURLSafeResult.pathname.split("/"), 2)[1];
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
  openURL.default(internalDeepLink);
  return true;
};