// === Module 11760: NativeDocumentPicker ===

// Module 11760 (NativeDocumentPicker)
import _mod11761 from "module_11761" /* 11761 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11761.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};