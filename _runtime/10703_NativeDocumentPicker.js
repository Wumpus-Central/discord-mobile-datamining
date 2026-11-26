// === Module 10703: NativeDocumentPicker ===

// Module 10703 (NativeDocumentPicker)
import _mod10704 from "module_10704" /* 10704 */;

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod10704.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}