// _runtime/11477_NativeDocumentPicker.js
import _mod11478 from "metro/11478__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11478.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
