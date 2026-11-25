// _runtime/10658_NativeDocumentPicker.js
import _mod10659 from "metro/10659__.js";

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod10659.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
