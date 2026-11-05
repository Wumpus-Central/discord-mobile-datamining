// _runtime/11296_NativeDocumentPicker.js
import _mod11297 from "metro/11297__.js";

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11297.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
