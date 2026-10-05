// discord_app/modules/messages/native/renderer/system_messages/useAuthorWithProcessedColor.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import useMessageAuthor from "../../../useMessageAuthor.tsx";
import enhanced_role_colors_EnhancedRoleColorUtils from "../../../../premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const processColor = react_native.processColor;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/useAuthorWithProcessedColor.tsx",
);

export const getMessageAuthorWithProcessedColor = function getMessageAuthorWithProcessedColor(message) {
  let colorStrings;
  let guildId;
  let tmp4;
  let tmpResult;
  const obj = useMessageAuthor;
  const messageAuthor = obj.getMessageAuthor(message);
  const colorString = messageAuthor.colorString;
  const obj2 = {
    nick: messageAuthor.nick,
    colorString: tmp4,
    colorStrings: tmpResult.processColorStrings(colorStrings),
    guildId,
  };
  tmp4 = undefined;
  ({ colorStrings, guildId } = messageAuthor);
  if (null != colorString) {
    tmp4 = processColor(colorString);
  }
  tmpResult = enhanced_role_colors_EnhancedRoleColorUtils;
  return obj2;
};
export const getUserAuthorWithProcessedColor = function getUserAuthorWithProcessedColor(user, channel) {
  let colorStrings;
  let guildId;
  let tmp4;
  let tmpResult;
  const obj = useMessageAuthor;
  const userAuthor = obj.getUserAuthor(user, channel);
  const colorString = userAuthor.colorString;
  const obj2 = {
    nick: userAuthor.nick,
    colorString: tmp4,
    colorStrings: tmpResult.processColorStrings(colorStrings),
    guildId,
  };
  tmp4 = undefined;
  ({ colorStrings, guildId } = userAuthor);
  if (null != colorString) {
    tmp4 = processColor(colorString);
  }
  tmpResult = enhanced_role_colors_EnhancedRoleColorUtils;
  return obj2;
};
