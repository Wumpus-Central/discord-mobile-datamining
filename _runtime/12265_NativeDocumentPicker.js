// === Module 12265: NativeDocumentPicker ===

// Module 12265 (NativeDocumentPicker)
import _mod12266 from "module_12266" /* 12266 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod12266.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};