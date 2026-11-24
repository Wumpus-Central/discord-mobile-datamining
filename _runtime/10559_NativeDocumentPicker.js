// === Module 10559: NativeDocumentPicker ===

// Module 10559 (NativeDocumentPicker)
import _mod10560 from "module_10560" /* 10560 */;

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod10560.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}