// === Module 7750: formatUsernameOnClick ===

// Module 7750 (formatUsernameOnClick)
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/formatUsernameOnClick.tsx");

export default function formatUsernameOnClick(arg0) {
  let author;
  let colorStrings;
  let guildId;
  let message;
  let messageChannelId;
  let roleStyle;
  let userId;
  ({ userId, message, author, roleStyle, messageChannelId } = arg0);
  const colorString = author.colorString;
  ({ colorStrings, guildId } = author);
  if (userId == null) {
    userId = message.author.id;
  }
  const obj = { action: "bindUserMenu", userId, linkColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null, messageChannelId: null, medium: true };
  let tmp = null;
  if ("username" === roleStyle) {
    tmp = colorString;
  }
  obj[2] = tmp;
  obj[3] = colorString;
  let tmp2 = null;
  if (obj2.isNativeMessageEligibleForEnhancedRoleColors(guildId, userId)) {
    tmp2 = colorStrings;
  }
  obj[4] = tmp2;
  obj[5] = "dot" === roleStyle && null != colorString;
  if (messageChannelId == null) {
    messageChannelId = message.channel_id;
  }
  obj[6] = messageChannelId;
  return obj;
};