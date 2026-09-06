// === Module 9560: transformUser ===

// Module 9560 (transformUser)
import AvatarDecorationUtils from "AvatarDecorationUtils" /* 1881 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/transformUser.tsx");

export default function transformUser(id) {
  let num = id.premiumType;
  const obj = { id: id.id, username: id.username, discriminator: id.discriminator, global_name: id.globalName, avatar: id.avatar, avatar_decoration_data: AvatarDecorationUtils.parseAvatarDecorationData(avatarDecoration), bot, flags, premium_type: null };
  ({ avatarDecoration, bot, flags } = id);
  if (num == null) {
    num = 0;
  }
  obj.premium_type = num;
  return obj;
};