// === Module 11040: pickDirectory ===

// Module 11040 (pickDirectory)
import react_native from "react-native" /* 17 */;
import react_native2 from "react-native" /* 11036 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let c1;

let obj = function _pickDirectory() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          obj = { mode: "open" };
          const merged = Object.assign(closure_0);
          const NativeDocumentPicker = react_native2.NativeDocumentPicker;
          c1 = 3;
          const obj4 = { value: NativeDocumentPicker.pickDirectory(obj), done: true };
          return obj4;
        }
      } catch (tmp8) {
        c1 = 3;
        throw tmp8;
      }
    }
  });
  return obj(...arguments);
};
const Platform = react_native.Platform;

export const pickDirectory = function pickDirectory(arg0) {
  return obj(...arguments);
};