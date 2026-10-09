// === Module 12750: NativeDocumentPicker ===

// Module 12750 (NativeDocumentPicker)
import _mod12751 from "module_12751" /* 12751 */;

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod12751.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};