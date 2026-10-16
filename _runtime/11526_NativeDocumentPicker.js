// === Module 11526: NativeDocumentPicker ===

// Module 11526 (NativeDocumentPicker)
import _mod11527 from "module_11527" /* 11527 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11527.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};