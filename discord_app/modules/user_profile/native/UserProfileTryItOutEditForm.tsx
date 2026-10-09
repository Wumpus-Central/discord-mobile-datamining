// === Module 16108: UserProfileTryItOutEditForm ===

// Module 16108 (UserProfileTryItOutEditForm)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import native from "native" /* 4788 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6848 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6872 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 8277 */;
import useDisplayProfileDefault from "useDisplayProfile" /* 8294 */;
import useProfileThemeDefault from "useProfileTheme" /* 8337 */;
import useUserProfileColors from "useUserProfileColors" /* 8348 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8351 */;
import useBadgesDefault from "useBadges" /* 8352 */;
import userSettingToActivity from "userSettingToActivity" /* 10478 */;
import UserProfileCustomStatusBubbleDefault from "UserProfileCustomStatusBubble" /* 10479 */;
import UserProfileGradientContainerDefault from "UserProfileGradientContainer" /* 10496 */;
import UserProfilePrimaryInfoDefault from "UserProfilePrimaryInfo" /* 10497 */;
import ThemeContextProvider_RootThemeContextProvider from "ThemeContextProvider/RootThemeContextProvider" /* 11148 */;
import useOpenChangeBannerActionSheetDefault from "useOpenChangeBannerActionSheet" /* 14763 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 14776 */;
import UserProfileEditFormSharedStylesDefault from "UserProfileEditFormSharedStyles" /* 14778 */;
import EditUserProfileAvatarDefault from "EditUserProfileAvatar" /* 14784 */;
import UserProfileTryItOutFieldsDefault from "UserProfileTryItOutFields" /* 14848 */;
import UserProfileFloatingUpsell from "UserProfileFloatingUpsell" /* 14869 */;
import UserProfileTryItOutGetPremiumUpsellDefault from "UserProfileTryItOutGetPremiumUpsell" /* 16109 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8268 */;

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
let closure_3 = ["user"];
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditableBanner(user) {
  const cResult = c.c(14);
  if (cResult[0] !== user) {
    user = user.user;
    const tmp8 = _objectWithoutProperties(user, closure_3);
    cResult[0] = user;
    cResult[1] = tmp8;
    cResult[2] = user;
    let tmp5 = user;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.EDIT_BANNER).analyticsLocations;
  if (cResult[3] === analyticsLocations) {
    if (cResult[4] === tmp5) {
      let tmp11 = cResult[5];
    }
    const tmp12 = useOpenChangeBannerActionSheetDefault(tmp11);
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.VqsHy0);
      cResult[6] = stringResult;
      let tmp14 = stringResult;
    } else {
      tmp14 = cResult[6];
    }
    if (cResult[7] === tmp12) {
      if (cResult[8] === tmp4) {
        if (cResult[9] === tmp5) {
          let tmp16 = cResult[10];
        }
        if (cResult[11] === analyticsLocations) {
          if (cResult[12] === tmp16) {
            let tmp23 = cResult[13];
          }
          return tmp23;
        }
        const obj2 = { value: analyticsLocations, children: tmp16 };
        const tmp25 = closure_1_8(useAnalyticsLocations.AnalyticsLocationProvider, obj2);
        cResult[11] = analyticsLocations;
        cResult[12] = tmp16;
        cResult[13] = tmp25;
        tmp23 = tmp25;
      }
    }
    const obj3 = {};
    const merged = Object.assign(tmp4);
    obj3.user = tmp5;
    obj3.onPressEdit = tmp12;
    obj3.editButtonAccessibilityLabel = tmp14;
    obj3.bannerSafeArea = 12;
    obj3.isUserProfileEditingRefresh = true;
    const tmp22 = closure_1_8(UserProfileEditBannerButtonDefault, obj3);
    cResult[7] = tmp12;
    cResult[8] = tmp4;
    cResult[9] = tmp5;
    cResult[10] = tmp22;
    tmp16 = tmp22;
    const tmp9Result = UserProfileEditBannerButtonDefault;
  }
  const obj4 = { user: tmp5, analyticsLocations, isTryItOut: true };
  cResult[3] = analyticsLocations;
  cResult[4] = tmp5;
  cResult[5] = obj4;
  tmp11 = obj4;
}) : (function EditableBanner(user) {
  user = user.user;
  const merged = Object.assign(user, Object.assign({ user: 0 }));
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.EDIT_BANNER).analyticsLocations;
  const obj = { value: analyticsLocations, children: null };
  const obj2 = {};
  const tmp3 = useOpenChangeBannerActionSheetDefault({ user, analyticsLocations, isTryItOut: true });
  const merged1 = Object.assign(merged);
  obj2.user = user;
  obj2.onPressEdit = tmp3;
  const intl = util.intl;
  obj2.editButtonAccessibilityLabel = intl.string(util.t.VqsHy0);
  obj2.bannerSafeArea = 12;
  obj2.isUserProfileEditingRefresh = true;
  obj.children = closure_1_8(UserProfileEditBannerButtonDefault, obj2);
  return closure_1_8(useAnalyticsLocations.AnalyticsLocationProvider, obj);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutEditForm.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileTryItOutEditForm(arg0) {
  const cResult = c.c(102);
  ({ currentUser, initialTarget } = arg0);
  const tmp5 = UserProfileSharedStylesDefault();
  const tmp6 = UserProfileEditFormSharedStylesDefault();
  const tmp7 = useSafeAreaInsetsDefault();
  const floatingUpsellHeight = UserProfileFloatingUpsell.useFloatingUpsellHeight();
  const onLayout = floatingUpsellHeight.onLayout;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    const fn = function n() {
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
            ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground, avatarBackground } = userProfileColors);
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
                const tmp32 = closure_1_8(timestampProducer, obj5);
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
                                                    if (cResult[59] !== containerBackground) {
                                                      const obj8 = { backgroundColor: containerBackground };
                                                      cResult[59] = containerBackground;
                                                      cResult[60] = obj8;
                                                      let tmp54 = obj8;
                                                    } else {
                                                      tmp54 = cResult[60];
                                                    }
                                                    if (cResult[61] === tmp6.formContainer) {
                                                      if (cResult[62] === tmp54) {
                                                        let tmp55 = cResult[63];
                                                      }
                                                      if (cResult[64] === currentUser) {
                                                        if (cResult[65] === initialTarget) {
                                                          let tmp56 = cResult[66];
                                                        }
                                                        if (cResult[67] === tmp55) {
                                                          if (cResult[68] === tmp56) {
                                                            let tmp59 = cResult[69];
                                                          }
                                                          if (cResult[70] === gradientFallbackBackground) {
                                                            if (cResult[71] === primaryColor) {
                                                              if (cResult[72] === secondaryColor) {
                                                                if (cResult[73] === tmp47) {
                                                                  if (cResult[74] === tmp48) {
                                                                    if (cResult[75] === tmp51) {
                                                                      if (cResult[76] === tmp59) {
                                                                        let tmp63 = cResult[77];
                                                                      }
                                                                      if (cResult[78] === tmp42) {
                                                                        if (cResult[79] === tmp63) {
                                                                          let tmp66 = cResult[80];
                                                                        }
                                                                        if (cResult[81] === gradientFallbackBackground) {
                                                                          if (cResult[82] === primaryColor) {
                                                                            if (cResult[83] === secondaryColor) {
                                                                              if (cResult[84] === tmp33) {
                                                                                if (cResult[85] === tmp34) {
                                                                                  if (cResult[86] === tmp66) {
                                                                                    let tmp70 = cResult[87];
                                                                                  }
                                                                                  if (cResult[88] === tmp70) {
                                                                                    if (cResult[89] === tmp29) {
                                                                                      let tmp73 = cResult[90];
                                                                                    }
                                                                                    if (cResult[91] !== onLayout) {
                                                                                      const obj9 = { children: null };
                                                                                      const obj10 = { onLayout };
                                                                                      obj9.children = closure_1_8(UserProfileTryItOutGetPremiumUpsellDefault, obj10);
                                                                                      const tmp79 = closure_1_8(ThemeContextProvider_RootThemeContextProvider.DisableCustomTheme, obj9);
                                                                                      cResult[91] = onLayout;
                                                                                      cResult[92] = tmp79;
                                                                                      let tmp77 = tmp79;
                                                                                    } else {
                                                                                      tmp77 = cResult[92];
                                                                                    }
                                                                                    if (cResult[93] === tmp73) {
                                                                                      if (cResult[94] === tmp77) {
                                                                                        if (cResult[95] === tmp28) {
                                                                                          let tmp80 = cResult[96];
                                                                                        }
                                                                                        if (cResult[97] === primaryColor) {
                                                                                          if (cResult[98] === secondaryColor) {
                                                                                            if (cResult[99] === tmp80) {
                                                                                              if (cResult[100] === theme) {
                                                                                                let tmp84 = cResult[101];
                                                                                              }
                                                                                              return tmp84;
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                        const obj11 = { theme, primaryColor, secondaryColor, children: tmp80 };
                                                                                        const tmp86 = closure_1_8(native.ThemeContextProvider, obj11);
                                                                                        cResult[97] = primaryColor;
                                                                                        cResult[98] = secondaryColor;
                                                                                        cResult[99] = tmp80;
                                                                                        cResult[100] = theme;
                                                                                        cResult[101] = tmp86;
                                                                                        tmp84 = tmp86;
                                                                                      }
                                                                                    }
                                                                                    const obj12 = { style: tmp28, children: null };
                                                                                    const items1 = [tmp73, tmp77];
                                                                                    obj12.children = items1;
                                                                                    const tmp83 = options(timestampProducer, obj12);
                                                                                    cResult[93] = tmp73;
                                                                                    cResult[94] = tmp77;
                                                                                    cResult[95] = tmp28;
                                                                                    cResult[96] = tmp83;
                                                                                    tmp80 = tmp83;
                                                                                  }
                                                                                  const obj13 = { children: null };
                                                                                  const items2 = [tmp29, tmp70];
                                                                                  obj13.children = items2;
                                                                                  const tmp76 = options(hasOwnProperty, obj13);
                                                                                  cResult[88] = tmp70;
                                                                                  cResult[89] = tmp29;
                                                                                  cResult[90] = tmp76;
                                                                                  tmp73 = tmp76;
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                        const obj14 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: tmp33, children: null };
                                                                        const items3 = [tmp34, tmp66];
                                                                        obj14.children = items3;
                                                                        const tmp72 = options(UserProfileGradientContainerDefault, obj14);
                                                                        cResult[81] = gradientFallbackBackground;
                                                                        cResult[82] = primaryColor;
                                                                        cResult[83] = secondaryColor;
                                                                        cResult[84] = tmp33;
                                                                        cResult[85] = tmp34;
                                                                        cResult[86] = tmp66;
                                                                        cResult[87] = tmp72;
                                                                        tmp70 = tmp72;
                                                                      }
                                                                      const obj15 = { children: null };
                                                                      const items4 = [tmp42, tmp63];
                                                                      obj15.children = items4;
                                                                      const tmp69 = options(timestampProducer, obj15);
                                                                      cResult[78] = tmp42;
                                                                      cResult[79] = tmp63;
                                                                      cResult[80] = tmp69;
                                                                      tmp66 = tmp69;
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                          const obj16 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: tmp47, children: null };
                                                          const items5 = [tmp48, tmp51, tmp59];
                                                          obj16.children = items5;
                                                          const tmp65 = options(UserProfileGradientContainerDefault, obj16);
                                                          cResult[70] = gradientFallbackBackground;
                                                          cResult[71] = primaryColor;
                                                          cResult[72] = secondaryColor;
                                                          cResult[73] = tmp47;
                                                          cResult[74] = tmp48;
                                                          cResult[75] = tmp51;
                                                          cResult[76] = tmp59;
                                                          cResult[77] = tmp65;
                                                          tmp63 = tmp65;
                                                        }
                                                        const obj17 = { style: tmp55, children: tmp56 };
                                                        const tmp62 = closure_1_8(timestampProducer, obj17);
                                                        cResult[67] = tmp55;
                                                        cResult[68] = tmp56;
                                                        cResult[69] = tmp62;
                                                        tmp59 = tmp62;
                                                      }
                                                      const obj19 = { currentUser, mode: "edit", initialTarget };
                                                      const tmp58 = closure_1_8(UserProfileTryItOutFieldsDefault, obj19);
                                                      cResult[64] = currentUser;
                                                      cResult[65] = initialTarget;
                                                      cResult[66] = tmp58;
                                                      tmp56 = tmp58;
                                                    }
                                                    const items6 = [tmp6.formContainer, tmp54];
                                                    cResult[61] = tmp6.formContainer;
                                                    cResult[62] = tmp54;
                                                    cResult[63] = items6;
                                                    tmp55 = items6;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          const obj20 = { user: currentUser, displayName: str2, pronouns: str3, badges: tmp18, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", pendingDisplayNameStyles: tryItOutDisplayNameStyles };
                                          const tmp53 = closure_1_8(UserProfilePrimaryInfoDefault, obj20);
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
                                    const obj21 = { customStatusActivity, hasCustomProfileTheme: tmp21, style: null, emojiOnlyStyle: null, editEnabled: true };
                                    ({ customStatusBubble: obj18.style, emojiOnlyCustomStatusBubble: obj18.emojiOnlyStyle } = tmp5);
                                    const tmp50 = closure_1_8(UserProfileCustomStatusBubbleDefault, obj21);
                                    cResult[47] = customStatusActivity;
                                    cResult[48] = tmp21;
                                    cResult[49] = tmp5.customStatusBubble;
                                    cResult[50] = tmp5.emojiOnlyCustomStatusBubble;
                                    cResult[51] = tmp50;
                                    tmp48 = tmp50;
                                  }
                                }
                                const items7 = [, , ];
                                ({ profileContentWrapper: arr4[0], profileContent: arr4[1] } = tmp5);
                                items7[2] = tmp46;
                                cResult[43] = tmp5.profileContent;
                                cResult[44] = tmp5.profileContentWrapper;
                                cResult[45] = tmp46;
                                cResult[46] = items7;
                                tmp47 = items7;
                              }
                              const obj22 = { style: tmp38, children: tmp39 };
                              const tmp45 = closure_1_8(timestampProducer, obj22);
                              cResult[38] = tmp38;
                              cResult[39] = tmp39;
                              cResult[40] = tmp45;
                              tmp42 = tmp45;
                            }
                            const obj23 = { user: currentUser, disableStatus: true, statusStyle: tmp26, isTryItOut: true, isUserProfileEditingRefresh: true };
                            const tmp41 = closure_1_8(EditUserProfileAvatarDefault, obj23);
                            cResult[35] = tmp26;
                            cResult[36] = currentUser;
                            cResult[37] = tmp41;
                            tmp39 = tmp41;
                          }
                        }
                      }
                      const items8 = [, , , ];
                      ({ avatarBackground: arr3[0], avatarPosition: arr3[1] } = tmp5);
                      items8[2] = tmp6.avatarContainer;
                      items8[3] = tmp26;
                      cResult[30] = tmp26;
                      cResult[31] = tmp6.avatarContainer;
                      cResult[32] = tmp5.avatarBackground;
                      cResult[33] = tmp5.avatarPosition;
                      cResult[34] = items8;
                      tmp38 = items8;
                    }
                  }
                }
              }
              const obj24 = { user: currentUser, displayProfile: tmp4ResultResult, pendingAvatarSrc: tmp16, pendingBanner: tryItOutBanner, pendingThemeColors: tryItOutThemeColors };
              const tmp37 = closure_1_8(closure_10, obj24);
              cResult[24] = currentUser;
              cResult[25] = tmp4ResultResult;
              cResult[26] = tmp16;
              cResult[27] = tryItOutBanner;
              cResult[28] = tryItOutThemeColors;
              cResult[29] = tmp37;
              tmp34 = tmp37;
            }
            const items9 = [tmp6.container, tmp27];
            cResult[17] = tmp6.container;
            cResult[18] = tmp27;
            cResult[19] = items9;
            tmp28 = items9;
            const tmpResult5 = useUserProfileColors;
          }
        }
        const obj25 = { theme, primaryColor, secondaryColor };
        cResult[9] = primaryColor;
        cResult[10] = secondaryColor;
        cResult[11] = theme;
        cResult[12] = obj25;
        tmp22 = obj25;
        const tmp20 = useProfileThemeDefault(tmp19);
      }
    }
    const obj26 = { user: currentUser, displayProfile: tmp4ResultResult, pendingThemeColors: tryItOutThemeColors, isPreview: true };
    cResult[5] = currentUser;
    cResult[6] = tmp4ResultResult;
    cResult[7] = tryItOutThemeColors;
    cResult[8] = obj26;
    tmp19 = obj26;
  }
  const tmpResult4 = userSettingToActivity;
  const pendingAvatarSrc = RecentAvatarUtils.getPendingAvatarSrc({ userId: currentUser.id, image: tryItOutAvatar });
  cResult[2] = currentUser.id;
  cResult[3] = tryItOutAvatar;
  cResult[4] = pendingAvatarSrc;
  tmp16 = pendingAvatarSrc;
  const obj27 = { userId: currentUser.id, image: tryItOutAvatar };
  const tmpResult6 = RecentAvatarUtils;
}) : (function UserProfileTryItOutEditForm(initialTarget) {
  const currentUser = initialTarget.currentUser;
  const tmp3 = UserProfileSharedStylesDefault();
  const tmp4 = UserProfileEditFormSharedStylesDefault();
  const tmp5 = useSafeAreaInsetsDefault();
  const floatingUpsellHeight = UserProfileFloatingUpsell.useFloatingUpsellHeight();
  ({ height, onLayout } = floatingUpsellHeight);
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => {
    tryItOutChanges = tryItOutChanges.getTryItOutChanges();
    return { tryItOutAvatar: tryItOutChanges.tryItOutAvatar, tryItOutBanner: tryItOutChanges.tryItOutBanner, tryItOutThemeColors: tryItOutChanges.tryItOutThemeColors, tryItOutDisplayNameStyles: tryItOutChanges.tryItOutDisplayNameStyles };
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
  ({ theme, primaryColor, secondaryColor } = useProfileThemeDefault({ user: currentUser, displayProfile: tmp9Result, pendingThemeColors: tryItOutThemeColors, isPreview: true }));
  const tmp14 = useProfileThemeDefault({ user: currentUser, displayProfile: tmp9Result, pendingThemeColors: tryItOutThemeColors, isPreview: true });
  const userProfileColors = useUserProfileColors.useUserProfileColors({ theme, primaryColor, secondaryColor });
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
  const obj5 = { theme, primaryColor, secondaryColor, children: null };
  const obj6 = { style: null, children: null };
  const items1 = [tmp4.container, { backgroundColor: gradientSecondaryBackground }];
  obj6.style = items1;
  const obj7 = { children: null };
  const items2 = [closure_1_8(timestampProducer, { style: tmp4.bounceOffset }), ];
  const obj9 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: { backgroundColor: gradientSecondaryBackground }, children: null };
  const obj8 = { style: tmp4.bounceOffset };
  const tmp6Result4 = useUserProfileColors;
  const items3 = [closure_1_8(closure_10, { user: currentUser, displayProfile: tmp9Result, pendingAvatarSrc, pendingBanner: tryItOutBanner, pendingThemeColors: tryItOutThemeColors }), ];
  const obj10 = { children: null };
  const obj11 = { style: null, children: closure_1_8(EditUserProfileAvatarDefault, { user: currentUser, disableStatus: true, statusStyle: obj4, isTryItOut: true, isUserProfileEditingRefresh: true }) };
  const items4 = [, , , ];
  ({ avatarBackground: arr5[0], avatarPosition: arr5[1] } = tmp3);
  items4[2] = tmp4.avatarContainer;
  items4[3] = obj4;
  obj11.style = items4;
  const items5 = [closure_1_8(timestampProducer, obj11), ];
  const obj12 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: null, children: null };
  const items6 = [, , ];
  ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp3);
  items6[2] = { paddingTop: 0, paddingBottom: sum1 };
  obj12.containerStyle = items6;
  const tmpResult = UserProfileGradientContainerDefault;
  const items7 = [closure_1_8(UserProfileCustomStatusBubbleDefault, { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp3.customStatusBubble, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true }), closure_1_8(UserProfilePrimaryInfoDefault, { user: currentUser, displayName: str2, pronouns: str3, badges: tmp13, badgeContainerBackground: containerBackground, displayNameAccessibilityRole: "header", pendingDisplayNameStyles: tryItOutDisplayNameStyles }), ];
  const obj14 = { style: null, children: closure_1_8(UserProfileTryItOutFieldsDefault, { currentUser, mode: "edit", initialTarget: initialTarget.initialTarget }) };
  const items8 = [tmp4.formContainer, { backgroundColor: containerBackground }];
  obj14.style = items8;
  items7[2] = closure_1_8(timestampProducer, obj14);
  obj12.children = items7;
  items5[1] = options(UserProfileGradientContainerDefault, obj12);
  obj10.children = items5;
  items3[1] = options(timestampProducer, obj10);
  obj9.children = items3;
  items2[1] = options(tmpResult, obj9);
  obj7.children = items2;
  const items9 = [options(hasOwnProperty, obj7), ];
  const obj13 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: tmp3.customStatusBubble, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true };
  const tmpResult2 = UserProfileGradientContainerDefault;
  items9[1] = closure_1_8(ThemeContextProvider_RootThemeContextProvider.DisableCustomTheme, { children: closure_1_8(UserProfileTryItOutGetPremiumUpsellDefault, { onLayout }) });
  obj6.children = items9;
  obj5.children = options(timestampProducer, obj6);
  return closure_1_8(native.ThemeContextProvider, obj5);
});