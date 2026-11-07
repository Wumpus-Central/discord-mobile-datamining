// _runtime/11233_NativeDocumentPicker.js
import _mod11234 from "metro/11234__.js";

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11234.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
