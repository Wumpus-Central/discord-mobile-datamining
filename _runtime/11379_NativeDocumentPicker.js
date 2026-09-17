// _runtime/11379_NativeDocumentPicker.js
import _mod11380 from "metro/11380__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11380.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
