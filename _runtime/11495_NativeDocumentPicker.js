// _runtime/11495_NativeDocumentPicker.js
import _mod11496 from "metro/11496__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11496.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
