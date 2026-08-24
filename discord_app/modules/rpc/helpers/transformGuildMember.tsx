// === Module 13953: transformGuildMember ===

// Module 13953 (transformGuildMember)
import set from "set" /* 2 */;
import parseAvatarDecorationData from "parseAvatarDecorationData" /* 1899 */;

const result = set.fileFinishedImporting("modules/rpc/helpers/transformGuildMember.tsx");

export default function transformGuildMember(userId) {
  const obj = { user_id: userId.userId, nick: userId.nick, guild_id: userId.guildId, avatar: userId.avatar, avatar_decoration_data: parseAvatarDecorationData.parseAvatarDecorationData(avatarDecoration), banner, bio, pronouns, color_string: colorString };
  ({ avatarDecoration, banner, bio, pronouns, colorString } = userId);
  return obj;
};