// discord_app/modules/messages/native/renderer/RowGeneratorStyleSheet.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import size from "../../../../../_runtime/metro/00002__.js";

const processColor = _mod17.processColor;
const result = size.fileFinishedImporting("modules/messages/native/renderer/RowGeneratorStyleSheet.tsx");

export const processColorOrThrow = function processColorOrThrow(RED_400) {
  const tmp = processColor(RED_400);
  if (null == tmp) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error('Unable to parse color: "' + RED_400 + '"');
    throw error;
  } else {
    return tmp;
  }
};
