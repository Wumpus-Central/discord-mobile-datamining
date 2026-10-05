// _runtime/11028_pick.js
import react_native from "00017_react-native.js";
import react_native2 from "11023_react-native.js";
import react_native3 from "11025_react-native.js";
import _asyncToGenerator from "metro/00005__asyncToGenerator.js";

let c7, c8;

let obj = function _pick() {
  obj = _asyncToGenerator(async function (arg0) {
    let value;
    let closure_0 = arg0;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      while (true) {
        let obj4;
        let c2;
        c8 = 2;
        let tmp4 = c7;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            let mapped;
            let closure_4 = tmp;
            let closure_3 = tmp4;
            obj4 = undefined;
            value = undefined;
            c2 = undefined;
            let type1;
            if (closure_0 != null) {
              type1 = closure_0.type;
            }
            if (type1) {
              let items;
              let _Array = Array;
              let type = closure_0.type;
              if (Array.isArray(closure_0.type)) {
                items = type;
              } else {
                items = [type];
              }
              let flatResult = items.flat();
              mapped = flatResult.map((item) => item.trim());
            } else {
              mapped = [react_native3.types.allFiles];
            }
            obj4 = { mode: "import", allowMultiSelection: false, allowVirtualFiles: false, type: mapped };
            let merged = Object.assign(closure_0);
            let type2 = obj4.type;
            if (type2.every((item) => typeof item === "string")) {
              if ("mode" in obj4) {
                let items1 = ["import", "open"];
                if (!items1.includes(obj4.mode)) {
                  let _TypeError2 = TypeError;
                  let self3 = this;
                  let self4 = this;
                  let typeError = new TypeError("Invalid mode option: " + obj4.mode);
                  throw typeError;
                }
              }
              let NativeDocumentPicker = react_native2.NativeDocumentPicker;
              c7 = 1;
              c8 = 1;
              let obj5 = { value: NativeDocumentPicker.pick(obj4), done: false };
              return obj5;
            } else {
              let _TypeError = TypeError;
              let _HermesInternal = HermesInternal;
              let self = this;
              let self2 = this;
              let typeError1 = new TypeError(
                "Unexpected type option in " +
                  obj4.type +
                  ", did you try using a DocumentPicker.types.* that does not exist?",
              );
              throw typeError1;
            }
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            let obj6 = { value, done: true };
            return obj6;
          } else {
            let closure_2 = value;
            value = value[Symbol.iterator]();
            while (value !== undefined) {
              c2 = tmp10;
              obj = closure_132_0(closure_132_1[4]);
              c2.hasRequestedType = obj.safeValidate(obj4.type, c2);
              let c6 = 0;
              continue;
            }
            c8 = 3;
            let obj7 = { value, done: true };
            return obj7;
          }
        } else {
          c6 = 0;
          value.return();
          throw closure_1_5;
        }
      }
    }
  });
  return obj(...arguments);
};
const Platform = react_native.Platform;

export const pick = function pick(arg0) {
  return obj(...arguments);
};
