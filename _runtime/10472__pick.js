// _runtime/10472__pick.js
import closure_2 from "00005_asyncGeneratorStep.js";
import { Platform } from "00017_get_ActivityIndicator.js";

const require = arg1;
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
          return { value: "HermesInternal", done: null };
        }
      } else {
        while (true) {
          let num = 2;
          c8 = 2;
          let tmp4 = c7;
          if (0 === c7) {
            if (arg0 === 1) {
              let num7 = 3;
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              let num6 = 3;
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
                let tmp20 = callback;
                let tmp21 = closure_1_1;
                let items1 = [callback(closure_1_1[2]).types.allFiles];
                obj1 = { mode: "import", allowMultiSelection: false, allowVirtualFiles: false };
                let tmp23 = obj1;
                let tmp24 = tmp45;
                let merged = Object.assign(tmp45);
                obj1.type = items1;
                type = obj1.type;
                if (type.every((str) => typeof str === "string")) {
                  if ("mode" in obj1) {
                    let items2 = ["import", "open"];
                    if (!items2.includes(obj1.mode)) {
                      let _TypeError2 = TypeError;
                      let tmp30 = new.target;
                      let tmp31 = new.target;
                      let typeError = new TypeError("Invalid mode option: " + obj1.mode);
                      let tmp33 = typeError;
                      throw typeError;
                    }
                  }
                  let tmp34 = callback;
                  let tmp35 = closure_1_1;
                  let NativeDocumentPicker = callback(closure_1_1[3]).NativeDocumentPicker;
                  c7 = 1;
                  let num5 = 1;
                  c8 = 1;
                  let obj2 = { value: null, done: false };
                  obj2[0] = NativeDocumentPicker.pick(obj1);
                  return obj2;
                } else {
                  let _TypeError = TypeError;
                  let _HermesInternal = HermesInternal;
                  let tmp26 = new.target;
                  let tmp27 = new.target;
                  let typeError1 = new TypeError("Unexpected type option in " + obj1.type + ", did you try using a DocumentPicker.types.* that does not exist?");
                  let tmp29 = typeError1;
                  throw typeError1;
                }
              }
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              let num4 = 3;
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              let num3 = 3;
              c8 = 3;
              let obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              let tmp42 = closure_3;
              lib = arg1;
              let tmp43 = lib;
              closure_2 = lib;
              let tmp44 = lib;
              closure_2 = lib;
              lib = lib[Symbol.iterator]();
              let tmp8 = closure_2;
              let tmp9 = lib;
              while (lib !== undefined) {
                let tmp11 = closure_3;
                let tmp12 = closure_4;
                c6 = 1;
                closure_2 = tmp10;
                let tmp13 = closure_2;
                let tmp14 = obj1;
                let tmp15 = lib;
                obj = obj1(lib[4]);
                let tmp16 = obj1;
                let tmp17 = closure_2;
                closure_2.hasRequestedType = obj.safeValidate(obj1.type, closure_2);
                c6 = 0;
                continue;
              }
              let tmp18 = closure_3;
              let num2 = 3;
              c8 = 3;
              let obj4 = { value: null, done: true };
              obj4[0] = lib;
              return obj4;
            }
          } else {
            let tmp5 = closure_5;
            let tmp6 = closure_5;
            c6 = 0;
            let tmp7 = lib;
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