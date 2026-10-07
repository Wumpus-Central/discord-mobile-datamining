// discord_app/modules/user_profile/native/NonUserBotProfileContent.tsx
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import NicknameUtilsDefault from "../../../utils/NicknameUtils.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import useProfileThemeDefault from "../hooks/useProfileTheme.tsx";
import useUserProfileBannerHeightDefault from "../hooks/native/useUserProfileBannerHeight.tsx";
import UserProfileSharedStylesDefault from "UserProfileSharedStyles.tsx";
import useBadgesDefault from "../hooks/useBadges.tsx";
import useUserProfileOverscrollStylesDefault from "useUserProfileOverscrollStyles.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Constants = fn(6714);
({ PROFILE_CONTENT_BOTTOM_PADDING: closure_4, PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: hasOwnProperty } = Constants);
const ACTION_SHEET_MAX_WIDTH = fn(6653).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/NonUserBotProfileContent.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = trackUserProfileAction(576).c(70);
        ({ user, channel, displayProfile, scrollPosition } = arg0);
        const tmp5 = userTag(7924)();
        let obj = trackUserProfileAction(576);
        trackUserProfileAction = trackUserProfileAction(7872).useUserProfileAnalyticsContext().trackUserProfileAction;
        const obj2 = trackUserProfileAction(7872);
        let guild_id1;
        if (channel != null) {
          guild_id1 = channel.guild_id;
        }
        let id;
        if (channel != null) {
          id = channel.id;
        }
        const name = userTag(5048).useName(guild_id1, id, user);
        const obj3 = userTag(5048);
        userTag = userTag(4728).useUserTag(user);
        const tmp10 = userTag(7925)(displayProfile);
        const tmp11 = userTag(7913)(ACTION_SHEET_MAX_WIDTH);
        if (cResult[0] === tmp11) {
          if (cResult[1] === scrollPosition) {
            let tmp12 = cResult[2];
          }
          ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } =
            tmp4(7926)(tmp12));
          if (cResult[3] === displayProfile) {
            if (cResult[4] === user) {
              let tmp15 = cResult[5];
            }
            ({ theme, primaryColor, secondaryColor } = tmp4(7910)(tmp15));
            if (cResult[6] === primaryColor) {
              if (cResult[7] === secondaryColor) {
                if (cResult[8] === theme) {
                  let tmp17 = cResult[9];
                }
                const userProfileColors = tmp(7921).useUserProfileColors(tmp17);
                ({ avatarBackground, containerBackground } = userProfileColors);
                if (null == user) {
                  return null;
                } else {
                  if (cResult[10] === trackUserProfileAction) {
                    if (cResult[11] === userTag) {
                      let tmp19 = cResult[12];
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
                      if (cResult[16] === tmp11) {
                        if (cResult[17] === bannerImageAnimatedStyle) {
                          if (cResult[18] === blurAnimatedProps) {
                            if (cResult[19] === displayProfile) {
                              if (cResult[20] === showBlur) {
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
                                  const guildId = displayProfile.guildId;
                                }
                                if (cResult[23] === avatarBackground) {
                                  if (cResult[24] === guildId) {
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
                                    const sum = tmp14 + closure_4;
                                    if (cResult[27] !== sum) {
                                      const obj4 = { paddingTop: null, paddingBottom: null };
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
                                      obj4.paddingTop = paddingTop;
                                      obj4.paddingBottom = sum;
                                      cResult[27] = sum;
                                      cResult[28] = obj4;
                                      let tmp28 = obj4;
                                    } else {
                                      tmp28 = cResult[28];
                                    }
                                    if (cResult[29] === tmp5.profileContent) {
                                      if (cResult[30] === tmp5.profileContentWrapper) {
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
                                        if (channel != null) {
                                          const guild_id = channel.guild_id;
                                        }
                                        let pronouns;
                                        if (displayProfile != null) {
                                          pronouns = displayProfile.pronouns;
                                        }
                                        const _Symbol = Symbol;
                                        if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
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
                                          const tmp33Result = tmp33(tmp(1126).t.y5MwJy);
                                          cResult[33] = tmp33Result;
                                          let tmp32 = tmp33Result;
                                        } else {
                                          tmp32 = cResult[33];
                                        }
                                        if (cResult[34] === tmp10) {
                                          if (cResult[35] === containerBackground) {
                                            if (cResult[36] === name) {
                                              if (cResult[37] === tmp19) {
                                                if (cResult[38] === tmp20) {
                                                  if (cResult[39] === guild_id) {
                                                    if (cResult[40] === pronouns) {
                                                      if (cResult[41] === user) {
                                                        let tmp35 = cResult[42];
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
                                                      const obj5 = { style: tmp5.primaryInfo, children: tmp35 };
                                                      const tmp41 = closure_7(View, obj5);
                                                      cResult[43] = tmp5.primaryInfo;
                                                      cResult[44] = tmp35;
                                                      cResult[45] = tmp41;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                        const obj6 = {
                                          user,
                                          guildId: guild_id,
                                          displayName: name,
                                          pronouns,
                                          badges: tmp10,
                                          badgeContainerBackground: containerBackground,
                                          displayNameAccessibilityHint: tmp32,
                                          onPressDisplayName: tmp19,
                                          onPressUserTag: tmp19,
                                          onPressPronouns: tmp20,
                                          showBadgeToastOnPress: true,
                                        };
                                        const tmp37 = closure_7(tmp4(10856), obj6);
                                        cResult[34] = tmp10;
                                        cResult[35] = containerBackground;
                                        cResult[36] = name;
                                        cResult[37] = tmp19;
                                        cResult[38] = tmp20;
                                        cResult[39] = guild_id;
                                        cResult[40] = pronouns;
                                        cResult[41] = user;
                                        cResult[42] = tmp37;
                                        tmp35 = tmp37;
                                      }
                                    }
                                    const items = [, ,];
                                    ({ profileContentWrapper: arr[0], profileContent: arr[1] } = tmp5);
                                    items[2] = tmp28;
                                    cResult[29] = tmp5.profileContent;
                                    cResult[30] = tmp5.profileContentWrapper;
                                    cResult[31] = tmp28;
                                    cResult[32] = items;
                                  }
                                }
                                const obj7 = { user, guildId, backgroundColor: avatarBackground, disableStatus: true };
                                const tmp26 = closure_7(tmp(7939).OpenableUserProfileAvatar, obj7);
                                cResult[23] = avatarBackground;
                                cResult[24] = guildId;
                                cResult[25] = user;
                                cResult[26] = tmp26;
                              }
                            }
                          }
                        }
                      }
                    }
                    const obj8 = {
                      user,
                      displayProfile,
                      bannerHeight: tmp11,
                      bannerAnimatedStyle,
                      bannerImageAnimatedStyle,
                      blurAnimatedProps,
                      showBlur,
                    };
                    const tmp23 = closure_7(tmp4(7927), obj8);
                    cResult[15] = bannerAnimatedStyle;
                    cResult[16] = tmp11;
                    cResult[17] = bannerImageAnimatedStyle;
                    cResult[18] = blurAnimatedProps;
                    cResult[19] = displayProfile;
                    cResult[20] = showBlur;
                    cResult[21] = user;
                    cResult[22] = tmp23;
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
                  tmp19 = F;
                }
                const tmpResult = tmp(7921);
              }
            }
            const obj9 = { theme, primaryColor, secondaryColor };
            cResult[6] = primaryColor;
            cResult[7] = secondaryColor;
            cResult[8] = theme;
            cResult[9] = obj9;
            tmp17 = obj9;
            const tmp16 = tmp4(7910)(tmp15);
          }
          const obj10 = { user, displayProfile };
          cResult[3] = displayProfile;
          cResult[4] = user;
          cResult[5] = obj10;
          tmp15 = obj10;
          const tmp13 = tmp4(7926)(tmp12);
        }
        const obj11 = { scrollPosition, bannerHeight: tmp11 };
        cResult[0] = tmp11;
        cResult[1] = scrollPosition;
        cResult[2] = obj11;
        tmp12 = obj11;
        const tmp4Result = userTag(4728);
      }
    : (scrollPosition) => {
        ({ user, channel, displayProfile } = scrollPosition);
        let trackUserProfileAction;
        importDefault = undefined;
        const tmp3 = UserProfileSharedStylesDefault();
        trackUserProfileAction = trackUserProfileAction(7872).useUserProfileAnalyticsContext().trackUserProfileAction;
        let obj = trackUserProfileAction(7872);
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
        ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } =
          useUserProfileOverscrollStylesDefault({ scrollPosition: scrollPosition.scrollPosition, bannerHeight: tmp9 }));
        const tmp10 = useUserProfileOverscrollStylesDefault({
          scrollPosition: scrollPosition.scrollPosition,
          bannerHeight: tmp9,
        });
        ({ theme, primaryColor, secondaryColor } = useProfileThemeDefault({ user, displayProfile }));
        const tmp11 = useProfileThemeDefault({ user, displayProfile });
        const userProfileColors = trackUserProfileAction(7921).useUserProfileColors({
          theme,
          primaryColor,
          secondaryColor,
        });
        const containerBackground = userProfileColors.containerBackground;
        if (null == user) {
          return null;
        } else {
          const obj3 = {
            user,
            displayProfile,
            bannerHeight: tmp9,
            bannerAnimatedStyle,
            bannerImageAnimatedStyle,
            blurAnimatedProps,
            showBlur,
          };
          const items = [closure_7(tmp(7927), obj3)];
          const obj4 = { style: contentAnimatedStyle, children: null };
          const obj5 = { user, guildId: null, backgroundColor: null, disableStatus: true };
          let guildId;
          if (displayProfile != null) {
            guildId = displayProfile.guildId;
          }
          obj5.guildId = guildId;
          obj5.backgroundColor = tmp13;
          const items1 = [closure_7(tmp4(7939).OpenableUserProfileAvatar, obj5)];
          const obj6 = { style: null, children: null };
          const items2 = [, ,];
          ({ profileContentWrapper: arr2[0], profileContent: arr2[1] } = tmp3);
          const obj7 = { paddingTop, paddingBottom: tmp(1618)().bottom + closure_4 };
          items2[2] = obj7;
          obj6.style = items2;
          const obj8 = { style: tmp3.primaryInfo, children: null };
          const obj9 = {
            user,
            guildId: null,
            displayName: null,
            pronouns: null,
            badges: null,
            badgeContainerBackground: null,
            displayNameAccessibilityHint: null,
            onPressDisplayName: null,
            onPressUserTag: null,
            onPressPronouns: null,
            showBadgeToastOnPress: true,
          };
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
          obj9.onPressPronouns = function onPressPronouns() {
            trackUserProfileAction({ action: "PRESS_PRONOUNS" });
            ToastUtils.presentUserPronouns();
          };
          obj8.children = closure_7(tmp(10856), obj9);
          const items3 = [closure_7(View, obj8)];
          const obj11 = { style: tmp3.cards, children: null };
          const obj12 = { userId: user.id, displayProfile, channel, style: null };
          const items4 = [tmp3.card];
          const obj13 = { backgroundColor: containerBackground };
          items4[1] = obj13;
          obj12.style = items4;
          obj11.children = closure_7(tmp(10999), obj12);
          items3[1] = closure_7(View, obj11);
          obj6.children = items3;
          items1[1] = closure_8(View, obj6);
          obj4.children = items1;
          items[1] = closure_8(tmp(4618).View, obj4);
          obj10.children = items;
          return closure_8(closure_9, obj10);
        }
        const tmp4Result = trackUserProfileAction(7921);
      },
);
