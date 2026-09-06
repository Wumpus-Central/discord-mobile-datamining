// === Module 9942: AttachmentUrlUtils ===

// Module 9942 (AttachmentUrlUtils)
import DurationsDefault from "Durations" /* 1090 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import URLUtilsDefault from "URLUtils" /* 1365 */;
import ImageProxyUtils from "ImageProxyUtils" /* 1929 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
function isRefreshableAttachmentUrl(toURLSafeResult) {
  let tmp2 = closure_7.some((arr) => {
    const hostname = toURLSafeResult.hostname;
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
              const tmp3 = substr1.startsWith(combined) && substr1.length > combined.length;
            }
          }
        }
      }
    }
    return flag;
  }) || false;
  if (tmp2) {
    let pathname = toURLSafeResult.pathname;
    const startsWithResult = pathname.startsWith("/external/");
    let tmp4 = !startsWithResult;
    if (!startsWithResult) {
      const searchParams = toURLSafeResult.searchParams;
      let hasItem = searchParams.has("ex");
      if (!hasItem) {
        const _Array = Array;
        const arr = Array.from(ATTACHMENT_PATH_PREFIXES);
        const someResult = Array.from(ATTACHMENT_PATH_PREFIXES).some((item) => {
          const pathname = toURLSafeResult.pathname;
          return pathname.startsWith(item);
        });
        hasItem = (closure_7.some((arr) => {
          const hostname = toURLSafeResult.hostname;
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
                    const tmp3 = substr1.startsWith(combined) && substr1.length > combined.length;
                  }
                }
              }
            }
          }
          return flag;
        }) || false) && Array.from(ATTACHMENT_PATH_PREFIXES).some((item) => {
          const pathname = toURLSafeResult.pathname;
          return pathname.startsWith(item);
        });
        const tmp9 = (closure_7.some((arr) => {
          const hostname = toURLSafeResult.hostname;
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
                    const tmp3 = substr1.startsWith(combined) && substr1.length > combined.length;
                  }
                }
              }
            }
          }
          return flag;
        }) || false) && Array.from(ATTACHMENT_PATH_PREFIXES).some((item) => {
          const pathname = toURLSafeResult.pathname;
          return pathname.startsWith(item);
        });
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
  if (str == null) {
    str = "";
  }
  const parsed = parseInt(str, 16);
  let result;
  if (!isNaN(parsed)) {
    result = parsed * DurationsDefault.Millis.SECOND;
  }
  let tmp5 = null == result;
  if (!tmp5) {
    const _Date = Date;
    tmp5 = result <= Date.now() + HOUR;
  }
  return tmp5;
}
function isAttachmentExpired(url) {
  const toURLSafeResult = URLUtilsDefault.toURLSafe(url.url);
  let tmp4 = null != toURLSafeResult;
  if (tmp4) {
    const searchParams = toURLSafeResult.searchParams;
    let str2 = searchParams.get("ex");
    if (str2 == null) {
      str2 = "";
    }
    const parsed = parseInt(str2, 16);
    const _isNaN = isNaN;
    let result;
    if (!isNaN(parsed)) {
      result = parsed * DurationsDefault.Millis.SECOND;
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
    const toURLSafeResult = URLUtilsDefault.toURLSafe(image.url);
    let tmp8 = null != toURLSafeResult;
    if (tmp8) {
      let tmp2 = isRefreshableAttachmentUrl(toURLSafeResult);
      if (tmp2) {
        const searchParams = toURLSafeResult.searchParams;
        let str2 = searchParams.get("ex");
        if (str2 == null) {
          str2 = "";
        }
        const parsed = parseInt(str2, 16);
        const _isNaN = isNaN;
        let result;
        if (!isNaN(parsed)) {
          result = parsed * DurationsDefault.Millis.SECOND;
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
      someResult = images.some(tmp);
    }
    tmpResult = someResult;
  }
  if (!tmpResult) {
    tmpResult = tmp(image.video);
  }
  return tmpResult;
}
let closure_13 = async function _refreshAttachmentUrl() {
  const HTTP = HTTPUtils.HTTP;
  const request = { url: constants.ATTACHMENTS_REFRESH_URLS, body: null, rejectWithError: HTTPUtils.rejectWithMigratedError() };
  const obj1 = { attachment_urls: null };
  const items = [closure_0];
  obj1.attachment_urls = items;
  request.body = obj1;
  await HTTP.post(request);
  return arg1.body.refreshed_urls[0].refreshed;
};
let closure_14 = async function _maybeRefreshAttachmentUrl(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp2;
          closure_130_0 = closure_0;
          closure_130_1 = undefined;
          const toURLSafeResult = URLUtilsDefault.toURLSafe(closure_0);
          if (null == toURLSafeResult) {
            c4 = 3;
            const obj1 = { value: tmp17, done: true };
            return obj1;
          } else if (shouldRefreshAttachmentUrl(toURLSafeResult)) {
            c3 = 1;
            c4 = 1;
            const obj2 = {
              value: (function refreshAttachmentUrl() {
                          const self = this;
                          const apply = closure_1_13.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(tmp17),
              done: false
            };
            return obj2;
          } else {
            c4 = 3;
            const obj3 = { value: tmp17, done: true };
            return obj3;
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        closure_130_1 = value;
        value = closure_130_1;
        if (closure_130_1 == null) {
          value = closure_130_0;
        }
        c4 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp12) {
      c4 = tmp;
      throw tmp12;
    }
  }
};
const ATTACHMENT_PATH_PREFIXES = fn(5010).ATTACHMENT_PATH_PREFIXES;
const Endpoints = fn(1074).Endpoints;
const HOUR = DurationsDefault.Millis.HOUR;
let items = [window.GLOBAL_ENV.CDN_HOST, ];
let substr;
if (window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT != null) {
  substr = str.substring(2);
}
items[1] = substr;
function isAttachmentPathUrl(toURLSafeResult) {
  closure_0 = toURLSafeResult;
  const arr = Array.from(ATTACHMENT_PATH_PREFIXES);
  const someResult = Array.from(ATTACHMENT_PATH_PREFIXES).some((item) => {
    const pathname = toURLSafeResult.pathname;
    return pathname.startsWith(item);
  });
  return (closure_7.some((arr) => {
    const hostname = toURLSafeResult.hostname;
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
              const tmp3 = substr1.startsWith(combined) && substr1.length > combined.length;
            }
          }
        }
      }
    }
    return flag;
  }) || false) && Array.from(ATTACHMENT_PATH_PREFIXES).some((item) => {
    const pathname = toURLSafeResult.pathname;
    return pathname.startsWith(item);
  });
}
function getSignedAttachmentExpiration(searchParams) {
  searchParams = searchParams.searchParams;
  let str = searchParams.get("ex");
  if (str == null) {
    str = "";
  }
  const parsed = parseInt(str, 16);
  let result;
  if (!isNaN(parsed)) {
    result = parsed * DurationsDefault.Millis.SECOND;
  }
  return result;
}
const mapped = items.map(fn(1930).getHostWithoutPort);
let closure_7 = mapped.filter((item) => {
  let tmp = null != item;
  if (tmp) {
    tmp = "" !== item;
  }
  return tmp;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/AttachmentUrlUtils.tsx");

export { isAttachmentPathUrl };
export { isRefreshableAttachmentUrl };
export const isExternalProxiedAttachmentUrl = function isExternalProxiedAttachmentUrl(toURLSafeResult) {
  return ImageProxyUtils.isImageProxyURL(toURLSafeResult);
};
export const removeSignedUrlParameters = function removeSignedUrlParameters(toURLSafeResult) {
  toURLSafeResult = URLUtilsDefault.toURLSafe(toURLSafeResult);
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
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};