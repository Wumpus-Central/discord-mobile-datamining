// === Module 11035: NativeDocumentPicker ===

// Module 11035 (NativeDocumentPicker)
import _mod11036 from "module_11036" /* 11036 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11036.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};