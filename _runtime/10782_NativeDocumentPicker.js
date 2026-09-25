// === Module 10782: NativeDocumentPicker ===

// Module 10782 (NativeDocumentPicker)
import _mod10783 from "module_10783" /* 10783 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod10783.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};