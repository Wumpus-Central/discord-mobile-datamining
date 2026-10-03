// === Module 11022: NativeDocumentPicker ===

// Module 11022 (NativeDocumentPicker)
import _mod11023 from "module_11023" /* 11023 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11023.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};