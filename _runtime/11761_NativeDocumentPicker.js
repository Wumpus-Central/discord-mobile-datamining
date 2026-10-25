// _runtime/11761_NativeDocumentPicker.js
import _mod11762 from "metro/11762__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11762.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
