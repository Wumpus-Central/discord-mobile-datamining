// discord_app/modules/rpc/helpers/transformGuildMember.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import parseAvatarDecorationData from "../../collectibles/avatar_decorations/AvatarDecorationUtils.tsx";

const result = obj132.fileFinishedImporting("modules/rpc/helpers/transformGuildMember.tsx");

export default function transformGuildMember(userId) {
  const obj = { user_id: userId.userId, nick: userId.nick, guild_id: userId.guildId, avatar: userId.avatar, avatar_decoration_data: parseAvatarDecorationData.parseAvatarDecorationData(avatarDecoration), banner, bio, pronouns, color_string: colorString };
  ({ avatarDecoration, banner, bio, pronouns, colorString } = userId);
  return obj;
};