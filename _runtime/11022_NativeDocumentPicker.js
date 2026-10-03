// _runtime/11022_NativeDocumentPicker.js
import _mod11023 from "metro/11023__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11023.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
