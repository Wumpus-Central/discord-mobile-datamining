// === Module 11296: NativeDocumentPicker ===

// Module 11296 (NativeDocumentPicker)
import _mod11297 from "module_11297" /* 11297 */;

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11297.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}