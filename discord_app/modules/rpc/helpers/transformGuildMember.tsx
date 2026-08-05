// discord_app/modules/rpc/helpers/transformGuildMember.tsx
const result = require("set").fileFinishedImporting("modules/rpc/helpers/transformGuildMember.tsx");

export default function transformGuildMember(userId) {
  let avatarDecoration;
  let banner;
  let bio;
  let colorString;
  let pronouns;
  const obj = { user_id: userId.userId, nick: userId.nick, guild_id: userId.guildId, avatar: userId.avatar, avatar_decoration_data: null, banner: null, bio: null, pronouns: null, color_string: null };
  ({ avatarDecoration, banner, bio, pronouns, colorString } = userId);
  obj[4] = require("../../collectibles/avatar_decorations/AvatarDecorationUtils.tsx") /* parseAvatarDecorationData */.parseAvatarDecorationData(avatarDecoration);
  obj[5] = banner;
  obj[6] = bio;
  obj[7] = pronouns;
  obj[8] = colorString;
  return obj;
};