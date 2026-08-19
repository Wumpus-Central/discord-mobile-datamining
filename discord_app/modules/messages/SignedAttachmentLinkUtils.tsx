// discord_app/modules/messages/SignedAttachmentLinkUtils.tsx
import obj132Default from "../../utils/Durations.tsx";
import isDiscordProxiedAssetUrlDefault from "../../utils/URLUtils.tsx";
import isImageProxyURL from "../image_proxy/ImageProxyUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import { Endpoints } from "../../Constants.tsx";

require = fn;
function shouldRefreshAttachmentUrl(searchParams) {
  searchParams = searchParams.searchParams;
  let str = searchParams.get("ex");
  if (str == null) {
    str = "";
  }
  const parsed = parseInt(str, 16);
  let result;
  if (!isNaN(parsed)) {
    result = parsed * obj132Default.Millis.SECOND;
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
      result = parsed * obj132Default.Millis.SECOND;
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
    let tmp11 = null != toURLSafeResult;
    if (tmp11) {
      require = toURLSafeResult;
      const _Array = Array;
      const hasItem = set1.has(toURLSafeResult.hostname);
      const arr = Array.from(set);
      let tmp6 = hasItem && Array.from(set).some((item, index) => {
        const pathname = toURLSafeResult.pathname;
        return pathname.startsWith(item);
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
          result = parsed * obj132Default.Millis.SECOND;
        }
        let tmp9 = null == result;
        if (!tmp9) {
          const _Date = Date;
          tmp9 = result <= Date.now() + HOUR;
        }
        tmp6 = tmp9;
      }
      tmp11 = tmp6;
      const tmp5 = hasItem && Array.from(set).some((item, index) => {
        const pathname = toURLSafeResult.pathname;
        return pathname.startsWith(item);
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
      someResult = images.some(isEmbedMediaExpiredAttachment);
    }
    tmpResult = someResult;
  }
  if (!tmpResult) {
    tmpResult = isEmbedMediaExpiredAttachment(image.video);
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
      obj1[0] = closure_1_4.ATTACHMENTS_REFRESH_URLS;
      const obj2 = { attachment_urls: null };
      const items = [callback];
      obj2[0] = items;
      obj1[1] = obj2;
      obj1[2] = callback(530).rejectWithMigratedError();
      yield HTTP.post(obj1);
      return arg1.body.refreshed_urls[0].refreshed;
    })();
  });
  closure_12 = tmp;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const toURLSafeResult = closure_1_1(closure_1_2[4]).toURLSafe(closure_0);
              if (null == toURLSafeResult) {
                c4 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = closure_0;
                return obj1;
              } else if (closure_1_8(toURLSafeResult)) {
                c3 = 1;
                c4 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = (function refreshAttachmentUrl(closure_0) {
                  const self = this;
                  const apply = closure_12.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(closure_0);
                return obj2;
              } else {
                c4 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = closure_0;
                return obj3;
              }
              const obj8 = closure_1_1(closure_1_2[4]);
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
  closure_13 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const set = new Set(["/attachments/", "/ephemeral-attachments/"]);
const HOUR = obj132Default.Millis.HOUR;
let items = [window.GLOBAL_ENV.CDN_HOST, ];
let substr;
if (window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT != null) {
  substr = require("obj132");
}
items[1] = substr;
function isAttachmentUrl(toURLSafeResult) {
  closure_0 = toURLSafeResult;
  const hasItem = set1.has(toURLSafeResult.hostname);
  const arr = Array.from(set);
  return hasItem && Array.from(set).some((item, index) => {
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
    result = parsed * obj132Default.Millis.SECOND;
  }
  return result;
}
const mapped = items.map(function getHostWithoutPort(item, index) {
  let first;
  if (item != null) {
    first = item.split(":")[0];
  }
  return first;
});
const set1 = new Set(mapped.filter(Boolean));
let result = require("obj132").fileFinishedImporting("modules/messages/SignedAttachmentLinkUtils.tsx");

export { isAttachmentUrl };
export const isExternalProxiedAttachmentUrl = function isExternalProxiedAttachmentUrl(toURLSafeResult) {
  return isImageProxyURL.isImageProxyURL(toURLSafeResult);
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