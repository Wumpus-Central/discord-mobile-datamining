// discord_app/modules/messages/native/renderer/system_messages/useAuthorWithProcessedColor.tsx
import set from "../../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import useNullableMessageAuthor from "../../../useMessageAuthor.tsx";
import processColorStrings from "../../../../premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx";

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