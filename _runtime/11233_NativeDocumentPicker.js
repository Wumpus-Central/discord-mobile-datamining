// === Module 11233: NativeDocumentPicker ===

// Module 11233 (NativeDocumentPicker)
import _mod11234 from "module_11234" /* 11234 */;

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11234.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}