// === Module 7190: ClipboardUtils ===

// Module 7190 (ClipboardUtils)
import _modDef7191 from "module_7191" /* 7191 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

let closure_3 = async function _copy(arg0, value) {
  if (c2 === 2) {
    c2 = 3;
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
    try {
      c2 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          let obj1 = _modDef7191;
          obj1.setString(closure_0);
          if (dependencyMap != null) {
            dependencyMap();
          }
          c3 = 1;
          c2 = 1;
          obj1 = { value: Promise.resolve(), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c2 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp13) {
      c2 = tmp;
      throw tmp13;
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("utils/ClipboardUtils.native.tsx");

export const SUPPORTS_COPY = true;
export const copy = function copy() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getString = function getString() {
  return _modDef7191.getString();
};