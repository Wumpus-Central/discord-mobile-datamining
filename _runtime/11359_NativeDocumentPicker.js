// _runtime/11359_NativeDocumentPicker.js
import _mod11360 from "metro/11360__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11360.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
