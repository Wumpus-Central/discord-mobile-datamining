// === Module 988: defaultSdkInfo ===

// Module 988 (defaultSdkInfo)
import SDK_PACKAGE_NAME from "SDK_PACKAGE_NAME" /* 989 */;

const require = globalThis.__r;
let _require, c0, dependencyMap;

let items;
let fn = this && this.__awaiter || ((arg0, arg1, arg2, arg3) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let _Promise = arg2;
  const Promise = arg2;
  let closure_3 = arg3;
  if (!arg2) {
    let tmp = globalThis;
    _Promise = Promise;
  }
  const _Promise1 = new _Promise(function(fn, arg1) {
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
        fn(done.value);
      } else {
        let tmp1 = done.value;
        const value = tmp1;
        if (!(tmp1 instanceof Promise)) {
          const self = this;
          const self2 = this;
          tmp1 = new tmp((fn) => {
            fn(value);
          });
        }
        tmp1.then(fulfilled, iter);
      }
    }
    let items = closure_1;
    const tmp = iter;
    const apply = iter.apply;
    const tmp2 = closure_0;
    if (!closure_1) {
      items = [];
    }
    iter = apply(tmp2, items);
    const iter2 = iter.next();
    let value = iter2.value;
    if (iter2.done) {
      const tmp5 = fn(value);
    } else {
      let tmp32 = value;
      if (!(value instanceof fulfilled)) {
        let self = this;
        let self2 = this;
        tmp32 = new tmp3((fn) => {
          fn(value);
        });
      }
      tmp32.then(fulfilled, rejected);
    }
  });
  return _Promise1;
});
const defaultSdkInfo = { name: SDK_PACKAGE_NAME.SDK_NAME, packages: items, version: SDK_PACKAGE_NAME.SDK_VERSION };
let obj2 = { name: SDK_PACKAGE_NAME.SDK_PACKAGE_NAME, version: SDK_PACKAGE_NAME.SDK_VERSION };
items = [obj2];

export { defaultSdkInfo };
export const sdkInfoIntegration = () => {
  let c1;
  const tmp = _require;
  let obj = require("module_878");
  if (obj.notWeb()) {
    const tmpResult = tmp(878);
    if (!tmpResult.isExpoGo()) {
      _require = false;
      dependencyMap = null;
      fn = () => fn(undefined, undefined, undefined, function*() {
        value = tmp;
        let closure_0 = tmp4;
        if (closure_2_0) {
          return value;
        }
        const NATIVE = closure_0(value[2]).NATIVE;
        yield NATIVE.fetchNativeSdkInfo();
        if (1 === c4) {
          let c3 = 0;
          closure_0 = closure_2;
          const debug = closure_0(value[3]).debug;
          debug.warn("Could not fetch native sdk info.", closure_0);
        } else if (arg0 === 1) {
          let c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c0 = true;
          c3 = 0;
        }
        return value;
      });
    }
    const obj2 = {
      name: "SdkInfo",
      setupOnce() {

        },
      processEvent(arg0) {
          let closure_0 = arg0;
          let closure_1 = fn;
          return closure_2_2(undefined, undefined, undefined, function*() {
            let c2;
            let c4;
            yield tmp();
            closure_0 = value;
            const str = closure_130_0.platform || "javascript";
            closure_130_0.platform = str;
            const sdk1 = closure_130_0.sdk || {};
            closure_130_0.sdk = sdk1;
            let name = closure_130_0.sdk.name;
            const sdk = closure_130_0.sdk;
            if (!name) {
              name = c3.name;
            }
            sdk.name = name;
            let version = closure_130_0.sdk.version;
            const sdk2 = closure_130_0.sdk;
            if (!version) {
              version = c3.version;
            }
            sdk2.version = version;
            closure_0 = 0;
            let packages = closure_130_0.sdk.packages;
            const sdk3 = closure_130_0.sdk;
            if (!packages) {
              packages = [];
            }
            const items = [];
            const arraySpreadResult = HermesBuiltin.arraySpread(items, packages, closure_0);
            closure_0 = arraySpreadResult;
            let items2 = closure_0;
            if (items2) {
              const items1 = [closure_0];
              items2 = items1;
            }
            if (!items2) {
              items2 = [];
            }
            closure_0 = HermesBuiltin.arraySpread(items, items2, arraySpreadResult);
            sdk3.packages = items;
            return closure_130_0;
          });
        }
    };
    return obj2;
  }
  fn = () => Promise.resolve(null);
};