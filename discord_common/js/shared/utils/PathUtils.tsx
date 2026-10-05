// === Module 1094: utils/PathUtils ===

// Module 1094 (utils/PathUtils)
import size from "module_2" /* 2 */;

let closure_0;

function getAuthenticationPath(login, arg1) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  let str = arg3;
  if (arg3 === undefined) {
    str = "";
  }
  let str2 = "";
  if (null != window.GLOBAL_ENV.WEBAPP_ENDPOINT) {
    const _window = window;
    str2 = window.GLOBAL_ENV.WEBAPP_ENDPOINT;
  }
  let str3 = "";
  if (null != tmp) {
    const _encodeURIComponent = encodeURIComponent;
    const _HermesInternal = HermesInternal;
    str3 = "?redirect_to=" + encodeURIComponent(tmp);
  }
  let tmp2 = str;
  if (0 !== str.length) {
    let combined;
    if (0 === str3.length) {
      const _HermesInternal3 = HermesInternal;
      combined = "?" + str;
    } else {
      const _HermesInternal2 = HermesInternal;
      combined = "&" + str;
    }
    tmp2 = combined;
  }
  let str7 = "";
  if (flag) {
    str7 = str2;
  }
  return "" + str7 + "/" + login + str3 + tmp2;
}
class UnescapedPathParam {
  constructor(value) {
    const obj = Object.create(new.target.prototype);
    obj.value = value;
    return obj;
  }
  toString() {
    return this.value;
  }
}
const prototype = UnescapedPathParam.prototype;
const result = size.fileFinishedImporting("../discord_common/js/shared/utils/PathUtils.tsx");

export const getLoginPath = function getLoginPath(arg0) {
  let flag;
  if (flag === undefined) {
    flag = true;
  }
  let str = arg2;
  if (arg2 === undefined) {
    str = "";
  }
  return getAuthenticationPath("login", arg0, flag, str);
};
export { getAuthenticationPath };
export { UnescapedPathParam };
export const wrapPaths = function wrapPaths(freeze3Result, arg1) {
  let closure_1 = arg1;
  const obj = {};
  function _loop() {
    freeze3Result = freeze3Result[closure_3];
    if (typeof freeze3Result[closure_3] !== "function") {
      obj[closure_3] = freeze3Result[closure_3];
      return 1;
    } else {
      obj[closure_3] = () => {
        const items = [...arguments];
        closure_0 = closure_1;
        return closure_0(...items.map((item) => {
          let tmp = item;
          if (null != item) {
            let str1;
            if (item instanceof closure_2_1) {
              str1 = item.toString();
            } else if (null == closure_0) {
              let _encodeURIComponent = encodeURIComponent;
              str1 = encodeURIComponent(item);
            } else {
              const _String = String;
              const str = String(item);
              const parts = str.split("");
              const mapped = parts.map((item) => {
                let encodeURIComponentResult;
                if (null == closure_1_0) {
                  const _encodeURIComponent = encodeURIComponent;
                  encodeURIComponentResult = encodeURIComponent(item);
                } else {
                  encodeURIComponentResult = item;
                }
                return encodeURIComponentResult;
              });
              str1 = mapped.join("");
            }
            tmp = str1;
          }
          return tmp;
        }));
      };
    }
  }
  const keys = Object.keys(freeze3Result);
  const iter = keys[Symbol.iterator]();
  while (iter !== undefined) {
    let closure_3 = iter.next();
    let _loopResult = _loop();
    continue;
  }
  return obj;
};