// discord_app/modules/user_settings/appearance/native/components/SettingsAppearanceThemeCarousel.tsx
import _modDef12 from "../../../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import MobileThemesUtils from "../../../../client_themes/native/MobileThemesUtils.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../../design/animation/reanimated/timing/timingPresets.tsx";
import HapticUtils from "../../../../haptics/HapticUtils.native.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import SettingsAppearanceConstants from "../SettingsAppearanceConstants.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const ThemeTypes = fn(1084).ThemeTypes;
const HexagonCampaignConstants = fn(4997);
({ HexagonCampaignPerk: closure_9, HexagonCampaignPerkAvailability: c10 } = HexagonCampaignConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
let closure_14 = ReanimatedRexport.createAnimatedComponent(fn(1199).Icon);
const createStyles = fn(4972);
let obj = { container: { gap: nativeDefault.space.PX_24, alignItems: "center" }, textCentered: { textAlign: "center" }, hintContainer: { alignSelf: "stretch" }, hintOverlay: { position: "absolute", top: 0, left: 0, right: 0 }, hidden: { opacity: 0 }, labelGroup: null, swatchesGroup: null, badgeSlot: null, titleContainer: null, floatingNuxContainer: null, floatingNux: null, arrowLeft: null, uppercase: null, selectionBorder: null, a11yThemeList: null, a11yThemeListScroll: null };
let obj3 = { gap: nativeDefault.space.PX_24, alignItems: "center" };
obj.labelGroup = { gap: nativeDefault.space.PX_4, alignItems: "center" };
let obj4 = { gap: nativeDefault.space.PX_4, alignItems: "center" };
obj.swatchesGroup = { gap: nativeDefault.space.PX_12, alignItems: "center" };
let obj5 = { gap: nativeDefault.space.PX_12, alignItems: "center" };
obj.badgeSlot = { height: nativeDefault.space.PX_16, justifyContent: "center" };
let obj6 = { height: nativeDefault.space.PX_16, justifyContent: "center" };
obj.titleContainer = { minHeight: 20, marginTop: nativeDefault.space.PX_4, flexDirection: "row", justifyContent: "center", alignItems: "center" };
let obj7 = { minHeight: 20, marginTop: nativeDefault.space.PX_4, flexDirection: "row", justifyContent: "center", alignItems: "center" };
obj.floatingNuxContainer = { position: "absolute", left: nativeDefault.space.PX_24 };
let obj9 = { borderRadius: nativeDefault.radii.lg, flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_4, paddingRight: nativeDefault.space.PX_8 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj9.shadowColor = "#000000";
obj.floatingNux = obj9;
let obj10 = { transform: null };
let items = [{ rotate: "90deg" }];
obj10.transform = items;
obj.arrowLeft = obj10;
obj.uppercase = { textTransform: "uppercase" };
let size = { position: "absolute", alignSelf: "center", width: SettingsAppearanceConstants.THEME_ITEM_WIDTH, height: SettingsAppearanceConstants.THEME_ITEM_HEIGHT, borderRadius: nativeDefault.radii.md, borderColor: nativeDefault.colors.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT, borderWidth: 2 };
obj.selectionBorder = size;
obj.a11yThemeList = { flexDirection: "row" };
obj.a11yThemeListScroll = { flexGrow: 0 };
let closure_15 = createStyles.createStyles(obj);
let __initData = { code: "function SettingsAppearanceThemeCarouselTsx1(){const{badgeOpacity}=this.__closure;return{opacity:badgeOpacity.get()};}" };
let closure_17 = { code: "function SettingsAppearanceThemeCarouselTsx2(){const{withTiming,isOnyxNuxVisible,timingStandard}=this.__closure;return{opacity:withTiming(isOnyxNuxVisible.get()?1:0,timingStandard),pointerEvents:isOnyxNuxVisible.get()?\"auto\":\"none\"};}" };
let __initData2 = { code: "function SettingsAppearanceThemeCarouselTsx3(){const{badgeOpacity}=this.__closure;return{opacity:badgeOpacity.get()};}" };
const __initData3 = { code: "function SettingsAppearanceThemeCarouselTsx4(){const{withTiming,isOnyxNuxVisible,timingStandard}=this.__closure;return{opacity:withTiming(isOnyxNuxVisible.get()?1:0,timingStandard),pointerEvents:isOnyxNuxVisible.get()?'auto':'none'};}" };
const ReactCompilerGating = fn(558);
let obj8 = { position: "absolute", left: nativeDefault.space.PX_24 };
size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceThemeCarousel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SettingsAppearanceThemeCarousel(themes) {
  const cResult = themes(isPreview[12]).c(131);
  themes = themes.themes;
  const currentThemeIndex = themes.currentThemeIndex;
  isPreview = themes.isPreview;
  const defaultIndex = themes.defaultIndex;
  const deviceWidth = themes.deviceWidth;
  const isSynced = themes.isSynced;
  ({ animatedStyles, hasOnyxNux } = themes);
  const onThemeSelected = themes.onThemeSelected;
  const tmp4 = rounded();
  let obj = themes(isPreview[12]);
  const isScreenReaderEnabled = themes(isPreview[13]).useIsScreenReaderEnabled();
  let obj2 = themes(isPreview[13]);
  constants = deviceWidth.useRef(defaultIndex);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function p(theme) {
      return theme.theme === ref.ONYX;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const findIndexResult = themes.findIndex(first);
  let num2 = 0;
  if (findIndexResult >= 0) {
    num2 = findIndexResult;
  }
  const ref = deviceWidth.useRef(null);
  const sharedValue = themes(isPreview[7]).useSharedValue(false);
  const tmpResult = themes(isPreview[7]);
  const sharedValue1 = themes(isPreview[7]).useSharedValue(false);
  if (cResult[1] !== themes[currentThemeIndex]) {
    let result = tmp(tmp2[14]).isHexagonCampaignMobileTheme(tmp11);
    cResult[1] = tmp11;
    cResult[2] = result;
    let tmp12 = result;
    const tmpResult10 = tmp(tmp2[14]);
  } else {
    tmp12 = cResult[2];
  }
  closure_13 = tmp12;
  if (cResult[3] !== themes) {
    const someResult = themes.some(tmp(tmp2[14]).isHexagonCampaignMobileTheme);
    cResult[3] = themes;
    cResult[4] = someResult;
    let tmp14 = someResult;
  } else {
    tmp14 = cResult[4];
  }
  const findIndexResult1 = themes.findIndex(themes(isPreview[14]).isHexagonCampaignMobileTheme);
  rounded = Math.ceil(deviceWidth / (onThemeSelected.THEME_ITEM_WIDTH + onThemeSelected.THEME_ITEM_HORIZONTAL_MARGIN));
  if (cResult[5] === rounded) {
    if (cResult[6] === findIndexResult1) {
      let tmp19 = cResult[7];
    }
    __initData = tmp19;
    if (cResult[8] === defaultIndex) {
      class U {
        constructor() {
          return closure_16(defaultIndex);
        }
      }
      const first1 = tmp22[0];
      closure_18 = tmp24;
      let tmp19Result = !first1;
      if (!first1) {
        tmp19Result = tmp19(currentThemeIndex);
      }
      if (tmp19Result) {
        tmp24(true);
      }
      if (tmp14) {
        let isThumbstickScrollDevice = first1;
        if (!first1) {
          isThumbstickScrollDevice = isScreenReaderEnabled;
        }
        if (!isThumbstickScrollDevice) {
          isThumbstickScrollDevice = tmp(tmp2[17]).isThumbstickScrollDevice;
        }
        class U {
          constructor() {
            return closure_16(defaultIndex);
          }
        }
      }
      const trackHexagonCampaignContentViewed = tmp(tmp2[15]).useTrackHexagonCampaignContentViewed(tmp(tmp2[16]).QuestContent.CLIENT_THEME_SETTINGS, tmp(tmp2[15]).HexagonCampaignContentSurface.THEME_PICKER, tmp14);
      const tmpResult11 = tmp(tmp2[15]);
      const hexagonCampaignPerkAvailability = tmp(tmp2[18]).useHexagonCampaignPerkAvailability(constants.CLIENT_THEME, "SettingsAppearanceThemeCarousel");
      const tmpResult12 = tmp(tmp2[18]);
      let num11 = 0;
      if (tmp12) {
        num11 = 1;
      }
      const sharedValue2 = tmp(tmp2[7]).useSharedValue(num11);
      if (cResult[11] === sharedValue2) {
        if (cResult[12] === tmp12) {
          let tmp32 = cResult[13];
          let tmp33 = cResult[14];
        }
        const effect = obj3.useEffect(tmp32, tmp33);
        class U {
          constructor() {
            return closure_16(defaultIndex);
          }
        }
        const obj4 = { badgeOpacity: sharedValue2 };
        tmp35.__closure = obj4;
        tmp35.__workletHash = 11624303332519;
        tmp35.__initData = __initData;
        const animatedStyle = tmp(tmp2[7]).useAnimatedStyle(tmp35);
        if (cResult[15] === sharedValue1) {
          if (cResult[16] === sharedValue) {
            let tmp38 = cResult[17];
            let tmp39 = cResult[18];
          }
          const effect1 = obj3.useEffect(tmp39, tmp38);
          if (cResult[19] !== onThemeSelected) {
            currentThemeIndex(tmp2[21]);
            class U {
              constructor() {
                return closure_16(defaultIndex);
              }
            }
            cResult[19] = onThemeSelected;
            cResult[20] = tmp44;
            let tmp41 = tmp44;
          } else {
            tmp41 = cResult[20];
          }
          class U {
            constructor() {
              return closure_16(defaultIndex);
            }
          }
          if (cResult[21] === sharedValue2) {
            if (cResult[22] === deviceWidth) {
              if (cResult[23] === first1) {
                if (cResult[24] === sharedValue1) {
                  if (cResult[25] === hasOnyxNux) {
                    if (cResult[26] === tmp19) {
                      if (cResult[27] === sharedValue) {
                        if (cResult[28] === tmp41) {
                          if (cResult[29] === num2) {
                            if (cResult[30] === themes) {
                              let tmp45 = cResult[31];
                            }
                            if (cResult[32] === currentThemeIndex) {
                              if (cResult[33] === isPreview) {
                                if (cResult[34] === isSynced) {
                                  if (cResult[35] === themes) {
                                    let tmp46 = cResult[36];
                                  }
                                  if (cResult[37] === currentThemeIndex) {
                                    if (cResult[38] === isPreview) {
                                      if (cResult[39] === onThemeSelected) {
                                        let tmp47 = cResult[40];
                                      }
                                      closure_21 = tmp47;
                                      if (cResult[41] === currentThemeIndex) {
                                        if (cResult[42] === isPreview) {
                                          if (cResult[43] === onThemeSelected) {
                                            selectionBorder = cResult[44];
                                          }
                                          function xe() {
                                            let num = 0;
                                            if (sharedValue.get()) {
                                              num = 1;
                                            }
                                            const obj3 = { opacity: timing.withTiming(num, timingPresets.timingStandard), pointerEvents: null };
                                            let str = "none";
                                            if (sharedValue.get()) {
                                              str = "auto";
                                            }
                                            obj3.pointerEvents = str;
                                            return obj3;
                                          }
                                          class U {
                                            constructor() {
                                              return closure_16(defaultIndex);
                                            }
                                          }
                                          tmp49[0] = tmp(tmp2[19]).withTiming;
                                          tmp49[1] = sharedValue;
                                          tmp49[2] = tmp(tmp2[20]).timingStandard;
                                          xe.__closure = tmp49;
                                          xe.__workletHash = 1532887600753;
                                          xe.__initData = first1;
                                          const animatedStyle1 = tmp(tmp2[7]).useAnimatedStyle(xe);
                                          if (cResult[45] === animatedStyles.iconHeaderSecondary) {
                                            if (cResult[46] === currentThemeIndex) {
                                              if (cResult[47] === themes) {
                                                let tmp53 = cResult[48];
                                              }
                                              class U {
                                                constructor() {
                                                  return closure_16(defaultIndex);
                                                }
                                              }
                                              if (cResult[51] === animatedStyles.headerPrimary) {
                                                if (cResult[52] === tmp58) {
                                                  let tmp59 = cResult[53];
                                                }
                                                if (cResult[54] === tmp4.titleContainer) {
                                                  if (cResult[55] === tmp53) {
                                                    if (cResult[56] === tmp59) {
                                                      let tmp62 = cResult[57];
                                                    }
                                                    if (cResult[58] === defaultIndex) {
                                                      if (cResult[59] === deviceWidth) {
                                                        if (cResult[60] === isScreenReaderEnabled) {
                                                          if (cResult[61] === tmp45) {
                                                            if (cResult[62] === onThemeSelected) {
                                                              if (cResult[63] === tmp47) {
                                                                if (cResult[64] === selectionBorder) {
                                                                  if (cResult[65] === tmp4.a11yThemeList) {
                                                                    if (cResult[66] === tmp4.a11yThemeListScroll) {
                                                                      if (cResult[67] === tmp4.selectionBorder) {
                                                                        if (cResult[68] === themes) {
                                                                          if (cResult[70] === animatedStyles.headerSecondary) {
                                                                            if (cResult[71] === tmp4.textCentered) {
                                                                              let tmp76 = cResult[72];
                                                                            }
                                                                            if (cResult[73] !== tmp46) {
                                                                              const tmp46Result = tmp46();
                                                                              cResult[73] = tmp46;
                                                                              class U {
                                                                                constructor() {
                                                                                  return closure_16(defaultIndex);
                                                                                }
                                                                              }
                                                                              cResult[74] = tmp46Result;
                                                                              let tmp77 = tmp46Result;
                                                                            } else {
                                                                              tmp77 = cResult[74];
                                                                            }
                                                                            if (cResult[75] === tmp76) {
                                                                              if (cResult[76] === tmp77) {
                                                                                let tmp79 = cResult[77];
                                                                              }
                                                                              if (cResult[78] === animatedStyles) {
                                                                                if (cResult[79] === tmp14) {
                                                                                  if (cResult[80] === tmp79) {
                                                                                    if (cResult[81] === tmp12) {
                                                                                      if (cResult[82] === tmp4.hidden) {
                                                                                        if (cResult[83] === tmp4.hintContainer) {
                                                                                          if (cResult[84] === tmp4.hintOverlay) {
                                                                                            let tmp81 = cResult[85];
                                                                                          }
                                                                                          if (cResult[86] === animatedStyle) {
                                                                                            if (cResult[87] === tmp4.badgeSlot) {
                                                                                              let tmp83 = cResult[88];
                                                                                            }
                                                                                            if (cResult[89] === hexagonCampaignPerkAvailability) {
                                                                                              if (cResult[90] === tmp12) {
                                                                                                let tmp84 = cResult[91];
                                                                                              }
                                                                                              if (cResult[92] === tmp83) {
                                                                                                if (cResult[93] === tmp84) {
                                                                                                  let tmp88 = cResult[94];
                                                                                                }
                                                                                                if (cResult[95] === tmp4.swatchesGroup) {
                                                                                                  if (cResult[96] === tmp65) {
                                                                                                    if (cResult[97] === tmp88) {
                                                                                                      let tmp91 = cResult[98];
                                                                                                    }
                                                                                                    if (cResult[99] === tmp81) {
                                                                                                      if (cResult[100] === tmp4.labelGroup) {
                                                                                                        if (cResult[101] === tmp62) {
                                                                                                          let tmp94 = cResult[102];
                                                                                                        }
                                                                                                        if (cResult[103] === tmp91) {
                                                                                                          if (cResult[104] === tmp94) {
                                                                                                            let tmp97 = cResult[105];
                                                                                                          }
                                                                                                          if (cResult[106] === animatedStyle1) {
                                                                                                            if (cResult[107] === animatedStyles.bgSurfaceOverlay) {
                                                                                                              if (cResult[108] === animatedStyles.borderFaint) {
                                                                                                                if (cResult[109] === tmp4.floatingNux) {
                                                                                                                  let tmp102 = cResult[110];
                                                                                                                }
                                                                                                                if (cResult[111] === animatedStyles.iconInteractive) {
                                                                                                                  if (cResult[112] === tmp4.arrowLeft) {
                                                                                                                    let tmp103 = cResult[113];
                                                                                                                  }
                                                                                                                  if (cResult[114] === animatedStyles.textNormal) {
                                                                                                                    if (cResult[115] === tmp4.uppercase) {
                                                                                                                      let tmp107 = cResult[116];
                                                                                                                    }
                                                                                                                    const _Symbol = Symbol;
                                                                                                                    class U {
                                                                                                                      constructor() {
                                                                                                                        return closure_16(defaultIndex);
                                                                                                                      }
                                                                                                                    }
                                                                                                                    if (cResult[118] !== tmp107) {
                                                                                                                      const obj5 = { animated: true, style: tmp107, variant: "eyebrow", maxFontSizeMultiplier: 1.5, children: null };
                                                                                                                      class U {
                                                                                                                        constructor() {
                                                                                                                          return closure_16(defaultIndex);
                                                                                                                        }
                                                                                                                      }
                                                                                                                      const tmp111 = sharedValue(tmp(tmp2[26]).Text, obj5);
                                                                                                                      cResult[118] = tmp107;
                                                                                                                      cResult[119] = tmp111;
                                                                                                                      let tmp109 = tmp111;
                                                                                                                    } else {
                                                                                                                      tmp109 = cResult[119];
                                                                                                                    }
                                                                                                                    if (cResult[120] === tmp102) {
                                                                                                                      if (cResult[121] === tmp103) {
                                                                                                                        if (cResult[122] === tmp109) {
                                                                                                                          let tmp112 = cResult[123];
                                                                                                                        }
                                                                                                                        if (cResult[124] === tmp4.floatingNuxContainer) {
                                                                                                                          if (cResult[125] === tmp112) {
                                                                                                                            let tmp116 = cResult[126];
                                                                                                                          }
                                                                                                                          if (cResult[127] === tmp97) {
                                                                                                                            if (cResult[128] === tmp4.container) {
                                                                                                                              if (cResult[129] === tmp116) {
                                                                                                                                let tmp119 = cResult[130];
                                                                                                                              }
                                                                                                                              return tmp119;
                                                                                                                            }
                                                                                                                          }
                                                                                                                          class U {
                                                                                                                            constructor() {
                                                                                                                              return closure_16(defaultIndex);
                                                                                                                            }
                                                                                                                          }
                                                                                                                          const obj6 = { style: tmp100, children: null };
                                                                                                                          const items = [tmp116, tmp97];
                                                                                                                          obj6.children = items;
                                                                                                                          const tmp121 = sharedValue1(isSynced, obj6);
                                                                                                                          cResult[127] = tmp97;
                                                                                                                          cResult[128] = tmp4.container;
                                                                                                                          cResult[129] = tmp116;
                                                                                                                          cResult[130] = tmp121;
                                                                                                                          tmp119 = tmp121;
                                                                                                                        }
                                                                                                                        class U {
                                                                                                                          constructor() {
                                                                                                                            return closure_16(defaultIndex);
                                                                                                                          }
                                                                                                                        }
                                                                                                                        const obj7 = { style: tmp101, children: tmp112 };
                                                                                                                        const tmp118 = sharedValue(isSynced, obj7);
                                                                                                                        cResult[124] = tmp4.floatingNuxContainer;
                                                                                                                        cResult[125] = tmp112;
                                                                                                                        cResult[126] = tmp118;
                                                                                                                        tmp116 = tmp118;
                                                                                                                      }
                                                                                                                    }
                                                                                                                    const obj8 = { style: tmp102, children: null };
                                                                                                                    const items1 = [tmp103, tmp109];
                                                                                                                    obj8.children = items1;
                                                                                                                    const tmp115 = sharedValue1(currentThemeIndex(tmp2[7]).View, obj8);
                                                                                                                    cResult[120] = tmp102;
                                                                                                                    cResult[121] = tmp103;
                                                                                                                    cResult[122] = tmp109;
                                                                                                                    cResult[123] = tmp115;
                                                                                                                    tmp112 = tmp115;
                                                                                                                  }
                                                                                                                  const items2 = [, ];
                                                                                                                  class U {
                                                                                                                    constructor() {
                                                                                                                      return closure_16(defaultIndex);
                                                                                                                    }
                                                                                                                  }
                                                                                                                  items2[1] = tmp4.uppercase;
                                                                                                                  cResult[114] = animatedStyles.textNormal;
                                                                                                                  cResult[115] = tmp4.uppercase;
                                                                                                                  cResult[116] = items2;
                                                                                                                  tmp107 = items2;
                                                                                                                }
                                                                                                                class U {
                                                                                                                  constructor() {
                                                                                                                    return closure_16(defaultIndex);
                                                                                                                  }
                                                                                                                }
                                                                                                                const obj9 = { style: null, source: null, size: null };
                                                                                                                const items3 = [tmp4.arrowLeft, animatedStyles.iconInteractive];
                                                                                                                obj9.style = items3;
                                                                                                                obj9.source = currentThemeIndex(tmp2[30]);
                                                                                                                obj9.size = tmp(tmp2[8]).IconSizes.REFRESH_SMALL_16;
                                                                                                                const tmp106 = sharedValue(findIndexResult1, obj9);
                                                                                                                cResult[111] = animatedStyles.iconInteractive;
                                                                                                                cResult[112] = tmp4.arrowLeft;
                                                                                                                cResult[113] = tmp106;
                                                                                                                tmp103 = tmp106;
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                          const items4 = [, , , ];
                                                                                                          class U {
                                                                                                            constructor() {
                                                                                                              return closure_16(defaultIndex);
                                                                                                            }
                                                                                                          }
                                                                                                          items4[1] = animatedStyle1;
                                                                                                          ({ bgSurfaceOverlay: arr11[2], borderFaint: arr11[3] } = animatedStyles);
                                                                                                          cResult[106] = animatedStyle1;
                                                                                                          cResult[107] = animatedStyles.bgSurfaceOverlay;
                                                                                                          cResult[108] = animatedStyles.borderFaint;
                                                                                                          cResult[109] = tmp4.floatingNux;
                                                                                                          cResult[110] = items4;
                                                                                                          tmp102 = items4;
                                                                                                        }
                                                                                                        class U {
                                                                                                          constructor() {
                                                                                                            return closure_16(defaultIndex);
                                                                                                          }
                                                                                                        }
                                                                                                        const obj10 = { children: null };
                                                                                                        const items5 = [tmp91, tmp94];
                                                                                                        obj10.children = items5;
                                                                                                        const tmp99 = sharedValue1(closure_13, obj10);
                                                                                                        cResult[103] = tmp91;
                                                                                                        cResult[104] = tmp94;
                                                                                                        cResult[105] = tmp99;
                                                                                                        tmp97 = tmp99;
                                                                                                      }
                                                                                                    }
                                                                                                    class U {
                                                                                                      constructor() {
                                                                                                        return closure_16(defaultIndex);
                                                                                                      }
                                                                                                    }
                                                                                                    const obj11 = { style: tmp4.labelGroup, children: null };
                                                                                                    const items6 = [tmp62, tmp81];
                                                                                                    obj11.children = items6;
                                                                                                    const tmp96 = sharedValue1(isSynced, obj11);
                                                                                                    cResult[99] = tmp81;
                                                                                                    cResult[100] = tmp4.labelGroup;
                                                                                                    cResult[101] = tmp62;
                                                                                                    cResult[102] = tmp96;
                                                                                                    tmp94 = tmp96;
                                                                                                  }
                                                                                                }
                                                                                                class U {
                                                                                                  constructor() {
                                                                                                    return closure_16(defaultIndex);
                                                                                                  }
                                                                                                }
                                                                                                const obj12 = { style: tmp4.swatchesGroup, children: null };
                                                                                                const items7 = [tmp88, tmp65];
                                                                                                obj12.children = items7;
                                                                                                const tmp93 = sharedValue1(isSynced, obj12);
                                                                                                cResult[95] = tmp4.swatchesGroup;
                                                                                                cResult[96] = tmp65;
                                                                                                cResult[97] = tmp88;
                                                                                                cResult[98] = tmp93;
                                                                                                tmp91 = tmp93;
                                                                                              }
                                                                                              class U {
                                                                                                constructor() {
                                                                                                  return closure_16(defaultIndex);
                                                                                                }
                                                                                              }
                                                                                              const obj13 = { style: tmp83, children: tmp84 };
                                                                                              const tmp90 = sharedValue(currentThemeIndex(tmp2[7]).View, obj13);
                                                                                              cResult[92] = tmp83;
                                                                                              cResult[93] = tmp84;
                                                                                              cResult[94] = tmp90;
                                                                                              tmp88 = tmp90;
                                                                                            }
                                                                                            let tmp85 = tmp12;
                                                                                            class U {
                                                                                              constructor() {
                                                                                                return closure_16(defaultIndex);
                                                                                              }
                                                                                            }
                                                                                            if (tmp85) {
                                                                                              class U {
                                                                                                constructor() {
                                                                                                  return closure_16(defaultIndex);
                                                                                                }
                                                                                              }
                                                                                              tmp85 = sharedValue(currentThemeIndex(tmp2[29]), { variant: "overlay", perk: null });
                                                                                              const obj14 = { variant: "overlay", perk: null };
                                                                                            }
                                                                                            cResult[89] = hexagonCampaignPerkAvailability;
                                                                                            cResult[90] = tmp12;
                                                                                            cResult[91] = tmp85;
                                                                                            tmp84 = tmp85;
                                                                                          }
                                                                                          const items8 = [, ];
                                                                                          class U {
                                                                                            constructor() {
                                                                                              return closure_16(defaultIndex);
                                                                                            }
                                                                                          }
                                                                                          items8[1] = animatedStyle;
                                                                                          cResult[86] = animatedStyle;
                                                                                          cResult[87] = tmp4.badgeSlot;
                                                                                          cResult[88] = items8;
                                                                                          tmp83 = items8;
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                              class U {
                                                                                constructor() {
                                                                                  return closure_16(defaultIndex);
                                                                                }
                                                                              }
                                                                              cResult[78] = animatedStyles;
                                                                              cResult[79] = tmp14;
                                                                              cResult[80] = tmp79;
                                                                              cResult[81] = tmp12;
                                                                              cResult[82] = tmp4.hidden;
                                                                              cResult[83] = tmp4.hintContainer;
                                                                              cResult[84] = tmp4.hintOverlay;
                                                                              cResult[85] = tmp79;
                                                                              tmp81 = tmp82;
                                                                            }
                                                                            class U {
                                                                              constructor() {
                                                                                return closure_16(defaultIndex);
                                                                              }
                                                                            }
                                                                            const obj15 = { animated: true, style: tmp76, variant: "text-sm/medium", children: tmp77 };
                                                                            const tmp80 = sharedValue(tmp(tmp2[26]).Text, obj15);
                                                                            cResult[75] = tmp76;
                                                                            cResult[76] = tmp77;
                                                                            cResult[77] = tmp80;
                                                                            tmp79 = tmp80;
                                                                          }
                                                                          const items9 = [, ];
                                                                          class U {
                                                                            constructor() {
                                                                              return closure_16(defaultIndex);
                                                                            }
                                                                          }
                                                                          items9[1] = tmp4.textCentered;
                                                                          cResult[70] = animatedStyles.headerSecondary;
                                                                          cResult[71] = tmp4.textCentered;
                                                                          cResult[72] = items9;
                                                                          tmp76 = items9;
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                    class U {
                                                      constructor() {
                                                        return closure_16(defaultIndex);
                                                      }
                                                    }
                                                    if (!isScreenReaderEnabled) {
                                                      if (!tmp(tmp2[17]).isThumbstickScrollDevice) {
                                                        const obj16 = { children: null };
                                                        class U {
                                                          constructor() {
                                                            return closure_16(defaultIndex);
                                                          }
                                                        }
                                                        tmp70[1] = tmp4.selectionBorder;
                                                        const items10 = [tmp66(tmp67, tmp70), ];
                                                        const size = { ref, data: themes, renderItem: selectionBorder, style: null, width: null, height: null, loop: false, pagingEnabled: true, defaultIndex: null, onSnapToItem: null, scrollAnimationDuration: 200, onProgressChange: null };
                                                        const obj17 = { width: deviceWidth, justifyContent: "center", alignItems: "center", marginLeft: tmp17.THEME_ITEM_HORIZONTAL_MARGIN };
                                                        size.style = obj17;
                                                        size.width = tmp17.THEME_ITEM_WIDTH + tmp17.THEME_ITEM_HORIZONTAL_MARGIN;
                                                        size.height = tmp17.THEME_ITEM_HEIGHT;
                                                        size.defaultIndex = defaultIndex;
                                                        size.onSnapToItem = onThemeSelected;
                                                        size.onProgressChange = tmp45;
                                                        items10[1] = tmp66(currentThemeIndex(tmp2[27]), size);
                                                        obj16.children = items10;
                                                        let tmp66Result = sharedValue1(closure_13, obj16);
                                                      }
                                                      { children: null }.children = tmp66Result;
                                                      class U {
                                                        constructor() {
                                                          return closure_16(defaultIndex);
                                                        }
                                                      }
                                                      cResult[58] = defaultIndex;
                                                      cResult[59] = deviceWidth;
                                                      cResult[60] = isScreenReaderEnabled;
                                                      cResult[61] = tmp45;
                                                      cResult[62] = onThemeSelected;
                                                      cResult[63] = tmp47;
                                                      cResult[64] = selectionBorder;
                                                      cResult[65] = tmp4.a11yThemeList;
                                                      ({ a11yThemeListScroll: tmp3[66], selectionBorder } = tmp4);
                                                      cResult[67] = selectionBorder;
                                                      cResult[68] = themes;
                                                      cResult[69] = tmp74;
                                                      const obj18 = { children: null };
                                                    }
                                                    const obj19 = { horizontal: true, style: null, contentContainerStyle: null, children: null };
                                                    ({ a11yThemeListScroll: obj20.style, a11yThemeList: obj20.contentContainerStyle } = tmp4);
                                                    obj19.children = themes.map((item, index) => {
                                                      const obj = { children: closure_21({ item, index }) };
                                                      return closure_2_11(hasOwnProperty, obj, "theme-" + index);
                                                    });
                                                    tmp66Result = tmp66(hasOnyxNux, obj19);
                                                  }
                                                }
                                                class U {
                                                  constructor() {
                                                    return closure_16(defaultIndex);
                                                  }
                                                }
                                                const obj21 = { style: tmp52, children: null };
                                                const items11 = [tmp53, tmp59];
                                                obj21.children = items11;
                                                const tmp64 = sharedValue1(isSynced, obj21);
                                                cResult[54] = tmp4.titleContainer;
                                                cResult[55] = tmp53;
                                                cResult[56] = tmp59;
                                                cResult[57] = tmp64;
                                                tmp62 = tmp64;
                                              }
                                              const obj22 = { animated: true, style: animatedStyles.headerPrimary, variant: "heading-sm/semibold", children: tmp58 };
                                              const tmp61 = sharedValue(tmp(tmp2[26]).Text, obj22);
                                              cResult[51] = animatedStyles.headerPrimary;
                                              cResult[52] = tmp58;
                                              cResult[53] = tmp61;
                                              tmp59 = tmp61;
                                            }
                                          }
                                          const tmpResult15 = tmp(tmp2[7]);
                                          let tmp54 = null;
                                          if (tmpResult16.isNitroGatedMobileTheme(themes[currentThemeIndex])) {
                                            const obj23 = { source: null, style: null, size: null };
                                            class U {
                                              constructor() {
                                                return closure_16(defaultIndex);
                                              }
                                            }
                                            obj23.source = currentThemeIndex(tmp2[25]);
                                            obj23.style = animatedStyles.iconHeaderSecondary;
                                            obj23.size = tmp(tmp2[8]).IconSizes.SMALL_20;
                                            tmp54 = sharedValue(findIndexResult1, obj23);
                                          }
                                          cResult[45] = animatedStyles.iconHeaderSecondary;
                                          cResult[46] = currentThemeIndex;
                                          cResult[47] = themes;
                                          cResult[48] = tmp54;
                                          tmp53 = tmp54;
                                          tmpResult16 = tmp(tmp2[14]);
                                        }
                                      }
                                      class U {
                                        constructor() {
                                          return closure_16(defaultIndex);
                                        }
                                      }
                                      cResult[41] = currentThemeIndex;
                                      cResult[42] = isPreview;
                                      cResult[43] = onThemeSelected;
                                      cResult[44] = tmp48;
                                      selectionBorder = tmp48;
                                    }
                                  }
                                  function renderA11yThemeItem(themePreset) {
                                    const index = themePreset.index;
                                    return sharedValue(currentThemeIndex(isPreview[24]), {
                                      themePreset: themePreset.item,
                                      isPreview,
                                      isSelected: index === currentThemeIndex,
                                      onPress() {
                                        return onThemeSelected(index);
                                      }
                                    });
                                  }
                                  class U {
                                    constructor() {
                                      return closure_16(defaultIndex);
                                    }
                                  }
                                  cResult[37] = currentThemeIndex;
                                  cResult[38] = isPreview;
                                  cResult[39] = onThemeSelected;
                                  cResult[40] = renderA11yThemeItem;
                                  tmp47 = renderA11yThemeItem;
                                }
                              }
                            }
                            function getHintText() {
                              if (isPreview) {
                                if (obj.isNitroGatedMobileTheme(themes[currentThemeIndex])) {
                                  const intl2 = util.intl;
                                  let stringResult = intl2.string(util.t.VqGKm0);
                                }
                                return stringResult;
                              }
                              const intl = util.intl;
                              const string = intl.string;
                              const t = util.t;
                              if (isSynced) {
                                stringResult = string(t.lhV0Y2);
                              } else {
                                stringResult = string(t.d5Gu9A);
                              }
                            }
                            class U {
                              constructor() {
                                return closure_16(defaultIndex);
                              }
                            }
                            cResult[32] = currentThemeIndex;
                            cResult[33] = isPreview;
                            cResult[34] = isSynced;
                            cResult[35] = themes;
                            cResult[36] = getHintText;
                            tmp46 = getHintText;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          function onProgressChange(arg0, arg1) {
            let tmp = !first1;
            if (!first1) {
              tmp = closure_16(arg1);
            }
            if (tmp) {
              closure_18(true);
            }
            rounded = Math.round(arg1);
            if (Math.abs(arg1 - rounded) > 0.01) {
              const result = sharedValue2.set(0);
            } else {
              let num = 0;
              if (null != themes[rounded]) {
                num = 0;
                if (obj.isHexagonCampaignMobileTheme(tmp33)) {
                  num = 1;
                }
                obj = MobileThemesUtils;
              }
              const result1 = sharedValue2.set(timing.withTiming(num, timingPresets.timingStandard));
            }
            if (rounded !== ref.current) {
              const result2 = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
              tmp13.current = rounded;
              closure_1_20(rounded);
            }
            if (hasOnyxNux) {
              const _Math = Math;
              const tmp24 = arg1 < num2 + Math.ceil(deviceWidth / (SettingsAppearanceConstants.THEME_ITEM_WIDTH + SettingsAppearanceConstants.THEME_ITEM_HORIZONTAL_MARGIN)) / 2;
              if (tmp24) {
                const result3 = sharedValue1.set(true);
              }
              value = sharedValue1.get();
              let tmp30 = !value;
              if (!value) {
                tmp30 = !tmp24;
              }
              const result4 = sharedValue.set(tmp30);
            }
          }
          cResult[21] = sharedValue2;
          cResult[22] = deviceWidth;
          cResult[23] = first1;
          cResult[24] = sharedValue1;
          cResult[25] = hasOnyxNux;
          cResult[26] = tmp19;
          cResult[27] = sharedValue;
          cResult[28] = tmp41;
          cResult[29] = num2;
          cResult[30] = themes;
          cResult[31] = onProgressChange;
          tmp45 = onProgressChange;
        }
        function ce() {
          const timeout = setTimeout(() => {
            const result = sharedValue.set(false);
            const result1 = sharedValue1.set(true);
          }, 5500);
          return () => clearTimeout(closure_0);
        }
        const items12 = [sharedValue, sharedValue1];
        cResult[15] = sharedValue1;
        cResult[16] = sharedValue;
        cResult[17] = items12;
        cResult[18] = ce;
        tmp39 = ce;
        tmp38 = items12;
        const tmpResult14 = tmp(tmp2[7]);
      }
      function ie() {
        let num = 0;
        if (closure_13) {
          num = 1;
        }
        const result = sharedValue2.set(timing.withTiming(num, timingPresets.timingStandard));
      }
      const items13 = [tmp12, sharedValue2];
      cResult[11] = sharedValue2;
      cResult[12] = tmp12;
      cResult[13] = ie;
      cResult[14] = items13;
      tmp33 = items13;
      tmp32 = ie;
      const tmpResult13 = tmp(tmp2[7]);
    }
    class U {
      constructor() {
        return closure_16(defaultIndex);
      }
    }
    cResult[8] = defaultIndex;
    cResult[9] = tmp19;
    cResult[10] = U;
  }
  function isHexagonOnScreenAt(arg0) {
    let tmp2 = findIndexResult1 >= 0;
    if (tmp2) {
      const _Math = Math;
      tmp2 = Math.abs(arg0 - tmp) < rounded / 2;
    }
    return tmp2;
  }
  cResult[5] = rounded;
  cResult[6] = findIndexResult1;
  cResult[7] = isHexagonOnScreenAt;
  tmp19 = isHexagonOnScreenAt;
  const tmpResult9 = themes(isPreview[7]);
}) : (function SettingsAppearanceThemeCarousel(themes) {
  themes = themes.themes;
  const currentThemeIndex = themes.currentThemeIndex;
  const isPreview = themes.isPreview;
  const defaultIndex = themes.defaultIndex;
  const deviceWidth = themes.deviceWidth;
  ({ animatedStyles, hasOnyxNux: closure_5, onThemeSelected } = themes);
  let isThumbstickScrollDevice;
  let sharedValue2;
  __initData2 = undefined;
  let tmp = isThumbstickScrollDevice();
  const isScreenReaderEnabled = themes(isPreview[13]).useIsScreenReaderEnabled();
  deviceWidth.useRef(null);
  const ref = deviceWidth.useRef(defaultIndex);
  const items = [themes];
  constants = deviceWidth.useMemo(() => {
    const findIndexResult = themes.findIndex((theme) => theme.theme === constants.ONYX);
    let num = 0;
    if (findIndexResult >= 0) {
      num = findIndexResult;
    }
    return num;
  }, items);
  let obj = themes(isPreview[13]);
  const sharedValue = themes(isPreview[7]).useSharedValue(false);
  let obj3 = themes(isPreview[7]);
  const sharedValue1 = themes(isPreview[7]).useSharedValue(false);
  const obj4 = themes(isPreview[7]);
  let result = themes(isPreview[14]).isHexagonCampaignMobileTheme(themes[currentThemeIndex]);
  c12 = result;
  const items1 = [themes];
  const memo = deviceWidth.useMemo(() => themes.some(MobileThemesUtils.isHexagonCampaignMobileTheme), items1);
  const items2 = [themes];
  const memo1 = deviceWidth.useMemo(() => themes.findIndex(MobileThemesUtils.isHexagonCampaignMobileTheme), items2);
  let rounded = Math.ceil(deviceWidth / (ref.THEME_ITEM_WIDTH + ref.THEME_ITEM_HORIZONTAL_MARGIN));
  const tmp13 = defaultIndex(deviceWidth.useState(() => {
    let tmp3 = memo1 >= 0;
    if (tmp3) {
      const _Math = Math;
      tmp3 = Math.abs(tmp - tmp2) < rounded / 2;
    }
    return tmp3;
  }), 2);
  isThumbstickScrollDevice = tmp13[0];
  closure_16 = tmp14;
  let tmp15 = !isThumbstickScrollDevice;
  if (!isThumbstickScrollDevice) {
    let tmp16 = memo1 >= 0;
    if (tmp16) {
      let _Math = Math;
      tmp16 = Math.abs(currentThemeIndex - memo1) < rounded / 2;
    }
    tmp15 = tmp16;
  }
  if (tmp15) {
    tmp14(true);
  }
  const obj5 = themes(isPreview[14]);
  let tmp18 = memo;
  if (memo) {
    if (!isThumbstickScrollDevice) {
      isThumbstickScrollDevice = isScreenReaderEnabled;
    }
    if (!isThumbstickScrollDevice) {
      isThumbstickScrollDevice = tmp2(tmp3[17]).isThumbstickScrollDevice;
    }
    tmp18 = isThumbstickScrollDevice;
  }
  const trackHexagonCampaignContentViewed = themes(isPreview[15]).useTrackHexagonCampaignContentViewed(tmp2(tmp3[16]).QuestContent.CLIENT_THEME_SETTINGS, tmp2(tmp3[15]).HexagonCampaignContentSurface.THEME_PICKER, tmp18);
  const tmp2Result = themes(isPreview[15]);
  const hexagonCampaignPerkAvailability = themes(isPreview[18]).useHexagonCampaignPerkAvailability(constants.CLIENT_THEME, "SettingsAppearanceThemeCarousel");
  const tmp20 = constants;
  const tmp2Result7 = themes(isPreview[18]);
  let num2 = 0;
  if (result) {
    num2 = 1;
  }
  sharedValue2 = themes(isPreview[7]).useSharedValue(num2);
  const items3 = [result, sharedValue2];
  const effect = obj2.useEffect(() => {
    let num = 0;
    if (c12) {
      num = 1;
    }
    const result = sharedValue2.set(timing.withTiming(num, timingPresets.timingStandard));
  }, items3);
  const tmp2Result8 = themes(isPreview[7]);
  class Y {
    constructor() {
      obj = { opacity: closure_17.get() };
      return obj;
    }
  }
  Y.__closure = { badgeOpacity: sharedValue2 };
  Y.__workletHash = 4931734771173;
  Y.__initData = __initData2;
  const items4 = [sharedValue, sharedValue1];
  const animatedStyle = themes(isPreview[7]).useAnimatedStyle(Y);
  const effect1 = obj2.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = sharedValue.set(false);
      const result1 = sharedValue1.set(true);
    }, 5500);
    return () => clearTimeout(closure_0);
  }, items4);
  const items5 = [onThemeSelected];
  __initData2 = obj2.useMemo(() => _modDef12.debounce(onThemeSelected, 180), items5);
  const items6 = [isPreview, onThemeSelected, currentThemeIndex];
  const callback = obj2.useCallback((themePreset) => {
    const index = themePreset.index;
    return sharedValue1(currentThemeIndex(isPreview[24]), {
      themePreset: themePreset.item,
      isPreview,
      isSelected: index === currentThemeIndex,
      onPress() {
        if (null != ref.current) {
          const current = ref.current;
          const currentIndex = current.getCurrentIndex();
          if (currentIndex === index) {
            return onThemeSelected(index);
          } else {
            if (currentIndex !== index) {
              if (0 === currentIndex) {
                const obj2 = { count: index };
                return ref.current.next(obj2);
              } else {
                const current2 = ref.current;
                const obj = { index, animated: true };
                current2.scrollTo(obj);
              }
            }
            const current3 = ref.current;
            if (current3 != null) {
              const obj3 = { index, animated: true };
              current3.scrollTo(obj3);
            }
          }
        }
      },
      isNew: false
    });
  }, items6);
  const tmp2Result9 = themes(isPreview[7]);
  class U {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[19]);
      obj2 = closure_10;
      num = 0;
      if (closure_10.get()) {
        num = 1;
      }
      obj1 = { opacity: obj.withTiming(num, tmp(tmp2[20]).timingStandard), pointerEvents: null };
      str = "none";
      if (obj2.get()) {
        str = "auto";
      }
      obj1.pointerEvents = str;
      return obj1;
    }
  }
  const tmp2Result10 = themes(isPreview[7]);
  U.__closure = { withTiming: themes(isPreview[19]).withTiming, isOnyxNuxVisible: sharedValue, timingStandard: themes(isPreview[20]).timingStandard };
  U.__workletHash = 12494364562679;
  U.__initData = __initData3;
  const animatedStyle1 = tmp2Result10.useAnimatedStyle(U);
  const obj6 = { withTiming: themes(isPreview[19]).withTiming, isOnyxNuxVisible: sharedValue, timingStandard: themes(isPreview[20]).timingStandard };
  const obj7 = { style: tmp.titleContainer, children: null };
  let tmp30 = null;
  if (tmp2Result11.isNitroGatedMobileTheme(themes[currentThemeIndex])) {
    const obj8 = { source: currentThemeIndex(tmp3[25]), style: animatedStyles.iconHeaderSecondary, size: tmp2(tmp3[8]).IconSizes.SMALL_20 };
    tmp30 = sharedValue1(rounded, obj8);
  }
  const items7 = [tmp30, ];
  const obj9 = { animated: true, style: animatedStyles.headerPrimary, variant: "heading-sm/semibold", children: themes[currentThemeIndex].getName() };
  items7[1] = sharedValue1(themes(isPreview[26]).Text, obj9);
  obj7.children = items7;
  if (!isScreenReaderEnabled) {
    if (!tmp2(tmp3[17]).isThumbstickScrollDevice) {
      const obj10 = { children: null };
      const obj11 = { pointerEvents: "none", style: tmp.selectionBorder };
      const items8 = [tmp34(closure_5, obj11), ];
      const size = { ref, data: themes, renderItem: callback, style: null, width: null, height: null, loop: false, pagingEnabled: true, defaultIndex: null, onSnapToItem: null, scrollAnimationDuration: 200, onProgressChange: null };
      const obj12 = { width: deviceWidth, justifyContent: "center", alignItems: "center", marginLeft: tmp11.THEME_ITEM_HORIZONTAL_MARGIN };
      size.style = obj12;
      size.width = tmp11.THEME_ITEM_WIDTH + tmp11.THEME_ITEM_HORIZONTAL_MARGIN;
      size.height = tmp11.THEME_ITEM_HEIGHT;
      size.defaultIndex = defaultIndex;
      size.onSnapToItem = onThemeSelected;
      size.onProgressChange = function onProgressChange(arg0, arg1) {
        let tmp = !isThumbstickScrollDevice;
        if (!isThumbstickScrollDevice) {
          let tmp3 = memo1 >= 0;
          if (tmp3) {
            const _Math = Math;
            tmp3 = Math.abs(arg1 - tmp2) < rounded / 2;
          }
          tmp = tmp3;
        }
        if (tmp) {
          closure_16(true);
        }
        rounded = Math.round(arg1);
        if (Math.abs(arg1 - rounded) > 0.01) {
          const result = sharedValue2.set(0);
        } else {
          let num3 = 0;
          if (null != themes[rounded]) {
            num3 = 0;
            if (obj.isHexagonCampaignMobileTheme(tmp36)) {
              num3 = 1;
            }
            obj = MobileThemesUtils;
          }
          const result1 = sharedValue2.set(timing.withTiming(num3, timingPresets.timingStandard));
        }
        if (rounded !== ref.current) {
          const result2 = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
          tmp16.current = rounded;
          closure_18(rounded);
        }
        if (closure_1_5) {
          const _Math2 = Math;
          const tmp27 = arg1 < closure_9 + Math.ceil(deviceWidth / (SettingsAppearanceConstants.THEME_ITEM_WIDTH + SettingsAppearanceConstants.THEME_ITEM_HORIZONTAL_MARGIN)) / 2;
          if (tmp27) {
            const result3 = sharedValue1.set(true);
          }
          value = sharedValue1.get();
          let tmp33 = !value;
          if (!value) {
            tmp33 = !tmp27;
          }
          const result4 = sharedValue.set(tmp33);
        }
      };
      items8[1] = tmp34(currentThemeIndex(tmp3[27]), size);
      obj10.children = items8;
      let tmp34Result7 = tmp28(memo1, obj10);
    }
    const obj13 = { children: tmp34Result7 };
    const obj14 = { animated: true, style: null, variant: "text-sm/medium", children: null };
    const items9 = [animatedStyles.headerSecondary, tmp.textCentered];
    obj14.style = items9;
    if (isPreview) {
      if (tmp2Result12.isNitroGatedMobileTheme(themes[currentThemeIndex])) {
        const intl2 = tmp2(tmp3[23]).intl;
        let stringResult = intl2.string(tmp2(tmp3[23]).t.VqGKm0);
      }
      obj14.children = stringResult;
      const tmp34Result4 = tmp34(tmp40, obj14);
      let tmp28Result3 = tmp34Result4;
      if (memo) {
        const obj15 = { style: tmp.hintContainer, children: null };
        let hidden = !result;
        if (!result) {
          hidden = tmp.hidden;
        }
        const obj17 = { style: hidden, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
        let str = "none";
        if (result) {
          str = "auto";
        }
        obj17.pointerEvents = str;
        obj17.accessibilityElementsHidden = !result;
        let str2 = "no-hide-descendants";
        if (result) {
          str2 = "auto";
        }
        obj17.importantForAccessibility = str2;
        const obj18 = { animatedStyles };
        obj17.children = tmp34(currentThemeIndex(tmp3[28]), obj18);
        const items10 = [tmp34(closure_5, obj17), ];
        let tmp34Result5 = !result;
        if (!result) {
          const obj19 = { style: tmp.hintOverlay, children: tmp34Result4 };
          tmp34Result5 = tmp34(closure_5, obj19);
        }
        items10[1] = tmp34Result5;
        obj15.children = items10;
        tmp28Result3 = tmp28(closure_5, obj15);
      }
      const obj20 = { style: tmp.swatchesGroup, children: null };
      const obj21 = { style: null, children: null };
      const items11 = [tmp.badgeSlot, animatedStyle];
      obj21.style = items11;
      let tmp34Result6 = result;
      if (result) {
        tmp34Result6 = hexagonCampaignPerkAvailability !== sharedValue.LOCKED;
      }
      if (tmp34Result6) {
        const obj22 = { variant: "overlay", perk: tmp20.CLIENT_THEME };
        tmp34Result6 = tmp34(tmp47(tmp3[29]), obj22);
      }
      const obj23 = { children: null };
      obj21.children = tmp34Result6;
      const items12 = [tmp34(currentThemeIndex(tmp3[7]).View, obj21), tmp34Result];
      obj20.children = items12;
      const items13 = [tmp28(closure_5, obj20), ];
      const obj24 = { style: tmp.labelGroup, children: null };
      const items14 = [tmp35, tmp28Result3];
      obj24.children = items14;
      items13[1] = tmp28(closure_5, obj24);
      obj23.children = items13;
      const obj25 = { style: tmp.container, children: null };
      const obj26 = { style: tmp.floatingNuxContainer, children: null };
      tmp2Result12 = tmp2(tmp3[14]);
      const obj27 = { style: null, children: null };
      const items15 = [tmp.floatingNux, animatedStyle1, , ];
      ({ bgSurfaceOverlay: arr17[2], borderFaint: arr17[3] } = animatedStyles);
      obj27.style = items15;
      const obj28 = { style: null, source: null, size: null };
      const items16 = [tmp.arrowLeft, animatedStyles.iconInteractive];
      obj28.style = items16;
      obj28.source = currentThemeIndex(tmp3[30]);
      obj28.size = tmp2(tmp3[8]).IconSizes.REFRESH_SMALL_16;
      const items17 = [tmp34(rounded, obj28), ];
      const obj29 = { animated: true, style: null, variant: "eyebrow", maxFontSizeMultiplier: 1.5, children: null };
      const items18 = [animatedStyles.textNormal, tmp.uppercase];
      obj29.style = items18;
      const intl3 = tmp2(tmp3[23]).intl;
      obj29.children = intl3.string(tmp2(tmp3[23]).t.y2b7CA);
      items17[1] = tmp34(tmp2(tmp3[26]).Text, obj29);
      obj27.children = items17;
      obj26.children = tmp28(currentThemeIndex(tmp3[7]).View, obj27);
      const items19 = [tmp34(closure_5, obj26), tmp28(memo1, obj23)];
      obj25.children = items19;
      return tmp28(closure_5, obj25);
    }
    const intl = tmp2(tmp3[23]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[23]).t;
    if (themes.isSynced) {
      stringResult = string(t.lhV0Y2);
    } else {
      stringResult = string(t.d5Gu9A);
    }
    tmp34Result = tmp34(closure_5, obj13);
  }
  tmp2Result11 = themes(isPreview[14]);
  tmp34Result7 = tmp34(onThemeSelected, {
    horizontal: true,
    style: tmp.a11yThemeListScroll,
    contentContainerStyle: tmp.a11yThemeList,
    children: themes.map((themePreset, index) => {
      const obj = {
        children: sharedValue1(currentThemeIndex(isPreview[24]), {
          themePreset,
          isPreview,
          isSelected: index === currentThemeIndex,
          onPress() {
            return onThemeSelected(closure_0);
          }
        })
      };
      closure_0 = index;
      return sharedValue1(closure_1_5, obj, "theme-" + index);
    })
  });
  const obj30 = {
    horizontal: true,
    style: tmp.a11yThemeListScroll,
    contentContainerStyle: tmp.a11yThemeList,
    children: themes.map((themePreset, index) => {
      const obj = {
        children: sharedValue1(currentThemeIndex(isPreview[24]), {
          themePreset,
          isPreview,
          isSelected: index === currentThemeIndex,
          onPress() {
            return onThemeSelected(closure_0);
          }
        })
      };
      closure_0 = index;
      return sharedValue1(closure_1_5, obj, "theme-" + index);
    })
  };
});