// discord_app/modules/application_commands/DraftCommand.tsx
import set from "../../../_runtime/00002_set.js";

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
