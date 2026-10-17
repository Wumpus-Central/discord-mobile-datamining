// _runtime/11585_NativeDocumentPicker.js
import _mod11586 from "metro/11586__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11586.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
