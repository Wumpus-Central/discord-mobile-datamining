// _runtime/11251_NativeDocumentPicker.js
import _mod11252 from "metro/11252__.js";

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11252.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
