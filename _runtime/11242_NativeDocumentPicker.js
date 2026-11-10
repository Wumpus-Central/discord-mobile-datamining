// _runtime/11242_NativeDocumentPicker.js
import _mod11243 from "metro/11243__.js";

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11243.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
