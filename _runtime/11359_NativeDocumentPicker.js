// === Module 11359: NativeDocumentPicker ===

// Module 11359 (NativeDocumentPicker)
import _mod11360 from "module_11360" /* 11360 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11360.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};