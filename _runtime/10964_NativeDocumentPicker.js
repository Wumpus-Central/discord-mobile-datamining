// === Module 10964: NativeDocumentPicker ===

// Module 10964 (NativeDocumentPicker)
import _mod10965 from "module_10965" /* 10965 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod10965.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};