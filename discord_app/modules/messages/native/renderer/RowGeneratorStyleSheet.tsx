// === Module 8161: processColorOrThrow ===

// Module 8161 (processColorOrThrow)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const processColor = get_ActivityIndicator.processColor;
const result = obj132.fileFinishedImporting("modules/messages/native/renderer/RowGeneratorStyleSheet.tsx");

export const processColorOrThrow = function processColorOrThrow(arg0) {
  const tmp = processColor(arg0);
  if (null == tmp) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("Unable to parse color: \"" + arg0 + "\"");
    throw error;
  } else {
    return tmp;
  }
};