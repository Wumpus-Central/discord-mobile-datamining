// _runtime/11371_NativeDocumentPicker.js
import _mod11372 from "metro/11372__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11372.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
