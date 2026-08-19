// === Module 11405: EnteringAnimation ===

// Module 11405 (EnteringAnimation)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import _modDef4115 from "module_4115" /* 4115 */;
import CONFIG_NEVER_ANIMATE_TIMING from "CONFIG_NEVER_ANIMATE_TIMING" /* 4664 */;
import timingNone from "timingNone" /* 4667 */;
import MINIMUM_HIT_AREA from "MINIMUM_HIT_AREA" /* 4749 */;
import playDefault from "play" /* 7130 */;
import useGradientBottom from "useGradientBottom" /* 8501 */;
import useAppLauncherOnboardingContentDefault from "useAppLauncherOnboardingContent" /* 11210 */;
import _mod11238 from "module_11238" /* 11238 */;
import _mod11406 from "module_11406" /* 11406 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
({ View: c3, StyleSheet: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error, Fragment: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles(() => {
  const sum = MINIMUM_HIT_AREA.SMALL_BUTTON_HEIGHT + MINIMUM_HIT_AREA.SMALL_BUTTON_PADDING + 2;
  let obj = { zIndex: 3, borderWidth: 1.5, borderColor: ThemesDefault.colors.BACKGROUND_BRAND, borderRadius: ThemesDefault.radii.round, alignItems: "center", justifyContent: "center", width: sum, height: sum, marginLeft: 4 };
  obj[0] = obj;
  obj = { zIndex: 1, position: "absolute", borderRadius: ThemesDefault.radii.round, top: 0, left: 0, width: sum, height: sum, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, marginLeft: 4 };
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
    obj[0] = require("module_1");
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
    obj[0] = require("module_0");
    obj[1] = obj;
    return obj;
  }
}
createCacheKey = { withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming, timingStandard: require("timingNone").timingStandard };
ExitingAnimation.__closure = createCacheKey;
ExitingAnimation.__workletHash = 1065249287738;
ExitingAnimation.__initData = { code: "function ExitingAnimation_AppLauncherOnboardingChatInputButtonAnimationTsx2(){const{withTiming,timingStandard}=this.__closure;const initialValues={opacity:1};const animations={opacity:withTiming(0,timingStandard)};return{initialValues:initialValues,animations:animations};}" };
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/onboarding/AppLauncherOnboardingChatInputButtonAnimation.tsx");

export const APP_LAUNCHER_ONBOARDING_CHAT_INPUT_BUTTON_ANIMATION_DURATION_MS = 7000;
export const AppLauncherOnboardingChatInputButtonAnimation = function AppLauncherOnboardingChatInputButtonAnimation(channelId) {
  const tmp = callback3();
  let obj = initialize;
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj1 = useGradientBottom;
  const gradientBottom = obj1.useGradientBottom();
  useAppLauncherOnboardingContentDefault({ channelId: channelId.channelId });
  obj = { entering: EnteringAnimation, exiting: ExitingAnimation, style: items1, collapsable: false, children: null };
  items1 = [absoluteFill.absoluteFill, tmp.glowAnimation];
  obj1 = { collapsable: false, style: tmp.glowLottie, source: _mod11406, autoPlay: !stateFromStores };
  const items2 = [callback(playDefault, obj1), , ];
  const items3 = [tmp.glowMask, gradientBottom];
  items2[1] = callback(closure_3, { collapsable: false, style: items3 });
  items2[2] = callback(closure_3, { collapsable: false, style: tmp.fakeButton });
  obj[4] = items2;
  const items4 = [callback2(_modDef4115.View, obj), ];
  const obj3 = { collapsable: false, style: tmp.trinketsLottie, source: null, autoPlay: null };
  obj3[2] = _mod11238;
  obj3[3] = !stateFromStores;
  items4[1] = callback(playDefault, obj3);
  obj[0] = items4;
  return callback2(closure_8, obj);
};