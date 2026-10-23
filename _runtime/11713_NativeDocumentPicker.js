// === Module 11713: NativeDocumentPicker ===

// Module 11713 (NativeDocumentPicker)
import _mod11714 from "module_11714" /* 11714 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11714.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};