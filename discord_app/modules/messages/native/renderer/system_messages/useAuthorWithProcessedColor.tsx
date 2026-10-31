// === Module 8418: useAuthorWithProcessedColor ===

// Module 8418 (useAuthorWithProcessedColor)
import _mod17 from "module_17" /* 17 */;
import useMessageAuthor from "useMessageAuthor" /* 6438 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 8419 */;
import size from "module_2" /* 2 */;

const processColor = _mod17.processColor;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/useAuthorWithProcessedColor.tsx");

export function getMessageAuthorWithProcessedColor(message) {
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
}
export function getUserAuthorWithProcessedColor(user, channel) {
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
}