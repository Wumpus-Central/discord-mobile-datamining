// _runtime/metro/11043__.js
import react_native from "../00017_react-native.js";
import _asyncToGenerator from "00005__asyncToGenerator.js";

let closure_1;

let obj = function _saveDocuments() {
  obj = _asyncToGenerator(async (arg0) => {
    let c2;
    let c3;
    let closure_0;
    if (arg0 === 1) {
      throw value;
    }
    if (arg0 === 2) {
      return value;
    }
    await _asyncToGenerator(async () => {
      let tmp;
      closure_1 = tmp4;
      const tmp18 = tmp;
      if (tmp.sourceUris.length > 1) {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.warn(
          "DocumentPicker.saveDocuments: Android only allows to save one file at a time.\n\n      You provided an array with " +
            tmp.sourceUris.length +
            " entries.",
        );
      }
      const NativeDocumentPicker2 = tmp(closure_1[2]).NativeDocumentPicker;
      await NativeDocumentPicker2.saveDocument(tmp18);
      tmp = value;
      const NativeDocumentPicker = tmp(closure_1[2]).NativeDocumentPicker;
      await NativeDocumentPicker.writeDocuments(tmp);
      return value;
    })();
    if (arg0 === 1) {
      throw value;
    }
    if (arg0 === 2) {
      return value;
    }
    return value.map(closure_129_4);
  });
  return obj(...arguments);
};
function keepOnlySpecifiedFields(uri) {
  return { uri: uri.uri, name: uri.name, error: uri.error };
}
const Platform = react_native.Platform;

export const saveDocuments = function saveDocuments(arg0) {
  return obj(...arguments);
};
