// discord_app/modules/user_profile/native/UserProfileTryItOutEditForm.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01987_asyncRequireImpl.js";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import UserProfileActionCreators from "../UserProfileActionCreators.tsx";
import RecentAvatarUtils from "../../recent_avatars/RecentAvatarUtils.tsx";
import useDisplayProfileDefault from "../hooks/useDisplayProfile.tsx";
import useProfileThemeDefault from "../hooks/useProfileTheme.tsx";
import useUserProfileColors from "../hooks/native/useUserProfileColors.tsx";
import UserProfileSharedStylesDefault from "UserProfileSharedStyles.tsx";
import useBadgesDefault from "../hooks/useBadges.tsx";
import userSettingToActivity from "../../custom_status/utils/userSettingToActivity.tsx";
import UserProfileCustomStatusBubbleDefault from "UserProfileCustomStatusBubble.tsx";
import UserProfileGradientContainerDefault from "UserProfileGradientContainer.tsx";
import UserProfilePrimaryInfoDefault from "UserProfilePrimaryInfo.tsx";
import UserProfileEditFormSharedStylesDefault from "UserProfileEditFormSharedStyles.tsx";
import EditUserProfileAvatarDefault from "EditUserProfileAvatar.tsx";
import UserProfileFloatingUpsell from "UserProfileFloatingUpsell.tsx";
import UserProfileTryItOutGetPremiumUpsellDefault from "UserProfileTryItOutGetPremiumUpsell.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserProfileSettingsStore from "../UserProfileSettingsStore.tsx";

