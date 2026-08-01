// === Module 9611: shouldRefreshAttachmentUrl ===

// Module 9611 (shouldRefreshAttachmentUrl)
import sendRequest from "sendRequest";
import { Endpoints } from "ME";
import set from "set";

let require = arg1;
function shouldRefreshAttachmentUrl(searchParams) {
  searchParams = searchParams.searchParams;
  let str = searchParams.get("ex");
  if (str == null) {
    str = "";
  }
  const parsed = parseInt(str, 16);
  let result;
  if (!isNaN(parsed)) {
    result = parsed * importDefault(687).Millis.SECOND;
  }
  let tmp5 = null == result;
  if (!tmp5) {
    const _Date = Date;
    tmp5 = result <= Date.now() + HOUR;
  }
  return tmp5;
}
function isAttachmentExpired(url) {
  const toURLSafeResult = importDefault(1467).toURLSafe(url.url);
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
      result = parsed * importDefault(687).Millis.SECOND;
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
    const toURLSafeResult = importDefault(1467).toURLSafe(image.url);
    let tmp11 = null != toURLSafeResult;
    if (tmp11) {
      const require = toURLSafeResult;
      const _Array = Array;
      const hasItem = set1.has(toURLSafeResult.hostname);
      const arr = Array.from(set);
      let tmp6 = hasItem && Array.from(set).some((arg0) => {
        const pathname = toURLSafeResult.pathname;
        return pathname.startsWith(arg0);
      });
      if (tmp6) {
        const searchParams = toURLSafeResult.searchParams;
        let str2 = searchParams.get("ex");
        if (str2 == null) {
          str2 = "";
        }
        const parsed = parseInt(str2, 16);
        const _isNaN = isNaN;
        let result;
        if (!isNaN(parsed)) {
          result = parsed * importDefault(687).Millis.SECOND;
        }
        let tmp9 = null == result;
        if (!tmp9) {
          const _Date = Date;
          tmp9 = result <= Date.now() + HOUR;
        }
        tmp6 = tmp9;
      }
      tmp11 = tmp6;
      const tmp5 = hasItem && Array.from(set).some((arg0) => {
        const pathname = toURLSafeResult.pathname;
        return pathname.startsWith(arg0);
      });
    }
    return tmp11;
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
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp4;
              let lib;
              const HTTP = lib(530).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: null };
              obj1[0] = outer1_4.ATTACHMENTS_REFRESH_URLS;
              const obj2 = { attachment_urls: null };
              const items = [lib];
              obj2[0] = items;
              obj1[1] = obj2;
              obj1[2] = lib(530).rejectWithMigratedError();
              dependencyMap = 1;
              c3 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            lib = arg1;
            let refreshed;
            if (lib.ok) {
              refreshed = lib.body.refreshed_urls[0].refreshed;
            }
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = refreshed;
            return obj;
          }
        } catch (tmp10) {
          c3 = tmp;
          throw tmp10;
        }
      }
    })();
  });
  const _refreshAttachmentUrl = tmp;
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
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
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
              let closure_2 = tmp2;
              let closure_1;
              const toURLSafeResult = outer1_1(outer1_2[4]).toURLSafe(closure_0);
              if (null == toURLSafeResult) {
                c4 = 3;
                const obj1 = { value: null, done: true };
                obj1[0] = tmp18;
                return obj1;
              } else if (outer1_8(toURLSafeResult)) {
                c3 = 1;
                c4 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = (function refreshAttachmentUrl(arg0) {
                  const self = this;
                  const apply = closure_12.apply;
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
              const obj8 = outer1_1(outer1_2[4]);
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
  const _maybeRefreshAttachmentUrl = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let set = new Set(["/attachments/", "/ephemeral-attachments/"]);
const HOUR = require("set").Millis.HOUR;
let items = [window.GLOBAL_ENV.CDN_HOST, ];
let substr;
if (window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT != null) {
  substr = require("set");
}
items[1] = substr;
function isAttachmentUrl(toURLSafeResult) {
  let closure_0 = toURLSafeResult;
  const hasItem = set1.has(toURLSafeResult.hostname);
  const arr = Array.from(set);
  return hasItem && Array.from(set).some((arg0) => {
    const pathname = toURLSafeResult.pathname;
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
    result = parsed * importDefault(687).Millis.SECOND;
  }
  return result;
}
const mapped = items.map(function getHostWithoutPort(arg0) {
  let first;
  if (arg0 != null) {
    first = arg0.split(":")[0];
  }
  return first;
});
const set1 = new Set(mapped.filter(Boolean));
let result = set.fileFinishedImporting("modules/messages/SignedAttachmentLinkUtils.tsx");

export { isAttachmentUrl };
export const isExternalProxiedAttachmentUrl = function isExternalProxiedAttachmentUrl(toURLSafeResult) {
  return require(4224) /* isImageProxyURL */.isImageProxyURL(toURLSafeResult);
};
export const removeSignedUrlParameters = function removeSignedUrlParameters(toURLSafeResult) {
  toURLSafeResult = importDefault(1467).toURLSafe(toURLSafeResult);
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
  const obj = importDefault(1467);
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