// discord_app/modules/messages/native/renderer/system_messages/PrivateChannelIntegrationSystemMessage.tsx
import Constants from "../../../../../Constants.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import PrivateChannelIntegrationSystemMessageUtils from "../../../../private_channel_integrations/PrivateChannelIntegrationSystemMessageUtils.tsx";
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
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
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
    const obj2 = {
      action: "bindUserMenu",
      userId: application.bot.id,
      messageChannelId: message.channel_id,
      medium: true,
    };
  }
  if (type === MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED) {
    const obj3 = {
      application,
      username: messageAuthorWithProcessedColor.nick,
      usernameOnClick: tmp5,
      applicationNameOnClick: tmp7,
    };
    let privateChannelIntegrationAddedSystemMessageASTContent =
      PrivateChannelIntegrationSystemMessageUtils.getPrivateChannelIntegrationAddedSystemMessageASTContent(obj3);
    const tmpResult = PrivateChannelIntegrationSystemMessageUtils;
  } else {
    const obj4 = {
      application,
      username: messageAuthorWithProcessedColor.nick,
      usernameOnClick: tmp5,
      applicationNameOnClick: tmp7,
    };
    privateChannelIntegrationAddedSystemMessageASTContent =
      PrivateChannelIntegrationSystemMessageUtils.getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj4);
    const tmpResult2 = PrivateChannelIntegrationSystemMessageUtils;
  }
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return { content: privateChannelIntegrationAddedSystemMessageASTContent };
};
