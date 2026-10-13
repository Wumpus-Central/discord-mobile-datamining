// === Module 11274: NativeDocumentPicker ===

// Module 11274 (NativeDocumentPicker)
import _mod11275 from "module_11275" /* 11275 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11275.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};