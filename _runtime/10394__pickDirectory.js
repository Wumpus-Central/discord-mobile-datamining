// === Module 10394: _pickDirectory ===

// Module 10394 (_pickDirectory)
import closure_2 from "asyncGeneratorStep" /* 5 */;
import { Platform } from "get ActivityIndicator" /* 17 */;

const require = arg1;
function _pickDirectory() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c1 = 0;
    return (function*(arg0) {
      if (table === 2) {
        table = 3;
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
        try {
          table = 2;
          if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            obj = { mode: "open" };
            const merged = Object.assign(callback);
            const NativeDocumentPicker = callback(table[2]).NativeDocumentPicker;
            table = 3;
            obj1 = { value: null, done: true };
            obj1[0] = NativeDocumentPicker.pickDirectory(obj);
            return obj1;
          }
        } catch (tmp9) {
          table = tmp;
          throw tmp9;
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

export const pickDirectory = function pickDirectory(arg0) {
  const self = this;
  const apply = _pickDirectory.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};