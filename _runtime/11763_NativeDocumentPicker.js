// _runtime/11763_NativeDocumentPicker.js
import _mod11764 from "metro/11764__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11764.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
