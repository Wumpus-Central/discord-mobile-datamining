// discord_app/modules/messages/native/renderer/system_messages/StageSpeakerSystemMessage.tsx
import intl2 from "../../../../../intl/index.native.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/StageSpeakerSystemMessage.tsx",
);

export const createStageSpeakerSystemMessage = function createStageSpeakerSystemMessage(message) {
  let V4uCm4;
  let formatToParts;
  let obj3;
  message = message.message;
  const roleStyle = message.roleStyle;
  const obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const obj2 = { content: formatToParts(V4uCm4, obj3) };
  const intl = intl2.intl;
  formatToParts = intl.formatToParts;
  obj3 = {
    username: messageAuthorWithProcessedColor.nick,
    usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }),
  };
  V4uCm4 = intl2.t.V4uCm4;
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj2;
};
