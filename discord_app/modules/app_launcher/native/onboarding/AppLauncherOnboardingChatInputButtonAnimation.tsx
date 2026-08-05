import { 11361__ } from "../../../../../_runtime/metro/11361__.js";
import { 11526__ } from "../../../../../_runtime/metro/11526__.js";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { play } from "../../../../components_native/common/LottieAnimationView.tsx";
import { MINIMUM_HIT_AREA } from "../../../../design/components/Button/native/ButtonConstants.native.tsx";
import { useGradientBottom } from "../../../client_themes/native/ClientThemesOverrides.tsx";
import { ReanimatedRexport } from "../../../reanimated/ReanimatedRexport.tsx";
import { useAppLauncherOnboardingContent } from "hooks/useAppLauncherOnboardingContent.tsx";
// discord_app/modules/app_launcher/native/onboarding/AppLauncherOnboardingChatInputButtonAnimation.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ View: c3, StyleSheet: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error, Fragment: metroImportAll } = jsxProd);
let closure_9 = createCacheKey.createStyles(() => {
  const sum = MINIMUM_HIT_AREA /* MINIMUM_HIT_AREA */.SMALL_BUTTON_HEIGHT + MINIMUM_HIT_AREA /* MINIMUM_HIT_AREA */.SMALL_BUTTON_PADDING + 2;
  let obj = { fakeButton: null, glowMask: null, glowLottie: null, trinketsLottie: null, glowAnimation: null };
  obj = { zIndex: 3, borderWidth: 1.5, borderColor: Themes.colors.BACKGROUND_BRAND, borderRadius: Themes.radii.round, alignItems: "center", justifyContent: "center", width: sum, height: sum, marginLeft: 4 };
  obj[0] = obj;
  obj = { zIndex: 1, position: "absolute", borderRadius: Themes.radii.round, top: 0, left: 0, width: sum, height: sum, backgroundColor: Themes.colors.BACKGROUND_BASE_LOW, marginLeft: 4 };
  obj[1] = obj;
  obj[2] = { width: "150%", height: "150%", position: "absolute", top: "-25%", left: "-25%", zIndex: 0, opacity: 0.8 };
  obj[3] = { zIndex: 4, position: "absolute", pointerEvents: "none", width: "175%", height: "175%", top: "-43%", left: "-38%" };
  obj[4] = { pointerEvents: "none" };
  return obj;
});
class EnteringAnimation {
  constructor() {
    obj = { initialValues: { opacity: 0 }, animations: null };
    obj = { opacity: null };
    obj3 = require("CONFIG_NEVER_ANIMATE_TIMING");
    obj[0] = require("get ActivityIndicator");
    obj[1] = obj;
    return obj;
  }
}
createCacheKey = { withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming, timingStandard: require("timingNone").timingStandard };
EnteringAnimation.__closure = createCacheKey;
EnteringAnimation.__workletHash = 2327377243473;
EnteringAnimation.__initData = { code: "function EnteringAnimation_AppLauncherOnboardingChatInputButtonAnimationTsx1(){const{withTiming,timingStandard}=this.__closure;const initialValues={opacity:0};const animations={opacity:withTiming(1,timingStandard)};return{initialValues:initialValues,animations:animations};}" };
class ExitingAnimation {
  constructor() {
    obj = { initialValues: { opacity: 1 }, animations: null };
    obj = { opacity: null };
    obj3 = require("CONFIG_NEVER_ANIMATE_TIMING");
    obj[0] = require("noop");
    obj[1] = obj;
    return obj;
  }
}
createCacheKey = { withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming, timingStandard: require("timingNone").timingStandard };
ExitingAnimation.__closure = createCacheKey;
ExitingAnimation.__workletHash = 1065249287738;
ExitingAnimation.__initData = { code: "function ExitingAnimation_AppLauncherOnboardingChatInputButtonAnimationTsx2(){const{withTiming,timingStandard}=this.__closure;const initialValues={opacity:1};const animations={opacity:withTiming(0,timingStandard)};return{initialValues:initialValues,animations:animations};}" };
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/app_launcher/native/onboarding/AppLauncherOnboardingChatInputButtonAnimation.tsx");

export const APP_LAUNCHER_ONBOARDING_CHAT_INPUT_BUTTON_ANIMATION_DURATION_MS = 7000;
export const AppLauncherOnboardingChatInputButtonAnimation = function AppLauncherOnboardingChatInputButtonAnimation(channelId) {
  const tmp = callback3();
  let obj = initialize /* initialize */;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj1 = useGradientBottom /* useGradientBottom */;
  const gradientBottom = obj1.useGradientBottom();
  useAppLauncherOnboardingContent({ channelId: channelId.channelId });
  obj = { children: null };
  obj = { entering: EnteringAnimation, exiting: ExitingAnimation, style: items1, collapsable: false, children: null };
  items1 = [absoluteFill.absoluteFill, tmp.glowAnimation];
  obj1 = { collapsable: false, style: tmp.glowLottie, source: null, autoPlay: null };
  obj1[2] = 11526__;
  obj1[3] = !stateFromStores;
  const items2 = [callback(play, obj1), , ];
  const items3 = [tmp.glowMask, gradientBottom];
  items2[1] = callback(closure_3, { collapsable: false, style: items3 });
  items2[2] = callback(closure_3, { collapsable: false, style: tmp.fakeButton });
  obj[4] = items2;
  const items4 = [callback2(ReanimatedRexport.View, obj), ];
  const obj3 = { collapsable: false, style: tmp.trinketsLottie, source: null, autoPlay: null };
  const obj2 = { collapsable: false, style: tmp.fakeButton };
  const tmp5 = play;
  obj3[2] = 11361__;
  obj3[3] = !stateFromStores;
  items4[1] = callback(play, obj3);
  obj[0] = items4;
  return callback2(closure_8, obj);
};