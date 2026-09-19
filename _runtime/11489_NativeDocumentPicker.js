// === Module 11489: NativeDocumentPicker ===

// Module 11489 (NativeDocumentPicker)
import _mod11490 from "module_11490" /* 11490 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11490.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};