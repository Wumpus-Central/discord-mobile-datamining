// _runtime/10703_NativeDocumentPicker.js
import _mod10704 from "metro/10704__.js";

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod10704.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
