// === Module 7960: useAuthorWithProcessedColor ===

// Module 7960 (useAuthorWithProcessedColor)
import _mod17 from "module_17" /* 17 */;
import useMessageAuthor from "useMessageAuthor" /* 4793 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 7961 */;
import size from "module_2" /* 2 */;

const processColor = _mod17.processColor;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/useAuthorWithProcessedColor.tsx");

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