// === Module 8031: PrivateChannelIntegrationSystemMessage ===

// Module 8031 (PrivateChannelIntegrationSystemMessage)
import Constants from "Constants" /* 1074 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7960 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7962 */;
import createCommonMessageDefault from "createCommonMessage" /* 7964 */;
import size from "module_2" /* 2 */;

const MessageTypes = Constants.MessageTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/PrivateChannelIntegrationSystemMessage.tsx");

export const createPrivateChannelIntegrationSystemMessage = function createPrivateChannelIntegrationSystemMessage(roleStyle, type) {
  const message = roleStyle.message;
  let obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp5 = formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
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
    obj = { application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp5, applicationNameOnClick: tmp7 };
    let privateChannelIntegrationAddedSystemMessageASTContent = tmpResult.getPrivateChannelIntegrationAddedSystemMessageASTContent(obj);
  } else {
    tmpResult = tmp(7996);
    const obj1 = { application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp5, applicationNameOnClick: tmp7 };
    privateChannelIntegrationAddedSystemMessageASTContent = tmpResult.getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj1);
  }
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return { content: privateChannelIntegrationAddedSystemMessageASTContent };
};