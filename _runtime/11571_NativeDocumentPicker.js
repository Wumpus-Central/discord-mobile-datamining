// _runtime/11571_NativeDocumentPicker.js
import _mod11572 from "metro/11572__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11572.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
