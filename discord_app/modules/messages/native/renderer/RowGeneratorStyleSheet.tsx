// discord_app/modules/messages/native/renderer/RowGeneratorStyleSheet.tsx
import set from "../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";

const processColor = get_ActivityIndicator.processColor;
const result = set.fileFinishedImporting("modules/messages/native/renderer/RowGeneratorStyleSheet.tsx");

export const processColorOrThrow = function processColorOrThrow(arg0) {
  const tmp = processColor(arg0);
  if (null == tmp) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error('Unable to parse color: "' + arg0 + '"');
    throw error;
  } else {
    return tmp;
  }
};
