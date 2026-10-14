// _runtime/11284_NativeDocumentPicker.js
import _mod11285 from "metro/11285__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11285.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
