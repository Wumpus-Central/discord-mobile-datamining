// _runtime/10427_isKnownType.js
import { NativeDocumentPicker } from "10428_NativeDocumentPicker.js";
const require = arg1;
const dependencyMap = arg6;
arg5.isKnownType = function isKnownType(kind, value) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = NativeDocumentPicker.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};