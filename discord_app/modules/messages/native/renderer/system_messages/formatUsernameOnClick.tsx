// === Module 7962: formatUsernameOnClick ===

// Module 7962 (formatUsernameOnClick)
import processColorStrings from "processColorStrings" /* 7961 */;
import createDisplayNameStylesMobile from "createDisplayNameStylesMobile" /* 7963 */;
import closure_2 from "mergeGuildAvatar" /* 1371 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/formatUsernameOnClick.tsx");

export default function formatUsernameOnClick(arg0) {
  ({ userId, message, author, roleStyle, messageChannelId } = arg0);
  ({ colorString, guildId } = author);
  if (userId == null) {
    userId = message.author.id;
  }
  let obj = processColorStrings;
  const result = obj.isNativeMessageEligibleForEnhancedRoleColors(guildId, userId);
  user = user.getUser(userId);
  if (user == null) {
    author = null;
    if (userId === message.author.id) {
      author = message.author;
    }
    user = author;
  }
  obj = { action: "bindUserMenu", userId, linkColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null, messageChannelId: null, medium: true, fontId: null };
  let tmp7 = null;
  const displayNameFontIdForMobileUser = createDisplayNameStylesMobile.getDisplayNameFontIdForMobileUser(user, guildId);
  if ("username" === roleStyle) {
    tmp7 = colorString;
  }
  obj[2] = tmp7;
  obj[3] = colorString;
  let colorStrings = null;
  if (result) {
    colorStrings = author.colorStrings;
  }
  obj[4] = colorStrings;
  obj[5] = "dot" === roleStyle && null != colorString;
  if (messageChannelId == null) {
    messageChannelId = message.channel_id;
  }
  obj[6] = messageChannelId;
  obj[8] = displayNameFontIdForMobileUser;
  return obj;
};