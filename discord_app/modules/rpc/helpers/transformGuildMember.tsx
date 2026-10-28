// === Module 16046: transformGuildMember ===

// Module 16046 (transformGuildMember)
import transformAvatarDecorationDefault from "transformAvatarDecoration" /* 9295 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/transformGuildMember.tsx");

export default function transformGuildMember(userId) {
  ({ avatarDecoration, banner, bio, pronouns, colorString } = userId);
  return { user_id: userId.userId, nick: userId.nick, guild_id: userId.guildId, avatar: userId.avatar, avatar_decoration_data: transformAvatarDecorationDefault(avatarDecoration), banner, bio, pronouns, color_string: colorString };
};