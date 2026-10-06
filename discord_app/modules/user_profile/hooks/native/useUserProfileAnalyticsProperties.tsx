// === Module 7881: useUserProfileAnalyticsProperties ===

// Module 7881 (useUserProfileAnalyticsProperties)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 7865 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const UserProfileAnalyticsTypes = Constants.UserProfileAnalyticsTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((profileEffectSkuId) => {
  let channelId;
  let displayProfile;
  let guildId;
  let guildMember;
  let tmp3;
  let tmp6;
  let type;
  let user;
  let userId;
  const obj = react2;
  const cResult = obj.c(27);
  ({ userId, user, channelId, guildId, displayProfile, guildMember, type } = profileEffectSkuId);
  profileEffectSkuId = profileEffectSkuId.profileEffectSkuId;
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
    tmp3 = tmp4;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] !== displayProfile) {
    const tmp7 = null != displayProfile && displayProfile.hasThemeColors();
    cResult[2] = displayProfile;
    cResult[3] = tmp7;
    tmp6 = tmp7;
  } else {
    tmp6 = cResult[3];
  }
  let prop;
  if (displayProfile != null) {
    prop = displayProfile.popoutAnimationParticleType;
  }
  let avatarDecoration;
  const _Boolean = Boolean;
  if (guildMember != null) {
    avatarDecoration = guildMember.avatarDecoration;
  }
  let _BooleanResult = _Boolean(avatarDecoration);
  if (!_BooleanResult) {
    let avatarDecoration1;
    const _Boolean2 = Boolean;
    if (user != null) {
      avatarDecoration1 = user.avatarDecoration;
    }
    _BooleanResult = _Boolean2(avatarDecoration1);
  }
  if (cResult[4] === channelId) {
    if (cResult[5] === guildId) {
      if (cResult[6] === type) {
        if (cResult[7] === tmp3) {
          if (cResult[8] === tmp6) {
            if (cResult[9] === null != prop) {
              if (cResult[10] === _BooleanResult) {
                if (cResult[11] === null != profileEffectSkuId) {
                  let tmp14;
                  let tmp19;
                  let tmp21;
                  if (cResult[12] === userId) {
                    tmp14 = cResult[13];
                  }
                  let nick;
                  const _Boolean3 = Boolean;
                  if (guildMember != null) {
                    nick = guildMember.nick;
                  }
                  const _Boolean3Result = _Boolean3(nick);
                  let avatar;
                  const _Boolean4 = Boolean;
                  if (guildMember != null) {
                    avatar = guildMember.avatar;
                  }
                  const _Boolean4Result = _Boolean4(avatar);
                  if (cResult[14] !== displayProfile) {
                    let result1;
                    if (displayProfile != null) {
                      result1 = displayProfile.isUsingGuildMemberBanner();
                    }
                    cResult[14] = displayProfile;
                    cResult[15] = result1;
                    tmp19 = result1;
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
                    tmp21 = result2;
                  } else {
                    tmp21 = cResult[17];
                  }
                  if (cResult[18] === tmp19) {
                    if (cResult[19] === tmp21) {
                      if (cResult[20] === _Boolean3Result) {
                        let tmp23;
                        if (cResult[21] === _Boolean4Result) {
                          tmp23 = cResult[22];
                        }
                        if (cResult[23] === tmp23) {
                          if (cResult[24] === guildId) {
                            let tmp24;
                            if (cResult[25] === tmp14) {
                              tmp24 = cResult[26];
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
                  const obj3 = { has_nickname: _Boolean3Result, has_guild_member_avatar: _Boolean4Result, has_guild_member_banner: tmp19, has_guild_member_bio: tmp21 };
                  cResult[18] = tmp19;
                  cResult[19] = tmp21;
                  cResult[20] = _Boolean3Result;
                  cResult[21] = _Boolean4Result;
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
  const obj4 = { type, other_user_id: userId, channel_id: channelId, guild_id: guildId, profile_has_nitro_customization: tmp3, profile_has_theme_color_customized: tmp6, profile_has_theme_animation: null != prop, has_avatar_decoration: _BooleanResult, has_profile_effect: null != profileEffectSkuId };
  cResult[4] = channelId;
  cResult[5] = guildId;
  cResult[6] = type;
  cResult[7] = tmp3;
  cResult[8] = tmp6;
  cResult[9] = null != prop;
  cResult[10] = _BooleanResult;
  cResult[11] = null != profileEffectSkuId;
  cResult[12] = userId;
  cResult[13] = obj4;
  tmp14 = obj4;
}) : ((userId) => {
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
  let obj = channelId;
  const items = [userId, channelId, guildId, displayProfile, , , , ];
  let avatarDecoration;
  const useMemo = channelId.useMemo;
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
  memo = useMemo(() => {
    let _BooleanResult;
    let prop;
    let tmp2;
    let USER_SHEET = type;
    if (type == null) {
      USER_SHEET = UserProfileAnalyticsTypes.USER_SHEET;
    }
    const obj = { type: USER_SHEET, other_user_id: userId, channel_id: channelId, guild_id: guildId, profile_has_nitro_customization: tmp2, profile_has_theme_color_customized: null != displayProfile && displayProfile.hasThemeColors(), profile_has_theme_animation: null != prop, has_avatar_decoration: _BooleanResult, has_profile_effect: null != profileEffectSkuId };
    tmp2 = null != displayProfile;
    if (tmp2) {
      let result;
      if (displayProfile != null) {
        result = displayProfile.hasPremiumCustomization();
      }
      tmp2 = result;
    }
    prop = undefined;
    null != displayProfile && displayProfile.hasThemeColors();
    if (displayProfile != null) {
      prop = displayProfile.popoutAnimationParticleType;
    }
    let avatarDecoration;
    const _Boolean = Boolean;
    if (guildMember != null) {
      avatarDecoration = guildMember.avatarDecoration;
    }
    _BooleanResult = _Boolean(avatarDecoration);
    if (!_BooleanResult) {
      let avatarDecoration1;
      const _Boolean2 = Boolean;
      if (user != null) {
        avatarDecoration1 = user.avatarDecoration;
      }
      _BooleanResult = _Boolean2(avatarDecoration1);
    }
    return obj;
  }, items);
  const items1 = [displayProfile, guildMember];
  memo1 = obj.useMemo(() => {
    let _Boolean2;
    let avatar;
    let result;
    let result1;
    let nick;
    const _Boolean = Boolean;
    if (guildMember != null) {
      nick = guildMember.nick;
    }
    const obj = { has_nickname: _Boolean(nick), has_guild_member_avatar: _Boolean2(avatar), has_guild_member_banner: result, has_guild_member_bio: result1 };
    avatar = undefined;
    _Boolean2 = Boolean;
    if (guildMember != null) {
      avatar = guildMember.avatar;
    }
    result = undefined;
    if (displayProfile != null) {
      result = displayProfile.isUsingGuildMemberBanner();
    }
    result1 = undefined;
    if (displayProfile != null) {
      result1 = displayProfile.isUsingGuildMemberBio();
    }
    return obj;
  }, items1);
  const items2 = [guildId, memo, memo1];
  return obj.useMemo(() => {
    let obj;
    if (null == guildId) {
      obj = memo;
    } else {
      obj = {};
      const merged = Object.assign(memo);
      const merged1 = Object.assign(memo1);
    }
    return obj;
  }, items2);
});
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileAnalyticsProperties.tsx");

export default tmp2;