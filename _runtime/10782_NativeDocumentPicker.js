// _runtime/10782_NativeDocumentPicker.js
import _mod10783 from "metro/10783__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod10783.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
