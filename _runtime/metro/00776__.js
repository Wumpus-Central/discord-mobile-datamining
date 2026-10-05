// === Module 776: ? ===

// Module 776
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "SEMANTIC_ATTRIBUTE_CACHE_HIT" /* 715 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getHttpSpanDetailsFromUrlObject = function getHttpSpanDetailsFromUrlObject(hash, arg1, arg2, method, arg4) {
  let tmp = arg4;
  const obj = { [closure_1_0(closure_1_1[0]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: arg2, [closure_1_0(closure_1_1[0]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url" };
  if (arg4) {
    let str = "url.template";
    if ("server" === arg1) {
      str = "http.route";
    }
    obj[str] = tmp;
    obj[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "route";
  }
  method = undefined;
  if (method != null) {
    method = method.method;
  }
  if (method) {
    const str4 = method.method;
    obj[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD] = str4.toUpperCase();
  }
  const tmp5 = hash;
  if (tmp5) {
    if (hash.search) {
      obj["url.query"] = hash.search;
    }
    if (hash.hash) {
      obj["url.fragment"] = hash.hash;
    }
    if (hash.pathname) {
      obj["url.path"] = hash.pathname;
      if ("/" === hash.pathname) {
        obj[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "route";
      }
    }
    if (!("isRelative" in hash)) {
      obj[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_URL_FULL] = hash.href;
      if (hash.port) {
        obj["url.port"] = hash.port;
      }
      if (hash.protocol) {
        obj["url.scheme"] = hash.protocol;
      }
      if (hash.hostname) {
        let str8 = "url.domain";
        if ("server" === arg1) {
          str8 = "server.address";
        }
        obj[str8] = hash.hostname;
      }
    }
  }
  let str10;
  if (method != null) {
    if (method.method != null) {
      str10 = str11.toUpperCase();
    }
  }
  if (str10 == null) {
    str10 = "GET";
  }
  if (!tmp) {
    let str12 = "/";
    if (hash) {
      let pathname;
      if ("client" === arg1) {
        let pathname2;
        if ("isRelative" in hash) {
          pathname2 = hash.pathname;
        } else {
          const _URL = URL;
          const self = this;
          const self2 = this;
          const str15 = new URL(hash);
          str15.search = "";
          str15.hash = "";
          const items = ["80", "443"];
          if (items.includes(str15.port)) {
            str15.port = "";
          }
          if (str15.password) {
            str15.password = "%filtered%";
          }
          if (str15.username) {
            str15.username = "%filtered%";
          }
          pathname2 = str15.toString();
        }
        pathname = pathname2;
      } else {
        pathname = hash.pathname;
      }
      str12 = pathname;
    }
    tmp = str12;
  }
  const items1 = ["" + str10 + " " + tmp, obj];
  return items1;
};
export const getSanitizedUrlString = function getSanitizedUrlString(path) {
  let host;
  let protocol;
  ({ protocol, host } = path);
  let str = "";
  path = path.path;
  if (protocol) {
    const _HermesInternal = HermesInternal;
    str = "" + protocol + "://";
  }
  let str3;
  if (host != null) {
    const str5 = host.replace(/^.*@/, "[filtered]:[filtered]@");
    const str6 = str5.replace(/(:80)$/, "");
    str3 = str6.replace(/(:443)$/, "");
  }
  if (!str3) {
    str3 = "";
  }
  return "" + str + str3 + path;
};
export const getSanitizedUrlStringFromUrlObject = function getSanitizedUrlStringFromUrlObject(pathname) {
  if ("isRelative" in pathname) {
    return pathname.pathname;
  } else {
    const _URL = URL;
    const self = this;
    const self2 = this;
    const str = new URL(pathname);
    str.search = "";
    str.hash = "";
    const items = ["80", "443"];
    if (items.includes(str.port)) {
      str.port = "";
    }
    if (str.password) {
      str.password = "%filtered%";
    }
    if (str.username) {
      str.username = "%filtered%";
    }
    return str.toString();
  }
};
export const isURLObjectRelative = function isURLObjectRelative(result) {
  return "isRelative" in result;
};
export const parseStringToURLObject = function parseStringToURLObject(to, arg1) {
  const tmp = to.indexOf("://") <= 0 && 0 !== to.indexOf("//");
  let tmp2 = arg1;
  if (arg1 == null) {
    let str2;
    if (tmp) {
      str2 = "thismessage:/";
    }
    tmp2 = str2;
  }
  try {
    let tmp8;
    const _URL = URL;
    if ("canParse" in URL) {
      const _URL2 = URL;
    }
    const _URL3 = URL;
    const self = this;
    const self2 = this;
    const uRL = new URL(to, tmp2);
    if (tmp) {
      const obj = { isRelative: tmp, pathname: null, search: null, hash: null };
      ({ pathname: obj.pathname, search: obj.search, hash: obj.hash } = uRL);
      tmp8 = obj;
    } else {
      tmp8 = uRL;
    }
    return tmp8;
  } catch (err) {
  }
};
export const parseUrl = function parseUrl(str) {
  const tmp = str;
  if (tmp) {
    const match = str.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (match) {
      const url = { host: match[4], path: match[5], protocol: match[2], search: match[6] || "", hash: match[8] || "", relative: match[5] + (match[6] || "") + (match[8] || "") };
      return url;
    } else {
      return {};
    }
  } else {
    return {};
  }
};
export const stripDataUrlContent = function stripDataUrlContent(url, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  if (url.startsWith("data:")) {
    const match = url.match(/^data:([^;,]+)/);
    let str = "text/plain";
    if (match) {
      str = match[1];
    }
    const hasItem = url.includes(";base64,");
    const index = url.indexOf(",");
    let str5 = "";
    if (flag) {
      str5 = "";
      if (-1 !== index) {
        const substr = url.slice(index + 1);
        let combined = substr;
        if (substr.length > 10) {
          const _HermesInternal = HermesInternal;
          combined = "" + substr.slice(0, 10) + "... [truncated]";
        }
        str5 = combined;
      }
    }
    let str7 = "";
    if (hasItem) {
      str7 = ",base64";
    }
    let str8 = "";
    if (str5) {
      const _HermesInternal2 = HermesInternal;
      str8 = "," + str5;
    }
    const _HermesInternal3 = HermesInternal;
    return "data:" + str + str7 + str8;
  } else {
    return url;
  }
};
export const stripUrlQueryAndFragment = function stripUrlQueryAndFragment(arg0) {
  return arg0.split(/[?#]/, 1)[0];
};