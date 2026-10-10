// _runtime/12797_NativeDocumentPicker.js
import _mod12798 from "metro/12798__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod12798.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
