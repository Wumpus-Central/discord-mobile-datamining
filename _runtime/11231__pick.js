// _runtime/11231__pick.js
import _mod11226 from "metro/11226__.js";
import _mod11228 from "metro/11228__.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

require = fn;
let closure_3 = async function _pick(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    while (true) {
      c8 = 2;
      let tmp4 = c7;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp;
          closure_3 = tmp4;
          closure_131_0 = undefined;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          let type;
          if (_require != null) {
            type = _require.type;
          }
          if (type) {
            let _Array = Array;
            let fn = _require.type;
            if (Array.isArray(_require.type)) {
              let items = fn;
            } else {
              items = [fn];
            }
            let flatResult = items.flat();
            fn = (str) => str.trim();
            let mapped = flatResult.map(fn);
          } else {
            let items1 = [_mod11228.types.allFiles];
            let obj1 = { mode: "import", allowMultiSelection: false, allowVirtualFiles: false };
            let merged = Object.assign(_require);
            obj1.type = items1;
            closure_131_0 = obj1;
            type = obj1.type;
            if (type.every((item) => typeof item === "string")) {
              if ("mode" in obj1) {
                let items2 = ["import", "open"];
                if (!items2.includes(obj1.mode)) {
                  let _TypeError2 = TypeError;
                  let tmp30 = new.target;
                  let tmp31 = new.target;
                  let typeError = new TypeError("Invalid mode option: " + obj1.mode);
                  throw typeError;
                }
              }
              let NativeDocumentPicker = _mod11226.NativeDocumentPicker;
              c7 = 1;
              c8 = 1;
              let obj2 = { value: NativeDocumentPicker.pick(obj1), done: false };
              return obj2;
            } else {
              let _TypeError = TypeError;
              let _HermesInternal = HermesInternal;
              let tmp26 = new.target;
              let tmp27 = new.target;
              let typeError1 = new TypeError(
                "Unexpected type option in " +
                  obj1.type +
                  ", did you try using a DocumentPicker.types.* that does not exist?",
              );
              throw typeError1;
            }
          }
        }
      } else if (1 === tmp4) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          closure_131_1 = value;
          closure_2 = closure_131_1;
          dependencyMap = closure_131_1[Symbol.iterator]();
          while (dependencyMap !== undefined) {
            closure_131_2 = tmp10;
            obj = closure_132_0(closure_132_1[4]);
            closure_131_2.hasRequestedType = obj.safeValidate(closure_131_0.type, closure_131_2);
            c6 = 0;
            continue;
          }
          c8 = 3;
          let obj4 = { value: closure_131_1, done: true };
          return obj4;
        }
      } else {
        c6 = 0;
        dependencyMap.return();
        throw hasOwnProperty;
      }
    }
  }
};
const Platform = fn(17).Platform;

export const pick = function pick(arg0) {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
