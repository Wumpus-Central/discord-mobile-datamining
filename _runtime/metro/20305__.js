// === Module 20305: ? ===

// Module 20305
import _nitroFetch from "_nitroFetch" /* 20282 */;
import hybridObject from "hybridObject" /* 20296 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = arg1;
function getNestedField(arg0, str) {
  const parts = str.split(".");
  let tmp2 = arg0;
  const iter = parts[Symbol.iterator]();
  while (iter !== undefined) {
    if (null != tmp2) {
      if (typeof tmp2 === "object") {
        tmp2 = tmp2[tmp4];
        continue;
      }
    }
    iter.return();
  }
  let StringResult;
  if (null != tmp2) {
    const _String = String;
    StringResult = String(tmp2);
  }
  return StringResult;
}
function applyTemplate(str, arg1) {
  return str.replace(/\{\{value\}\}/g, arg1);
}
function applyCompositeTemplate(str, arg1) {
  closure_0 = arg1;
  return str.replace(/\{\{(\w+)\}\}/g, (arg0, arg1) => {
    let str = closure_0[arg1];
    if (str == null) {
      str = "";
    }
    return str;
  });
}
let closure_11 = async function _callRefreshEndpoint(arg0) {
  let method = arg0;
  c14 = 0;
  c15 = 0;
  c12 = 0;
  return (async (arg0) => {
    if (c15 === 2) {
      c15 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
        c15 = 2;
        let tmp4 = c14;
        if (0 === c14) {
          if (arg0 === 1) {
            c15 = 3;
            throw value;
          } else if (arg0 === 2) {
            c15 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_11 = tmp;
            closure_10 = tmp4;
            let tmp111 = method;
            closure_138_0 = method;
            closure_138_1 = undefined;
            closure_138_2 = undefined;
            closure_138_3 = undefined;
            closure_138_4 = undefined;
            closure_138_5 = undefined;
            closure_138_6 = undefined;
            closure_138_7 = undefined;
            closure_138_8 = undefined;
            closure_138_9 = undefined;
            closure_138_10 = undefined;
            closure_138_11 = undefined;
            closure_138_12 = undefined;
            method = method.method;
            POST = method;
            if (method == null) {
              POST = "POST";
            }
            let obj8 = _nitroFetch;
            let request = { method: POST, headers: null, body: null };
            ({ headers: obj9.headers, body: obj9.body } = tmp111);
            c14 = 1;
            c15 = 1;
            let obj4 = { value: obj8.nitroFetch(tmp111.url, request), done: false };
            return obj4;
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c15 = 3;
            throw value;
          } else if (arg0 === 2) {
            c15 = 3;
            let obj5 = { value, done: true };
            return obj5;
          } else {
            closure_138_1 = value;
            if (closure_138_1.ok) {
              closure_138_2 = {};
              if ("text" === closure_138_0.responseType) {
                c14 = 2;
                c15 = 1;
                let obj6 = { value: closure_138_1.text(), done: false };
                return obj6;
              } else {
                let _JSON = JSON;
                parse = JSON.parse;
                c14 = 3;
                c15 = 1;
                let obj7 = { value: closure_138_1.text(), done: false };
                return obj7;
              }
            } else {
              let _Error = Error;
              let _HermesInternal = HermesInternal;
              let tmp75 = new.target;
              let tmp76 = new.target;
              let error = new Error("Token refresh failed: " + closure_138_1.status + " " + closure_138_1.statusText);
              throw error;
            }
          }
        } else if (2 === tmp4) {
          if (arg0 === 1) {
            c15 = 3;
            throw value;
          } else if (arg0 === 2) {
            c15 = 3;
            let obj10 = { value, done: true };
            return obj10;
          } else {
            closure_138_3 = value;
            if (!closure_138_0.textHeader) {
              c15 = 3;
              let obj11 = { value: closure_138_2, done: true };
              return obj11;
            } else {
              let tmp63 = closure_138_2;
              if (closure_138_0.textTemplate) {
                let tmp67 = closure_139_9(closure_138_0.textTemplate, closure_138_3);
              } else {
                tmp67 = closure_138_3;
              }
              tmp63[closure_138_0.textHeader] = tmp67;
            }
          }
        } else if (3 === tmp4) {
          if (arg0 === 1) {
            c15 = 3;
            throw value;
          } else if (arg0 === 2) {
            c15 = 3;
            let obj12 = { value, done: true };
            return obj12;
          } else {
            closure_138_4 = parse(value);
            if (closure_138_0.mappings) {
              mappings = closure_138_0.mappings;
              closure_2 = mappings[Symbol.iterator]();
              while (closure_2 !== undefined) {
                c12 = 1;
                closure_138_5 = tmp19;
                closure_138_6 = closure_139_8(closure_138_4, closure_138_5.jsonPath);
                if (null == closure_138_6) {
                  c12 = 0;
                  continue;
                } else {
                  let tmp21 = closure_138_2;
                  if (closure_138_5.valueTemplate) {
                    let tmp25 = closure_139_9(closure_138_5.valueTemplate, closure_138_6);
                  } else {
                    tmp25 = closure_138_6;
                  }
                  tmp21[closure_138_5.header] = tmp25;
                }
              }
            }
            if (closure_138_0.compositeHeaders) {
              compositeHeaders = closure_138_0.compositeHeaders;
              closure_4 = compositeHeaders[Symbol.iterator]();
              while (closure_4 !== undefined) {
                c12 = 2;
                closure_138_7 = tmp37;
                closure_138_8 = {};
                let _Object = Object;
                entries = Object.entries(closure_138_7.paths);
                closure_6 = entries[Symbol.iterator]();
                while (closure_6 !== undefined) {
                  c12 = 3;
                  closure_138_9 = tmp40;
                  closure_138_10 = closure_139_3(closure_138_9, 2);
                  closure_138_11 = closure_138_10[0];
                  closure_138_12 = closure_139_8(closure_138_4, closure_138_10[1]);
                  if (null != closure_138_12) {
                    closure_138_8[closure_138_11] = closure_138_12;
                  }
                  c12 = 2;
                  continue;
                }
                closure_138_2[closure_138_7.header] = closure_139_10(closure_138_7.template, closure_138_8);
                c12 = 0;
                continue;
              }
            }
            c15 = 3;
            let obj = { value: closure_138_2, done: true };
            return obj;
          }
        } else if (4 === tmp4) {
          c12 = 0;
          closure_2.return();
          throw closure_1_13;
        } else if (5 === tmp4) {
          c12 = 0;
          closure_4.return();
          throw closure_1_13;
        } else {
          c12 = 2;
          closure_6.return();
          throw closure_1_13;
        }
      }
    }
  })();
};
let closure_2 = ["target"];
const nitro_token_refresh_websocket = "nitro_token_refresh_websocket";
const nitro_token_refresh_fetch = "nitro_token_refresh_fetch";

export { getNestedField };
export { applyTemplate };
export function callRefreshEndpoint(arg0) {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function registerTokenRefresh(target) {
  target = target.target;
  const json = JSON.stringify(_objectWithoutProperties(target, closure_2));
  let tmp2 = "websocket" !== target;
  if (tmp2) {
    tmp2 = "all" !== target;
  }
  if (!tmp2) {
    const NativeStorage = hybridObject.NativeStorage;
    NativeStorage.setSecureString(nitro_token_refresh_websocket, json);
  }
  let tmp7 = "fetch" !== target;
  if (tmp7) {
    tmp7 = "all" !== target;
  }
  if (!tmp7) {
    const NativeStorage2 = hybridObject.NativeStorage;
    NativeStorage2.setSecureString(nitro_token_refresh_fetch, json);
  }
}
export function clearTokenRefresh(arg0) {
  let str = arg0;
  if (arg0 == null) {
    str = "all";
  }
  let tmp = "websocket" !== str;
  if (tmp) {
    tmp = "all" !== str;
  }
  if (!tmp) {
    const NativeStorage = hybridObject.NativeStorage;
    NativeStorage.removeSecureString(nitro_token_refresh_websocket);
    const NativeStorage2 = hybridObject.NativeStorage;
    NativeStorage2.removeSecureString("nitro_token_refresh_ws_cache");
  }
  let tmp7 = "fetch" !== str;
  if (tmp7) {
    tmp7 = "all" !== str;
  }
  if (!tmp7) {
    const NativeStorage3 = hybridObject.NativeStorage;
    NativeStorage3.removeSecureString(nitro_token_refresh_fetch);
    const NativeStorage4 = hybridObject.NativeStorage;
    NativeStorage4.removeSecureString("nitro_token_refresh_fetch_cache");
  }
}
export function getStoredTokenRefreshConfig(arg0) {
  try {
    const NativeStorage = hybridObject.NativeStorage;
    const secureString = NativeStorage.getSecureString(tmp);
    let parsed = null;
    if (secureString) {
      const _JSON = JSON;
      parsed = JSON.parse(secureString);
    }
    return parsed;
  } catch (err) {
    return null;
  }
}