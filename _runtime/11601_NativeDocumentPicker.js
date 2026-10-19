// _runtime/11601_NativeDocumentPicker.js
import _mod11602 from "metro/11602__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11602.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
