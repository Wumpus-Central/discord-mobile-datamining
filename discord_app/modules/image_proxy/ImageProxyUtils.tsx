// === Module 2015: ImageProxyUtils ===

// Module 2015 (ImageProxyUtils)
import URLUtilsDefault from "URLUtils" /* 1366 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1432 */;
import UrlHostUtils from "UrlHostUtils" /* 2016 */;
import size from "module_2" /* 2 */;

function getSizedImageProxyURL(value, size) {
  const str = URLUtilsDefault.toURLSafe(value);
  if (null != str) {
    let startsWithResult = set.has(str.hostname);
    if (startsWithResult) {
      const pathname = str.pathname;
      startsWithResult = pathname.startsWith("/external/");
    }
    if (startsWithResult) {
      if (null != size.size) {
        const _String = String;
        const obj2 = ImageLoaderUtils;
        const StringResult = String(obj2.getBestMediaProxySize(size.size * ImageLoaderUtils.getDevicePixelRatio()));
        const searchParams = str.searchParams;
        const result = searchParams.set("width", StringResult);
        const searchParams2 = str.searchParams;
        const result1 = searchParams2.set("height", StringResult);
      }
      ({ keepAspectRatio, format } = size);
      if (null != keepAspectRatio) {
        const searchParams3 = str.searchParams;
        const _String2 = String;
        const result2 = searchParams3.set("keep_aspect_ratio", String(keepAspectRatio));
      }
      if (null != format) {
        const searchParams4 = str.searchParams;
        const result3 = searchParams4.set("format", format);
      }
      return str.toString();
    }
  }
  return value;
}
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
const mapped = parts.map((item) => item.substring(2));
const mapped1 = mapped.map(UrlHostUtils.getHostWithoutPort);
const set = new Set(mapped1.filter(Boolean));
let result = size.fileFinishedImporting("modules/image_proxy/ImageProxyUtils.tsx");

export { isImageProxyURL };
export { getSizedImageProxyURL };
export const getSizedImageAssetURL = function getSizedImageAssetURL(value, size) {
  const str = URLUtilsDefault.toURLSafe(value);
  if (null == str) {
    return value;
  } else {
    let startsWithResult = set.has(str.hostname);
    if (startsWithResult) {
      const pathname = str.pathname;
      startsWithResult = pathname.startsWith("/external/");
    }
    if (startsWithResult) {
      return getSizedImageProxyURL(value, size);
    } else {
      if (tmpResult.isDiscordCdnUrl(value)) {
        if (null != size.size) {
          const _String = String;
          const obj3 = ImageLoaderUtils;
          const StringResult = String(obj3.getBestMediaProxySize(size.size * ImageLoaderUtils.getDevicePixelRatio()));
          const _Number2 = Number;
          const searchParams2 = str.searchParams;
          const NumberResult = Number(searchParams2.get("size"));
          if (NumberResult > 0) {
            const _Number = Number;
            if (Number(StringResult) > NumberResult) {
              return value;
            }
          }
          const searchParams = str.searchParams;
          const result = searchParams.set("size", StringResult);
        }
        return str.toString();
      } else {
        return value;
      }
      tmpResult = URLUtilsDefault;
    }
  }
};