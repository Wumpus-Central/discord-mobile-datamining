// _runtime/12750_NativeDocumentPicker.js
import _mod12751 from "metro/12751__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod12751.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
