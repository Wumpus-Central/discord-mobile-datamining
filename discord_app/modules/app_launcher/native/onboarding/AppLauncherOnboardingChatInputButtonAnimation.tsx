// === Module 11872: AppLauncherOnboardingChatInputButtonAnimation ===

// Module 11872 (AppLauncherOnboardingChatInputButtonAnimation)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import timingPresets from "timingPresets" /* 4894 */;
import ButtonConstants from "ButtonConstants" /* 5600 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5920 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 7507 */;
import useAppLauncherOnboardingContentDefault from "useAppLauncherOnboardingContent" /* 11651 */;
import _mod11676 from "module_11676" /* 11676 */;
import _mod11873 from "module_11873" /* 11873 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let channelId;

let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ View: c3, StyleSheet: closure_4 } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles(() => {
  let size1;
  const sum = ButtonConstants.SMALL_BUTTON_HEIGHT + ButtonConstants.SMALL_BUTTON_PADDING + 2;
  const obj = { fakeButton: size, glowMask: size1, glowLottie: { width: "150%", height: "150%", position: "absolute", top: "-25%", left: "-25%", zIndex: 0, opacity: 0.8 }, trinketsLottie: { zIndex: 4, position: "absolute", pointerEvents: "none", width: "175%", height: "175%", top: "-43%", left: "-38%" }, glowAnimation: { pointerEvents: "none" } };
  size = { zIndex: 3, borderWidth: 1.5, borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", width: sum, height: sum, marginLeft: 4 };
  size1 = { zIndex: 1, position: "absolute", borderRadius: nativeDefault.radii.round, top: 0, left: 0, width: sum, height: sum, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginLeft: 4 };
  return obj;
});
class EnteringAnimation {
  constructor() {
    let obj2;
    let obj3;
    const obj = { initialValues: { opacity: 0 }, animations: obj2 };
    obj2 = { opacity: obj3.withTiming(1, timingPresets.timingStandard) };
    obj3 = timing;
    return obj;
  }
}
let obj = { withTiming: timing.withTiming, timingStandard: timingPresets.timingStandard };
EnteringAnimation.__closure = obj;
EnteringAnimation.__workletHash = 2327377243473;
EnteringAnimation.__initData = { code: "function EnteringAnimation_AppLauncherOnboardingChatInputButtonAnimationTsx1(){const{withTiming,timingStandard}=this.__closure;const initialValues={opacity:0};const animations={opacity:withTiming(1,timingStandard)};return{initialValues:initialValues,animations:animations};}" };
class ExitingAnimation {
  constructor() {
    let obj2;
    let obj3;
    const obj = { initialValues: { opacity: 1 }, animations: obj2 };
    obj2 = { opacity: obj3.withTiming(0, timingPresets.timingStandard) };
    obj3 = timing;
    return obj;
  }
}
let obj2 = { withTiming: timing.withTiming, timingStandard: timingPresets.timingStandard };
ExitingAnimation.__closure = obj2;
ExitingAnimation.__workletHash = 1065249287738;
ExitingAnimation.__initData = { code: "function ExitingAnimation_AppLauncherOnboardingChatInputButtonAnimationTsx2(){const{withTiming,timingStandard}=this.__closure;const initialValues={opacity:1};const animations={opacity:withTiming(0,timingStandard)};return{initialValues:initialValues,animations:animations};}" };
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let items2;
  let items3;
  let items4;
  let tmp10;
  let tmp13;
  let tmp15;
  let tmp5;
  let tmp6;
  let useReducedMotion;
  const obj = react2;
  const cResult = obj.c(27);
  channelId = channelId.channelId;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function _() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmpResult4 = ClientThemesOverrides;
  const gradientBottom = tmpResult4.useGradientBottom();
  if (cResult[2] !== channelId) {
    const obj2 = { channelId };
    cResult[2] = channelId;
    cResult[3] = obj2;
    tmp10 = obj2;
  } else {
    tmp10 = cResult[3];
  }
  useAppLauncherOnboardingContentDefault(tmp10);
  if (cResult[4] !== tmp4.glowAnimation) {
    const items1 = [React3.absoluteFill, tmp4.glowAnimation];
    cResult[4] = tmp4.glowAnimation;
    cResult[5] = items1;
    tmp13 = items1;
  } else {
    tmp13 = cResult[5];
  }
  const glowLottie = tmp4.glowLottie;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult5 = _mod11873;
    cResult[6] = tmpResult5;
    tmp15 = tmpResult5;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] === tmp4.glowLottie) {
    let tmp18;
    if (cResult[8] === !stateFromStores) {
      tmp18 = cResult[9];
    }
    if (cResult[10] === gradientBottom) {
      let tmp20;
      let tmp24;
      if (cResult[11] === tmp4.glowMask) {
        tmp20 = cResult[12];
      }
      if (cResult[13] !== tmp4.fakeButton) {
        const obj3 = { collapsable: false, style: tmp4.fakeButton };
        const tmp27 = metroRequire(_false, obj3);
        cResult[13] = tmp4.fakeButton;
        cResult[14] = tmp27;
        tmp24 = tmp27;
      } else {
        tmp24 = cResult[14];
      }
      if (cResult[15] === tmp24) {
        if (cResult[16] === tmp13) {
          if (cResult[17] === tmp18) {
            let tmp28;
            let tmp33;
            if (cResult[18] === tmp20) {
              tmp28 = cResult[19];
            }
            const _Symbol = Symbol;
            const trinketsLottie = tmp4.trinketsLottie;
            if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
              const tmpResult6 = _mod11676;
              cResult[20] = tmpResult6;
              tmp33 = tmpResult6;
            } else {
              tmp33 = cResult[20];
            }
            if (cResult[21] === tmp4.trinketsLottie) {
              let tmp36;
              if (cResult[22] === !stateFromStores) {
                tmp36 = cResult[23];
              }
              if (cResult[24] === tmp28) {
                let tmp39;
                if (cResult[25] === tmp36) {
                  tmp39 = cResult[26];
                }
                return tmp39;
              }
              const obj4 = { children: items2 };
              items2 = [tmp28, tmp36];
              const tmp42 = metroImportDefault(metroImportAll, obj4);
              cResult[24] = tmp28;
              cResult[25] = tmp36;
              cResult[26] = tmp42;
              tmp39 = tmp42;
            }
            const obj5 = { collapsable: false, style: trinketsLottie, source: tmp33, autoPlay: !stateFromStores };
            const tmp38 = metroRequire(LottieAnimationViewDefault, obj5);
            cResult[21] = tmp4.trinketsLottie;
            cResult[22] = !stateFromStores;
            cResult[23] = tmp38;
            tmp36 = tmp38;
          }
        }
      }
      const obj6 = { entering: EnteringAnimation, exiting: ExitingAnimation, style: tmp13, collapsable: false, children: items3 };
      items3 = [tmp18, tmp20, tmp24];
      const tmp32 = metroImportDefault(ReanimatedRexportDefault.View, obj6);
      cResult[15] = tmp24;
      cResult[16] = tmp13;
      cResult[17] = tmp18;
      cResult[18] = tmp20;
      cResult[19] = tmp32;
      tmp28 = tmp32;
    }
    const obj7 = { collapsable: false, style: items4 };
    items4 = [tmp4.glowMask, gradientBottom];
    const tmp23 = metroRequire(_false, obj7);
    cResult[10] = gradientBottom;
    cResult[11] = tmp4.glowMask;
    cResult[12] = tmp23;
    tmp20 = tmp23;
  }
  const tmp19 = metroRequire(LottieAnimationViewDefault, { collapsable: false, style: glowLottie, source: tmp15, autoPlay: !stateFromStores });
  cResult[7] = tmp4.glowLottie;
  cResult[8] = !stateFromStores;
  cResult[9] = tmp19;
  tmp18 = tmp19;
}) : ((channelId) => {
  let items1;
  let items2;
  let items3;
  let items4;
  let useReducedMotion;
  channelId = channelId.channelId;
  const tmp = closure_9();
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = ClientThemesOverrides;
  const gradientBottom = obj2.useGradientBottom();
  useAppLauncherOnboardingContentDefault({ channelId });
  const obj4 = { entering: EnteringAnimation, exiting: ExitingAnimation, style: items1, collapsable: false, children: items2 };
  items1 = [React3.absoluteFill, tmp.glowAnimation];
  const obj3 = { children: items4 };
  const View = ReanimatedRexportDefault.View;
  const obj5 = { collapsable: false, style: tmp.glowLottie, source: _mod11873, autoPlay: !stateFromStores };
  const tmp5 = LottieAnimationViewDefault;
  items2 = [metroRequire(tmp5, obj5), , ];
  const obj6 = { collapsable: false, style: items3 };
  items3 = [tmp.glowMask, gradientBottom];
  items2[1] = metroRequire(_false, obj6);
  const obj7 = { collapsable: false, style: tmp.fakeButton };
  items2[2] = metroRequire(_false, obj7);
  items4 = [metroImportDefault(View, obj4), ];
  const obj8 = { collapsable: false, style: tmp.trinketsLottie, source: _mod11676, autoPlay: !stateFromStores };
  const tmp6 = LottieAnimationViewDefault;
  items4[1] = metroRequire(tmp6, obj8);
  return metroImportDefault(metroImportAll, obj3);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/AppLauncherOnboardingChatInputButtonAnimation.tsx");

export const APP_LAUNCHER_ONBOARDING_CHAT_INPUT_BUTTON_ANIMATION_DURATION_MS = 7000;
export const AppLauncherOnboardingChatInputButtonAnimation = tmp5;