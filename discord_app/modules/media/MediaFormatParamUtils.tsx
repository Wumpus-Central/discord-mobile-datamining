// === Module 6185: MediaFormatParamUtils ===

// Module 6185 (MediaFormatParamUtils)
import URLUtilsDefault from "URLUtils" /* 1378 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/media/MediaFormatParamUtils.tsx");

export function withMediaFormat(proxy_url, webp) {
  const str = URLUtilsDefault.toURLSafe(proxy_url);
  if (null == str) {
    const index = proxy_url.indexOf("#");
    let str5 = "";
    if (-1 !== index) {
      str5 = proxy_url.slice(index);
    }
    let substr = proxy_url;
    if (-1 !== index) {
      substr = proxy_url.slice(0, index);
    }
    const index1 = substr.indexOf("?");
    let substr1 = substr;
    if (-1 !== index1) {
      substr1 = substr.slice(0, index1);
    }
    let str7 = "";
    if (-1 !== index1) {
      str7 = substr.slice(index1 + 1);
    }
    const parts = str7.split("&");
    const found = parts.filter((item) => {
      let tmp = "" !== item;
      if (tmp) {
        tmp = "format" !== item.split("=")[0];
      }
      return tmp;
    });
    const _HermesInternal = HermesInternal;
    found.push("format=" + webp);
    const _HermesInternal2 = HermesInternal;
    let combined = "" + substr1 + "?" + found.join("&") + str5;
  } else {
    const searchParams = str.searchParams;
    const result = searchParams.set("format", webp);
    combined = str.toString();
  }
  return combined;
}