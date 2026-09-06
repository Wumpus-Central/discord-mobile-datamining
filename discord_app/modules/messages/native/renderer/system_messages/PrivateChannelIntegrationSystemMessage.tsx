// discord_app/modules/messages/native/renderer/system_messages/PrivateChannelIntegrationSystemMessage.tsx
import Constants from "../../../../../Constants.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const MessageTypes = Constants.MessageTypes;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/PrivateChannelIntegrationSystemMessage.tsx",
);

export const createPrivateChannelIntegrationSystemMessage = function createPrivateChannelIntegrationSystemMessage(
  roleStyle,
  type,
) {
  const message = roleStyle.message;
  let obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp5 = formatUsernameOnClickDefault({
    message,
    author: messageAuthorWithProcessedColor,
    roleStyle: roleStyle.roleStyle,
  });
  const application = message.application;
  let bot;
  if (application != null) {
    bot = application.bot;
  }
  if (null != bot) {
    obj = { action: "bindUserMenu", userId: application.bot.id, messageChannelId: message.channel_id, medium: true };
  }
  if (type === MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED) {
    let tmpResult = tmp(7996);
    obj = {
      application,
      username: messageAuthorWithProcessedColor.nick,
      usernameOnClick: tmp5,
      applicationNameOnClick: tmp7,
    };
    let privateChannelIntegrationAddedSystemMessageASTContent =
      tmpResult.getPrivateChannelIntegrationAddedSystemMessageASTContent(obj);
  } else {
    tmpResult = tmp(7996);
    const obj1 = {
      application,
      username: messageAuthorWithProcessedColor.nick,
      usernameOnClick: tmp5,
      applicationNameOnClick: tmp7,
    };
    privateChannelIntegrationAddedSystemMessageASTContent =
      tmpResult.getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj1);
  }
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return { content: privateChannelIntegrationAddedSystemMessageASTContent };
};
