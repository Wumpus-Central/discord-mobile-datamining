// _runtime/11000_NativeDocumentPicker.js
import _mod11001 from "metro/11001__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11001.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
