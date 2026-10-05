// discord_app/modules/messages/native/renderer/system_messages/ApplicationCommandSourceSystemMessage.tsx
import Constants from "../../../../../Constants.tsx";
import intl2 from "../../../../../intl/index.native.tsx";
import ChannelAutocompleteConstants from "../../../../channel_autocomplete/ChannelAutocompleteConstants.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import _slicedToArray from "../../../ApplicationCommands.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const MessageTypes = Constants.MessageTypes;
const COMMAND_SENTINEL = ChannelAutocompleteConstants.COMMAND_SENTINEL;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/ApplicationCommandSourceSystemMessage.tsx",
);

export const createApplicationCommandSourceSystemMessage = function createApplicationCommandSourceSystemMessage(
  message,
) {
  let name;
  let name2;
  let obj3;
  message = message.message;
  const roleStyle = message.roleStyle;
  const obj = _slicedToArray;
  const applicationCommand = obj.getApplicationCommand(message.content);
  const application = message.application;
  if (application != null) {
    name = application.name;
  }
  if (null != applicationCommand) {
    if (null != name) {
      const tmpResult = useAuthorWithProcessedColor;
      const messageAuthorWithProcessedColor = tmpResult.getMessageAuthorWithProcessedColor(message);
      const intl = intl2.intl;
      const formatToParts = intl.formatToParts;
      const obj2 = {
        username: messageAuthorWithProcessedColor.nick,
        usernameOnClick: formatUsernameOnClickDefault(obj3),
        commandName: name2,
        applicationName: name,
      };
      const prop = intl2.t["1Zm+zw"];
      obj3 = { message, author: messageAuthorWithProcessedColor, roleStyle };
      if (message.type === MessageTypes.CHAT_INPUT_COMMAND) {
        const _HermesInternal = HermesInternal;
        name2 = "" + COMMAND_SENTINEL + applicationCommand.name;
      } else {
        name2 = applicationCommand.name;
      }
      const obj4 = { content: formatToParts(prop, obj2) };
      const merged = Object.assign(createCommonMessageDefault(message));
      return obj4;
    }
  }
  return null;
};
