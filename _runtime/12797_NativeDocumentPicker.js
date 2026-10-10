// === Module 12797: NativeDocumentPicker ===

// Module 12797 (NativeDocumentPicker)
import _mod12798 from "module_12798" /* 12798 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod12798.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};