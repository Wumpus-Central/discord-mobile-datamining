// === Module 11284: NativeDocumentPicker ===

// Module 11284 (NativeDocumentPicker)
import _mod11285 from "module_11285" /* 11285 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11285.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};