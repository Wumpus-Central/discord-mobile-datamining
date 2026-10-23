// _runtime/11713_NativeDocumentPicker.js
import _mod11714 from "metro/11714__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11714.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
