// _runtime/11114_NativeDocumentPicker.js
import _mod11115 from "metro/11115__.js";

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11115.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
