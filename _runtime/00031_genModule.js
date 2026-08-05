// _runtime/00031_genModule.js
import _slicedToArray from "_slicedToArray";

let require = arg1;
function genModule(arg0, arg1) {
  let obj;
  let tmp4;
  let closure_0 = arg1;
  if (arg0) {
    const tmp3 = callback(arg0, 5);
    [obj, tmp4] = tmp3;
    const require = tmp4;
    const dependencyMap = tmp3[3];
    callback = tmp3[4];
    const startsWithResult = obj.startsWith("RCT");
    let tmp9 = !startsWithResult;
    if (!startsWithResult) {
      tmp9 = !obj.startsWith("RK");
    }
    require("metro/00038__.js")(tmp9, `Module name prefixes should've been stripped by the native side but wasn't for ${obj}`);
    if (!tmp4) {
      if (!arr) {
        obj = { name: null };
        obj[0] = obj;
        return obj;
      }
    }
    obj = {};
    if (tmp3[2]) {
      const item = arr.forEach((arg0, arg1) => {
        let flag = str;
        if (str) {
          flag = -1 !== str.indexOf(arg1);
        }
        if (!flag) {
          flag = false;
        }
        let flag2 = _slicedToArray;
        if (_slicedToArray) {
          flag2 = -1 !== _slicedToArray.indexOf(arg1);
        }
        if (!flag2) {
          flag2 = false;
        }
        let tmp2 = !flag;
        if (flag) {
          tmp2 = !flag2;
        }
        tmp4(table[1])(tmp2, "Cannot have a method that is both async and a sync hook");
        str = "promise";
        if (!flag) {
          let str2 = "async";
          if (flag2) {
            str2 = "sync";
          }
          str = str2;
        }
        tmp4 = arg1;
        tmp4 = "promise" === str ? (function promiseMethodWrapper() {
          let closure_0 = [...arguments];
          let error;
          error = new Error();
          return new Promise((closure_0) => {
            const error = arg1;
            error(str[2]).default.enqueueNativeCall(closure_0, error, closure_0, (arg0) => callback(arg0), (arg0) => {
              let obj = arg0;
              if (!arg0) {
                obj = {};
              }
              return closure_1(Object.assign(closure_1, obj));
            });
          });
        }) : (function nonPromiseMethodWrapper() {
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
            callback("Cannot have a non-function arg after a function arg."[1])(tmp3, "Cannot have a non-function arg after a function arg.");
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
            const _default2 = callback(str[2]).default;
            return _default2.callNativeSyncHook(closure_0, callback, substr, tmp5, tmp4);
          } else {
            const _default = callback(str[2]).default;
            _default.enqueueNativeCall(closure_0, callback, substr, tmp5, tmp4);
          }
        });
        tmp4.type = str;
        obj[arg0] = tmp4;
      });
    }
    let _Object = Object;
    const merged = Object.assign(obj, tmp4);
    if (null == obj.getConstants) {
      obj.getConstants = () => {
        let frozen = closure_1;
        if (!closure_1) {
          const _Object = Object;
          frozen = Object.freeze({});
        }
        return frozen;
      };
    } else {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.warn("Unable to define method 'getConstants()' on NativeModule '" + obj + "'. NativeModule '" + obj + "' already has a constant or method called 'getConstants'. Please remove it.");
    }
    const obj1 = { name: null, module: null };
    obj1[0] = obj;
    obj1[1] = obj;
    return obj1;
  } else {
    return null;
  }
}
global.__fbGenNativeModule = genModule;
let obj = {};
let nativeModuleProxy = obj;
if (global.nativeModuleProxy) {
  nativeModuleProxy = global.nativeModuleProxy;
  obj = nativeModuleProxy;
} else {
  const __fbBatchedBridgeConfig = global.__fbBatchedBridgeConfig;
  require("module_38")(__fbBatchedBridgeConfig, "__fbBatchedBridgeConfig is not set, cannot invoke native modules");
  let closure_6 = require("defineLazyObjectProperty").default;
  let item = __fbBatchedBridgeConfig.remoteModuleConfig || [].forEach((arg0, arg1) => {
    let closure_0 = arg1;
    let tmp = genModule(arg0, arg1);
    const require = tmp;
    if (tmp) {
      if (tmp.module) {
        nativeModuleProxy[tmp.name] = tmp.module;
      } else {
        const obj = { get: null };
        obj[0] = function get() {
          tmp = tmp(outer1_2[1])(closure_0.nativeRequireModuleConfig, "Can't lazily create module without nativeRequireModuleConfig");
          const tmp2 = outer1_4(closure_0.nativeRequireModuleConfig(tmp.name), closure_0);
          let _module = tmp2;
          if (tmp2) {
            _module = tmp2.module;
          }
          return _module;
        };
        callback2(nativeModuleProxy, tmp.name, obj);
      }
    }
  });
  const arr = __fbBatchedBridgeConfig.remoteModuleConfig || [];
}

export default obj;