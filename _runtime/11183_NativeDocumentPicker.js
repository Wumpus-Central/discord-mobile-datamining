// === Module 11183: NativeDocumentPicker ===

// Module 11183 (NativeDocumentPicker)
import _mod11184 from "module_11184" /* 11184 */;

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11184.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}