// === Module 11491: NativeDocumentPicker ===

// Module 11491 (NativeDocumentPicker)
import _mod11492 from "module_11492" /* 11492 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11492.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};