// discord_app/utils/URLUtils.tsx
import { Routes } from "ME";
import set from "Url";
import { apply } from "../../_runtime/00012_apply.js";
import { isDiscordFrontendDevelopment } from "GlobalUtils.tsx";
import { isDiscordProxiedAssetUrl } from "URLUtils.tsx";

function isDiscordProxiedAssetUrl(url, arg1, arg2) {
  if (tmp) {
    if (null == url) {
      return false;
    } else {
      url = isDiscordProxiedAssetUrl.toURLSafe(url);
      let tmp9 = null != url;
      if (tmp9) {
        const result = isDiscordFrontendDevelopment /* isDiscordFrontendDevelopment */.isDiscordBackendDevelopment();
        let tmp5 = !result;
        if (result) {
          let tmp6 = "localhost" !== url.hostname;
          if (tmp6) {
            tmp6 = "127.0.0.1" !== url.hostname;
          }
          tmp5 = tmp6;
        }
        if (!tmp5) {
          tmp5 = "4000" !== url.port;
        }
        let isMatch = !tmp5;
        if (tmp5) {
          isMatch = regex3.test(url.hostname);
        }
        tmp9 = isMatch;
        const obj = isDiscordFrontendDevelopment /* isDiscordFrontendDevelopment */;
      }
      return tmp9;
    }
  } else {
    return false;
  }
  tmp = null != arg1 && null != arg2 && arg1 !== arg2;
}
const re5 = /(?:^|\.)(?:discordapp|discord|discordmerch)\.com$/i;
const re6 = /^.*\.discordapp\.net$/;
const re7 = /^.*\.media\.discordapp\.net$/;
let set = new Set(["media.tenor.com", "media.tenor.co", "c.tenor.com", "static.klipy.com", "media.giphy.com", "i.giphy.com"]);
const regExp = new RegExp("(?:(?:(?:[a-z]+:)?//)|www\\.)(?:[^\\s:@]+(?::[^\\s@]*)?@)?(?:localhost|" + require("ip").v4().source + "|(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+(?:(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s\"]*)?", "ig");
const items = [window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.INVITE_HOST, window.GLOBAL_ENV.GIFT_CODE_HOST, window.GLOBAL_ENV.GUILD_TEMPLATE_HOST];
const set1 = new Set(items);
let result = set.fileFinishedImporting("utils/URLUtils.tsx");

