// === Module 10863: isKnownType ===

// Module 10863 (isKnownType)
import NativeDocumentPicker2 from "NativeDocumentPicker" /* 10864 */;

require = arg1;
const dependencyMap = arg6;
arg5.isKnownType = function isKnownType(kind, value) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = NativeDocumentPicker2.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};