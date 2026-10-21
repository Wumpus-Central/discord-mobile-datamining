// _runtime/11685_NativeDocumentPicker.js
import _mod11686 from "metro/11686__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11686.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
