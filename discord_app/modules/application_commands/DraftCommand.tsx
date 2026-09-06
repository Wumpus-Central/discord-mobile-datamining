// discord_app/modules/application_commands/DraftCommand.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/application_commands/DraftCommand.tsx");

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
