// _runtime/11238_NativeDocumentPicker.js
import _mod11239 from "metro/11239__.js";

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11239.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
