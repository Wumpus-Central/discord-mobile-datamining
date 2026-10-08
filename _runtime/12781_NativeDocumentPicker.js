// _runtime/12781_NativeDocumentPicker.js
import _mod12782 from "metro/12782__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod12782.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
