// _runtime/11491_NativeDocumentPicker.js
import _mod11492 from "metro/11492__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11492.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
