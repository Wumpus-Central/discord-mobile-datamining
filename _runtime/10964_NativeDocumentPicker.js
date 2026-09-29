// _runtime/10964_NativeDocumentPicker.js
import _mod10965 from "metro/10965__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod10965.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
