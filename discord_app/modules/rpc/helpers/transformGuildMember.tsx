// === Module 14363: transformGuildMember ===

// Module 14363 (transformGuildMember)
import AvatarDecorationUtils from "AvatarDecorationUtils" /* 1972 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/transformGuildMember.tsx");

export default function transformGuildMember(userId) {
  let avatarDecoration;
  let banner;
  let bio;
  let colorString;
  let obj2;
  let pronouns;
  const obj = { user_id: userId.userId, nick: userId.nick, guild_id: userId.guildId, avatar: userId.avatar, avatar_decoration_data: obj2.parseAvatarDecorationData(avatarDecoration), banner, bio, pronouns, color_string: colorString };
  ({ avatarDecoration, banner, bio, pronouns, colorString } = userId);
  obj2 = AvatarDecorationUtils;
  return obj;
};