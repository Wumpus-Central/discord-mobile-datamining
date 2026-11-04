// === Module 11288: NativeDocumentPicker ===

// Module 11288 (NativeDocumentPicker)
import _mod11289 from "module_11289" /* 11289 */;

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11289.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}