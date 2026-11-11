// _runtime/11053_NativeDocumentPicker.js
import _mod11054 from "metro/11054__.js";

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11054.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
