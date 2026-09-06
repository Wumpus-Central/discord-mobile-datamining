// discord_app/modules/messages/native/renderer/system_messages/StageStartSystemMessage.tsx
import util from "../../../../../intl/index.native.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/StageStartSystemMessage.tsx",
);

export const createStageStartSystemMessage = function createStageStartSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  const intl = util.intl;
  obj = {
    username: messageAuthorWithProcessedColor.nick,
    usernameOnClick: formatUsernameOnClickDefault({
      message,
      author: messageAuthorWithProcessedColor,
      roleStyle: roleStyle.roleStyle,
    }),
    topic: message.content,
  };
  obj.content = intl.formatToParts(util.t.aZtRW8, obj);
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj;
};
