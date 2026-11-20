// _runtime/11063_NativeDocumentPicker.js
import _mod11064 from "metro/11064__.js";

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11064.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
