// _runtime/12265_NativeDocumentPicker.js
import _mod12266 from "metro/12266__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod12266.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
