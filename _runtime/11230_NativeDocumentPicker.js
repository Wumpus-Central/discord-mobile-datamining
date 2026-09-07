// === Module 11230: NativeDocumentPicker ===

// Module 11230 (NativeDocumentPicker)
import _mod11231 from "module_11231" /* 11231 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11231.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};