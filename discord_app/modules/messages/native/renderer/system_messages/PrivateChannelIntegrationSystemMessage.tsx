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
  message,
  type,
) {
  let privateChannelIntegrationAddedSystemMessageASTContent;
  message = message.message;
  const roleStyle = message.roleStyle;
  const obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp5 = formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle });
  const application = message.application;
  let bot;
  if (application != null) {
    bot = application.bot;
  }
  if (type === MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED) {
    const obj3 = {
      application,
      username: messageAuthorWithProcessedColor.nick,
      usernameOnClick: tmp5,
      applicationNameOnClick: tmp7,
    };
    const tmpResult = PrivateChannelIntegrationSystemMessageUtils;
    privateChannelIntegrationAddedSystemMessageASTContent =
      tmpResult.getPrivateChannelIntegrationAddedSystemMessageASTContent(obj3);
  } else {
    const obj4 = {
      application,
      username: messageAuthorWithProcessedColor.nick,
      usernameOnClick: tmp5,
      applicationNameOnClick: tmp7,
    };
    const tmpResult2 = PrivateChannelIntegrationSystemMessageUtils;
    privateChannelIntegrationAddedSystemMessageASTContent =
      tmpResult2.getPrivateChannelIntegrationRemovedSystemMessageASTContent(obj4);
  }
  const obj5 = { content: privateChannelIntegrationAddedSystemMessageASTContent };
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj5;
};
