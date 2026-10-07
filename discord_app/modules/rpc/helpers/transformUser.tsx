// discord_app/modules/rpc/helpers/transformUser.tsx
import AvatarDecorationUtils from "../../collectibles/avatar_decorations/AvatarDecorationUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/rpc/helpers/transformUser.tsx");

export default function transformUser(id) {
  let num = id.premiumType;
  const obj = {
    id: id.id,
    username: id.username,
    discriminator: id.discriminator,
    global_name: id.globalName,
    avatar: id.avatar,
    avatar_decoration_data: AvatarDecorationUtils.parseAvatarDecorationData(avatarDecoration),
    bot,
    flags,
    premium_type: null,
  };
  ({ avatarDecoration, bot, flags } = id);
  if (num == null) {
    num = 0;
  }
  obj.premium_type = num;
  return obj;
}
