// === Module 11412: PremiumAnimatedGiftButton ===

// Module 11412 (PremiumAnimatedGiftButton)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import { useRef } from "noop" /* 19 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
let closure_7 = createCacheKey.createStyles((width, marginHorizontal) => {
  let obj = { backgroundColor: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, width, height: width, borderRadius: ThemesDefault.radii.round, marginHorizontal, display: "flex", alignItems: "center", justifyContent: "center" };
  obj[0] = obj;
  obj = { width, height: width, borderRadius: ThemesDefault.radii.sm, marginHorizontal, display: "flex", alignItems: "center", justifyContent: "center" };
  obj[1] = obj;
  obj[2] = { width: 30, height: 30 };
  obj[3] = { width: 24, height: 24 };
  return obj;
});
const result = require("obj132").fileFinishedImporting("modules/premium/native/gifting/PremiumAnimatedGiftButton.tsx");

export const PremiumAnimatedGiftButton = function PremiumAnimatedGiftButton(arg0) {
  ({ active, disabled, accessibilityState } = arg0);
  ({ style, activeStyle, channelId, animationDataUrl, onAnimationFinished, loop } = arg0);
  let obj = _require(1367);
  const enabled = obj.useMobileVisualRefreshConfig({ location: "PremiumAnimatedGiftButton" }).enabled;
  obj1 = _require(4097);
  const token = obj1.useToken(stateFromStores(712).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj2 = _require(4097);
  const token1 = obj2.useToken(stateFromStores(712).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const token2 = _require(4097).useToken(stateFromStores(712).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const tmp7 = callback(token, token1);
  const bound = Math.max(0, (token2 - token) / 2);
  const tmp9 = useRef(null);
  _require = tmp9;
  const obj4 = _require(4097);
  const tmp3 = stateFromStores;
  const items = [closure_5];
  stateFromStores = _require(589).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
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
      obj = ref(dependencyMap[8]);
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
  obj[1] = jsx(_require(5433).PressableOpacity, { style: items2, hitSlop: null, accessibilityRole: "button", accessibilityState: null });
  return jsx(stateFromStores(4115).View, { style: items2, hitSlop: null, accessibilityRole: "button", accessibilityState: null });
};