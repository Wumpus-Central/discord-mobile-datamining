// === Module 11242: NativeDocumentPicker ===

// Module 11242 (NativeDocumentPicker)
import _mod11243 from "module_11243" /* 11243 */;

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11243.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}