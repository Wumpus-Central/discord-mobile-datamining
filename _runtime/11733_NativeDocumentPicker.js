// _runtime/11733_NativeDocumentPicker.js
import _mod11734 from "metro/11734__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11734.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
