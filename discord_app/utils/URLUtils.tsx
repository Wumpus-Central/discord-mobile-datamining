// === Module 1371: URLUtils ===

// Module 1371 (URLUtils)
import _modDef12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1085 */;
import URLUtilsDefault from "URLUtils" /* 1371 */;
import urlParseAll from "urlParse" /* 1373 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import ip from "ip" /* 1372 */;
import size from "module_2" /* 2 */;

function isDiscordProxiedAssetUrl(url, arg1, arg2) {
  const tmp = null != arg1 && null != arg2 && arg1 !== arg2;
  if (tmp) {
    if (null == url) {
      return false;
    } else {
      const obj2 = URLUtilsDefault;
      url = obj2.toURLSafe(url);
      let tmp9 = null != url;
      if (tmp9) {
        const obj = GlobalUtils;
        const result = obj.isDiscordBackendDevelopment();
        let tmp5 = !result;
        if (result) {
          tmp5 = "localhost" !== url.hostname && "127.0.0.1" !== url.hostname;
          const tmp6 = "localhost" !== url.hostname && "127.0.0.1" !== url.hostname;
        }
        if (!tmp5) {
          tmp5 = "4000" !== url.port;
        }
        let isMatch = !tmp5;
        if (tmp5) {
          isMatch = re7.test(url.hostname);
        }
        tmp9 = isMatch;
      }
      return tmp9;
    }
  } else {
    return false;
  }
}
const Routes = Constants.Routes;
const re5 = /(?:^|\.)(?:discordapp|discord|discordmerch)\.com$/i;
const re6 = /^.*\.discordapp\.net$/;
const re7 = /^.*\.media\.discordapp\.net$/;
const set = new Set(["media.tenor.com", "media.tenor.co", "c.tenor.com", "static.klipy.com", "media.giphy.com", "i.giphy.com"]);
const regExp = new RegExp("(?:(?:(?:[a-z]+:)?//)|www\\.)(?:[^\\s:@]+(?::[^\\s@]*)?@)?(?:localhost|" + ip.v4().source + "|(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+(?:(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s\"]*)?", "ig");
const items = [window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.INVITE_HOST, window.GLOBAL_ENV.GIFT_CODE_HOST, window.GLOBAL_ENV.GUILD_TEMPLATE_HOST];
const set1 = new Set(items);
let obj = {
  URL_REGEX: regExp,
  makeUrl(BILLING_LOGIN_HANDOFF, arg1) {
    if (arg1 == null) {
      let INVITE_HOST;
      const obj = GlobalUtils;
      if (!obj.isDiscordFrontendDevelopment()) {
        const _location = location;
        INVITE_HOST = location.host;
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
      let isMatch = re5.test(hostname);
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
    let tmp = null != host && null != hostname;
    if (tmp) {
      const _window = window;
      tmp = window.location.host === host;
    }
    return tmp;
  },
  isDiscordProtocol(protocol) {
    return null != protocol && "discord:" === protocol;
  },
  isDiscordUrl(ctaLink, arg1) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    if (null != ctaLink) {
      const obj = URLUtilsDefault;
      const toURLSafeResult = obj.toURLSafe(ctaLink);
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
          let isMatch = re5.test(hostname);
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
    }
    return false;
  },
  isDiscordUri(GUILD_TEMPLATE_HOST) {
    let tmp = null != GUILD_TEMPLATE_HOST;
    if (tmp) {
      const obj = urlParseAll;
      const protocol = obj.parse(GUILD_TEMPLATE_HOST).protocol;
      tmp = null != protocol && "discord:" === protocol;
      const tmp4 = null != protocol && "discord:" === protocol;
    }
    return tmp;
  },
  isDiscordCdnUrl(src) {
    let tmp = null != src;
    if (tmp) {
      const _window = window;
      const obj = urlParseAll;
      tmp = obj.parse(src).hostname === window.GLOBAL_ENV.CDN_HOST;
    }
    return tmp;
  },
  isDiscordDirectAssetUrl(shareURI) {
    if (null == shareURI) {
      return false;
    } else {
      const obj2 = URLUtilsDefault;
      const toURLSafeResult = obj2.toURLSafe(shareURI);
      let tmp9 = null != toURLSafeResult;
      if (tmp9) {
        const obj = GlobalUtils;
        const result = obj.isDiscordBackendDevelopment();
        let tmp3 = !result;
        if (result) {
          tmp3 = "localhost" !== toURLSafeResult.hostname && "127.0.0.1" !== toURLSafeResult.hostname;
          const tmp4 = "localhost" !== toURLSafeResult.hostname && "127.0.0.1" !== toURLSafeResult.hostname;
        }
        let tmp5 = !tmp3;
        if (tmp3) {
          const _window = window;
          const isMatch = toURLSafeResult.hostname === window.GLOBAL_ENV.CDN_HOST || re6.test(toURLSafeResult.hostname);
          tmp5 = isMatch;
        }
        tmp9 = tmp5;
      }
      return tmp9;
    }
  },
  isDiscordProxiedAssetUrl,
  isAllowedGifProviderUrl(url) {
    if (null == url) {
      return false;
    } else {
      const obj = URLUtilsDefault;
      const toURLSafeResult = obj.toURLSafe(url);
      const hasItem = null != toURLSafeResult && set.has(toURLSafeResult.hostname);
      return hasItem;
    }
  },
  isDiscordAssetUrl(url, arg1, arg2) {
    let flag = false;
    if (null != url) {
      const obj = URLUtilsDefault;
      const toURLSafeResult = obj.toURLSafe(url);
      let tmp4 = null != toURLSafeResult;
      if (tmp4) {
        const obj2 = GlobalUtils;
        const result = obj2.isDiscordBackendDevelopment();
        let tmp7 = !result;
        if (result) {
          tmp7 = "localhost" !== toURLSafeResult.hostname && "127.0.0.1" !== toURLSafeResult.hostname;
          const tmp8 = "localhost" !== toURLSafeResult.hostname && "127.0.0.1" !== toURLSafeResult.hostname;
        }
        let tmp9 = !tmp7;
        if (tmp7) {
          const _window = window;
          const isMatch = toURLSafeResult.hostname === window.GLOBAL_ENV.CDN_HOST || re6.test(toURLSafeResult.hostname);
          tmp9 = isMatch;
        }
        tmp4 = tmp9;
      }
      flag = tmp4;
    }
    let tmp13 = flag;
    if (!tmp13) {
      let tmp17 = isDiscordProxiedAssetUrl(url, arg1, arg2);
      if (!tmp17) {
        let flag2 = false;
        if (null != url) {
          const obj3 = URLUtilsDefault;
          const toURLSafeResult1 = obj3.toURLSafe(url);
          const hasItem = null != toURLSafeResult1 && set.has(toURLSafeResult1.hostname);
          flag2 = hasItem;
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
      const obj = URLUtilsDefault;
      const toURLSafeResult = obj.toURLSafe(url);
      let hostname;
      if (toURLSafeResult != null) {
        hostname = toURLSafeResult.hostname;
      }
      flag = false;
      if (null != hostname) {
        let tmp5 = null != hostname;
        if (tmp5) {
          tmp5 = re5.test(hostname) || false;
          re5.test(hostname) || false;
        }
        flag = false;
        if (tmp5) {
          flag = true;
        }
      }
    }
    if (!flag) {
      let tmp8 = null != url;
      if (tmp8) {
        const obj2 = urlParseAll;
        const protocol = obj2.parse(url).protocol;
        tmp8 = null != protocol && "discord:" === protocol;
        const tmp11 = null != protocol && "discord:" === protocol;
      }
      flag = tmp8;
    }
    return flag;
  },
  isAppRoute(pathname) {
    const formatted = pathname.toLowerCase();
    const startsWithResult = formatted.startsWith("/channels/") || formatted.startsWith(Routes.ACTIVITY);
    return startsWithResult;
  },
  format(safeParseWithQueryResult) {
    const obj = urlParseAll;
    return obj.format(safeParseWithQueryResult);
  },
  formatPathWithQuery(pathname, arg1) {
    let obj2;
    const obj = { pathname, query: obj2.pickBy(arg1) };
    const format = urlParseAll.format;
    urlParseAll;
    obj2 = _modDef12;
    return format(obj);
  },
  formatSearch(arg0) {
    let obj2;
    const obj = { query: obj2.pickBy(arg0) };
    const format = urlParseAll.format;
    urlParseAll;
    obj2 = _modDef12;
    return format(obj);
  },
  safeParseWithQuery(target) {
    try {
      const obj = urlParseAll;
      return obj.parse(target, true);
    } catch (err) {
      return null;
    }
  },
  toURLSafe(url, arg1) {
    try {
      const _URL = URL;
      const self = this;
      const self2 = this;
      const uRL = new URL(url, arg1);
      return uRL;
    } catch (err) {
      return null;
    }
  },
  safeDecodeURIComponent(parts) {
    try {
      const _decodeURIComponent = decodeURIComponent;
      return decodeURIComponent(parts);
    } catch (err) {
      return null;
    }
  }
};
let result = size.fileFinishedImporting("utils/URLUtils.tsx");

export default obj;