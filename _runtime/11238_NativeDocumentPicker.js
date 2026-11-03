// === Module 11238: NativeDocumentPicker ===

// Module 11238 (NativeDocumentPicker)
import _mod11239 from "module_11239" /* 11239 */;

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11239.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}