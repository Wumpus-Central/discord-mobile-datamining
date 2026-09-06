// === Module 11994: toDraftCommand ===

// Module 11994 (toDraftCommand)
import set from "set" /* 2 */;
import isDraftCommandValidForText from "isDraftCommandValidForText" /* 4903 */;
import regExp from "regExp" /* 5000 */;
import findCommandInSectionAll from "findCommandInSection" /* 9416 */;

const COMMAND_SENTINEL = regExp.COMMAND_SENTINEL;
const result = set.fileFinishedImporting("modules/application_commands/DraftCommandUtils.tsx");

export const toDraftCommand = function toDraftCommand(activeCommand, result1) {
  if (null == activeCommand) {
    return null;
  } else {
    let tmp2 = (function getCommandTextPrefix(activeCommand, result1) {
      const items = [, ];
      ({ displayName: arr[0], untranslatedName: arr[1] } = activeCommand);
      const obj = items[Symbol.iterator]();
      while (obj !== undefined) {
        let tmp2 = closure_3;
        let _HermesInternal = HermesInternal;
        let combined = "" + closure_3 + tmp;
        if (result1 !== combined) {
          let tmp5 = combined;
          let _HermesInternal2 = HermesInternal;
        }
        let tmp6 = obj;
        obj.return();
        return combined;
      }
      return null;
    })(activeCommand, result1);
    let tmp3 = null;
    if (null != tmp2) {
      let obj = { commandId: null, applicationId: null, commandText: null };
      ({ id: obj[0], applicationId: obj[1] } = activeCommand);
      obj[2] = tmp2;
      tmp3 = obj;
    }
    return tmp3;
  }
};
export const resolveDraftCommand = function resolveDraftCommand(channel, text, draftCommand) {
  if (null != draftCommand) {
    if (obj4.isDraftCommandValidForText(draftCommand, text)) {
      let obj = findCommandInSectionAll;
      obj = { channel: null, type: "channel" };
      obj[0] = channel;
      const cachedCommand = obj.getCachedCommand(obj, draftCommand.commandId, draftCommand.applicationId);
      ({ command, section } = cachedCommand);
      let tmp4 = null;
      if (null != command) {
        obj = { command: null, section: null };
        obj[0] = command;
        if (section == null) {
          section = null;
        }
        obj[1] = section;
        tmp4 = obj;
      }
      return tmp4;
    }
    obj4 = isDraftCommandValidForText;
  }
  return null;
};