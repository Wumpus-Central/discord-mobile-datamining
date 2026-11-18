// === Module 11143: NativeDocumentPicker ===

// Module 11143 (NativeDocumentPicker)
import _mod11144 from "module_11144" /* 11144 */;

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11144.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}