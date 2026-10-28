// _runtime/12308_NativeDocumentPicker.js
import _mod12309 from "metro/12309__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod12309.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
