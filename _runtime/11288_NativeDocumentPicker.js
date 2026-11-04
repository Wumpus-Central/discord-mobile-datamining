// _runtime/11288_NativeDocumentPicker.js
import _mod11289 from "metro/11289__.js";

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11289.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
