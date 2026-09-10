// _runtime/11297_NativeDocumentPicker.js
import _mod11298 from "metro/11298__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11298.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
