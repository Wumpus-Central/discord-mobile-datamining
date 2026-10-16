// _runtime/11529_NativeDocumentPicker.js
import _mod11530 from "metro/11530__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11530.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
