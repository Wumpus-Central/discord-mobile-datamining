// discord_app/modules/application_commands/DraftCommandUtils.tsx
import ChannelAutocompleteConstants from "../channel_autocomplete/ChannelAutocompleteConstants.tsx";
import DraftCommand from "DraftCommand.tsx";
import ApplicationCommandQueryApiAll from "ApplicationCommandQueryApi.tsx";
import size from "../../../_runtime/metro/00002__.js";

const COMMAND_SENTINEL = ChannelAutocompleteConstants.COMMAND_SENTINEL;
const result = size.fileFinishedImporting("modules/application_commands/DraftCommandUtils.tsx");

export const toDraftCommand = function toDraftCommand(activeCommand, result1) {
  function getCommandTextPrefix(activeCommand, result1) {
    const items = [,];
    ({ displayName: arr[0], untranslatedName: arr[1] } = activeCommand);
    const obj = items[Symbol.iterator]();
    while (obj !== undefined) {
      let _HermesInternal = HermesInternal;
      let combined = "" + COMMAND_SENTINEL + tmp;
      if (result1 !== combined) {
        let _HermesInternal2 = HermesInternal;
      }
      obj.return();
      return combined;
    }
    return null;
  }
  if (null == activeCommand) {
    return null;
  } else {
    const tmp = result1;
    const tmp2 = getCommandTextPrefix(activeCommand, result1);
    let tmp3 = null;
    if (null != tmp2) {
      let obj = { commandId: null, applicationId: null, commandText: tmp2 };
      ({ id: obj.commandId, applicationId: obj.applicationId } = activeCommand);
      tmp3 = obj;
    }
    return tmp3;
  }
};
export const resolveDraftCommand = function resolveDraftCommand(channel, text, draftCommand) {
  let command;
  let section;
  if (null != draftCommand) {
    const obj4 = DraftCommand;
    if (obj4.isDraftCommandValidForText(draftCommand, text)) {
      const obj2 = { channel, type: "channel" };
      const obj = ApplicationCommandQueryApiAll;
      const cachedCommand = obj.getCachedCommand(obj2, draftCommand.commandId, draftCommand.applicationId);
      ({ command, section } = cachedCommand);
      let tmp4 = null;
      if (null != command) {
        const obj3 = { command, section };
        if (section == null) {
          section = null;
        }
        tmp4 = obj3;
      }
      return tmp4;
    }
  }
  return null;
};
