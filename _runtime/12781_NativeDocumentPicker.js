// === Module 12781: NativeDocumentPicker ===

// Module 12781 (NativeDocumentPicker)
import _mod12782 from "module_12782" /* 12782 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod12782.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};