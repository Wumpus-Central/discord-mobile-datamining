// _runtime/11635_NativeDocumentPicker.js
import _mod11636 from "metro/11636__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11636.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
