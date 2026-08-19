// _runtime/00031_genModule.js
import _mod38 from "metro/00038__.js";
import _slicedToArray from "metro/00032__slicedToArray.js";

require = fn;
function genModule(item, index) {
  closure_0 = index;
  if (item) {
    const tmp3 = callback(item, 5);
    [obj, tmp4] = tmp3;
    require = tmp4;
    dependencyMap = tmp3[3];
    callback = tmp3[4];
    const startsWithResult = obj.startsWith("RCT");
    let tmp9 = !startsWithResult;
    if (!startsWithResult) {
      tmp9 = !obj.startsWith("RK");
    }
    _mod38(tmp9, `Module name prefixes should've been stripped by the native side but wasn't for ${obj}`);
    if (!tmp4) {
      if (!arr) {
        obj = { name: null };
        obj[0] = obj;
        return obj;
      }
    }
    obj = {};
    if (tmp3[2]) {
      item = arr.forEach((item, index) => {
        let flag = str;
        if (str) {
          flag = -1 !== arr.indexOf(index);
        }
        if (!flag) {
          flag = false;
        }
        let flag2 = closure_3;
        if (closure_3) {
          flag2 = -1 !== closure_3.indexOf(index);
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
        tmp4 = "promise" === str ? (function promiseMethodWrapper() {
          closure_0 = [...arguments];
          error = new Error();
          return new Promise((closure_0, error) => {
            error(str[2]).default.enqueueNativeCall(closure_0, error, closure_0, (arg0) => callback(arg0), (arg0) => {
              obj = arg0;
              if (!arg0) {
                obj = {};
              }
              return error(Object.assign(error, obj));
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
            index("Cannot have a non-function arg after a function arg."[1])(tmp3, "Cannot have a non-function arg after a function arg.");
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
            const _default2 = index(str[2]).default;
            return _default2.callNativeSyncHook(closure_0, index, substr, tmp5, tmp4);
          } else {
            const _default = index(str[2]).default;
            _default.enqueueNativeCall(closure_0, index, substr, tmp5, tmp4);
          }
        });
        tmp4.type = str;
        obj[item] = tmp4;
        arr = str;
        let tmp = tmp4(table[1]);
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
    obj1 = { name: null, module: null };
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
  require("metro/00038__.js")(__fbBatchedBridgeConfig, "__fbBatchedBridgeConfig is not set, cannot invoke native modules");
  let closure_6 = require("defineLazyObjectProperty").default;
  let item = __fbBatchedBridgeConfig.remoteModuleConfig || [].forEach((item, index) => {
    closure_0 = index;
    const tmp = genModule(item, index);
    closure_1 = tmp;
    if (tmp) {
      if (tmp.module) {
        nativeModuleProxy[tmp.name] = tmp.module;
      } else {
        const obj = { get: null };
        obj[0] = function get() {
          lib(dependencyMap[1])(index.nativeRequireModuleConfig, "Can't lazily create module without nativeRequireModuleConfig");
          const tmp2 = genModule(index.nativeRequireModuleConfig(lib.name), index);
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
}

export default obj;