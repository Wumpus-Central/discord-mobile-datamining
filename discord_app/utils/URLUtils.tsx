// discord_app/utils/URLUtils.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import Constants from "../Constants.tsx";
import URLUtilsDefault from "URLUtils.tsx";
import UrlAll from "../../_runtime/01367_Url.js";
import GlobalUtils from "GlobalUtils.tsx";
import ip from "../../_runtime/01366_ip.js";
import size from "../../_runtime/metro/00002__.js";

function isDiscordProxiedAssetUrl(url, arg1, arg2) {
  if (tmp) {
    if (null == url) {
      return false;
    } else {
      url = URLUtilsDefault.toURLSafe(url);
      let tmp9 = null != url;
      if (tmp9) {
        const result = GlobalUtils.isDiscordBackendDevelopment();
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
          isMatch = re7.test(url.hostname);
        }
        tmp9 = isMatch;
      }
      return tmp9;
    }
  } else {
    return false;
  }
  tmp = null != arg1 && null != arg2 && arg1 !== arg2;
}
const Routes = Constants.Routes;
const re5 = /(?:^|\.)(?:discordapp|discord|discordmerch)\.com$/i;
const re6 = /^.*\.discordapp\.net$/;
const re7 = /^.*\.media\.discordapp\.net$/;
const set = new Set([
  "media.tenor.com",
  "media.tenor.co",
  "c.tenor.com",
  "static.klipy.com",
  "media.giphy.com",
  "i.giphy.com",
]);
const regExp = new RegExp(
  "(?:(?:(?:[a-z]+:)?//)|www\\.)(?:[^\\s:@]+(?::[^\\s@]*)?@)?(?:localhost|" +
    ip.v4().source +
    '|(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+(?:(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?',
  "ig",
);
const items = [
  window.GLOBAL_ENV.CDN_HOST,
  window.GLOBAL_ENV.INVITE_HOST,
  window.GLOBAL_ENV.GIFT_CODE_HOST,
  window.GLOBAL_ENV.GUILD_TEMPLATE_HOST,
];
const set1 = new Set(items);
let result = size.fileFinishedImporting("utils/URLUtils.tsx");

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
      const toURLSafeResult = URLUtilsDefault.toURLSafe(ctaLink);
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
  isDiscordUri(src) {
    let tmp = null != src;
    if (tmp) {
      const protocol = UrlAll.parse(src).protocol;
      let tmp4 = null != protocol;
      if (tmp4) {
        tmp4 = "discord:" === protocol;
      }
      tmp = tmp4;
    }
    return tmp;
  },
  isDiscordCdnUrl(src) {
    let tmp = null != src;
    if (tmp) {
      const _window = window;
      tmp = UrlAll.parse(src).hostname === window.GLOBAL_ENV.CDN_HOST;
    }
    return tmp;
  },
  isDiscordDirectAssetUrl(shareURI) {
    if (null == shareURI) {
      return false;
    } else {
      const toURLSafeResult = URLUtilsDefault.toURLSafe(shareURI);
      let tmp9 = null != toURLSafeResult;
      if (tmp9) {
        const result = GlobalUtils.isDiscordBackendDevelopment();
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
            isMatch = re6.test(toURLSafeResult.hostname);
          }
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
      const toURLSafeResult = URLUtilsDefault.toURLSafe(url);
      let hasItem = null != toURLSafeResult;
      if (hasItem) {
        hasItem = set.has(toURLSafeResult.hostname);
      }
      return hasItem;
    }
  },
  isDiscordAssetUrl(url, arg1, arg2) {
    let flag = false;
    if (null != url) {
      const toURLSafeResult = URLUtilsDefault.toURLSafe(url);
      let tmp4 = null != toURLSafeResult;
      if (tmp4) {
        const result = GlobalUtils.isDiscordBackendDevelopment();
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
            isMatch = re6.test(toURLSafeResult.hostname);
          }
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
          const toURLSafeResult1 = URLUtilsDefault.toURLSafe(url);
          let hasItem = null != toURLSafeResult1;
          if (hasItem) {
            hasItem = set.has(toURLSafeResult1.hostname);
          }
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
      const toURLSafeResult = URLUtilsDefault.toURLSafe(url);
      let hostname;
      if (toURLSafeResult != null) {
        hostname = toURLSafeResult.hostname;
      }
      flag = false;
      if (null != hostname) {
        let tmp5 = null != hostname;
        if (tmp5) {
          tmp5 = re5.test(hostname) || false;
          const tmp7 = re5.test(hostname) || false;
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
        const protocol = UrlAll.parse(url).protocol;
        let tmp11 = null != protocol;
        if (tmp11) {
          tmp11 = "discord:" === protocol;
        }
        tmp8 = tmp11;
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
  format(safeParseWithQueryResult) {
    return UrlAll.format(safeParseWithQueryResult);
  },
  formatPathWithQuery(pathname, arg1) {
    const obj = { pathname, query: _modDef12.pickBy(arg1) };
    return obj.format(obj);
  },
  formatSearch(arg0) {
    const obj = { query: _modDef12.pickBy(arg0) };
    return obj.format(obj);
  },
  safeParseWithQuery(target) {
    try {
      return UrlAll.parse(target, true);
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
  safeDecodeURIComponent(parts) {
    try {
      const _decodeURIComponent = decodeURIComponent;
      return decodeURIComponent(parts);
    } catch (err) {
      return null;
    }
  },
};
