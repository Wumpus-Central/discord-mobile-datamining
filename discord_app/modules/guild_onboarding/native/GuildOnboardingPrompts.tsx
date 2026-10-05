// === Module 6617: GuildOnboardingPrompts ===

// Module 6617 (GuildOnboardingPrompts)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import ColorUtils from "ColorUtils" /* 4727 */;
import timing from "timing" /* 4891 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5070 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import FastImageDefault from "FastImage" /* 5974 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import NavigatorConstants from "NavigatorConstants" /* 6068 */;
import GuildOnboardingConstants from "GuildOnboardingConstants" /* 6592 */;
import GuildOnboardingPromptsConstants from "GuildOnboardingPromptsConstants" /* 6596 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 6600 */;
import GuildOnboardingUtils from "GuildOnboardingUtils" /* 6601 */;
import GuildOnboardingPrompt from "GuildOnboardingPrompt" /* 6618 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore_mod from "AccessibilityStore" /* 4879 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 5963 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 6595 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c3, c4, constants2, guildId, lastPrompt, navigation, skipped;

let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
function getBackgroundGradientColor() {
  return obj(...arguments);
}
let obj = function _getBackgroundGradientColor() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj3;
    let obj7;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_1;
        let closure_2;
        let closure_3;
        let closure_4;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = undefined;
            closure_1 = undefined;
            closure_2 = undefined;
            closure_3 = undefined;
            closure_4 = undefined;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: obj3.getPaletteForAvatar(closure_0), done: false };
            obj3 = require("ImageUtils");
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_0 = value;
          closure_1 = closure_130_3(closure_0[0], 3);
          closure_2 = closure_1[0];
          closure_3 = closure_1[1];
          closure_4 = closure_1[2];
          c4 = 3;
          obj = { value: obj7.rgbToHex(closure_2, closure_3, closure_4), done: true };
          obj7 = closure_130_0(closure_130_2[19]);
          return obj;
        }
      } catch (tmp8) {
        c4 = 3;
        throw tmp8;
      }
    }
  });
  return obj(...arguments);
};
({ StyleSheet: metroRequire, View: metroImportDefault } = react_native);
let AccessibilityStore = AccessibilityStore_mod;
const OnboardingPromptType = GuildOnboardingPromptsConstants.OnboardingPromptType;
const constants = GuildOnboardingConstants.GuildOnboardingModalStates;
({ AnalyticEvents: closure_16, MarketingURLs: closure_17, Routes: closure_18 } = Constants);
({ jsx: closure_19, Fragment: closure_20, jsxs: closure_21 } = Fragment);
let createStyles = createStyles_mod;
obj = { flex: { flex: 1 }, container: obj2, subtitle: obj3, onboardingTitle: { textAlign: "center" }, onboardingPolicy: obj4, onboardingPolicyText: { textAlign: "center" }, landingOverlay: { position: "absolute", width: "100%", height: "100%", display: "flex", justifyContent: "center" }, artWrapper: { height: 350, position: "relative", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }, landingBody: obj5, backgroundImage: { position: "absolute", height: "50%", width: "100%", top: 0 }, backgroundColorGradient: { position: "absolute", height: "100%", width: "100%", top: 0 }, darkColorGradient: { position: "absolute", height: "100%", width: "100%", top: 0 } };
obj2 = { display: "flex", flex: 1, flexGrow: 1, marginTop: NavigatorConstants.NAV_BAR_HEIGHT, marginBottom: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_16, opacity: 0.8 };
obj4 = { position: "absolute", paddingHorizontal: nativeDefault.space.PX_16, display: "flex", justifyContent: "center", width: "100%", marginBottom: nativeDefault.space.PX_16 };
obj5 = { alignItems: "center", marginTop: -24, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_22 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let color;
  let items1;
  let splashUrl;
  let tmp5;
  let tmp6;
  obj = react2;
  const cResult = obj.c(18);
  ({ splashUrl, color } = arg0);
  const tmp4 = closure_22();
  if (cResult[0] !== splashUrl) {
    const obj2 = { uri: splashUrl };
    cResult[0] = splashUrl;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp4.backgroundImage) {
    const items = [tmp4.backgroundImage];
    cResult[2] = tmp4.backgroundImage;
    cResult[3] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === tmp5) {
    let tmp7;
    let tmp9;
    if (cResult[5] === tmp6) {
      tmp7 = cResult[6];
    }
    const backgroundColorGradient = tmp4.backgroundColorGradient;
    if (cResult[7] !== color) {
      const tmpResult = ColorUtils;
      const hexWithOpacityResult = tmpResult.hexWithOpacity(color, 0.16);
      cResult[7] = color;
      cResult[8] = hexWithOpacityResult;
      tmp9 = hexWithOpacityResult;
    } else {
      tmp9 = cResult[8];
    }
    if (cResult[9] === color) {
      let tmp11;
      if (cResult[10] === tmp9) {
        tmp11 = cResult[11];
      }
      if (cResult[12] === tmp4.backgroundColorGradient) {
        let tmp12;
        if (cResult[13] === tmp11) {
          tmp12 = cResult[14];
        }
        if (cResult[15] === tmp7) {
          let tmp17;
          if (cResult[16] === tmp12) {
            tmp17 = cResult[17];
          }
          return tmp17;
        }
        const obj3 = { children: items1 };
        items1 = [tmp7, tmp12];
        const tmp20 = closure_21(closure_20, obj3);
        cResult[15] = tmp7;
        cResult[16] = tmp12;
        cResult[17] = tmp20;
        tmp17 = tmp20;
      }
      const obj4 = { style: backgroundColorGradient, start: ConstantsIOS.VerticalGradient.START, end: ConstantsIOS.VerticalGradient.END, colors: tmp11 };
      const tmp15 = LinearGradientDefault;
      const tmp16 = closure_19(tmp15, obj4);
      cResult[12] = tmp4.backgroundColorGradient;
      cResult[13] = tmp11;
      cResult[14] = tmp16;
      tmp12 = tmp16;
    }
    const items2 = [tmp9, color];
    cResult[9] = color;
    cResult[10] = tmp9;
    cResult[11] = items2;
    tmp11 = items2;
  }
  const tmp8 = closure_19(FastImageDefault, { source: tmp5, style: tmp6, resizeMode: "cover" });
  cResult[4] = tmp5;
  cResult[5] = tmp6;
  cResult[6] = tmp8;
  tmp7 = tmp8;
}) : ((color) => {
  let items;
  let items1;
  let items2;
  color = color.color;
  const splashUrl = color.splashUrl;
  const tmp = closure_22();
  const obj2 = { source: { uri: splashUrl }, style: items, resizeMode: "cover" };
  items = [tmp.backgroundImage];
  obj = { children: items1 };
  items1 = [closure_19(FastImageDefault, obj2), ];
  const obj3 = { style: tmp.backgroundColorGradient, start: ConstantsIOS.VerticalGradient.START, end: ConstantsIOS.VerticalGradient.END, colors: items2 };
  items2 = [, ];
  const tmp2 = LinearGradientDefault;
  const obj4 = ColorUtils;
  items2[0] = obj4.hexWithOpacity(color, 0.16);
  items2[1] = color;
  items1[1] = closure_19(tmp2, obj3);
  return closure_21(closure_20, obj);
});
let closure_26 = { code: "function GuildOnboardingPromptsTsx1(){const{showPrompts,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)});const rawTranslateY=!useReducedMotion&&showPrompts.get()?-80:0;const translateY=withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)});return{opacity:opacity,transform:[{translateY:translateY}]};}" };
const __initData = { code: "function GuildOnboardingPromptsTsx2(){const{showPrompts,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity_0=showPrompts.get()?0:1;const opacity_0=withDelay(200,withTiming(rawOpacity_0,{duration:300,easing:Easing.out(Easing.ease)}));const rawTranslateY_0=!useReducedMotion&&showPrompts.get()?-80:0;const translateY_0=withDelay(200,withTiming(rawTranslateY_0,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity_0,transform:[{translateY:translateY_0}]};}" };
const __initData2 = { code: "function GuildOnboardingPromptsTsx3(){const{showPrompts,withDelay,withTiming,Easing}=this.__closure;const rawOpacity_1=showPrompts.get()?0:1;const opacity_1=withDelay(200,withTiming(rawOpacity_1,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity_1};}" };
const __initData3 = { code: "function GuildOnboardingPromptsTsx4(){const{showPrompts,withDelay,withTiming,Easing}=this.__closure;const rawOpacity_2=showPrompts.get()?0:1;const opacity_2=withDelay(200,withTiming(rawOpacity_2,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity_2};}" };
const __initData4 = { code: "function GuildOnboardingPromptsTsx5(){const{showPrompts,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity_3=showPrompts.get()?1:0;const opacity_3=withDelay(600,withTiming(rawOpacity_3,{duration:300,easing:Easing.out(Easing.ease)}));const rawTranslateY_1=!useReducedMotion&&!showPrompts.get()?80:0;const translateY_1=withDelay(600,withTiming(rawTranslateY_1,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity_3,transform:[{translateY:translateY_1}]};}" };
const __initData5 = { code: "function GuildOnboardingPromptsTsx6(){const{showPrompts,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity=showPrompts.get()?0:1;const opacity=withTiming(rawOpacity,{duration:300,easing:Easing.out(Easing.ease)});const rawTranslateY=!useReducedMotion&&showPrompts.get()?-80:0;const translateY=withTiming(rawTranslateY,{duration:300,easing:Easing.out(Easing.ease)});return{opacity:opacity,transform:[{translateY:translateY}]};}" };
const __initData6 = { code: "function GuildOnboardingPromptsTsx7(){const{showPrompts,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity_0=showPrompts.get()?0:1;const opacity_0=withDelay(200,withTiming(rawOpacity_0,{duration:300,easing:Easing.out(Easing.ease)}));const rawTranslateY_0=!useReducedMotion&&showPrompts.get()?-80:0;const translateY_0=withDelay(200,withTiming(rawTranslateY_0,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity_0,transform:[{translateY:translateY_0}]};}" };
const __initData7 = { code: "function GuildOnboardingPromptsTsx8(){const{showPrompts,withDelay,withTiming,Easing}=this.__closure;const rawOpacity_1=showPrompts.get()?0:1;const opacity_1=withDelay(200,withTiming(rawOpacity_1,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity_1};}" };
const __initData8 = { code: "function GuildOnboardingPromptsTsx9(){const{showPrompts,withDelay,withTiming,Easing}=this.__closure;const rawOpacity_2=showPrompts.get()?0:1;const opacity_2=withDelay(200,withTiming(rawOpacity_2,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity_2};}" };
const __initData9 = { code: "function GuildOnboardingPromptsTsx10(){const{showPrompts,withDelay,withTiming,Easing,useReducedMotion}=this.__closure;const rawOpacity_3=showPrompts.get()?1:0;const opacity_3=withDelay(600,withTiming(rawOpacity_3,{duration:300,easing:Easing.out(Easing.ease)}));const rawTranslateY_1=!useReducedMotion&&!showPrompts.get()?80:0;const translateY_1=withDelay(600,withTiming(rawTranslateY_1,{duration:300,easing:Easing.out(Easing.ease)}));return{opacity:opacity_3,transform:[{translateY:translateY_1}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let backShouldLeaveGuild;
  let closure_19;
  let first;
  let isFirstOpen;
  let items6;
  let landingAnimation;
  let prompts;
  let sharedValue;
  let tmp10;
  let tmp14;
  let tmp16;
  let tmp40;
  let tmp7;
  let tmp9;
  let useReducedMotion;
  let tmp = guildId;
  const tmp2 = prompts;
  obj = guildId(prompts[21]);
  const cResult = obj.c(181);
  guildId = guildId.guildId;
  const currentPromptIdx = guildId.currentPromptIdx;
  prompts = guildId.prompts;
  const selectOption = guildId.selectOption;
  const onClose = guildId.onClose;
  ({ landingAnimation, isFirstOpen, backShouldLeaveGuild } = guildId);
  const tmp4 = closure_22();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [isFirstOpen];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function p() {
      return MemberVerificationFormStore.getRulesPrompt(guildId);
    };
    let num2 = 1;
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(tmp2[25]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AccessibilityStore];
    class H {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[3] = items1;
    cResult[4] = H;
    tmp10 = H;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const tmpResult13 = tmp(tmp2[25]);
  const stateFromStores1 = tmpResult13.useStateFromStores(tmp9, tmp10);
  const bottom = currentPromptIdx(tmp2[26])().bottom;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [sharedValue];
    class H {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[5] = items2;
    tmp14 = items2;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] !== guildId) {
    const fn2 = function q() {
      return GuildOnboardingPromptsStore.getOnboardingConnections(guildId);
    };
    cResult[6] = guildId;
    class H {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[7] = fn2;
    tmp16 = fn2;
  } else {
    tmp16 = cResult[7];
  }
  const tmpResult14 = tmp(tmp2[25]);
  const tmp17 = tmpResult14.useStateFromStores(tmp14, tmp16).length > 0;
  AccessibilityStore = tmp17;
  if (isFirstOpen) {
    isFirstOpen = 0 === currentPromptIdx;
  }
  if (isFirstOpen) {
    isFirstOpen = !tmp17;
  }
  const tmpResult15 = tmp(tmp2[27]);
  navigation = tmpResult15.useNavigation();
  skipped = tmp19;
  const currentPrompt = tmp20;
  const tmpResult16 = tmp(tmp2[28]);
  sharedValue = tmpResult16.useSharedValue(!isFirstOpen);
  if (cResult[8] === guildId) {
    let tmp22;
    let tmp24;
    let tmp26;
    let tmp28;
    if (cResult[9] === prompts) {
      tmp22 = cResult[10];
    }
    let closure_14 = tmp22;
    const _Symbol = Symbol;
    class H {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    if (tmp23 === Symbol.for("react.memo_cache_sentinel")) {
      const tmp25 = skipped;
      const items3 = [skipped];
      class H {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      cResult[11] = items3;
      tmp24 = items3;
    } else {
      tmp24 = cResult[11];
    }
    if (cResult[12] !== guildId) {
      function it() {
        return GuildStore.getGuild(guildId);
      }
      cResult[12] = guildId;
      class H {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      cResult[13] = it;
      tmp26 = it;
    } else {
      tmp26 = cResult[13];
    }
    const tmpResult17 = tmp(tmp2[25]);
    const stateFromStores2 = tmpResult17.useStateFromStores(tmp24, tmp26);
    const _Symbol2 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      const items4 = [sharedValue];
      class H {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      cResult[14] = items4;
      tmp28 = items4;
    } else {
      tmp28 = cResult[14];
    }
    if (cResult[15] === prompts[currentPromptIdx]) {
      let tmp30;
      let tmp31;
      let required;
      if (cResult[16] === guildId) {
        tmp30 = cResult[17];
        tmp31 = cResult[18];
      }
      const tmpResult18 = tmp(tmp2[25]);
      const stateFromStoresArray = tmpResult18.useStateFromStoresArray(tmp28, tmp30, tmp31);
      class H {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      if (0 === stateFromStoresArray.length) {
        if (prompts[currentPromptIdx] != null) {
          required = tmp20.required;
        }
        class H {
          constructor() {
            return useReducedMotion.useReducedMotion;
          }
        }
      }
      let closure_17 = tmp33;
      if (cResult[19] === currentPromptIdx) {
        if (cResult[20] === stateFromStores2) {
          if (cResult[21] === prompts.length) {
            let tmp35;
            let tmp41;
            let tmp45;
            let tmp44;
            if (cResult[22] === stateFromStores) {
              tmp35 = cResult[23];
            }
            lastPrompt = tmp35;
            class H {
              constructor() {
                return useReducedMotion.useReducedMotion;
              }
            }
            [tmp40, closure_19] = selectOption(tmp37(currentPromptIdx(tmp2[17]).unsafe_rawColors.PRIMARY_800), 2);
            selectOption(tmp37(currentPromptIdx(tmp2[17]).unsafe_rawColors.PRIMARY_800), 2);
            if (cResult[24] !== stateFromStores2) {
              let guildSplashURL = null;
              if (null != stateFromStores2) {
                let obj2 = { id: stateFromStores2.id, splash: null, size: 400 * currentPromptIdx(tmp2[32])() };
                const tmp13Result = currentPromptIdx(tmp2[31]);
                class H {
                  constructor() {
                    return useReducedMotion.useReducedMotion;
                  }
                }
                const getGuildSplashURL = tmp13Result.getGuildSplashURL;
                guildSplashURL = getGuildSplashURL(obj2);
              }
              class H {
                constructor() {
                  return useReducedMotion.useReducedMotion;
                }
              }
              cResult[25] = guildSplashURL;
              tmp41 = guildSplashURL;
            } else {
              tmp41 = cResult[25];
            }
            let closure_20 = tmp41;
            if (cResult[26] !== tmp41) {
              function yt() {
                if (null != closure_20) {
                  const promise = getBackgroundGradientColor(tmp);
                  promise.then((result) => {
                    closure_1_19(result);
                  });
                }
              }
              const items5 = [tmp41];
              class H {
                constructor() {
                  return useReducedMotion.useReducedMotion;
                }
              }
              cResult[26] = tmp41;
              cResult[27] = yt;
              cResult[28] = items5;
              tmp45 = items5;
              tmp44 = yt;
            } else {
              tmp44 = cResult[27];
              tmp45 = cResult[28];
            }
            const effect = backShouldLeaveGuild.useEffect(tmp44, tmp45);
            if (cResult[29] === guildId) {
              if (cResult[30] === prompts.length > 0) {
                let tmp47;
                if (cResult[31] === isFirstOpen) {
                  tmp47 = cResult[32];
                }
                if (cResult[33] === guildId) {
                  if (cResult[34] === prompts.length > 0) {
                    if (cResult[35] === stateFromStores) {
                      let tmp48;
                      if (cResult[36] === isFirstOpen) {
                        tmp48 = cResult[37];
                      }
                      const effect1 = backShouldLeaveGuild.useEffect(tmp47, tmp48);
                      if (cResult[38] === tmp22) {
                        if (cResult[39] === prompts.length > 0) {
                          if (cResult[40] === onClose) {
                            if (cResult[41] === isFirstOpen) {
                              let tmp50;
                              if (cResult[42] === sharedValue) {
                                tmp50 = cResult[43];
                              }
                              if (cResult[44] === tmp22) {
                                if (cResult[45] === guildId) {
                                  if (cResult[46] === tmp17) {
                                    if (cResult[47] === prompts.length > 0) {
                                      if (cResult[48] === onClose) {
                                        if (cResult[49] === isFirstOpen) {
                                          let tmp52;
                                          if (cResult[50] === sharedValue) {
                                            tmp52 = cResult[51];
                                          }
                                          const effect2 = backShouldLeaveGuild.useEffect(tmp50, tmp52);
                                          if (cResult[52] === prompts.length > 0) {
                                            if (cResult[53] === onClose) {
                                              let tmp54;
                                              let tmp55;
                                              if (cResult[54] === isFirstOpen) {
                                                tmp54 = cResult[55];
                                                tmp55 = cResult[56];
                                              }
                                              const effect3 = backShouldLeaveGuild.useEffect(tmp54, tmp55);
                                              class Ot {
                                                constructor() {
                                                  const tmp = isFirstOpen || skipped;
                                                  if (!tmp) {
                                                    onClose();
                                                  }
                                                }
                                              }
                                              if (cResult[57] === currentPromptIdx) {
                                                if (cResult[58] === (prompts.length > 0 && prompts[0].required)) {
                                                  let tmp58;
                                                  let tmp59;
                                                  if (cResult[59] === guildId) {
                                                    tmp58 = cResult[60];
                                                    tmp59 = cResult[61];
                                                  }
                                                  const effect4 = backShouldLeaveGuild.useEffect(tmp58, tmp59);
                                                  const tmpResult19 = tmp(tmp2[28]);
                                                  class Ot {
                                                    constructor() {
                                                      const tmp = isFirstOpen || skipped;
                                                      if (!tmp) {
                                                        onClose();
                                                      }
                                                    }
                                                  }
                                                  let obj3 = { showPrompts: null, withTiming: tmp(tmp2[35]).withTiming, Easing: tmp(tmp2[28]).Easing, useReducedMotion: stateFromStores1 };
                                                  class Gt {
                                                    constructor() {
                                                      if (0 === currentPromptIdx) {
                                                        obj = { step: 0, required };
                                                        const track = AnalyticsUtilsDefault.track;
                                                        const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                        AnalyticsUtilsDefault;
                                                        const obj2 = AppAnalyticsUtils;
                                                        const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                        track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                                      }
                                                    }
                                                  }
                                                  const useAnimatedStyle = tmpResult19.useAnimatedStyle;
                                                  tmp62.__closure = obj3;
                                                  tmp62.__workletHash = 6820086589932;
                                                  class Et {
                                                    constructor() {
                                                      if (isFirstOpen) {
                                                        obj = { step: -1, required: true };
                                                        const track = AnalyticsUtilsDefault.track;
                                                        const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                        AnalyticsUtilsDefault;
                                                        const obj2 = AppAnalyticsUtils;
                                                        const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                        track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                                        const obj3 = { step: -1, skipped, is_final_step: false, in_onboarding: true };
                                                        const track2 = AnalyticsUtilsDefault.track;
                                                        const GUILD_ONBOARDING_STEP_COMPLETED = authStore3.GUILD_ONBOARDING_STEP_COMPLETED;
                                                        AnalyticsUtilsDefault;
                                                        const obj4 = AppAnalyticsUtils;
                                                        const merged1 = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
                                                        track2(GUILD_ONBOARDING_STEP_COMPLETED, obj3);
                                                      }
                                                    }
                                                  }
                                                  const animatedStyle = useAnimatedStyle(tmp62);
                                                  const tmpResult20 = tmp(tmp2[28]);
                                                  class Rt {
                                                    constructor() {
                                                      let Easing;
                                                      let Easing2;
                                                      let items;
                                                      let obj5;
                                                      let withDelay2;
                                                      let withTiming2;
                                                      let num = 1;
                                                      if (sharedValue.get()) {
                                                        num = 0;
                                                      }
                                                      const withDelay = ReanimatedRexport.withDelay;
                                                      ReanimatedRexport;
                                                      const obj2 = { duration: 300, easing: Easing.out(ReanimatedRexport.Easing.ease) };
                                                      const withTiming = timing.withTiming;
                                                      timing;
                                                      Easing = ReanimatedRexport.Easing;
                                                      let num2 = 0;
                                                      const withDelayResult = withDelay(200, withTiming(num, obj2));
                                                      if (!stateFromStores1) {
                                                        num2 = 0;
                                                        if (sharedValue.get()) {
                                                          num2 = -80;
                                                        }
                                                      }
                                                      const obj3 = { opacity: withDelayResult, transform: items };
                                                      const obj4 = { translateY: withDelay2(200, withTiming2(num2, obj5)) };
                                                      withDelay2 = ReanimatedRexport.withDelay;
                                                      ReanimatedRexport;
                                                      obj5 = { duration: 300, easing: Easing2.out(ReanimatedRexport.Easing.ease) };
                                                      withTiming2 = timing.withTiming;
                                                      timing;
                                                      Easing2 = ReanimatedRexport.Easing;
                                                      items = [obj4];
                                                      return obj3;
                                                    }
                                                  }
                                                  let obj4 = { showPrompts: sharedValue, withDelay: tmp(tmp2[28]).withDelay, withTiming: tmp(tmp2[35]).withTiming, Easing: tmp(tmp2[28]).Easing, useReducedMotion: stateFromStores1 };
                                                  const useAnimatedStyle2 = tmpResult20.useAnimatedStyle;
                                                  Rt.__closure = obj4;
                                                  Rt.__workletHash = 5791914703412;
                                                  Rt.__initData = __initData;
                                                  const animatedStyle2 = useAnimatedStyle2(Rt);
                                                  const tmpResult21 = tmp(tmp2[28]);
                                                  class St {
                                                    constructor() {
                                                      let Easing;
                                                      let obj2;
                                                      let withDelay;
                                                      let withTiming;
                                                      let num = 1;
                                                      if (sharedValue.get()) {
                                                        num = 0;
                                                      }
                                                      obj = { opacity: withDelay(200, withTiming(num, obj2)) };
                                                      withDelay = ReanimatedRexport.withDelay;
                                                      ReanimatedRexport;
                                                      obj2 = { duration: 300, easing: Easing.out(ReanimatedRexport.Easing.ease) };
                                                      withTiming = timing.withTiming;
                                                      timing;
                                                      Easing = ReanimatedRexport.Easing;
                                                      return obj;
                                                    }
                                                  }
                                                  let obj5 = { showPrompts: sharedValue, withDelay: tmp(tmp2[28]).withDelay, withTiming: tmp(tmp2[35]).withTiming, Easing: tmp(tmp2[28]).Easing };
                                                  const useAnimatedStyle3 = tmpResult21.useAnimatedStyle;
                                                  St.__closure = obj5;
                                                  St.__workletHash = 8303227561504;
                                                  St.__initData = __initData2;
                                                  const animatedStyle3 = useAnimatedStyle3(St);
                                                  function xt() {
                                                    let Easing;
                                                    let obj2;
                                                    let withDelay;
                                                    let withTiming;
                                                    let num = 1;
                                                    if (sharedValue.get()) {
                                                      num = 0;
                                                    }
                                                    obj = { opacity: withDelay(200, withTiming(num, obj2)) };
                                                    withDelay = ReanimatedRexport.withDelay;
                                                    ReanimatedRexport;
                                                    obj2 = { duration: 300, easing: Easing.out(ReanimatedRexport.Easing.ease) };
                                                    withTiming = timing.withTiming;
                                                    timing;
                                                    Easing = ReanimatedRexport.Easing;
                                                    return obj;
                                                  }
                                                  const obj6 = { showPrompts: sharedValue, withDelay: tmp(tmp2[28]).withDelay, withTiming: tmp(tmp2[35]).withTiming, Easing: tmp(tmp2[28]).Easing };
                                                  const useAnimatedStyle4 = tmp(tmp2[28]).useAnimatedStyle;
                                                  tmp(tmp2[28]);
                                                  xt.__closure = obj6;
                                                  xt.__workletHash = 8981159003655;
                                                  xt.__initData = __initData3;
                                                  const animatedStyle4 = useAnimatedStyle4(xt);
                                                  const tmpResult23 = tmp(tmp2[28]);
                                                  class At {
                                                    constructor() {
                                                      let Easing;
                                                      let Easing2;
                                                      let items;
                                                      let num2;
                                                      let obj5;
                                                      let withDelay2;
                                                      let withTiming2;
                                                      let num = 0;
                                                      if (sharedValue.get()) {
                                                        num = 1;
                                                      }
                                                      const withDelay = ReanimatedRexport.withDelay;
                                                      ReanimatedRexport;
                                                      const obj2 = { duration: 300, easing: Easing.out(ReanimatedRexport.Easing.ease) };
                                                      const withTiming = timing.withTiming;
                                                      timing;
                                                      Easing = ReanimatedRexport.Easing;
                                                      const withDelayResult = withDelay(600, withTiming(num, obj2));
                                                      if (stateFromStores1) {
                                                        num2 = 0;
                                                      } else {
                                                        num2 = 80;
                                                      }
                                                      const obj3 = { opacity: withDelayResult, transform: items };
                                                      const obj4 = { translateY: withDelay2(600, withTiming2(num2, obj5)) };
                                                      withDelay2 = ReanimatedRexport.withDelay;
                                                      ReanimatedRexport;
                                                      obj5 = { duration: 300, easing: Easing2.out(ReanimatedRexport.Easing.ease) };
                                                      withTiming2 = timing.withTiming;
                                                      timing;
                                                      Easing2 = ReanimatedRexport.Easing;
                                                      items = [obj4];
                                                      return obj3;
                                                    }
                                                  }
                                                  const obj7 = { showPrompts: null, withDelay: tmp(tmp2[28]).withDelay, withTiming: tmp(tmp2[35]).withTiming, Easing: tmp(tmp2[28]).Easing, useReducedMotion: stateFromStores1 };
                                                  class X {
                                                    constructor() {
                                                      obj = GuildOnboardingActionCreatorsDefault;
                                                      obj.completeOnboarding(guildId, prompts);
                                                    }
                                                  }
                                                  const useAnimatedStyle5 = tmpResult23.useAnimatedStyle;
                                                  At.__closure = obj7;
                                                  At.__workletHash = 8253165020063;
                                                  At.__initData = __initData4;
                                                  const animatedStyle5 = useAnimatedStyle5(At);
                                                  if (cResult[62] === currentPromptIdx) {
                                                    if (cResult[63] === stateFromStores2) {
                                                      if (cResult[64] === guildId) {
                                                        if (cResult[65] === navigation) {
                                                          if (cResult[66] === prompts) {
                                                            if (cResult[67] === stateFromStores) {
                                                              let tmp77;
                                                              if (cResult[68] === stateFromStoresArray.length) {
                                                                tmp77 = cResult[69];
                                                              }
                                                              closure_22 = tmp77;
                                                              if (cResult[70] === 0 === stateFromStoresArray.length) {
                                                                if (cResult[71] === tmp77) {
                                                                  if (cResult[72] === tmp35) {
                                                                    handleOnPress = tmp78;
                                                                    if (cResult[75] === backShouldLeaveGuild) {
                                                                      if (cResult[76] === currentPromptIdx) {
                                                                        if (cResult[77] === guildId) {
                                                                          if (cResult[78] === tmp17) {
                                                                            if (cResult[79] === navigation) {
                                                                              if (cResult[80] === onClose) {
                                                                                if (cResult[81] === prompts) {
                                                                                  let tmp79;
                                                                                  if (cResult[82] === stateFromStoresArray.length) {
                                                                                    tmp79 = cResult[83];
                                                                                  }
                                                                                  if (cResult[84] === backShouldLeaveGuild) {
                                                                                    if (cResult[85] === currentPromptIdx) {
                                                                                      if (cResult[86] === guildId) {
                                                                                        if (cResult[87] === tmp17) {
                                                                                          if (cResult[88] === navigation) {
                                                                                            if (cResult[89] === onClose) {
                                                                                              if (cResult[90] === prompts) {
                                                                                                let tmp80;
                                                                                                if (cResult[91] === stateFromStoresArray) {
                                                                                                  tmp80 = cResult[92];
                                                                                                }
                                                                                                const layoutEffect = backShouldLeaveGuild.useLayoutEffect(tmp79, tmp80);
                                                                                                if (cResult[93] === prompts[currentPromptIdx]) {
                                                                                                  if (cResult[94] === currentPromptIdx) {
                                                                                                    if (cResult[95] === guildId) {
                                                                                                      if (cResult[96] === tmp78) {
                                                                                                        if (cResult[97] === prompts.length > 0) {
                                                                                                          if (cResult[98] === tmp35) {
                                                                                                            if (cResult[99] === prompts.length) {
                                                                                                              let tmp82;
                                                                                                              if (cResult[100] === selectOption) {
                                                                                                                tmp82 = cResult[101];
                                                                                                              }
                                                                                                              if (cResult[102] === tmp4.container) {
                                                                                                                let tmp83;
                                                                                                                if (cResult[103] === tmp4.flex) {
                                                                                                                  tmp83 = cResult[104];
                                                                                                                }
                                                                                                                if (cResult[105] === animatedStyle5) {
                                                                                                                  let tmp84;
                                                                                                                  if (cResult[106] === tmp4.flex) {
                                                                                                                    tmp84 = cResult[107];
                                                                                                                  }
                                                                                                                  if (cResult[108] !== tmp82) {
                                                                                                                    cResult[108] = tmp82;
                                                                                                                    const tmp82Result = tmp82();
                                                                                                                    class Ft {
                                                                                                                      constructor() {
                                                                                                                        if (skipped) {
                                                                                                                          if (null != currentPrompt) {
                                                                                                                            const type = currentPrompt.type;
                                                                                                                            if (OnboardingPromptType.MULTIPLE_CHOICE === type) {
                                                                                                                              const obj2 = { guildId, currentPrompt, lastPrompt, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
                                                                                                                              return closure_19(GuildOnboardingPrompt.MultipleChoicePrompt, obj2);
                                                                                                                            } else if (tmp25.DROPDOWN === type) {
                                                                                                                              const obj3 = { guildId, currentPrompt, lastPrompt, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
                                                                                                                              return closure_19(GuildOnboardingPrompt.DropdownPrompt, obj3);
                                                                                                                            } else {
                                                                                                                              obj = GlobalUtils;
                                                                                                                              obj.assertNever(currentPrompt.type);
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                        return null;
                                                                                                                      }
                                                                                                                    }
                                                                                                                    cResult[109] = tmp82Result;
                                                                                                                    class Gt {
                                                                                                                      constructor() {
                                                                                                                        if (0 === currentPromptIdx) {
                                                                                                                          obj = { step: 0, required };
                                                                                                                          const track = AnalyticsUtilsDefault.track;
                                                                                                                          const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                                                                                          AnalyticsUtilsDefault;
                                                                                                                          const obj2 = AppAnalyticsUtils;
                                                                                                                          const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                                                                                          track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                  if (cResult[110] === tmp84) {
                                                                                                                    if (cResult[113] === tmp83) {
                                                                                                                      if (cResult[116] === tmp4.flex) {
                                                                                                                        if (cResult[119] === animatedStyle4) {
                                                                                                                          let tmp94;
                                                                                                                          if (cResult[120] === tmp4.landingOverlay) {
                                                                                                                            tmp94 = cResult[121];
                                                                                                                          }
                                                                                                                          if (cResult[122] === tmp40) {
                                                                                                                            let tmp95;
                                                                                                                            let tmp99;
                                                                                                                            if (cResult[123] === tmp41) {
                                                                                                                              tmp95 = cResult[124];
                                                                                                                            }
                                                                                                                            const _Symbol3 = Symbol;
                                                                                                                            class Ft {
                                                                                                                              constructor() {
                                                                                                                                if (skipped) {
                                                                                                                                  if (null != currentPrompt) {
                                                                                                                                    const type = currentPrompt.type;
                                                                                                                                    if (OnboardingPromptType.MULTIPLE_CHOICE === type) {
                                                                                                                                      const obj2 = { guildId, currentPrompt, lastPrompt, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
                                                                                                                                      return closure_19(GuildOnboardingPrompt.MultipleChoicePrompt, obj2);
                                                                                                                                    } else if (tmp25.DROPDOWN === type) {
                                                                                                                                      const obj3 = { guildId, currentPrompt, lastPrompt, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
                                                                                                                                      return closure_19(GuildOnboardingPrompt.DropdownPrompt, obj3);
                                                                                                                                    } else {
                                                                                                                                      obj = GlobalUtils;
                                                                                                                                      obj.assertNever(currentPrompt.type);
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                                return null;
                                                                                                                              }
                                                                                                                            }
                                                                                                                            if (cResult[126] !== tmp4.darkColorGradient) {
                                                                                                                              const obj8 = { style: tmp4.darkColorGradient, start: tmp(tmp2[24]).VerticalGradient.START, end: null, colors: tmp98 };
                                                                                                                              class Ft {
                                                                                                                                constructor() {
                                                                                                                                  if (skipped) {
                                                                                                                                    if (null != currentPrompt) {
                                                                                                                                      const type = currentPrompt.type;
                                                                                                                                      if (OnboardingPromptType.MULTIPLE_CHOICE === type) {
                                                                                                                                        const obj2 = { guildId, currentPrompt, lastPrompt, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
                                                                                                                                        return closure_19(GuildOnboardingPrompt.MultipleChoicePrompt, obj2);
                                                                                                                                      } else if (tmp25.DROPDOWN === type) {
                                                                                                                                        const obj3 = { guildId, currentPrompt, lastPrompt, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
                                                                                                                                        return closure_19(GuildOnboardingPrompt.DropdownPrompt, obj3);
                                                                                                                                      } else {
                                                                                                                                        obj = GlobalUtils;
                                                                                                                                        obj.assertNever(currentPrompt.type);
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                  return null;
                                                                                                                                }
                                                                                                                              }
                                                                                                                              class Gt {
                                                                                                                                constructor() {
                                                                                                                                  if (0 === currentPromptIdx) {
                                                                                                                                    obj = { step: 0, required };
                                                                                                                                    const track = AnalyticsUtilsDefault.track;
                                                                                                                                    const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                                                                                                    AnalyticsUtilsDefault;
                                                                                                                                    const obj2 = AppAnalyticsUtils;
                                                                                                                                    const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                                                                                                    track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                              const tmp102 = closure_19(tmp101, obj8);
                                                                                                                              cResult[126] = tmp4.darkColorGradient;
                                                                                                                              cResult[127] = tmp102;
                                                                                                                              tmp99 = tmp102;
                                                                                                                            } else {
                                                                                                                              tmp99 = cResult[127];
                                                                                                                            }
                                                                                                                            class Gt {
                                                                                                                              constructor() {
                                                                                                                                if (0 === currentPromptIdx) {
                                                                                                                                  obj = { step: 0, required };
                                                                                                                                  const track = AnalyticsUtilsDefault.track;
                                                                                                                                  const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                                                                                                  AnalyticsUtilsDefault;
                                                                                                                                  const obj2 = AppAnalyticsUtils;
                                                                                                                                  const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                                                                                                  track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                            const obj9 = { style: tmp94, children: items6 };
                                                                                                                            items6 = [tmp95, tmp99];
                                                                                                                            const tmp105 = required(currentPromptIdx(tmp2[28]).View, obj9);
                                                                                                                            class Et {
                                                                                                                              constructor() {
                                                                                                                                if (isFirstOpen) {
                                                                                                                                  obj = { step: -1, required: true };
                                                                                                                                  const track = AnalyticsUtilsDefault.track;
                                                                                                                                  const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                                                                                                  AnalyticsUtilsDefault;
                                                                                                                                  const obj2 = AppAnalyticsUtils;
                                                                                                                                  const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                                                                                                  track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                                                                                                                  const obj3 = { step: -1, skipped, is_final_step: false, in_onboarding: true };
                                                                                                                                  const track2 = AnalyticsUtilsDefault.track;
                                                                                                                                  const GUILD_ONBOARDING_STEP_COMPLETED = authStore3.GUILD_ONBOARDING_STEP_COMPLETED;
                                                                                                                                  AnalyticsUtilsDefault;
                                                                                                                                  const obj4 = AppAnalyticsUtils;
                                                                                                                                  const merged1 = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
                                                                                                                                  track2(GUILD_ONBOARDING_STEP_COMPLETED, obj3);
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                            cResult[128] = tmp94;
                                                                                                                            class Rt {
                                                                                                                              constructor() {
                                                                                                                                let Easing;
                                                                                                                                let Easing2;
                                                                                                                                let items;
                                                                                                                                let obj5;
                                                                                                                                let withDelay2;
                                                                                                                                let withTiming2;
                                                                                                                                let num = 1;
                                                                                                                                if (sharedValue.get()) {
                                                                                                                                  num = 0;
                                                                                                                                }
                                                                                                                                const withDelay = ReanimatedRexport.withDelay;
                                                                                                                                ReanimatedRexport;
                                                                                                                                const obj2 = { duration: 300, easing: Easing.out(ReanimatedRexport.Easing.ease) };
                                                                                                                                const withTiming = timing.withTiming;
                                                                                                                                timing;
                                                                                                                                Easing = ReanimatedRexport.Easing;
                                                                                                                                let num2 = 0;
                                                                                                                                const withDelayResult = withDelay(200, withTiming(num, obj2));
                                                                                                                                if (!stateFromStores1) {
                                                                                                                                  num2 = 0;
                                                                                                                                  if (sharedValue.get()) {
                                                                                                                                    num2 = -80;
                                                                                                                                  }
                                                                                                                                }
                                                                                                                                const obj3 = { opacity: withDelayResult, transform: items };
                                                                                                                                const obj4 = { translateY: withDelay2(200, withTiming2(num2, obj5)) };
                                                                                                                                withDelay2 = ReanimatedRexport.withDelay;
                                                                                                                                ReanimatedRexport;
                                                                                                                                obj5 = { duration: 300, easing: Easing2.out(ReanimatedRexport.Easing.ease) };
                                                                                                                                withTiming2 = timing.withTiming;
                                                                                                                                timing;
                                                                                                                                Easing2 = ReanimatedRexport.Easing;
                                                                                                                                items = [obj4];
                                                                                                                                return obj3;
                                                                                                                              }
                                                                                                                            }
                                                                                                                            cResult[130] = tmp99;
                                                                                                                            cResult[131] = tmp105;
                                                                                                                          }
                                                                                                                          class Ft {
                                                                                                                            constructor() {
                                                                                                                              if (skipped) {
                                                                                                                                if (null != currentPrompt) {
                                                                                                                                  const type = currentPrompt.type;
                                                                                                                                  if (OnboardingPromptType.MULTIPLE_CHOICE === type) {
                                                                                                                                    const obj2 = { guildId, currentPrompt, lastPrompt, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
                                                                                                                                    return closure_19(GuildOnboardingPrompt.MultipleChoicePrompt, obj2);
                                                                                                                                  } else if (tmp25.DROPDOWN === type) {
                                                                                                                                    const obj3 = { guildId, currentPrompt, lastPrompt, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
                                                                                                                                    return closure_19(GuildOnboardingPrompt.DropdownPrompt, obj3);
                                                                                                                                  } else {
                                                                                                                                    obj = GlobalUtils;
                                                                                                                                    obj.assertNever(currentPrompt.type);
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                              return null;
                                                                                                                            }
                                                                                                                          }
                                                                                                                          class Gt {
                                                                                                                            constructor() {
                                                                                                                              if (0 === currentPromptIdx) {
                                                                                                                                obj = { step: 0, required };
                                                                                                                                const track = AnalyticsUtilsDefault.track;
                                                                                                                                const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                                                                                                AnalyticsUtilsDefault;
                                                                                                                                const obj2 = AppAnalyticsUtils;
                                                                                                                                const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                                                                                                track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                          cResult[123] = tmp41;
                                                                                                                          cResult[124] = null;
                                                                                                                          tmp95 = tmp96;
                                                                                                                        }
                                                                                                                        const items7 = [, ];
                                                                                                                        class Ft {
                                                                                                                          constructor() {
                                                                                                                            if (skipped) {
                                                                                                                              if (null != currentPrompt) {
                                                                                                                                const type = currentPrompt.type;
                                                                                                                                if (OnboardingPromptType.MULTIPLE_CHOICE === type) {
                                                                                                                                  const obj2 = { guildId, currentPrompt, lastPrompt, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
                                                                                                                                  return closure_19(GuildOnboardingPrompt.MultipleChoicePrompt, obj2);
                                                                                                                                } else if (tmp25.DROPDOWN === type) {
                                                                                                                                  const obj3 = { guildId, currentPrompt, lastPrompt, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
                                                                                                                                  return closure_19(GuildOnboardingPrompt.DropdownPrompt, obj3);
                                                                                                                                } else {
                                                                                                                                  obj = GlobalUtils;
                                                                                                                                  obj.assertNever(currentPrompt.type);
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                            return null;
                                                                                                                          }
                                                                                                                        }
                                                                                                                        items7[1] = animatedStyle4;
                                                                                                                        class Gt {
                                                                                                                          constructor() {
                                                                                                                            if (0 === currentPromptIdx) {
                                                                                                                              obj = { step: 0, required };
                                                                                                                              const track = AnalyticsUtilsDefault.track;
                                                                                                                              const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                                                                                              AnalyticsUtilsDefault;
                                                                                                                              const obj2 = AppAnalyticsUtils;
                                                                                                                              const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                                                                                              track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                        cResult[119] = animatedStyle4;
                                                                                                                        cResult[120] = tmp4.landingOverlay;
                                                                                                                        cResult[121] = items7;
                                                                                                                        tmp94 = items7;
                                                                                                                      }
                                                                                                                      const items8 = [, ];
                                                                                                                      class Ft {
                                                                                                                        constructor() {
                                                                                                                          if (skipped) {
                                                                                                                            if (null != currentPrompt) {
                                                                                                                              const type = currentPrompt.type;
                                                                                                                              if (OnboardingPromptType.MULTIPLE_CHOICE === type) {
                                                                                                                                const obj2 = { guildId, currentPrompt, lastPrompt, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
                                                                                                                                return closure_19(GuildOnboardingPrompt.MultipleChoicePrompt, obj2);
                                                                                                                              } else if (tmp25.DROPDOWN === type) {
                                                                                                                                const obj3 = { guildId, currentPrompt, lastPrompt, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
                                                                                                                                return closure_19(GuildOnboardingPrompt.DropdownPrompt, obj3);
                                                                                                                              } else {
                                                                                                                                obj = GlobalUtils;
                                                                                                                                obj.assertNever(currentPrompt.type);
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                          return null;
                                                                                                                        }
                                                                                                                      }
                                                                                                                      items8[1] = tmp4.landingOverlay;
                                                                                                                      class Gt {
                                                                                                                        constructor() {
                                                                                                                          if (0 === currentPromptIdx) {
                                                                                                                            obj = { step: 0, required };
                                                                                                                            const track = AnalyticsUtilsDefault.track;
                                                                                                                            const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                                                                                            AnalyticsUtilsDefault;
                                                                                                                            const obj2 = AppAnalyticsUtils;
                                                                                                                            const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                                                                                            track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                      cResult[116] = tmp4.flex;
                                                                                                                      cResult[117] = tmp4.landingOverlay;
                                                                                                                      cResult[118] = items8;
                                                                                                                    }
                                                                                                                    class Ft {
                                                                                                                      constructor() {
                                                                                                                        if (skipped) {
                                                                                                                          if (null != currentPrompt) {
                                                                                                                            const type = currentPrompt.type;
                                                                                                                            if (OnboardingPromptType.MULTIPLE_CHOICE === type) {
                                                                                                                              const obj2 = { guildId, currentPrompt, lastPrompt, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
                                                                                                                              return closure_19(GuildOnboardingPrompt.MultipleChoicePrompt, obj2);
                                                                                                                            } else if (tmp25.DROPDOWN === type) {
                                                                                                                              const obj3 = { guildId, currentPrompt, lastPrompt, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
                                                                                                                              return closure_19(GuildOnboardingPrompt.DropdownPrompt, obj3);
                                                                                                                            } else {
                                                                                                                              obj = GlobalUtils;
                                                                                                                              obj.assertNever(currentPrompt.type);
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                        return null;
                                                                                                                      }
                                                                                                                    }
                                                                                                                    tmp91[2] = tmp83;
                                                                                                                    class Gt {
                                                                                                                      constructor() {
                                                                                                                        if (0 === currentPromptIdx) {
                                                                                                                          obj = { step: 0, required };
                                                                                                                          const track = AnalyticsUtilsDefault.track;
                                                                                                                          const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                                                                                          AnalyticsUtilsDefault;
                                                                                                                          const obj2 = AppAnalyticsUtils;
                                                                                                                          const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                                                                                          track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                    cResult[113] = tmp83;
                                                                                                                    cResult[114] = tmp87;
                                                                                                                    cResult[115] = closure_19(tmp(tmp2[39]).SafeAreaPaddingView, tmp91);
                                                                                                                    const tmp92 = closure_19(tmp(tmp2[39]).SafeAreaPaddingView, tmp91);
                                                                                                                  }
                                                                                                                  class Ft {
                                                                                                                    constructor() {
                                                                                                                      if (skipped) {
                                                                                                                        if (null != currentPrompt) {
                                                                                                                          const type = currentPrompt.type;
                                                                                                                          if (OnboardingPromptType.MULTIPLE_CHOICE === type) {
                                                                                                                            const obj2 = { guildId, currentPrompt, lastPrompt, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
                                                                                                                            return closure_19(GuildOnboardingPrompt.MultipleChoicePrompt, obj2);
                                                                                                                          } else if (tmp25.DROPDOWN === type) {
                                                                                                                            const obj3 = { guildId, currentPrompt, lastPrompt, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
                                                                                                                            return closure_19(GuildOnboardingPrompt.DropdownPrompt, obj3);
                                                                                                                          } else {
                                                                                                                            obj = GlobalUtils;
                                                                                                                            obj.assertNever(currentPrompt.type);
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                      return null;
                                                                                                                    }
                                                                                                                  }
                                                                                                                  const obj11 = { style: null, children: tmp85 };
                                                                                                                  class Gt {
                                                                                                                    constructor() {
                                                                                                                      if (0 === currentPromptIdx) {
                                                                                                                        obj = { step: 0, required };
                                                                                                                        const track = AnalyticsUtilsDefault.track;
                                                                                                                        const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                                                                                        AnalyticsUtilsDefault;
                                                                                                                        const obj2 = AppAnalyticsUtils;
                                                                                                                        const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                                                                                        track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                  cResult[110] = tmp84;
                                                                                                                  cResult[111] = tmp85;
                                                                                                                  cResult[112] = closure_19(currentPromptIdx(tmp2[28]).View, obj11);
                                                                                                                  closure_19(currentPromptIdx(tmp2[28]).View, obj11);
                                                                                                                  class Et {
                                                                                                                    constructor() {
                                                                                                                      if (isFirstOpen) {
                                                                                                                        obj = { step: -1, required: true };
                                                                                                                        const track = AnalyticsUtilsDefault.track;
                                                                                                                        const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                                                                                        AnalyticsUtilsDefault;
                                                                                                                        const obj2 = AppAnalyticsUtils;
                                                                                                                        const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                                                                                        track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                                                                                                        const obj3 = { step: -1, skipped, is_final_step: false, in_onboarding: true };
                                                                                                                        const track2 = AnalyticsUtilsDefault.track;
                                                                                                                        const GUILD_ONBOARDING_STEP_COMPLETED = authStore3.GUILD_ONBOARDING_STEP_COMPLETED;
                                                                                                                        AnalyticsUtilsDefault;
                                                                                                                        const obj4 = AppAnalyticsUtils;
                                                                                                                        const merged1 = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
                                                                                                                        track2(GUILD_ONBOARDING_STEP_COMPLETED, obj3);
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                                const items9 = [, ];
                                                                                                                class Ft {
                                                                                                                  constructor() {
                                                                                                                    if (skipped) {
                                                                                                                      if (null != currentPrompt) {
                                                                                                                        const type = currentPrompt.type;
                                                                                                                        if (OnboardingPromptType.MULTIPLE_CHOICE === type) {
                                                                                                                          const obj2 = { guildId, currentPrompt, lastPrompt, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
                                                                                                                          return closure_19(GuildOnboardingPrompt.MultipleChoicePrompt, obj2);
                                                                                                                        } else if (tmp25.DROPDOWN === type) {
                                                                                                                          const obj3 = { guildId, currentPrompt, lastPrompt, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
                                                                                                                          return closure_19(GuildOnboardingPrompt.DropdownPrompt, obj3);
                                                                                                                        } else {
                                                                                                                          obj = GlobalUtils;
                                                                                                                          obj.assertNever(currentPrompt.type);
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                    return null;
                                                                                                                  }
                                                                                                                }
                                                                                                                items9[1] = animatedStyle5;
                                                                                                                class Gt {
                                                                                                                  constructor() {
                                                                                                                    if (0 === currentPromptIdx) {
                                                                                                                      obj = { step: 0, required };
                                                                                                                      const track = AnalyticsUtilsDefault.track;
                                                                                                                      const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                                                                                      AnalyticsUtilsDefault;
                                                                                                                      const obj2 = AppAnalyticsUtils;
                                                                                                                      const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                                                                                      track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                                cResult[105] = animatedStyle5;
                                                                                                                cResult[106] = tmp4.flex;
                                                                                                                cResult[107] = items9;
                                                                                                                tmp84 = items9;
                                                                                                              }
                                                                                                              const items10 = [, ];
                                                                                                              class Ft {
                                                                                                                constructor() {
                                                                                                                  if (skipped) {
                                                                                                                    if (null != currentPrompt) {
                                                                                                                      const type = currentPrompt.type;
                                                                                                                      if (OnboardingPromptType.MULTIPLE_CHOICE === type) {
                                                                                                                        const obj2 = { guildId, currentPrompt, lastPrompt, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
                                                                                                                        return closure_19(GuildOnboardingPrompt.MultipleChoicePrompt, obj2);
                                                                                                                      } else if (tmp25.DROPDOWN === type) {
                                                                                                                        const obj3 = { guildId, currentPrompt, lastPrompt, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
                                                                                                                        return closure_19(GuildOnboardingPrompt.DropdownPrompt, obj3);
                                                                                                                      } else {
                                                                                                                        obj = GlobalUtils;
                                                                                                                        obj.assertNever(currentPrompt.type);
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                  return null;
                                                                                                                }
                                                                                                              }
                                                                                                              items10[1] = tmp4.container;
                                                                                                              class Gt {
                                                                                                                constructor() {
                                                                                                                  if (0 === currentPromptIdx) {
                                                                                                                    obj = { step: 0, required };
                                                                                                                    const track = AnalyticsUtilsDefault.track;
                                                                                                                    const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                                                                                    AnalyticsUtilsDefault;
                                                                                                                    const obj2 = AppAnalyticsUtils;
                                                                                                                    const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                                                                                    track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                              cResult[102] = tmp4.container;
                                                                                                              cResult[103] = tmp4.flex;
                                                                                                              cResult[104] = items10;
                                                                                                              tmp83 = items10;
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                                class Ft {
                                                                                                  constructor() {
                                                                                                    if (skipped) {
                                                                                                      if (null != currentPrompt) {
                                                                                                        const type = currentPrompt.type;
                                                                                                        if (OnboardingPromptType.MULTIPLE_CHOICE === type) {
                                                                                                          const obj2 = { guildId, currentPrompt, lastPrompt, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
                                                                                                          return closure_19(GuildOnboardingPrompt.MultipleChoicePrompt, obj2);
                                                                                                        } else if (tmp25.DROPDOWN === type) {
                                                                                                          const obj3 = { guildId, currentPrompt, lastPrompt, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
                                                                                                          return closure_19(GuildOnboardingPrompt.DropdownPrompt, obj3);
                                                                                                        } else {
                                                                                                          obj = GlobalUtils;
                                                                                                          obj.assertNever(currentPrompt.type);
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                    return null;
                                                                                                  }
                                                                                                }
                                                                                                class Gt {
                                                                                                  constructor() {
                                                                                                    if (0 === currentPromptIdx) {
                                                                                                      obj = { step: 0, required };
                                                                                                      const track = AnalyticsUtilsDefault.track;
                                                                                                      const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                                                                      AnalyticsUtilsDefault;
                                                                                                      const obj2 = AppAnalyticsUtils;
                                                                                                      const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                                                                      track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                                cResult[94] = currentPromptIdx;
                                                                                                cResult[95] = guildId;
                                                                                                cResult[96] = tmp78;
                                                                                                cResult[97] = prompts.length > 0;
                                                                                                class Et {
                                                                                                  constructor() {
                                                                                                    if (isFirstOpen) {
                                                                                                      obj = { step: -1, required: true };
                                                                                                      const track = AnalyticsUtilsDefault.track;
                                                                                                      const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                                                                      AnalyticsUtilsDefault;
                                                                                                      const obj2 = AppAnalyticsUtils;
                                                                                                      const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                                                                      track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                                                                                      const obj3 = { step: -1, skipped, is_final_step: false, in_onboarding: true };
                                                                                                      const track2 = AnalyticsUtilsDefault.track;
                                                                                                      const GUILD_ONBOARDING_STEP_COMPLETED = authStore3.GUILD_ONBOARDING_STEP_COMPLETED;
                                                                                                      AnalyticsUtilsDefault;
                                                                                                      const obj4 = AppAnalyticsUtils;
                                                                                                      const merged1 = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
                                                                                                      track2(GUILD_ONBOARDING_STEP_COMPLETED, obj3);
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                                cResult[98] = tmp35;
                                                                                                class Rt {
                                                                                                  constructor() {
                                                                                                    let Easing;
                                                                                                    let Easing2;
                                                                                                    let items;
                                                                                                    let obj5;
                                                                                                    let withDelay2;
                                                                                                    let withTiming2;
                                                                                                    let num = 1;
                                                                                                    if (sharedValue.get()) {
                                                                                                      num = 0;
                                                                                                    }
                                                                                                    const withDelay = ReanimatedRexport.withDelay;
                                                                                                    ReanimatedRexport;
                                                                                                    const obj2 = { duration: 300, easing: Easing.out(ReanimatedRexport.Easing.ease) };
                                                                                                    const withTiming = timing.withTiming;
                                                                                                    timing;
                                                                                                    Easing = ReanimatedRexport.Easing;
                                                                                                    let num2 = 0;
                                                                                                    const withDelayResult = withDelay(200, withTiming(num, obj2));
                                                                                                    if (!stateFromStores1) {
                                                                                                      num2 = 0;
                                                                                                      if (sharedValue.get()) {
                                                                                                        num2 = -80;
                                                                                                      }
                                                                                                    }
                                                                                                    const obj3 = { opacity: withDelayResult, transform: items };
                                                                                                    const obj4 = { translateY: withDelay2(200, withTiming2(num2, obj5)) };
                                                                                                    withDelay2 = ReanimatedRexport.withDelay;
                                                                                                    ReanimatedRexport;
                                                                                                    obj5 = { duration: 300, easing: Easing2.out(ReanimatedRexport.Easing.ease) };
                                                                                                    withTiming2 = timing.withTiming;
                                                                                                    timing;
                                                                                                    Easing2 = ReanimatedRexport.Easing;
                                                                                                    items = [obj4];
                                                                                                    return obj3;
                                                                                                  }
                                                                                                }
                                                                                                cResult[100] = selectOption;
                                                                                                cResult[101] = Ft;
                                                                                                tmp82 = Ft;
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                  const items11 = [, , , , , , , ];
                                                                                  class Ht {
                                                                                    constructor() {
                                                                                      let headerCloseButton;
                                                                                      let lastSelectedChannelId;
                                                                                      let step;
                                                                                      if (0 === currentPromptIdx) {
                                                                                        if (!useReducedMotion) {
                                                                                          obj = NavigatorHeader;
                                                                                          headerCloseButton = obj.getHeaderCloseButton(() => {
                                                                                            obj = { step: 0, skipped: true, back: false, options_selected: 0, in_onboarding: true, is_final_step: false };
                                                                                            const track = currentPromptIdx(prompts[33]).track;
                                                                                            const GUILD_ONBOARDING_STEP_COMPLETED = closure_2_16.GUILD_ONBOARDING_STEP_COMPLETED;
                                                                                            currentPromptIdx(prompts[33]);
                                                                                            const obj2 = guildId(prompts[34]);
                                                                                            const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(closure_1_0));
                                                                                            track(GUILD_ONBOARDING_STEP_COMPLETED, obj);
                                                                                            if (backShouldLeaveGuild) {
                                                                                              const channel = navigation.getChannel(lastSelectedChannelId.getLastSelectedChannelId());
                                                                                              if (null != channel) {
                                                                                                if (channel.guild_id !== closure_1_0) {
                                                                                                  const tmp3Result = guildId(prompts[14]);
                                                                                                  tmp3Result.transitionTo(lastPrompt.CHANNEL(channel.guild_id, channel.id));
                                                                                                }
                                                                                                onClose();
                                                                                              }
                                                                                              const tmp3Result2 = guildId(prompts[14]);
                                                                                              tmp3Result2.transitionTo(lastPrompt.ME, { navigationReplace: true });
                                                                                            } else {
                                                                                              onClose();
                                                                                            }
                                                                                          });
                                                                                        }
                                                                                        let obj4 = { headerLeft: headerCloseButton };
                                                                                        navigation.setOptions(obj4);
                                                                                      }
                                                                                      if (0 === currentPromptIdx) {
                                                                                        let headerBackButton;
                                                                                        if (useReducedMotion) {
                                                                                          let obj3 = NavigatorHeader;
                                                                                          headerBackButton = obj3.getHeaderBackButton(() => {
                                                                                            obj = { step: 0, skipped: false, back: true, options_selected: closure_1_16.length, in_onboarding: true, is_final_step: false };
                                                                                            const track = currentPromptIdx(prompts[33]).track;
                                                                                            const GUILD_ONBOARDING_STEP_COMPLETED = closure_2_16.GUILD_ONBOARDING_STEP_COMPLETED;
                                                                                            currentPromptIdx(prompts[33]);
                                                                                            const obj2 = guildId(prompts[34]);
                                                                                            const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(closure_1_0));
                                                                                            track(GUILD_ONBOARDING_STEP_COMPLETED, obj);
                                                                                            navigation.pop();
                                                                                          }, true);
                                                                                        }
                                                                                        headerCloseButton = headerBackButton;
                                                                                      }
                                                                                      let obj2 = NavigatorHeader;
                                                                                      headerBackButton = obj2.getHeaderBackButton(() => {
                                                                                        obj = { step, skipped: false, back: true, options_selected: closure_1_16.length, in_onboarding: true, is_final_step: false };
                                                                                        const track = currentPromptIdx(prompts[33]).track;
                                                                                        const GUILD_ONBOARDING_STEP_COMPLETED = closure_2_16.GUILD_ONBOARDING_STEP_COMPLETED;
                                                                                        currentPromptIdx(prompts[33]);
                                                                                        const obj2 = guildId(prompts[34]);
                                                                                        const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(closure_1_0));
                                                                                        track(GUILD_ONBOARDING_STEP_COMPLETED, obj);
                                                                                        const obj3 = { step: step - 1, required: closure_1_2[step - 1].required };
                                                                                        const track2 = currentPromptIdx(prompts[33]).track;
                                                                                        const GUILD_ONBOARDING_STEP_VIEWED = closure_2_16.GUILD_ONBOARDING_STEP_VIEWED;
                                                                                        currentPromptIdx(prompts[33]);
                                                                                        const obj4 = guildId(prompts[34]);
                                                                                        const merged1 = Object.assign(obj4.collectGuildAnalyticsMetadata(closure_1_0));
                                                                                        track2(GUILD_ONBOARDING_STEP_VIEWED, obj3);
                                                                                        navigation.pop();
                                                                                      }, true);
                                                                                    }
                                                                                  }
                                                                                  items11[1] = currentPromptIdx;
                                                                                  class Gt {
                                                                                    constructor() {
                                                                                      if (0 === currentPromptIdx) {
                                                                                        obj = { step: 0, required };
                                                                                        const track = AnalyticsUtilsDefault.track;
                                                                                        const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                                                        AnalyticsUtilsDefault;
                                                                                        const obj2 = AppAnalyticsUtils;
                                                                                        const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                                                        track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                  items11[3] = guildId;
                                                                                  items11[4] = prompts;
                                                                                  items11[5] = onClose;
                                                                                  items11[6] = backShouldLeaveGuild;
                                                                                  items11[7] = tmp17;
                                                                                  cResult[84] = backShouldLeaveGuild;
                                                                                  class Et {
                                                                                    constructor() {
                                                                                      if (isFirstOpen) {
                                                                                        obj = { step: -1, required: true };
                                                                                        const track = AnalyticsUtilsDefault.track;
                                                                                        const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                                                        AnalyticsUtilsDefault;
                                                                                        const obj2 = AppAnalyticsUtils;
                                                                                        const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                                                        track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                                                                        const obj3 = { step: -1, skipped, is_final_step: false, in_onboarding: true };
                                                                                        const track2 = AnalyticsUtilsDefault.track;
                                                                                        const GUILD_ONBOARDING_STEP_COMPLETED = authStore3.GUILD_ONBOARDING_STEP_COMPLETED;
                                                                                        AnalyticsUtilsDefault;
                                                                                        const obj4 = AppAnalyticsUtils;
                                                                                        const merged1 = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
                                                                                        track2(GUILD_ONBOARDING_STEP_COMPLETED, obj3);
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                  cResult[86] = guildId;
                                                                                  class Rt {
                                                                                    constructor() {
                                                                                      let Easing;
                                                                                      let Easing2;
                                                                                      let items;
                                                                                      let obj5;
                                                                                      let withDelay2;
                                                                                      let withTiming2;
                                                                                      let num = 1;
                                                                                      if (sharedValue.get()) {
                                                                                        num = 0;
                                                                                      }
                                                                                      const withDelay = ReanimatedRexport.withDelay;
                                                                                      ReanimatedRexport;
                                                                                      const obj2 = { duration: 300, easing: Easing.out(ReanimatedRexport.Easing.ease) };
                                                                                      const withTiming = timing.withTiming;
                                                                                      timing;
                                                                                      Easing = ReanimatedRexport.Easing;
                                                                                      let num2 = 0;
                                                                                      const withDelayResult = withDelay(200, withTiming(num, obj2));
                                                                                      if (!stateFromStores1) {
                                                                                        num2 = 0;
                                                                                        if (sharedValue.get()) {
                                                                                          num2 = -80;
                                                                                        }
                                                                                      }
                                                                                      const obj3 = { opacity: withDelayResult, transform: items };
                                                                                      const obj4 = { translateY: withDelay2(200, withTiming2(num2, obj5)) };
                                                                                      withDelay2 = ReanimatedRexport.withDelay;
                                                                                      ReanimatedRexport;
                                                                                      obj5 = { duration: 300, easing: Easing2.out(ReanimatedRexport.Easing.ease) };
                                                                                      withTiming2 = timing.withTiming;
                                                                                      timing;
                                                                                      Easing2 = ReanimatedRexport.Easing;
                                                                                      items = [obj4];
                                                                                      return obj3;
                                                                                    }
                                                                                  }
                                                                                  cResult[87] = tmp17;
                                                                                  cResult[88] = navigation;
                                                                                  cResult[89] = onClose;
                                                                                  cResult[90] = prompts;
                                                                                  cResult[91] = stateFromStoresArray;
                                                                                  cResult[92] = items11;
                                                                                  tmp80 = items11;
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                    class Ht {
                                                                      constructor() {
                                                                        let headerCloseButton;
                                                                        let lastSelectedChannelId;
                                                                        let step;
                                                                        if (0 === currentPromptIdx) {
                                                                          if (!useReducedMotion) {
                                                                            obj = NavigatorHeader;
                                                                            headerCloseButton = obj.getHeaderCloseButton(() => {
                                                                              obj = { step: 0, skipped: true, back: false, options_selected: 0, in_onboarding: true, is_final_step: false };
                                                                              const track = currentPromptIdx(prompts[33]).track;
                                                                              const GUILD_ONBOARDING_STEP_COMPLETED = closure_2_16.GUILD_ONBOARDING_STEP_COMPLETED;
                                                                              currentPromptIdx(prompts[33]);
                                                                              const obj2 = guildId(prompts[34]);
                                                                              const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(closure_1_0));
                                                                              track(GUILD_ONBOARDING_STEP_COMPLETED, obj);
                                                                              if (backShouldLeaveGuild) {
                                                                                const channel = navigation.getChannel(lastSelectedChannelId.getLastSelectedChannelId());
                                                                                if (null != channel) {
                                                                                  if (channel.guild_id !== closure_1_0) {
                                                                                    const tmp3Result = guildId(prompts[14]);
                                                                                    tmp3Result.transitionTo(lastPrompt.CHANNEL(channel.guild_id, channel.id));
                                                                                  }
                                                                                  onClose();
                                                                                }
                                                                                const tmp3Result2 = guildId(prompts[14]);
                                                                                tmp3Result2.transitionTo(lastPrompt.ME, { navigationReplace: true });
                                                                              } else {
                                                                                onClose();
                                                                              }
                                                                            });
                                                                          }
                                                                          let obj4 = { headerLeft: headerCloseButton };
                                                                          navigation.setOptions(obj4);
                                                                        }
                                                                        if (0 === currentPromptIdx) {
                                                                          let headerBackButton;
                                                                          if (useReducedMotion) {
                                                                            let obj3 = NavigatorHeader;
                                                                            headerBackButton = obj3.getHeaderBackButton(() => {
                                                                              obj = { step: 0, skipped: false, back: true, options_selected: closure_1_16.length, in_onboarding: true, is_final_step: false };
                                                                              const track = currentPromptIdx(prompts[33]).track;
                                                                              const GUILD_ONBOARDING_STEP_COMPLETED = closure_2_16.GUILD_ONBOARDING_STEP_COMPLETED;
                                                                              currentPromptIdx(prompts[33]);
                                                                              const obj2 = guildId(prompts[34]);
                                                                              const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(closure_1_0));
                                                                              track(GUILD_ONBOARDING_STEP_COMPLETED, obj);
                                                                              navigation.pop();
                                                                            }, true);
                                                                          }
                                                                          headerCloseButton = headerBackButton;
                                                                        }
                                                                        let obj2 = NavigatorHeader;
                                                                        headerBackButton = obj2.getHeaderBackButton(() => {
                                                                          obj = { step, skipped: false, back: true, options_selected: closure_1_16.length, in_onboarding: true, is_final_step: false };
                                                                          const track = currentPromptIdx(prompts[33]).track;
                                                                          const GUILD_ONBOARDING_STEP_COMPLETED = closure_2_16.GUILD_ONBOARDING_STEP_COMPLETED;
                                                                          currentPromptIdx(prompts[33]);
                                                                          const obj2 = guildId(prompts[34]);
                                                                          const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(closure_1_0));
                                                                          track(GUILD_ONBOARDING_STEP_COMPLETED, obj);
                                                                          const obj3 = { step: step - 1, required: closure_1_2[step - 1].required };
                                                                          const track2 = currentPromptIdx(prompts[33]).track;
                                                                          const GUILD_ONBOARDING_STEP_VIEWED = closure_2_16.GUILD_ONBOARDING_STEP_VIEWED;
                                                                          currentPromptIdx(prompts[33]);
                                                                          const obj4 = guildId(prompts[34]);
                                                                          const merged1 = Object.assign(obj4.collectGuildAnalyticsMetadata(closure_1_0));
                                                                          track2(GUILD_ONBOARDING_STEP_VIEWED, obj3);
                                                                          navigation.pop();
                                                                        }, true);
                                                                      }
                                                                    }
                                                                    class Gt {
                                                                      constructor() {
                                                                        if (0 === currentPromptIdx) {
                                                                          obj = { step: 0, required };
                                                                          const track = AnalyticsUtilsDefault.track;
                                                                          const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                                          AnalyticsUtilsDefault;
                                                                          const obj2 = AppAnalyticsUtils;
                                                                          const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                                          track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                                                        }
                                                                      }
                                                                    }
                                                                    cResult[76] = currentPromptIdx;
                                                                    cResult[77] = guildId;
                                                                    cResult[78] = tmp17;
                                                                    cResult[79] = navigation;
                                                                    class Et {
                                                                      constructor() {
                                                                        if (isFirstOpen) {
                                                                          obj = { step: -1, required: true };
                                                                          const track = AnalyticsUtilsDefault.track;
                                                                          const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                                          AnalyticsUtilsDefault;
                                                                          const obj2 = AppAnalyticsUtils;
                                                                          const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                                          track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                                                          const obj3 = { step: -1, skipped, is_final_step: false, in_onboarding: true };
                                                                          const track2 = AnalyticsUtilsDefault.track;
                                                                          const GUILD_ONBOARDING_STEP_COMPLETED = authStore3.GUILD_ONBOARDING_STEP_COMPLETED;
                                                                          AnalyticsUtilsDefault;
                                                                          const obj4 = AppAnalyticsUtils;
                                                                          const merged1 = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
                                                                          track2(GUILD_ONBOARDING_STEP_COMPLETED, obj3);
                                                                        }
                                                                      }
                                                                    }
                                                                    cResult[80] = onClose;
                                                                    class Rt {
                                                                      constructor() {
                                                                        let Easing;
                                                                        let Easing2;
                                                                        let items;
                                                                        let obj5;
                                                                        let withDelay2;
                                                                        let withTiming2;
                                                                        let num = 1;
                                                                        if (sharedValue.get()) {
                                                                          num = 0;
                                                                        }
                                                                        const withDelay = ReanimatedRexport.withDelay;
                                                                        ReanimatedRexport;
                                                                        const obj2 = { duration: 300, easing: Easing.out(ReanimatedRexport.Easing.ease) };
                                                                        const withTiming = timing.withTiming;
                                                                        timing;
                                                                        Easing = ReanimatedRexport.Easing;
                                                                        let num2 = 0;
                                                                        const withDelayResult = withDelay(200, withTiming(num, obj2));
                                                                        if (!stateFromStores1) {
                                                                          num2 = 0;
                                                                          if (sharedValue.get()) {
                                                                            num2 = -80;
                                                                          }
                                                                        }
                                                                        const obj3 = { opacity: withDelayResult, transform: items };
                                                                        const obj4 = { translateY: withDelay2(200, withTiming2(num2, obj5)) };
                                                                        withDelay2 = ReanimatedRexport.withDelay;
                                                                        ReanimatedRexport;
                                                                        obj5 = { duration: 300, easing: Easing2.out(ReanimatedRexport.Easing.ease) };
                                                                        withTiming2 = timing.withTiming;
                                                                        timing;
                                                                        Easing2 = ReanimatedRexport.Easing;
                                                                        items = [obj4];
                                                                        return obj3;
                                                                      }
                                                                    }
                                                                    cResult[82] = stateFromStoresArray.length;
                                                                    cResult[83] = Ht;
                                                                    tmp79 = Ht;
                                                                  }
                                                                }
                                                              }
                                                              class Vt {
                                                                constructor() {
                                                                  if (!closure_17) {
                                                                    if (lastPrompt) {
                                                                      navigation.push(stateFromStores2.COMPLETED);
                                                                    } else {
                                                                      closure_22();
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              class Gt {
                                                                constructor() {
                                                                  if (0 === currentPromptIdx) {
                                                                    obj = { step: 0, required };
                                                                    const track = AnalyticsUtilsDefault.track;
                                                                    const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                                    AnalyticsUtilsDefault;
                                                                    const obj2 = AppAnalyticsUtils;
                                                                    const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                                    track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                                                  }
                                                                }
                                                              }
                                                              cResult[71] = tmp77;
                                                              cResult[72] = tmp35;
                                                              cResult[73] = navigation;
                                                              cResult[74] = Vt;
                                                              class Et {
                                                                constructor() {
                                                                  if (isFirstOpen) {
                                                                    obj = { step: -1, required: true };
                                                                    const track = AnalyticsUtilsDefault.track;
                                                                    const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                                    AnalyticsUtilsDefault;
                                                                    const obj2 = AppAnalyticsUtils;
                                                                    const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                                    track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                                                    const obj3 = { step: -1, skipped, is_final_step: false, in_onboarding: true };
                                                                    const track2 = AnalyticsUtilsDefault.track;
                                                                    const GUILD_ONBOARDING_STEP_COMPLETED = authStore3.GUILD_ONBOARDING_STEP_COMPLETED;
                                                                    AnalyticsUtilsDefault;
                                                                    const obj4 = AppAnalyticsUtils;
                                                                    const merged1 = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
                                                                    track2(GUILD_ONBOARDING_STEP_COMPLETED, obj3);
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                  class Mt {
                                                    constructor() {
                                                      obj = { step: currentPromptIdx, options_selected: closure_1_16.length, skipped: 0 === closure_1_16.length, back: false, in_onboarding: true, is_final_step: false };
                                                      const track = AnalyticsUtilsDefault.track;
                                                      const GUILD_ONBOARDING_STEP_COMPLETED = authStore3.GUILD_ONBOARDING_STEP_COMPLETED;
                                                      AnalyticsUtilsDefault;
                                                      const obj2 = AppAnalyticsUtils;
                                                      const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                      track(GUILD_ONBOARDING_STEP_COMPLETED, obj);
                                                      if (currentPromptIdx < prompts.length - 1) {
                                                        const obj3 = { step: currentPromptIdx + 1, required: prompts[currentPromptIdx + 1].required };
                                                        const track2 = AnalyticsUtilsDefault.track;
                                                        const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                        AnalyticsUtilsDefault;
                                                        const tmp5Result = AppAnalyticsUtils;
                                                        const merged1 = Object.assign(tmp5Result.collectGuildAnalyticsMetadata(guildId));
                                                        track2(GUILD_ONBOARDING_STEP_VIEWED, obj3);
                                                      }
                                                      if (currentPromptIdx + 1 < prompts.length) {
                                                        const obj4 = { currentPrompt: currentPromptIdx + 1 };
                                                        navigation.push(stateFromStores2.PROMPT, obj4);
                                                      } else {
                                                        const tmp5Result2 = GuildOnboardingUtils;
                                                        if (tmp5Result2.showRulesInOnboarding(stateFromStores2, stateFromStores)) {
                                                          navigation.push(stateFromStores2.RULES);
                                                        }
                                                      }
                                                    }
                                                  }
                                                  cResult[62] = currentPromptIdx;
                                                  cResult[63] = stateFromStores2;
                                                  cResult[64] = guildId;
                                                  cResult[65] = navigation;
                                                  cResult[66] = prompts;
                                                  cResult[67] = stateFromStores;
                                                  cResult[68] = stateFromStoresArray.length;
                                                  cResult[69] = Mt;
                                                  tmp77 = Mt;
                                                }
                                              }
                                              class Gt {
                                                constructor() {
                                                  if (0 === currentPromptIdx) {
                                                    obj = { step: 0, required };
                                                    const track = AnalyticsUtilsDefault.track;
                                                    const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                    AnalyticsUtilsDefault;
                                                    const obj2 = AppAnalyticsUtils;
                                                    const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                    track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                                  }
                                                }
                                              }
                                              const items12 = [guildId, prompts.length > 0 && prompts[0].required, currentPromptIdx];
                                              cResult[57] = currentPromptIdx;
                                              cResult[58] = prompts.length > 0 && prompts[0].required;
                                              class Et {
                                                constructor() {
                                                  if (isFirstOpen) {
                                                    obj = { step: -1, required: true };
                                                    const track = AnalyticsUtilsDefault.track;
                                                    const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                    AnalyticsUtilsDefault;
                                                    const obj2 = AppAnalyticsUtils;
                                                    const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                    track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                                    const obj3 = { step: -1, skipped, is_final_step: false, in_onboarding: true };
                                                    const track2 = AnalyticsUtilsDefault.track;
                                                    const GUILD_ONBOARDING_STEP_COMPLETED = authStore3.GUILD_ONBOARDING_STEP_COMPLETED;
                                                    AnalyticsUtilsDefault;
                                                    const obj4 = AppAnalyticsUtils;
                                                    const merged1 = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
                                                    track2(GUILD_ONBOARDING_STEP_COMPLETED, obj3);
                                                  }
                                                }
                                              }
                                              cResult[59] = guildId;
                                              cResult[61] = items12;
                                              tmp59 = items12;
                                              tmp58 = Gt;
                                            }
                                          }
                                          class Ot {
                                            constructor() {
                                              const tmp = isFirstOpen || skipped;
                                              if (!tmp) {
                                                onClose();
                                              }
                                            }
                                          }
                                          const items13 = [, prompts.length > 0, onClose];
                                          cResult[52] = prompts.length > 0;
                                          cResult[53] = onClose;
                                          cResult[54] = isFirstOpen;
                                          class Et {
                                            constructor() {
                                              if (isFirstOpen) {
                                                obj = { step: -1, required: true };
                                                const track = AnalyticsUtilsDefault.track;
                                                const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                                AnalyticsUtilsDefault;
                                                const obj2 = AppAnalyticsUtils;
                                                const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                                track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                                const obj3 = { step: -1, skipped, is_final_step: false, in_onboarding: true };
                                                const track2 = AnalyticsUtilsDefault.track;
                                                const GUILD_ONBOARDING_STEP_COMPLETED = authStore3.GUILD_ONBOARDING_STEP_COMPLETED;
                                                AnalyticsUtilsDefault;
                                                const obj4 = AppAnalyticsUtils;
                                                const merged1 = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
                                                track2(GUILD_ONBOARDING_STEP_COMPLETED, obj3);
                                              }
                                            }
                                          }
                                          cResult[55] = Ot;
                                          tmp55 = items13;
                                          tmp54 = Ot;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              const items14 = [, , , , , , ];
                              class H {
                                constructor() {
                                  return useReducedMotion.useReducedMotion;
                                }
                              }
                              items14[1] = isFirstOpen;
                              items14[3] = tmp17;
                              items14[4] = onClose;
                              items14[5] = tmp22;
                              items14[6] = guildId;
                              cResult[44] = tmp22;
                              cResult[45] = guildId;
                              class Et {
                                constructor() {
                                  if (isFirstOpen) {
                                    obj = { step: -1, required: true };
                                    const track = AnalyticsUtilsDefault.track;
                                    const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                                    AnalyticsUtilsDefault;
                                    const obj2 = AppAnalyticsUtils;
                                    const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                                    track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                                    const obj3 = { step: -1, skipped, is_final_step: false, in_onboarding: true };
                                    const track2 = AnalyticsUtilsDefault.track;
                                    const GUILD_ONBOARDING_STEP_COMPLETED = authStore3.GUILD_ONBOARDING_STEP_COMPLETED;
                                    AnalyticsUtilsDefault;
                                    const obj4 = AppAnalyticsUtils;
                                    const merged1 = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
                                    track2(GUILD_ONBOARDING_STEP_COMPLETED, obj3);
                                  }
                                }
                              }
                              cResult[46] = tmp17;
                              cResult[48] = onClose;
                              cResult[49] = isFirstOpen;
                              cResult[50] = sharedValue;
                              cResult[51] = items14;
                              tmp52 = items14;
                            }
                          }
                        }
                      }
                      class H {
                        constructor() {
                          return useReducedMotion.useReducedMotion;
                        }
                      }
                      cResult[39] = prompts.length > 0;
                      cResult[40] = onClose;
                      cResult[41] = isFirstOpen;
                      cResult[42] = sharedValue;
                      class Et {
                        constructor() {
                          if (isFirstOpen) {
                            obj = { step: -1, required: true };
                            const track = AnalyticsUtilsDefault.track;
                            const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                            AnalyticsUtilsDefault;
                            const obj2 = AppAnalyticsUtils;
                            const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                            track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                            const obj3 = { step: -1, skipped, is_final_step: false, in_onboarding: true };
                            const track2 = AnalyticsUtilsDefault.track;
                            const GUILD_ONBOARDING_STEP_COMPLETED = authStore3.GUILD_ONBOARDING_STEP_COMPLETED;
                            AnalyticsUtilsDefault;
                            const obj4 = AppAnalyticsUtils;
                            const merged1 = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
                            track2(GUILD_ONBOARDING_STEP_COMPLETED, obj3);
                          }
                        }
                      }
                      cResult[43] = tmp51;
                      tmp50 = tmp51;
                    }
                  }
                }
                const items15 = [, , , ];
                class H {
                  constructor() {
                    return useReducedMotion.useReducedMotion;
                  }
                }
                items15[1] = prompts.length > 0;
                items15[3] = isFirstOpen;
                cResult[33] = guildId;
                cResult[34] = prompts.length > 0;
                cResult[35] = stateFromStores;
                class Et {
                  constructor() {
                    if (isFirstOpen) {
                      obj = { step: -1, required: true };
                      const track = AnalyticsUtilsDefault.track;
                      const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                      AnalyticsUtilsDefault;
                      const obj2 = AppAnalyticsUtils;
                      const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                      track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                      const obj3 = { step: -1, skipped, is_final_step: false, in_onboarding: true };
                      const track2 = AnalyticsUtilsDefault.track;
                      const GUILD_ONBOARDING_STEP_COMPLETED = authStore3.GUILD_ONBOARDING_STEP_COMPLETED;
                      AnalyticsUtilsDefault;
                      const obj4 = AppAnalyticsUtils;
                      const merged1 = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
                      track2(GUILD_ONBOARDING_STEP_COMPLETED, obj3);
                    }
                  }
                }
                cResult[37] = items15;
              }
            }
            class Et {
              constructor() {
                if (isFirstOpen) {
                  obj = { step: -1, required: true };
                  const track = AnalyticsUtilsDefault.track;
                  const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
                  AnalyticsUtilsDefault;
                  const obj2 = AppAnalyticsUtils;
                  const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
                  track(GUILD_ONBOARDING_STEP_VIEWED, obj);
                  const obj3 = { step: -1, skipped, is_final_step: false, in_onboarding: true };
                  const track2 = AnalyticsUtilsDefault.track;
                  const GUILD_ONBOARDING_STEP_COMPLETED = authStore3.GUILD_ONBOARDING_STEP_COMPLETED;
                  AnalyticsUtilsDefault;
                  const obj4 = AppAnalyticsUtils;
                  const merged1 = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
                  track2(GUILD_ONBOARDING_STEP_COMPLETED, obj3);
                }
              }
            }
            cResult[29] = guildId;
            cResult[30] = prompts.length > 0;
            cResult[31] = isFirstOpen;
            cResult[32] = Et;
            tmp47 = Et;
          }
        }
      }
      let tmp36 = currentPromptIdx + 1 >= prompts.length;
      if (tmp36) {
        const tmpResult24 = tmp(tmp2[30]);
        tmp36 = !tmpResult24.showRulesInOnboarding(stateFromStores2, stateFromStores);
      }
      cResult[19] = currentPromptIdx;
      cResult[21] = prompts.length;
      cResult[22] = stateFromStores;
      cResult[23] = tmp36;
      tmp35 = tmp36;
    }
    function ot() {
      let onboardingResponsesForPrompt;
      if (null != currentPrompt) {
        onboardingResponsesForPrompt = GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, tmp.id);
      } else {
        onboardingResponsesForPrompt = [];
      }
      return onboardingResponsesForPrompt;
    }
    tmp32[0] = guildId;
    tmp32[1] = prompts[currentPromptIdx];
    cResult[15] = prompts[currentPromptIdx];
    cResult[16] = guildId;
    cResult[17] = ot;
    cResult[18] = tmp32;
    tmp31 = tmp32;
    tmp30 = ot;
  }
  class X {
    constructor() {
      obj = GuildOnboardingActionCreatorsDefault;
      obj.completeOnboarding(guildId, prompts);
    }
  }
  cResult[8] = guildId;
  cResult[9] = prompts;
  cResult[10] = X;
  tmp22 = X;
}) : ((guildId) => {
  let O2bQlD;
  let Text3;
  let View;
  let backShouldLeaveGuild;
  let closure_17;
  let format;
  let intl2;
  let intl3;
  let isFirstOpen;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let items20;
  let items21;
  let items22;
  let items23;
  let items24;
  let items25;
  let obj13;
  let obj22;
  let obj27;
  let obj28;
  let onClose;
  let selectOption;
  let str;
  let tmp37Result;
  guildId = guildId.guildId;
  const currentPromptIdx = guildId.currentPromptIdx;
  const prompts = guildId.prompts;
  ({ selectOption, onClose } = guildId);
  ({ isFirstOpen, backShouldLeaveGuild } = guildId);
  isFirstOpen = undefined;
  navigation = undefined;
  skipped = undefined;
  let closure_11;
  let sharedValue;
  let callback;
  let stateFromStores2;
  let stateFromStoresArray;
  constants2 = undefined;
  let closure_18;
  let guildSplashURL;
  let required;
  const landingAnimation = guildId.landingAnimation;
  let tmp = closure_22();
  const tmp2 = guildId;
  const tmp3 = prompts;
  obj = guildId(prompts[25]);
  let items = [navigation];
  const stateFromStores = obj.useStateFromStores(items, () => MemberVerificationFormStore.getRulesPrompt(guildId));
  let obj2 = guildId(prompts[25]);
  const items1 = [isFirstOpen];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => isFirstOpen.useReducedMotion);
  const bottom = currentPromptIdx(prompts[26])().bottom;
  let obj3 = guildId(prompts[25]);
  const items2 = [callback];
  const tmp8 = obj3.useStateFromStores(items2, () => GuildOnboardingPromptsStore.getOnboardingConnections(guildId)).length > 0;
  let closure_7 = tmp8;
  const tmp7 = callback;
  if (isFirstOpen) {
    isFirstOpen = 0 === currentPromptIdx;
  }
  if (isFirstOpen) {
    isFirstOpen = !tmp8;
  }
  const tmp2Result = tmp2(tmp3[27]);
  navigation = tmp2Result.useNavigation();
  skipped = tmp10;
  const tmp11 = prompts[currentPromptIdx];
  closure_11 = tmp11;
  const tmp2Result12 = tmp2(tmp3[28]);
  sharedValue = tmp2Result12.useSharedValue(!isFirstOpen);
  const items3 = [guildId, prompts];
  callback = stateFromStores.useCallback(() => {
    obj = GuildOnboardingActionCreatorsDefault;
    obj.completeOnboarding(guildId, prompts);
  }, items3);
  const items4 = [closure_11];
  const tmp2Result13 = tmp2(tmp3[25]);
  stateFromStores2 = tmp2Result13.useStateFromStores(items4, () => GuildStore.getGuild(guildId));
  const items5 = [tmp7];
  const items6 = [guildId, tmp11];
  const tmp2Result14 = tmp2(tmp3[25]);
  stateFromStoresArray = tmp2Result14.useStateFromStoresArray(items5, () => {
    let onboardingResponsesForPrompt;
    if (null != closure_11) {
      onboardingResponsesForPrompt = GuildOnboardingPromptsStore.getOnboardingResponsesForPrompt(guildId, tmp.id);
    } else {
      onboardingResponsesForPrompt = [];
    }
    return onboardingResponsesForPrompt;
  }, items6);
  let tmp15 = 0 === stateFromStoresArray.length;
  if (tmp15) {
    required = undefined;
    if (tmp11 != null) {
      required = tmp11.required;
    }
    tmp15 = required;
  }
  required = tmp15;
  let tmp18 = currentPromptIdx + 1 >= prompts.length;
  if (tmp18) {
    const tmp2Result15 = tmp2(tmp3[30]);
    tmp18 = !tmp2Result15.showRulesInOnboarding(stateFromStores2, stateFromStores);
  }
  constants2 = tmp18;
  const tmp19 = onClose(stateFromStores.useState(currentPromptIdx(tmp3[17]).unsafe_rawColors.PRIMARY_800), 2);
  closure_18 = tmp19[1];
  guildSplashURL = null;
  const first = tmp19[0];
  if (null != stateFromStores2) {
    let obj4 = { id: null, splash: null, size: 400 * currentPromptIdx(tmp3[32])() };
    ({ id: obj10.id, splash: obj10.splash } = stateFromStores2);
    const getGuildSplashURL = currentPromptIdx(tmp3[31]).getGuildSplashURL;
    let num = 400;
    currentPromptIdx(tmp3[31]);
    guildSplashURL = getGuildSplashURL(obj4);
  }
  const items7 = [guildSplashURL];
  const effect = obj6.useEffect(() => {
    if (null != guildSplashURL) {
      const promise = getBackgroundGradientColor(tmp);
      promise.then((result) => {
        closure_1_18(result);
      });
    }
  }, items7);
  const items8 = [guildId, tmp10, stateFromStores, isFirstOpen];
  const effect1 = obj6.useEffect(() => {
    if (isFirstOpen) {
      obj = { step: -1, required: true };
      const track = AnalyticsUtilsDefault.track;
      const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
      AnalyticsUtilsDefault;
      const obj2 = AppAnalyticsUtils;
      const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
      track(GUILD_ONBOARDING_STEP_VIEWED, obj);
      const obj3 = { step: -1, skipped, is_final_step: false, in_onboarding: true };
      const track2 = AnalyticsUtilsDefault.track;
      const GUILD_ONBOARDING_STEP_COMPLETED = authStore3.GUILD_ONBOARDING_STEP_COMPLETED;
      AnalyticsUtilsDefault;
      const obj4 = AppAnalyticsUtils;
      const merged1 = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
      track2(GUILD_ONBOARDING_STEP_COMPLETED, obj3);
    }
  }, items8);
  const items9 = [sharedValue, isFirstOpen, tmp10, tmp8, onClose, callback, guildId];
  const effect2 = obj6.useEffect(() => {
    if (isFirstOpen) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        if (skipped) {
          const result = sharedValue.set(true);
        } else {
          onClose();
          callback();
        }
      }, 2000);
    }
  }, items9);
  const items10 = [isFirstOpen, tmp10, onClose];
  const effect3 = obj6.useEffect(() => {
    const tmp = isFirstOpen || skipped;
    if (!tmp) {
      onClose();
    }
  }, items10);
  required = tmp27;
  const items11 = [guildId, tmp10 && prompts[0].required, currentPromptIdx];
  const effect4 = obj6.useEffect(() => {
    if (0 === currentPromptIdx) {
      obj = { step: 0, required };
      const track = AnalyticsUtilsDefault.track;
      const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
      AnalyticsUtilsDefault;
      const obj2 = AppAnalyticsUtils;
      const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
      track(GUILD_ONBOARDING_STEP_VIEWED, obj);
    }
  }, items11);
  function at() {
    let Easing;
    let Easing2;
    let items;
    let obj5;
    let withTiming2;
    let num = 1;
    if (sharedValue.get()) {
      num = 0;
    }
    const obj2 = { duration: 300, easing: Easing.out(ReanimatedRexport.Easing.ease) };
    const withTiming = timing.withTiming;
    timing;
    Easing = ReanimatedRexport.Easing;
    let num2 = 0;
    const withTimingResult = withTiming(num, obj2);
    if (!stateFromStores1) {
      num2 = 0;
      if (sharedValue.get()) {
        num2 = -80;
      }
    }
    const obj3 = { opacity: withTimingResult, transform: items };
    const obj4 = { translateY: withTiming2(num2, obj5) };
    obj5 = { duration: 300, easing: Easing2.out(ReanimatedRexport.Easing.ease) };
    withTiming2 = timing.withTiming;
    timing;
    Easing2 = ReanimatedRexport.Easing;
    items = [obj4];
    return obj3;
  }
  const tmp2Result16 = tmp2(tmp3[28]);
  let obj5 = { showPrompts: sharedValue, withTiming: tmp2(tmp3[35]).withTiming, Easing: tmp2(tmp3[28]).Easing, useReducedMotion: stateFromStores1 };
  at.__closure = obj5;
  at.__workletHash = 5060659572395;
  at.__initData = __initData5;
  const animatedStyle = tmp2Result16.useAnimatedStyle(at);
  function nt() {
    let Easing;
    let Easing2;
    let items;
    let obj5;
    let withDelay2;
    let withTiming2;
    let num = 1;
    if (sharedValue.get()) {
      num = 0;
    }
    const withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    const obj2 = { duration: 300, easing: Easing.out(ReanimatedRexport.Easing.ease) };
    const withTiming = timing.withTiming;
    timing;
    Easing = ReanimatedRexport.Easing;
    let num2 = 0;
    const withDelayResult = withDelay(200, withTiming(num, obj2));
    if (!stateFromStores1) {
      num2 = 0;
      if (sharedValue.get()) {
        num2 = -80;
      }
    }
    const obj3 = { opacity: withDelayResult, transform: items };
    const obj4 = { translateY: withDelay2(200, withTiming2(num2, obj5)) };
    withDelay2 = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    obj5 = { duration: 300, easing: Easing2.out(ReanimatedRexport.Easing.ease) };
    withTiming2 = timing.withTiming;
    timing;
    Easing2 = ReanimatedRexport.Easing;
    items = [obj4];
    return obj3;
  }
  const tmp2Result17 = tmp2(tmp3[28]);
  nt.__closure = { showPrompts: sharedValue, withDelay: tmp2(tmp3[28]).withDelay, withTiming: tmp2(tmp3[35]).withTiming, Easing: tmp2(tmp3[28]).Easing, useReducedMotion: stateFromStores1 };
  nt.__workletHash = 10952952791537;
  nt.__initData = __initData6;
  ({ showPrompts: sharedValue, withDelay: tmp2(tmp3[28]).withDelay, withTiming: tmp2(tmp3[35]).withTiming, Easing: tmp2(tmp3[28]).Easing, useReducedMotion: stateFromStores1 });
  const animatedStyle1 = tmp2Result17.useAnimatedStyle(nt);
  function ot() {
    let Easing;
    let obj2;
    let withDelay;
    let withTiming;
    let num = 1;
    if (sharedValue.get()) {
      num = 0;
    }
    obj = { opacity: withDelay(200, withTiming(num, obj2)) };
    withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    obj2 = { duration: 300, easing: Easing.out(ReanimatedRexport.Easing.ease) };
    withTiming = timing.withTiming;
    timing;
    Easing = ReanimatedRexport.Easing;
    return obj;
  }
  const tmp2Result18 = tmp2(tmp3[28]);
  ot.__closure = { showPrompts: sharedValue, withDelay: tmp2(tmp3[28]).withDelay, withTiming: tmp2(tmp3[35]).withTiming, Easing: tmp2(tmp3[28]).Easing };
  ot.__workletHash = 10114471325675;
  ot.__initData = __initData7;
  ({ showPrompts: sharedValue, withDelay: tmp2(tmp3[28]).withDelay, withTiming: tmp2(tmp3[35]).withTiming, Easing: tmp2(tmp3[28]).Easing });
  const animatedStyle2 = tmp2Result18.useAnimatedStyle(ot);
  function rt() {
    let Easing;
    let obj2;
    let withDelay;
    let withTiming;
    let num = 1;
    if (sharedValue.get()) {
      num = 0;
    }
    obj = { opacity: withDelay(200, withTiming(num, obj2)) };
    withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    obj2 = { duration: 300, easing: Easing.out(ReanimatedRexport.Easing.ease) };
    withTiming = timing.withTiming;
    timing;
    Easing = ReanimatedRexport.Easing;
    return obj;
  }
  const tmp2Result19 = tmp2(tmp3[28]);
  rt.__closure = { showPrompts: sharedValue, withDelay: tmp2(tmp3[28]).withDelay, withTiming: tmp2(tmp3[35]).withTiming, Easing: tmp2(tmp3[28]).Easing };
  rt.__workletHash = 4072878142282;
  rt.__initData = __initData8;
  ({ showPrompts: sharedValue, withDelay: tmp2(tmp3[28]).withDelay, withTiming: tmp2(tmp3[35]).withTiming, Easing: tmp2(tmp3[28]).Easing });
  const animatedStyle3 = tmp2Result19.useAnimatedStyle(rt);
  function st() {
    let Easing;
    let Easing2;
    let items;
    let num2;
    let obj5;
    let withDelay2;
    let withTiming2;
    let num = 0;
    if (sharedValue.get()) {
      num = 1;
    }
    const withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    const obj2 = { duration: 300, easing: Easing.out(ReanimatedRexport.Easing.ease) };
    const withTiming = timing.withTiming;
    timing;
    Easing = ReanimatedRexport.Easing;
    const withDelayResult = withDelay(600, withTiming(num, obj2));
    if (stateFromStores1) {
      num2 = 0;
    } else {
      num2 = 80;
    }
    const obj3 = { opacity: withDelayResult, transform: items };
    const obj4 = { translateY: withDelay2(600, withTiming2(num2, obj5)) };
    withDelay2 = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    obj5 = { duration: 300, easing: Easing2.out(ReanimatedRexport.Easing.ease) };
    withTiming2 = timing.withTiming;
    timing;
    Easing2 = ReanimatedRexport.Easing;
    items = [obj4];
    return obj3;
  }
  const tmp2Result20 = tmp2(tmp3[28]);
  st.__closure = { showPrompts: sharedValue, withDelay: tmp2(tmp3[28]).withDelay, withTiming: tmp2(tmp3[35]).withTiming, Easing: tmp2(tmp3[28]).Easing, useReducedMotion: stateFromStores1 };
  st.__workletHash = 6988420878955;
  st.__initData = __initData9;
  const items12 = [navigation, currentPromptIdx, stateFromStoresArray, guildId, prompts, onClose, backShouldLeaveGuild, tmp8];
  ({ showPrompts: sharedValue, withDelay: tmp2(tmp3[28]).withDelay, withTiming: tmp2(tmp3[35]).withTiming, Easing: tmp2(tmp3[28]).Easing, useReducedMotion: stateFromStores1 });
  const animatedStyle4 = tmp2Result20.useAnimatedStyle(st);
  const layoutEffect = obj6.useLayoutEffect(() => {
    let headerCloseButton;
    let step;
    if (0 === currentPromptIdx) {
      if (!closure_7) {
        obj = NavigatorHeader;
        headerCloseButton = obj.getHeaderCloseButton(() => {
          obj = { step: 0, skipped: true, back: false, options_selected: 0, in_onboarding: true, is_final_step: false };
          const track = currentPromptIdx(prompts[33]).track;
          const GUILD_ONBOARDING_STEP_COMPLETED = required.GUILD_ONBOARDING_STEP_COMPLETED;
          currentPromptIdx(prompts[33]);
          const obj2 = guildId(prompts[34]);
          const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(closure_1_0));
          track(GUILD_ONBOARDING_STEP_COMPLETED, obj);
          if (backShouldLeaveGuild) {
            channel = channel.getChannel(sharedValue.getLastSelectedChannelId());
            if (null != channel) {
              if (channel.guild_id !== closure_1_0) {
                const tmp3Result = guildId(prompts[14]);
                tmp3Result.transitionTo(closure_18.CHANNEL(channel.guild_id, channel.id));
              }
              onClose();
            }
            const tmp3Result2 = guildId(prompts[14]);
            tmp3Result2.transitionTo(closure_18.ME, { navigationReplace: true });
          } else {
            onClose();
          }
        });
      }
      let obj4 = { headerLeft: headerCloseButton };
      navigation.setOptions(obj4);
    }
    if (0 === currentPromptIdx) {
      let headerBackButton;
      if (closure_7) {
        let obj3 = NavigatorHeader;
        headerBackButton = obj3.getHeaderBackButton(() => {
          obj = { step: 0, skipped: false, back: true, options_selected: stateFromStoresArray.length, in_onboarding: true, is_final_step: false };
          const track = currentPromptIdx(prompts[33]).track;
          const GUILD_ONBOARDING_STEP_COMPLETED = required.GUILD_ONBOARDING_STEP_COMPLETED;
          currentPromptIdx(prompts[33]);
          const obj2 = guildId(prompts[34]);
          const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(closure_1_0));
          track(GUILD_ONBOARDING_STEP_COMPLETED, obj);
          navigation.pop();
        }, true);
      }
      headerCloseButton = headerBackButton;
    }
    let obj2 = NavigatorHeader;
    headerBackButton = obj2.getHeaderBackButton(() => {
      obj = { step, skipped: false, back: true, options_selected: stateFromStoresArray.length, in_onboarding: true, is_final_step: false };
      const track = currentPromptIdx(prompts[33]).track;
      const GUILD_ONBOARDING_STEP_COMPLETED = required.GUILD_ONBOARDING_STEP_COMPLETED;
      currentPromptIdx(prompts[33]);
      const obj2 = guildId(prompts[34]);
      const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(closure_1_0));
      track(GUILD_ONBOARDING_STEP_COMPLETED, obj);
      const obj3 = { step: step - 1, required: closure_1_2[step - 1].required };
      const track2 = currentPromptIdx(prompts[33]).track;
      const GUILD_ONBOARDING_STEP_VIEWED = required.GUILD_ONBOARDING_STEP_VIEWED;
      currentPromptIdx(prompts[33]);
      const obj4 = guildId(prompts[34]);
      const merged1 = Object.assign(obj4.collectGuildAnalyticsMetadata(closure_1_0));
      track2(GUILD_ONBOARDING_STEP_VIEWED, obj3);
      navigation.pop();
    }, true);
  }, items12);
  const obj12 = { style: tmp.flex, children: items15 };
  const rect = { top: true, bottom: true, style: items13, children: guildSplashURL(View, obj13) };
  items13 = [, ];
  ({ flex: arr16[0], container: arr16[1] } = tmp);
  const SafeAreaPaddingView = tmp2(tmp3[39]).SafeAreaPaddingView;
  obj13 = { style: items14, children: tmp37Result };
  items14 = [tmp.flex, animatedStyle4];
  tmp37Result = null;
  View = tmp6(tmp3[28]).View;
  if (prompts.length > 0) {
    tmp37Result = null;
    if (null != tmp11) {
      handleOnPress = function handleOnPress() {
        if (!required) {
          if (closure_17) {
            navigation.push(stateFromStoresArray.COMPLETED);
          } else {
            obj = { step: currentPromptIdx, options_selected: stateFromStoresArray.length, skipped: 0 === stateFromStoresArray.length, back: false, in_onboarding: true, is_final_step: false };
            const track = AnalyticsUtilsDefault.track;
            const GUILD_ONBOARDING_STEP_COMPLETED = authStore3.GUILD_ONBOARDING_STEP_COMPLETED;
            AnalyticsUtilsDefault;
            const obj2 = AppAnalyticsUtils;
            const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
            track(GUILD_ONBOARDING_STEP_COMPLETED, obj);
            if (currentPromptIdx < prompts.length - 1) {
              const obj3 = { step: currentPromptIdx + 1, required: prompts[currentPromptIdx + 1].required };
              const track2 = AnalyticsUtilsDefault.track;
              const GUILD_ONBOARDING_STEP_VIEWED = authStore3.GUILD_ONBOARDING_STEP_VIEWED;
              AnalyticsUtilsDefault;
              const tmp7Result = AppAnalyticsUtils;
              const merged1 = Object.assign(tmp7Result.collectGuildAnalyticsMetadata(guildId));
              track2(GUILD_ONBOARDING_STEP_VIEWED, obj3);
            }
            if (currentPromptIdx + 1 < prompts.length) {
              const obj4 = { currentPrompt: currentPromptIdx + 1 };
              navigation.push(stateFromStoresArray.PROMPT, obj4);
            } else {
              const tmp7Result2 = GuildOnboardingUtils;
              if (tmp7Result2.showRulesInOnboarding(stateFromStores2, stateFromStores)) {
                navigation.push(stateFromStoresArray.RULES);
              }
            }
          }
        }
      };
      const type = tmp11.type;
      if (stateFromStores2.MULTIPLE_CHOICE === type) {
        const obj14 = { guildId, currentPrompt: tmp11, lastPrompt: tmp18, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
        tmp37Result = tmp37(tmp2(tmp3[37]).MultipleChoicePrompt, obj14);
      } else if (tmp39.DROPDOWN === type) {
        const obj15 = { guildId, currentPrompt: tmp11, lastPrompt: tmp18, currentPromptIndex: currentPromptIdx, numberOfPrompts: prompts.length, selectOption, handleOnPress };
        tmp37Result = tmp37(tmp2(tmp3[37]).DropdownPrompt, obj15);
      } else {
        const tmp2Result21 = tmp2(tmp3[38]);
        tmp2Result21.assertNever(tmp11.type);
      }
    }
  }
  items15 = [guildSplashURL(SafeAreaPaddingView, rect), ];
  const obj17 = { style: items16, pointerEvents: "none", children: items20 };
  items16 = [, ];
  const obj16 = { style: stateFromStores1.absoluteFill, pointerEvents: "none", children: items24 };
  ({ flex: arr19[0], landingOverlay: arr19[1] } = tmp);
  const obj18 = { style: items17, children: items18 };
  items17 = [tmp.landingOverlay, animatedStyle3];
  let tmp37Result2 = null;
  const View2 = tmp6(tmp3[28]).View;
  if (null != guildSplashURL) {
    const obj19 = { splashUrl: guildSplashURL, color: first };
    tmp37Result2 = tmp37(closure_25, obj19);
  }
  items18 = [tmp37Result2, ];
  const obj20 = { style: tmp.darkColorGradient, start: tmp2(tmp3[24]).VerticalGradient.START, end: tmp2(tmp3[24]).VerticalGradient.END, colors: items19 };
  items19 = [, ];
  const tmp6Result2 = currentPromptIdx(tmp3[23]);
  const tmp2Result22 = tmp2(tmp3[19]);
  items19[0] = tmp2Result22.hexWithOpacity(currentPromptIdx(tmp3[17]).unsafe_rawColors.PRIMARY_800, 0.5);
  items19[1] = currentPromptIdx(tmp3[17]).unsafe_rawColors.PRIMARY_800;
  items18[1] = guildSplashURL(tmp6Result2, obj20);
  items20 = [closure_21(View2, obj18), , ];
  const obj21 = { style: items21, children: guildSplashURL(currentPromptIdx(tmp3[40]), obj22) };
  items21 = [tmp.artWrapper, animatedStyle];
  const View3 = tmp6(tmp3[28]).View;
  obj22 = { source: landingAnimation, autoPlay: !stateFromStores1, style: { width: "100%" } };
  items20[1] = guildSplashURL(View3, obj21);
  const obj23 = { style: items22, children: items23 };
  items22 = [tmp.landingBody, animatedStyle1];
  const View4 = tmp6(tmp3[28]).View;
  const obj24 = { style: tmp.subtitle, variant: "text-md/semibold", color: "text-overlay-light", children: format(O2bQlD, { guildName: str }) };
  const Text = tmp2(tmp3[42]).Text;
  const intl = tmp2(tmp3[41]).intl;
  format = intl.format;
  str = undefined;
  O2bQlD = tmp2(tmp3[41]).t.O2bQlD;
  if (stateFromStores2 != null) {
    str = stateFromStores2.name;
  }
  if (str == null) {
    str = "";
  }
  items23 = [guildSplashURL(Text, obj24), ];
  const obj25 = { style: tmp.onboardingTitle, accessibilityRole: "header", variant: "heading-xl/semibold", color: "text-overlay-light", children: intl2.string(tmp2(tmp3[41]).t["Alcl/e"]) };
  const Text2 = tmp2(tmp3[42]).Text;
  intl2 = tmp2(tmp3[41]).intl;
  items23[1] = guildSplashURL(Text2, obj25);
  items20[2] = closure_21(View4, obj23);
  items24 = [closure_21(closure_7, obj17), ];
  const obj26 = { style: items25, pointerEvents: "auto", children: guildSplashURL(Text3, obj27) };
  items25 = [tmp.onboardingPolicy, animatedStyle2, { bottom }];
  const View5 = tmp6(tmp3[28]).View;
  obj27 = { style: tmp.onboardingPolicyText, variant: "heading-sm/normal", color: "text-default", children: intl3.format(tmp2(tmp3[41]).t.kI6UoD, obj28) };
  Text3 = tmp2(tmp3[42]).Text;
  intl3 = tmp2(tmp3[41]).intl;
  obj28 = { privacyLink: constants2.PRIVACY };
  items24[1] = guildSplashURL(View5, obj26);
  items15[1] = closure_21(closure_7, obj16);
  return closure_21(closure_7, obj12);
});
let result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingPrompts.tsx");

export default tmp6;