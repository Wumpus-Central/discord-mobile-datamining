// _runtime/11702_NativeDocumentPicker.js
import _mod11703 from "metro/11703__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11703.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
