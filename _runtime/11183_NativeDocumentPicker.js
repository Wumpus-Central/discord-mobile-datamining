// _runtime/11183_NativeDocumentPicker.js
import _mod11184 from "metro/11184__.js";

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11184.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
