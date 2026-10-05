// === Module 7518: AttachmentUrlUtils ===

// Module 7518 (AttachmentUrlUtils)
import Constants from "Constants" /* 1085 */;
import DurationsDefault from "Durations" /* 1102 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import URLUtilsDefault from "URLUtils" /* 1371 */;
import ImageProxyUtils from "ImageProxyUtils" /* 2022 */;
import UrlHostUtils from "UrlHostUtils" /* 2023 */;
import AttachmentUrlConstants from "AttachmentUrlConstants" /* 5800 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let hostname;

const f94972 = (item) => {
  pathname = pathname.pathname;
  return pathname.startsWith(item);
};
function isRefreshableAttachmentUrl(toURLSafeResult) {
  let closure_0 = toURLSafeResult;
  let tmp2 = closure_7.some((arr) => {
    hostname = hostname.hostname;
    let flag = true;
    if (hostname !== arr) {
      const _HermesInternal2 = HermesInternal;
      flag = true;
      if (!hostname.endsWith("." + arr)) {
        const index = arr.indexOf(".");
        const index1 = hostname.indexOf(".");
        flag = false;
        if (-1 !== index) {
          flag = false;
          if (-1 !== index1) {
            const substr = hostname.substring(index1 + 1);
            flag = false;
            if (substr === arr.substring(index + 1)) {
              const substr1 = hostname.substring(0, index1);
              const _HermesInternal = HermesInternal;
              const combined = "" + arr.substring(0, index) + "-";
              flag = substr1.startsWith(combined) && substr1.length > combined.length;
              substr1.startsWith(combined) && substr1.length > combined.length;
            }
          }
        }
      }
    }
    return flag;
  }) || false;
  closure_7.some((arr) => {
    hostname = hostname.hostname;
    let flag = true;
    if (hostname !== arr) {
      const _HermesInternal2 = HermesInternal;
      flag = true;
      if (!hostname.endsWith("." + arr)) {
        const index = arr.indexOf(".");
        const index1 = hostname.indexOf(".");
        flag = false;
        if (-1 !== index) {
          flag = false;
          if (-1 !== index1) {
            const substr = hostname.substring(index1 + 1);
            flag = false;
            if (substr === arr.substring(index + 1)) {
              const substr1 = hostname.substring(0, index1);
              const _HermesInternal = HermesInternal;
              const combined = "" + arr.substring(0, index) + "-";
              flag = substr1.startsWith(combined) && substr1.length > combined.length;
              substr1.startsWith(combined) && substr1.length > combined.length;
            }
          }
        }
      }
    }
    return flag;
  }) || false;
  if (tmp2) {
    let pathname = toURLSafeResult.pathname;
    let tmp4 = !pathname.startsWith("/external/");
    pathname.startsWith("/external/");
    if (tmp4) {
      const searchParams = toURLSafeResult.searchParams;
      let hasItem = searchParams.has("ex");
      if (!hasItem) {
        const _Array = Array;
        const arr = Array.from(ATTACHMENT_PATH_PREFIXES);
        closure_0 = toURLSafeResult;
        const someResult = arr.some(f94972);
        hasItem = (closure_7.some((arr) => {
          hostname = hostname.hostname;
          let flag = true;
          if (hostname !== arr) {
            const _HermesInternal2 = HermesInternal;
            flag = true;
            if (!hostname.endsWith("." + arr)) {
              const index = arr.indexOf(".");
              const index1 = hostname.indexOf(".");
              flag = false;
              if (-1 !== index) {
                flag = false;
                if (-1 !== index1) {
                  const substr = hostname.substring(index1 + 1);
                  flag = false;
                  if (substr === arr.substring(index + 1)) {
                    const substr1 = hostname.substring(0, index1);
                    const _HermesInternal = HermesInternal;
                    const combined = "" + arr.substring(0, index) + "-";
                    flag = substr1.startsWith(combined) && substr1.length > combined.length;
                    substr1.startsWith(combined) && substr1.length > combined.length;
                  }
                }
              }
            }
          }
          return flag;
        }) || false) && someResult;
        (closure_7.some((arr) => {
          hostname = hostname.hostname;
          let flag = true;
          if (hostname !== arr) {
            const _HermesInternal2 = HermesInternal;
            flag = true;
            if (!hostname.endsWith("." + arr)) {
              const index = arr.indexOf(".");
              const index1 = hostname.indexOf(".");
              flag = false;
              if (-1 !== index) {
                flag = false;
                if (-1 !== index1) {
                  const substr = hostname.substring(index1 + 1);
                  flag = false;
                  if (substr === arr.substring(index + 1)) {
                    const substr1 = hostname.substring(0, index1);
                    const _HermesInternal = HermesInternal;
                    const combined = "" + arr.substring(0, index) + "-";
                    flag = substr1.startsWith(combined) && substr1.length > combined.length;
                    substr1.startsWith(combined) && substr1.length > combined.length;
                  }
                }
              }
            }
          }
          return flag;
        }) || false) && someResult;
      }
      tmp4 = hasItem;
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
function shouldRefreshAttachmentUrl(searchParams) {
  searchParams = searchParams.searchParams;
  let str = searchParams.get("ex");
  const _parseInt = parseInt;
  if (str == null) {
    str = "";
  }
  const _parseIntResult = _parseInt(str, 16);
  let result;
  if (!isNaN(_parseIntResult)) {
    result = _parseIntResult * DurationsDefault.Millis.SECOND;
  }
  let tmp5 = null == result;
  if (!tmp5) {
    const _Date = Date;
    tmp5 = result <= Date.now() + HOUR;
  }
  return tmp5;
}
function isAttachmentExpired(url) {
  obj = URLUtilsDefault;
  const toURLSafeResult = obj.toURLSafe(url.url);
  let tmp4 = null != toURLSafeResult;
  if (tmp4) {
    const searchParams = toURLSafeResult.searchParams;
    let str2 = searchParams.get("ex");
    const _parseInt = parseInt;
    if (str2 == null) {
      str2 = "";
    }
    const _parseIntResult = _parseInt(str2, 16);
    const _isNaN = isNaN;
    let result;
    if (!isNaN(_parseIntResult)) {
      result = _parseIntResult * DurationsDefault.Millis.SECOND;
    }
    let tmp8 = null == result;
    if (!tmp8) {
      const _Date = Date;
      tmp8 = result <= Date.now() + HOUR;
    }
    tmp4 = tmp8;
  }
  return tmp4;
}
function isEmbedMediaExpiredAttachment(image) {
  if (null == image) {
    return false;
  } else {
    obj = URLUtilsDefault;
    const toURLSafeResult = obj.toURLSafe(image.url);
    let tmp8 = null != toURLSafeResult;
    if (tmp8) {
      let tmp2 = isRefreshableAttachmentUrl(toURLSafeResult);
      if (tmp2) {
        const searchParams = toURLSafeResult.searchParams;
        let str2 = searchParams.get("ex");
        const _parseInt = parseInt;
        if (str2 == null) {
          str2 = "";
        }
        const _parseIntResult = _parseInt(str2, 16);
        const _isNaN = isNaN;
        let result;
        if (!isNaN(_parseIntResult)) {
          result = _parseIntResult * DurationsDefault.Millis.SECOND;
        }
        let tmp6 = null == result;
        if (!tmp6) {
          const _Date = Date;
          tmp6 = result <= Date.now() + HOUR;
        }
        tmp2 = tmp6;
      }
      tmp8 = tmp2;
    }
    return tmp8;
  }
}
function embedHasExpiredAttachmentUrl(image) {
  let tmpResult = isEmbedMediaExpiredAttachment(image.image);
  if (!tmpResult) {
    const images = image.images;
    let someResult;
    if (images != null) {
      someResult = images.some(isEmbedMediaExpiredAttachment);
    }
    tmpResult = someResult;
  }
  if (!tmpResult) {
    tmpResult = isEmbedMediaExpiredAttachment(image.video);
  }
  return tmpResult;
}
let obj = function _refreshAttachmentUrl() {
  obj = _asyncToGenerator(async (arg0) => {
    let c1;
    let c2;
    let items;
    let obj4;
    let obj8;
    let closure_0 = arg0;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: constants.ATTACHMENTS_REFRESH_URLS, body: obj4, rejectWithError: obj8.rejectWithMigratedError() };
    obj4 = { attachment_urls: items };
    items = [closure_0];
    const post = HTTP.post;
    obj8 = HTTPUtils;
    await post(request);
    return value.body.refreshed_urls[0].refreshed;
  });
  return obj(...arguments);
};
obj = function _maybeRefreshAttachmentUrl() {
  obj = _asyncToGenerator(async (value) => {
    let closure_2;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      function refreshAttachmentUrl() {
        return closure_1_13(...arguments);
      }
      const obj8 = URLUtilsDefault;
      const toURLSafeResult = obj8.toURLSafe(value);
      if (null == toURLSafeResult) {
        return value;
      }
      if (!shouldRefreshAttachmentUrl(toURLSafeResult)) {
        return value;
      }
      await refreshAttachmentUrl(value);
      return value;
    })();
  });
  return obj(...arguments);
};
const ATTACHMENT_PATH_PREFIXES = AttachmentUrlConstants.ATTACHMENT_PATH_PREFIXES;
const Endpoints = Constants.Endpoints;
const HOUR = DurationsDefault.Millis.HOUR;
let items = [window.GLOBAL_ENV.CDN_HOST, ];
let str = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT;
let substr;
if (str != null) {
  substr = str.substring(2);
}
items[1] = substr;
function isAttachmentPathUrl(toURLSafeResult) {
  let closure_0 = toURLSafeResult;
  const arr = Array.from(ATTACHMENT_PATH_PREFIXES);
  const someResult = arr.some(f94972);
  const tmp2 = (closure_7.some((arr) => {
    hostname = hostname.hostname;
    let flag = true;
    if (hostname !== arr) {
      const _HermesInternal2 = HermesInternal;
      flag = true;
      if (!hostname.endsWith("." + arr)) {
        const index = arr.indexOf(".");
        const index1 = hostname.indexOf(".");
        flag = false;
        if (-1 !== index) {
          flag = false;
          if (-1 !== index1) {
            const substr = hostname.substring(index1 + 1);
            flag = false;
            if (substr === arr.substring(index + 1)) {
              const substr1 = hostname.substring(0, index1);
              const _HermesInternal = HermesInternal;
              const combined = "" + arr.substring(0, index) + "-";
              flag = substr1.startsWith(combined) && substr1.length > combined.length;
              substr1.startsWith(combined) && substr1.length > combined.length;
            }
          }
        }
      }
    }
    return flag;
  }) || false) && someResult;
  return tmp2;
}
function getSignedAttachmentExpiration(searchParams) {
  searchParams = searchParams.searchParams;
  let str = searchParams.get("ex");
  const _parseInt = parseInt;
  if (str == null) {
    str = "";
  }
  const _parseIntResult = _parseInt(str, 16);
  let result;
  if (!isNaN(_parseIntResult)) {
    result = _parseIntResult * DurationsDefault.Millis.SECOND;
  }
  return result;
}
const mapped = items.map(UrlHostUtils.getHostWithoutPort);
let closure_7 = mapped.filter((item) => null != item && "" !== item);
let result = size.fileFinishedImporting("modules/messages/AttachmentUrlUtils.tsx");

export { isAttachmentPathUrl };
export { isRefreshableAttachmentUrl };
export const isExternalProxiedAttachmentUrl = function isExternalProxiedAttachmentUrl(toURLSafeResult) {
  obj = ImageProxyUtils;
  return obj.isImageProxyURL(toURLSafeResult);
};
export const removeSignedUrlParameters = function removeSignedUrlParameters(toURLSafeResult) {
  obj = URLUtilsDefault;
  toURLSafeResult = obj.toURLSafe(toURLSafeResult);
  if (null == toURLSafeResult) {
    return toURLSafeResult;
  } else {
    const items = ["ex", "is", "hm"];
    for (const item10012 of items) {
      let searchParams = toURLSafeResult.searchParams;
      let deleteResult = searchParams.delete(item10012);
      continue;
    }
    return toURLSafeResult;
  }
};
export { getSignedAttachmentExpiration };
export const messageHasExpiredAttachmentUrl = function messageHasExpiredAttachmentUrl(attachments) {
  attachments = attachments.attachments;
  let someResult = attachments.some(isAttachmentExpired);
  if (!someResult) {
    const embeds = attachments.embeds;
    someResult = embeds.some(embedHasExpiredAttachmentUrl);
  }
  return someResult;
};
export const maybeRefreshAttachmentUrl = function maybeRefreshAttachmentUrl() {
  return obj(...arguments);
};