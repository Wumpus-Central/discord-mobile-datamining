// _runtime/11760_NativeDocumentPicker.js
import _mod11761 from "metro/11761__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11761.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
