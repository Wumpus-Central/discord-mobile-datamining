// _runtime/11489_NativeDocumentPicker.js
import _mod11490 from "metro/11490__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11490.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
