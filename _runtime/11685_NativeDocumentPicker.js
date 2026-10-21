// === Module 11685: NativeDocumentPicker ===

// Module 11685 (NativeDocumentPicker)
import _mod11686 from "module_11686" /* 11686 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11686.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};