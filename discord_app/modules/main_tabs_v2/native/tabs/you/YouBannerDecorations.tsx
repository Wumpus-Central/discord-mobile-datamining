// === Module 9518: YouBannerDecorations ===

// Module 9518 (YouBannerDecorations)
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1385 */;
import dismissible_content from "dismissible_content" /* 4807 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5001 */;
import QuestTypes from "QuestTypes" /* 6713 */;
import useTrialOffer from "useTrialOffer" /* 7559 */;
import PromotionsHooks from "PromotionsHooks" /* 9519 */;
import tracking_Tracking from "tracking/Tracking" /* 9566 */;
import QuestUtils from "QuestUtils" /* 9567 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1392 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet: hasOwnProperty } = get_ActivityIndicator);
const useIntlLoaderStore = fn(2069).useIntlLoaderStore;
const ContentDismissActionType = fn(4820).ContentDismissActionType;
let closure_9 = fn(1394).PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4971);
let closure_12 = createStyles.createStyles((arg0, arg1, color, borderColor) => {
  const obj = { containerFloatingWrap: null, containerFloatingGradient: null, containerFloating: null, containerFloatingContent: null, endcap: null, buttonsFloating: null };
  const obj2 = {};
  const merged = Object.assign(hasOwnProperty.absoluteFillObject);
  obj2.top = undefined;
  obj2.alignItems = "center";
  obj2.paddingHorizontal = nativeDefault.space.PX_16;
  obj.containerFloatingWrap = obj2;
  const obj3 = {};
  const merged1 = Object.assign(hasOwnProperty.absoluteFillObject);
  obj3.color = color;
  obj.containerFloatingGradient = obj3;
  const space = nativeDefault.space;
  if (isIOSResult) {
    let PX_24 = space.PX_24;
  } else {
    PX_24 = space.PX_4 + arg0;
  }
  let BACKGROUND_SURFACE_HIGH = arg1;
  const obj5 = { marginBottom: PX_24, maxWidth: "100%", paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.lg, backgroundColor: null, flexDirection: "row", borderColor: null, borderWidth: 1 };
  if (arg1 == null) {
    BACKGROUND_SURFACE_HIGH = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
  }
  obj5.backgroundColor = BACKGROUND_SURFACE_HIGH;
  obj5.borderColor = borderColor;
  const merged2 = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  obj.containerFloating = obj5;
  obj.containerFloatingContent = { maxWidth: "100%", flexDirection: "row" };
  isIOSResult = utils_PlatformUtils.isIOS();
  obj.endcap = { width: nativeDefault.space.PX_16, flexShrink: 1 };
  const obj6 = { width: nativeDefault.space.PX_16, flexShrink: 1 };
  obj.buttonsFloating = { flexDirection: "row", flexShrink: 1, alignItems: "flex-start", gap: nativeDefault.space.PX_8 };
  return obj;
});
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasSettingsBadge() {
  let tmp = PromotionsHooks.useUnseenOutboundPromotions().length > 0;
  const tmp2 = null != useTrialOffer.useTrialOffer(closure_9);
  const result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
  let tmp4 = !result;
  if (!result) {
    tmp4 = tmp2;
  }
  if (!tmp) {
    tmp = tmp4;
  }
  return tmp;
}) : (function useHasSettingsBadge() {
  let tmp = PromotionsHooks.useUnseenOutboundPromotions().length > 0;
  const tmp2 = null != useTrialOffer.useTrialOffer(closure_9);
  const result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
  let tmp4 = !result;
  if (!result) {
    tmp4 = tmp2;
  }
  if (!tmp) {
    tmp = tmp4;
  }
  return tmp;
});
let closure_13 = tmp4;
ReactCompilerGating = fn(558);
function getFloatingNavBottomMargin(bottom) {
  const space = nativeDefault.space;
  if (isIOSResult) {
    let PX_24 = space.PX_24;
  } else {
    PX_24 = space.PX_4 + bottom;
  }
  return PX_24;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function YouBannerDecorations(navigateToSettings) {
  const cResult = navigateToSettings(576).c(81);
  navigateToSettings = navigateToSettings.navigateToSettings;
  const navigateToPremium = navigateToSettings.navigateToPremium;
  ({ navigateToShop, shopButtonRef, settingsButtonRef, paddingBottom } = navigateToSettings);
  let num = 0;
  if (undefined !== paddingBottom) {
    num = paddingBottom;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(isLoading) {
      let currentLocale;
      if (!isLoading.isLoading) {
        currentLocale = navigateToSettings(isBadged[16]).intl.currentLocale;
      }
      return currentLocale;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  let tmp5 = useIntlLoaderStore(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn2 = function f() {
      return currentUser.getCurrentUser();
    };
    cResult[1] = items;
    cResult[2] = fn2;
    let tmp7 = fn2;
    let tmp6 = items;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  let obj = navigateToSettings(576);
  const stateFromStores = navigateToSettings(504).useStateFromStores(tmp6, tmp7);
  let id;
  let tmpResult = navigateToSettings(504);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp11Result = navigateToPremium(8675)(id);
  if (cResult[3] === tmp11Result) {
    if (cResult[4] === stateFromStores) {
      let tmp14 = cResult[5];
    }
    ({ theme, primaryColor, secondaryColor } = tmp10(8718)(tmp14));
    if (cResult[6] === primaryColor) {
      if (cResult[7] === secondaryColor) {
        if (cResult[8] === theme) {
          let tmp16 = cResult[9];
        }
        const userProfileColors = tmp(8729).useUserProfileColors(tmp16);
        ({ containerBackground, containerBorderColor, gradientSecondaryBackground } = userProfileColors);
        if (cResult[10] === containerBackground) {
          if (cResult[11] === primaryColor) {
            if (cResult[12] === secondaryColor) {
              if (cResult[13] === theme) {
                let tmp18 = cResult[14];
              }
              if (cResult[15] === gradientSecondaryBackground) {
                if (cResult[16] === tmp18) {
                  let tmp20 = cResult[17];
                }
                const tmp30 = closure_12(num, tmp20, gradientSecondaryBackground, containerBorderColor);
                const hasPremiumSubscriptionToDisplay = tmp(2053).useHasPremiumSubscriptionToDisplay();
                const tmp33 = closure_13();
                dependencyMap = tmp33;
                const tmp34 = tmp10(9563)();
                const showBadge = tmp34.showBadge;
                const dismissBadge = tmp34.dismissBadge;
                const _Symbol = Symbol;
                if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                  const isEligibleForQuests = tmp(9565).getIsEligibleForQuests();
                  cResult[18] = isEligibleForQuests;
                  let tmp35 = isEligibleForQuests;
                  const tmpResult8 = tmp(9565);
                } else {
                  tmp35 = cResult[18];
                }
                const tmpResult7 = tmp(2053);
                const tmp38 = null != tmp(7559).useTrialOffer(closure_9);
                closure_5 = tmp38;
                if (cResult[19] === tmp38) {
                  if (cResult[20] === tmp33) {
                    if (cResult[21] === navigateToSettings) {
                      let tmp39 = cResult[22];
                    }
                    if (cResult[23] !== navigateToPremium) {
                      function ee() {
                        const result = tracking_Tracking.trackYouTabNitroIconPress();
                        navigateToPremium();
                      }
                      cResult[23] = navigateToPremium;
                      cResult[24] = ee;
                      let tmp40 = ee;
                    } else {
                      tmp40 = cResult[24];
                    }
                    if (cResult[25] === dismissBadge) {
                      if (cResult[26] === showBadge) {
                        let tmp41 = cResult[27];
                      }
                      if (cResult[28] === tmp41) {
                        if (cResult[29] === showBadge) {
                          let tmp42 = cResult[30];
                        }
                        if (cResult[31] === navigateToShop) {
                          if (cResult[32] === shopButtonRef) {
                            let tmp46 = cResult[33];
                          }
                          if (cResult[34] === hasPremiumSubscriptionToDisplay) {
                            if (cResult[35] === tmp40) {
                              let tmp49 = cResult[36];
                            }
                            const _Symbol2 = Symbol;
                            if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                              const intl4 = tmp(1128).intl;
                              const stringResult = intl4.string(tmp(1128).t["3D5yo/"]);
                              cResult[37] = stringResult;
                              let tmp53 = stringResult;
                            } else {
                              tmp53 = cResult[37];
                            }
                            if (cResult[38] === tmp33) {
                              if (cResult[39] === tmp39) {
                                if (cResult[40] === settingsButtonRef) {
                                  let tmp55 = cResult[41];
                                }
                                if (cResult[42] === tmp42) {
                                  if (cResult[43] === tmp46) {
                                    if (cResult[44] === tmp49) {
                                      if (cResult[45] === tmp55) {
                                        let tmp59 = cResult[46];
                                      }
                                      if (cResult[47] === tmp59) {
                                        if (cResult[48] === tmp5) {
                                          let tmp61 = cResult[49];
                                        }
                                        if (cResult[50] === tmp30.buttonsFloating) {
                                          if (cResult[51] === tmp61) {
                                            let tmp64 = cResult[52];
                                          }
                                          const color = tmp30.containerFloatingGradient.color;
                                          const _Symbol3 = Symbol;
                                          if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
                                            const point = { x: 0, y: 0 };
                                            const point1 = { x: 0, y: 1 };
                                            cResult[53] = point;
                                            cResult[54] = point1;
                                            let tmp69 = point1;
                                            let tmp68 = point;
                                          } else {
                                            tmp68 = cResult[53];
                                            tmp69 = cResult[54];
                                          }
                                          if (cResult[55] !== color) {
                                            const obj22 = tmp10(683)(color);
                                            const hexResult = tmp10(683)(color).alpha(0).hex();
                                            cResult[55] = color;
                                            cResult[56] = hexResult;
                                            let tmp70 = hexResult;
                                            const alphaResult = tmp10(683)(color).alpha(0);
                                          } else {
                                            tmp70 = cResult[56];
                                          }
                                          if (cResult[57] !== color) {
                                            const obj24 = tmp10(683)(color);
                                            const hexResult1 = tmp10(683)(color).alpha(1).hex();
                                            cResult[57] = color;
                                            cResult[58] = hexResult1;
                                            let tmp72 = hexResult1;
                                            const alphaResult1 = tmp10(683)(color).alpha(1);
                                          } else {
                                            tmp72 = cResult[58];
                                          }
                                          if (cResult[59] === tmp70) {
                                            if (cResult[60] === tmp72) {
                                              let tmp74 = cResult[61];
                                            }
                                            if (cResult[62] === tmp74) {
                                              if (cResult[63] === tmp30.containerFloatingGradient) {
                                                let tmp75 = cResult[64];
                                              }
                                              if (cResult[65] !== tmp30.endcap) {
                                                let obj2 = { style: tmp30.endcap, pointerEvents: "none" };
                                                const tmp85 = closure_10(dismissBadge, obj2);
                                                cResult[65] = tmp30.endcap;
                                                cResult[66] = tmp85;
                                                let tmp82 = tmp85;
                                              } else {
                                                tmp82 = cResult[66];
                                              }
                                              if (cResult[67] === tmp64) {
                                                if (cResult[68] === tmp30.containerFloatingContent) {
                                                  let tmp86 = cResult[69];
                                                }
                                                if (cResult[70] !== tmp30.endcap) {
                                                  const obj3 = { style: tmp30.endcap, pointerEvents: "none" };
                                                  const tmp93 = closure_10(dismissBadge, obj3);
                                                  cResult[70] = tmp30.endcap;
                                                  cResult[71] = tmp93;
                                                  let tmp90 = tmp93;
                                                } else {
                                                  tmp90 = cResult[71];
                                                }
                                                if (cResult[72] === tmp30.containerFloating) {
                                                  if (cResult[73] === tmp82) {
                                                    if (cResult[74] === tmp86) {
                                                      if (cResult[75] === tmp90) {
                                                        let tmp94 = cResult[76];
                                                      }
                                                      if (cResult[77] === tmp30.containerFloatingWrap) {
                                                        if (cResult[78] === tmp75) {
                                                          if (cResult[79] === tmp94) {
                                                            let tmp98 = cResult[80];
                                                          }
                                                          return tmp98;
                                                        }
                                                      }
                                                      const obj4 = { style: tmp30.containerFloatingWrap, pointerEvents: "box-none", children: null };
                                                      const items1 = [tmp75, tmp94];
                                                      obj4.children = items1;
                                                      const tmp101 = closure_11(dismissBadge, obj4);
                                                      cResult[77] = tmp30.containerFloatingWrap;
                                                      cResult[78] = tmp75;
                                                      cResult[79] = tmp94;
                                                      cResult[80] = tmp101;
                                                      tmp98 = tmp101;
                                                    }
                                                  }
                                                }
                                                const obj5 = { style: tmp30.containerFloating, children: null };
                                                const items2 = [tmp82, tmp86, tmp90];
                                                obj5.children = items2;
                                                const tmp97 = closure_11(dismissBadge, obj5);
                                                cResult[72] = tmp30.containerFloating;
                                                cResult[73] = tmp82;
                                                cResult[74] = tmp86;
                                                cResult[75] = tmp90;
                                                cResult[76] = tmp97;
                                                tmp94 = tmp97;
                                              }
                                              const obj6 = { style: tmp30.containerFloatingContent, children: tmp64 };
                                              const tmp89 = closure_10(dismissBadge, obj6);
                                              cResult[67] = tmp64;
                                              cResult[68] = tmp30.containerFloatingContent;
                                              cResult[69] = tmp89;
                                              tmp86 = tmp89;
                                            }
                                            const obj7 = { style: tmp30.containerFloatingGradient };
                                            const merged = Object.assign(tmp74);
                                            obj7.pointerEvents = "none";
                                            const tmp81 = closure_10(tmp10(5258), obj7);
                                            cResult[62] = tmp74;
                                            cResult[63] = tmp30.containerFloatingGradient;
                                            cResult[64] = tmp81;
                                            tmp75 = tmp81;
                                            const tmp10Result = tmp10(5258);
                                          }
                                          const obj10 = { start: tmp68, end: tmp69, colors: null };
                                          const items3 = [tmp70, tmp72];
                                          obj10.colors = items3;
                                          cResult[59] = tmp70;
                                          cResult[60] = tmp72;
                                          cResult[61] = obj10;
                                          tmp74 = obj10;
                                        }
                                        const obj11 = { style: tmp30.buttonsFloating, pointerEvents: "box-none", children: tmp61 };
                                        const tmp67 = closure_10(dismissBadge, obj11);
                                        cResult[50] = tmp30.buttonsFloating;
                                        cResult[51] = tmp61;
                                        cResult[52] = tmp67;
                                        tmp64 = tmp67;
                                      }
                                      const obj12 = { children: tmp59 };
                                      const tmp63 = closure_10(tmp(14156).YouScreenNavIconMeasurer, obj12, tmp5);
                                      cResult[47] = tmp59;
                                      cResult[48] = tmp5;
                                      cResult[49] = tmp63;
                                      tmp61 = tmp63;
                                    }
                                  }
                                }
                                const items4 = [tmp42, tmp46, tmp49, tmp55];
                                const found = items4.filter((item) => null != item);
                                cResult[42] = tmp42;
                                cResult[43] = tmp46;
                                cResult[44] = tmp49;
                                cResult[45] = tmp55;
                                cResult[46] = found;
                                tmp59 = found;
                              }
                            }
                            const obj13 = { ref: settingsButtonRef, IconComponent: tmp(7488).SettingsIcon, accessibilityLabel: tmp53, onPress: tmp39, showRedDot: tmp33, testID: "you_tab_settings_button" };
                            const tmp58 = closure_10(tmp10(14154), obj13, "settings");
                            cResult[38] = tmp33;
                            cResult[39] = tmp39;
                            cResult[40] = settingsButtonRef;
                            cResult[41] = tmp58;
                            tmp55 = tmp58;
                            const tmp10Result5 = tmp10(14154);
                          }
                          let tmp50 = null;
                          if (!hasPremiumSubscriptionToDisplay) {
                            const obj14 = { IconComponent: tmp(9425).NitroWheelIcon, accessibilityLabel: null, label: null, onPress: null };
                            const intl2 = tmp(1128).intl;
                            obj14.accessibilityLabel = intl2.string(tmp(1128).t.Ipxkog);
                            const intl3 = tmp(1128).intl;
                            obj14.label = intl3.string(tmp(1128).t.Ipxkog);
                            obj14.onPress = tmp40;
                            tmp50 = closure_10(tmp10(14154), obj14, "nitro");
                            const tmp10Result6 = tmp10(14154);
                          }
                          cResult[34] = hasPremiumSubscriptionToDisplay;
                          cResult[35] = tmp40;
                          cResult[36] = tmp50;
                          tmp49 = tmp50;
                        }
                        const obj15 = { shopButtonRef, navigateToShop };
                        const tmp48 = closure_10(tmp10(14159), obj15, "shop");
                        cResult[31] = navigateToShop;
                        cResult[32] = shopButtonRef;
                        cResult[33] = tmp48;
                        tmp46 = tmp48;
                      }
                      let tmp43 = null;
                      if (tmp35) {
                        const obj16 = { IconComponent: tmp(14157).QuestsIcon, accessibilityLabel: null, onPress: null, showRedDot: null };
                        const intl = tmp(1128).intl;
                        obj16.accessibilityLabel = intl.string(tmp(1128).t.JALI2K);
                        obj16.onPress = tmp41;
                        obj16.showRedDot = showBadge;
                        tmp43 = closure_10(tmp10(14154), obj16, "quests");
                        const tmp10Result7 = tmp10(14154);
                      }
                      cResult[28] = tmp41;
                      cResult[29] = showBadge;
                      cResult[30] = tmp43;
                      tmp42 = tmp43;
                    }
                    function te() {
                      if (showBadge) {
                        dismissBadge(ContentDismissActionType.TAKE_ACTION);
                      }
                      const obj = QuestUtils;
                      obj.openQuestHome({ fromContent: QuestTypes.QuestContent.USER_PROFILE_HEADER });
                      const obj2 = { fromContent: QuestTypes.QuestContent.USER_PROFILE_HEADER };
                    }
                    cResult[25] = dismissBadge;
                    cResult[26] = showBadge;
                    cResult[27] = te;
                    tmp41 = te;
                  }
                }
                class J {
                  constructor() {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[26]);
                    obj1 = { isBadged: closure_2 };
                    result = obj.trackYouTabSettingsIconPress(obj1);
                    tmp4 = navigateToSettings();
                    tmp5 = closure_5;
                    if (closure_5) {
                      tmpResult = tmp(tmp2[13]);
                      tmp5 = !tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(tmp2[14]).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
                    }
                    if (tmp5) {
                      tmpResult1 = tmp(tmp2[13]);
                      result1 = tmpResult1.UNSAFE_markDismissibleContentAsDismissed(tmp(tmp2[14]).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
                    }
                    return;
                  }
                }
                cResult[19] = tmp38;
                cResult[20] = tmp33;
                cResult[21] = navigateToSettings;
                cResult[22] = J;
                tmp39 = J;
                const tmpResult9 = tmp(7559);
              }
              let hexResult3 = null;
              if (null != tmp18) {
                const tmp10Result8 = tmp10(683);
                const obj8 = tmp10(683)(tmp18);
                const hexResult2 = tmp10(683)(tmp18).hex("rgb");
                const obj9 = tmp10(683)(tmp18);
                hexResult3 = tmp10Result8.mix(gradientSecondaryBackground, hexResult2, tmp10(683)(tmp18).alpha(), "rgb").hex("rgb");
                const mixResult = tmp10Result8.mix(gradientSecondaryBackground, hexResult2, tmp10(683)(tmp18).alpha(), "rgb");
              }
              cResult[15] = gradientSecondaryBackground;
              cResult[16] = tmp18;
              cResult[17] = hexResult3;
              tmp20 = hexResult3;
            }
          }
        }
        const tmpResult6 = tmp(8729);
        if (!tmpResult10.isThemeLight(theme)) {
          let tmp19 = containerBackground;
        } else {
          tmp19 = null;
          if (null != primaryColor) {
            tmp19 = null;
          }
        }
        cResult[10] = containerBackground;
        cResult[11] = primaryColor;
        cResult[12] = secondaryColor;
        cResult[13] = theme;
        cResult[14] = tmp19;
        tmp18 = tmp19;
        tmpResult10 = tmp(4978);
      }
    }
    const obj17 = { theme, primaryColor, secondaryColor };
    cResult[6] = primaryColor;
    cResult[7] = secondaryColor;
    cResult[8] = theme;
    cResult[9] = obj17;
    tmp16 = obj17;
    const tmp15 = tmp10(8718)(tmp14);
  }
  const obj18 = { user: stateFromStores, displayProfile: tmp11Result };
  cResult[3] = tmp11Result;
  cResult[4] = stateFromStores;
  cResult[5] = obj18;
  tmp14 = obj18;
  const tmp11 = navigateToPremium(8675);
}) : (function YouBannerDecorations(navigateToSettings) {
  navigateToSettings = navigateToSettings.navigateToSettings;
  const navigateToPremium = navigateToSettings.navigateToPremium;
  let num = navigateToSettings.paddingBottom;
  ({ navigateToShop, shopButtonRef, settingsButtonRef } = navigateToSettings);
  if (num === undefined) {
    num = 0;
  }
  gradientSecondaryBackground = undefined;
  let containerBackground;
  let isBadged;
  let showBadge;
  let dismissBadge;
  let currentUser;
  let color;
  const tmp = dismissBadge((isLoading) => {
    let currentLocale;
    if (!isLoading.isLoading) {
      currentLocale = navigateToSettings(gradientSecondaryBackground[16]).intl.currentLocale;
    }
    return currentLocale;
  });
  let items = [currentUser];
  const stateFromStores = navigateToSettings(gradientSecondaryBackground[17]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let id;
  let obj = navigateToSettings(gradientSecondaryBackground[17]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp6 = navigateToPremium(gradientSecondaryBackground[18]);
  const tmp6Result = navigateToPremium(gradientSecondaryBackground[18])(id);
  ({ theme, primaryColor, secondaryColor } = navigateToPremium(gradientSecondaryBackground[19])({ user: stateFromStores, displayProfile: navigateToPremium(gradientSecondaryBackground[18])(id) }));
  const tmp9 = navigateToPremium(gradientSecondaryBackground[19])({ user: stateFromStores, displayProfile: navigateToPremium(gradientSecondaryBackground[18])(id) });
  const userProfileColors = navigateToSettings(gradientSecondaryBackground[20]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ containerBorderColor, gradientSecondaryBackground } = userProfileColors);
  const tmp2Result = navigateToSettings(gradientSecondaryBackground[20]);
  if (!tmp2Result5.isThemeLight(theme)) {
    containerBackground = userProfileColors.containerBackground;
  } else {
    containerBackground = null;
    if (null != primaryColor) {
      containerBackground = null;
    }
  }
  const items1 = [gradientSecondaryBackground, containerBackground];
  const tmp12 = closure_12(num, containerBackground.useMemo(() => {
    let hexResult1 = null;
    if (null != containerBackground) {
      const obj = _modDef683;
      const obj2 = _modDef683(containerBackground);
      const hexResult = _modDef683(containerBackground).hex("rgb");
      const obj3 = _modDef683(containerBackground);
      hexResult1 = obj.mix(gradientSecondaryBackground, hexResult, _modDef683(containerBackground).alpha(), "rgb").hex("rgb");
      const mixResult = obj.mix(gradientSecondaryBackground, hexResult, _modDef683(containerBackground).alpha(), "rgb");
    }
    return hexResult1;
  }, items1), gradientSecondaryBackground, containerBorderColor);
  let obj4 = containerBackground;
  tmp2Result5 = navigateToSettings(gradientSecondaryBackground[21]);
  const hasPremiumSubscriptionToDisplay = navigateToSettings(gradientSecondaryBackground[23]).useHasPremiumSubscriptionToDisplay();
  const tmp14 = closure_13();
  isBadged = tmp14;
  const tmp15 = navigateToPremium(gradientSecondaryBackground[24])();
  showBadge = tmp15.showBadge;
  dismissBadge = tmp15.dismissBadge;
  const tmp2Result6 = navigateToSettings(gradientSecondaryBackground[23]);
  const isEligibleForQuests = navigateToSettings(gradientSecondaryBackground[25]).getIsEligibleForQuests();
  const tmp2Result7 = navigateToSettings(gradientSecondaryBackground[25]);
  const tmp17 = null != navigateToSettings(gradientSecondaryBackground[12]).useTrialOffer(closure_9);
  currentUser = tmp17;
  const items2 = [tmp14, navigateToSettings, tmp17];
  const items3 = [navigateToPremium];
  const callback = containerBackground.useCallback(() => {
    const result = tracking_Tracking.trackYouTabSettingsIconPress({ isBadged });
    navigateToSettings();
    let tmp5 = closure_7;
    if (closure_7) {
      tmp5 = !DismissibleContentUnsafeUtils.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
      const tmpResult = DismissibleContentUnsafeUtils;
    }
    if (tmp5) {
      const result1 = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
      const tmpResult2 = DismissibleContentUnsafeUtils;
    }
    const obj2 = { isBadged };
  }, items2);
  const items4 = [showBadge, dismissBadge];
  const callback1 = containerBackground.useCallback(() => {
    const result = tracking_Tracking.trackYouTabNitroIconPress();
    navigateToPremium();
  }, items3);
  let tmp21 = null;
  if (isEligibleForQuests) {
    let obj2 = { IconComponent: tmp2(tmp3[30]).QuestsIcon, accessibilityLabel: null, onPress: null, showRedDot: null };
    const intl = tmp2(tmp3[16]).intl;
    obj2.accessibilityLabel = intl.string(tmp2(tmp3[16]).t.JALI2K);
    obj2.onPress = tmp20;
    obj2.showRedDot = showBadge;
    tmp21 = closure_10(tmp5(tmp3[29]), obj2, "quests");
    const tmp5Result = tmp5(tmp3[29]);
  }
  const items5 = [tmp21, closure_10(navigateToPremium(gradientSecondaryBackground[31]), { shopButtonRef, navigateToShop }, "shop"), , ];
  let tmp24Result = null;
  if (!hasPremiumSubscriptionToDisplay) {
    let obj3 = { IconComponent: tmp2(tmp3[32]).NitroWheelIcon, accessibilityLabel: null, label: null, onPress: null };
    const intl2 = tmp2(tmp3[16]).intl;
    obj3.accessibilityLabel = intl2.string(tmp2(tmp3[16]).t.Ipxkog);
    const intl3 = tmp2(tmp3[16]).intl;
    obj3.label = intl3.string(tmp2(tmp3[16]).t.Ipxkog);
    obj3.onPress = callback1;
    tmp24Result = closure_10(tmp5(tmp3[29]), obj3, "nitro");
    const tmp5Result4 = tmp5(tmp3[29]);
  }
  items5[2] = tmp24Result;
  const obj5 = { ref: settingsButtonRef, IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null, testID: "you_tab_settings_button" };
  const tmp2Result8 = navigateToSettings(gradientSecondaryBackground[12]);
  obj5.IconComponent = navigateToSettings(gradientSecondaryBackground[33]).SettingsIcon;
  const intl4 = tmp2(tmp3[16]).intl;
  obj5.accessibilityLabel = intl4.string(navigateToSettings(gradientSecondaryBackground[16]).t["3D5yo/"]);
  obj5.onPress = callback;
  obj5.showRedDot = tmp14;
  items5[3] = closure_10(navigateToPremium(gradientSecondaryBackground[29]), obj5, "settings");
  const obj6 = { style: tmp12.buttonsFloating, pointerEvents: "box-none", children: null };
  const found = items5.filter((item) => null != item);
  obj6.children = closure_10(navigateToSettings(gradientSecondaryBackground[34]).YouScreenNavIconMeasurer, { children: found }, tmp);
  color = tmp12.containerFloatingGradient.color;
  const items6 = [color];
  const tmp5Result5 = navigateToPremium(gradientSecondaryBackground[29]);
  const obj7 = { style: tmp12.containerFloatingWrap, pointerEvents: "box-none", children: null };
  const memo = obj4.useMemo(() => {
    const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: null };
    const obj2 = _modDef683(color);
    const items = [_modDef683(color).alpha(0).hex(), ];
    const alphaResult = _modDef683(color).alpha(0);
    const obj4 = _modDef683(color);
    items[1] = _modDef683(color).alpha(1).hex();
    obj.colors = items;
    return obj;
  }, items6);
  const obj8 = { style: tmp12.containerFloatingGradient };
  const tmp24Result2 = closure_10(isBadged, obj6);
  const merged = Object.assign(memo);
  obj8.pointerEvents = "none";
  const items7 = [closure_10(navigateToPremium(gradientSecondaryBackground[35]), obj8), ];
  const obj9 = { style: tmp12.containerFloating, children: null };
  const items8 = [closure_10(isBadged, { style: tmp12.endcap, pointerEvents: "none" }), closure_10(isBadged, { style: tmp12.containerFloatingContent, children: tmp24Result2 }), closure_10(isBadged, { style: tmp12.endcap, pointerEvents: "none" })];
  obj9.children = items8;
  items7[1] = closure_11(isBadged, obj9);
  obj7.children = items7;
  return closure_11(isBadged, obj7);
}));
export { getFloatingNavBottomMargin };
export const useHasSettingsBadge = tmp4;