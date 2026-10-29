// === Module 12362: NativeDocumentPicker ===

// Module 12362 (NativeDocumentPicker)
import _mod12363 from "module_12363" /* 12363 */;

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod12363.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}