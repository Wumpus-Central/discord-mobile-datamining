// === Module 9261: transformUser ===

// Module 9261 (transformUser)
import transformAvatarDecorationDefault from "transformAvatarDecoration" /* 9262 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/transformUser.tsx");

export default function transformUser(id) {
  const publicFlags = id.publicFlags;
  ({ avatarDecoration, bot } = id);
  return { id: id.id, username: id.username, discriminator: id.discriminator, global_name: id.globalName, avatar: id.avatar, avatar_decoration_data: transformAvatarDecorationDefault(avatarDecoration), bot, flags: publicFlags, public_flags: publicFlags, premium_type: 0 };
};