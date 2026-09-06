// _runtime/11233__saveDocuments.js
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";

const require = fn;
let closure_3 = async function _saveDocuments() {
  closure_1 = tmp2;
  await asyncGeneratorStep(async () => {
    if (tmp2.sourceUris.length > 1) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.warn(
        "DocumentPicker.saveDocuments: Android only allows to save one file at a time.\n\n      You provided an array with " +
          length +
          " entries.",
      );
    }
    const NativeDocumentPicker2 = tmp2(11226).NativeDocumentPicker;
    await NativeDocumentPicker2.saveDocument(tmp2);
    closure_128_0 = value;
    const NativeDocumentPicker = tmp2(11226).NativeDocumentPicker;
    await NativeDocumentPicker.writeDocuments(closure_128_0);
    return value;
  })();
  return value.map(closure_129_4);
};
function keepOnlySpecifiedFields(uri) {
  return { uri: uri.uri, name: uri.name, error: uri.error };
}
const Platform = fn(17).Platform;

export const saveDocuments = function saveDocuments(arg0) {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
