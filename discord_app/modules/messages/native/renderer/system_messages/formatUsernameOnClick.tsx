// === Module 7839: formatUsernameOnClick ===

// Module 7839 (formatUsernameOnClick)
import processColorStrings from "processColorStrings" /* 7838 */;
import createDisplayNameStylesMobile from "createDisplayNameStylesMobile" /* 7840 */;
import closure_2 from "mergeGuildAvatar" /* 1922 */;

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
  const displayNameFontIdForMobileUser = createDisplayNameStylesMobile.getDisplayNameFontIdForMobileUser(user, guildId);
  obj = { action: "bindUserMenu", userId, linkColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null, messageChannelId: null, medium: true };
  let tmp7 = null;
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
  if (null != displayNameFontIdForMobileUser) {
    obj = { fontId: null };
    obj[0] = displayNameFontIdForMobileUser;
    obj1 = obj;
  } else {
    obj1 = {};
  }
  const merged = Object.assign(obj1);
  return obj;
};