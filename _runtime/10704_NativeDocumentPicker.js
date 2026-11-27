// _runtime/10704_NativeDocumentPicker.js
import _mod10705 from "metro/10705__.js";

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod10705.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
