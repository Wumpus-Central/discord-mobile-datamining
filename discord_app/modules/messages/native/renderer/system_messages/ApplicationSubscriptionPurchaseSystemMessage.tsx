// discord_app/modules/messages/native/renderer/system_messages/ApplicationSubscriptionPurchaseSystemMessage.tsx
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import ApplicationSubscriptionSystemMessageUtils from "../../../../premium_apps/ApplicationSubscriptionSystemMessageUtils.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/ApplicationSubscriptionPurchaseSystemMessage.tsx",
);

export const createApplicationSubscriptionPurchaseSystemMessage =
  function createApplicationSubscriptionPurchaseSystemMessage(message) {
    let getApplicationSubscriptionSystemMessageASTContent;
    let obj3;
    message = message.message;
    const roleStyle = message.roleStyle;
    const obj = useAuthorWithProcessedColor;
    const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
    const obj2 = { content: getApplicationSubscriptionSystemMessageASTContent(obj3) };
    getApplicationSubscriptionSystemMessageASTContent =
      ApplicationSubscriptionSystemMessageUtils.getApplicationSubscriptionSystemMessageASTContent;
    obj3 = {
      application: message.application,
      username: messageAuthorWithProcessedColor.nick,
      usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }),
    };
    const merged = Object.assign(createCommonMessageDefault(message));
    return obj2;
  };
