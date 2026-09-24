// === Module 11577: NativeDocumentPicker ===

// Module 11577 (NativeDocumentPicker)
import _mod11578 from "module_11578" /* 11578 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11578.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};