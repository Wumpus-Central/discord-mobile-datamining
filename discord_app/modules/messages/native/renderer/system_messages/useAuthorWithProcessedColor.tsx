// discord_app/modules/messages/native/renderer/system_messages/useAuthorWithProcessedColor.tsx
import _mod17 from "../../../../../../_runtime/metro/00017__.js";
import useMessageAuthor from "../../../useMessageAuthor.tsx";
import enhanced_role_colors_EnhancedRoleColorUtils from "../../../../premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const processColor = _mod17.processColor;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/useAuthorWithProcessedColor.tsx",
);

export const getMessageAuthorWithProcessedColor = function getMessageAuthorWithProcessedColor(message) {
  let obj = useMessageAuthor;
  const messageAuthor = obj.getMessageAuthor(message);
  const colorString = messageAuthor.colorString;
  obj = { nick: messageAuthor.nick, colorString: null, colorStrings: null, guildId: null };
  let tmp4;
  ({ colorStrings, guildId } = messageAuthor);
  if (null != colorString) {
    tmp4 = processColor(colorString);
  }
  obj.colorString = tmp4;
  obj.colorStrings = enhanced_role_colors_EnhancedRoleColorUtils.processColorStrings(colorStrings);
  obj.guildId = guildId;
  return obj;
};
export const getUserAuthorWithProcessedColor = function getUserAuthorWithProcessedColor(user, channel) {
  let obj = useMessageAuthor;
  const userAuthor = obj.getUserAuthor(user, channel);
  const colorString = userAuthor.colorString;
  obj = { nick: userAuthor.nick, colorString: null, colorStrings: null, guildId: null };
  let tmp4;
  ({ colorStrings, guildId } = userAuthor);
  if (null != colorString) {
    tmp4 = processColor(colorString);
  }
  obj.colorString = tmp4;
  obj.colorStrings = enhanced_role_colors_EnhancedRoleColorUtils.processColorStrings(colorStrings);
  obj.guildId = guildId;
  return obj;
};
