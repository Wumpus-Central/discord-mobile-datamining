// === Module 11529: NativeDocumentPicker ===

// Module 11529 (NativeDocumentPicker)
import _mod11530 from "module_11530" /* 11530 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11530.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};