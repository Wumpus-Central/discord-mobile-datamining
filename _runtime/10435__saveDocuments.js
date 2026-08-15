// _runtime/10435__saveDocuments.js
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
      let closure_1 = tmp2;
      yield v0(function*() {
        let closure_0 = tmp2;
        if (outer1_0.sourceUris.length > 1) {
          const _console = console;
          const _HermesInternal = HermesInternal;
          console.warn("DocumentPicker.saveDocuments: Android only allows to save one file at a time.\n\n      You provided an array with " + length + " entries.");
        }
        const NativeDocumentPicker2 = outer1_0(outer1_1[2]).NativeDocumentPicker;
        closure_0 = yield NativeDocumentPicker2.saveDocument(outer1_0);
        const NativeDocumentPicker = outer1_0(outer1_1[2]).NativeDocumentPicker;
        yield NativeDocumentPicker.writeDocuments(closure_0);
        return arg1;
      })();
      return arr.map(closure_4);
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