// === Module 12499: AppLauncherOnboardingChatInputButtonAnimation ===

// Module 12499 (AppLauncherOnboardingChatInputButtonAnimation)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4493 */;
import timing from "timing" /* 4758 */;
import timingPresets from "timingPresets" /* 4761 */;
import ButtonConstants from "ButtonConstants" /* 5192 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5748 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 8119 */;
import useAppLauncherOnboardingContentDefault from "useAppLauncherOnboardingContent" /* 12294 */;
import _mod12319 from "module_12319" /* 12319 */;
import _mod12500 from "module_12500" /* 12500 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4749 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(4757);
let closure_9 = createStyles.createStyles(() => {
  const sum = ButtonConstants.SMALL_BUTTON_HEIGHT + ButtonConstants.SMALL_BUTTON_PADDING + 2;
  const obj = { fakeButton: null, glowMask: null, glowLottie: null, trinketsLottie: null, glowAnimation: null };
  const size = { zIndex: 3, borderWidth: 1.5, borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", width: sum, height: sum, marginLeft: 4 };
  obj.fakeButton = size;
  const size1 = { zIndex: 1, position: "absolute", borderRadius: nativeDefault.radii.round, top: 0, left: 0, width: sum, height: sum, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginLeft: 4 };
  obj.glowMask = size1;
  obj.glowLottie = { width: "150%", height: "150%", position: "absolute", top: "-25%", left: "-25%", zIndex: 0, opacity: 0.8 };
  obj.trinketsLottie = { zIndex: 4, position: "absolute", pointerEvents: "none", width: "175%", height: "175%", top: "-43%", left: "-38%" };
  obj.glowAnimation = { pointerEvents: "none" };
  return obj;
});
class EnteringAnimation {
  constructor() {
    obj = { initialValues: { opacity: 0 }, animations: null };
    obj1 = { opacity: null };
    obj3 = closure_0(closure_2[7]);
    obj1.opacity = obj3.withTiming(1, closure_0(closure_2[8]).timingStandard);
    obj.animations = obj1;
    return obj;
  }
}
EnteringAnimation.__closure = { withTiming: fn(4758).withTiming, timingStandard: fn(4761).timingStandard };
EnteringAnimation.__workletHash = 2327377243473;
EnteringAnimation.__initData = { code: "function EnteringAnimation_AppLauncherOnboardingChatInputButtonAnimationTsx1(){const{withTiming,timingStandard}=this.__closure;const initialValues={opacity:0};const animations={opacity:withTiming(1,timingStandard)};return{initialValues:initialValues,animations:animations};}" };
class ExitingAnimation {
  constructor() {
    obj = { initialValues: { opacity: 1 }, animations: null };
    obj1 = { opacity: null };
    obj3 = closure_0(closure_2[7]);
    obj1.opacity = obj3.withTiming(0, closure_0(closure_2[8]).timingStandard);
    obj.animations = obj1;
    return obj;
  }
}
let obj2 = { withTiming: fn(4758).withTiming, timingStandard: fn(4761).timingStandard };
ExitingAnimation.__closure = { withTiming: fn(4758).withTiming, timingStandard: fn(4761).timingStandard };
ExitingAnimation.__workletHash = 1065249287738;
ExitingAnimation.__initData = { code: "function ExitingAnimation_AppLauncherOnboardingChatInputButtonAnimationTsx2(){const{withTiming,timingStandard}=this.__closure;const initialValues={opacity:1};const animations={opacity:withTiming(0,timingStandard)};return{initialValues:initialValues,animations:animations};}" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/AppLauncherOnboardingChatInputButtonAnimation.tsx");

export const APP_LAUNCHER_ONBOARDING_CHAT_INPUT_BUTTON_ANIMATION_DURATION_MS = 7000;
export const AppLauncherOnboardingChatInputButtonAnimation = function AppLauncherOnboardingChatInputButtonAnimation(channelId) {
  const tmp = closure_9();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const gradientBottom = ClientThemesOverrides.useGradientBottom();
  useAppLauncherOnboardingContentDefault({ channelId: channelId.channelId });
  const obj3 = { children: null };
  const obj4 = { entering: EnteringAnimation, exiting: ExitingAnimation, style: null, collapsable: false, children: null };
  const items1 = [absoluteFill.absoluteFill, tmp.glowAnimation];
  obj4.style = items1;
  const obj5 = { collapsable: false, style: tmp.glowLottie, source: null, autoPlay: null };
  obj5.source = _mod12500;
  obj5.autoPlay = !stateFromStores;
  const items2 = [timestampProducer(LottieAnimationViewDefault, obj5), , ];
  const obj6 = { collapsable: false, style: null };
  const items3 = [tmp.glowMask, gradientBottom];
  obj6.style = items3;
  items2[1] = timestampProducer(React3, obj6);
  items2[2] = timestampProducer(React3, { collapsable: false, style: tmp.fakeButton });
  obj4.children = items2;
  const items4 = [React5(ReanimatedRexportDefault.View, obj4), ];
  const obj8 = { collapsable: false, style: tmp.trinketsLottie, source: null, autoPlay: null };
  const obj7 = { collapsable: false, style: tmp.fakeButton };
  obj8.source = _mod12319;
  obj8.autoPlay = !stateFromStores;
  items4[1] = timestampProducer(LottieAnimationViewDefault, obj8);
  obj3.children = items4;
  return React5(React6, obj3);
};