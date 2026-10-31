// === Module 11101: NativeDocumentPicker ===

// Module 11101 (NativeDocumentPicker)
import _mod11102 from "module_11102" /* 11102 */;

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11102.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}