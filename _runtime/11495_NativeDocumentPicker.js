// === Module 11495: NativeDocumentPicker ===

// Module 11495 (NativeDocumentPicker)
import _mod11496 from "module_11496" /* 11496 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11496.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};