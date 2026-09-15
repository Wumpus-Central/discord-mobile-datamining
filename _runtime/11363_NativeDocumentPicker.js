// _runtime/11363_NativeDocumentPicker.js
import _mod11364 from "metro/11364__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11364.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