require = fn;
function EditableBanner(user) {
  user = user.user;
  const merged = Object.assign(user, Object.assign({ user: 0 }));
  let analyticsLocations;
  analyticsLocations = analyticsLocations(6657)(analyticsLocations(6681).EDIT_BANNER).analyticsLocations;
  const items = [analyticsLocations, user];
  const callback = noop.useCallback(() => {
    const obj2 = { user, analyticsLocations, onBannerChange: null, isTryItOut: true };
    const obj = ActionSheetActionCreatorsDefault;
    obj2.onBannerChange = UserProfileActionCreators.setTryItOutBanner;
    obj.openLazy(asyncRequireImpl(14414, dependencyMap.paths), "Change Banner", obj2);
  }, items);
  let obj = { value: analyticsLocations, children: null };
  let obj2 = {};
  const tmp2 = analyticsLocations(6657);
  const merged1 = Object.assign(merged);
  obj2.user = user;
  obj2.onPressEdit = callback;
  const intl = user(1126).intl;
  obj2.editButtonAccessibilityLabel = intl.string(user(1126).t.VqsHy0);
  obj2.bannerSafeArea = 12;
  obj2.isUserProfileEditingRefresh = true;
  obj.children = closure_7(analyticsLocations(14412), obj2);
  return closure_7(user(6657).AnalyticsLocationProvider, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutEditForm.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (currentUser) => {
      const cResult = c.c(90);
      currentUser = currentUser.currentUser;
      const tmp5 = UserProfileSharedStylesDefault();
      const tmp6 = UserProfileEditFormSharedStylesDefault();
      const tmp7 = useSafeAreaInsetsDefault();
      const floatingUpsellHeight = UserProfileFloatingUpsell.useFloatingUpsellHeight();
      const onLayout = floatingUpsellHeight.onLayout;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserProfileSettingsStore];
        const fn = function u() {
          tryItOutChanges = tryItOutChanges.getTryItOutChanges();
          return {
            tryItOutAvatar: tryItOutChanges.tryItOutAvatar,
            tryItOutBanner: tryItOutChanges.tryItOutBanner,
            tryItOutThemeColors: tryItOutChanges.tryItOutThemeColors,
            tryItOutDisplayNameStyles: tryItOutChanges.tryItOutDisplayNameStyles,
          };
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp10 = fn;
        tmp9 = items;
      } else {
        [tmp9, tmp10] = cResult;
      }
      const stateFromStoresObject = initialize.useStateFromStoresObject(tmp9, tmp10);
      ({ tryItOutAvatar, tryItOutBanner, tryItOutThemeColors, tryItOutDisplayNameStyles } = stateFromStoresObject);
      let str = currentUser.id;
      const tmpResult = initialize;
      if (str == null) {
        str = "";
      }
      const tmp4ResultResult = useDisplayProfileDefault(str);
      const tmp4Result = useDisplayProfileDefault;
      const customStatusActivity = userSettingToActivity.useCustomStatusActivity();
      if (cResult[2] === currentUser.id) {
        if (cResult[3] === tryItOutAvatar) {
          let tmp16 = cResult[4];
        }
        const tmp18 = useBadgesDefault(tmp4ResultResult);
        if (cResult[5] === currentUser) {
          if (cResult[6] === tmp4ResultResult) {
            if (cResult[7] === tryItOutThemeColors) {
              let tmp19 = cResult[8];
            }
            ({ theme, primaryColor, secondaryColor } = useProfileThemeDefault(tmp19));
            if (cResult[9] === primaryColor) {
              if (cResult[10] === secondaryColor) {
                if (cResult[11] === theme) {
                  let tmp22 = cResult[12];
                }
                const userProfileColors = useUserProfileColors.useUserProfileColors(tmp22);
                ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground, avatarBackground } =
                  userProfileColors);
                const sum = tmp7.bottom + floatingUpsellHeight.height;
                const sum1 = sum + nativeDefault.space.PX_16;
                if (cResult[13] !== avatarBackground) {
                  const obj3 = { backgroundColor: avatarBackground };
                  cResult[13] = avatarBackground;
                  cResult[14] = obj3;
                  let tmp26 = obj3;
                } else {
                  tmp26 = cResult[14];
                }
                let str2 = currentUser.globalName;
                if (str2 == null) {
                  str2 = "";
                }
                let str3;
                if (tmp4ResultResult != null) {
                  str3 = tmp4ResultResult.pronouns;
                }
                if (str3 == null) {
                  str3 = "";
                }
                if (cResult[15] !== gradientSecondaryBackground) {
                  const obj4 = { backgroundColor: gradientSecondaryBackground };
                  cResult[15] = gradientSecondaryBackground;
                  cResult[16] = obj4;
                  let tmp27 = obj4;
                } else {
                  tmp27 = cResult[16];
                }
                if (cResult[17] === tmp6.container) {
                  if (cResult[18] === tmp27) {
                    let tmp28 = cResult[19];
                  }
                  if (cResult[20] !== tmp6.bounceOffset) {
                    const obj5 = { style: tmp6.bounceOffset };
                    const tmp32 = React5(hasOwnProperty, obj5);
                    cResult[20] = tmp6.bounceOffset;
                    cResult[21] = tmp32;
                    let tmp29 = tmp32;
                  } else {
                    tmp29 = cResult[21];
                  }
                  if (cResult[22] !== gradientSecondaryBackground) {
                    const obj6 = { backgroundColor: gradientSecondaryBackground };
                    cResult[22] = gradientSecondaryBackground;
                    cResult[23] = obj6;
                    let tmp33 = obj6;
                  } else {
                    tmp33 = cResult[23];
                  }
                  if (cResult[24] === currentUser) {
                    if (cResult[25] === tmp4ResultResult) {
                      if (cResult[26] === tmp16) {
                        if (cResult[27] === tryItOutBanner) {
                          if (cResult[28] === tryItOutThemeColors) {
                            let tmp34 = cResult[29];
                          }
                          if (cResult[30] === tmp26) {
                            if (cResult[31] === tmp6.avatarContainer) {
                              if (cResult[32] === tmp5.avatarBackground) {
                                if (cResult[33] === tmp5.avatarPosition) {
                                  let tmp38 = cResult[34];
                                }
                                if (cResult[35] === tmp26) {
                                  if (cResult[36] === currentUser) {
                                    let tmp39 = cResult[37];
                                  }
                                  if (cResult[38] === tmp38) {
                                    if (cResult[39] === tmp39) {
                                      let tmp42 = cResult[40];
                                    }
                                    if (cResult[41] !== sum1) {
                                      const obj7 = { paddingTop: 0, paddingBottom: sum1 };
                                      cResult[41] = sum1;
                                      cResult[42] = obj7;
                                      let tmp46 = obj7;
                                    } else {
                                      tmp46 = cResult[42];
                                    }
                                    if (cResult[43] === tmp5.profileContent) {
                                      if (cResult[44] === tmp5.profileContentWrapper) {
                                        if (cResult[45] === tmp46) {
                                          let tmp47 = cResult[46];
                                        }
                                        if (cResult[47] === customStatusActivity) {
                                          if (cResult[48] === tmp21) {
                                            if (cResult[49] === tmp5.customStatusBubble) {
                                              if (cResult[50] === tmp5.emojiOnlyCustomStatusBubble) {
                                                let tmp48 = cResult[51];
                                              }
                                              if (cResult[52] === tmp18) {
                                                if (cResult[53] === containerBackground) {
                                                  if (cResult[54] === str2) {
                                                    if (cResult[55] === str3) {
                                                      if (cResult[56] === currentUser) {
                                                        if (cResult[57] === tryItOutDisplayNameStyles) {
                                                          let tmp51 = cResult[58];
                                                        }
                                                        if (cResult[59] === gradientFallbackBackground) {
                                                          if (cResult[60] === primaryColor) {
                                                            if (cResult[61] === secondaryColor) {
                                                              if (cResult[62] === tmp47) {
                                                                if (cResult[63] === tmp48) {
                                                                  if (cResult[64] === tmp51) {
                                                                    let tmp54 = cResult[65];
                                                                  }
                                                                  if (cResult[66] === tmp42) {
                                                                    if (cResult[67] === tmp54) {
                                                                      let tmp57 = cResult[68];
                                                                    }
                                                                    if (cResult[69] === gradientFallbackBackground) {
                                                                      if (cResult[70] === primaryColor) {
                                                                        if (cResult[71] === secondaryColor) {
                                                                          if (cResult[72] === tmp33) {
                                                                            if (cResult[73] === tmp34) {
                                                                              if (cResult[74] === tmp57) {
                                                                                let tmp61 = cResult[75];
                                                                              }
                                                                              if (cResult[76] === tmp61) {
                                                                                if (cResult[77] === tmp29) {
                                                                                  let tmp64 = cResult[78];
                                                                                }
                                                                                if (cResult[79] !== onLayout) {
                                                                                  const obj8 = { onLayout };
                                                                                  const tmp70 = React5(
                                                                                    UserProfileTryItOutGetPremiumUpsellDefault,
                                                                                    obj8,
                                                                                  );
                                                                                  cResult[79] = onLayout;
                                                                                  cResult[80] = tmp70;
                                                                                  let tmp68 = tmp70;
                                                                                } else {
                                                                                  tmp68 = cResult[80];
                                                                                }
                                                                                if (cResult[81] === tmp64) {
                                                                                  if (cResult[82] === tmp68) {
                                                                                    if (cResult[83] === tmp28) {
                                                                                      let tmp71 = cResult[84];
                                                                                    }
                                                                                    if (cResult[85] === primaryColor) {
                                                                                      if (
                                                                                        cResult[86] === secondaryColor
                                                                                      ) {
                                                                                        if (cResult[87] === tmp71) {
                                                                                          if (cResult[88] === theme) {
                                                                                            let tmp75 = cResult[89];
                                                                                          }
                                                                                          return tmp75;
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                    const obj9 = {
                                                                                      theme,
                                                                                      primaryColor,
                                                                                      secondaryColor,
                                                                                      children: tmp71,
                                                                                    };
                                                                                    const tmp77 = React5(
                                                                                      native.ThemeContextProvider,
                                                                                      obj9,
                                                                                    );
                                                                                    cResult[85] = primaryColor;
                                                                                    cResult[86] = secondaryColor;
                                                                                    cResult[87] = tmp71;
                                                                                    cResult[88] = theme;
                                                                                    cResult[89] = tmp77;
                                                                                    tmp75 = tmp77;
                                                                                  }
                                                                                }
                                                                                const obj10 = {
                                                                                  style: tmp28,
                                                                                  children: null,
                                                                                };
                                                                                const items1 = [tmp64, tmp68];
                                                                                obj10.children = items1;
                                                                                const tmp74 = closure_1_8(
                                                                                  hasOwnProperty,
                                                                                  obj10,
                                                                                );
                                                                                cResult[81] = tmp64;
                                                                                cResult[82] = tmp68;
                                                                                cResult[83] = tmp28;
                                                                                cResult[84] = tmp74;
                                                                                tmp71 = tmp74;
                                                                              }
                                                                              const obj11 = { children: null };
                                                                              const items2 = [tmp29, tmp61];
                                                                              obj11.children = items2;
                                                                              const tmp67 = closure_1_8(React4, obj11);
                                                                              cResult[76] = tmp61;
                                                                              cResult[77] = tmp29;
                                                                              cResult[78] = tmp67;
                                                                              tmp64 = tmp67;
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                    const obj12 = {
                                                                      fallbackBackground: gradientFallbackBackground,
                                                                      primaryColor,
                                                                      secondaryColor,
                                                                      containerStyle: tmp33,
                                                                      children: null,
                                                                    };
                                                                    const items3 = [tmp34, tmp57];
                                                                    obj12.children = items3;
                                                                    const tmp63 = closure_1_8(
                                                                      UserProfileGradientContainerDefault,
                                                                      obj12,
                                                                    );
                                                                    cResult[69] = gradientFallbackBackground;
                                                                    cResult[70] = primaryColor;
                                                                    cResult[71] = secondaryColor;
                                                                    cResult[72] = tmp33;
                                                                    cResult[73] = tmp34;
                                                                    cResult[74] = tmp57;
                                                                    cResult[75] = tmp63;
                                                                    tmp61 = tmp63;
                                                                  }
                                                                  const obj13 = { children: null };
                                                                  const items4 = [tmp42, tmp54];
                                                                  obj13.children = items4;
                                                                  const tmp60 = closure_1_8(hasOwnProperty, obj13);
                                                                  cResult[66] = tmp42;
                                                                  cResult[67] = tmp54;
                                                                  cResult[68] = tmp60;
                                                                  tmp57 = tmp60;
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                        const obj14 = {
                                                          fallbackBackground: gradientFallbackBackground,
                                                          primaryColor,
                                                          secondaryColor,
                                                          containerStyle: tmp47,
                                                          children: null,
                                                        };
                                                        const items5 = [tmp48, tmp51];
                                                        obj14.children = items5;
                                                        const tmp56 = closure_1_8(
                                                          UserProfileGradientContainerDefault,
                                                          obj14,
                                                        );
                                                        cResult[59] = gradientFallbackBackground;
                                                        cResult[60] = primaryColor;
                                                        cResult[61] = secondaryColor;
                                                        cResult[62] = tmp47;
                                                        cResult[63] = tmp48;
                                                        cResult[64] = tmp51;
                                                        cResult[65] = tmp56;
                                                        tmp54 = tmp56;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              const obj15 = {
                                                user: currentUser,
                                                displayName: str2,
                                                pronouns: str3,
                                                badges: tmp18,
                                                badgeContainerBackground: containerBackground,
                                                displayNameAccessibilityRole: "header",
                                                pendingDisplayNameStyles: tryItOutDisplayNameStyles,
                                              };
                                              const tmp53 = React5(UserProfilePrimaryInfoDefault, obj15);
                                              cResult[52] = tmp18;
                                              cResult[53] = containerBackground;
                                              cResult[54] = str2;
                                              cResult[55] = str3;
                                              cResult[56] = currentUser;
                                              cResult[57] = tryItOutDisplayNameStyles;
                                              cResult[58] = tmp53;
                                              tmp51 = tmp53;
                                            }
                                          }
                                        }
                                        const obj16 = {
                                          customStatusActivity,
                                          hasCustomProfileTheme: tmp21,
                                          style: null,
                                          emojiOnlyStyle: null,
                                          editEnabled: true,
                                        };
                                        ({
                                          customStatusBubble: obj18.style,
                                          emojiOnlyCustomStatusBubble: obj18.emojiOnlyStyle,
                                        } = tmp5);
                                        const tmp50 = React5(UserProfileCustomStatusBubbleDefault, obj16);
                                        cResult[47] = customStatusActivity;
                                        cResult[48] = tmp21;
                                        cResult[49] = tmp5.customStatusBubble;
                                        cResult[50] = tmp5.emojiOnlyCustomStatusBubble;
                                        cResult[51] = tmp50;
                                        tmp48 = tmp50;
                                      }
                                    }
                                    const items6 = [, ,];
                                    ({ profileContentWrapper: arr4[0], profileContent: arr4[1] } = tmp5);
                                    items6[2] = tmp46;
                                    cResult[43] = tmp5.profileContent;
                                    cResult[44] = tmp5.profileContentWrapper;
                                    cResult[45] = tmp46;
                                    cResult[46] = items6;
                                    tmp47 = items6;
                                  }
                                  const obj17 = { style: tmp38, children: tmp39 };
                                  const tmp45 = React5(hasOwnProperty, obj17);
                                  cResult[38] = tmp38;
                                  cResult[39] = tmp39;
                                  cResult[40] = tmp45;
                                  tmp42 = tmp45;
                                }
                                const obj19 = {
                                  user: currentUser,
                                  disableStatus: true,
                                  statusStyle: tmp26,
                                  isTryItOut: true,
                                  isUserProfileEditingRefresh: true,
                                };
                                const tmp41 = React5(EditUserProfileAvatarDefault, obj19);
                                cResult[35] = tmp26;
                                cResult[36] = currentUser;
                                cResult[37] = tmp41;
                                tmp39 = tmp41;
                              }
                            }
                          }
                          const items7 = [, , ,];
                          ({ avatarBackground: arr3[0], avatarPosition: arr3[1] } = tmp5);
                          items7[2] = tmp6.avatarContainer;
                          items7[3] = tmp26;
                          cResult[30] = tmp26;
                          cResult[31] = tmp6.avatarContainer;
                          cResult[32] = tmp5.avatarBackground;
                          cResult[33] = tmp5.avatarPosition;
                          cResult[34] = items7;
                          tmp38 = items7;
                        }
                      }
                    }
                  }
                  const obj20 = {
                    user: currentUser,
                    displayProfile: tmp4ResultResult,
                    pendingAvatarSrc: tmp16,
                    pendingBanner: tryItOutBanner,
                    pendingThemeColors: tryItOutThemeColors,
                  };
                  const tmp37 = React5(EditableBanner, obj20);
                  cResult[24] = currentUser;
                  cResult[25] = tmp4ResultResult;
                  cResult[26] = tmp16;
                  cResult[27] = tryItOutBanner;
                  cResult[28] = tryItOutThemeColors;
                  cResult[29] = tmp37;
                  tmp34 = tmp37;
                }
                const items8 = [tmp6.container, tmp27];
                cResult[17] = tmp6.container;
                cResult[18] = tmp27;
                cResult[19] = items8;
                tmp28 = items8;
                const tmpResult5 = useUserProfileColors;
              }
            }
            const obj21 = { theme, primaryColor, secondaryColor };
            cResult[9] = primaryColor;
            cResult[10] = secondaryColor;
            cResult[11] = theme;
            cResult[12] = obj21;
            tmp22 = obj21;
            const tmp20 = useProfileThemeDefault(tmp19);
          }
        }
        const obj22 = {
          user: currentUser,
          displayProfile: tmp4ResultResult,
          pendingThemeColors: tryItOutThemeColors,
          isPreview: true,
        };
        cResult[5] = currentUser;
        cResult[6] = tmp4ResultResult;
        cResult[7] = tryItOutThemeColors;
        cResult[8] = obj22;
        tmp19 = obj22;
      }
      const tmpResult4 = userSettingToActivity;
      const pendingAvatarSrc = RecentAvatarUtils.getPendingAvatarSrc({ userId: currentUser.id, image: tryItOutAvatar });
      cResult[2] = currentUser.id;
      cResult[3] = tryItOutAvatar;
      cResult[4] = pendingAvatarSrc;
      tmp16 = pendingAvatarSrc;
      const obj23 = { userId: currentUser.id, image: tryItOutAvatar };
      const tmpResult6 = RecentAvatarUtils;
    }
  : (currentUser) => {
      currentUser = currentUser.currentUser;
      const tmp3 = UserProfileSharedStylesDefault();
      const tmp4 = UserProfileEditFormSharedStylesDefault();
      const tmp5 = useSafeAreaInsetsDefault();
      const floatingUpsellHeight = UserProfileFloatingUpsell.useFloatingUpsellHeight();
      ({ height, onLayout } = floatingUpsellHeight);
      const items = [UserProfileSettingsStore];
      const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => {
        tryItOutChanges = tryItOutChanges.getTryItOutChanges();
        return {
          tryItOutAvatar: tryItOutChanges.tryItOutAvatar,
          tryItOutBanner: tryItOutChanges.tryItOutBanner,
          tryItOutThemeColors: tryItOutChanges.tryItOutThemeColors,
          tryItOutDisplayNameStyles: tryItOutChanges.tryItOutDisplayNameStyles,
        };
      });
      ({ tryItOutThemeColors, tryItOutAvatar, tryItOutBanner, tryItOutDisplayNameStyles } = stateFromStoresObject);
      let str = currentUser.id;
      if (str == null) {
        str = "";
      }
      const tmp9Result = useDisplayProfileDefault(str);
      const customStatusActivity = userSettingToActivity.useCustomStatusActivity();
      const tmp6Result = userSettingToActivity;
      const pendingAvatarSrc = RecentAvatarUtils.getPendingAvatarSrc({ userId: currentUser.id, image: tryItOutAvatar });
      const obj3 = { userId: currentUser.id, image: tryItOutAvatar };
      const tmp6Result3 = RecentAvatarUtils;
      const tmp13 = useBadgesDefault(tmp9Result);
      ({ theme, primaryColor, secondaryColor } = useProfileThemeDefault({
        user: currentUser,
        displayProfile: tmp9Result,
        pendingThemeColors: tryItOutThemeColors,
        isPreview: true,
      }));
      const tmp14 = useProfileThemeDefault({
        user: currentUser,
        displayProfile: tmp9Result,
        pendingThemeColors: tryItOutThemeColors,
        isPreview: true,
      });
      const userProfileColors = useUserProfileColors.useUserProfileColors({ theme, primaryColor, secondaryColor });
      ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground, avatarBackground } =
        userProfileColors);
      const sum = tmp5.bottom + height;
      const obj4 = { backgroundColor: avatarBackground };
      let str2 = currentUser.globalName;
      const sum1 = sum + nativeDefault.space.PX_16;
      if (str2 == null) {
        str2 = "";
      }
      let str3;
      if (tmp9Result != null) {
        str3 = tmp9Result.pronouns;
      }
      if (str3 == null) {
        str3 = "";
      }
      const obj5 = { theme, primaryColor, secondaryColor, children: null };
      const obj6 = { style: null, children: null };
      const items1 = [tmp4.container, { backgroundColor: gradientSecondaryBackground }];
      obj6.style = items1;
      const obj7 = { children: null };
      const items2 = [React5(hasOwnProperty, { style: tmp4.bounceOffset })];
      const obj9 = {
        fallbackBackground: gradientFallbackBackground,
        primaryColor,
        secondaryColor,
        containerStyle: { backgroundColor: gradientSecondaryBackground },
        children: null,
      };
      const obj8 = { style: tmp4.bounceOffset };
      const tmp6Result4 = useUserProfileColors;
      const items3 = [
        React5(EditableBanner, {
          user: currentUser,
          displayProfile: tmp9Result,
          pendingAvatarSrc,
          pendingBanner: tryItOutBanner,
          pendingThemeColors: tryItOutThemeColors,
        }),
      ];
      const obj10 = { children: null };
      const obj11 = {
        style: null,
        children: React5(EditUserProfileAvatarDefault, {
          user: currentUser,
          disableStatus: true,
          statusStyle: obj4,
          isTryItOut: true,
          isUserProfileEditingRefresh: true,
        }),
      };
      const items4 = [, , ,];
      ({ avatarBackground: arr5[0], avatarPosition: arr5[1] } = tmp3);
      items4[2] = tmp4.avatarContainer;
      items4[3] = obj4;
      obj11.style = items4;
      const items5 = [React5(hasOwnProperty, obj11)];
      const obj12 = {
        fallbackBackground: gradientFallbackBackground,
        primaryColor,
        secondaryColor,
        containerStyle: null,
        children: null,
      };
      const items6 = [, ,];
      ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp3);
      items6[2] = { paddingTop: 0, paddingBottom: sum1 };
      obj12.containerStyle = items6;
      const tmpResult = UserProfileGradientContainerDefault;
      const items7 = [
        React5(UserProfileCustomStatusBubbleDefault, {
          customStatusActivity,
          hasCustomProfileTheme: null != primaryColor,
          style: tmp3.customStatusBubble,
          emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble,
          editEnabled: true,
        }),
        React5(UserProfilePrimaryInfoDefault, {
          user: currentUser,
          displayName: str2,
          pronouns: str3,
          badges: tmp13,
          badgeContainerBackground: containerBackground,
          displayNameAccessibilityRole: "header",
          pendingDisplayNameStyles: tryItOutDisplayNameStyles,
        }),
      ];
      obj12.children = items7;
      items5[1] = closure_1_8(UserProfileGradientContainerDefault, obj12);
      obj10.children = items5;
      items3[1] = closure_1_8(hasOwnProperty, obj10);
      obj9.children = items3;
      items2[1] = closure_1_8(tmpResult, obj9);
      obj7.children = items2;
      const items8 = [closure_1_8(React4, obj7), React5(UserProfileTryItOutGetPremiumUpsellDefault, { onLayout })];
      obj6.children = items8;
      obj5.children = closure_1_8(hasOwnProperty, obj6);
      return React5(native.ThemeContextProvider, obj5);
    };
