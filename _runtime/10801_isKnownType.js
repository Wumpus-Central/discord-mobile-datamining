// === Module 10801: isKnownType ===

// Module 10801 (isKnownType)
import NativeDocumentPicker2 from "NativeDocumentPicker" /* 10802 */;

require = arg1;
const dependencyMap = arg6;
arg5.isKnownType = function isKnownType(kind, value) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = NativeDocumentPicker2.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};