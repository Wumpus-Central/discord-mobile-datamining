// _runtime/11364__pickDirectory.js
import _mod11360 from "metro/11360__.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

require = fn;
let closure_3 = async function _pickDirectory(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
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
        const obj = { mode: "open" };
        const merged = Object.assign(closure_0);
        const NativeDocumentPicker = _mod11360.NativeDocumentPicker;
        c1 = 3;
        const obj4 = { value: NativeDocumentPicker.pickDirectory(obj), done: true };
        return obj4;
      }
    } catch (tmp9) {
      c1 = tmp;
      throw tmp9;
    }
  }
};
const Platform = fn(17).Platform;

export const pickDirectory = function pickDirectory(arg0) {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
