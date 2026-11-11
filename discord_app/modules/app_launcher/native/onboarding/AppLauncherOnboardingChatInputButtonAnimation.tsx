// discord_app/modules/app_launcher/native/onboarding/AppLauncherOnboardingChatInputButtonAnimation.tsx
import Discord from "../../../../index.native.tsx";
import logAppStart from "../../../debug/logAppStart.tsx";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef1652 from "../../../../../_runtime/metro/01652__.js";
import LottieAnimationViewDefault from "../../../../components_native/common/LottieAnimationView.tsx";
import ButtonConstants from "../../../../design/components/Button/native/ButtonConstants.native.tsx";
import ClientThemesOverrides from "../../../client_themes/native/ClientThemesOverrides.tsx";
import useAppLauncherOnboardingContentDefault from "hooks/useAppLauncherOnboardingContent.tsx";
import _mod13295 from "../../../../../_runtime/metro/13295__.js";
import _mod14542 from "../../../../../_runtime/metro/14542__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault, Fragment: closure_8 } = jsxProd);
const createStyles = fn(5243);
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
let items = [
  {
    code: "(function EnteringAnimation_AppLauncherOnboardingChatInputButtonAnimationTsx1(){let[withTiming,timingStandard]=this.__closure;const initialValues={opacity:0};const animations={opacity:withTiming(1,timingStandard)};return{initialValues:initialValues,animations:animations};})",
  },
  fn(5485).withTiming,
  fn(5488).timingStandard,
];
let closure_129_0;
let closure_129_1;
[tmp5, tmp6, tmp7] = items;
class EnteringAnimation {
  constructor() {
    obj = { initialValues: { opacity: 0 }, animations: null };
    obj1 = { opacity: closure_0(1, closure_1) };
    obj.animations = obj1;
    return obj;
  }
}
let items1 = [tmp6, tmp7];
EnteringAnimation.__closure = items1;
EnteringAnimation.__workletHash = 5247795390408;
EnteringAnimation.__initData = tmp5;
let items2 = [
  {
    code: "(function ExitingAnimation_AppLauncherOnboardingChatInputButtonAnimationTsx2(){let[withTiming,timingStandard]=this.__closure;const initialValues={opacity:1};const animations={opacity:withTiming(0,timingStandard)};return{initialValues:initialValues,animations:animations};})",
  },
  fn(5485).withTiming,
  fn(5488).timingStandard,
];
let closure_130_0;
let closure_130_1;
[tmp8, tmp9, tmp10] = items2;
class ExitingAnimation {
  constructor() {
    obj = { initialValues: { opacity: 1 }, animations: null };
    obj1 = { opacity: closure_0(0, closure_1) };
    obj.animations = obj1;
    return obj;
  }
}
let items3 = [tmp9, tmp10];
ExitingAnimation.__closure = items3;
ExitingAnimation.__workletHash = 15961020653347;
ExitingAnimation.__initData = tmp8;
let size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/onboarding/AppLauncherOnboardingChatInputButtonAnimation.tsx",
);

export const APP_LAUNCHER_ONBOARDING_CHAT_INPUT_BUTTON_ANIMATION_DURATION_MS = 7000;
export function AppLauncherOnboardingChatInputButtonAnimation(channelId) {
  const tmp = closure_9();
  items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const gradientBottom = ClientThemesOverrides.useGradientBottom();
  useAppLauncherOnboardingContentDefault({ channelId: channelId.channelId });
  const obj3 = { children: null };
  const obj4 = {
    entering: EnteringAnimation,
    exiting: ExitingAnimation,
    style: null,
    collapsable: false,
    children: null,
  };
  const items1 = [absoluteFill.absoluteFill, tmp.glowAnimation];
  obj4.style = items1;
  const obj5 = { collapsable: false, style: tmp.glowLottie, source: null, autoPlay: null };
  obj5.source = _mod14542;
  obj5.autoPlay = !stateFromStores;
  const items2 = [timestampProducer(LottieAnimationViewDefault, obj5), ,];
  const obj6 = { collapsable: false, style: null };
  const items3 = [tmp.glowMask, gradientBottom];
  obj6.style = items3;
  items2[1] = timestampProducer(React3, obj6);
  items2[2] = timestampProducer(React3, { collapsable: false, style: tmp.fakeButton });
  obj4.children = items2;
  const items4 = [metroImportDefault(_modDef1652.View, obj4)];
  const obj8 = { collapsable: false, style: tmp.trinketsLottie, source: null, autoPlay: null };
  const obj7 = { collapsable: false, style: tmp.fakeButton };
  obj8.source = _mod13295;
  obj8.autoPlay = !stateFromStores;
  items4[1] = timestampProducer(LottieAnimationViewDefault, obj8);
  obj3.children = items4;
  return metroImportDefault(React5, obj3);
}
