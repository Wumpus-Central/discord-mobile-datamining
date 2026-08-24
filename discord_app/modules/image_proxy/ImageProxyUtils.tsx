// === Module 4512: isImageProxyURL ===

// Module 4512 (isImageProxyURL)
import handleImageLoad from "handleImageLoad" /* 1469 */;
import isDiscordProxiedAssetUrlDefault from "isDiscordProxiedAssetUrl" /* 1487 */;
import getHostWithoutPort from "getHostWithoutPort" /* 4513 */;
import set from "set" /* 2 */;

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
const mapped = parts.map((str) => str.substring(2));
const mapped1 = mapped.map(getHostWithoutPort.getHostWithoutPort);
let set = new Set(mapped1.filter(Boolean));
let result = set.fileFinishedImporting("modules/image_proxy/ImageProxyUtils.tsx");

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
        const obj3 = handleImageLoad;
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