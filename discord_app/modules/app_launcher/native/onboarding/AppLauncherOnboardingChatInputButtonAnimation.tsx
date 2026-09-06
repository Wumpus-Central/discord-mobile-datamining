// discord_app/modules/app_launcher/native/onboarding/AppLauncherOnboardingChatInputButtonAnimation.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import ButtonConstants from "../../../../design/components/Button/native/ButtonConstants.native.tsx";
import LottieAnimationViewDefault from "../../../../components_native/common/LottieAnimationView.tsx";
import ClientThemesOverrides from "../../../client_themes/native/ClientThemesOverrides.tsx";
import useAppLauncherOnboardingContentDefault from "hooks/useAppLauncherOnboardingContent.tsx";
import _mod12062 from "../../../../../_runtime/metro/12062__.js";
import _mod12243 from "../../../../../_runtime/metro/12243__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
let createStyles = fn(4560);
let closure_9 = createStyles.createStyles(() => {
  const sum = ButtonConstants.SMALL_BUTTON_HEIGHT + ButtonConstants.SMALL_BUTTON_PADDING + 2;
  const obj = { fakeButton: null, glowMask: null, glowLottie: null, trinketsLottie: null, glowAnimation: null };
  const size = {
    zIndex: 3,
    borderWidth: 1.5,
    borderColor: nativeDefault.colors.BACKGROUND_BRAND,
    borderRadius: nativeDefault.radii.round,
    alignItems: "center",
    justifyContent: "center",
    width: sum,
    height: sum,
    marginLeft: 4,
  };
  obj.fakeButton = size;
  const size1 = {
    zIndex: 1,
    position: "absolute",
    borderRadius: nativeDefault.radii.round,
    top: 0,
    left: 0,
    width: sum,
    height: sum,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    marginLeft: 4,
  };
  obj.glowMask = size1;
  obj.glowLottie = {
    width: "150%",
    height: "150%",
    position: "absolute",
    top: "-25%",
    left: "-25%",
    zIndex: 0,
    opacity: 0.8,
  };
  obj.trinketsLottie = {
    zIndex: 4,
    position: "absolute",
    pointerEvents: "none",
    width: "175%",
    height: "175%",
    top: "-43%",
    left: "-38%",
  };
  obj.glowAnimation = { pointerEvents: "none" };
  return obj;
});
class EnteringAnimation {
  constructor() {
    obj = { initialValues: { opacity: 0 }, animations: null };
    obj = { opacity: null };
    obj3 = closure_0(closure_2[7]);
    obj.opacity = obj3.withTiming(1, closure_0(closure_2[8]).timingStandard);
    obj.animations = obj;
    return obj;
  }
}
createStyles = { withTiming: fn(4561).withTiming, timingStandard: fn(4564).timingStandard };
EnteringAnimation.__closure = createStyles;
EnteringAnimation.__workletHash = 2327377243473;
EnteringAnimation.__initData = {
  code: "function EnteringAnimation_AppLauncherOnboardingChatInputButtonAnimationTsx1(){const{withTiming,timingStandard}=this.__closure;const initialValues={opacity:0};const animations={opacity:withTiming(1,timingStandard)};return{initialValues:initialValues,animations:animations};}",
};
class ExitingAnimation {
  constructor() {
    obj = { initialValues: { opacity: 1 }, animations: null };
    obj = { opacity: null };
    obj3 = closure_0(closure_2[7]);
    obj.opacity = obj3.withTiming(0, closure_0(closure_2[8]).timingStandard);
    obj.animations = obj;
    return obj;
  }
}
createStyles = { withTiming: fn(4561).withTiming, timingStandard: fn(4564).timingStandard };
ExitingAnimation.__closure = createStyles;
ExitingAnimation.__workletHash = 1065249287738;
ExitingAnimation.__initData = {
  code: "function ExitingAnimation_AppLauncherOnboardingChatInputButtonAnimationTsx2(){const{withTiming,timingStandard}=this.__closure;const initialValues={opacity:1};const animations={opacity:withTiming(0,timingStandard)};return{initialValues:initialValues,animations:animations};}",
};
let size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/onboarding/AppLauncherOnboardingChatInputButtonAnimation.tsx",
);

export const APP_LAUNCHER_ONBOARDING_CHAT_INPUT_BUTTON_ANIMATION_DURATION_MS = 7000;
export const AppLauncherOnboardingChatInputButtonAnimation = function AppLauncherOnboardingChatInputButtonAnimation(
  channelId,
) {
  const tmp = closure_9();
  let obj = initialize;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj1 = ClientThemesOverrides;
  const gradientBottom = obj1.useGradientBottom();
  useAppLauncherOnboardingContentDefault({ channelId: channelId.channelId });
  obj = { children: null };
  obj = { entering: EnteringAnimation, exiting: ExitingAnimation, style: null, collapsable: false, children: null };
  const items1 = [absoluteFill.absoluteFill, tmp.glowAnimation];
  obj.style = items1;
  obj1 = { collapsable: false, style: tmp.glowLottie, source: _mod12243, autoPlay: !stateFromStores };
  const items2 = [timestampProducer(LottieAnimationViewDefault, obj1), ,];
  const obj2 = { collapsable: false, style: null };
  const items3 = [tmp.glowMask, gradientBottom];
  obj2.style = items3;
  items2[1] = timestampProducer(React3, obj2);
  items2[2] = timestampProducer(React3, { collapsable: false, style: tmp.fakeButton });
  obj.children = items2;
  const items4 = [React5(ReanimatedRexportDefault.View, obj)];
  const obj4 = { collapsable: false, style: tmp.trinketsLottie, source: null, autoPlay: null };
  const obj3 = { collapsable: false, style: tmp.fakeButton };
  obj4.source = _mod12062;
  obj4.autoPlay = !stateFromStores;
  items4[1] = timestampProducer(LottieAnimationViewDefault, obj4);
  obj.children = items4;
  return React5(React6, obj);
};
