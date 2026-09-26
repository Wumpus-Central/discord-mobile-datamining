// === Module 10795: NativeDocumentPicker ===

// Module 10795 (NativeDocumentPicker)
import _mod10796 from "module_10796" /* 10796 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod10796.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};