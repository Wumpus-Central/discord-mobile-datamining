// discord_app/modules/messages/native/renderer/system_messages/ApplicationCommandSourceSystemMessage.tsx
import Constants from "../../../../../Constants.tsx";
import util from "../../../../../intl/index.native.tsx";
import ChannelAutocompleteConstants from "../../../../channel_autocomplete/ChannelAutocompleteConstants.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import ApplicationCommands from "../../../ApplicationCommands.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const MessageTypes = Constants.MessageTypes;
const COMMAND_SENTINEL = ChannelAutocompleteConstants.COMMAND_SENTINEL;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/ApplicationCommandSourceSystemMessage.tsx",
);

export const createApplicationCommandSourceSystemMessage = function createApplicationCommandSourceSystemMessage(
  message,
) {
  message = message.message;
  let obj = ApplicationCommands;
  const applicationCommand = obj.getApplicationCommand(message.content);
  const application = message.application;
  if (application != null) {
    const name = application.name;
  }
  if (null != applicationCommand) {
    if (null != name) {
      const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
      const intl = util.intl;
      obj = {
        username: messageAuthorWithProcessedColor.nick,
        usernameOnClick: null,
        commandName: null,
        applicationName: null,
      };
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
      obj1.content = intl.formatToParts(util.t["1Zm+zw"], obj);
      const merged = Object.assign(createCommonMessageDefault(message));
      return obj1;
    }
  }
  return null;
};
