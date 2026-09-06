// === Module 765: ? ===

// Module 765
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "SEMANTIC_ATTRIBUTE_CACHE_HIT" /* 704 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const getHttpSpanDetailsFromUrlObject = function getHttpSpanDetailsFromUrlObject(hash, arg1, arg2, method, arg4) {
  let str = arg4;
  const obj = { [closure_1_0(closure_1_1[0]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: arg2, [closure_1_0(closure_1_1[0]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url" };
  if (arg4) {
    let str2 = "url.template";
    if ("server" === arg1) {
      str2 = "http.route";
    }
    obj[str2] = str;
    obj[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "route";
  }
  method = undefined;
  if (method != null) {
    method = method.method;
  }
  if (method) {
    obj[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD] = method.method.toUpperCase();
  }
  if (hash) {
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
        let str9 = "url.domain";
        if ("server" === arg1) {
          str9 = "server.address";
        }
        obj[str9] = hash.hostname;
      }
    }
  }
  let str11;
  if (method != null) {
    if (method.method != null) {
      str11 = str12.toUpperCase();
    }
  }
  if (str11 == null) {
    str11 = "GET";
  }
  if (!str) {
    if (!hash) {
      str = "/";
    } else {
      if ("client" !== arg1) {
        const pathname2 = hash.pathname;
      }
      if ("isRelative" in hash) {
        let pathname = hash.pathname;
      } else {
        const _URL = URL;
        const str16 = new URL(hash);
        str16.search = "";
        str16.hash = "";
        const items = ["80", "443"];
        if (items.includes(str16.port)) {
          str16.port = "";
        }
        if (str16.password) {
          str16.password = "%filtered%";
        }
        if (str16.username) {
          str16.username = "%filtered%";
        }
        pathname = str16.toString();
      }
    }
  }
  const items1 = ["" + str11 + " " + str, obj];
  return items1;
};
export const getSanitizedUrlString = function getSanitizedUrlString(path) {
  ({ protocol, host } = path);
  let str = "";
  if (protocol) {
    const _HermesInternal = HermesInternal;
    str = "" + protocol + "://";
  }
  let str3;
  if (host != null) {
    const str5 = host.replace(/^.*@/, "[filtered]:[filtered]@");
    str3 = host.replace(/^.*@/, "[filtered]:[filtered]@").replace(/(:80)$/, "").replace(/(:443)$/, "");
    const str6 = host.replace(/^.*@/, "[filtered]:[filtered]@").replace(/(:80)$/, "");
  }
  if (!str3) {
    str3 = "";
  }
  return "" + str + str3 + path.path;
};
export const getSanitizedUrlStringFromUrlObject = function getSanitizedUrlStringFromUrlObject(pathname) {
  if ("isRelative" in pathname) {
    return pathname.pathname;
  } else {
    const _URL = URL;
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
  let tmp2 = to.indexOf("://") <= 0;
  if (tmp2) {
    tmp2 = 0 !== to.indexOf("//");
  }
  let tmp3 = arg1;
  if (arg1 == null) {
    let str2;
    if (tmp2) {
      str2 = "thismessage:/";
    }
    tmp3 = str2;
  }
  try {
    const _URL = URL;
    if ("canParse" in URL) {
      const _URL2 = URL;
    }
    const _URL3 = URL;
    const uRL = new URL(to, tmp3);
    if (tmp2) {
      const obj = { isRelative: tmp2, pathname: null, search: null, hash: null };
      ({ pathname: obj.pathname, search: obj.search, hash: obj.hash } = uRL);
      let tmp11 = obj;
    } else {
      tmp11 = uRL;
    }
    return tmp11;
  } catch (err) {
    return tmp;
  }
};
export const parseUrl = function parseUrl(str) {
  if (str) {
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