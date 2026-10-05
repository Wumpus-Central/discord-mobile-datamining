// discord_app/modules/rpc/helpers/transformGuildMember.tsx
import AvatarDecorationUtils from "../../collectibles/avatar_decorations/AvatarDecorationUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/rpc/helpers/transformGuildMember.tsx");

export default function transformGuildMember(userId) {
  let avatarDecoration;
  let banner;
  let bio;
  let colorString;
  let obj2;
  let pronouns;
  const obj = {
    user_id: userId.userId,
    nick: userId.nick,
    guild_id: userId.guildId,
    avatar: userId.avatar,
    avatar_decoration_data: obj2.parseAvatarDecorationData(avatarDecoration),
    banner,
    bio,
    pronouns,
    color_string: colorString,
  };
  ({ avatarDecoration, banner, bio, pronouns, colorString } = userId);
  obj2 = AvatarDecorationUtils;
  return obj;
}
