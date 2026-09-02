// discord_app/modules/messages/native/renderer/system_messages/PrivateChannelIntegrationSystemMessage.tsx
import set from "../../../../../../_runtime/00002_set.js";
import ME from "../../../../../Constants.tsx";
import getMessageAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";

const MessageTypes = ME.MessageTypes;
const result = set.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/PrivateChannelIntegrationSystemMessage.tsx",
);

export const createPrivateChannelIntegrationSystemMessage = function createPrivateChannelIntegrationSystemMessage(
  roleStyle,
  type,
) {
  const message = roleStyle.message;
  let obj = getMessageAuthorWithProcessedColor;
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
    obj = { action: "bindUserMenu", userId: null, messageChannelId: null, medium: true };
    obj[1] = application.bot.id;
    obj[2] = message.channel_id;
  }
  if (type === MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED) {
    let tmpResult = tmp(7914);
    obj = { application: null, username: null, usernameOnClick: null, applicationNameOnClick: null };
    obj[0] = application;
    obj[1] = messageAuthorWithProcessedColor.nick;
    obj[2] = tmp5;
    obj[3] = tmp7;
    let privateChannelIntegrationAddedSystemMessageASTContent =
      tmpResult.getPrivateChannelIntegrationAddedSystemMessageASTContent(obj);
  } else {
    tmpResult = tmp(7914);
    obj1 = { application: null, username: null, usernameOnClick: null, applicationNameOnClick: null };
    obj1[0] = application;
    obj1[1] = messageAuthorWithProcessedColor.nick;
    obj1[2] = tmp5;
    obj1[3] = tmp7;
    privateChannelIntegrationAddedSystemMessageASTContent =
      tmpResult.getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj1);
  }
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return { content: privateChannelIntegrationAddedSystemMessageASTContent };
};
