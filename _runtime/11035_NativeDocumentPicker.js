// _runtime/11035_NativeDocumentPicker.js
import _mod11036 from "metro/11036__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11036.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
