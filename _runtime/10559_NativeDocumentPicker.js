// _runtime/10559_NativeDocumentPicker.js
import _mod10560 from "metro/10560__.js";

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod10560.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
