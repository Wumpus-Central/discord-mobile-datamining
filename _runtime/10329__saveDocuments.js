// _runtime/10329__saveDocuments.js
import closure_2 from "00005_asyncGeneratorStep.js";
import { Platform } from "00017_get_ActivityIndicator.js";

const require = arg1;
function _saveDocuments() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0, arr) {
      closure_1 = tmp2;
      yield v0(function*() {
        closure_0 = tmp2;
        if (closure_1_0.sourceUris.length > 1) {
          const _console = console;
          const _HermesInternal = HermesInternal;
          console.warn("DocumentPicker.saveDocuments: Android only allows to save one file at a time.\n\n      You provided an array with " + length + " entries.");
        }
        const NativeDocumentPicker2 = closure_1_0(closure_1_1[2]).NativeDocumentPicker;
        closure_0 = yield NativeDocumentPicker2.saveDocument(closure_1_0);
        const NativeDocumentPicker = closure_1_0(closure_1_1[2]).NativeDocumentPicker;
        yield NativeDocumentPicker.writeDocuments(closure_0);
        return arg1;
      })();
      return arr.map(closure_4);
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