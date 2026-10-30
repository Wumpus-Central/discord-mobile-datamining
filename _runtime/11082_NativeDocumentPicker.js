// === Module 11082: NativeDocumentPicker ===

// Module 11082 (NativeDocumentPicker)
import _mod11083 from "module_11083" /* 11083 */;

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11083.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}