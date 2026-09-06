// _runtime/11225_NativeDocumentPicker.js
import _mod11226 from "metro/11226__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11226.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
