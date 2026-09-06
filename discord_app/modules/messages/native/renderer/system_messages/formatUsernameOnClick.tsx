// === Module 7962: formatUsernameOnClick ===

// Module 7962 (formatUsernameOnClick)
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 7961 */;
import createDisplayNameStylesMobile from "createDisplayNameStylesMobile" /* 7963 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/formatUsernameOnClick.tsx");

export default function formatUsernameOnClick(arg0) {
  ({ userId, message, author, roleStyle, messageChannelId } = arg0);
  ({ colorString, guildId } = author);
  if (userId == null) {
    userId = message.author.id;
  }
  let obj = enhanced_role_colors_EnhancedRoleColorUtils;
  const result = obj.isNativeMessageEligibleForEnhancedRoleColors(guildId, userId);
  let user = UserStore.getUser(userId);
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
  obj.linkColor = tmp7;
  obj.roleColor = colorString;
  let colorStrings = null;
  if (result) {
    colorStrings = author.colorStrings;
  }
  obj.roleColors = colorStrings;
  obj.shouldShowRoleDot = "dot" === roleStyle && null != colorString;
  if (messageChannelId == null) {
    messageChannelId = message.channel_id;
  }
  obj.messageChannelId = messageChannelId;
  obj.fontId = displayNameFontIdForMobileUser;
  return obj;
};