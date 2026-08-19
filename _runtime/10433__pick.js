// === Module 10433: _pick ===

// Module 10433 (_pick)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import { Platform } from "get ActivityIndicator" /* 17 */;

const require = fn;
function _pick() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        while (true) {
          c8 = 2;
          let tmp4 = c7;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              let tmp45 = obj1;
              obj1 = undefined;
              let lib;
              closure_2 = undefined;
              let type;
              if (obj1 != null) {
                type = tmp45.type;
              }
              if (type) {
                let _Array = Array;
                let fn = tmp45.type;
                if (Array.isArray(tmp45.type)) {
                  let items = fn;
                } else {
                  items = [fn];
                }
                let flatResult = items.flat();
                fn = (str) => str.trim();
                let mapped = flatResult.map(fn);
              } else {
                let items1 = [callback(closure_1_1[2]).types.allFiles];
                obj1 = { mode: "import", allowMultiSelection: false, allowVirtualFiles: false };
                let merged = Object.assign(tmp45);
                obj1.type = items1;
                type = obj1.type;
                if (type.every((item, index) => typeof item === "string")) {
                  if ("mode" in obj1) {
                    let items2 = ["import", "open"];
                    if (!items2.includes(obj1.mode)) {
                      let _TypeError2 = TypeError;
                      let typeError = new TypeError("Invalid mode option: " + obj1.mode);
                      throw typeError;
                    }
                  }
                  let NativeDocumentPicker = callback(closure_1_1[3]).NativeDocumentPicker;
                  c7 = 1;
                  c8 = 1;
                  let obj2 = { value: null, done: false };
                  obj2[0] = NativeDocumentPicker.pick(obj1);
                  return obj2;
                } else {
                  let _TypeError = TypeError;
                  let _HermesInternal = HermesInternal;
                  let typeError1 = new TypeError("Unexpected type option in " + obj1.type + ", did you try using a DocumentPicker.types.* that does not exist?");
                  throw typeError1;
                }
              }
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              let obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              lib = arg1;
              closure_2 = lib;
              lib = lib[Symbol.iterator]();
              while (lib !== undefined) {
                closure_2 = tmp10;
                obj = obj1(lib[4]);
                closure_2.hasRequestedType = obj.safeValidate(obj1.type, closure_2);
                c6 = 0;
                continue;
              }
              c8 = 3;
              let obj4 = { value: null, done: true };
              obj4[0] = lib;
              return obj4;
            }
          } else {
            c6 = 0;
            lib.return();
            throw closure_5;
          }
        }
      }
    })();
  });
  closure_3 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}

export const pick = function pick(arg0) {
  const self = this;
  const apply = _pick.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};