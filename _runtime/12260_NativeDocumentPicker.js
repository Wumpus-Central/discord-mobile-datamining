// === Module 12260: NativeDocumentPicker ===

// Module 12260 (NativeDocumentPicker)
import _mod12261 from "module_12261" /* 12261 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod12261.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};