// discord_app/modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../../_runtime/metro/00683__.js";
import utils_PlatformUtils from "../../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import QuestTypes from "../../../../quests/QuestTypes.tsx";
import useTrialOffer from "../../../../premium/useTrialOffer.tsx";
import PromotionsHooks from "../../../../premium/promotions/PromotionsHooks.tsx";
import tracking_Tracking from "tracking/Tracking.tsx";
import QuestUtils from "../../../../quests/native/QuestUtils.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet: hasOwnProperty } = get_ActivityIndicator);
const useIntlLoaderStore = fn(2066).useIntlLoaderStore;
const ContentDismissActionType = fn(4853).ContentDismissActionType;
let closure_9 = fn(1391).PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5004);
let closure_12 = createStyles.createStyles((arg0, arg1, color, borderColor) => {
  const obj = {
    containerFloatingWrap: null,
    containerFloatingGradient: null,
    containerFloating: null,
    containerFloatingContent: null,
    endcap: null,
    buttonsFloating: null,
  };
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
  const obj5 = {
    marginBottom: PX_24,
    maxWidth: "100%",
    paddingVertical: nativeDefault.space.PX_8,
    paddingHorizontal: nativeDefault.space.PX_8,
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: null,
    flexDirection: "row",
    borderColor: null,
    borderWidth: 1,
  };
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
  obj.buttonsFloating = {
    flexDirection: "row",
    flexShrink: 1,
    alignItems: "flex-start",
    gap: nativeDefault.space.PX_8,
  };
  return obj;
});
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useHasSettingsBadge() {
      let tmp = PromotionsHooks.useUnseenOutboundPromotions().length > 0;
      const tmp2 = null != useTrialOffer.useTrialOffer(closure_9);
      const result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(
        dismissible_content.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE,
      );
      let tmp4 = !result;
      if (!result) {
        tmp4 = tmp2;
      }
      if (!tmp) {
        tmp = tmp4;
      }
      return tmp;
    }
  : function useHasSettingsBadge() {
      let tmp = PromotionsHooks.useUnseenOutboundPromotions().length > 0;
      const tmp2 = null != useTrialOffer.useTrialOffer(closure_9);
      const result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(
        dismissible_content.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE,
      );
      let tmp4 = !result;
      if (!result) {
        tmp4 = tmp2;
      }
      if (!tmp) {
        tmp = tmp4;
      }
      return tmp;
    };
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

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function YouBannerDecorations(navigateToSettings) {
        const cResult = navigateToSettings(576).c(84);
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
        const tmp11Result = navigateToPremium(8712)(id);
        if (cResult[3] === tmp11Result) {
          if (cResult[4] === stateFromStores) {
            let tmp14 = cResult[5];
          }
          ({ theme, primaryColor, secondaryColor } = tmp10(8755)(tmp14));
          if (cResult[6] === primaryColor) {
            if (cResult[7] === secondaryColor) {
              if (cResult[8] === theme) {
                let tmp16 = cResult[9];
              }
              const userProfileColors = tmp(8766).useUserProfileColors(tmp16);
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
                      const hasPremiumSubscriptionToDisplay = tmp(2050).useHasPremiumSubscriptionToDisplay();
                      const tmp33 = closure_13();
                      dependencyMap = tmp33;
                      const tmp34 = tmp10(9594)();
                      const showBadge = tmp34.showBadge;
                      const dismissBadge = tmp34.dismissBadge;
                      const _Symbol = Symbol;
                      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                        const isEligibleForQuests = tmp(9596).getIsEligibleForQuests();
                        cResult[18] = isEligibleForQuests;
                        let tmp35 = isEligibleForQuests;
                        const tmpResult8 = tmp(9596);
                      } else {
                        tmp35 = cResult[18];
                      }
                      const tmp37 = tmp10(9597)("YouBannerDecorations");
                      if (tmp37 != null) {
                        const placement = tmp37.placement;
                      }
                      const tmpResult7 = tmp(2050);
                      const tmp39 = null != tmp(7594).useTrialOffer(closure_9);
                      closure_5 = tmp39;
                      if (cResult[19] === tmp39) {
                        if (cResult[20] === tmp33) {
                          if (cResult[21] === navigateToSettings) {
                            let tmp40 = cResult[22];
                          }
                          if (cResult[23] !== navigateToPremium) {
                            function ne() {
                              const result = tracking_Tracking.trackYouTabNitroIconPress();
                              navigateToPremium();
                            }
                            cResult[23] = navigateToPremium;
                            cResult[24] = ne;
                            let tmp41 = ne;
                          } else {
                            tmp41 = cResult[24];
                          }
                          if (cResult[25] === dismissBadge) {
                            if (cResult[26] === showBadge) {
                              let tmp42 = cResult[27];
                            }
                            if (cResult[28] !== ("you_screen" === placement)) {
                              let tmp45 = null;
                              if (tmp43) {
                                tmp45 = closure_10(tmp10(14391), {}, "conjure");
                              }
                              cResult[28] = tmp43;
                              cResult[29] = tmp45;
                              let tmp44 = tmp45;
                            } else {
                              tmp44 = cResult[29];
                            }
                            if (cResult[30] === tmp42) {
                              if (cResult[31] === showBadge) {
                                let tmp47 = cResult[32];
                              }
                              if (cResult[33] === navigateToShop) {
                                if (cResult[34] === shopButtonRef) {
                                  let tmp51 = cResult[35];
                                }
                                if (cResult[36] === hasPremiumSubscriptionToDisplay) {
                                  if (cResult[37] === tmp41) {
                                    let tmp54 = cResult[38];
                                  }
                                  const _Symbol2 = Symbol;
                                  if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                                    const intl4 = tmp(1125).intl;
                                    const stringResult = intl4.string(tmp(1125).t["3D5yo/"]);
                                    cResult[39] = stringResult;
                                    let tmp58 = stringResult;
                                  } else {
                                    tmp58 = cResult[39];
                                  }
                                  if (cResult[40] === tmp33) {
                                    if (cResult[41] === tmp40) {
                                      if (cResult[42] === settingsButtonRef) {
                                        let tmp60 = cResult[43];
                                      }
                                      if (cResult[44] === tmp44) {
                                        if (cResult[45] === tmp47) {
                                          if (cResult[46] === tmp51) {
                                            if (cResult[47] === tmp54) {
                                              if (cResult[48] === tmp60) {
                                                let tmp64 = cResult[49];
                                              }
                                              if (cResult[50] === tmp64) {
                                                if (cResult[51] === tmp5) {
                                                  let tmp66 = cResult[52];
                                                }
                                                if (cResult[53] === tmp30.buttonsFloating) {
                                                  if (cResult[54] === tmp66) {
                                                    let tmp69 = cResult[55];
                                                  }
                                                  const color = tmp30.containerFloatingGradient.color;
                                                  const _Symbol3 = Symbol;
                                                  if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
                                                    const point = { x: 0, y: 0 };
                                                    const point1 = { x: 0, y: 1 };
                                                    cResult[56] = point;
                                                    cResult[57] = point1;
                                                    let tmp74 = point1;
                                                    let tmp73 = point;
                                                  } else {
                                                    tmp73 = cResult[56];
                                                    tmp74 = cResult[57];
                                                  }
                                                  if (cResult[58] !== color) {
                                                    const obj22 = tmp10(683)(color);
                                                    const hexResult = tmp10(683)(color).alpha(0).hex();
                                                    cResult[58] = color;
                                                    cResult[59] = hexResult;
                                                    let tmp75 = hexResult;
                                                    const alphaResult = tmp10(683)(color).alpha(0);
                                                  } else {
                                                    tmp75 = cResult[59];
                                                  }
                                                  if (cResult[60] !== color) {
                                                    const obj24 = tmp10(683)(color);
                                                    const hexResult1 = tmp10(683)(color).alpha(1).hex();
                                                    cResult[60] = color;
                                                    cResult[61] = hexResult1;
                                                    let tmp77 = hexResult1;
                                                    const alphaResult1 = tmp10(683)(color).alpha(1);
                                                  } else {
                                                    tmp77 = cResult[61];
                                                  }
                                                  if (cResult[62] === tmp75) {
                                                    if (cResult[63] === tmp77) {
                                                      let tmp79 = cResult[64];
                                                    }
                                                    if (cResult[65] === tmp79) {
                                                      if (cResult[66] === tmp30.containerFloatingGradient) {
                                                        let tmp80 = cResult[67];
                                                      }
                                                      if (cResult[68] !== tmp30.endcap) {
                                                        let obj2 = { style: tmp30.endcap, pointerEvents: "none" };
                                                        const tmp90 = closure_10(dismissBadge, obj2);
                                                        cResult[68] = tmp30.endcap;
                                                        cResult[69] = tmp90;
                                                        let tmp87 = tmp90;
                                                      } else {
                                                        tmp87 = cResult[69];
                                                      }
                                                      if (cResult[70] === tmp69) {
                                                        if (cResult[71] === tmp30.containerFloatingContent) {
                                                          let tmp91 = cResult[72];
                                                        }
                                                        if (cResult[73] !== tmp30.endcap) {
                                                          const obj3 = { style: tmp30.endcap, pointerEvents: "none" };
                                                          const tmp98 = closure_10(dismissBadge, obj3);
                                                          cResult[73] = tmp30.endcap;
                                                          cResult[74] = tmp98;
                                                          let tmp95 = tmp98;
                                                        } else {
                                                          tmp95 = cResult[74];
                                                        }
                                                        if (cResult[75] === tmp30.containerFloating) {
                                                          if (cResult[76] === tmp87) {
                                                            if (cResult[77] === tmp91) {
                                                              if (cResult[78] === tmp95) {
                                                                let tmp99 = cResult[79];
                                                              }
                                                              if (cResult[80] === tmp30.containerFloatingWrap) {
                                                                if (cResult[81] === tmp80) {
                                                                  if (cResult[82] === tmp99) {
                                                                    let tmp103 = cResult[83];
                                                                  }
                                                                  return tmp103;
                                                                }
                                                              }
                                                              const obj4 = {
                                                                style: tmp30.containerFloatingWrap,
                                                                pointerEvents: "box-none",
                                                                children: null,
                                                              };
                                                              const items1 = [tmp80, tmp99];
                                                              obj4.children = items1;
                                                              const tmp106 = closure_11(dismissBadge, obj4);
                                                              cResult[80] = tmp30.containerFloatingWrap;
                                                              cResult[81] = tmp80;
                                                              cResult[82] = tmp99;
                                                              cResult[83] = tmp106;
                                                              tmp103 = tmp106;
                                                            }
                                                          }
                                                        }
                                                        const obj5 = { style: tmp30.containerFloating, children: null };
                                                        const items2 = [tmp87, tmp91, tmp95];
                                                        obj5.children = items2;
                                                        const tmp102 = closure_11(dismissBadge, obj5);
                                                        cResult[75] = tmp30.containerFloating;
                                                        cResult[76] = tmp87;
                                                        cResult[77] = tmp91;
                                                        cResult[78] = tmp95;
                                                        cResult[79] = tmp102;
                                                        tmp99 = tmp102;
                                                      }
                                                      const obj6 = {
                                                        style: tmp30.containerFloatingContent,
                                                        children: tmp69,
                                                      };
                                                      const tmp94 = closure_10(dismissBadge, obj6);
                                                      cResult[70] = tmp69;
                                                      cResult[71] = tmp30.containerFloatingContent;
                                                      cResult[72] = tmp94;
                                                      tmp91 = tmp94;
                                                    }
                                                    const obj7 = { style: tmp30.containerFloatingGradient };
                                                    const merged = Object.assign(tmp79);
                                                    obj7.pointerEvents = "none";
                                                    const tmp86 = closure_10(tmp10(5294), obj7);
                                                    cResult[65] = tmp79;
                                                    cResult[66] = tmp30.containerFloatingGradient;
                                                    cResult[67] = tmp86;
                                                    tmp80 = tmp86;
                                                    const tmp10Result = tmp10(5294);
                                                  }
                                                  const obj10 = { start: tmp73, end: tmp74, colors: null };
                                                  const items3 = [tmp75, tmp77];
                                                  obj10.colors = items3;
                                                  cResult[62] = tmp75;
                                                  cResult[63] = tmp77;
                                                  cResult[64] = obj10;
                                                  tmp79 = obj10;
                                                }
                                                const obj11 = {
                                                  style: tmp30.buttonsFloating,
                                                  pointerEvents: "box-none",
                                                  children: tmp66,
                                                };
                                                const tmp72 = closure_10(dismissBadge, obj11);
                                                cResult[53] = tmp30.buttonsFloating;
                                                cResult[54] = tmp66;
                                                cResult[55] = tmp72;
                                                tmp69 = tmp72;
                                              }
                                              const obj12 = { children: tmp64 };
                                              const tmp68 = closure_10(
                                                tmp(14401).YouScreenNavIconMeasurer,
                                                obj12,
                                                tmp5,
                                              );
                                              cResult[50] = tmp64;
                                              cResult[51] = tmp5;
                                              cResult[52] = tmp68;
                                              tmp66 = tmp68;
                                            }
                                          }
                                        }
                                      }
                                      const items4 = [tmp44, tmp47, tmp51, tmp54, tmp60];
                                      const found = items4.filter((item) => null != item);
                                      cResult[44] = tmp44;
                                      cResult[45] = tmp47;
                                      cResult[46] = tmp51;
                                      cResult[47] = tmp54;
                                      cResult[48] = tmp60;
                                      cResult[49] = found;
                                      tmp64 = found;
                                    }
                                  }
                                  const obj13 = {
                                    ref: settingsButtonRef,
                                    IconComponent: tmp(7524).SettingsIcon,
                                    accessibilityLabel: tmp58,
                                    onPress: tmp40,
                                    showRedDot: tmp33,
                                    testID: "you_tab_settings_button",
                                  };
                                  const tmp63 = closure_10(tmp10(14400), obj13, "settings");
                                  cResult[40] = tmp33;
                                  cResult[41] = tmp40;
                                  cResult[42] = settingsButtonRef;
                                  cResult[43] = tmp63;
                                  tmp60 = tmp63;
                                  const tmp10Result5 = tmp10(14400);
                                }
                                let tmp55 = null;
                                if (!hasPremiumSubscriptionToDisplay) {
                                  const obj14 = {
                                    IconComponent: tmp(9456).NitroWheelIcon,
                                    accessibilityLabel: null,
                                    label: null,
                                    onPress: null,
                                  };
                                  const intl2 = tmp(1125).intl;
                                  obj14.accessibilityLabel = intl2.string(tmp(1125).t.Ipxkog);
                                  const intl3 = tmp(1125).intl;
                                  obj14.label = intl3.string(tmp(1125).t.Ipxkog);
                                  obj14.onPress = tmp41;
                                  tmp55 = closure_10(tmp10(14400), obj14, "nitro");
                                  const tmp10Result6 = tmp10(14400);
                                }
                                cResult[36] = hasPremiumSubscriptionToDisplay;
                                cResult[37] = tmp41;
                                cResult[38] = tmp55;
                                tmp54 = tmp55;
                              }
                              const obj15 = { shopButtonRef, navigateToShop };
                              const tmp53 = closure_10(tmp10(14410), obj15, "shop");
                              cResult[33] = navigateToShop;
                              cResult[34] = shopButtonRef;
                              cResult[35] = tmp53;
                              tmp51 = tmp53;
                            }
                            let tmp48 = null;
                            if (tmp35) {
                              const obj16 = {
                                IconComponent: tmp(14408).QuestsIcon,
                                accessibilityLabel: null,
                                onPress: null,
                                showRedDot: null,
                              };
                              const intl = tmp(1125).intl;
                              obj16.accessibilityLabel = intl.string(tmp(1125).t.JALI2K);
                              obj16.onPress = tmp42;
                              obj16.showRedDot = showBadge;
                              tmp48 = closure_10(tmp10(14400), obj16, "quests");
                              const tmp10Result7 = tmp10(14400);
                            }
                            cResult[30] = tmp42;
                            cResult[31] = showBadge;
                            cResult[32] = tmp48;
                            tmp47 = tmp48;
                          }
                          function oe() {
                            if (showBadge) {
                              dismissBadge(ContentDismissActionType.TAKE_ACTION);
                            }
                            const obj = QuestUtils;
                            obj.openQuestHome({ fromContent: QuestTypes.QuestContent.USER_PROFILE_HEADER });
                            const obj2 = { fromContent: QuestTypes.QuestContent.USER_PROFILE_HEADER };
                          }
                          cResult[25] = dismissBadge;
                          cResult[26] = showBadge;
                          cResult[27] = oe;
                          tmp42 = oe;
                        }
                      }
                      class J {
                        constructor() {
                          tmp = closure_0;
                          tmp2 = closure_2;
                          obj = closure_0(closure_2[27]);
                          obj1 = { isBadged: closure_2 };
                          result = obj.trackYouTabSettingsIconPress(obj1);
                          tmp4 = navigateToSettings();
                          tmp5 = closure_5;
                          if (closure_5) {
                            tmpResult = tmp(tmp2[13]);
                            tmp5 = !tmpResult.UNSAFE_isDismissibleContentDismissed(
                              tmp(tmp2[14]).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE,
                            );
                          }
                          if (tmp5) {
                            tmpResult1 = tmp(tmp2[13]);
                            result1 = tmpResult1.UNSAFE_markDismissibleContentAsDismissed(
                              tmp(tmp2[14]).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE,
                            );
                          }
                          return;
                        }
                      }
                      cResult[19] = tmp39;
                      cResult[20] = tmp33;
                      cResult[21] = navigateToSettings;
                      cResult[22] = J;
                      tmp40 = J;
                      const tmpResult9 = tmp(7594);
                    }
                    let hexResult3 = null;
                    if (null != tmp18) {
                      const tmp10Result8 = tmp10(683);
                      const obj8 = tmp10(683)(tmp18);
                      const hexResult2 = tmp10(683)(tmp18).hex("rgb");
                      const obj9 = tmp10(683)(tmp18);
                      hexResult3 = tmp10Result8
                        .mix(gradientSecondaryBackground, hexResult2, tmp10(683)(tmp18).alpha(), "rgb")
                        .hex("rgb");
                      const mixResult = tmp10Result8.mix(
                        gradientSecondaryBackground,
                        hexResult2,
                        tmp10(683)(tmp18).alpha(),
                        "rgb",
                      );
                    }
                    cResult[15] = gradientSecondaryBackground;
                    cResult[16] = tmp18;
                    cResult[17] = hexResult3;
                    tmp20 = hexResult3;
                  }
                }
              }
              const tmpResult6 = tmp(8766);
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
              tmpResult10 = tmp(5011);
            }
          }
          const obj17 = { theme, primaryColor, secondaryColor };
          cResult[6] = primaryColor;
          cResult[7] = secondaryColor;
          cResult[8] = theme;
          cResult[9] = obj17;
          tmp16 = obj17;
          const tmp15 = tmp10(8755)(tmp14);
        }
        const obj18 = { user: stateFromStores, displayProfile: tmp11Result };
        cResult[3] = tmp11Result;
        cResult[4] = stateFromStores;
        cResult[5] = obj18;
        tmp14 = obj18;
        const tmp11 = navigateToPremium(8712);
      }
    : function YouBannerDecorations(navigateToSettings) {
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
        const stateFromStores = navigateToSettings(gradientSecondaryBackground[17]).useStateFromStores(items, () =>
          currentUser.getCurrentUser(),
        );
        let id;
        let obj = navigateToSettings(gradientSecondaryBackground[17]);
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        const tmp6 = navigateToPremium(gradientSecondaryBackground[18]);
        const tmp6Result = navigateToPremium(gradientSecondaryBackground[18])(id);
        ({ theme, primaryColor, secondaryColor } = navigateToPremium(gradientSecondaryBackground[19])({
          user: stateFromStores,
          displayProfile: navigateToPremium(gradientSecondaryBackground[18])(id),
        }));
        const tmp9 = navigateToPremium(gradientSecondaryBackground[19])({
          user: stateFromStores,
          displayProfile: navigateToPremium(gradientSecondaryBackground[18])(id),
        });
        const userProfileColors = navigateToSettings(gradientSecondaryBackground[20]).useUserProfileColors({
          theme,
          primaryColor,
          secondaryColor,
        });
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
        const tmp12 = closure_12(
          num,
          containerBackground.useMemo(() => {
            let hexResult1 = null;
            if (null != containerBackground) {
              const obj = _modDef683;
              const obj2 = _modDef683(containerBackground);
              const hexResult = _modDef683(containerBackground).hex("rgb");
              const obj3 = _modDef683(containerBackground);
              hexResult1 = obj
                .mix(gradientSecondaryBackground, hexResult, _modDef683(containerBackground).alpha(), "rgb")
                .hex("rgb");
              const mixResult = obj.mix(
                gradientSecondaryBackground,
                hexResult,
                _modDef683(containerBackground).alpha(),
                "rgb",
              );
            }
            return hexResult1;
          }, items1),
          gradientSecondaryBackground,
          containerBorderColor,
        );
        tmp2Result5 = navigateToSettings(gradientSecondaryBackground[21]);
        const hasPremiumSubscriptionToDisplay = navigateToSettings(
          gradientSecondaryBackground[23],
        ).useHasPremiumSubscriptionToDisplay();
        const tmp14 = closure_13();
        isBadged = tmp14;
        const tmp15 = navigateToPremium(gradientSecondaryBackground[24])();
        showBadge = tmp15.showBadge;
        dismissBadge = tmp15.dismissBadge;
        const tmp2Result6 = navigateToSettings(gradientSecondaryBackground[23]);
        const isEligibleForQuests = navigateToSettings(gradientSecondaryBackground[25]).getIsEligibleForQuests();
        const tmp17 = navigateToPremium(gradientSecondaryBackground[26])("YouBannerDecorations");
        let placement;
        if (tmp17 != null) {
          placement = tmp17.placement;
        }
        const tmp2Result7 = navigateToSettings(gradientSecondaryBackground[25]);
        const tmp19 = null != navigateToSettings(gradientSecondaryBackground[12]).useTrialOffer(closure_9);
        currentUser = tmp19;
        const items2 = [tmp14, navigateToSettings, tmp19];
        const items3 = [navigateToPremium];
        const callback = obj4.useCallback(() => {
          const result = tracking_Tracking.trackYouTabSettingsIconPress({ isBadged });
          navigateToSettings();
          let tmp5 = closure_7;
          if (closure_7) {
            tmp5 = !DismissibleContentUnsafeUtils.UNSAFE_isDismissibleContentDismissed(
              dismissible_content.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE,
            );
            const tmpResult = DismissibleContentUnsafeUtils;
          }
          if (tmp5) {
            const result1 = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
              dismissible_content.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE,
            );
            const tmpResult2 = DismissibleContentUnsafeUtils;
          }
          const obj2 = { isBadged };
        }, items2);
        const items4 = [showBadge, dismissBadge];
        const callback1 = obj4.useCallback(() => {
          const result = tracking_Tracking.trackYouTabNitroIconPress();
          navigateToPremium();
        }, items3);
        let tmp23 = null;
        const callback2 = obj4.useCallback(() => {
          if (showBadge) {
            dismissBadge(ContentDismissActionType.TAKE_ACTION);
          }
          const obj = QuestUtils;
          obj.openQuestHome({ fromContent: QuestTypes.QuestContent.USER_PROFILE_HEADER });
          const obj2 = { fromContent: QuestTypes.QuestContent.USER_PROFILE_HEADER };
        }, items4);
        if ("you_screen" === placement) {
          tmp23 = closure_10(tmp5(tmp3[30]), {}, "conjure");
        }
        const items5 = [tmp23, , , ,];
        let tmp25 = null;
        if (isEligibleForQuests) {
          let obj2 = {
            IconComponent: tmp2(tmp3[32]).QuestsIcon,
            accessibilityLabel: null,
            onPress: null,
            showRedDot: null,
          };
          const intl = tmp2(tmp3[16]).intl;
          obj2.accessibilityLabel = intl.string(tmp2(tmp3[16]).t.JALI2K);
          obj2.onPress = callback2;
          obj2.showRedDot = showBadge;
          tmp25 = closure_10(tmp5(tmp3[31]), obj2, "quests");
          const tmp5Result = tmp5(tmp3[31]);
        }
        items5[1] = tmp25;
        items5[2] = closure_10(
          navigateToPremium(gradientSecondaryBackground[33]),
          { shopButtonRef, navigateToShop },
          "shop",
        );
        let tmp28Result = null;
        if (!hasPremiumSubscriptionToDisplay) {
          let obj3 = {
            IconComponent: tmp2(tmp3[34]).NitroWheelIcon,
            accessibilityLabel: null,
            label: null,
            onPress: null,
          };
          const intl2 = tmp2(tmp3[16]).intl;
          obj3.accessibilityLabel = intl2.string(tmp2(tmp3[16]).t.Ipxkog);
          const intl3 = tmp2(tmp3[16]).intl;
          obj3.label = intl3.string(tmp2(tmp3[16]).t.Ipxkog);
          obj3.onPress = callback1;
          tmp28Result = closure_10(tmp5(tmp3[31]), obj3, "nitro");
          const tmp5Result4 = tmp5(tmp3[31]);
        }
        items5[3] = tmp28Result;
        const obj5 = {
          ref: settingsButtonRef,
          IconComponent: null,
          accessibilityLabel: null,
          onPress: null,
          showRedDot: null,
          testID: "you_tab_settings_button",
        };
        const tmp2Result8 = navigateToSettings(gradientSecondaryBackground[12]);
        obj5.IconComponent = navigateToSettings(gradientSecondaryBackground[35]).SettingsIcon;
        const intl4 = tmp2(tmp3[16]).intl;
        obj5.accessibilityLabel = intl4.string(navigateToSettings(gradientSecondaryBackground[16]).t["3D5yo/"]);
        obj5.onPress = callback;
        obj5.showRedDot = tmp14;
        items5[4] = closure_10(navigateToPremium(gradientSecondaryBackground[31]), obj5, "settings");
        const obj6 = { style: tmp12.buttonsFloating, pointerEvents: "box-none", children: null };
        const found = items5.filter((item) => null != item);
        obj6.children = closure_10(
          navigateToSettings(gradientSecondaryBackground[36]).YouScreenNavIconMeasurer,
          { children: found },
          tmp,
        );
        color = tmp12.containerFloatingGradient.color;
        const items6 = [color];
        const tmp5Result5 = navigateToPremium(gradientSecondaryBackground[31]);
        const obj7 = { style: tmp12.containerFloatingWrap, pointerEvents: "box-none", children: null };
        const memo = obj4.useMemo(() => {
          const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: null };
          const obj2 = _modDef683(color);
          const items = [_modDef683(color).alpha(0).hex()];
          const alphaResult = _modDef683(color).alpha(0);
          const obj4 = _modDef683(color);
          items[1] = _modDef683(color).alpha(1).hex();
          obj.colors = items;
          return obj;
        }, items6);
        const obj8 = { style: tmp12.containerFloatingGradient };
        const tmp28Result2 = closure_10(isBadged, obj6);
        const merged = Object.assign(memo);
        obj8.pointerEvents = "none";
        const items7 = [closure_10(navigateToPremium(gradientSecondaryBackground[37]), obj8)];
        const obj9 = { style: tmp12.containerFloating, children: null };
        const items8 = [
          closure_10(isBadged, { style: tmp12.endcap, pointerEvents: "none" }),
          closure_10(isBadged, { style: tmp12.containerFloatingContent, children: tmp28Result2 }),
          closure_10(isBadged, { style: tmp12.endcap, pointerEvents: "none" }),
        ];
        obj9.children = items8;
        items7[1] = closure_11(isBadged, obj9);
        obj7.children = items7;
        return closure_11(isBadged, obj7);
      },
);
export { getFloatingNavBottomMargin };
export const useHasSettingsBadge = tmp4;
