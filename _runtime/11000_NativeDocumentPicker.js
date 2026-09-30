// === Module 11000: NativeDocumentPicker ===

// Module 11000 (NativeDocumentPicker)
import _mod11001 from "module_11001" /* 11001 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11001.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};