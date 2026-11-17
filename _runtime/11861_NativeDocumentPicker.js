// === Module 11861: NativeDocumentPicker ===

// Module 11861 (NativeDocumentPicker)
import _mod11862 from "module_11862" /* 11862 */;

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11862.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}