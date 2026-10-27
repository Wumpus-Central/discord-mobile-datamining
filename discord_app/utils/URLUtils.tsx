// === Module 1383: URLUtils ===

// Module 1383 (URLUtils)
import _modDef12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1084 */;
import URLUtilsDefault from "URLUtils" /* 1383 */;
import GlobalUtils from "GlobalUtils" /* 1385 */;
import UrlAll from "Url" /* 1386 */;
import ip from "ip" /* 1384 */;
import size from "module_2" /* 2 */;

function isDiscordDirectAssetUrl(shareURI) {
  if (null == shareURI) {
    return false;
  } else {
    const toURLSafeResult = URLUtilsDefault.toURLSafe(shareURI);
    let tmp18 = null != toURLSafeResult;
    if (tmp18) {
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
        const result1 = GlobalUtils.isDiscordBackendDevelopment();
        let tmp7 = !result1;
        if (result1) {
          const hostname = toURLSafeResult.hostname;
          const devTunnelHostname = GlobalUtils.getDevTunnelHostname();
          let tmp9 = null != devTunnelHostname;
          if (tmp9) {
            let tmp10 = hostname === devTunnelHostname;
            if (!tmp10) {
              const devTunnelHostname1 = GlobalUtils.getDevTunnelHostname();
              let tmp12 = null != devTunnelHostname1;
              if (tmp12) {
                const _HermesInternal = HermesInternal;
                tmp12 = hostname === "media--" + devTunnelHostname1;
              }
              tmp10 = tmp12;
              const tmpResult4 = GlobalUtils;
            }
            tmp9 = tmp10;
          }
          tmp7 = !tmp9;
          const tmpResult3 = GlobalUtils;
        }
        let tmp14 = !tmp7;
        if (tmp7) {
          const _window = window;
          let isMatch = toURLSafeResult.hostname === window.GLOBAL_ENV.CDN_HOST;
          if (!isMatch) {
            isMatch = re6.test(toURLSafeResult.hostname);
          }
          tmp14 = isMatch;
        }
        tmp5 = tmp14;
        const tmpResult = GlobalUtils;
      }
      tmp18 = tmp5;
    }
    return tmp18;
  }
}
function isDiscordProxiedAssetUrl(src, arg1, arg2) {
  if (tmp) {
    if (null == src) {
      return false;
    } else {
      const url = URLUtilsDefault.toURLSafe(src);
      let tmp15 = null != url;
      if (tmp15) {
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
        let tmp7 = !tmp5;
        if (tmp5) {
          const result1 = GlobalUtils.isDiscordBackendDevelopment();
          let tmp9 = !result1;
          if (result1) {
            const devTunnelHostname = GlobalUtils.getDevTunnelHostname();
            let tmp11 = null != devTunnelHostname;
            if (tmp11) {
              const _HermesInternal = HermesInternal;
              tmp11 = url.hostname === "media--" + devTunnelHostname;
            }
            tmp9 = !tmp11;
            const tmp3Result2 = GlobalUtils;
          }
          let isMatch = !tmp9;
          if (tmp9) {
            isMatch = re7.test(url.hostname);
          }
          tmp7 = isMatch;
          const tmp3Result = GlobalUtils;
        }
        tmp15 = tmp7;
      }
      return tmp15;
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
const set = new Set(["media.tenor.com", "media.tenor.co", "c.tenor.com", "static.klipy.com", "media.giphy.com", "i.giphy.com"]);
const regExp = new RegExp("(?:(?:(?:[a-z]+:)?//)|www\\.)(?:[^\\s:@]+(?::[^\\s@]*)?@)?(?:localhost|" + ip.v4().source + "|(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+(?:(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s\"]*)?", "ig");
const items = [window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.INVITE_HOST, window.GLOBAL_ENV.GIFT_CODE_HOST, window.GLOBAL_ENV.GUILD_TEMPLATE_HOST];
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
  isDiscordUrl(customInstallUrl, arg1) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    if (null != customInstallUrl) {
      const toURLSafeResult = URLUtilsDefault.toURLSafe(customInstallUrl);
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
  isDiscordUri(sanitizeUrlResult) {
    let tmp = null != sanitizeUrlResult;
    if (tmp) {
      const protocol = UrlAll.parse(sanitizeUrlResult).protocol;
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
  isDiscordDirectAssetUrl,
  isDiscordProxiedAssetUrl,
  isAllowedGifProviderUrl(src) {
    if (null == src) {
      return false;
    } else {
      const toURLSafeResult = URLUtilsDefault.toURLSafe(src);
      let hasItem = null != toURLSafeResult;
      if (hasItem) {
        hasItem = set.has(toURLSafeResult.hostname);
      }
      return hasItem;
    }
  },
  isDiscordAssetUrl(src, arg1, arg2) {
    let tmp = isDiscordDirectAssetUrl(src);
    if (!tmp) {
      let tmp5 = isDiscordProxiedAssetUrl(src, arg1, arg2);
      if (!tmp5) {
        let flag = false;
        if (null != src) {
          const toURLSafeResult = URLUtilsDefault.toURLSafe(src);
          let hasItem = null != toURLSafeResult;
          if (hasItem) {
            hasItem = set.has(toURLSafeResult.hostname);
          }
          flag = hasItem;
        }
        tmp5 = flag;
      }
      tmp = tmp5;
    }
    return tmp;
  },
  isDiscordUrlOrUri(src) {
    let flag = false;
    if (null != src) {
      const toURLSafeResult = URLUtilsDefault.toURLSafe(src);
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
      let tmp8 = null != src;
      if (tmp8) {
        const protocol = UrlAll.parse(src).protocol;
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
    const obj2 = { pathname, query: null };
    const obj = UrlAll;
    obj2.query = _modDef12.pickBy(arg1);
    return obj.format(obj2);
  },
  formatSearch(arg0) {
    const obj2 = { query: null };
    const obj = UrlAll;
    obj2.query = _modDef12.pickBy(arg0);
    return obj.format(obj2);
  },
  safeParseWithQuery(target) {
    try {
      return UrlAll.parse(target, true);
    } catch (err) {
      return null;
    }
  },
  toURLSafe(src, arg1) {
    try {
      const _URL = URL;
      const uRL = new URL(src, arg1);
      return uRL;
    } catch (err) {
      return null;
    }
  },
  toOriginSafe(src) {
    let tmp = null;
    if (null != src) {
      const toURLSafeResult = URLUtilsDefault.toURLSafe(src);
      let origin;
      if (toURLSafeResult != null) {
        origin = toURLSafeResult.origin;
      }
      if (origin == null) {
        origin = null;
      }
      tmp = origin;
    }
    return tmp;
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