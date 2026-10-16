// discord_app/modules/rpc/helpers/transformUser.tsx
import transformAvatarDecorationDefault from "transformAvatarDecoration.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/rpc/helpers/transformUser.tsx");

export default function transformUser(id) {
  const publicFlags = id.publicFlags;
  ({ avatarDecoration, bot } = id);
  return {
    id: id.id,
    username: id.username,
    discriminator: id.discriminator,
    global_name: id.globalName,
    avatar: id.avatar,
    avatar_decoration_data: transformAvatarDecorationDefault(avatarDecoration),
    bot,
    flags: publicFlags,
    public_flags: publicFlags,
    premium_type: 0,
  };
}
