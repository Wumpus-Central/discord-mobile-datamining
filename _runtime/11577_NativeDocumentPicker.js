// _runtime/11577_NativeDocumentPicker.js
import _mod11578 from "metro/11578__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11578.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
