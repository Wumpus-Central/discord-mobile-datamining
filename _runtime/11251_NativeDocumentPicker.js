// === Module 11251: NativeDocumentPicker ===

// Module 11251 (NativeDocumentPicker)
import _mod11252 from "module_11252" /* 11252 */;

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11252.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}