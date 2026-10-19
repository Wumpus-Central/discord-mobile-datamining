// === Module 11601: NativeDocumentPicker ===

// Module 11601 (NativeDocumentPicker)
import _mod11602 from "module_11602" /* 11602 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11602.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};