export default {
  URL_REGEX: regExp,
  makeUrl(BILLING_LOGIN_HANDOFF, arg1) {
    if (arg1 == null) {
      if (!obj.isDiscordFrontendDevelopment()) {
        const _location = location;
        let INVITE_HOST = location.host;
      }
      const _location2 = location;
      const _HermesInternal = HermesInternal;
      return "" + location.protocol + "//" + INVITE_HOST + BILLING_LOGIN_HANDOFF;
    }
    INVITE_HOST = window.GLOBAL_ENV.INVITE_HOST;
  },
  isOriginalContentTypeDifferent(arg0, arg1) {
    return null != arg0 && null != arg1 && arg0 !== arg1;
  },
  isDiscordHostname(hostname) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    let tmp = null != hostname;
    if (tmp) {
      let isMatch = regex.test(hostname);
      if (!isMatch) {
        if (flag) {
          flag = set1.has(hostname.toLowerCase());
        }
        isMatch = flag;
      }
      tmp = isMatch;
    }
    return tmp;
  },
  isDiscordLocalhost(host, hostname) {
    let tmp = null != host;
    if (tmp) {
      tmp = null != hostname;
    }
    if (tmp) {
      const _window = window;
      tmp = window.location.host === host;
    }
    return tmp;
  },
  isDiscordProtocol(protocol) {
    let tmp = null != protocol;
    if (tmp) {
      tmp = "discord:" === protocol;
    }
    return tmp;
  },
  isDiscordUrl(ctaLink, arg1) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    if (null != ctaLink) {
      const toURLSafeResult = isDiscordProxiedAssetUrl.toURLSafe(ctaLink);
      let hostname;
      if (toURLSafeResult != null) {
        hostname = toURLSafeResult.hostname;
      }
      if (null != hostname) {
        if (flag === undefined) {
          flag = false;
        }
        let tmp5 = null != hostname;
        if (tmp5) {
          let isMatch = regex.test(hostname);
          if (!isMatch) {
            if (flag) {
              flag = set1.has(hostname.toLowerCase());
            }
            isMatch = flag;
          }
          tmp5 = isMatch;
        }
        if (tmp5) {
          return true;
        }
      }
      const obj = isDiscordProxiedAssetUrl;
    }
    return false;
  },
  isDiscordUri(arg0) {
    let tmp = null != arg0;
    if (tmp) {
      const protocol = importAll(1469).parse(arg0).protocol;
      let tmp4 = null != protocol;
      if (tmp4) {
        tmp4 = "discord:" === protocol;
      }
      tmp = tmp4;
      const obj = importAll(1469);
    }
    return tmp;
  },
  isDiscordCdnUrl(src) {
    let tmp = null != src;
    if (tmp) {
      const _window = window;
      tmp = importAll(1469).parse(src).hostname === window.GLOBAL_ENV.CDN_HOST;
      const obj = importAll(1469);
    }
    return tmp;
  },
  isDiscordDirectAssetUrl(shareURI) {
    if (null == shareURI) {
      return false;
    } else {
      const toURLSafeResult = isDiscordProxiedAssetUrl.toURLSafe(shareURI);
      let tmp9 = null != toURLSafeResult;
      if (tmp9) {
        const result = isDiscordFrontendDevelopment /* isDiscordFrontendDevelopment */.isDiscordBackendDevelopment();
        let tmp3 = !result;
        if (result) {
          let tmp4 = "localhost" !== toURLSafeResult.hostname;
          if (tmp4) {
            tmp4 = "127.0.0.1" !== toURLSafeResult.hostname;
          }
          tmp3 = tmp4;
        }
        let tmp5 = !tmp3;
        if (tmp3) {
          const _window = window;
          let isMatch = toURLSafeResult.hostname === window.GLOBAL_ENV.CDN_HOST;
          if (!isMatch) {
            isMatch = regex2.test(toURLSafeResult.hostname);
          }
          tmp5 = isMatch;
        }
        tmp9 = tmp5;
        const obj = isDiscordFrontendDevelopment /* isDiscordFrontendDevelopment */;
      }
      return tmp9;
    }
  },
  isDiscordProxiedAssetUrl,
  isAllowedGifProviderUrl(url) {
    if (null == url) {
      return false;
    } else {
      const toURLSafeResult = isDiscordProxiedAssetUrl.toURLSafe(url);
      let hasItem = null != toURLSafeResult;
      if (hasItem) {
        hasItem = set.has(toURLSafeResult.hostname);
      }
      return hasItem;
    }
  },
  isDiscordAssetUrl(url) {
    let flag = false;
    if (null != url) {
      const toURLSafeResult = isDiscordProxiedAssetUrl.toURLSafe(url);
      let tmp4 = null != toURLSafeResult;
      if (tmp4) {
        const result = isDiscordFrontendDevelopment /* isDiscordFrontendDevelopment */.isDiscordBackendDevelopment();
        let tmp7 = !result;
        if (result) {
          let tmp8 = "localhost" !== toURLSafeResult.hostname;
          if (tmp8) {
            tmp8 = "127.0.0.1" !== toURLSafeResult.hostname;
          }
          tmp7 = tmp8;
        }
        let tmp9 = !tmp7;
        if (tmp7) {
          const _window = window;
          let isMatch = toURLSafeResult.hostname === window.GLOBAL_ENV.CDN_HOST;
          if (!isMatch) {
            isMatch = regex2.test(toURLSafeResult.hostname);
          }
          tmp9 = isMatch;
        }
        tmp4 = tmp9;
        const obj2 = isDiscordFrontendDevelopment /* isDiscordFrontendDevelopment */;
      }
      flag = tmp4;
      const obj = isDiscordProxiedAssetUrl;
    }
    let tmp13 = flag;
    if (!tmp13) {
      let tmp17 = isDiscordProxiedAssetUrl(url, arg1, arg2);
      if (!tmp17) {
        let flag2 = false;
        if (null != url) {
          const toURLSafeResult1 = isDiscordProxiedAssetUrl.toURLSafe(url);
          let hasItem = null != toURLSafeResult1;
          if (hasItem) {
            hasItem = set.has(toURLSafeResult1.hostname);
          }
          flag2 = hasItem;
          const obj3 = isDiscordProxiedAssetUrl;
        }
        tmp17 = flag2;
      }
      tmp13 = tmp17;
    }
    return tmp13;
  },
  isDiscordUrlOrUri(url) {
    let flag = false;
    if (null != url) {
      const toURLSafeResult = isDiscordProxiedAssetUrl.toURLSafe(url);
      let hostname;
      if (toURLSafeResult != null) {
        hostname = toURLSafeResult.hostname;
      }
      flag = false;
      if (null != hostname) {
        let tmp5 = null != hostname;
        if (tmp5) {
          tmp5 = regex.test(hostname) || false;
          const tmp7 = regex.test(hostname) || false;
        }
        flag = false;
        if (tmp5) {
          flag = true;
        }
      }
      const obj = isDiscordProxiedAssetUrl;
    }
    if (!flag) {
      let tmp8 = null != url;
      if (tmp8) {
        const protocol = importAll(1469).parse(url).protocol;
        let tmp11 = null != protocol;
        if (tmp11) {
          tmp11 = "discord:" === protocol;
        }
        tmp8 = tmp11;
        const obj2 = importAll(1469);
      }
      flag = tmp8;
    }
    return flag;
  },
  isAppRoute(pathname) {
    const formatted = pathname.toLowerCase();
    let startsWithResult = formatted.startsWith("/channels/");
    if (!startsWithResult) {
      startsWithResult = formatted.startsWith(Routes.ACTIVITY);
    }
    return startsWithResult;
  },
  format(arg0) {
    return importAll(1469).format(arg0);
  },
  formatPathWithQuery(pathname) {
    let obj = importAll(1469);
    obj = { pathname, query: null };
    obj[1] = apply.pickBy(arg1);
    return obj.format(obj);
  },
  formatSearch(arg0) {
    let obj = importAll(1469);
    obj = { query: null };
    obj[0] = apply.pickBy(arg0);
    return obj.format(obj);
  },
  safeParseWithQuery(target) {
    try {
      return importAll(1469).parse(target, true);
    } catch (err) {
      return null;
    }
  },
  toURLSafe(url, arg1) {
    try {
      const _URL = URL;
      const uRL = new URL(url, arg1);
      return uRL;
    } catch (err) {
      return null;
    }
  },
  safeDecodeURIComponent(hash) {
    try {
      const _decodeURIComponent = decodeURIComponent;
      return decodeURIComponent(hash);
    } catch (err) {
      return null;
    }
  }
};