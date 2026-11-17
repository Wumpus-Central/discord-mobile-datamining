// _runtime/11861_NativeDocumentPicker.js
import _mod11862 from "metro/11862__.js";

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11862.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
