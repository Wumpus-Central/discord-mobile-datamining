// === Module 11022: react-native ===

// Module 11022 (react-native)
import react_native from "react-native" /* 11023 */;


export const isKnownType = function isKnownType(kind) {
  let value;
  ({ kind, value } = kind);
  const NativeDocumentPicker = react_native.NativeDocumentPicker;
  return NativeDocumentPicker.isKnownType(kind, value);
};