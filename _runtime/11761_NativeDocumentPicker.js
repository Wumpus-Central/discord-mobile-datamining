// === Module 11761: NativeDocumentPicker ===

// Module 11761 (NativeDocumentPicker)
import _mod11762 from "module_11762" /* 11762 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11762.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};