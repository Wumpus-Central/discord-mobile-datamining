// === Module 11363: NativeDocumentPicker ===

// Module 11363 (NativeDocumentPicker)
import _mod11364 from "module_11364" /* 11364 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11364.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};