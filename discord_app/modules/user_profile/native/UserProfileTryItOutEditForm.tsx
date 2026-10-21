// discord_app/modules/user_profile/native/UserProfileTryItOutEditForm.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import useAnalyticsLocations from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import RecentAvatarUtils from "../../recent_avatars/RecentAvatarUtils.tsx";
import useDisplayProfileDefault from "../hooks/useDisplayProfile.tsx";
import useProfileThemeDefault from "../hooks/useProfileTheme.tsx";
import useUserProfileColors from "../hooks/native/useUserProfileColors.tsx";
import UserProfileSharedStylesDefault from "UserProfileSharedStyles.tsx";
import useBadgesDefault from "../hooks/useBadges.tsx";
import DiceIcon from "../../../design/components/Icon/native/redesign/generated/DiceIcon.tsx";
import userSettingToActivity from "../../custom_status/utils/userSettingToActivity.tsx";
import UserProfileCustomStatusBubbleDefault from "UserProfileCustomStatusBubble.tsx";
import UserProfileGradientContainerDefault from "UserProfileGradientContainer.tsx";
import UserProfilePrimaryInfoDefault from "UserProfilePrimaryInfo.tsx";
import ThemeContextProvider_RootThemeContextProvider from "../../../design/components/ThemeContextProvider/native/RootThemeContextProvider.native.tsx";
import useOpenChangeBannerActionSheetDefault from "../hooks/native/useOpenChangeBannerActionSheet.tsx";
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton.tsx";
import UserProfileEditFormSharedStylesDefault from "UserProfileEditFormSharedStyles.tsx";
import UserProfilePremiumTryItOutMobileRefreshExperiment from "../experiments/UserProfilePremiumTryItOutMobileRefreshExperiment.tsx";
import EditUserProfileAvatarDefault from "EditUserProfileAvatar.tsx";
import usePremiumTryItOutPresetShuffleDefault from "../hooks/usePremiumTryItOutPresetShuffle.tsx";
import UserProfileTryItOutFieldsDefault from "UserProfileTryItOutFields.tsx";
import UserProfileFloatingUpsell from "UserProfileFloatingUpsell.tsx";
import UserProfileTryItOutGetPremiumUpsellDefault from "UserProfileTryItOutGetPremiumUpsell.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserProfileSettingsStore from "../UserProfileSettingsStore.tsx";

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
let closure_3 = ["user"];
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
let closure_8 = fn(7281).PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EditableBanner(user) {
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
            const tmp25 = React6(useAnalyticsLocations.AnalyticsLocationProvider, obj2);
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
        const tmp22 = React6(UserProfileEditBannerButtonDefault, obj3);
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
    }
  : function EditableBanner(user) {
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
      obj.children = React6(UserProfileEditBannerButtonDefault, obj2);
      return React6(useAnalyticsLocations.AnalyticsLocationProvider, obj);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTryItOutEditForm.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileTryItOutEditForm(arg0) {
      const cResult = c.c(107);
      ({ currentUser, initialTarget } = arg0);
      const tmp5 = UserProfileSharedStylesDefault();
      const tmp6 = UserProfileEditFormSharedStylesDefault();
      const shuffleButtonLocation =
        UserProfilePremiumTryItOutMobileRefreshExperiment.useTryItOutMobileRefreshConfig(
          "UserProfileTryItOutEditForm",
        ).shuffleButtonLocation;
      const tmp7 = usePremiumTryItOutPresetShuffleDefault();
      const tmp8 = useSafeAreaInsetsDefault();
      const floatingUpsellHeight = UserProfileFloatingUpsell.useFloatingUpsellHeight();
      const onLayout = floatingUpsellHeight.onLayout;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserProfileSettingsStore];
        const fn = function n() {
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
        tmp10 = items;
        tmp11 = fn;
      } else {
        [tmp10, tmp11] = cResult;
      }
      const stateFromStoresObject = initialize.useStateFromStoresObject(tmp10, tmp11);
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
          let tmp17 = cResult[4];
        }
        const tmp19 = useBadgesDefault(tmp4ResultResult);
        if (cResult[5] === currentUser) {
          if (cResult[6] === tmp4ResultResult) {
            if (cResult[7] === tryItOutThemeColors) {
              let tmp20 = cResult[8];
            }
            ({ theme, primaryColor, secondaryColor } = useProfileThemeDefault(tmp20));
            if (cResult[9] === primaryColor) {
              if (cResult[10] === secondaryColor) {
                if (cResult[11] === theme) {
                  let tmp23 = cResult[12];
                }
                const userProfileColors = useUserProfileColors.useUserProfileColors(tmp23);
                ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground, avatarBackground } =
                  userProfileColors);
                let num11 = 0;
                if (null == customStatusActivity) {
                  num11 = closure_8;
                }
                const sum = tmp8.bottom + floatingUpsellHeight.height;
                const sum1 = sum + nativeDefault.space.PX_16;
                if (cResult[13] !== avatarBackground) {
                  const obj4 = { backgroundColor: avatarBackground };
                  cResult[13] = avatarBackground;
                  cResult[14] = obj4;
                  let tmp27 = obj4;
                } else {
                  tmp27 = cResult[14];
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
                  const obj5 = { backgroundColor: gradientSecondaryBackground };
                  cResult[15] = gradientSecondaryBackground;
                  cResult[16] = obj5;
                  let tmp28 = obj5;
                } else {
                  tmp28 = cResult[16];
                }
                if (cResult[17] === tmp6.container) {
                  if (cResult[18] === tmp28) {
                    let tmp29 = cResult[19];
                  }
                  if (cResult[20] !== tmp6.bounceOffset) {
                    const obj6 = { style: tmp6.bounceOffset };
                    const tmp33 = React6(timestampProducer, obj6);
                    cResult[20] = tmp6.bounceOffset;
                    cResult[21] = tmp33;
                    let tmp30 = tmp33;
                  } else {
                    tmp30 = cResult[21];
                  }
                  if (cResult[22] !== gradientSecondaryBackground) {
                    const obj7 = { backgroundColor: gradientSecondaryBackground };
                    cResult[22] = gradientSecondaryBackground;
                    cResult[23] = obj7;
                    let tmp34 = obj7;
                  } else {
                    tmp34 = cResult[23];
                  }
                  if (cResult[24] === currentUser) {
                    if (cResult[25] === tmp4ResultResult) {
                      if (cResult[26] === tmp17) {
                        if (cResult[27] === tryItOutBanner) {
                          if (cResult[28] === tryItOutThemeColors) {
                            let tmp35 = cResult[29];
                          }
                          if (cResult[30] === tmp27) {
                            if (cResult[31] === tmp6.avatarContainer) {
                              if (cResult[32] === tmp5.avatarBackground) {
                                if (cResult[33] === tmp5.avatarPosition) {
                                  let tmp39 = cResult[34];
                                }
                                if (cResult[35] === tmp27) {
                                  if (cResult[36] === currentUser) {
                                    let tmp40 = cResult[37];
                                  }
                                  if (cResult[38] === tmp39) {
                                    if (cResult[39] === tmp40) {
                                      let tmp43 = cResult[40];
                                    }
                                    if (cResult[41] === sum1) {
                                      if (cResult[42] === num11) {
                                        let tmp47 = cResult[43];
                                      }
                                      if (cResult[44] === tmp5.profileContent) {
                                        if (cResult[45] === tmp5.profileContentWrapper) {
                                          if (cResult[46] === tmp47) {
                                            let tmp48 = cResult[47];
                                          }
                                          if (cResult[48] === customStatusActivity) {
                                            if (cResult[49] === tmp22) {
                                              if (cResult[50] === tmp5.customStatusBubble) {
                                                if (cResult[51] === tmp5.emojiOnlyCustomStatusBubble) {
                                                  let tmp49 = cResult[52];
                                                }
                                                if (cResult[53] === tmp19) {
                                                  if (cResult[54] === containerBackground) {
                                                    if (cResult[55] === str2) {
                                                      if (cResult[56] === str3) {
                                                        if (cResult[57] === currentUser) {
                                                          if (cResult[58] === tryItOutDisplayNameStyles) {
                                                            let tmp52 = cResult[59];
                                                          }
                                                          if (cResult[60] !== containerBackground) {
                                                            const obj8 = { backgroundColor: containerBackground };
                                                            cResult[60] = containerBackground;
                                                            cResult[61] = obj8;
                                                            let tmp55 = obj8;
                                                          } else {
                                                            tmp55 = cResult[61];
                                                          }
                                                          if (cResult[62] === tmp6.formContainer) {
                                                            if (cResult[63] === tmp55) {
                                                              let tmp56 = cResult[64];
                                                            }
                                                            if (cResult[65] === shuffleButtonLocation) {
                                                              if (cResult[66] === tmp7) {
                                                                let tmp57 = cResult[67];
                                                              }
                                                              if (cResult[68] === currentUser) {
                                                                if (cResult[69] === initialTarget) {
                                                                  let tmp60 = cResult[70];
                                                                }
                                                                if (cResult[71] === tmp56) {
                                                                  if (cResult[72] === tmp57) {
                                                                    if (cResult[73] === tmp60) {
                                                                      let tmp63 = cResult[74];
                                                                    }
                                                                    if (cResult[75] === gradientFallbackBackground) {
                                                                      if (cResult[76] === primaryColor) {
                                                                        if (cResult[77] === secondaryColor) {
                                                                          if (cResult[78] === tmp48) {
                                                                            if (cResult[79] === tmp49) {
                                                                              if (cResult[80] === tmp52) {
                                                                                if (cResult[81] === tmp63) {
                                                                                  let tmp67 = cResult[82];
                                                                                }
                                                                                if (cResult[83] === tmp43) {
                                                                                  if (cResult[84] === tmp67) {
                                                                                    let tmp70 = cResult[85];
                                                                                  }
                                                                                  if (
                                                                                    cResult[86] ===
                                                                                    gradientFallbackBackground
                                                                                  ) {
                                                                                    if (cResult[87] === primaryColor) {
                                                                                      if (
                                                                                        cResult[88] === secondaryColor
                                                                                      ) {
                                                                                        if (cResult[89] === tmp34) {
                                                                                          if (cResult[90] === tmp35) {
                                                                                            if (cResult[91] === tmp70) {
                                                                                              let tmp74 = cResult[92];
                                                                                            }
                                                                                            if (cResult[93] === tmp74) {
                                                                                              if (
                                                                                                cResult[94] === tmp30
                                                                                              ) {
                                                                                                let tmp77 = cResult[95];
                                                                                              }
                                                                                              if (
                                                                                                cResult[96] !== onLayout
                                                                                              ) {
                                                                                                const obj9 = {
                                                                                                  children: null,
                                                                                                };
                                                                                                const obj10 = {
                                                                                                  onLayout,
                                                                                                };
                                                                                                obj9.children = React6(
                                                                                                  UserProfileTryItOutGetPremiumUpsellDefault,
                                                                                                  obj10,
                                                                                                );
                                                                                                const tmp83 = React6(
                                                                                                  ThemeContextProvider_RootThemeContextProvider.DisableCustomTheme,
                                                                                                  obj9,
                                                                                                );
                                                                                                cResult[96] = onLayout;
                                                                                                cResult[97] = tmp83;
                                                                                                let tmp81 = tmp83;
                                                                                              } else {
                                                                                                tmp81 = cResult[97];
                                                                                              }
                                                                                              if (
                                                                                                cResult[98] === tmp77
                                                                                              ) {
                                                                                                if (
                                                                                                  cResult[99] === tmp81
                                                                                                ) {
                                                                                                  if (
                                                                                                    cResult[100] ===
                                                                                                    tmp29
                                                                                                  ) {
                                                                                                    let tmp84 =
                                                                                                      cResult[101];
                                                                                                  }
                                                                                                  if (
                                                                                                    cResult[102] ===
                                                                                                    primaryColor
                                                                                                  ) {
                                                                                                    if (
                                                                                                      cResult[103] ===
                                                                                                      secondaryColor
                                                                                                    ) {
                                                                                                      if (
                                                                                                        cResult[104] ===
                                                                                                        tmp84
                                                                                                      ) {
                                                                                                        if (
                                                                                                          cResult[105] ===
                                                                                                          theme
                                                                                                        ) {
                                                                                                          let tmp88 =
                                                                                                            cResult[106];
                                                                                                        }
                                                                                                        return tmp88;
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                  const obj11 = {
                                                                                                    theme,
                                                                                                    primaryColor,
                                                                                                    secondaryColor,
                                                                                                    children: tmp84,
                                                                                                  };
                                                                                                  const tmp90 = React6(
                                                                                                    native.ThemeContextProvider,
                                                                                                    obj11,
                                                                                                  );
                                                                                                  cResult[102] =
                                                                                                    primaryColor;
                                                                                                  cResult[103] =
                                                                                                    secondaryColor;
                                                                                                  cResult[104] = tmp84;
                                                                                                  cResult[105] = theme;
                                                                                                  cResult[106] = tmp90;
                                                                                                  tmp88 = tmp90;
                                                                                                }
                                                                                              }
                                                                                              const obj12 = {
                                                                                                style: tmp29,
                                                                                                children: null,
                                                                                              };
                                                                                              const items1 = [
                                                                                                tmp77,
                                                                                                tmp81,
                                                                                              ];
                                                                                              obj12.children = items1;
                                                                                              const tmp87 = collapsed(
                                                                                                timestampProducer,
                                                                                                obj12,
                                                                                              );
                                                                                              cResult[98] = tmp77;
                                                                                              cResult[99] = tmp81;
                                                                                              cResult[100] = tmp29;
                                                                                              cResult[101] = tmp87;
                                                                                              tmp84 = tmp87;
                                                                                            }
                                                                                            const obj13 = {
                                                                                              children: null,
                                                                                            };
                                                                                            const items2 = [
                                                                                              tmp30,
                                                                                              tmp74,
                                                                                            ];
                                                                                            obj13.children = items2;
                                                                                            const tmp80 = collapsed(
                                                                                              hasOwnProperty,
                                                                                              obj13,
                                                                                            );
                                                                                            cResult[93] = tmp74;
                                                                                            cResult[94] = tmp30;
                                                                                            cResult[95] = tmp80;
                                                                                            tmp77 = tmp80;
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                  const obj14 = {
                                                                                    fallbackBackground:
                                                                                      gradientFallbackBackground,
                                                                                    primaryColor,
                                                                                    secondaryColor,
                                                                                    containerStyle: tmp34,
                                                                                    children: null,
                                                                                  };
                                                                                  const items3 = [tmp35, tmp70];
                                                                                  obj14.children = items3;
                                                                                  const tmp76 = collapsed(
                                                                                    UserProfileGradientContainerDefault,
                                                                                    obj14,
                                                                                  );
                                                                                  cResult[86] =
                                                                                    gradientFallbackBackground;
                                                                                  cResult[87] = primaryColor;
                                                                                  cResult[88] = secondaryColor;
                                                                                  cResult[89] = tmp34;
                                                                                  cResult[90] = tmp35;
                                                                                  cResult[91] = tmp70;
                                                                                  cResult[92] = tmp76;
                                                                                  tmp74 = tmp76;
                                                                                }
                                                                                const obj15 = { children: null };
                                                                                const items4 = [tmp43, tmp67];
                                                                                obj15.children = items4;
                                                                                const tmp73 = collapsed(
                                                                                  timestampProducer,
                                                                                  obj15,
                                                                                );
                                                                                cResult[83] = tmp43;
                                                                                cResult[84] = tmp67;
                                                                                cResult[85] = tmp73;
                                                                                tmp70 = tmp73;
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                    const obj16 = {
                                                                      fallbackBackground: gradientFallbackBackground,
                                                                      primaryColor,
                                                                      secondaryColor,
                                                                      containerStyle: tmp48,
                                                                      children: null,
                                                                    };
                                                                    const items5 = [tmp49, tmp52, tmp63];
                                                                    obj16.children = items5;
                                                                    const tmp69 = collapsed(
                                                                      UserProfileGradientContainerDefault,
                                                                      obj16,
                                                                    );
                                                                    cResult[75] = gradientFallbackBackground;
                                                                    cResult[76] = primaryColor;
                                                                    cResult[77] = secondaryColor;
                                                                    cResult[78] = tmp48;
                                                                    cResult[79] = tmp49;
                                                                    cResult[80] = tmp52;
                                                                    cResult[81] = tmp63;
                                                                    cResult[82] = tmp69;
                                                                    tmp67 = tmp69;
                                                                  }
                                                                }
                                                                const obj17 = { style: tmp56, children: null };
                                                                const items6 = [tmp57, tmp60];
                                                                obj17.children = items6;
                                                                const tmp66 = collapsed(timestampProducer, obj17);
                                                                cResult[71] = tmp56;
                                                                cResult[72] = tmp57;
                                                                cResult[73] = tmp60;
                                                                cResult[74] = tmp66;
                                                                tmp63 = tmp66;
                                                              }
                                                              const obj18 = {
                                                                currentUser,
                                                                mode: "edit",
                                                                initialTarget,
                                                              };
                                                              const tmp62 = React6(
                                                                UserProfileTryItOutFieldsDefault,
                                                                obj18,
                                                              );
                                                              cResult[68] = currentUser;
                                                              cResult[69] = initialTarget;
                                                              cResult[70] = tmp62;
                                                              tmp60 = tmp62;
                                                            }
                                                            let tmp58 = "inline" === shuffleButtonLocation;
                                                            if (tmp58) {
                                                              const obj20 = {
                                                                icon: null,
                                                                text: null,
                                                                variant: "secondary",
                                                                onPress: null,
                                                              };
                                                              const obj21 = {
                                                                size: "sm",
                                                                color:
                                                                  nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT,
                                                              };
                                                              obj20.icon = React6(DiceIcon.DiceIcon, obj21);
                                                              const intl = util.intl;
                                                              obj20.text = intl.string(util.t.VzqqFC);
                                                              obj20.onPress = tmp7;
                                                              tmp58 = React6(components_Button_Button.Button, obj20);
                                                            }
                                                            cResult[65] = shuffleButtonLocation;
                                                            cResult[66] = tmp7;
                                                            cResult[67] = tmp58;
                                                            tmp57 = tmp58;
                                                          }
                                                          const items7 = [tmp6.formContainer, tmp55];
                                                          cResult[62] = tmp6.formContainer;
                                                          cResult[63] = tmp55;
                                                          cResult[64] = items7;
                                                          tmp56 = items7;
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                                const obj22 = {
                                                  user: currentUser,
                                                  displayName: str2,
                                                  pronouns: str3,
                                                  badges: tmp19,
                                                  badgeContainerBackground: containerBackground,
                                                  displayNameAccessibilityRole: "header",
                                                  pendingDisplayNameStyles: tryItOutDisplayNameStyles,
                                                };
                                                const tmp54 = React6(UserProfilePrimaryInfoDefault, obj22);
                                                cResult[53] = tmp19;
                                                cResult[54] = containerBackground;
                                                cResult[55] = str2;
                                                cResult[56] = str3;
                                                cResult[57] = currentUser;
                                                cResult[58] = tryItOutDisplayNameStyles;
                                                cResult[59] = tmp54;
                                                tmp52 = tmp54;
                                              }
                                            }
                                          }
                                          const obj23 = {
                                            customStatusActivity,
                                            hasCustomProfileTheme: tmp22,
                                            style: null,
                                            emojiOnlyStyle: null,
                                          };
                                          ({
                                            customStatusBubble: obj19.style,
                                            emojiOnlyCustomStatusBubble: obj19.emojiOnlyStyle,
                                          } = tmp5);
                                          const tmp51 = React6(UserProfileCustomStatusBubbleDefault, obj23);
                                          cResult[48] = customStatusActivity;
                                          cResult[49] = tmp22;
                                          cResult[50] = tmp5.customStatusBubble;
                                          cResult[51] = tmp5.emojiOnlyCustomStatusBubble;
                                          cResult[52] = tmp51;
                                          tmp49 = tmp51;
                                        }
                                      }
                                      const items8 = [, ,];
                                      ({ profileContentWrapper: arr4[0], profileContent: arr4[1] } = tmp5);
                                      items8[2] = tmp47;
                                      cResult[44] = tmp5.profileContent;
                                      cResult[45] = tmp5.profileContentWrapper;
                                      cResult[46] = tmp47;
                                      cResult[47] = items8;
                                      tmp48 = items8;
                                    }
                                    const obj24 = { paddingTop: num11, paddingBottom: sum1 };
                                    cResult[41] = sum1;
                                    cResult[42] = num11;
                                    cResult[43] = obj24;
                                    tmp47 = obj24;
                                  }
                                  const obj25 = { style: tmp39, children: tmp40 };
                                  const tmp46 = React6(timestampProducer, obj25);
                                  cResult[38] = tmp39;
                                  cResult[39] = tmp40;
                                  cResult[40] = tmp46;
                                  tmp43 = tmp46;
                                }
                                const obj26 = {
                                  user: currentUser,
                                  disableStatus: true,
                                  statusStyle: tmp27,
                                  isTryItOut: true,
                                  isUserProfileEditingRefresh: true,
                                };
                                const tmp42 = React6(EditUserProfileAvatarDefault, obj26);
                                cResult[35] = tmp27;
                                cResult[36] = currentUser;
                                cResult[37] = tmp42;
                                tmp40 = tmp42;
                              }
                            }
                          }
                          const items9 = [, , ,];
                          ({ avatarBackground: arr3[0], avatarPosition: arr3[1] } = tmp5);
                          items9[2] = tmp6.avatarContainer;
                          items9[3] = tmp27;
                          cResult[30] = tmp27;
                          cResult[31] = tmp6.avatarContainer;
                          cResult[32] = tmp5.avatarBackground;
                          cResult[33] = tmp5.avatarPosition;
                          cResult[34] = items9;
                          tmp39 = items9;
                        }
                      }
                    }
                  }
                  const obj27 = {
                    user: currentUser,
                    displayProfile: tmp4ResultResult,
                    pendingAvatarSrc: tmp17,
                    pendingBanner: tryItOutBanner,
                    pendingThemeColors: tryItOutThemeColors,
                  };
                  const tmp38 = React6(closure_11, obj27);
                  cResult[24] = currentUser;
                  cResult[25] = tmp4ResultResult;
                  cResult[26] = tmp17;
                  cResult[27] = tryItOutBanner;
                  cResult[28] = tryItOutThemeColors;
                  cResult[29] = tmp38;
                  tmp35 = tmp38;
                }
                const items10 = [tmp6.container, tmp28];
                cResult[17] = tmp6.container;
                cResult[18] = tmp28;
                cResult[19] = items10;
                tmp29 = items10;
                const tmpResult5 = useUserProfileColors;
              }
            }
            const obj28 = { theme, primaryColor, secondaryColor };
            cResult[9] = primaryColor;
            cResult[10] = secondaryColor;
            cResult[11] = theme;
            cResult[12] = obj28;
            tmp23 = obj28;
            const tmp21 = useProfileThemeDefault(tmp20);
          }
        }
        const obj29 = {
          user: currentUser,
          displayProfile: tmp4ResultResult,
          pendingThemeColors: tryItOutThemeColors,
          isPreview: true,
        };
        cResult[5] = currentUser;
        cResult[6] = tmp4ResultResult;
        cResult[7] = tryItOutThemeColors;
        cResult[8] = obj29;
        tmp20 = obj29;
      }
      const tmpResult4 = userSettingToActivity;
      const pendingAvatarSrc = RecentAvatarUtils.getPendingAvatarSrc({ userId: currentUser.id, image: tryItOutAvatar });
      cResult[2] = currentUser.id;
      cResult[3] = tryItOutAvatar;
      cResult[4] = pendingAvatarSrc;
      tmp17 = pendingAvatarSrc;
      const obj30 = { userId: currentUser.id, image: tryItOutAvatar };
      const tmpResult6 = RecentAvatarUtils;
    }
  : function UserProfileTryItOutEditForm(initialTarget) {
      const currentUser = initialTarget.currentUser;
      const tmp3 = UserProfileSharedStylesDefault();
      const tmp4 = UserProfileEditFormSharedStylesDefault();
      const obj = UserProfilePremiumTryItOutMobileRefreshExperiment;
      const tmp6 = usePremiumTryItOutPresetShuffleDefault();
      const tmp7 = useSafeAreaInsetsDefault();
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
      const tmp10Result = useDisplayProfileDefault(str);
      const customStatusActivity = userSettingToActivity.useCustomStatusActivity();
      const tmp5Result = userSettingToActivity;
      const pendingAvatarSrc = RecentAvatarUtils.getPendingAvatarSrc({ userId: currentUser.id, image: tryItOutAvatar });
      const obj4 = { userId: currentUser.id, image: tryItOutAvatar };
      const tmp5Result3 = RecentAvatarUtils;
      const tmp14 = useBadgesDefault(tmp10Result);
      ({ theme, primaryColor, secondaryColor } = useProfileThemeDefault({
        user: currentUser,
        displayProfile: tmp10Result,
        pendingThemeColors: tryItOutThemeColors,
        isPreview: true,
      }));
      const tmp15 = useProfileThemeDefault({
        user: currentUser,
        displayProfile: tmp10Result,
        pendingThemeColors: tryItOutThemeColors,
        isPreview: true,
      });
      const userProfileColors = useUserProfileColors.useUserProfileColors({ theme, primaryColor, secondaryColor });
      ({ gradientFallbackBackground, gradientSecondaryBackground, containerBackground } = userProfileColors);
      let num = 0;
      if (null == customStatusActivity) {
        num = closure_8;
      }
      const sum = tmp7.bottom + height;
      const obj5 = { backgroundColor: userProfileColors.avatarBackground };
      let str2 = currentUser.globalName;
      const sum1 = sum + nativeDefault.space.PX_16;
      if (str2 == null) {
        str2 = "";
      }
      let str3;
      if (tmp10Result != null) {
        str3 = tmp10Result.pronouns;
      }
      if (str3 == null) {
        str3 = "";
      }
      const obj6 = { theme, primaryColor, secondaryColor, children: null };
      const obj7 = { style: null, children: null };
      const items1 = [tmp4.container, { backgroundColor: gradientSecondaryBackground }];
      obj7.style = items1;
      const items2 = [React6(timestampProducer, { style: tmp4.bounceOffset })];
      const obj9 = {
        fallbackBackground: gradientFallbackBackground,
        primaryColor,
        secondaryColor,
        containerStyle: { backgroundColor: gradientSecondaryBackground },
        children: null,
      };
      const obj8 = { style: tmp4.bounceOffset };
      const tmp5Result4 = useUserProfileColors;
      const items3 = [
        React6(closure_11, {
          user: currentUser,
          displayProfile: tmp10Result,
          pendingAvatarSrc,
          pendingBanner: tryItOutBanner,
          pendingThemeColors: tryItOutThemeColors,
        }),
      ];
      const obj10 = {
        style: null,
        children: React6(EditUserProfileAvatarDefault, {
          user: currentUser,
          disableStatus: true,
          statusStyle: obj5,
          isTryItOut: true,
          isUserProfileEditingRefresh: true,
        }),
      };
      const items4 = [, , ,];
      ({ avatarBackground: arr5[0], avatarPosition: arr5[1] } = tmp3);
      items4[2] = tmp4.avatarContainer;
      items4[3] = obj5;
      obj10.style = items4;
      const items5 = [React6(timestampProducer, obj10)];
      const obj11 = {
        fallbackBackground: gradientFallbackBackground,
        primaryColor,
        secondaryColor,
        containerStyle: null,
        children: null,
      };
      const items6 = [, ,];
      ({ profileContentWrapper: arr7[0], profileContent: arr7[1] } = tmp3);
      items6[2] = { paddingTop: num, paddingBottom: sum1 };
      obj11.containerStyle = items6;
      const tmpResult = UserProfileGradientContainerDefault;
      const items7 = [
        React6(UserProfileCustomStatusBubbleDefault, {
          customStatusActivity,
          hasCustomProfileTheme: null != primaryColor,
          style: tmp3.customStatusBubble,
          emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble,
        }),
        React6(UserProfilePrimaryInfoDefault, {
          user: currentUser,
          displayName: str2,
          pronouns: str3,
          badges: tmp14,
          badgeContainerBackground: containerBackground,
          displayNameAccessibilityRole: "header",
          pendingDisplayNameStyles: tryItOutDisplayNameStyles,
        }),
      ];
      const obj13 = { style: null, children: null };
      const items8 = [tmp4.formContainer, { backgroundColor: containerBackground }];
      obj13.style = items8;
      let tmp19Result =
        "inline" === obj.useTryItOutMobileRefreshConfig("UserProfileTryItOutEditForm").shuffleButtonLocation;
      if (tmp19Result) {
        const obj14 = { icon: null, text: null, variant: "secondary", onPress: null };
        const obj15 = { size: "sm", color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT };
        obj14.icon = React6(DiceIcon.DiceIcon, obj15);
        const intl = util.intl;
        obj14.text = intl.string(util.t.VzqqFC);
        obj14.onPress = tmp6;
        tmp19Result = React6(components_Button_Button.Button, obj14);
      }
      const obj16 = { children: null };
      const obj17 = { children: null };
      const items9 = [
        tmp19Result,
        React6(UserProfileTryItOutFieldsDefault, {
          currentUser,
          mode: "edit",
          initialTarget: initialTarget.initialTarget,
        }),
      ];
      obj13.children = items9;
      items7[2] = collapsed(timestampProducer, obj13);
      obj11.children = items7;
      items5[1] = collapsed(UserProfileGradientContainerDefault, obj11);
      obj17.children = items5;
      items3[1] = collapsed(timestampProducer, obj17);
      obj9.children = items3;
      items2[1] = collapsed(tmpResult, obj9);
      obj16.children = items2;
      const items10 = [collapsed(hasOwnProperty, obj16)];
      const obj12 = {
        customStatusActivity,
        hasCustomProfileTheme: null != primaryColor,
        style: tmp3.customStatusBubble,
        emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble,
      };
      const tmpResult2 = UserProfileGradientContainerDefault;
      items10[1] = React6(ThemeContextProvider_RootThemeContextProvider.DisableCustomTheme, {
        children: React6(UserProfileTryItOutGetPremiumUpsellDefault, { onLayout }),
      });
      obj7.children = items10;
      obj6.children = collapsed(timestampProducer, obj7);
      return React6(native.ThemeContextProvider, obj6);
    };
