// _runtime/11622_NativeDocumentPicker.js
import _mod11623 from "metro/11623__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11623.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
