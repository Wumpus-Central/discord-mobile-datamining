// _runtime/00977_defaultSdkInfo.js
import SDK_PACKAGE_NAME from "00978_SDK_PACKAGE_NAME.js";

let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    let _Promise = arg2;
    closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((fn, arg1) => {
      closure_0 = fn;
      closure_1 = arg1;
      function fulfilled(result) {
        try {
          step(iter.next(result));
        } catch (tmp5) {
          closure_1(tmp5);
        }
      }
      function rejected(arg0) {
        try {
          step(iter.throw(arg0));
        } catch (tmp5) {
          closure_1(tmp5);
        }
      }
      let iter = rejected;
      function step(done) {
        if (done.done) {
          closure_0(done.value);
        } else {
          let tmp = done.value;
          closure_0 = tmp;
          if (!(tmp instanceof Promise)) {
            tmp = new tmp((fn) => {
              fn(value);
            });
          }
          tmp.then(fulfilled, iter);
        }
      }
      let items = closure_1;
      if (!closure_1) {
        items = [];
      }
      iter = iter.apply(closure_0, items);
      const iter2 = iter.next();
      value = iter2.value;
      if (iter2.done) {
        fn(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((fn) => {
            fn(value);
          });
        }
        tmp3.then(fulfilled, rejected);
      }
    });
    return _Promise;
  };
}
let defaultSdkInfo = { name: SDK_PACKAGE_NAME.SDK_NAME, packages: null, version: null };
defaultSdkInfo = { name: SDK_PACKAGE_NAME.SDK_PACKAGE_NAME, version: SDK_PACKAGE_NAME.SDK_VERSION };
let items = [defaultSdkInfo];
defaultSdkInfo.packages = items;
defaultSdkInfo.version = SDK_PACKAGE_NAME.SDK_VERSION;

export { defaultSdkInfo };
export const sdkInfoIntegration = () => {
  let obj = require("metro/00867__.js");
  if (obj.notWeb()) {
    if (!tmpResult.isExpoGo()) {
      _require = false;
      dependencyMap = null;
      fn = () =>
        fn(undefined, undefined, undefined, function* () {
          if (closure_2_0) {
            return value;
          }
          const NATIVE = closure_0(tmp3[2]).NATIVE;
          yield NATIVE.fetchNativeSdkInfo();
          if (1 === tmp7) {
            c3 = 0;
            closure_128_0 = closure_2;
            const debug = closure_0(tmp3[3]).debug;
            debug.warn("Could not fetch native sdk info.", closure_128_0);
            c5 = 3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_1 = value;
            closure_129_0 = true;
            c3 = 0;
          }
          return value;
        });
    }
    closure_129_0 = fn;
    obj = {
      name: "SdkInfo",
      setupOnce() {},
      processEvent(arg0) {
        closure_0 = arg0;
        closure_1 = c0;
        return fn(undefined, undefined, undefined, function* () {
          yield tmp2();
          closure_129_0 = value;
          let str = closure_130_0.platform;
          if (!str) {
            str = "javascript";
          }
          closure_130_0.platform = str;
          let sdk = closure_130_0.sdk;
          if (!sdk) {
            sdk = {};
          }
          closure_130_0.sdk = sdk;
          let name = closure_130_0.sdk.name;
          if (!name) {
            name = c3.name;
          }
          closure_130_0.sdk.name = name;
          let version = closure_130_0.sdk.version;
          if (!version) {
            version = c3.version;
          }
          closure_130_0.sdk.version = version;
          closure_0 = 0;
          let packages = closure_130_0.sdk.packages;
          if (!packages) {
            packages = [];
          }
          const items = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(packages, closure_0);
          closure_0 = arraySpreadResult;
          let items2 = closure_129_0;
          if (closure_129_0) {
            const items1 = [closure_129_0];
            items2 = items1;
          }
          if (!items2) {
            items2 = [];
          }
          closure_0 = HermesBuiltin.arraySpread(items2, arraySpreadResult);
          closure_130_0.sdk.packages = items;
          return closure_130_0;
        });
      },
    };
    return obj;
  }
  fn = () => Promise.resolve(null);
};
