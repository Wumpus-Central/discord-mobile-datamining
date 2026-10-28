// === Module 12308: NativeDocumentPicker ===

// Module 12308 (NativeDocumentPicker)
import _mod12309 from "module_12309" /* 12309 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod12309.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};