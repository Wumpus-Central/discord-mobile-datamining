// === Module 11571: NativeDocumentPicker ===

// Module 11571 (NativeDocumentPicker)
import _mod11572 from "module_11572" /* 11572 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11572.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};