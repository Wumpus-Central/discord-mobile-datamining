// === Module 8009: ApplicationCommandSourceSystemMessage ===

// Module 8009 (ApplicationCommandSourceSystemMessage)
import Constants from "Constants" /* 1074 */;
import ChannelAutocompleteConstants from "ChannelAutocompleteConstants" /* 5000 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7962 */;
import createCommonMessageDefault from "createCommonMessage" /* 7964 */;
import ApplicationCommands from "ApplicationCommands" /* 8010 */;
import size from "module_2" /* 2 */;

const MessageTypes = Constants.MessageTypes;
const COMMAND_SENTINEL = ChannelAutocompleteConstants.COMMAND_SENTINEL;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ApplicationCommandSourceSystemMessage.tsx");

export const createApplicationCommandSourceSystemMessage = function createApplicationCommandSourceSystemMessage(message) {
  message = message.message;
  let obj = ApplicationCommands;
  const applicationCommand = obj.getApplicationCommand(message.content);
  const application = message.application;
  if (application != null) {
    const name = application.name;
  }
  if (null != applicationCommand) {
    if (null != name) {
      const messageAuthorWithProcessedColor = tmp(7960).getMessageAuthorWithProcessedColor(message);
      const intl = tmp(1114).intl;
      obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: null, commandName: null, applicationName: null };
      obj = { message, author: messageAuthorWithProcessedColor, roleStyle: message.roleStyle };
      obj.usernameOnClick = formatUsernameOnClickDefault(obj);
      if (message.type === MessageTypes.CHAT_INPUT_COMMAND) {
        const _HermesInternal = HermesInternal;
        let name2 = "" + COMMAND_SENTINEL + applicationCommand.name;
      } else {
        name2 = applicationCommand.name;
      }
      const obj1 = { content: null };
      obj.commandName = name2;
      obj.applicationName = name;
      obj1.content = intl.formatToParts(tmp(1114).t["1Zm+zw"], obj);
      const merged = Object.assign(createCommonMessageDefault(message));
      return obj1;
    }
  }
  return null;
};