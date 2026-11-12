// === Module 11047: NativeDocumentPicker ===

// Module 11047 (NativeDocumentPicker)
import _mod11048 from "module_11048" /* 11048 */;

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11048.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}