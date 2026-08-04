// _runtime/01112_items.js
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let _Promise = arg2;
    let closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      function fulfilled(arg0) {
        try {
          step(iter.next(arg0));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      function rejected(arg0) {
        try {
          step(iter.throw(arg0));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      let iter = rejected;
      function step(done) {
        if (done.done) {
          callback(done.value);
        } else {
          let tmp = done.value;
          callback = tmp;
          if (!(tmp instanceof fulfilled)) {
            tmp = new tmp((arg0) => {
              arg0(closure_0);
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
      const value = iter2.value;
      if (iter2.done) {
        arg0(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((arg0) => {
            arg0(closure_0);
          });
        }
        tmp3.then(fulfilled, rejected);
      }
    });
    return _Promise;
  };
}
let obj = { name: require("module_1113").SDK_NAME, packages: null, version: null };
obj = { name: require("module_1113").SDK_PACKAGE_NAME, version: require("module_1113").SDK_VERSION };
let items = [obj];
obj[1] = items;
obj[2] = require("module_1113").SDK_VERSION;

export const defaultSdkInfo = obj;
export const sdkInfoIntegration = () => {
  let obj = fn(1002);
  if (obj.notWeb()) {
    if (!tmpResult.isExpoGo()) {
      fn = false;
      const dependencyMap = null;
      fn = () => outer1_2(undefined, undefined, undefined, function*() {
        if (c5 === 2) {
          c5 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_1 = tmp3;
                let c0 = tmp7;
                if (outer1_0) {
                  c5 = 3;
                  const obj1 = { value: null, done: true };
                  obj1[0] = outer1_1;
                  return obj1;
                } else {
                  let c3 = 1;
                  const NATIVE = outer1_0(outer1_1[2]).NATIVE;
                  c4 = 2;
                  c5 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = NATIVE.fetchNativeSdkInfo();
                  return obj2;
                }
              }
            } else {
              if (1 === tmp7) {
                c3 = 0;
                c0 = closure_2;
                const debug = outer1_0(outer1_1[3]).debug;
                debug.warn("Could not fetch native sdk info.", c0);
                c5 = 3;
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                closure_1 = arg1;
                c0 = true;
                c3 = 0;
              }
              c3 = 0;
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          } catch (tmp22) {
            closure_2 = tmp22;
            if (tmp4 === c3) {
              c5 = tmp2;
              throw tmp22;
            } else {
              c4 = tmp;
            }
          }
        }
      });
    }
    obj = { name: "SdkInfo", setupOnce: null, processEvent: null };
    obj[1] = function setupOnce() {

    };
    obj[2] = function processEvent(arg0) {
      let closure_0 = arg0;
      let closure_1 = closure_0;
      return outer1_2(undefined, undefined, undefined, function*() {
        if (c4 === 2) {
          c4 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let c2 = 0;
                let closure_1 = tmp2;
                let closure_0;
                c3 = 1;
                c4 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = outer1_1();
                return obj1;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              closure_0 = arg1;
              let str = closure_0.platform;
              if (!str) {
                str = "javascript";
              }
              closure_0.platform = str;
              let sdk = closure_0.sdk;
              if (!sdk) {
                sdk = {};
              }
              closure_0.sdk = sdk;
              let name = closure_0.sdk.name;
              if (!name) {
                name = c3.name;
              }
              closure_0.sdk.name = name;
              let version = outer1_0.sdk.version;
              if (!version) {
                version = c3.version;
              }
              outer1_0.sdk.version = version;
              closure_0 = 0;
              let packages = outer1_0.sdk.packages;
              if (!packages) {
                packages = [];
              }
              const items = [];
              const arraySpreadResult = HermesBuiltin.arraySpread(packages, closure_0);
              closure_0 = arraySpreadResult;
              let items2 = outer1_0;
              if (outer1_0) {
                const items1 = [outer1_0];
                items2 = items1;
              }
              if (!items2) {
                items2 = [];
              }
              closure_0 = HermesBuiltin.arraySpread(items2, arraySpreadResult);
              outer1_0.sdk.packages = items;
              c4 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = outer1_0;
              return obj3;
            }
          } catch (tmp34) {
            c4 = tmp;
            throw tmp34;
          }
        }
      });
    };
    return obj;
  }
  fn = (arg0) => Promise.resolve(null);
};