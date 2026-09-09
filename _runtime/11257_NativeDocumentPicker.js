// _runtime/11257_NativeDocumentPicker.js
import _mod11258 from "metro/11258__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11258.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
