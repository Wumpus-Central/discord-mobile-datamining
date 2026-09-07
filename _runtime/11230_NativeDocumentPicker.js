// _runtime/11230_NativeDocumentPicker.js
import _mod11231 from "metro/11231__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11231.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
