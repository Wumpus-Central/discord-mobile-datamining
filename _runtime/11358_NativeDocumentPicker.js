// === Module 11358: NativeDocumentPicker ===

// Module 11358 (NativeDocumentPicker)
import _mod11359 from "module_11359" /* 11359 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11359.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};