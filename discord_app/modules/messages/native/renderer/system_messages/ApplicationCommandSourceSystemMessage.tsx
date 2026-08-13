// discord_app/modules/messages/native/renderer/system_messages/ApplicationCommandSourceSystemMessage.tsx
import { MessageTypes } from "ME";
import { COMMAND_SENTINEL } from "regExp";
import { getApplicationCommand } from "../../../ApplicationCommands.tsx";
import { createCommonMessage } from "createCommonMessage.tsx";
import { formatUsernameOnClick } from "formatUsernameOnClick.tsx";

const result = require("getApplicationCommand").fileFinishedImporting("modules/messages/native/renderer/system_messages/ApplicationCommandSourceSystemMessage.tsx");

export const createApplicationCommandSourceSystemMessage = function createApplicationCommandSourceSystemMessage(message) {
  message = message.message;
  let obj = getApplicationCommand;
  const applicationCommand = obj.getApplicationCommand(message.content);
  const application = message.application;
  if (application != null) {
    const name = application.name;
  }
  if (null != applicationCommand) {
    if (null != name) {
      const messageAuthorWithProcessedColor = tmp(8114).getMessageAuthorWithProcessedColor(message);
      const intl = tmp(1236).intl;
      obj = { username: null, usernameOnClick: null, commandName: null, applicationName: null };
      obj[0] = messageAuthorWithProcessedColor.nick;
      obj = { message: null, author: null, roleStyle: null };
      obj[0] = message;
      obj[1] = messageAuthorWithProcessedColor;
      obj[2] = message.roleStyle;
      obj[1] = formatUsernameOnClick(obj);
      if (message.type === MessageTypes.CHAT_INPUT_COMMAND) {
        const _HermesInternal = HermesInternal;
        let name2 = "" + COMMAND_SENTINEL + applicationCommand.name;
      } else {
        name2 = applicationCommand.name;
      }
      const obj1 = { content: null };
      obj[2] = name2;
      obj[3] = name;
      obj1[0] = intl.formatToParts(tmp(1236).t["1Zm+zw"], obj);
      const merged = Object.assign(createCommonMessage(message));
      return obj1;
    }
  }
  return null;
};