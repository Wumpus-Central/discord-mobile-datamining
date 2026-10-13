// _runtime/11274_NativeDocumentPicker.js
import _mod11275 from "metro/11275__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11275.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
