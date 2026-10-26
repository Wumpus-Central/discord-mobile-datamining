// === Module 11498: isAllowedFrameNavigation ===

// Module 11498 (isAllowedFrameNavigation)
import _slicedToArray from "module_32" /* 32 */;

const require = fn;
function matchesCSPSource(uRL, item) {
  if ("*" === item) {
    return closure_6.includes(uRL.protocol);
  } else if (regExp1.test(item)) {
    return uRL.protocol === item.toLowerCase();
  } else {
    const match = item.match(regExp);
    if (null == match) {
      return false;
    } else {
      const tmp19 = _slicedToArray(match, 5);
      if (null != tmp19[1]) {
        const _HermesInternal = HermesInternal;
        let tmp6 = closure_4["" + str7.toLowerCase(str7) + ":"];
        if (tmp6 == null) {
          const _HermesInternal2 = HermesInternal;
          const items = ["" + str7.toLowerCase() + ":"];
          tmp6 = items;
        }
        let obj = tmp6;
      } else {
        obj = closure_5;
      }
      if (obj.includes(uRL.protocol)) {
        const hostname = uRL.hostname;
        const formatted = str8.toLowerCase();
        if ("*" === formatted) {
          if (tmp7) {
            if ("" !== uRL.port) {
              let port = uRL.port;
            } else {
              port = closure_3[uRL.protocol];
            }
            let tmp11 = null == tmp20 || "*" === tmp20 || tmp20 === port;
            if (tmp11) {
              let tmp12 = null != tmp20 || "" === uRL.port;
              if (tmp12) {
                let tmp13 = null == obj2;
                if (!tmp13) {
                  tmp13 = "/" === obj2;
                }
                if (tmp13) {
                  tmp12 = tmp13;
                } else {
                  const pathname = uRL.pathname;
                  if (obj2.endsWith("/")) {
                    let startsWithResult = pathname.startsWith(obj2);
                  } else {
                    startsWithResult = pathname === obj2;
                  }
                }
              }
              tmp11 = tmp12;
            }
            return tmp11;
          }
        } else if (formatted.startsWith("*.")) {
          let endsWithResult = hostname.endsWith(formatted.slice(1));
        } else {
          endsWithResult = hostname === formatted;
        }
      }
      return false;
    }
  }
}
let closure_3 = { "http:": "80", "https:": "443", "ws:": "80", "wss:": "443" };
let closure_4 = { "http:": ["http:", "https:"], "ws:": ["ws:", "wss:"] };
let closure_5 = ["https:", "wss:"];
let closure_6 = ["http:", "https:", "ws:", "wss:"];
const regExp = new RegExp("^(?:(" + "[a-z][a-z0-9+.-]*" + ")://)?(\\*|(?:\\*\\.)?[a-z0-9-]+(?:\\.[a-z0-9-]+)*)(?::(\\*|\\d+))?(/[^?#]*)?$", "i");
const regExp1 = new RegExp("^" + "[a-z][a-z0-9+.-]*" + ":$", "i");
const size = fn(2);
const result = size.fileFinishedImporting("modules/embedded_apps/native/utils/isAllowedFrameNavigation.tsx");

export { matchesCSPSource };
export const isAllowedFrameNavigation = function isAllowedFrameNavigation(url, routerOrigin, policy) {
  if (!obj.isAboutBlankUrl(url)) {
    if (!url.startsWith("file://")) {
      try {
        const _URL = URL;
        const uRL = new URL(url);
        url = uRL;
        const _HermesInternal = HermesInternal;
        if ("" + url.protocol + "//" + url.host === routerOrigin) {
          let someResult = !uRL(11499).isTooLongForCloudflare(tmp8.href, routerOrigin);
          const tmpResult = uRL(11499);
        } else {
          someResult = (function getFrameSources(directives) {
            directives = directives.directives;
            let prop = directives["frame-src"];
            if (prop == null) {
              prop = directives["child-src"];
            }
            if (prop == null) {
              prop = directives["default-src"];
            }
            if (prop == null) {
              prop = [];
            }
            return prop;
          })(policy).some((item) => matchesCSPSource(uRL, item));
          const obj2 = (function getFrameSources(directives) {
            directives = directives.directives;
            let prop = directives["frame-src"];
            if (prop == null) {
              prop = directives["child-src"];
            }
            if (prop == null) {
              prop = directives["default-src"];
            }
            if (prop == null) {
              prop = [];
            }
            return prop;
          })(policy);
        }
        return someResult;
      } catch (err) {
        return false;
      }
    }
  }
  return true;
};