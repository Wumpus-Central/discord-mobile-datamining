// discord_app/modules/user_profile/hooks/native/useUserProfileAnalyticsProperties.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const UserProfileAnalyticsTypes = fn(8183).UserProfileAnalyticsTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileAnalyticsProperties.tsx");

export default function useUserProfileAnalyticsProperties(userId) {
  userId = userId.userId;
  const user = userId.user;
  const channelId = userId.channelId;
  const guildId = userId.guildId;
  const displayProfile = userId.displayProfile;
  const guildMember = userId.guildMember;
  const profileEffectSkuId = userId.profileEffectSkuId;
  const type = userId.type;
  let memo;
  let memo1;
  const items = [userId, channelId, guildId, displayProfile, , , ,];
  let avatarDecoration;
  if (guildMember != null) {
    avatarDecoration = guildMember.avatarDecoration;
  }
  items[4] = avatarDecoration;
  let avatarDecoration1;
  if (user != null) {
    avatarDecoration1 = user.avatarDecoration;
  }
  items[5] = avatarDecoration1;
  items[6] = profileEffectSkuId;
  items[7] = type;
  memo = userId.useMemo(() => {
    let USER_SHEET = type;
    if (type == null) {
      USER_SHEET = UserProfileAnalyticsTypes.USER_SHEET;
    }
    const obj = {
      type: USER_SHEET,
      other_user_id: userId,
      channel_id: channelId,
      guild_id: guildId,
      profile_has_nitro_customization: null,
      profile_has_theme_color_customized: null,
      profile_has_theme_animation: null,
      has_avatar_decoration: null,
      has_profile_effect: null,
    };
    let tmp2 = null != displayProfile;
    if (tmp2) {
      let result;
      if (obj2 != null) {
        result = obj2.hasPremiumCustomization();
      }
      tmp2 = result;
    }
    obj.profile_has_nitro_customization = tmp2;
    obj.profile_has_theme_color_customized = null != displayProfile && displayProfile.hasThemeColors();
    let prop;
    if (displayProfile != null) {
      prop = obj2.popoutAnimationParticleType;
    }
    obj.profile_has_theme_animation = null != prop;
    let avatarDecoration;
    if (guildMember != null) {
      avatarDecoration = guildMember.avatarDecoration;
    }
    let BooleanResult = Boolean(avatarDecoration);
    if (!BooleanResult) {
      let avatarDecoration1;
      if (user != null) {
        avatarDecoration1 = user.avatarDecoration;
      }
      BooleanResult = Boolean(avatarDecoration1);
    }
    obj.has_avatar_decoration = BooleanResult;
    obj.has_profile_effect = null != profileEffectSkuId;
    return obj;
  }, items);
  const items1 = [displayProfile, guildMember];
  memo1 = obj.useMemo(() => {
    let nick;
    if (guildMember != null) {
      nick = tmp.nick;
    }
    const obj = {
      has_nickname: Boolean(nick),
      has_guild_member_avatar: null,
      has_guild_member_banner: null,
      has_guild_member_bio: null,
    };
    let avatar;
    if (guildMember != null) {
      avatar = tmp.avatar;
    }
    obj.has_guild_member_avatar = Boolean(avatar);
    let result;
    if (displayProfile != null) {
      result = obj2.isUsingGuildMemberBanner();
    }
    obj.has_guild_member_banner = result;
    let result1;
    if (displayProfile != null) {
      result1 = obj2.isUsingGuildMemberBio();
    }
    obj.has_guild_member_bio = result1;
    return obj;
  }, items1);
  const items2 = [guildId, memo, memo1];
  return userId.useMemo(() => {
    if (null == guildId) {
      let obj = memo;
    } else {
      obj = {};
      const merged = Object.assign(memo);
      const merged1 = Object.assign(memo1);
    }
    return obj;
  }, items2);
}
