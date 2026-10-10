// === Module 8366: NonUserBotProfileContent ===

// Module 8366 (NonUserBotProfileContent)
import ToastUtils from "ToastUtils" /* 4808 */;
import UserUtilsDefault from "UserUtils" /* 4962 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5409 */;
import ClipboardUtils from "ClipboardUtils" /* 6885 */;
import useProfileThemeDefault from "useProfileTheme" /* 8353 */;
import useUserProfileBannerHeightDefault from "useUserProfileBannerHeight" /* 8356 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8367 */;
import useBadgesDefault from "useBadges" /* 8368 */;
import useUserProfileOverscrollStylesDefault from "useUserProfileOverscrollStyles" /* 8369 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(6904);
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_4, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: hasOwnProperty } = Constants);
const ACTION_SHEET_MAX_WIDTH = fn(6840).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/NonUserBotProfileContent.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function NonUserBotProfileContent(arg0) {
  const cResult = trackUserProfileAction(576).c(70);
  ({ user, channel, displayProfile, scrollPosition } = arg0);
  const tmp5 = userTag(8367)();
  let obj = trackUserProfileAction(576);
  trackUserProfileAction = trackUserProfileAction(8314).useUserProfileAnalyticsContext().trackUserProfileAction;
  const obj2 = trackUserProfileAction(8314);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const name = userTag(5409).useName(guild_id, id, user);
  const obj3 = userTag(5409);
  userTag = userTag(4962).useUserTag(user);
  const tmp10 = userTag(8368)(displayProfile);
  const tmp11 = userTag(8356)(ACTION_SHEET_MAX_WIDTH);
  if (cResult[0] === tmp11) {
    if (cResult[1] === scrollPosition) {
      let tmp12 = cResult[2];
    }
    ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = tmp4(8369)(tmp12));
    if (cResult[3] === displayProfile) {
      if (cResult[4] === user) {
        let tmp15 = cResult[5];
      }
      ({ theme, primaryColor, secondaryColor } = tmp4(8353)(tmp15));
      if (cResult[6] === primaryColor) {
        if (cResult[7] === secondaryColor) {
          if (cResult[8] === theme) {
            let tmp17 = cResult[9];
          }
          const userProfileColors = tmp(8364).useUserProfileColors(tmp17);
          ({ avatarBackground, containerBackground } = userProfileColors);
          if (null == user) {
            return null;
          } else {
            if (cResult[10] === trackUserProfileAction) {
              if (cResult[11] === userTag) {
                let tmp19 = cResult[12];
              }
              if (cResult[13] !== trackUserProfileAction) {
                function handlePressPronouns() {
                  trackUserProfileAction({ action: "PRESS_PRONOUNS" });
                  ToastUtils.presentUserPronouns();
                }
                cResult[13] = trackUserProfileAction;
                cResult[14] = handlePressPronouns;
                let tmp20 = handlePressPronouns;
              } else {
                tmp20 = cResult[14];
              }
              if (cResult[15] === bannerAnimatedStyle) {
                if (cResult[16] === tmp11) {
                  if (cResult[17] === bannerImageAnimatedStyle) {
                    if (cResult[18] === blurAnimatedProps) {
                      if (cResult[19] === displayProfile) {
                        if (cResult[20] === showBlur) {
                          if (cResult[21] === user) {
                            let tmp21 = cResult[22];
                          }
                          let guildId;
                          if (displayProfile != null) {
                            guildId = displayProfile.guildId;
                          }
                          if (cResult[23] === avatarBackground) {
                            if (cResult[24] === guildId) {
                              if (cResult[25] === user) {
                                let tmp25 = cResult[26];
                              }
                              const sum = tmp14 + closure_4;
                              if (cResult[27] !== sum) {
                                const obj4 = { paddingTop, paddingBottom: sum };
                                cResult[27] = sum;
                                cResult[28] = obj4;
                                let tmp30 = obj4;
                              } else {
                                tmp30 = cResult[28];
                              }
                              if (cResult[29] === tmp5.profileContent) {
                                if (cResult[30] === tmp5.profileContentWrapper) {
                                  if (cResult[31] === tmp30) {
                                    let tmp32 = cResult[32];
                                  }
                                  let guild_id1;
                                  if (channel != null) {
                                    guild_id1 = channel.guild_id;
                                  }
                                  let pronouns;
                                  if (displayProfile != null) {
                                    pronouns = displayProfile.pronouns;
                                  }
                                  const _Symbol = Symbol;
                                  if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                                    const intl = tmp(1126).intl;
                                    const stringResult = intl.string(tmp(1126).t.y5MwJy);
                                    cResult[33] = stringResult;
                                    let tmp36 = stringResult;
                                  } else {
                                    tmp36 = cResult[33];
                                  }
                                  if (cResult[34] === tmp10) {
                                    if (cResult[35] === containerBackground) {
                                      if (cResult[36] === name) {
                                        if (cResult[37] === tmp19) {
                                          if (cResult[38] === tmp20) {
                                            if (cResult[39] === guild_id1) {
                                              if (cResult[40] === pronouns) {
                                                if (cResult[41] === user) {
                                                  let tmp38 = cResult[42];
                                                }
                                                if (cResult[43] === tmp5.primaryInfo) {
                                                  if (cResult[44] === tmp38) {
                                                    let tmp41 = cResult[45];
                                                  }
                                                  if (cResult[46] !== containerBackground) {
                                                    const obj5 = { backgroundColor: containerBackground };
                                                    cResult[46] = containerBackground;
                                                    cResult[47] = obj5;
                                                    let tmp45 = obj5;
                                                  } else {
                                                    tmp45 = cResult[47];
                                                  }
                                                  if (cResult[48] === tmp5.card) {
                                                    if (cResult[49] === tmp45) {
                                                      let tmp46 = cResult[50];
                                                    }
                                                    if (cResult[51] === channel) {
                                                      if (cResult[52] === displayProfile) {
                                                        if (cResult[53] === tmp46) {
                                                          if (cResult[54] === user.id) {
                                                            let tmp47 = cResult[55];
                                                          }
                                                          if (cResult[56] === tmp5.cards) {
                                                            if (cResult[57] === tmp47) {
                                                              let tmp50 = cResult[58];
                                                            }
                                                            if (cResult[59] === tmp32) {
                                                              if (cResult[60] === tmp41) {
                                                                if (cResult[61] === tmp50) {
                                                                  let tmp54 = cResult[62];
                                                                }
                                                                if (cResult[63] === contentAnimatedStyle) {
                                                                  if (cResult[64] === tmp54) {
                                                                    if (cResult[65] === tmp25) {
                                                                      let tmp58 = cResult[66];
                                                                    }
                                                                    if (cResult[67] === tmp58) {
                                                                      if (cResult[68] === tmp21) {
                                                                        let tmp61 = cResult[69];
                                                                      }
                                                                      return tmp61;
                                                                    }
                                                                    const obj6 = { children: null };
                                                                    const items = [tmp21, tmp58];
                                                                    obj6.children = items;
                                                                    const tmp64 = closure_8(closure_9, obj6);
                                                                    cResult[67] = tmp58;
                                                                    cResult[68] = tmp21;
                                                                    cResult[69] = tmp64;
                                                                    tmp61 = tmp64;
                                                                  }
                                                                }
                                                                const obj7 = { style: contentAnimatedStyle, children: null };
                                                                const items1 = [tmp25, tmp54];
                                                                obj7.children = items1;
                                                                const tmp60 = closure_8(tmp4(4850).View, obj7);
                                                                cResult[63] = contentAnimatedStyle;
                                                                cResult[64] = tmp54;
                                                                cResult[65] = tmp25;
                                                                cResult[66] = tmp60;
                                                                tmp58 = tmp60;
                                                              }
                                                            }
                                                            const obj8 = { style: tmp32, children: null };
                                                            const items2 = [tmp41, tmp50];
                                                            obj8.children = items2;
                                                            const tmp57 = closure_8(View, obj8);
                                                            cResult[59] = tmp32;
                                                            cResult[60] = tmp41;
                                                            cResult[61] = tmp50;
                                                            cResult[62] = tmp57;
                                                            tmp54 = tmp57;
                                                          }
                                                          const obj9 = { style: tmp5.cards, children: tmp47 };
                                                          const tmp53 = closure_7(View, obj9);
                                                          cResult[56] = tmp5.cards;
                                                          cResult[57] = tmp47;
                                                          cResult[58] = tmp53;
                                                          tmp50 = tmp53;
                                                        }
                                                      }
                                                    }
                                                    const obj10 = { userId: user.id, displayProfile, channel, style: tmp46 };
                                                    const tmp49 = closure_7(tmp4(10612), obj10);
                                                    cResult[51] = channel;
                                                    cResult[52] = displayProfile;
                                                    cResult[53] = tmp46;
                                                    cResult[54] = user.id;
                                                    cResult[55] = tmp49;
                                                    tmp47 = tmp49;
                                                  }
                                                  const items3 = [tmp5.card, tmp45];
                                                  cResult[48] = tmp5.card;
                                                  cResult[49] = tmp45;
                                                  cResult[50] = items3;
                                                  tmp46 = items3;
                                                }
                                                const obj11 = { style: tmp5.primaryInfo, children: tmp38 };
                                                const tmp44 = closure_7(View, obj11);
                                                cResult[43] = tmp5.primaryInfo;
                                                cResult[44] = tmp38;
                                                cResult[45] = tmp44;
                                                tmp41 = tmp44;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  const obj12 = { user, guildId: guild_id1, displayName: name, pronouns, badges: tmp10, badgeContainerBackground: containerBackground, displayNameAccessibilityHint: tmp36, onPressDisplayName: tmp19, onPressUserTag: tmp19, onPressPronouns: tmp20, showBadgeToastOnPress: true };
                                  const tmp40 = closure_7(tmp4(10531), obj12);
                                  cResult[34] = tmp10;
                                  cResult[35] = containerBackground;
                                  cResult[36] = name;
                                  cResult[37] = tmp19;
                                  cResult[38] = tmp20;
                                  cResult[39] = guild_id1;
                                  cResult[40] = pronouns;
                                  cResult[41] = user;
                                  cResult[42] = tmp40;
                                  tmp38 = tmp40;
                                }
                              }
                              const items4 = [, , ];
                              ({ profileContentWrapper: arr[0], profileContent: arr[1] } = tmp5);
                              items4[2] = tmp30;
                              cResult[29] = tmp5.profileContent;
                              cResult[30] = tmp5.profileContentWrapper;
                              cResult[31] = tmp30;
                              cResult[32] = items4;
                              tmp32 = items4;
                            }
                          }
                          const obj13 = { user, guildId, backgroundColor: avatarBackground, disableStatus: true };
                          const tmp27 = closure_7(tmp(8381).OpenableUserProfileAvatar, obj13);
                          cResult[23] = avatarBackground;
                          cResult[24] = guildId;
                          cResult[25] = user;
                          cResult[26] = tmp27;
                          tmp25 = tmp27;
                        }
                      }
                    }
                  }
                }
              }
              const obj14 = { user, displayProfile, bannerHeight: tmp11, bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur };
              const tmp23 = closure_7(tmp4(8370), obj14);
              cResult[15] = bannerAnimatedStyle;
              cResult[16] = tmp11;
              cResult[17] = bannerImageAnimatedStyle;
              cResult[18] = blurAnimatedProps;
              cResult[19] = displayProfile;
              cResult[20] = showBlur;
              cResult[21] = user;
              cResult[22] = tmp23;
              tmp21 = tmp23;
            }
            function handleCopyUsername() {
              trackUserProfileAction({ action: "COPY_USERNAME" });
              ClipboardUtils.copy(userTag);
              const result = ToastUtils.presentUsernameCopied();
            }
            cResult[10] = trackUserProfileAction;
            cResult[11] = userTag;
            cResult[12] = handleCopyUsername;
            tmp19 = handleCopyUsername;
          }
          const tmpResult = tmp(8364);
        }
      }
      const obj15 = { theme, primaryColor, secondaryColor };
      cResult[6] = primaryColor;
      cResult[7] = secondaryColor;
      cResult[8] = theme;
      cResult[9] = obj15;
      tmp17 = obj15;
      const tmp16 = tmp4(8353)(tmp15);
    }
    const obj16 = { user, displayProfile };
    cResult[3] = displayProfile;
    cResult[4] = user;
    cResult[5] = obj16;
    tmp15 = obj16;
    const tmp13 = tmp4(8369)(tmp12);
  }
  const obj17 = { scrollPosition, bannerHeight: tmp11 };
  cResult[0] = tmp11;
  cResult[1] = scrollPosition;
  cResult[2] = obj17;
  tmp12 = obj17;
  const tmp4Result = userTag(4962);
}) : (function NonUserBotProfileContent(scrollPosition) {
  ({ user, channel, displayProfile } = scrollPosition);
  let trackUserProfileAction;
  importDefault = undefined;
  const tmp3 = UserProfileSharedStylesDefault();
  trackUserProfileAction = trackUserProfileAction(8314).useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj = trackUserProfileAction(8314);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const name = NicknameUtilsDefault.useName(guild_id, id, user);
  importDefault = UserUtilsDefault.useUserTag(user);
  const tmpResult = UserUtilsDefault;
  const tmp9 = useUserProfileBannerHeightDefault(ACTION_SHEET_MAX_WIDTH);
  const tmp8 = useBadgesDefault(displayProfile);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = useUserProfileOverscrollStylesDefault({ scrollPosition: scrollPosition.scrollPosition, bannerHeight: tmp9 }));
  const tmp10 = useUserProfileOverscrollStylesDefault({ scrollPosition: scrollPosition.scrollPosition, bannerHeight: tmp9 });
  ({ theme, primaryColor, secondaryColor } = useProfileThemeDefault({ user, displayProfile }));
  const tmp11 = useProfileThemeDefault({ user, displayProfile });
  const userProfileColors = trackUserProfileAction(8364).useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  if (null == user) {
    return null;
  } else {
    const obj3 = { user, displayProfile, bannerHeight: tmp9, bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur };
    const items = [closure_7(tmp(8370), obj3), ];
    const obj4 = { style: contentAnimatedStyle, children: null };
    const obj5 = { user, guildId: null, backgroundColor: null, disableStatus: true };
    let guildId;
    if (displayProfile != null) {
      guildId = displayProfile.guildId;
    }
    obj5.guildId = guildId;
    obj5.backgroundColor = tmp13;
    const items1 = [closure_7(tmp4(8381).OpenableUserProfileAvatar, obj5), ];
    const obj6 = { style: null, children: null };
    const items2 = [, , ];
    ({ profileContentWrapper: arr2[0], profileContent: arr2[1] } = tmp3);
    const obj7 = { paddingTop, paddingBottom: tmp(1631)().bottom + closure_4 };
    items2[2] = obj7;
    obj6.style = items2;
    const obj8 = { style: tmp3.primaryInfo, children: null };
    const obj9 = { user, guildId: null, displayName: null, pronouns: null, badges: null, badgeContainerBackground: null, displayNameAccessibilityHint: null, onPressDisplayName: null, onPressUserTag: null, onPressPronouns: null, showBadgeToastOnPress: true };
    let guild_id1;
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    obj9.guildId = guild_id1;
    obj9.displayName = name;
    let pronouns;
    if (displayProfile != null) {
      pronouns = displayProfile.pronouns;
    }
    function handleCopyUsername() {
      trackUserProfileAction({ action: "COPY_USERNAME" });
      ClipboardUtils.copy(closure_1);
      const result = ToastUtils.presentUsernameCopied();
    }
    const obj10 = { children: null };
    obj9.pronouns = pronouns;
    obj9.badges = tmp8;
    obj9.badgeContainerBackground = containerBackground;
    const intl = tmp4(1126).intl;
    obj9.displayNameAccessibilityHint = intl.string(tmp4(1126).t.y5MwJy);
    obj9.onPressDisplayName = handleCopyUsername;
    obj9.onPressUserTag = handleCopyUsername;
    obj9.onPressPronouns = function handlePressPronouns() {
      trackUserProfileAction({ action: "PRESS_PRONOUNS" });
      ToastUtils.presentUserPronouns();
    };
    obj8.children = closure_7(tmp(10531), obj9);
    const items3 = [closure_7(View, obj8), ];
    const obj11 = { style: tmp3.cards, children: null };
    const obj12 = { userId: user.id, displayProfile, channel, style: null };
    const items4 = [tmp3.card, ];
    const obj13 = { backgroundColor: containerBackground };
    items4[1] = obj13;
    obj12.style = items4;
    obj11.children = closure_7(tmp(10612), obj12);
    items3[1] = closure_7(View, obj11);
    obj6.children = items3;
    items1[1] = closure_8(View, obj6);
    obj4.children = items1;
    items[1] = closure_8(tmp(4850).View, obj4);
    obj10.children = items;
    return closure_8(closure_9, obj10);
  }
  const tmp4Result = trackUserProfileAction(8364);
}));