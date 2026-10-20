// === Module 11635: NativeDocumentPicker ===

// Module 11635 (NativeDocumentPicker)
import _mod11636 from "module_11636" /* 11636 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11636.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};