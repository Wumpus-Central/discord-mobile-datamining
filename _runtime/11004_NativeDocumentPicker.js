// === Module 11004: NativeDocumentPicker ===

// Module 11004 (NativeDocumentPicker)
import _mod11005 from "module_11005" /* 11005 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11005.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};