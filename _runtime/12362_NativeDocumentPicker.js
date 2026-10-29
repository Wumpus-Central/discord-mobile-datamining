// _runtime/12362_NativeDocumentPicker.js
import _mod12363 from "metro/12363__.js";

require = arg1;
const dependencyMap = arg6;

export function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod12363.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
}
