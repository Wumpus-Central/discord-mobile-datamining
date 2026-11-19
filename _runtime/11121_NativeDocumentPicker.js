// === Module 11121: NativeDocumentPicker ===

// Module 11121 (NativeDocumentPicker)
import _mod11122 from "module_11122" /* 11122 */;

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11122.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}