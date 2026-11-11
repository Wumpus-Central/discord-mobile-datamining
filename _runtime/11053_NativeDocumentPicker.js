// === Module 11053: NativeDocumentPicker ===

// Module 11053 (NativeDocumentPicker)
import _mod11054 from "module_11054" /* 11054 */;

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11054.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}