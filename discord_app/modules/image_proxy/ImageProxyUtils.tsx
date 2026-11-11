// === Module 2154: ImageProxyUtils ===

// Module 2154 (ImageProxyUtils)
import URLUtilsDefault from "URLUtils" /* 1378 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1446 */;
import UrlHostUtils from "UrlHostUtils" /* 2155 */;
import size from "module_2" /* 2 */;

function getSizedImageProxyURL(iconUrl, size) {
  const str = URLUtilsDefault.toURLSafe(iconUrl);
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
  return iconUrl;
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
export function getSizedImageAssetURL(iconUrl, size) {
  const str = URLUtilsDefault.toURLSafe(iconUrl);
  if (null == str) {
    return iconUrl;
  } else {
    let startsWithResult = set.has(str.hostname);
    if (startsWithResult) {
      const pathname = str.pathname;
      startsWithResult = pathname.startsWith("/external/");
    }
    if (startsWithResult) {
      return getSizedImageProxyURL(iconUrl, size);
    } else {
      if (tmpResult.isDiscordCdnUrl(iconUrl)) {
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
              return iconUrl;
            }
          }
          const searchParams = str.searchParams;
          const result = searchParams.set("size", StringResult);
        }
        return str.toString();
      } else {
        return iconUrl;
      }
      tmpResult = URLUtilsDefault;
    }
  }
}