// === Module 11225: NativeDocumentPicker ===

// Module 11225 (NativeDocumentPicker)
import _mod11226 from "module_11226" /* 11226 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11226.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};