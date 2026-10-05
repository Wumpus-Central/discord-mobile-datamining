// discord_app/modules/messages/native/renderer/system_messages/formatUsernameOnClick.tsx
import enhanced_role_colors_EnhancedRoleColorUtils from "../../../../premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx";
import createDisplayNameStylesMobile from "../../../../display_name_styles/native/createDisplayNameStylesMobile.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/formatUsernameOnClick.tsx");

export default function formatUsernameOnClick(arg0) {
  let author;
  let colorString;
  let displayNameFontIdForMobileUser;
  let guildId;
  let message;
  let messageChannelId;
  let roleStyle;
  let tmp7;
  let tmp8;
  let userId;
  ({ userId, message, author, roleStyle, messageChannelId } = arg0);
  ({ colorString, guildId } = author);
  const colorStrings = author.colorStrings;
  if (userId == null) {
    userId = message.author.id;
  }
  const obj = enhanced_role_colors_EnhancedRoleColorUtils;
  const result = obj.isNativeMessageEligibleForEnhancedRoleColors(guildId, userId);
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
    linkColor: tmp7,
    roleColor: colorString,
    roleColors: tmp8,
    shouldShowRoleDot: "dot" === roleStyle && null != colorString,
    messageChannelId,
    medium: true,
    fontId: displayNameFontIdForMobileUser,
  };
  tmp7 = null;
  const tmpResult = createDisplayNameStylesMobile;
  displayNameFontIdForMobileUser = tmpResult.getDisplayNameFontIdForMobileUser(user, guildId);
  if ("username" === roleStyle) {
    tmp7 = colorString;
  }
  tmp8 = null;
  if (result) {
    tmp8 = colorStrings;
  }
  if (messageChannelId == null) {
    messageChannelId = message.channel_id;
  }
  return obj2;
}
