// === Module 7595: react-native ===

// Module 7595 (react-native)
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const processColor = react_native.processColor;
const result = size.fileFinishedImporting("modules/messages/native/renderer/RowGeneratorStyleSheet.tsx");

export const processColorOrThrow = function processColorOrThrow(RED_400) {
  const tmp = processColor(RED_400);
  if (null == tmp) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Unable to parse color: \"" + RED_400 + "\"");
    throw error;
  } else {
    return tmp;
  }
};