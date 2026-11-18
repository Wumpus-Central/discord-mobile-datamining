// _runtime/11143_NativeDocumentPicker.js
import _mod11144 from "metro/11144__.js";

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11144.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
