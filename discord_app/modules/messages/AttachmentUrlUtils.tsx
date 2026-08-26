// === Module 9969: isRefreshableAttachmentUrl ===

// Module 9969 (isRefreshableAttachmentUrl)
import setDefault from "set" /* 687 */;
import isDiscordProxiedAssetUrlDefault from "isDiscordProxiedAssetUrl" /* 1487 */;
import getSizedImageProxyURL from "getSizedImageProxyURL" /* 4478 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { ATTACHMENT_PATH_PREFIXES } from "set" /* 4914 */;
import { Endpoints } from "ME" /* 676 */;
import set from "set" /* 2 */;

require = arg1;
function isRefreshableAttachmentUrl(result) {
  let tmp2 = set.has(result.hostname) || false;
  if (tmp2) {
    let pathname = result.pathname;
    const startsWithResult = pathname.startsWith("/external/");
    let tmp4 = !startsWithResult;
    if (!startsWithResult) {
      const searchParams = result.searchParams;
      let hasItem = searchParams.has("ex");
      if (!hasItem) {
        closure_0 = result;
        const _Array = Array;
        const arr = Array.from(ATTACHMENT_PATH_PREFIXES);
        const someResult = Array.from(ATTACHMENT_PATH_PREFIXES).some((arg0) => {
          pathname = pathname.pathname;
          return pathname.startsWith(arg0);
        });
        hasItem = (set.has(result.hostname) || false) && Array.from(ATTACHMENT_PATH_PREFIXES).some((arg0) => {
          pathname = pathname.pathname;
          return pathname.startsWith(arg0);
        });
        const tmp9 = (set.has(result.hostname) || false) && Array.from(ATTACHMENT_PATH_PREFIXES).some((arg0) => {
          pathname = pathname.pathname;
          return pathname.startsWith(arg0);
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
    result = parsed * setDefault.Millis.SECOND;
  }
  let tmp5 = null == result;
  if (!tmp5) {
    const _Date = Date;
    tmp5 = result <= Date.now() + HOUR;
  }
  return tmp5;
}
function isAttachmentExpired(url) {
  const toURLSafeResult = isDiscordProxiedAssetUrlDefault.toURLSafe(url.url);
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
      result = parsed * setDefault.Millis.SECOND;
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
    const toURLSafeResult = isDiscordProxiedAssetUrlDefault.toURLSafe(image.url);
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
          result = parsed * setDefault.Millis.SECOND;
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
function _refreshAttachmentUrl() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function*(arg0) {
      const HTTP = callback(530).HTTP;
      obj1 = { url: null, body: null, rejectWithError: null };
      obj1[0] = closure_1_5.ATTACHMENTS_REFRESH_URLS;
      const obj2 = { attachment_urls: null };
      const items = [callback];
      obj2[0] = items;
      obj1[1] = obj2;
      obj1[2] = callback(530).rejectWithMigratedError();
      yield HTTP.post(obj1);
      return arg1.body.refreshed_urls[0].refreshed;
    })();
  });
  closure_13 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _maybeRefreshAttachmentUrl() {
  let self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp2;
              closure_1 = undefined;
              const toURLSafeResult = closure_1_1(closure_1_2[6]).toURLSafe(closure_0);
              if (null == toURLSafeResult) {
                c4 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = tmp18;
                return obj1;
              } else if (closure_1_9(toURLSafeResult)) {
                c3 = 1;
                c4 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = (function refreshAttachmentUrl(arg0) {
                  const self = this;
                  const apply = closure_13.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(tmp18);
                return obj2;
              } else {
                c4 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = tmp18;
                return obj3;
              }
              const obj8 = closure_1_1(closure_1_2[6]);
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            closure_1 = arg1;
            if (closure_1 == null) {
              closure_1 = closure_0;
            }
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = closure_1;
            return obj;
          }
        } catch (tmp12) {
          c4 = tmp;
          throw tmp12;
        }
      }
    })();
  });
  closure_14 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const HOUR = setDefault.Millis.HOUR;
let items = [window.GLOBAL_ENV.CDN_HOST, ];
let substr;
if (window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT != null) {
  substr = require("set");
}
items[1] = substr;
function isAttachmentPathUrl(toURLSafeResult) {
  closure_0 = toURLSafeResult;
  const arr = Array.from(ATTACHMENT_PATH_PREFIXES);
  const someResult = Array.from(ATTACHMENT_PATH_PREFIXES).some((arg0) => {
    pathname = pathname.pathname;
    return pathname.startsWith(arg0);
  });
  return (set.has(toURLSafeResult.hostname) || false) && Array.from(ATTACHMENT_PATH_PREFIXES).some((arg0) => {
    pathname = pathname.pathname;
    return pathname.startsWith(arg0);
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
    result = parsed * setDefault.Millis.SECOND;
  }
  return result;
}
const mapped = items.map(require("getHostWithoutPort").getHostWithoutPort);
let set = new Set(mapped.filter(Boolean));
let result = set.fileFinishedImporting("modules/messages/AttachmentUrlUtils.tsx");

export { isAttachmentPathUrl };
export { isRefreshableAttachmentUrl };
export const isExternalProxiedAttachmentUrl = function isExternalProxiedAttachmentUrl(toURLSafeResult) {
  return getSizedImageProxyURL.isImageProxyURL(toURLSafeResult);
};
export const removeSignedUrlParameters = function removeSignedUrlParameters(toURLSafeResult) {
  toURLSafeResult = isDiscordProxiedAssetUrlDefault.toURLSafe(toURLSafeResult);
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
  const obj = isDiscordProxiedAssetUrlDefault;
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
export const maybeRefreshAttachmentUrl = function maybeRefreshAttachmentUrl(attachmentUrl) {
  const self = this;
  const apply = _maybeRefreshAttachmentUrl.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};