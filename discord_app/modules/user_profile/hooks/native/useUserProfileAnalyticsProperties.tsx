// === Module 8299: useUserProfileAnalyticsProperties ===

// Module 8299 (useUserProfileAnalyticsProperties)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
const UserProfileAnalyticsTypes = fn(8283).UserProfileAnalyticsTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileAnalyticsProperties.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useUserProfileAnalyticsProperties(profileEffectSkuId) {
  const cResult = c.c(27);
  ({ userId, user, channelId, guildId, displayProfile, guildMember, type } = profileEffectSkuId);
  if (type == null) {
    type = UserProfileAnalyticsTypes.USER_SHEET;
  }
  if (cResult[0] !== displayProfile) {
    let tmp4 = null != displayProfile;
    if (tmp4) {
      let result;
      if (displayProfile != null) {
        result = displayProfile.hasPremiumCustomization();
      }
      tmp4 = result;
    }
    cResult[0] = displayProfile;
    cResult[1] = tmp4;
    let tmp3 = tmp4;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] !== displayProfile) {
    const tmp7 = null != displayProfile && displayProfile.hasThemeColors();
    cResult[2] = displayProfile;
    cResult[3] = tmp7;
    let tmp6 = tmp7;
  } else {
    tmp6 = cResult[3];
  }
  let prop;
  if (displayProfile != null) {
    prop = displayProfile.popoutAnimationParticleType;
  }
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
  if (cResult[4] === channelId) {
    if (cResult[5] === guildId) {
      if (cResult[6] === type) {
        if (cResult[7] === tmp3) {
          if (cResult[8] === tmp6) {
            if (cResult[9] === tmp9) {
              if (cResult[10] === BooleanResult) {
                if (cResult[11] === tmp13) {
                  if (cResult[12] === userId) {
                    let tmp14 = cResult[13];
                  }
                  let nick;
                  if (guildMember != null) {
                    nick = guildMember.nick;
                  }
                  const BooleanResult1 = Boolean(nick);
                  let avatar;
                  if (guildMember != null) {
                    avatar = guildMember.avatar;
                  }
                  const BooleanResult2 = Boolean(avatar);
                  if (cResult[14] !== displayProfile) {
                    let result1;
                    if (displayProfile != null) {
                      result1 = displayProfile.isUsingGuildMemberBanner();
                    }
                    cResult[14] = displayProfile;
                    cResult[15] = result1;
                    let tmp19 = result1;
                  } else {
                    tmp19 = cResult[15];
                  }
                  if (cResult[16] !== displayProfile) {
                    let result2;
                    if (displayProfile != null) {
                      result2 = displayProfile.isUsingGuildMemberBio();
                    }
                    cResult[16] = displayProfile;
                    cResult[17] = result2;
                    let tmp21 = result2;
                  } else {
                    tmp21 = cResult[17];
                  }
                  if (cResult[18] === tmp19) {
                    if (cResult[19] === tmp21) {
                      if (cResult[20] === BooleanResult1) {
                        if (cResult[21] === BooleanResult2) {
                          let tmp23 = cResult[22];
                        }
                        if (cResult[23] === tmp23) {
                          if (cResult[24] === guildId) {
                            if (cResult[25] === tmp14) {
                              let tmp24 = cResult[26];
                            }
                            return tmp24;
                          }
                        }
                        let tmp25 = tmp14;
                        if (null != guildId) {
                          const obj2 = {};
                          const merged = Object.assign(tmp14);
                          const merged1 = Object.assign(tmp23);
                          tmp25 = obj2;
                        }
                        cResult[23] = tmp23;
                        cResult[24] = guildId;
                        cResult[25] = tmp14;
                        cResult[26] = tmp25;
                        tmp24 = tmp25;
                      }
                    }
                  }
                  const obj3 = { has_nickname: BooleanResult1, has_guild_member_avatar: BooleanResult2, has_guild_member_banner: tmp19, has_guild_member_bio: tmp21 };
                  cResult[18] = tmp19;
                  cResult[19] = tmp21;
                  cResult[20] = BooleanResult1;
                  cResult[21] = BooleanResult2;
                  cResult[22] = obj3;
                  tmp23 = obj3;
                }
              }
            }
          }
        }
      }
    }
  }
  const obj4 = { type, other_user_id: userId, channel_id: channelId, guild_id: guildId, profile_has_nitro_customization: tmp3, profile_has_theme_color_customized: tmp6, profile_has_theme_animation: null != prop, has_avatar_decoration: BooleanResult, has_profile_effect: null != profileEffectSkuId.profileEffectSkuId };
  cResult[4] = channelId;
  cResult[5] = guildId;
  cResult[6] = type;
  cResult[7] = tmp3;
  cResult[8] = tmp6;
  cResult[9] = null != prop;
  cResult[10] = BooleanResult;
  cResult[11] = null != profileEffectSkuId.profileEffectSkuId;
  cResult[12] = userId;
  cResult[13] = obj4;
  tmp14 = obj4;
}) : (function useUserProfileAnalyticsProperties(userId) {
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
  const items = [userId, channelId, guildId, displayProfile, , , , ];
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
  memo = channelId.useMemo(() => {
    let USER_SHEET = type;
    if (type == null) {
      USER_SHEET = UserProfileAnalyticsTypes.USER_SHEET;
    }
    const obj = { type: USER_SHEET, other_user_id: userId, channel_id: channelId, guild_id: guildId, profile_has_nitro_customization: null, profile_has_theme_color_customized: null, profile_has_theme_animation: null, has_avatar_decoration: null, has_profile_effect: null };
    let tmp2 = null != displayProfile;
    if (tmp2) {
      let result;
      if (displayProfile != null) {
        result = displayProfile.hasPremiumCustomization();
      }
      tmp2 = result;
    }
    obj.profile_has_nitro_customization = tmp2;
    obj.profile_has_theme_color_customized = null != displayProfile && displayProfile.hasThemeColors();
    let prop;
    if (displayProfile != null) {
      prop = displayProfile.popoutAnimationParticleType;
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
      nick = guildMember.nick;
    }
    const obj = { has_nickname: Boolean(nick), has_guild_member_avatar: null, has_guild_member_banner: null, has_guild_member_bio: null };
    let avatar;
    if (guildMember != null) {
      avatar = guildMember.avatar;
    }
    obj.has_guild_member_avatar = Boolean(avatar);
    let result;
    if (displayProfile != null) {
      result = displayProfile.isUsingGuildMemberBanner();
    }
    obj.has_guild_member_banner = result;
    let result1;
    if (displayProfile != null) {
      result1 = displayProfile.isUsingGuildMemberBio();
    }
    obj.has_guild_member_bio = result1;
    return obj;
  }, items1);
  const items2 = [guildId, memo, memo1];
  return channelId.useMemo(() => {
    if (null == guildId) {
      let obj = memo;
    } else {
      obj = {};
      const merged = Object.assign(memo);
      const merged1 = Object.assign(memo1);
    }
    return obj;
  }, items2);
});