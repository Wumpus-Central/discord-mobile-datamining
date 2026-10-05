// _runtime/metro/00031__.js
import defineLazyObjectProperty from "../00049_defineLazyObjectProperty.js";
import _slicedToArray_mod from "00032__slicedToArray.js";

let closure_1, dependencyMap;

function genModule(global, index) {
  let closure_2;
  let closure_3;
  let obj;
  let tmp4;
  let closure_0 = index;
  if (global) {
    let tmp2 = _slicedToArray;
    const tmp3 = _slicedToArray(global, 5);
    [obj, tmp4] = tmp3;
    require = tmp4;
    dependencyMap = tmp3[3];
    _slicedToArray = tmp3[4];
    let tmp5 = require;
    let str = "RCT";
    const tmp7 = require("00038__.js");
    let tmp9 = !obj.startsWith("RCT");
    obj.startsWith("RCT");
    if (tmp9) {
      let str2 = "RK";
      tmp9 = !obj.startsWith("RK");
    }
    tmp7(tmp9, `Module name prefixes should've been stripped by the native side but wasn't for ${obj}`);
    if (!tmp4) {
      if (!tmp3[2]) {
        return { name: obj };
      }
    }
    const obj3 = {};
    if (tmp3[2]) {
      const item = arr.forEach((item, index) => {
        let flag = closure_2;
        if (flag) {
          flag = -1 !== closure_2.indexOf(index);
        }
        if (!flag) {
          flag = false;
        }
        let flag2 = closure_3;
        if (flag2) {
          flag2 = -1 !== closure_3.indexOf(index);
        }
        if (!flag2) {
          flag2 = false;
        }
        let tmp2 = !flag;
        let tmp = require("00038__.js");
        if (flag) {
          tmp2 = !flag2;
        }
        tmp(tmp2, "Cannot have a method that is both async and a sync hook");
        let str = "promise";
        if (!flag) {
          let str2 = "async";
          if (flag2) {
            str2 = "sync";
          }
          str = str2;
        }
        closure_1 = index;
        let tmp4 =
          "promise" === str
            ? function promiseMethodWrapper() {
                closure_0 = [...arguments];
                const error = new Error();
                const promise = new Promise((substr, error) => {
                  const _default = error(str[2]).default;
                  _default.enqueueNativeCall(
                    substr,
                    error,
                    substr,
                    (arg0) => substr(arg0),
                    (arg0) => {
                      let obj = arg0;
                      const _Object = Object;
                      if (!arg0) {
                        obj = {};
                      }
                      return error(assign(error, obj));
                    },
                  );
                });
                return promise;
              }
            : function nonPromiseMethodWrapper() {
                const items = [...arguments];
                let tmp = null;
                if (items.length > 0) {
                  tmp = items[items.length - 1];
                }
                let tmp2 = null;
                if (items.length > 1) {
                  tmp2 = items[items.length - 2];
                }
                if (typeof tmp2 === "function") {
                  closure_2_1(closure_2_2[1])(
                    typeof tmp === "function",
                    "Cannot have a non-function arg after a function arg.",
                  );
                }
                let tmp4 = null;
                if (typeof tmp === "function") {
                  tmp4 = tmp;
                }
                let tmp5 = null;
                if (typeof tmp2 === "function") {
                  tmp5 = tmp2;
                }
                const substr = items.slice(0, items.length - (tmp3 + (typeof tmp2 === "function")));
                if ("sync" === str) {
                  const _default2 = closure_2_1(closure_2_2[2]).default;
                  return _default2.callNativeSyncHook(closure_0, closure_1, substr, tmp5, tmp4);
                } else {
                  const _default = closure_2_1(closure_2_2[2]).default;
                  _default.enqueueNativeCall(closure_0, closure_1, substr, tmp5, tmp4);
                }
              };
        tmp4.type = str;
        obj3[item] = tmp4;
      });
    }
    let _Object = Object;
    const merged = Object.assign(obj3, tmp4);
    if (null == obj3.getConstants) {
      obj3.getConstants = () => {
        let frozen = require;
        if (!frozen) {
          const _Object = Object;
          frozen = Object.freeze({});
        }
        return frozen;
      };
    } else {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.warn(
        "Unable to define method 'getConstants()' on NativeModule '" +
          obj +
          "'. NativeModule '" +
          obj +
          "' already has a constant or method called 'getConstants'. Please remove it.",
      );
    }
    return { name: obj, module: obj3 };
  } else {
    let tmp = null;
    return null;
  }
}
let _slicedToArray = _slicedToArray_mod;
global.__fbGenNativeModule = genModule;
let obj = {};
let nativeModuleProxy = obj;
if (global.nativeModuleProxy) {
  nativeModuleProxy = global.nativeModuleProxy;
  obj = nativeModuleProxy;
} else {
  const __fbBatchedBridgeConfig = global.__fbBatchedBridgeConfig;
  let str = "__fbBatchedBridgeConfig is not set, cannot invoke native modules";
  let tmp2 = require("00038__.js")(
    __fbBatchedBridgeConfig,
    "__fbBatchedBridgeConfig is not set, cannot invoke native modules",
  );
  let closure_6 = defineLazyObjectProperty.default;
  const arr = __fbBatchedBridgeConfig.remoteModuleConfig || [];
  let item = arr.forEach((item, index) => {
    let closure_0 = index;
    const tmp = genModule(item, index);
    let name = tmp;
    if (name) {
      if (tmp.module) {
        nativeModuleProxy[tmp.name] = tmp.module;
      } else {
        const obj = {
          get() {
            name = name.name;
            require("00038__.js")(
              global.nativeRequireModuleConfig,
              "Can't lazily create module without nativeRequireModuleConfig",
            );
            const tmp2 = genModule(global.nativeRequireModuleConfig(name), index);
            return tmp2 && tmp2.module;
          },
        };
        closure_6(nativeModuleProxy, tmp.name, obj);
      }
    }
  });
}

export default obj;
