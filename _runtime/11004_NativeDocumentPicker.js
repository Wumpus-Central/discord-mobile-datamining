// _runtime/11004_NativeDocumentPicker.js
import _mod11005 from "metro/11005__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11005.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
