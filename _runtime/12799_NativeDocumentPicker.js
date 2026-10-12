// _runtime/12799_NativeDocumentPicker.js
import _mod12800 from "metro/12800__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod12800.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
