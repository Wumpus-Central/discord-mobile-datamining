// === Module 11063: NativeDocumentPicker ===

// Module 11063 (NativeDocumentPicker)
import _mod11064 from "module_11064" /* 11064 */;

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11064.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}