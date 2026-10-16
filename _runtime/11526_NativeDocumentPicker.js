// _runtime/11526_NativeDocumentPicker.js
import _mod11527 from "metro/11527__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11527.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
