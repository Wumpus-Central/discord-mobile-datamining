// === Module 11371: NativeDocumentPicker ===

// Module 11371 (NativeDocumentPicker)
import _mod11372 from "module_11372" /* 11372 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11372.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};