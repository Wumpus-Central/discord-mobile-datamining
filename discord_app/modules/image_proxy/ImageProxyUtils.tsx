// === Module 4508: isImageProxyURL ===

// Module 4508 (isImageProxyURL)
import obj132 from "obj132" /* 2 */;
import handleImageLoad from "handleImageLoad" /* 1469 */;
import isDiscordProxiedAssetUrlDefault from "isDiscordProxiedAssetUrl" /* 1487 */;

let parts;
if (window.GLOBAL_ENV.IMAGE_PROXY_ENDPOINTS != null) {
  parts = str.split(",");
}
if (parts == null) {
  parts = [];
}
function isImageProxyURL(hostname) {
  let startsWithResult = set.has(hostname.hostname);
  if (startsWithResult) {
    const pathname = hostname.pathname;
    startsWithResult = pathname.startsWith("/external/");
  }
  return startsWithResult;
}
const mapped = parts.map((item, index) => item.substring(2));
const mapped1 = mapped.map(function getHostWithoutPort(item, index) {
  let first;
  if (item != null) {
    first = item.split(":")[0];
  }
  return first;
});
const set = new Set(mapped1.filter(Boolean));
let result = obj132.fileFinishedImporting("modules/image_proxy/ImageProxyUtils.tsx");

export { isImageProxyURL };
export const getSizedImageProxyURL = function getSizedImageProxyURL(value, arg1) {
  ({ size, keepAspectRatio } = arg1);
  const str = isDiscordProxiedAssetUrlDefault.toURLSafe(value);
  if (null != str) {
    let startsWithResult = set.has(str.hostname);
    if (startsWithResult) {
      const pathname = str.pathname;
      startsWithResult = pathname.startsWith("/external/");
    }
    if (startsWithResult) {
      if (null != size) {
        const _String = String;
        const obj2 = handleImageLoad;
        const StringResult = String(obj2.getBestMediaProxySize(size * handleImageLoad.getDevicePixelRatio()));
        const searchParams = str.searchParams;
        const result = searchParams.set("width", StringResult);
        const searchParams2 = str.searchParams;
        const result1 = searchParams2.set("height", StringResult);
      }
      if (null != keepAspectRatio) {
        const searchParams3 = str.searchParams;
        const _String2 = String;
        const result2 = searchParams3.set("keep_aspect_ratio", String(keepAspectRatio));
      }
      return str.toString();
    }
  }
  return value;
};