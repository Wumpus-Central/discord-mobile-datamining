// _runtime/12260_NativeDocumentPicker.js
import _mod12261 from "metro/12261__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod12261.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
