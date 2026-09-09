// === Module 11257: NativeDocumentPicker ===

// Module 11257 (NativeDocumentPicker)
import _mod11258 from "module_11258" /* 11258 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11258.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};