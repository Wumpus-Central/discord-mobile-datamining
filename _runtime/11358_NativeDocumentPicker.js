// _runtime/11358_NativeDocumentPicker.js
import _mod11359 from "metro/11359__.js";

require = arg1;
const dependencyMap = arg6;

export const isKnownType = function isKnownType(kind) {
  ({ kind, value } = kind);
  const NativeDocumentPicker = _mod11359.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};
