// _runtime/10795_NativeDocumentPicker.js
import _mod10796 from "metro/10796__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod10796.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
