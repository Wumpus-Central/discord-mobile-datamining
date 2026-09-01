// === Module 4856: isDraftCommandValidForText ===

// Module 4856 (isDraftCommandValidForText)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/application_commands/DraftCommand.tsx");

export const isDraftCommandValidForText = function isDraftCommandValidForText(command, substr) {
  let tmp = null != command;
  if (tmp) {
    let startsWithResult = substr === command.commandText;
    if (!startsWithResult) {
      const _HermesInternal = HermesInternal;
      startsWithResult = substr.startsWith("" + command.commandText + " ");
    }
    tmp = startsWithResult;
  }
  return tmp;
};