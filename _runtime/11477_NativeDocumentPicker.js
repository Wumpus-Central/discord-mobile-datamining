// === Module 11477: NativeDocumentPicker ===

// Module 11477 (NativeDocumentPicker)
import _mod11478 from "module_11478" /* 11478 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11478.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};