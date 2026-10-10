// === Module 8060: PrivateChannelIntegrationSystemMessage ===

// Module 8060 (PrivateChannelIntegrationSystemMessage)
import Constants from "Constants" /* 1085 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7978 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7980 */;
import createCommonMessageDefault from "createCommonMessage" /* 7982 */;
import PrivateChannelIntegrationSystemMessageUtils from "PrivateChannelIntegrationSystemMessageUtils" /* 8013 */;
import size from "module_2" /* 2 */;

const MessageTypes = Constants.MessageTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/PrivateChannelIntegrationSystemMessage.tsx");

export const createPrivateChannelIntegrationSystemMessage = function createPrivateChannelIntegrationSystemMessage(roleStyle, type) {
  const message = roleStyle.message;
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const tmp5 = formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  const application = message.application;
  let bot;
  if (application != null) {
    bot = application.bot;
  }
  if (null != bot) {
    const obj2 = { action: "bindUserMenu", userId: application.bot.id, messageChannelId: message.channel_id, medium: true };
  }
  if (type === MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED) {
    const obj3 = { application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp5, applicationNameOnClick: tmp7 };
    let privateChannelIntegrationAddedSystemMessageASTContent = PrivateChannelIntegrationSystemMessageUtils.getPrivateChannelIntegrationAddedSystemMessageASTContent(obj3);
    const tmpResult = PrivateChannelIntegrationSystemMessageUtils;
  } else {
    const obj4 = { application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp5, applicationNameOnClick: tmp7 };
    privateChannelIntegrationAddedSystemMessageASTContent = PrivateChannelIntegrationSystemMessageUtils.getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj4);
    const tmpResult2 = PrivateChannelIntegrationSystemMessageUtils;
  }
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return { content: privateChannelIntegrationAddedSystemMessageASTContent };
};