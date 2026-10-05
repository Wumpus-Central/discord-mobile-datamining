// === Module 2022: ImageProxyUtils ===

// Module 2022 (ImageProxyUtils)
import URLUtilsDefault from "URLUtils" /* 1371 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1437 */;
import UrlHostUtils from "UrlHostUtils" /* 2023 */;
import size_mod from "module_2" /* 2 */;

function getSizedImageProxyURL(value, size) {
  let format;
  let keepAspectRatio;
  const obj = URLUtilsDefault;
  const str = obj.toURLSafe(value);
  if (null != str) {
    let startsWithResult = _Set1.has(str.hostname);
    if (startsWithResult) {
      const pathname = str.pathname;
      startsWithResult = pathname.startsWith("/external/");
    }
    if (startsWithResult) {
      if (null != size.size) {
        const _String = String;
        size = size.size;
        const getBestMediaProxySize = ImageLoaderUtils.getBestMediaProxySize;
        ImageLoaderUtils;
        const obj2 = ImageLoaderUtils;
        const StringResult = String(getBestMediaProxySize(size * obj2.getDevicePixelRatio()));
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
let str = window.GLOBAL_ENV.IMAGE_PROXY_ENDPOINTS;
let parts;
const _Set = Set;
if (str != null) {
  parts = str.split(",");
}
if (parts == null) {
  parts = [];
}
function isImageProxyURL(hostname) {
  let startsWithResult = _Set1.has(hostname.hostname);
  if (startsWithResult) {
    const pathname = hostname.pathname;
    startsWithResult = pathname.startsWith("/external/");
  }
  return startsWithResult;
}
const mapped = parts.map((item) => item.substring(2));
const mapped1 = mapped.map(UrlHostUtils.getHostWithoutPort);
const _Set1 = new _Set(mapped1.filter(Boolean));
let size = size_mod;
let result = size.fileFinishedImporting("modules/image_proxy/ImageProxyUtils.tsx");

export { isImageProxyURL };
export { getSizedImageProxyURL };
export const getSizedImageAssetURL = function getSizedImageAssetURL(value, size) {
  const obj = URLUtilsDefault;
  const str = obj.toURLSafe(value);
  if (null == str) {
    return value;
  } else {
    let startsWithResult = _Set1.has(str.hostname);
    if (startsWithResult) {
      const pathname = str.pathname;
      startsWithResult = pathname.startsWith("/external/");
    }
    if (startsWithResult) {
      return getSizedImageProxyURL(value, size);
    } else {
      const tmpResult = URLUtilsDefault;
      if (tmpResult.isDiscordCdnUrl(value)) {
        if (null != size.size) {
          const _String = String;
          size = size.size;
          const getBestMediaProxySize = ImageLoaderUtils.getBestMediaProxySize;
          ImageLoaderUtils;
          const obj3 = ImageLoaderUtils;
          const StringResult = String(getBestMediaProxySize(size * obj3.getDevicePixelRatio()));
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
    }
  }
};