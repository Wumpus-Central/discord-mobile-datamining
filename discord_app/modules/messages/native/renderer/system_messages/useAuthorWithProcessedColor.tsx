// === Module 7881: getMessageAuthorWithProcessedColor ===

// Module 7881 (getMessageAuthorWithProcessedColor)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import useNullableMessageAuthor from "useNullableMessageAuthor" /* 4747 */;
import processColorStrings from "processColorStrings" /* 7882 */;

const processColor = get_ActivityIndicator.processColor;
const result = set.fileFinishedImporting("modules/messages/native/renderer/system_messages/useAuthorWithProcessedColor.tsx");

export const getMessageAuthorWithProcessedColor = function getMessageAuthorWithProcessedColor(message) {
  let obj = useNullableMessageAuthor;
  const messageAuthor = obj.getMessageAuthor(message);
  const colorString = messageAuthor.colorString;
  obj = { nick: messageAuthor.nick, colorString: null, colorStrings: null, guildId: null };
  let tmp4;
  ({ colorStrings, guildId } = messageAuthor);
  if (null != colorString) {
    tmp4 = processColor(colorString);
  }
  obj[1] = tmp4;
  obj[2] = processColorStrings.processColorStrings(colorStrings);
  obj[3] = guildId;
  return obj;
};
export const getUserAuthorWithProcessedColor = function getUserAuthorWithProcessedColor(user, channel) {
  let obj = useNullableMessageAuthor;
  const userAuthor = obj.getUserAuthor(user, channel);
  const colorString = userAuthor.colorString;
  obj = { nick: userAuthor.nick, colorString: null, colorStrings: null, guildId: null };
  let tmp4;
  ({ colorStrings, guildId } = userAuthor);
  if (null != colorString) {
    tmp4 = processColor(colorString);
  }
  obj[1] = tmp4;
  obj[2] = processColorStrings.processColorStrings(colorStrings);
  obj[3] = guildId;
  return obj;
};