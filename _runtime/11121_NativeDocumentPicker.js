// _runtime/11121_NativeDocumentPicker.js
import _mod11122 from "metro/11122__.js";

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11122.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
