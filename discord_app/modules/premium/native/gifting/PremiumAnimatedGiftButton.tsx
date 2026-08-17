// discord_app/modules/premium/native/gifting/PremiumAnimatedGiftButton.tsx
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { useRef } from "noop" /* 19 */;
import closure_5 from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { map } from "../../../../design/tokens/native/useToken.tsx";
import { PressableBase } from "../../../../design/void/Pressables/native/Pressables.tsx";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../../themes/experiments/MobileVisualRefreshExperiment.tsx";

const require = arg1;
let closure_7 = createCacheKey.createStyles((width, marginHorizontal) => {
  let obj = { container: null, containerRefresh: null, animation: null, animationRefresh: null };
  obj = { backgroundColor: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, width, height: width, borderRadius: ThemesDefault.radii.round, marginHorizontal, display: "flex", alignItems: "center", justifyContent: "center" };
  obj[0] = obj;
  obj = { width, height: width, borderRadius: ThemesDefault.radii.sm, marginHorizontal, display: "flex", alignItems: "center", justifyContent: "center" };
  obj[1] = obj;
  obj[2] = { width: 30, height: 30 };
  obj[3] = { width: 24, height: 24 };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/premium/native/gifting/PremiumAnimatedGiftButton.tsx");

export const PremiumAnimatedGiftButton = function PremiumAnimatedGiftButton(arg0) {
  ({ active, disabled, accessibilityState } = arg0);
  ({ style, activeStyle, channelId, animationDataUrl, onAnimationFinished, loop } = arg0);
  let obj = _useIsMobileVisualRefreshExperimentEnabled;
  const enabled = obj.useMobileVisualRefreshConfig({ location: "PremiumAnimatedGiftButton" }).enabled;
  obj1 = _map;
  const token = obj1.useToken(stateFromStores(712).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj2 = _map;
  const token1 = obj2.useToken(stateFromStores(712).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const token2 = _map.useToken(stateFromStores(712).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const tmp7 = callback(token, token1);
  const bound = Math.max(0, (token2 - token) / 2);
  const tmp9 = useRef(null);
  _require = tmp9;
  const obj4 = _map;
  const tmp3 = stateFromStores;
  const items = [closure_5];
  stateFromStores = _initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [channelId, stateFromStores];
  const effect = React.useEffect(() => {
    if (!stateFromStores) {
      if (obj.isIOS()) {
        if (ref != null) {
          const current = ref.current;
          if (current != null) {
            current.reset();
          }
        }
      }
      if (ref != null) {
        const current2 = ref.current;
        if (current2 != null) {
          current2.play();
        }
      }
      obj = ref(closure_1_2[8]);
    }
  }, items1);
  let FadeOut;
  if (!stateFromStores) {
    FadeOut = tmp(4115).FadeOut;
  }
  obj = { exiting: FadeOut, children: null };
  const items2 = [enabled ? tmp7.containerRefresh : tmp7.container, style, ];
  if (active) {
    active = !disabled;
  }
  if (active) {
    active = activeStyle;
  }
  obj = { style: items2, hitSlop: null, accessibilityRole: "button", accessibilityState: null };
  items2[2] = active;
  let tmp14;
  if (bound > 0) {
    tmp14 = bound;
  }
  obj[1] = tmp14;
  obj1 = { disabled };
  const merged = Object.assign(accessibilityState);
  obj[3] = obj1;
  const merged1 = Object.assign(arg0);
  obj2 = { ref: tmp9, style: enabled ? tmp7.animationRefresh : tmp7.animation, source: { uri: animationDataUrl }, loop, autoPlay: false, onAnimationFinish: onAnimationFinished };
  obj.children = jsx(tmp3(7130), { ref: tmp9, style: enabled ? tmp7.animationRefresh : tmp7.animation, source: { uri: animationDataUrl }, loop, autoPlay: false, onAnimationFinish: onAnimationFinished });
  obj[1] = jsx(_PressableBase.PressableOpacity, { style: items2, hitSlop: null, accessibilityRole: "button", accessibilityState: null });
  return jsx(stateFromStores(4115).View, { style: items2, hitSlop: null, accessibilityRole: "button", accessibilityState: null });
};