// === Module 507: getAuthenticationPath ===

// Module 507 (getAuthenticationPath)
import obj132 from "obj132" /* 2 */;

function getAuthenticationPath(login, arg1, flag, arg3) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  if (flag === undefined) {
    flag = true;
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
  if (0 === str.length) {
    let str7 = "";
    if (flag) {
      str7 = str2;
    }
    const _HermesInternal4 = HermesInternal;
    return "" + str7 + "/" + login + str3 + tmp2;
  } else if (0 === str3.length) {
    const _HermesInternal3 = HermesInternal;
    let combined = "?" + str;
  } else {
    const _HermesInternal2 = HermesInternal;
    combined = "&" + str;
  }
}
class UnescapedPathParam {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.value = global;
    return obj;
  }
}
UnescapedPathParam.prototype["toString"] = function toString() {
  return this.value;
};
const result = obj132.fileFinishedImporting("../discord_common/js/shared/utils/PathUtils.tsx");

export const getLoginPath = function getLoginPath(arg0, flag) {
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
export const wrapPaths = function wrapPaths(frozen, arg1) {
  closure_0 = frozen;
  closure_1 = arg1;
  const obj = {};
  function _loop() {
    const table = tmp2;
    if (typeof table[closure_3] !== "function") {
      obj[closure_3] = tmp2;
      return 1;
    } else {
      obj[closure_3] = () => {
        const items = [...arguments];
        const callback = closure_1_1;
        return callback(...items.map((item, index) => {
          if (null == item) {
            return item;
          } else if (item instanceof closure_1_1) {
            let str = item.toString();
          } else if (null == closure_0) {
            let _encodeURIComponent = encodeURIComponent;
            str = encodeURIComponent(item);
          } else {
            const _String = String;
            str = String(item);
            const parts = str.split("");
            const mapped = parts.map((item, index) => {
              if (null == closure_0) {
                const _encodeURIComponent = encodeURIComponent;
                let encodeURIComponentResult = encodeURIComponent(item);
              } else {
                encodeURIComponentResult = item;
              }
              return encodeURIComponentResult;
            });
            str = mapped.join("");
          }
        }));
      };
    }
  }
  const keys = Object.keys(frozen);
  const iter = keys[Symbol.iterator]();
  while (iter !== undefined) {
    closure_3 = iter.next();
    let _loopResult = _loop();
    continue;
  }
  return obj;
};