// discord_app/modules/rpc/helpers/internalDeepLinks.tsx
import URLUtilsDefault from "../../../utils/URLUtils.tsx";
import openURL from "../../../lib/openURL.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import size from "../../../../_runtime/metro/00002__.js";

const set = new Set(["channels", "users", "events"]);
const set1 = new Set(["", "-"]);
const result = size.fileFinishedImporting("modules/rpc/helpers/internalDeepLinks.tsx");

export const resolveInternalDeepLink = function resolveInternalDeepLink(url) {
  let host;
  let hostname;
  let hostname2;
  let pathname;
  let protocol;
  const obj = URLUtilsDefault;
  const toURLSafeResult = obj.toURLSafe(url);
  if (null == toURLSafeResult) {
    return null;
  } else {
    let str;
    ({ hostname: hostname2, protocol, host } = toURLSafeResult);
    const tmpResult = URLUtilsDefault;
    if (tmpResult.isDiscordProtocol(protocol)) {
      ({ hostname, pathname } = toURLSafeResult);
      if (!set1.has(hostname)) {
        let combined;
        const tmpResult4 = URLUtilsDefault;
        if (!tmpResult4.isDiscordHostname(hostname)) {
          const _HermesInternal = HermesInternal;
          combined = "/" + hostname + pathname;
        }
        str = combined;
      }
      let combined1 = pathname;
      if (!pathname.startsWith("/")) {
        const _HermesInternal2 = HermesInternal;
        combined1 = "/" + pathname;
      }
      combined = combined1;
    } else {
      const tmpResult5 = URLUtilsDefault;
      if (!tmpResult5.isDiscordHostname(hostname2)) {
        const tmpResult6 = URLUtilsDefault;
        if (!tmpResult6.isDiscordLocalhost(host, hostname2)) {
          return null;
        }
      }
      str = toURLSafeResult.pathname;
    }
    const tmp10 = _slicedToArray(str.split("/"), 2)[1];
    let combined2 = null;
    if (null != tmp10) {
      combined2 = null;
      if (set.has(tmp10)) {
        const _HermesInternal3 = HermesInternal;
        combined2 = "https://discord.com" + str + toURLSafeResult.search + toURLSafeResult.hash;
      }
    }
    return combined2;
  }
};
export const openInternalDeepLink = function openInternalDeepLink(internalDeepLink) {
  openURL.default(internalDeepLink);
  return true;
};
