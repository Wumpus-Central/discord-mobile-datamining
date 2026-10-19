// === Module 11622: NativeDocumentPicker ===

// Module 11622 (NativeDocumentPicker)
import _mod11623 from "module_11623" /* 11623 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11623.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};