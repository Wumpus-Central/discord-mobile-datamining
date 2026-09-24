// === Module 12336: DraftCommandUtils ===

// Module 12336 (DraftCommandUtils)
import DraftCommand from "DraftCommand" /* 5194 */;
import ChannelAutocompleteConstants from "ChannelAutocompleteConstants" /* 5298 */;
import ApplicationCommandQueryApiAll from "ApplicationCommandQueryApi" /* 9613 */;
import size from "module_2" /* 2 */;

const COMMAND_SENTINEL = ChannelAutocompleteConstants.COMMAND_SENTINEL;
const result = size.fileFinishedImporting("modules/application_commands/DraftCommandUtils.tsx");

export const toDraftCommand = function toDraftCommand(activeCommand, result1) {
  if (null == activeCommand) {
    return null;
  } else {
    const tmp2 = (function getCommandTextPrefix(activeCommand, result1) {
      const items = [, ];
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
    })(activeCommand, result1);
    let tmp3 = null;
    if (null != tmp2) {
      let obj = { commandId: null, applicationId: null, commandText: null };
      ({ id: obj.commandId, applicationId: obj.applicationId } = activeCommand);
      obj.commandText = tmp2;
      tmp3 = obj;
    }
    return tmp3;
  }
};
export const resolveDraftCommand = function resolveDraftCommand(channel, text, draftCommand) {
  if (null != draftCommand) {
    if (obj4.isDraftCommandValidForText(draftCommand, text)) {
      const obj2 = { channel, type: "channel" };
      const cachedCommand = ApplicationCommandQueryApiAll.getCachedCommand(obj2, draftCommand.commandId, draftCommand.applicationId);
      ({ command, section } = cachedCommand);
      let tmp4 = null;
      if (null != command) {
        const obj3 = { command, section: null };
        if (section == null) {
          section = null;
        }
        obj3.section = section;
        tmp4 = obj3;
      }
      return tmp4;
    }
    obj4 = DraftCommand;
  }
  return null;
};