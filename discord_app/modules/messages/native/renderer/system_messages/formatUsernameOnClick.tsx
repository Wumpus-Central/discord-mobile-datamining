// discord_app/modules/messages/native/renderer/system_messages/formatUsernameOnClick.tsx
import enhanced_role_colors_EnhancedRoleColorUtils from "../../../../premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx";
import createDisplayNameStylesMobile from "../../../../display_name_styles/native/createDisplayNameStylesMobile.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/formatUsernameOnClick.tsx");

export default function formatUsernameOnClick(arg0) {
  ({ userId, message, author, roleStyle, messageChannelId } = arg0);
  ({ colorString, guildId } = author);
  if (userId == null) {
    userId = message.author.id;
  }
  const result = enhanced_role_colors_EnhancedRoleColorUtils.isNativeMessageEligibleForEnhancedRoleColors(
    guildId,
    userId,
  );
  let user = UserStore.getUser(userId);
  if (user == null) {
    let author1 = null;
    if (userId === message.author.id) {
      author1 = message.author;
    }
    user = author1;
  }
  const obj2 = {
    action: "bindUserMenu",
    userId,
    linkColor: null,
    roleColor: null,
    roleColors: null,
    shouldShowRoleDot: null,
    messageChannelId: null,
    medium: true,
    fontId: null,
  };
  let tmp7 = null;
  const displayNameFontIdForMobileUser = createDisplayNameStylesMobile.getDisplayNameFontIdForMobileUser(user, guildId);
  if ("username" === roleStyle) {
    tmp7 = colorString;
  }
  obj2.linkColor = tmp7;
  obj2.roleColor = colorString;
  let colorStrings = null;
  if (result) {
    colorStrings = author.colorStrings;
  }
  obj2.roleColors = colorStrings;
  obj2.shouldShowRoleDot = "dot" === roleStyle && null != colorString;
  if (messageChannelId == null) {
    messageChannelId = message.channel_id;
  }
  obj2.messageChannelId = messageChannelId;
  obj2.fontId = displayNameFontIdForMobileUser;
  return obj2;
}
