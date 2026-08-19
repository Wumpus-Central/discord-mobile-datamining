// === Module 13887: transformGuildMember ===

// Module 13887 (transformGuildMember)
import obj132 from "obj132" /* 2 */;
import parseAvatarDecorationData from "parseAvatarDecorationData" /* 1899 */;

const result = obj132.fileFinishedImporting("modules/rpc/helpers/transformGuildMember.tsx");

export default function transformGuildMember(userId) {
  const obj = { user_id: userId.userId, nick: userId.nick, guild_id: userId.guildId, avatar: userId.avatar, avatar_decoration_data: parseAvatarDecorationData.parseAvatarDecorationData(avatarDecoration), banner, bio, pronouns, color_string: colorString };
  ({ avatarDecoration, banner, bio, pronouns, colorString } = userId);
  return obj;
};