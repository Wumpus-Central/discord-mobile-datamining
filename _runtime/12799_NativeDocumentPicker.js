// === Module 12799: NativeDocumentPicker ===

// Module 12799 (NativeDocumentPicker)
import _mod12800 from "module_12800" /* 12800 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod12800.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};