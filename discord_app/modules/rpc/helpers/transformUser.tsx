// === Module 8795: transformUser ===

// Module 8795 (transformUser)
import set from "set" /* 2 */;
import parseAvatarDecorationData from "parseAvatarDecorationData" /* 1899 */;

const result = set.fileFinishedImporting("modules/rpc/helpers/transformUser.tsx");

export default function transformUser(id) {
  let num = id.premiumType;
  const obj = { id: id.id, username: id.username, discriminator: id.discriminator, global_name: id.globalName, avatar: id.avatar, avatar_decoration_data: parseAvatarDecorationData.parseAvatarDecorationData(avatarDecoration), bot, flags, premium_type: null };
  ({ avatarDecoration, bot, flags } = id);
  if (num == null) {
    num = 0;
  }
  obj[8] = num;
  return obj;
};