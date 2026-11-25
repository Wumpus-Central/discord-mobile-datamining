// === Module 10658: NativeDocumentPicker ===

// Module 10658 (NativeDocumentPicker)
import _mod10659 from "module_10659" /* 10659 */;

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod10659.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}