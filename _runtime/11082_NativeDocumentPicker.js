// _runtime/11082_NativeDocumentPicker.js
import _mod11083 from "metro/11083__.js";

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11083.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
