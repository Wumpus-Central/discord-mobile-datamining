// === Module 11702: NativeDocumentPicker ===

// Module 11702 (NativeDocumentPicker)
import _mod11703 from "module_11703" /* 11703 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11703.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};