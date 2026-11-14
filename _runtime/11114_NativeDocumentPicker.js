// === Module 11114: NativeDocumentPicker ===

// Module 11114 (NativeDocumentPicker)
import _mod11115 from "module_11115" /* 11115 */;

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11115.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}