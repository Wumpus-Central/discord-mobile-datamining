// discord_app/modules/rpc/helpers/transformUser.tsx
const result = require("set").fileFinishedImporting("modules/rpc/helpers/transformUser.tsx");

export default function transformUser(id) {
  let avatarDecoration;
  let bot;
  let flags;
  let num = id.premiumType;
  const obj = { id: id.id, username: id.username, discriminator: id.discriminator, global_name: id.globalName, avatar: id.avatar, avatar_decoration_data: null, bot: null, flags: null, premium_type: null };
  ({ avatarDecoration, bot, flags } = id);
  obj[5] = require(1852) /* parseAvatarDecorationData */.parseAvatarDecorationData(avatarDecoration);
  obj[6] = bot;
  obj[7] = flags;
  if (num == null) {
    num = 0;
  }
  obj[8] = num;
  return obj;
};