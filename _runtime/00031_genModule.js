// _runtime/00031_genModule.js
import _slicedToArray from "metro/00032__.js";

let require = fn;
function genModule(global, index) {
  closure_0 = index;
  if (global) {
    const tmp3 = _slicedToArray(global, 5);
    [obj, tmp4] = tmp3;
    require = tmp4;
    dependencyMap = tmp3[3];
    _slicedToArray = tmp3[4];
    const startsWithResult = module.startsWith("RCT");
    let tmp9 = !startsWithResult;
    if (!startsWithResult) {
      tmp9 = !module.startsWith("RK");
    }
    require("metro/00038__.js")(
      tmp9,
      `Module name prefixes should've been stripped by the native side but wasn't for ${obj}`,
    );
    if (!tmp4) {
      if (!arr) {
        module = { name: null };
        module.name = module;
        return module;
      }
    }
    module = {};
    if (tmp3[2]) {
      const item = arr.forEach((item, index) => {
        let flag = str;
        if (str) {
          flag = -1 !== str.indexOf(index);
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
        require("metro/00038__.js")(tmp2, "Cannot have a method that is both async and a sync hook");
        str = "promise";
        if (!flag) {
          let str2 = "async";
          if (flag2) {
            str2 = "sync";
          }
          str = str2;
        }
        let tmp4 =
          "promise" === str
            ? function promiseMethodWrapper() {
                closure_0 = [...arguments];
                let error = new Error();
                return new Promise((substr, arg1) => {
                  error = arg1;
                  error(str[2]).default.enqueueNativeCall(
                    substr,
                    error,
                    substr,
                    (arg0) => substr(arg0),
                    (arg0) => {
                      obj = arg0;
                      if (!arg0) {
                        obj = {};
                      }
                      return closure_1(Object.assign(error, obj));
                    },
                  );
                });
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
                  index("Cannot have a non-function arg after a function arg."[1])(
                    tmp3,
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
                  const _default2 = index(str[2]).default;
                  return _default2.callNativeSyncHook(closure_0, index, substr, tmp5, tmp4);
                } else {
                  const _default = index(str[2]).default;
                  _default.enqueueNativeCall(closure_0, index, substr, tmp5, tmp4);
                }
              };
        tmp4.type = str;
        obj[item] = tmp4;
      });
    }
    let _Object = Object;
    const merged = Object.assign(module, tmp4);
    if (null == module.getConstants) {
      module.getConstants = () => {
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
      console.warn(
        "Unable to define method 'getConstants()' on NativeModule '" +
          module +
          "'. NativeModule '" +
          module +
          "' already has a constant or method called 'getConstants'. Please remove it.",
      );
    }
    const obj1 = { name: module, module };
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
  fn(38)(__fbBatchedBridgeConfig, "__fbBatchedBridgeConfig is not set, cannot invoke native modules");
  let closure_6 = fn(49).default;
  let item =
    __fbBatchedBridgeConfig.remoteModuleConfig ||
    [].forEach((item, index) => {
      closure_0 = index;
      const tmp = genModule(item, index);
      const name = tmp;
      if (tmp) {
        if (tmp.module) {
          nativeModuleProxy[tmp.name] = tmp.module;
        } else {
          const obj = {
            get() {
              require("metro/00038__.js")(
                global.nativeRequireModuleConfig,
                "Can't lazily create module without nativeRequireModuleConfig",
              );
              const tmp2 = genModule(global.nativeRequireModuleConfig(name.name), closure_0);
              let _module = tmp2;
              if (tmp2) {
                _module = tmp2.module;
              }
              return _module;
            },
          };
          closure_6(nativeModuleProxy, tmp.name, obj);
        }
      }
    });
  const arr = __fbBatchedBridgeConfig.remoteModuleConfig || [];
}

export default obj;
