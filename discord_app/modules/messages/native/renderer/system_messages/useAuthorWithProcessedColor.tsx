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
  const messageAuthor = useMessageAuthor.getMessageAuthor(message);
  const colorString = messageAuthor.colorString;
  const obj2 = { nick: messageAuthor.nick, colorString: null, colorStrings: null, guildId: null };
  let tmp4;
  ({ colorStrings, guildId } = messageAuthor);
  if (null != colorString) {
    tmp4 = processColor(colorString);
  }
  obj2.colorString = tmp4;
  obj2.colorStrings = enhanced_role_colors_EnhancedRoleColorUtils.processColorStrings(colorStrings);
  obj2.guildId = guildId;
  return obj2;
};
export const getUserAuthorWithProcessedColor = function getUserAuthorWithProcessedColor(user, channel) {
  const userAuthor = useMessageAuthor.getUserAuthor(user, channel);
  const colorString = userAuthor.colorString;
  const obj2 = { nick: userAuthor.nick, colorString: null, colorStrings: null, guildId: null };
  let tmp4;
  ({ colorStrings, guildId } = userAuthor);
  if (null != colorString) {
    tmp4 = processColor(colorString);
  }
  obj2.colorString = tmp4;
  obj2.colorStrings = enhanced_role_colors_EnhancedRoleColorUtils.processColorStrings(colorStrings);
  obj2.guildId = guildId;
  return obj2;
};
