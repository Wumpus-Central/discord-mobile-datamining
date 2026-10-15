// === Module 11508: NativeDocumentPicker ===

// Module 11508 (NativeDocumentPicker)
import _mod11509 from "module_11509" /* 11509 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11509.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};