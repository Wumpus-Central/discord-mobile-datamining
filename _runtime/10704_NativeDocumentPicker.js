// === Module 10704: NativeDocumentPicker ===

// Module 10704 (NativeDocumentPicker)
import _mod10705 from "module_10705" /* 10705 */;

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod10705.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}