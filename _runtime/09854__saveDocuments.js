// === Module 9854: _saveDocuments ===

// Module 9854 (_saveDocuments)
import asyncGeneratorStep from "asyncGeneratorStep";
import { Platform } from "get ActivityIndicator";

const require = arg1;
function _saveDocuments() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0, arr) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arr;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arr;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c3 = 3;
              throw arr;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arr;
              return obj;
            } else {
              let closure_1 = tmp2;
              v0 = 1;
              c3 = 1;
              let obj1 = { value: null, done: false };
              obj1[0] = v0(function*() {
                if (c3 === 2) {
                  c3 = 3;
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
                    c3 = 2;
                    if (0 === c2) {
                      if (arg0 === 1) {
                        c3 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c3 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        let closure_1 = tmp5;
                        let closure_0 = tmp2;
                        closure_0 = undefined;
                        if (outer1_0.sourceUris.length > 1) {
                          const _console = console;
                          const _HermesInternal = HermesInternal;
                          console.warn("DocumentPicker.saveDocuments: Android only allows to save one file at a time.\n\n      You provided an array with " + length + " entries.");
                        }
                        const NativeDocumentPicker2 = outer1_0(outer1_1[2]).NativeDocumentPicker;
                        c2 = 1;
                        c3 = 1;
                        const obj1 = { value: null, done: false };
                        obj1[0] = NativeDocumentPicker2.saveDocument(outer1_0);
                        return obj1;
                      }
                    } else if (1 === tmp5) {
                      if (arg0 === 1) {
                        c3 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c3 = 3;
                        const obj2 = { value: null, done: true };
                        obj2[0] = arg1;
                        return obj2;
                      } else {
                        closure_0 = arg1;
                        const NativeDocumentPicker = outer1_0(outer1_1[2]).NativeDocumentPicker;
                        c2 = 2;
                        c3 = 1;
                        const obj3 = { value: null, done: false };
                        obj3[0] = NativeDocumentPicker.writeDocuments(closure_0);
                        return obj3;
                      }
                    } else if (arg0 === 1) {
                      c3 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c3 = 3;
                      const obj4 = { value: null, done: true };
                      obj4[0] = arg1;
                      return obj4;
                    } else {
                      c3 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    }
                  } catch (tmp15) {
                    c3 = tmp;
                    throw tmp15;
                  }
                }
              })();
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arr;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arr;
            return obj2;
          } else {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arr.map(closure_4);
            return obj;
          }
        } catch (tmp10) {
          c3 = tmp;
          throw tmp10;
        }
      }
    })();
  });
  const _saveDocuments = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function keepOnlySpecifiedFields(uri) {
  return { uri: uri.uri, name: uri.name, error: uri.error };
}

export const saveDocuments = function saveDocuments(arg0) {
  const self = this;
  const apply = _saveDocuments.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};