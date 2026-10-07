// discord_app/modules/rpc/helpers/transformGuildMember.tsx
import AvatarDecorationUtils from "../../collectibles/avatar_decorations/AvatarDecorationUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/rpc/helpers/transformGuildMember.tsx");

export default function transformGuildMember(userId) {
  const obj = {
    user_id: userId.userId,
    nick: userId.nick,
    guild_id: userId.guildId,
    avatar: userId.avatar,
    avatar_decoration_data: AvatarDecorationUtils.parseAvatarDecorationData(avatarDecoration),
    banner,
    bio,
    pronouns,
    color_string: colorString,
  };
  ({ avatarDecoration, banner, bio, pronouns, colorString } = userId);
  return obj;
}
