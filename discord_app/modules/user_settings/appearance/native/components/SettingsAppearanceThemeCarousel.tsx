// === Module 16593: SettingsAppearanceThemeCarousel ===

// Module 16593 (SettingsAppearanceThemeCarousel)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import MobileThemesUtils from "MobileThemesUtils" /* 5200 */;
import timing from "timing" /* 5204 */;
import timingPresets from "timingPresets" /* 5207 */;
import HapticUtils from "HapticUtils" /* 5210 */;
import noop from "module_19" /* 19 */;
import SettingsAppearanceConstants from "SettingsAppearanceConstants" /* 16594 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5050 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
let ThemeTypes = fn(1087).ThemeTypes;
const HexagonCampaignConstants = fn(4994);
({ HexagonCampaignPerk: closure_8, HexagonCampaignPerkAvailability: closure_9 } = HexagonCampaignConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let closure_13 = ReanimatedRexport.createAnimatedComponent(fn(1202).Icon);
const createStyles = fn(4969);
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
let closure_14 = createStyles.createStyles(obj);
let __initData = { code: "function SettingsAppearanceThemeCarouselTsx1(){const{badgeOpacity}=this.__closure;return{opacity:badgeOpacity.get()};}" };
const __initData2 = { code: "function SettingsAppearanceThemeCarouselTsx2(){const{withTiming,isOnyxNuxVisible,timingStandard}=this.__closure;return{opacity:withTiming(isOnyxNuxVisible.get()?1:0,timingStandard),pointerEvents:isOnyxNuxVisible.get()?\"auto\":\"none\"};}" };
const __initData3 = { code: "function SettingsAppearanceThemeCarouselTsx3(){const{badgeOpacity}=this.__closure;return{opacity:badgeOpacity.get()};}" };
const __initData4 = { code: "function SettingsAppearanceThemeCarouselTsx4(){const{withTiming,isOnyxNuxVisible,timingStandard}=this.__closure;return{opacity:withTiming(isOnyxNuxVisible.get()?1:0,timingStandard),pointerEvents:isOnyxNuxVisible.get()?'auto':'none'};}" };
const ReactCompilerGating = fn(558);
let obj8 = { position: "absolute", left: nativeDefault.space.PX_24 };
size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceThemeCarousel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SettingsAppearanceThemeCarousel(themes) {
  const cResult = themes(isPreview[11]).c(123);
  themes = themes.themes;
  const currentThemeIndex = themes.currentThemeIndex;
  isPreview = themes.isPreview;
  ({ defaultIndex, deviceWidth } = themes);
  const isSynced = themes.isSynced;
  ({ animatedStyles, hasOnyxNux } = themes);
  const onThemeSelected = themes.onThemeSelected;
  const tmp4 = closure_14();
  let obj = themes(isPreview[11]);
  const isScreenReaderEnabled = themes(isPreview[12]).useIsScreenReaderEnabled();
  const ref = deviceWidth.useRef(null);
  constants = deviceWidth.useRef(defaultIndex);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function y(theme) {
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
  let obj2 = themes(isPreview[12]);
  const sharedValue = themes(isPreview[6]).useSharedValue(false);
  const tmpResult = themes(isPreview[6]);
  const sharedValue1 = themes(isPreview[6]).useSharedValue(false);
  if (cResult[1] !== themes[currentThemeIndex]) {
    let result = tmp(tmp2[13]).isHexagonCampaignMobileTheme(tmp11);
    cResult[1] = tmp11;
    cResult[2] = result;
    let tmp12 = result;
    const tmpResult9 = tmp(tmp2[13]);
  } else {
    tmp12 = cResult[2];
  }
  closure_12 = tmp12;
  if (cResult[3] !== themes) {
    const someResult = themes.some(tmp(tmp2[13]).isHexagonCampaignMobileTheme);
    cResult[3] = themes;
    cResult[4] = someResult;
    let tmp14 = someResult;
  } else {
    tmp14 = cResult[4];
  }
  const tmpResult8 = themes(isPreview[6]);
  const hexagonCampaignPerkAvailability = themes(isPreview[14]).useHexagonCampaignPerkAvailability(constants.CLIENT_THEME, "SettingsAppearanceThemeCarousel");
  const tmp16 = constants;
  const tmpResult10 = themes(isPreview[14]);
  let num7 = 0;
  if (tmp12) {
    num7 = 1;
  }
  const sharedValue2 = themes(isPreview[6]).useSharedValue(num7);
  if (cResult[5] === sharedValue2) {
    if (cResult[6] === tmp12) {
      let tmp19 = cResult[7];
      let tmp20 = cResult[8];
    }
    const effect = deviceWidth.useEffect(tmp19, tmp20);
    const fn2 = function $() {
      return { opacity: sharedValue2.get() };
    };
    const obj4 = { badgeOpacity: sharedValue2 };
    fn2.__closure = obj4;
    fn2.__workletHash = 11624303332519;
    fn2.__initData = __initData;
    const animatedStyle = tmp(tmp2[6]).useAnimatedStyle(fn2);
    if (cResult[9] === sharedValue1) {
      if (cResult[10] === sharedValue) {
        let tmp24 = cResult[11];
        let tmp25 = cResult[12];
      }
      const effect1 = deviceWidth.useEffect(tmp24, tmp25);
      if (cResult[13] !== onThemeSelected) {
        const debounceResult = currentThemeIndex(tmp2[17]).debounce(onThemeSelected, 180);
        cResult[13] = onThemeSelected;
        cResult[14] = debounceResult;
        let tmp27 = debounceResult;
        const obj11 = currentThemeIndex(tmp2[17]);
      } else {
        tmp27 = cResult[14];
      }
      closure_14 = tmp27;
      if (cResult[15] === sharedValue2) {
        if (cResult[16] === deviceWidth) {
          if (cResult[17] === sharedValue1) {
            if (cResult[18] === hasOnyxNux) {
              if (cResult[19] === sharedValue) {
                if (cResult[20] === tmp27) {
                  if (cResult[21] === num2) {
                    if (cResult[22] === themes) {
                      let tmp30 = cResult[23];
                    }
                    if (cResult[24] === currentThemeIndex) {
                      if (cResult[25] === isPreview) {
                        if (cResult[26] === isSynced) {
                          if (cResult[29] === currentThemeIndex) {
                            if (cResult[30] === isPreview) {
                              if (cResult[31] === onThemeSelected) {
                                let tmp32 = cResult[32];
                              }
                              __initData = tmp32;
                              if (cResult[33] === currentThemeIndex) {
                                if (cResult[34] === isPreview) {
                                  if (cResult[35] === onThemeSelected) {
                                    selectionBorder = cResult[36];
                                  }
                                  function ce() {
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
                                  const obj5 = { withTiming: null, isOnyxNuxVisible: null, timingStandard: null };
                                  const useAnimatedStyle = tmp(tmp2[6]).useAnimatedStyle;
                                  obj5.withTiming = tmp(tmp2[15]).withTiming;
                                  obj5.isOnyxNuxVisible = sharedValue;
                                  obj5.timingStandard = tmp(tmp2[16]).timingStandard;
                                  ce.__closure = obj5;
                                  ce.__workletHash = 1532887600753;
                                  ce.__initData = __initData2;
                                  class J {
                                    constructor() {
                                      closure_0 = setTimeout(() => {
                                        const result = sharedValue.set(false);
                                        const result1 = sharedValue1.set(true);
                                      }, 5500);
                                      return () => clearTimeout(closure_0);
                                    }
                                  }
                                  if (cResult[37] === animatedStyles.iconHeaderSecondary) {
                                    if (cResult[38] === currentThemeIndex) {
                                      if (cResult[39] === themes) {
                                        let tmp37 = cResult[40];
                                      }
                                      if (cResult[41] !== themes[currentThemeIndex]) {
                                        const name = obj15.getName();
                                        cResult[41] = obj15;
                                        cResult[42] = name;
                                        let tmp42 = name;
                                      } else {
                                        tmp42 = cResult[42];
                                      }
                                      if (cResult[43] === animatedStyles.headerPrimary) {
                                        if (cResult[44] === tmp42) {
                                          let tmp44 = cResult[45];
                                        }
                                        if (cResult[46] === tmp4.titleContainer) {
                                          if (cResult[47] === tmp37) {
                                            if (cResult[48] === tmp44) {
                                              let tmp47 = cResult[49];
                                            }
                                            if (cResult[50] === defaultIndex) {
                                              if (cResult[51] === deviceWidth) {
                                                if (cResult[52] === isScreenReaderEnabled) {
                                                  if (cResult[53] === tmp30) {
                                                    if (cResult[54] === onThemeSelected) {
                                                      if (cResult[55] === tmp32) {
                                                        if (cResult[56] === selectionBorder) {
                                                          if (cResult[57] === tmp4.a11yThemeList) {
                                                            if (cResult[58] === tmp4.a11yThemeListScroll) {
                                                              if (cResult[59] === tmp4.selectionBorder) {
                                                                if (cResult[60] === themes) {
                                                                  if (cResult[62] === animatedStyles.headerSecondary) {
                                                                    if (cResult[63] === tmp4.textCentered) {
                                                                      let tmp62 = cResult[64];
                                                                    }
                                                                    if (cResult[65] !== tmp31) {
                                                                      const tmp31Result = tmp31();
                                                                      cResult[65] = tmp31;
                                                                      cResult[66] = tmp31Result;
                                                                      let tmp63 = tmp31Result;
                                                                    } else {
                                                                      tmp63 = cResult[66];
                                                                    }
                                                                    if (cResult[67] === tmp62) {
                                                                      if (cResult[68] === tmp63) {
                                                                        let tmp65 = cResult[69];
                                                                      }
                                                                      if (cResult[70] === animatedStyles) {
                                                                        if (cResult[71] === tmp14) {
                                                                          if (cResult[72] === tmp65) {
                                                                            if (cResult[73] === tmp12) {
                                                                              if (cResult[74] === tmp4.hidden) {
                                                                                if (cResult[75] === tmp4.hintContainer) {
                                                                                  if (cResult[76] === tmp4.hintOverlay) {
                                                                                    let tmp68 = cResult[77];
                                                                                  }
                                                                                  if (cResult[78] === animatedStyle) {
                                                                                    if (cResult[79] === tmp4.badgeSlot) {
                                                                                      let tmp75 = cResult[80];
                                                                                    }
                                                                                    if (cResult[81] === hexagonCampaignPerkAvailability) {
                                                                                      if (cResult[82] === tmp12) {
                                                                                        let tmp76 = cResult[83];
                                                                                      }
                                                                                      if (cResult[84] === tmp75) {
                                                                                        if (cResult[85] === tmp76) {
                                                                                          let tmp85 = cResult[86];
                                                                                        }
                                                                                        if (cResult[87] === tmp4.swatchesGroup) {
                                                                                          if (cResult[88] === tmp51) {
                                                                                            if (cResult[89] === tmp85) {
                                                                                              let tmp89 = cResult[90];
                                                                                            }
                                                                                            if (cResult[91] === tmp68) {
                                                                                              if (cResult[92] === tmp4.labelGroup) {
                                                                                                if (cResult[93] === tmp47) {
                                                                                                  let tmp93 = cResult[94];
                                                                                                }
                                                                                                if (cResult[95] === tmp89) {
                                                                                                  if (cResult[96] === tmp93) {
                                                                                                    let tmp97 = cResult[97];
                                                                                                  }
                                                                                                  if (cResult[98] === tmp35) {
                                                                                                    if (cResult[99] === animatedStyles.bgSurfaceOverlay) {
                                                                                                      if (cResult[100] === animatedStyles.borderFaint) {
                                                                                                        if (cResult[101] === tmp4.floatingNux) {
                                                                                                          let tmp103 = cResult[102];
                                                                                                        }
                                                                                                        if (cResult[103] === animatedStyles.iconInteractive) {
                                                                                                          if (cResult[104] === tmp4.arrowLeft) {
                                                                                                            let tmp104 = cResult[105];
                                                                                                          }
                                                                                                          if (cResult[106] === animatedStyles.textNormal) {
                                                                                                            if (cResult[107] === tmp4.uppercase) {
                                                                                                              let tmp109 = cResult[108];
                                                                                                            }
                                                                                                            const _Symbol = Symbol;
                                                                                                            if (cResult[109] === Symbol.for("react.memo_cache_sentinel")) {
                                                                                                              let intl = tmp(tmp2[19]).intl;
                                                                                                              let stringResult = intl.string(tmp(tmp2[19]).t.y2b7CA);
                                                                                                              cResult[109] = stringResult;
                                                                                                              let tmp110 = stringResult;
                                                                                                            } else {
                                                                                                              tmp110 = cResult[109];
                                                                                                            }
                                                                                                            if (cResult[110] !== tmp109) {
                                                                                                              const obj6 = { animated: true, style: tmp109, variant: "eyebrow", maxFontSizeMultiplier: 1.5, children: tmp110 };
                                                                                                              const tmp114 = sharedValue(tmp(tmp2[22]).Text, obj6);
                                                                                                              cResult[110] = tmp109;
                                                                                                              cResult[111] = tmp114;
                                                                                                              let tmp112 = tmp114;
                                                                                                            } else {
                                                                                                              tmp112 = cResult[111];
                                                                                                            }
                                                                                                            if (cResult[112] === tmp103) {
                                                                                                              if (cResult[113] === tmp104) {
                                                                                                                if (cResult[114] === tmp112) {
                                                                                                                  let tmp115 = cResult[115];
                                                                                                                }
                                                                                                                if (cResult[116] === tmp4.floatingNuxContainer) {
                                                                                                                  if (cResult[117] === tmp115) {
                                                                                                                    let tmp119 = cResult[118];
                                                                                                                  }
                                                                                                                  if (cResult[119] === tmp97) {
                                                                                                                    if (cResult[120] === tmp4.container) {
                                                                                                                      if (cResult[121] === tmp119) {
                                                                                                                        let tmp123 = cResult[122];
                                                                                                                      }
                                                                                                                      return tmp123;
                                                                                                                    }
                                                                                                                  }
                                                                                                                  const obj7 = { style: tmp101, children: null };
                                                                                                                  const items = [tmp119, tmp97];
                                                                                                                  obj7.children = items;
                                                                                                                  const tmp126 = sharedValue1(isSynced, obj7);
                                                                                                                  cResult[119] = tmp97;
                                                                                                                  class J {
                                                                                                                    constructor() {
                                                                                                                      closure_0 = setTimeout(() => {
                                                                                                                        const result = sharedValue.set(false);
                                                                                                                        const result1 = sharedValue1.set(true);
                                                                                                                      }, 5500);
                                                                                                                      return () => clearTimeout(closure_0);
                                                                                                                    }
                                                                                                                  }
                                                                                                                  cResult[120] = tmp4.container;
                                                                                                                  cResult[121] = tmp119;
                                                                                                                  cResult[122] = tmp126;
                                                                                                                  tmp123 = tmp126;
                                                                                                                }
                                                                                                                const obj8 = { style: tmp102, children: tmp115 };
                                                                                                                cResult[116] = tmp4.floatingNuxContainer;
                                                                                                                cResult[117] = tmp115;
                                                                                                                class J {
                                                                                                                  constructor() {
                                                                                                                    closure_0 = setTimeout(() => {
                                                                                                                      const result = sharedValue.set(false);
                                                                                                                      const result1 = sharedValue1.set(true);
                                                                                                                    }, 5500);
                                                                                                                    return () => clearTimeout(closure_0);
                                                                                                                  }
                                                                                                                }
                                                                                                                tmp119 = sharedValue(isSynced, obj8);
                                                                                                                const tmp122 = sharedValue(isSynced, obj8);
                                                                                                              }
                                                                                                            }
                                                                                                            const obj9 = { style: tmp103, children: null };
                                                                                                            const items1 = [tmp104, tmp112];
                                                                                                            class J {
                                                                                                              constructor() {
                                                                                                                closure_0 = setTimeout(() => {
                                                                                                                  const result = sharedValue.set(false);
                                                                                                                  const result1 = sharedValue1.set(true);
                                                                                                                }, 5500);
                                                                                                                return () => clearTimeout(closure_0);
                                                                                                              }
                                                                                                            }
                                                                                                            const tmp118 = sharedValue1(currentThemeIndex(tmp2[6]).View, obj9);
                                                                                                            cResult[112] = tmp103;
                                                                                                            cResult[113] = tmp104;
                                                                                                            cResult[114] = tmp112;
                                                                                                            cResult[115] = tmp118;
                                                                                                            tmp115 = tmp118;
                                                                                                          }
                                                                                                          const items2 = [animatedStyles.textNormal, tmp4.uppercase];
                                                                                                          cResult[106] = animatedStyles.textNormal;
                                                                                                          cResult[107] = tmp4.uppercase;
                                                                                                          cResult[108] = items2;
                                                                                                          tmp109 = items2;
                                                                                                        }
                                                                                                        const obj10 = { style: null, source: null, size: null };
                                                                                                        const items3 = [tmp4.arrowLeft, animatedStyles.iconInteractive];
                                                                                                        obj10.style = items3;
                                                                                                        obj10.source = currentThemeIndex(tmp2[28]);
                                                                                                        obj10.size = tmp(tmp2[7]).IconSizes.REFRESH_SMALL_16;
                                                                                                        const tmp108 = sharedValue(sharedValue2, obj10);
                                                                                                        class J {
                                                                                                          constructor() {
                                                                                                            closure_0 = setTimeout(() => {
                                                                                                              const result = sharedValue.set(false);
                                                                                                              const result1 = sharedValue1.set(true);
                                                                                                            }, 5500);
                                                                                                            return () => clearTimeout(closure_0);
                                                                                                          }
                                                                                                        }
                                                                                                        cResult[103] = animatedStyles.iconInteractive;
                                                                                                        cResult[104] = tmp4.arrowLeft;
                                                                                                        cResult[105] = tmp108;
                                                                                                        tmp104 = tmp108;
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                  const items4 = [tmp4.floatingNux, tmp35, , ];
                                                                                                  ({ bgSurfaceOverlay: arr12[2], borderFaint: arr12[3] } = animatedStyles);
                                                                                                  cResult[98] = tmp35;
                                                                                                  cResult[99] = animatedStyles.bgSurfaceOverlay;
                                                                                                  cResult[100] = animatedStyles.borderFaint;
                                                                                                  class J {
                                                                                                    constructor() {
                                                                                                      closure_0 = setTimeout(() => {
                                                                                                        const result = sharedValue.set(false);
                                                                                                        const result1 = sharedValue1.set(true);
                                                                                                      }, 5500);
                                                                                                      return () => clearTimeout(closure_0);
                                                                                                    }
                                                                                                  }
                                                                                                  cResult[101] = tmp4.floatingNux;
                                                                                                  cResult[102] = items4;
                                                                                                  tmp103 = items4;
                                                                                                }
                                                                                                const obj12 = { children: null };
                                                                                                const items5 = [tmp89, tmp93];
                                                                                                obj12.children = items5;
                                                                                                const tmp100 = sharedValue1(closure_12, obj12);
                                                                                                cResult[95] = tmp89;
                                                                                                class J {
                                                                                                  constructor() {
                                                                                                    closure_0 = setTimeout(() => {
                                                                                                      const result = sharedValue.set(false);
                                                                                                      const result1 = sharedValue1.set(true);
                                                                                                    }, 5500);
                                                                                                    return () => clearTimeout(closure_0);
                                                                                                  }
                                                                                                }
                                                                                                cResult[97] = tmp100;
                                                                                                tmp97 = tmp100;
                                                                                              }
                                                                                            }
                                                                                            const obj13 = { style: tmp4.labelGroup, children: null };
                                                                                            const items6 = [tmp47, tmp68];
                                                                                            obj13.children = items6;
                                                                                            const tmp96 = sharedValue1(isSynced, obj13);
                                                                                            cResult[91] = tmp68;
                                                                                            class J {
                                                                                              constructor() {
                                                                                                closure_0 = setTimeout(() => {
                                                                                                  const result = sharedValue.set(false);
                                                                                                  const result1 = sharedValue1.set(true);
                                                                                                }, 5500);
                                                                                                return () => clearTimeout(closure_0);
                                                                                              }
                                                                                            }
                                                                                            cResult[92] = tmp4.labelGroup;
                                                                                            cResult[93] = tmp47;
                                                                                            cResult[94] = tmp96;
                                                                                            tmp93 = tmp96;
                                                                                          }
                                                                                        }
                                                                                        const obj14 = { style: tmp4.swatchesGroup, children: null };
                                                                                        const items7 = [tmp85, tmp51];
                                                                                        obj14.children = items7;
                                                                                        const tmp92 = sharedValue1(isSynced, obj14);
                                                                                        cResult[87] = tmp4.swatchesGroup;
                                                                                        class J {
                                                                                          constructor() {
                                                                                            closure_0 = setTimeout(() => {
                                                                                              const result = sharedValue.set(false);
                                                                                              const result1 = sharedValue1.set(true);
                                                                                            }, 5500);
                                                                                            return () => clearTimeout(closure_0);
                                                                                          }
                                                                                        }
                                                                                        cResult[88] = tmp51;
                                                                                        cResult[89] = tmp85;
                                                                                        cResult[90] = tmp92;
                                                                                        tmp89 = tmp92;
                                                                                      }
                                                                                      const obj16 = { style: tmp75, children: tmp76 };
                                                                                      cResult[84] = tmp75;
                                                                                      cResult[85] = tmp76;
                                                                                      class J {
                                                                                        constructor() {
                                                                                          closure_0 = setTimeout(() => {
                                                                                            const result = sharedValue.set(false);
                                                                                            const result1 = sharedValue1.set(true);
                                                                                          }, 5500);
                                                                                          return () => clearTimeout(closure_0);
                                                                                        }
                                                                                      }
                                                                                      tmp85 = sharedValue(currentThemeIndex(tmp2[6]).View, obj16);
                                                                                      const tmp88 = sharedValue(currentThemeIndex(tmp2[6]).View, obj16);
                                                                                    }
                                                                                    if (!tmp12) {
                                                                                      cResult[81] = hexagonCampaignPerkAvailability;
                                                                                      cResult[82] = tmp12;
                                                                                      cResult[83] = tmp12;
                                                                                      tmp76 = tmp12;
                                                                                    } else if (hexagonCampaignPerkAvailability === num2.LOCKED) {
                                                                                      const obj17 = { theme: ref.DARK, children: sharedValue(tmp(tmp2[27]).HexagonCampaignExtendPerkBadge, {}) };
                                                                                      let tmp81 = sharedValue(tmp(tmp2[26]).ThemeContextProvider, obj17);
                                                                                    } else {
                                                                                      const obj18 = { variant: "overlay", perk: tmp16.CLIENT_THEME };
                                                                                      tmp81 = sharedValue(currentThemeIndex(tmp2[27]), obj18);
                                                                                    }
                                                                                  }
                                                                                  const items8 = [tmp4.badgeSlot, animatedStyle];
                                                                                  cResult[78] = animatedStyle;
                                                                                  cResult[79] = tmp4.badgeSlot;
                                                                                  cResult[80] = items8;
                                                                                  tmp75 = items8;
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                      let tmp70Result = tmp65;
                                                                      if (tmp14) {
                                                                        const obj19 = { style: tmp4.hintContainer, children: null };
                                                                        let hidden = !tmp12;
                                                                        if (!tmp12) {
                                                                          hidden = tmp4.hidden;
                                                                        }
                                                                        const obj20 = { style: hidden, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
                                                                        let str = "none";
                                                                        if (tmp12) {
                                                                          str = "auto";
                                                                        }
                                                                        obj20.pointerEvents = str;
                                                                        obj20.accessibilityElementsHidden = !tmp12;
                                                                        class J {
                                                                          constructor() {
                                                                            closure_0 = setTimeout(() => {
                                                                              const result = sharedValue.set(false);
                                                                              const result1 = sharedValue1.set(true);
                                                                            }, 5500);
                                                                            return () => clearTimeout(closure_0);
                                                                          }
                                                                        }
                                                                        obj20.importantForAccessibility = str2;
                                                                        const obj21 = { animatedStyles };
                                                                        obj20.children = sharedValue(currentThemeIndex(tmp2[25]), obj21);
                                                                        const items9 = [sharedValue(isSynced, obj20), ];
                                                                        let tmp72Result = !tmp12;
                                                                        if (!tmp12) {
                                                                          const obj23 = { style: tmp4.hintOverlay, children: tmp65 };
                                                                          tmp72Result = tmp72(tmp71, obj23);
                                                                        }
                                                                        items9[1] = tmp72Result;
                                                                        obj19.children = items9;
                                                                        tmp70Result = sharedValue1(tmp71, obj19);
                                                                      }
                                                                      cResult[70] = animatedStyles;
                                                                      cResult[71] = tmp14;
                                                                      cResult[72] = tmp65;
                                                                      cResult[73] = tmp12;
                                                                      class J {
                                                                        constructor() {
                                                                          closure_0 = setTimeout(() => {
                                                                            const result = sharedValue.set(false);
                                                                            const result1 = sharedValue1.set(true);
                                                                          }, 5500);
                                                                          return () => clearTimeout(closure_0);
                                                                        }
                                                                      }
                                                                      cResult[75] = tmp4.hintContainer;
                                                                      cResult[76] = tmp4.hintOverlay;
                                                                      cResult[77] = tmp70Result;
                                                                      tmp68 = tmp70Result;
                                                                    }
                                                                    const obj24 = { animated: true, style: tmp62, variant: "text-sm/medium", children: tmp63 };
                                                                    cResult[67] = tmp62;
                                                                    cResult[68] = tmp63;
                                                                    class J {
                                                                      constructor() {
                                                                        closure_0 = setTimeout(() => {
                                                                          const result = sharedValue.set(false);
                                                                          const result1 = sharedValue1.set(true);
                                                                        }, 5500);
                                                                        return () => clearTimeout(closure_0);
                                                                      }
                                                                    }
                                                                    tmp65 = sharedValue(tmp(tmp2[22]).Text, obj24);
                                                                    const tmp67 = sharedValue(tmp(tmp2[22]).Text, obj24);
                                                                  }
                                                                  const items10 = [animatedStyles.headerSecondary, tmp4.textCentered];
                                                                  cResult[62] = animatedStyles.headerSecondary;
                                                                  cResult[63] = tmp4.textCentered;
                                                                  cResult[64] = items10;
                                                                  tmp62 = items10;
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
                                            if (!isScreenReaderEnabled) {
                                              if (!tmp(tmp2[23]).isThumbstickScrollDevice) {
                                                const obj25 = { children: null };
                                                const obj26 = { pointerEvents: "none", style: tmp4.selectionBorder };
                                                const items11 = [tmp52(tmp53, obj26), ];
                                                const size = { ref, data: themes, renderItem: selectionBorder, style: null, width: null, height: null, loop: false, pagingEnabled: true, defaultIndex: null, onSnapToItem: null, scrollAnimationDuration: 200, onProgressChange: null };
                                                const obj27 = { width: null, justifyContent: "center", alignItems: "center", marginLeft: null };
                                                class J {
                                                  constructor() {
                                                    closure_0 = setTimeout(() => {
                                                      const result = sharedValue.set(false);
                                                      const result1 = sharedValue1.set(true);
                                                    }, 5500);
                                                    return () => clearTimeout(closure_0);
                                                  }
                                                }
                                                obj27.marginLeft = onThemeSelected.THEME_ITEM_HORIZONTAL_MARGIN;
                                                size.style = obj27;
                                                size.width = onThemeSelected.THEME_ITEM_WIDTH + onThemeSelected.THEME_ITEM_HORIZONTAL_MARGIN;
                                                size.height = onThemeSelected.THEME_ITEM_HEIGHT;
                                                size.defaultIndex = defaultIndex;
                                                size.onSnapToItem = onThemeSelected;
                                                size.onProgressChange = tmp30;
                                                items11[1] = tmp52(currentThemeIndex(tmp2[24]), size);
                                                obj25.children = items11;
                                                let tmp52Result2 = sharedValue1(closure_12, obj25);
                                              }
                                              const obj28 = { children: tmp52Result2 };
                                              const tmp52Result = tmp52(tmp53, obj28);
                                              cResult[50] = defaultIndex;
                                              cResult[51] = deviceWidth;
                                              cResult[52] = isScreenReaderEnabled;
                                              cResult[53] = tmp30;
                                              class J {
                                                constructor() {
                                                  closure_0 = setTimeout(() => {
                                                    const result = sharedValue.set(false);
                                                    const result1 = sharedValue1.set(true);
                                                  }, 5500);
                                                  return () => clearTimeout(closure_0);
                                                }
                                              }
                                              cResult[55] = tmp32;
                                              cResult[56] = selectionBorder;
                                              cResult[57] = tmp4.a11yThemeList;
                                              ({ a11yThemeListScroll: tmp3[58], selectionBorder } = tmp4);
                                              cResult[59] = selectionBorder;
                                              cResult[60] = themes;
                                              cResult[61] = tmp52Result;
                                            }
                                            const obj29 = { horizontal: true, style: null, contentContainerStyle: null, children: null };
                                            ({ a11yThemeListScroll: obj22.style, a11yThemeList: obj22.contentContainerStyle } = tmp4);
                                            obj29.children = themes.map((item, index) => {
                                              const obj = { children: closure_15({ item, index }) };
                                              return v65535(React4, obj, "theme-" + index);
                                            });
                                            tmp52Result2 = tmp52(hasOnyxNux, obj29);
                                          }
                                        }
                                        const obj30 = { style: tmp36, children: null };
                                        const items12 = [tmp37, tmp44];
                                        obj30.children = items12;
                                        const tmp50 = sharedValue1(isSynced, obj30);
                                        cResult[46] = tmp4.titleContainer;
                                        class J {
                                          constructor() {
                                            closure_0 = setTimeout(() => {
                                              const result = sharedValue.set(false);
                                              const result1 = sharedValue1.set(true);
                                            }, 5500);
                                            return () => clearTimeout(closure_0);
                                          }
                                        }
                                        cResult[47] = tmp37;
                                        cResult[48] = tmp44;
                                        cResult[49] = tmp50;
                                        tmp47 = tmp50;
                                      }
                                      const obj31 = { animated: true, style: animatedStyles.headerPrimary, variant: "heading-sm/semibold", children: tmp42 };
                                      const tmp46 = sharedValue(tmp(tmp2[22]).Text, obj31);
                                      cResult[43] = animatedStyles.headerPrimary;
                                      class J {
                                        constructor() {
                                          closure_0 = setTimeout(() => {
                                            const result = sharedValue.set(false);
                                            const result1 = sharedValue1.set(true);
                                          }, 5500);
                                          return () => clearTimeout(closure_0);
                                        }
                                      }
                                      cResult[45] = tmp46;
                                      tmp44 = tmp46;
                                    }
                                  }
                                  const tmpResult13 = tmp(tmp2[6]);
                                  let tmp38 = null;
                                  if (tmpResult14.isNitroGatedMobileTheme(themes[currentThemeIndex])) {
                                    const obj32 = { source: currentThemeIndex(tmp2[21]), style: animatedStyles.iconHeaderSecondary, size: tmp(tmp2[7]).IconSizes.SMALL_20 };
                                    tmp38 = sharedValue(sharedValue2, obj32);
                                  }
                                  cResult[37] = animatedStyles.iconHeaderSecondary;
                                  cResult[38] = currentThemeIndex;
                                  cResult[39] = themes;
                                  cResult[40] = tmp38;
                                  tmp37 = tmp38;
                                  tmpResult14 = tmp(tmp2[13]);
                                }
                              }
                              function le(themePreset) {
                                const index = themePreset.index;
                                return sharedValue(currentThemeIndex(isPreview[20]), {
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
                              }
                              cResult[33] = currentThemeIndex;
                              cResult[34] = isPreview;
                              cResult[35] = onThemeSelected;
                              cResult[36] = le;
                              selectionBorder = le;
                            }
                          }
                          function renderA11yThemeItem(themePreset) {
                            const index = themePreset.index;
                            return sharedValue(currentThemeIndex(isPreview[20]), {
                              themePreset: themePreset.item,
                              isPreview,
                              isSelected: index === currentThemeIndex,
                              onPress() {
                                return onThemeSelected(index);
                              }
                            });
                          }
                          cResult[29] = currentThemeIndex;
                          cResult[30] = isPreview;
                          cResult[31] = onThemeSelected;
                          cResult[32] = renderA11yThemeItem;
                          tmp32 = renderA11yThemeItem;
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
                    cResult[24] = currentThemeIndex;
                    cResult[25] = isPreview;
                    cResult[26] = isSynced;
                    cResult[27] = themes;
                    cResult[28] = getHintText;
                    class J {
                      constructor() {
                        closure_0 = setTimeout(() => {
                          const result = sharedValue.set(false);
                          const result1 = sharedValue1.set(true);
                        }, 5500);
                        return () => clearTimeout(closure_0);
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
        const rounded = Math.round(arg1);
        if (Math.abs(arg1 - rounded) > 0.01) {
          const result = sharedValue2.set(0);
        } else {
          let num = 0;
          if (null != themes[rounded]) {
            num = 0;
            if (obj.isHexagonCampaignMobileTheme(tmp29)) {
              num = 1;
            }
            obj = MobileThemesUtils;
          }
          const result1 = sharedValue2.set(timing.withTiming(num, timingPresets.timingStandard));
        }
        if (rounded !== ref.current) {
          const result2 = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
          tmp9.current = rounded;
          closure_14(rounded);
        }
        if (hasOnyxNux) {
          const _Math = Math;
          const tmp20 = arg1 < num2 + Math.ceil(deviceWidth / (SettingsAppearanceConstants.THEME_ITEM_WIDTH + SettingsAppearanceConstants.THEME_ITEM_HORIZONTAL_MARGIN)) / 2;
          if (tmp20) {
            const result3 = sharedValue1.set(true);
          }
          value = sharedValue1.get();
          let tmp26 = !value;
          if (!value) {
            tmp26 = !tmp20;
          }
          const result4 = sharedValue.set(tmp26);
        }
      }
      cResult[15] = sharedValue2;
      cResult[16] = deviceWidth;
      cResult[17] = sharedValue1;
      class J {
        constructor() {
          closure_0 = setTimeout(() => {
            const result = sharedValue.set(false);
            const result1 = sharedValue1.set(true);
          }, 5500);
          return () => clearTimeout(closure_0);
        }
      }
      cResult[19] = sharedValue;
      cResult[20] = tmp27;
      cResult[21] = num2;
      cResult[22] = themes;
      cResult[23] = onProgressChange;
      tmp30 = onProgressChange;
    }
    class J {
      constructor() {
        closure_0 = setTimeout(() => {
          const result = sharedValue.set(false);
          const result1 = sharedValue1.set(true);
        }, 5500);
        return () => clearTimeout(closure_0);
      }
    }
    const items13 = [sharedValue, sharedValue1];
    cResult[9] = sharedValue1;
    cResult[10] = sharedValue;
    cResult[11] = J;
    cResult[12] = items13;
    tmp25 = items13;
    tmp24 = J;
    const tmpResult12 = tmp(tmp2[6]);
  }
  class K {
    constructor() {
      tmp = closure_13;
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj = closure_0(closure_2[15]);
      num = 0;
      if (closure_12) {
        num = 1;
      }
      result = closure_13.set(obj.withTiming(num, tmp2(tmp3[16]).timingStandard));
      return;
    }
  }
  const items14 = [tmp12, sharedValue2];
  cResult[5] = sharedValue2;
  cResult[6] = tmp12;
  cResult[7] = K;
  cResult[8] = items14;
  tmp20 = items14;
  tmp19 = K;
  const tmpResult11 = themes(isPreview[6]);
}) : (function SettingsAppearanceThemeCarousel(themes) {
  themes = themes.themes;
  const currentThemeIndex = themes.currentThemeIndex;
  const isPreview = themes.isPreview;
  ({ defaultIndex, deviceWidth } = themes);
  ({ animatedStyles, hasOnyxNux: closure_4, onThemeSelected } = themes);
  let sharedValue2;
  closure_13 = undefined;
  const tmp = closure_14();
  const isScreenReaderEnabled = themes(isPreview[12]).useIsScreenReaderEnabled();
  const ref = deviceWidth.useRef(null);
  ThemeTypes = deviceWidth.useRef(defaultIndex);
  const items = [themes];
  constants = deviceWidth.useMemo(() => {
    const findIndexResult = themes.findIndex((theme) => theme.theme === constants.ONYX);
    let num = 0;
    if (findIndexResult >= 0) {
      num = findIndexResult;
    }
    return num;
  }, items);
  let obj = themes(isPreview[12]);
  const sharedValue = themes(isPreview[6]).useSharedValue(false);
  let obj3 = themes(isPreview[6]);
  const sharedValue1 = themes(isPreview[6]).useSharedValue(false);
  const obj4 = themes(isPreview[6]);
  let result = themes(isPreview[13]).isHexagonCampaignMobileTheme(themes[currentThemeIndex]);
  c11 = result;
  const items1 = [themes];
  const memo = deviceWidth.useMemo(() => themes.some(MobileThemesUtils.isHexagonCampaignMobileTheme), items1);
  const obj5 = themes(isPreview[13]);
  const hexagonCampaignPerkAvailability = themes(isPreview[14]).useHexagonCampaignPerkAvailability(constants.CLIENT_THEME, "SettingsAppearanceThemeCarousel");
  const obj6 = themes(isPreview[14]);
  const tmp10 = constants;
  let num = 0;
  if (result) {
    num = 1;
  }
  sharedValue2 = themes(isPreview[6]).useSharedValue(num);
  const items2 = [result, sharedValue2];
  const effect = deviceWidth.useEffect(() => {
    let num = 0;
    if (c11) {
      num = 1;
    }
    const result = sharedValue2.set(timing.withTiming(num, timingPresets.timingStandard));
  }, items2);
  const obj7 = themes(isPreview[6]);
  const fn = function z() {
    return { opacity: sharedValue2.get() };
  };
  fn.__closure = { badgeOpacity: sharedValue2 };
  fn.__workletHash = 4931734771173;
  fn.__initData = __initData3;
  const items3 = [sharedValue, sharedValue1];
  const animatedStyle = themes(isPreview[6]).useAnimatedStyle(fn);
  const effect1 = deviceWidth.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = sharedValue.set(false);
      const result1 = sharedValue1.set(true);
    }, 5500);
    return () => clearTimeout(closure_0);
  }, items3);
  const items4 = [onThemeSelected];
  closure_13 = deviceWidth.useMemo(() => _modDef12.debounce(onThemeSelected, 180), items4);
  const items5 = [isPreview, onThemeSelected, currentThemeIndex];
  const callback = deviceWidth.useCallback((themePreset) => {
    const index = themePreset.index;
    return sharedValue1(currentThemeIndex(isPreview[20]), {
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
  }, items5);
  const tmp2Result = themes(isPreview[6]);
  class X {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[15]);
      obj2 = closure_9;
      num = 0;
      if (closure_9.get()) {
        num = 1;
      }
      obj1 = { opacity: obj.withTiming(num, tmp(tmp2[16]).timingStandard), pointerEvents: null };
      str = "none";
      if (obj2.get()) {
        str = "auto";
      }
      obj1.pointerEvents = str;
      return obj1;
    }
  }
  const tmp2Result4 = themes(isPreview[6]);
  X.__closure = { withTiming: themes(isPreview[15]).withTiming, isOnyxNuxVisible: sharedValue, timingStandard: themes(isPreview[16]).timingStandard };
  X.__workletHash = 12494364562679;
  X.__initData = __initData4;
  const animatedStyle1 = tmp2Result4.useAnimatedStyle(X);
  const obj8 = { withTiming: themes(isPreview[15]).withTiming, isOnyxNuxVisible: sharedValue, timingStandard: themes(isPreview[16]).timingStandard };
  const obj9 = { style: tmp.titleContainer, children: null };
  let tmp20 = null;
  if (tmp2Result5.isNitroGatedMobileTheme(themes[currentThemeIndex])) {
    const obj10 = { source: currentThemeIndex(tmp3[21]), style: animatedStyles.iconHeaderSecondary, size: tmp2(tmp3[7]).IconSizes.SMALL_20 };
    tmp20 = sharedValue1(closure_13, obj10);
  }
  const items6 = [tmp20, ];
  const obj11 = { animated: true, style: animatedStyles.headerPrimary, variant: "heading-sm/semibold", children: themes[currentThemeIndex].getName() };
  items6[1] = sharedValue1(themes(isPreview[22]).Text, obj11);
  obj9.children = items6;
  if (!isScreenReaderEnabled) {
    if (!tmp2(tmp3[23]).isThumbstickScrollDevice) {
      const obj12 = { children: null };
      const obj13 = { pointerEvents: "none", style: tmp.selectionBorder };
      const items7 = [tmp24(closure_4, obj13), ];
      const size = { ref, data: themes, renderItem: callback, style: null, width: null, height: null, loop: false, pagingEnabled: true, defaultIndex: null, onSnapToItem: null, scrollAnimationDuration: 200, onProgressChange: null };
      const obj14 = { width: deviceWidth, justifyContent: "center", alignItems: "center", marginLeft: ref.THEME_ITEM_HORIZONTAL_MARGIN };
      size.style = obj14;
      size.width = ref.THEME_ITEM_WIDTH + ref.THEME_ITEM_HORIZONTAL_MARGIN;
      size.height = ref.THEME_ITEM_HEIGHT;
      size.defaultIndex = defaultIndex;
      size.onSnapToItem = onThemeSelected;
      size.onProgressChange = function onProgressChange(arg0, arg1) {
        const rounded = Math.round(arg1);
        if (Math.abs(arg1 - rounded) > 0.01) {
          const result = sharedValue2.set(0);
        } else {
          let num = 0;
          if (null != themes[rounded]) {
            num = 0;
            if (obj.isHexagonCampaignMobileTheme(tmp29)) {
              num = 1;
            }
            obj = MobileThemesUtils;
          }
          const result1 = sharedValue2.set(timing.withTiming(num, timingPresets.timingStandard));
        }
        if (rounded !== ref.current) {
          const result2 = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
          tmp9.current = rounded;
          closure_13(rounded);
        }
        if (closure_1_4) {
          const _Math = Math;
          const tmp20 = arg1 < closure_8 + Math.ceil(deviceWidth / (SettingsAppearanceConstants.THEME_ITEM_WIDTH + SettingsAppearanceConstants.THEME_ITEM_HORIZONTAL_MARGIN)) / 2;
          if (tmp20) {
            const result3 = sharedValue1.set(true);
          }
          value = sharedValue1.get();
          let tmp26 = !value;
          if (!value) {
            tmp26 = !tmp20;
          }
          const result4 = sharedValue.set(tmp26);
        }
      };
      items7[1] = tmp24(currentThemeIndex(tmp3[24]), size);
      obj12.children = items7;
      let tmp24Result7 = tmp18(sharedValue2, obj12);
    }
    const obj16 = { children: tmp24Result7 };
    const obj17 = { animated: true, style: null, variant: "text-sm/medium", children: null };
    const items8 = [animatedStyles.headerSecondary, tmp.textCentered];
    obj17.style = items8;
    if (isPreview) {
      if (tmp2Result6.isNitroGatedMobileTheme(themes[currentThemeIndex])) {
        const intl2 = tmp2(tmp3[19]).intl;
        let stringResult = intl2.string(tmp2(tmp3[19]).t.VqGKm0);
      }
      obj17.children = stringResult;
      const tmp24Result4 = tmp24(tmp31, obj17);
      let tmp18Result3 = tmp24Result4;
      if (memo) {
        const obj18 = { style: tmp.hintContainer, children: null };
        let hidden = !result;
        if (!result) {
          hidden = tmp.hidden;
        }
        const obj19 = { style: hidden, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
        let str = "none";
        if (result) {
          str = "auto";
        }
        obj19.pointerEvents = str;
        obj19.accessibilityElementsHidden = !result;
        let str2 = "no-hide-descendants";
        if (result) {
          str2 = "auto";
        }
        obj19.importantForAccessibility = str2;
        const obj20 = { animatedStyles };
        obj19.children = tmp24(currentThemeIndex(tmp3[25]), obj20);
        const items9 = [tmp24(closure_4, obj19), ];
        let tmp24Result5 = !result;
        if (!result) {
          const obj21 = { style: tmp.hintOverlay, children: tmp24Result4 };
          tmp24Result5 = tmp24(closure_4, obj21);
        }
        items9[1] = tmp24Result5;
        obj18.children = items9;
        tmp18Result3 = tmp18(closure_4, obj18);
      }
      const obj22 = { style: tmp.swatchesGroup, children: null };
      const obj23 = { style: null, children: null };
      const items10 = [tmp.badgeSlot, animatedStyle];
      obj23.style = items10;
      if (!result) {
        const obj24 = { children: null };
        obj23.children = result;
        const items11 = [tmp24(tmp39, obj23), tmp24Result];
        obj22.children = items11;
        const items12 = [tmp18(closure_4, obj22), ];
        const obj25 = { style: tmp.labelGroup, children: null };
        const items13 = [tmp25, tmp18Result3];
        obj25.children = items13;
        items12[1] = tmp18(closure_4, obj25);
        obj24.children = items12;
        const obj26 = { style: tmp.container, children: null };
        const obj27 = { style: tmp.floatingNuxContainer, children: null };
        const obj28 = { style: null, children: null };
        const items14 = [tmp.floatingNux, animatedStyle1, , ];
        ({ bgSurfaceOverlay: arr16[2], borderFaint: arr16[3] } = animatedStyles);
        obj28.style = items14;
        const obj29 = { style: null, source: null, size: null };
        const items15 = [tmp.arrowLeft, animatedStyles.iconInteractive];
        obj29.style = items15;
        obj29.source = tmp38(tmp3[28]);
        obj29.size = tmp2(tmp3[7]).IconSizes.REFRESH_SMALL_16;
        const items16 = [tmp24(closure_13, obj29), ];
        const obj30 = { animated: true, style: null, variant: "eyebrow", maxFontSizeMultiplier: 1.5, children: null };
        const items17 = [animatedStyles.textNormal, tmp.uppercase];
        obj30.style = items17;
        const intl3 = tmp2(tmp3[19]).intl;
        obj30.children = intl3.string(tmp2(tmp3[19]).t.y2b7CA);
        items16[1] = tmp24(tmp2(tmp3[22]).Text, obj30);
        obj28.children = items16;
        obj27.children = tmp18(tmp38(tmp3[6]).View, obj28);
        const items18 = [tmp24(closure_4, obj27), tmp18(tmp37, obj24)];
        obj26.children = items18;
        return tmp18(closure_4, obj26);
      } else if (hexagonCampaignPerkAvailability === sharedValue.LOCKED) {
        const obj31 = { theme: ThemeTypes.DARK, children: tmp24(tmp2(tmp3[27]).HexagonCampaignExtendPerkBadge, {}) };
        let tmp24Result6 = tmp24(tmp2(tmp3[26]).ThemeContextProvider, obj31);
      } else {
        const obj32 = { variant: "overlay", perk: tmp10.CLIENT_THEME };
        tmp24Result6 = tmp24(tmp38(tmp3[27]), obj32);
      }
      tmp2Result6 = tmp2(tmp3[13]);
      tmp37 = sharedValue2;
    }
    const intl = tmp2(tmp3[19]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[19]).t;
    if (themes.isSynced) {
      stringResult = string(t.lhV0Y2);
    } else {
      stringResult = string(t.d5Gu9A);
    }
    tmp24Result = tmp24(closure_4, obj16);
  }
  tmp2Result5 = themes(isPreview[13]);
  tmp24Result7 = tmp24(onThemeSelected, {
    horizontal: true,
    style: tmp.a11yThemeListScroll,
    contentContainerStyle: tmp.a11yThemeList,
    children: themes.map((themePreset, index) => {
      const obj = {
        children: sharedValue1(currentThemeIndex(isPreview[20]), {
          themePreset,
          isPreview,
          isSelected: index === currentThemeIndex,
          onPress() {
            return onThemeSelected(closure_0);
          }
        })
      };
      closure_0 = index;
      return sharedValue1(closure_1_4, obj, "theme-" + index);
    })
  });
  const obj33 = {
    horizontal: true,
    style: tmp.a11yThemeListScroll,
    contentContainerStyle: tmp.a11yThemeList,
    children: themes.map((themePreset, index) => {
      const obj = {
        children: sharedValue1(currentThemeIndex(isPreview[20]), {
          themePreset,
          isPreview,
          isSelected: index === currentThemeIndex,
          onPress() {
            return onThemeSelected(closure_0);
          }
        })
      };
      closure_0 = index;
      return sharedValue1(closure_1_4, obj, "theme-" + index);
    })
  };
});