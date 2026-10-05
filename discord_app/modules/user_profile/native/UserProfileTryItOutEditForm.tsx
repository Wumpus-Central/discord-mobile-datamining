// === Module 15698: UserProfileTryItOutEditForm ===

// Module 15698 (UserProfileTryItOutEditForm)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import native from "native" /* 4589 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import UserProfileActionCreators from "UserProfileActionCreators" /* 7838 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 7840 */;
import useDisplayProfileDefault from "useDisplayProfile" /* 7857 */;
import useProfileThemeDefault from "useProfileTheme" /* 7899 */;
import useUserProfileColors from "useUserProfileColors" /* 7910 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 7913 */;
import useBadgesDefault from "useBadges" /* 7914 */;
import userSettingToActivity from "userSettingToActivity" /* 10826 */;
import UserProfileCustomStatusBubbleDefault from "UserProfileCustomStatusBubble" /* 10827 */;
import UserProfileGradientContainerDefault from "UserProfileGradientContainer" /* 10842 */;
import UserProfilePrimaryInfoDefault from "UserProfilePrimaryInfo" /* 10843 */;
import UserProfileEditFormSharedStylesDefault from "UserProfileEditFormSharedStyles" /* 14429 */;
import EditUserProfileAvatarDefault from "EditUserProfileAvatar" /* 14435 */;
import UserProfileFloatingUpsell from "UserProfileFloatingUpsell" /* 14485 */;
import UserProfileTryItOutGetPremiumUpsellDefault from "UserProfileTryItOutGetPremiumUpsell" /* 15699 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7831 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let currentUser, tryItOutChanges;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
function EditableBanner(user) {
  let intl;
  let obj2;
  let tmp4;
  user = user.user;
  const merged = Object.assign(user, Object.assign({ user: 0 }));
  let analyticsLocations;
  let tmp2 = analyticsLocations(6657);
  analyticsLocations = tmp2(analyticsLocations(6681).EDIT_BANNER).analyticsLocations;
  const items = [analyticsLocations, user];
  const callback = react.useCallback(() => {
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    const obj = { user, analyticsLocations, onBannerChange: UserProfileActionCreators.setTryItOutBanner, isTryItOut: true };
    ActionSheetActionCreatorsDefault;
    const tmp2 = asyncRequire(14418, dependencyMap.paths);
    openLazy(tmp2, "Change Banner", obj);
  }, items);
  let obj = { value: analyticsLocations, children: closure_7(tmp4, obj2) };
  const AnalyticsLocationProvider = user(6657).AnalyticsLocationProvider;
  obj2 = { user, onPressEdit: callback, editButtonAccessibilityLabel: intl.string(user(1126).t.VqsHy0), bannerSafeArea: 12, isUserProfileEditingRefresh: true };
  tmp4 = analyticsLocations(14416);
  const merged1 = Object.assign(merged);
  intl = user(1126).intl;
  return closure_7(AnalyticsLocationProvider, obj);
}
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((currentUser) => {
  let avatarBackground;
  let containerBackground;
  let gradientFallbackBackground;
  let gradientSecondaryBackground;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let primaryColor;
  let secondaryColor;
  let theme;
  let tmp10;
  let tmp9;
  let tryItOutAvatar;
  let tryItOutBanner;
  let tryItOutDisplayNameStyles;
  let tryItOutThemeColors;
  const obj = react2;
  const cResult = obj.c(90);
  currentUser = currentUser.currentUser;
  const tmp5 = UserProfileSharedStylesDefault();
  const tmp6 = UserProfileEditFormSharedStylesDefault();
  const tmp7 = useSafeAreaInsetsDefault();
  const obj2 = UserProfileFloatingUpsell;
  const floatingUpsellHeight = obj2.useFloatingUpsellHeight();
  const onLayout = floatingUpsellHeight.onLayout;
  const height = floatingUpsellHeight.height;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    const fn = function u() {
      tryItOutChanges = tryItOutChanges.getTryItOutChanges();
      return { tryItOutAvatar: tryItOutChanges.tryItOutAvatar, tryItOutBanner: tryItOutChanges.tryItOutBanner, tryItOutThemeColors: tryItOutChanges.tryItOutThemeColors, tryItOutDisplayNameStyles: tryItOutChanges.tryItOutDisplayNameStyles };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = fn;
    tmp9 = items;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp9, tmp10);
  ({ tryItOutAvatar, tryItOutBanner, tryItOutThemeColors, tryItOutDisplayNameStyles } = stateFromStoresObject);
  let str = currentUser.id;
  const tmp4Result = useDisplayProfileDefault;
  if (str == null) {
    str = "";
  }
  const tmp4ResultResult = tmp4Result(str);
  const tmpResult4 = userSettingToActivity;
  const customStatusActivity = tmpResult4.useCustomStatusActivity();
  if (cResult[2] === currentUser.id) {
    let tmp16;
    if (cResult[3] === tryItOutAvatar) {
      tmp16 = cResult[4];
    }
    const tmp18 = useBadgesDefault(tmp4ResultResult);
    if (cResult[5] === currentUser) {
      if (cResult[6] === tmp4ResultResult) {
        let tmp19;
        if (cResult[7] === tryItOutThemeColors) {
          tmp19 = cResult[8];
        }
        ({ theme, primaryColor, secondaryColor } = useProfileThemeDefault(tmp19));
        useProfileThemeDefault(tmp19);
        if (cResult[9] === primaryColor) {
          if (cResult[10] === secondaryColor) {
            let tmp22;
            let tmp26;
            let tmp27;
            if (cResult[11] === theme) {
              tmp22 = cResult[12];
            }
            const tmpResult5 = useUserProfileColors;
            const userProfileColors = tmpResult5.useUserProfileColors(tmp22);
            ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground, avatarBackground } = userProfileColors);
            const sum = tmp7.bottom + height;
            const sum1 = sum + nativeDefault.space.PX_16;
            if (cResult[13] !== avatarBackground) {
              const obj3 = { backgroundColor: avatarBackground };
              cResult[13] = avatarBackground;
              cResult[14] = obj3;
              tmp26 = obj3;
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
              tmp27 = obj4;
            } else {
              tmp27 = cResult[16];
            }
            if (cResult[17] === tmp6.container) {
              let tmp28;
              let tmp29;
              let tmp33;
              if (cResult[18] === tmp27) {
                tmp28 = cResult[19];
              }
              if (cResult[20] !== tmp6.bounceOffset) {
                const obj5 = { style: tmp6.bounceOffset };
                const tmp32 = metroImportDefault(hasOwnProperty, obj5);
                cResult[20] = tmp6.bounceOffset;
                cResult[21] = tmp32;
                tmp29 = tmp32;
              } else {
                tmp29 = cResult[21];
              }
              if (cResult[22] !== gradientSecondaryBackground) {
                const obj6 = { backgroundColor: gradientSecondaryBackground };
                cResult[22] = gradientSecondaryBackground;
                cResult[23] = obj6;
                tmp33 = obj6;
              } else {
                tmp33 = cResult[23];
              }
              if (cResult[24] === currentUser) {
                if (cResult[25] === tmp4ResultResult) {
                  if (cResult[26] === tmp16) {
                    if (cResult[27] === tryItOutBanner) {
                      let tmp34;
                      if (cResult[28] === tryItOutThemeColors) {
                        tmp34 = cResult[29];
                      }
                      if (cResult[30] === tmp26) {
                        if (cResult[31] === tmp6.avatarContainer) {
                          if (cResult[32] === tmp5.avatarBackground) {
                            let tmp38;
                            if (cResult[33] === tmp5.avatarPosition) {
                              tmp38 = cResult[34];
                            }
                            if (cResult[35] === tmp26) {
                              let tmp39;
                              if (cResult[36] === currentUser) {
                                tmp39 = cResult[37];
                              }
                              if (cResult[38] === tmp38) {
                                let tmp42;
                                let tmp46;
                                if (cResult[39] === tmp39) {
                                  tmp42 = cResult[40];
                                }
                                if (cResult[41] !== sum1) {
                                  const obj7 = { paddingTop: 0, paddingBottom: sum1 };
                                  cResult[41] = sum1;
                                  cResult[42] = obj7;
                                  tmp46 = obj7;
                                } else {
                                  tmp46 = cResult[42];
                                }
                                if (cResult[43] === tmp5.profileContent) {
                                  if (cResult[44] === tmp5.profileContentWrapper) {
                                    let tmp47;
                                    if (cResult[45] === tmp46) {
                                      tmp47 = cResult[46];
                                    }
                                    if (cResult[47] === customStatusActivity) {
                                      if (cResult[48] === null != primaryColor) {
                                        if (cResult[49] === tmp5.customStatusBubble) {
                                          let tmp48;
                                          if (cResult[50] === tmp5.emojiOnlyCustomStatusBubble) {
                                            tmp48 = cResult[51];
                                          }
                                          if (cResult[52] === tmp18) {
                                            if (cResult[53] === containerBackground) {
                                              if (cResult[54] === str2) {
                                                if (cResult[55] === str3) {
                                                  if (cResult[56] === currentUser) {
                                                    let tmp51;
                                                    if (cResult[57] === tryItOutDisplayNameStyles) {
                                                      tmp51 = cResult[58];
                                                    }
                                                    if (cResult[59] === gradientFallbackBackground) {
                                                      if (cResult[60] === primaryColor) {
                                                        if (cResult[61] === secondaryColor) {
                                                          if (cResult[62] === tmp47) {
                                                            if (cResult[63] === tmp48) {
                                                              let tmp54;
                                                              if (cResult[64] === tmp51) {
                                                                tmp54 = cResult[65];
                                                              }
                                                              if (cResult[66] === tmp42) {
                                                                let tmp57;
                                                                if (cResult[67] === tmp54) {
                                                                  tmp57 = cResult[68];
                                                                }
                                                                if (cResult[69] === gradientFallbackBackground) {
                                                                  if (cResult[70] === primaryColor) {
                                                                    if (cResult[71] === secondaryColor) {
                                                                      if (cResult[72] === tmp33) {
                                                                        if (cResult[73] === tmp34) {
                                                                          let tmp61;
                                                                          if (cResult[74] === tmp57) {
                                                                            tmp61 = cResult[75];
                                                                          }
                                                                          if (cResult[76] === tmp61) {
                                                                            let tmp64;
                                                                            let tmp68;
                                                                            if (cResult[77] === tmp29) {
                                                                              tmp64 = cResult[78];
                                                                            }
                                                                            if (cResult[79] !== onLayout) {
                                                                              const obj8 = { onLayout };
                                                                              const tmp70 = metroImportDefault(UserProfileTryItOutGetPremiumUpsellDefault, obj8);
                                                                              cResult[79] = onLayout;
                                                                              cResult[80] = tmp70;
                                                                              tmp68 = tmp70;
                                                                            } else {
                                                                              tmp68 = cResult[80];
                                                                            }
                                                                            if (cResult[81] === tmp64) {
                                                                              if (cResult[82] === tmp68) {
                                                                                let tmp71;
                                                                                if (cResult[83] === tmp28) {
                                                                                  tmp71 = cResult[84];
                                                                                }
                                                                                if (cResult[85] === primaryColor) {
                                                                                  if (cResult[86] === secondaryColor) {
                                                                                    if (cResult[87] === tmp71) {
                                                                                      let tmp75;
                                                                                      if (cResult[88] === theme) {
                                                                                        tmp75 = cResult[89];
                                                                                      }
                                                                                      return tmp75;
                                                                                    }
                                                                                  }
                                                                                }
                                                                                const obj9 = { theme, primaryColor, secondaryColor, children: tmp71 };
                                                                                const tmp77 = metroImportDefault(native.ThemeContextProvider, obj9);
                                                                                cResult[85] = primaryColor;
                                                                                cResult[86] = secondaryColor;
                                                                                cResult[87] = tmp71;
                                                                                cResult[88] = theme;
                                                                                cResult[89] = tmp77;
                                                                                tmp75 = tmp77;
                                                                              }
                                                                            }
                                                                            const obj10 = { style: tmp28, children: items1 };
                                                                            items1 = [tmp64, tmp68];
                                                                            const tmp74 = metroImportAll(hasOwnProperty, obj10);
                                                                            cResult[81] = tmp64;
                                                                            cResult[82] = tmp68;
                                                                            cResult[83] = tmp28;
                                                                            cResult[84] = tmp74;
                                                                            tmp71 = tmp74;
                                                                          }
                                                                          const obj11 = { children: items2 };
                                                                          items2 = [tmp29, tmp61];
                                                                          const tmp67 = metroImportAll(React3, obj11);
                                                                          cResult[76] = tmp61;
                                                                          cResult[77] = tmp29;
                                                                          cResult[78] = tmp67;
                                                                          tmp64 = tmp67;
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                                const obj12 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: tmp33, children: items3 };
                                                                items3 = [tmp34, tmp57];
                                                                const tmp63 = metroImportAll(UserProfileGradientContainerDefault, obj12);
                                                                cResult[69] = gradientFallbackBackground;
                                                                cResult[70] = primaryColor;
                                                                cResult[71] = secondaryColor;
                                                                cResult[72] = tmp33;
                                                                cResult[73] = tmp34;
                                                                cResult[74] = tmp57;
                                                                cResult[75] = tmp63;
                                                                tmp61 = tmp63;
                                                              }
                                                              const obj13 = { children: items4 };
                                                              items4 = [tmp42, tmp54];
                                                              const tmp60 = metroImportAll(hasOwnProperty, obj13);
                                                              cResult[66] = tmp42;
                                                              cResult[67] = tmp54;
                                                              cResult[68] = tmp60;
                                                              tmp57 = tmp60;
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    const obj14 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: tmp47, children: items5 };
                                                    items5 = [tmp48, tmp51];
                                                    const tmp56 = metroImportAll(UserProfileGradientContainerDefault, obj14);
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
                                          const obj15 = { user: currentUser, displayName: str2, pronouns: str3, badges: tmp18, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", pendingDisplayNameStyles: tryItOutDisplayNameStyles };
                                          const tmp53 = metroImportDefault(UserProfilePrimaryInfoDefault, obj15);
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
                                    const obj16 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: null, editEnabled: true };
                                    ({ customStatusBubble: obj18.style, emojiOnlyCustomStatusBubble: obj18.emojiOnlyStyle } = tmp5);
                                    const tmp50 = metroImportDefault(UserProfileCustomStatusBubbleDefault, obj16);
                                    cResult[47] = customStatusActivity;
                                    cResult[48] = null != primaryColor;
                                    cResult[49] = tmp5.customStatusBubble;
                                    cResult[50] = tmp5.emojiOnlyCustomStatusBubble;
                                    cResult[51] = tmp50;
                                    tmp48 = tmp50;
                                  }
                                }
                                const items6 = [, , ];
                                ({ profileContentWrapper: arr4[0], profileContent: arr4[1] } = tmp5);
                                items6[2] = tmp46;
                                cResult[43] = tmp5.profileContent;
                                cResult[44] = tmp5.profileContentWrapper;
                                cResult[45] = tmp46;
                                cResult[46] = items6;
                                tmp47 = items6;
                              }
                              const obj17 = { style: tmp38, children: tmp39 };
                              const tmp45 = metroImportDefault(hasOwnProperty, obj17);
                              cResult[38] = tmp38;
                              cResult[39] = tmp39;
                              cResult[40] = tmp45;
                              tmp42 = tmp45;
                            }
                            const obj19 = { user: currentUser, disableStatus: true, statusStyle: tmp26, isTryItOut: true, isUserProfileEditingRefresh: true };
                            const tmp41 = metroImportDefault(EditUserProfileAvatarDefault, obj19);
                            cResult[35] = tmp26;
                            cResult[36] = currentUser;
                            cResult[37] = tmp41;
                            tmp39 = tmp41;
                          }
                        }
                      }
                      const items7 = [, , , ];
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
              const obj20 = { user: currentUser, displayProfile: tmp4ResultResult, pendingAvatarSrc: tmp16, pendingBanner: tryItOutBanner, pendingThemeColors: tryItOutThemeColors };
              const tmp37 = metroImportDefault(EditableBanner, obj20);
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
          }
        }
        const obj21 = { theme, primaryColor, secondaryColor };
        cResult[9] = primaryColor;
        cResult[10] = secondaryColor;
        cResult[11] = theme;
        cResult[12] = obj21;
        tmp22 = obj21;
      }
    }
    const obj22 = { user: currentUser, displayProfile: tmp4ResultResult, pendingThemeColors: tryItOutThemeColors, isPreview: true };
    cResult[5] = currentUser;
    cResult[6] = tmp4ResultResult;
    cResult[7] = tryItOutThemeColors;
    cResult[8] = obj22;
    tmp19 = obj22;
  }
  const obj23 = { userId: currentUser.id, image: tryItOutAvatar };
  const tmpResult6 = RecentAvatarUtils;
  const pendingAvatarSrc = tmpResult6.getPendingAvatarSrc(obj23);
  cResult[2] = currentUser.id;
  cResult[3] = tryItOutAvatar;
  cResult[4] = pendingAvatarSrc;
  tmp16 = pendingAvatarSrc;
}) : ((currentUser) => {
  let avatarBackground;
  let containerBackground;
  let gradientFallbackBackground;
  let gradientSecondaryBackground;
  let height;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj6;
  let onLayout;
  let primaryColor;
  let secondaryColor;
  let theme;
  let tryItOutAvatar;
  let tryItOutBanner;
  let tryItOutDisplayNameStyles;
  let tryItOutThemeColors;
  currentUser = currentUser.currentUser;
  const tmp3 = UserProfileSharedStylesDefault();
  const tmp4 = UserProfileEditFormSharedStylesDefault();
  const tmp5 = useSafeAreaInsetsDefault();
  const obj = UserProfileFloatingUpsell;
  const floatingUpsellHeight = obj.useFloatingUpsellHeight();
  ({ height, onLayout } = floatingUpsellHeight);
  const items = [UserProfileSettingsStore];
  const obj2 = get_initialized;
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    tryItOutChanges = tryItOutChanges.getTryItOutChanges();
    return { tryItOutAvatar: tryItOutChanges.tryItOutAvatar, tryItOutBanner: tryItOutChanges.tryItOutBanner, tryItOutThemeColors: tryItOutChanges.tryItOutThemeColors, tryItOutDisplayNameStyles: tryItOutChanges.tryItOutDisplayNameStyles };
  });
  ({ tryItOutThemeColors, tryItOutAvatar, tryItOutBanner, tryItOutDisplayNameStyles } = stateFromStoresObject);
  let str = currentUser.id;
  const tmp9 = useDisplayProfileDefault;
  if (str == null) {
    str = "";
  }
  const tmp9Result = tmp9(str);
  const tmp6Result = userSettingToActivity;
  const customStatusActivity = tmp6Result.useCustomStatusActivity();
  const obj3 = { userId: currentUser.id, image: tryItOutAvatar };
  const tmp6Result3 = RecentAvatarUtils;
  const pendingAvatarSrc = tmp6Result3.getPendingAvatarSrc(obj3);
  const tmp13 = useBadgesDefault(tmp9Result);
  ({ theme, primaryColor, secondaryColor } = useProfileThemeDefault({ user: currentUser, displayProfile: tmp9Result, pendingThemeColors: tryItOutThemeColors, isPreview: true }));
  useProfileThemeDefault({ user: currentUser, displayProfile: tmp9Result, pendingThemeColors: tryItOutThemeColors, isPreview: true });
  const tmp6Result4 = useUserProfileColors;
  const userProfileColors = tmp6Result4.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground, avatarBackground } = userProfileColors);
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
  const obj5 = { theme, primaryColor, secondaryColor, children: metroImportAll(hasOwnProperty, obj6) };
  obj6 = { style: items1, children: items8 };
  items1 = [tmp4.container, { backgroundColor: gradientSecondaryBackground }];
  const obj7 = { children: items2 };
  const obj8 = { style: tmp4.bounceOffset };
  const ThemeContextProvider = native.ThemeContextProvider;
  items2 = [metroImportDefault(hasOwnProperty, obj8), ];
  const obj9 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: { backgroundColor: gradientSecondaryBackground }, children: items3 };
  items3 = [, ];
  const tmpResult = UserProfileGradientContainerDefault;
  items3[0] = metroImportDefault(EditableBanner, { user: currentUser, displayProfile: tmp9Result, pendingAvatarSrc, pendingBanner: tryItOutBanner, pendingThemeColors: tryItOutThemeColors });
  const obj10 = { children: items5 };
  const obj11 = { style: items4, children: metroImportDefault(EditUserProfileAvatarDefault, { user: currentUser, disableStatus: true, statusStyle: obj4, isTryItOut: true, isUserProfileEditingRefresh: true }) };
  items4 = [, , , ];
  ({ avatarBackground: arr5[0], avatarPosition: arr5[1] } = tmp3);
  items4[2] = tmp4.avatarContainer;
  items4[3] = obj4;
  items5 = [metroImportDefault(hasOwnProperty, obj11), ];
  const obj12 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: items6, children: items7 };
  items6 = [, , ];
  ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp3);
  items6[2] = { paddingTop: 0, paddingBottom: sum1 };
  items7 = [, ];
  const obj13 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp3.customStatusBubble, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true };
  const tmpResult2 = UserProfileGradientContainerDefault;
  items7[0] = metroImportDefault(UserProfileCustomStatusBubbleDefault, obj13);
  items7[1] = metroImportDefault(UserProfilePrimaryInfoDefault, { user: currentUser, displayName: str2, pronouns: str3, badges: tmp13, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", pendingDisplayNameStyles: tryItOutDisplayNameStyles });
  items5[1] = metroImportAll(tmpResult2, obj12);
  items3[1] = metroImportAll(hasOwnProperty, obj10);
  items2[1] = metroImportAll(tmpResult, obj9);
  items8 = [metroImportAll(React3, obj7), metroImportDefault(UserProfileTryItOutGetPremiumUpsellDefault, { onLayout })];
  return metroImportDefault(ThemeContextProvider, obj5);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutEditForm.tsx");

export default tmp4;