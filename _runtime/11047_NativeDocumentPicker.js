// _runtime/11047_NativeDocumentPicker.js
import _mod11048 from "metro/11048__.js";

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11048.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
