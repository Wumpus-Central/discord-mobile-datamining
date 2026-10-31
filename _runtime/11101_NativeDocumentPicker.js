// _runtime/11101_NativeDocumentPicker.js
import _mod11102 from "metro/11102__.js";

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11102.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
