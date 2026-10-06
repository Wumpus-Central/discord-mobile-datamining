// === Module 7923: NonUserBotProfileContent ===

// Module 7923 (NonUserBotProfileContent)
import react_native from "react-native" /* 17 */;
import ToastUtils from "ToastUtils" /* 4573 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5048 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6653 */;
import ClipboardUtils from "ClipboardUtils" /* 6695 */;
import useProfileThemeDefault from "useProfileTheme" /* 7910 */;
import useUserProfileBannerHeightDefault from "useUserProfileBannerHeight" /* 7913 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 7924 */;
import useBadgesDefault from "useBadges" /* 7925 */;
import useUserProfileOverscrollStylesDefault from "useUserProfileOverscrollStyles" /* 7926 */;
import UserProfilePrimaryInfoDefault from "UserProfilePrimaryInfo" /* 10856 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 10999 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 6714 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let copyResult, importDefault, tmp;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let View = react_native.View;
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_4, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: hasOwnProperty } = Constants);
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let avatarBackground;
  let bannerAnimatedStyle;
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let channel;
  let containerBackground;
  let contentAnimatedStyle;
  let displayProfile;
  let primaryColor;
  let scrollPosition;
  let secondaryColor;
  let showBlur;
  let theme;
  let trackUserProfileAction;
  let user;
  let userTag;
  let obj = trackUserProfileAction(576);
  const cResult = obj.c(70);
  ({ user, channel, displayProfile, scrollPosition } = arg0);
  const tmp5 = userTag(7924)();
  let obj2 = trackUserProfileAction(7872);
  trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  let guild_id1;
  const useName = userTag(5048).useName;
  userTag(5048);
  if (channel != null) {
    guild_id1 = channel.guild_id;
  }
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const name = useName(guild_id1, id, user);
  const tmp4Result = userTag(4728);
  userTag = tmp4Result.useUserTag(user);
  const tmp11 = userTag(7925)(displayProfile);
  const tmp12 = userTag(7913)(ACTION_SHEET_MAX_WIDTH);
  if (cResult[0] === tmp12) {
    let tmp13;
    if (cResult[1] === scrollPosition) {
      tmp13 = cResult[2];
    }
    ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = userTag(7926)(tmp13));
    userTag(7926)(tmp13);
    if (cResult[3] === displayProfile) {
      let tmp16;
      if (cResult[4] === user) {
        tmp16 = cResult[5];
      }
      ({ theme, primaryColor, secondaryColor } = userTag(7910)(tmp16));
      userTag(7910)(tmp16);
      if (cResult[6] === primaryColor) {
        if (cResult[7] === secondaryColor) {
          let tmp18;
          if (cResult[8] === theme) {
            tmp18 = cResult[9];
          }
          const tmpResult = trackUserProfileAction(7921);
          const userProfileColors = tmpResult.useUserProfileColors(tmp18);
          ({ avatarBackground, containerBackground } = userProfileColors);
          if (null == user) {
            return null;
          } else {
            if (cResult[10] === trackUserProfileAction) {
              let tmp20;
              if (cResult[11] === userTag) {
                tmp20 = cResult[12];
              }
              class F {
                constructor() {
                  tmp = trackUserProfileAction({ action: "COPY_USERNAME" });
                  obj = closure_0(closure_2[17]);
                  copyResult = obj.copy(closure_1);
                  obj2 = closure_0(closure_2[18]);
                  result = obj2.presentUsernameCopied();
                  return;
                }
              }
              if (cResult[15] === bannerAnimatedStyle) {
                if (cResult[16] === tmp12) {
                  if (cResult[17] === bannerImageAnimatedStyle) {
                    if (cResult[18] === blurAnimatedProps) {
                      if (cResult[19] === displayProfile) {
                        if (cResult[20] === showBlur) {
                          let guildId;
                          class F {
                            constructor() {
                              tmp = trackUserProfileAction({ action: "COPY_USERNAME" });
                              obj = closure_0(closure_2[17]);
                              copyResult = obj.copy(closure_1);
                              obj2 = closure_0(closure_2[18]);
                              result = obj2.presentUsernameCopied();
                              return;
                            }
                          }
                          if (displayProfile != null) {
                            guildId = displayProfile.guildId;
                          }
                          if (cResult[23] === avatarBackground) {
                            if (cResult[24] === guildId) {
                              let tmp29;
                              class F {
                                constructor() {
                                  tmp = trackUserProfileAction({ action: "COPY_USERNAME" });
                                  obj = closure_0(closure_2[17]);
                                  copyResult = obj.copy(closure_1);
                                  obj2 = closure_0(closure_2[18]);
                                  result = obj2.presentUsernameCopied();
                                  return;
                                }
                              }
                              const sum = tmp15 + closure_4;
                              if (cResult[27] !== sum) {
                                const obj3 = { paddingTop, paddingBottom: sum };
                                class F {
                                  constructor() {
                                    tmp = trackUserProfileAction({ action: "COPY_USERNAME" });
                                    obj = closure_0(closure_2[17]);
                                    copyResult = obj.copy(closure_1);
                                    obj2 = closure_0(closure_2[18]);
                                    result = obj2.presentUsernameCopied();
                                    return;
                                  }
                                }
                                cResult[27] = sum;
                                cResult[28] = obj3;
                                tmp29 = obj3;
                              } else {
                                tmp29 = cResult[28];
                              }
                              if (cResult[29] === tmp5.profileContent) {
                                if (cResult[30] === tmp5.profileContentWrapper) {
                                  let guild_id;
                                  let tmp33;
                                  class F {
                                    constructor() {
                                      tmp = trackUserProfileAction({ action: "COPY_USERNAME" });
                                      obj = closure_0(closure_2[17]);
                                      copyResult = obj.copy(closure_1);
                                      obj2 = closure_0(closure_2[18]);
                                      result = obj2.presentUsernameCopied();
                                      return;
                                    }
                                  }
                                  const primaryInfo = tmp5.primaryInfo;
                                  if (channel != null) {
                                    guild_id = channel.guild_id;
                                  }
                                  let pronouns;
                                  if (displayProfile != null) {
                                    pronouns = displayProfile.pronouns;
                                  }
                                  const _Symbol = Symbol;
                                  if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                                    const intl = tmp(1126).intl;
                                    class F {
                                      constructor() {
                                        tmp = trackUserProfileAction({ action: "COPY_USERNAME" });
                                        obj = closure_0(closure_2[17]);
                                        copyResult = obj.copy(closure_1);
                                        obj2 = closure_0(closure_2[18]);
                                        result = obj2.presentUsernameCopied();
                                        return;
                                      }
                                    }
                                    const tmp34Result = tmp34(trackUserProfileAction(1126).t.y5MwJy);
                                    cResult[33] = tmp34Result;
                                    tmp33 = tmp34Result;
                                  } else {
                                    tmp33 = cResult[33];
                                  }
                                  if (cResult[34] === tmp11) {
                                    if (cResult[35] === containerBackground) {
                                      if (cResult[36] === name) {
                                        if (cResult[37] === tmp20) {
                                          if (cResult[38] === tmp21) {
                                            if (cResult[39] === guild_id) {
                                              if (cResult[40] === pronouns) {
                                                let tmp36;
                                                if (cResult[41] === user) {
                                                  tmp36 = cResult[42];
                                                }
                                                class F {
                                                  constructor() {
                                                    tmp = trackUserProfileAction({ action: "COPY_USERNAME" });
                                                    obj = closure_0(closure_2[17]);
                                                    copyResult = obj.copy(closure_1);
                                                    obj2 = closure_0(closure_2[18]);
                                                    result = obj2.presentUsernameCopied();
                                                    return;
                                                  }
                                                }
                                                const obj4 = { style: primaryInfo, children: tmp36 };
                                                cResult[43] = tmp5.primaryInfo;
                                                cResult[44] = tmp36;
                                                cResult[45] = closure_7(View, obj4);
                                                const tmp42 = closure_7(View, obj4);
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  const obj5 = { user, guildId: guild_id, displayName: name, pronouns, badges: tmp11, badgeContainerBackground: containerBackground, displayNameAccessibilityHint: tmp33, onPressDisplayName: tmp20, onPressUserTag: tmp20, onPressPronouns: tmp21, showBadgeToastOnPress: true };
                                  const tmp38 = closure_7(userTag(10856), obj5);
                                  cResult[34] = tmp11;
                                  cResult[35] = containerBackground;
                                  cResult[36] = name;
                                  cResult[37] = tmp20;
                                  cResult[38] = tmp21;
                                  cResult[39] = guild_id;
                                  cResult[40] = pronouns;
                                  cResult[41] = user;
                                  cResult[42] = tmp38;
                                  tmp36 = tmp38;
                                }
                              }
                              const items = [, , ];
                              ({ profileContentWrapper: arr[0], profileContent: arr[1] } = tmp5);
                              items[2] = tmp29;
                              cResult[29] = tmp5.profileContent;
                              cResult[30] = tmp5.profileContentWrapper;
                              cResult[31] = tmp29;
                              cResult[32] = items;
                            }
                          }
                          const obj6 = { user, guildId, backgroundColor: avatarBackground, disableStatus: true };
                          cResult[23] = avatarBackground;
                          cResult[24] = guildId;
                          cResult[25] = user;
                          cResult[26] = closure_7(trackUserProfileAction(7939).OpenableUserProfileAvatar, obj6);
                          const tmp27 = closure_7(trackUserProfileAction(7939).OpenableUserProfileAvatar, obj6);
                        }
                      }
                    }
                  }
                }
              }
              const obj7 = { user, displayProfile, bannerHeight: tmp12, bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur };
              cResult[15] = bannerAnimatedStyle;
              cResult[16] = tmp12;
              cResult[17] = bannerImageAnimatedStyle;
              cResult[18] = blurAnimatedProps;
              cResult[19] = displayProfile;
              cResult[20] = showBlur;
              cResult[21] = user;
              cResult[22] = closure_7(userTag(7927), obj7);
              const tmp24 = closure_7(userTag(7927), obj7);
            }
            class F {
              constructor() {
                tmp = trackUserProfileAction({ action: "COPY_USERNAME" });
                obj = closure_0(closure_2[17]);
                copyResult = obj.copy(closure_1);
                obj2 = closure_0(closure_2[18]);
                result = obj2.presentUsernameCopied();
                return;
              }
            }
            cResult[10] = trackUserProfileAction;
            cResult[11] = userTag;
            cResult[12] = F;
            tmp20 = F;
          }
        }
      }
      const obj8 = { theme, primaryColor, secondaryColor };
      cResult[6] = primaryColor;
      cResult[7] = secondaryColor;
      cResult[8] = theme;
      cResult[9] = obj8;
      tmp18 = obj8;
    }
    const obj9 = { user, displayProfile };
    cResult[3] = displayProfile;
    cResult[4] = user;
    cResult[5] = obj9;
    tmp16 = obj9;
  }
  const obj10 = { scrollPosition, bannerHeight: tmp12 };
  cResult[0] = tmp12;
  cResult[1] = scrollPosition;
  cResult[2] = obj10;
  tmp13 = obj10;
}) : ((scrollPosition) => {
  let bannerAnimatedStyle;
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let channel;
  let closure_1;
  let contentAnimatedStyle;
  let displayProfile;
  let guildId;
  let guild_id1;
  let handleCopyUsername;
  let intl;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj11;
  let obj8;
  let primaryColor;
  let pronouns;
  let secondaryColor;
  let showBlur;
  let theme;
  let tmpResult2;
  let user;
  ({ user, channel, displayProfile } = scrollPosition);
  let trackUserProfileAction;
  importDefault = undefined;
  scrollPosition = scrollPosition.scrollPosition;
  const tmp3 = UserProfileSharedStylesDefault();
  let obj = trackUserProfileAction(7872);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let guild_id;
  const useName = NicknameUtilsDefault.useName;
  NicknameUtilsDefault;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const name = useName(guild_id, id, user);
  const tmpResult = UserUtilsDefault;
  importDefault = tmpResult.useUserTag(user);
  const tmp9 = useBadgesDefault(displayProfile);
  const tmp10 = useUserProfileBannerHeightDefault(ACTION_SHEET_MAX_WIDTH);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = useUserProfileOverscrollStylesDefault({ scrollPosition, bannerHeight: tmp10 }));
  useUserProfileOverscrollStylesDefault({ scrollPosition, bannerHeight: tmp10 });
  const bottom = tmp(1618)().bottom;
  ({ theme, primaryColor, secondaryColor } = useProfileThemeDefault({ user, displayProfile }));
  useProfileThemeDefault({ user, displayProfile });
  const tmp4Result = trackUserProfileAction(7921);
  const userProfileColors = tmp4Result.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  if (null == user) {
    return null;
  } else {
    let obj2 = { user, displayProfile, bannerHeight: tmp10, bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur };
    const items = [closure_7(tmp(7927), obj2), ];
    const obj3 = { style: contentAnimatedStyle, children: items1 };
    View = tmp(4618).View;
    const obj4 = { user, guildId, backgroundColor: tmp14, disableStatus: true };
    guildId = undefined;
    const OpenableUserProfileAvatar = tmp4(7939).OpenableUserProfileAvatar;
    if (displayProfile != null) {
      guildId = displayProfile.guildId;
    }
    items1 = [closure_7(OpenableUserProfileAvatar, obj4), ];
    const obj5 = { style: items2, children: items3 };
    items2 = [, , ];
    ({ profileContentWrapper: arr2[0], profileContent: arr2[1] } = tmp3);
    const obj6 = { paddingTop, paddingBottom: bottom + closure_4 };
    items2[2] = obj6;
    const obj7 = { style: tmp3.primaryInfo, children: closure_7(tmpResult2, obj8) };
    obj8 = {
      user,
      guildId: guild_id1,
      displayName: name,
      pronouns,
      badges: tmp9,
      badgeContainerBackground: containerBackground,
      displayNameAccessibilityHint: intl.string(trackUserProfileAction(1126).t.y5MwJy),
      onPressDisplayName: handleCopyUsername,
      onPressUserTag: handleCopyUsername,
      onPressPronouns() {
          trackUserProfileAction({ action: "PRESS_PRONOUNS" });
          const obj = ToastUtils;
          obj.presentUserPronouns();
        },
      showBadgeToastOnPress: true
    };
    guild_id1 = undefined;
    tmpResult2 = UserProfilePrimaryInfoDefault;
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    pronouns = undefined;
    if (displayProfile != null) {
      pronouns = displayProfile.pronouns;
    }
    handleCopyUsername = function handleCopyUsername() {
      trackUserProfileAction({ action: "COPY_USERNAME" });
      const obj = ClipboardUtils;
      obj.copy(closure_1);
      const obj2 = ToastUtils;
      const result = obj2.presentUsernameCopied();
    };
    const obj9 = { children: items };
    intl = tmp4(1126).intl;
    items3 = [closure_7(View, obj7), ];
    const obj10 = { style: tmp3.cards, children: closure_7(UserProfileAboutMeCardDefault, obj11) };
    obj11 = { userId: user.id, displayProfile, channel, style: items4 };
    items4 = [tmp3.card, ];
    const obj12 = { backgroundColor: containerBackground };
    items4[1] = obj12;
    items3[1] = closure_7(View, obj10);
    items1[1] = closure_8(View, obj5);
    items[1] = closure_8(View, obj3);
    return closure_8(closure_9, obj9);
  }
}));
let result = size.fileFinishedImporting("modules/user_profile/native/NonUserBotProfileContent.tsx");

export default memoResult;