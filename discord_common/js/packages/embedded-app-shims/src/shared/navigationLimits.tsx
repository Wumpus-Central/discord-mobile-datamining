// === Module 11455: navigationLimits ===

// Module 11455 (navigationLimits)
import Safe5 from "Safe" /* 11456 */;
import constants from "constants" /* 11458 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/embedded-app-shims/src/shared/navigationLimits.tsx");

export const isAboutBlankUrl = function isAboutBlankUrl(url) {
  const Safe = Safe5.Safe;
  let combined = url;
  if (StringResult.startsWith("about:blank/")) {
    const Safe2 = Safe5.Safe;
    const _HermesInternal = HermesInternal;
    combined = "about:blank" + Safe2.String(url).slice(12);
    const StringResult1 = Safe2.String(url);
  }
  let startsWithResult = "about:blank" === combined;
  if (!startsWithResult) {
    const Safe3 = Safe5.Safe;
    startsWithResult = Safe3.String(combined).startsWith("about:blank#");
    const StringResult2 = Safe3.String(combined);
  }
  if (!startsWithResult) {
    const Safe4 = Safe5.Safe;
    startsWithResult = Safe4.String(combined).startsWith("about:blank?");
    const StringResult3 = Safe4.String(combined);
  }
  return startsWithResult;
};
export const isTooLongForCloudflare = function isTooLongForCloudflare(href, routerOrigin) {
  try {
    const uRL = new Safe5.Safe.Constructor.URL(href);
    const Safe = Safe5.Safe;
    let tmp11 = Safe.URL(uRL).origin === routerOrigin;
    if (tmp11) {
      const sum = routerOrigin.length + arr.length + arr2.length;
      tmp11 = sum > constants.MAX_SAME_ORIGIN_URL_LENGTH;
    }
    return tmp11;
  } catch (err) {
    return false;
  }
};