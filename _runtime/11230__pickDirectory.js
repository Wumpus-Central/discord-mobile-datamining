// _runtime/11230__pickDirectory.js
import _mod11226 from "metro/11226__.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

require = fn;
let closure_3 = async function _pickDirectory(arg0, value) {
  if (c1 === 2) {
    c1 = 3;
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
      c1 = 2;
      if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        obj = { mode: "open" };
        const merged = Object.assign(closure_0);
        const NativeDocumentPicker = _mod11226.NativeDocumentPicker;
        c1 = 3;
        const obj1 = { value: NativeDocumentPicker.pickDirectory(obj), done: true };
        return obj1;
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
