// === Module 11763: NativeDocumentPicker ===

// Module 11763 (NativeDocumentPicker)
import _mod11764 from "module_11764" /* 11764 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11764.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};