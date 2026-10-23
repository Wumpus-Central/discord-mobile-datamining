// === Module 11733: NativeDocumentPicker ===

// Module 11733 (NativeDocumentPicker)
import _mod11734 from "module_11734" /* 11734 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11734.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};