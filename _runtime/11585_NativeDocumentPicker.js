// === Module 11585: NativeDocumentPicker ===

// Module 11585 (NativeDocumentPicker)
import _mod11586 from "module_11586" /* 11586 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11586.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};