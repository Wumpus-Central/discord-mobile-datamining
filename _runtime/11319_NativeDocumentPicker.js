// _runtime/11319_NativeDocumentPicker.js
import _mod11320 from "metro/11320__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11320.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
