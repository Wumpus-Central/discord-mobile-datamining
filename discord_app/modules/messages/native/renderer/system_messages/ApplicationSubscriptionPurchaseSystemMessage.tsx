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
  function createApplicationSubscriptionPurchaseSystemMessage(roleStyle) {
    const message = roleStyle.message;
    const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
    const obj2 = { content: null };
    const obj3 = ApplicationSubscriptionSystemMessageUtils;
    obj2.content = obj3.getApplicationSubscriptionSystemMessageASTContent({
      application: message.application,
      username: messageAuthorWithProcessedColor.nick,
      usernameOnClick: formatUsernameOnClickDefault({
        message,
        author: messageAuthorWithProcessedColor,
        roleStyle: roleStyle.roleStyle,
      }),
    });
    const merged = Object.assign(createCommonMessageDefault(roleStyle));
    return obj2;
  };
