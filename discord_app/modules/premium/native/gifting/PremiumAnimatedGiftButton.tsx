// === Module 11423: PremiumAnimatedGiftButton ===

// Module 11423 (PremiumAnimatedGiftButton)
import noop from "noop";
import { useRef } from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let require = arg1;
let closure_7 = createCacheKey.createStyles((width, marginHorizontal) => {
  let obj = { container: null, containerRefresh: null, animation: null, animationRefresh: null };
  obj = { backgroundColor: importDefault(712).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, width, height: width, borderRadius: importDefault(712).radii.round, marginHorizontal, display: "flex", alignItems: "center", justifyContent: "center" };
  obj[0] = obj;
  obj = { width, height: width, borderRadius: importDefault(712).radii.sm, marginHorizontal, display: "flex", alignItems: "center", justifyContent: "center" };
  obj[1] = obj;
  obj[2] = { width: 30, height: 30 };
  obj[3] = { width: 24, height: 24 };
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/premium/native/gifting/PremiumAnimatedGiftButton.tsx");

export const PremiumAnimatedGiftButton = function PremiumAnimatedGiftButton(arg0) {
  let accessibilityState;
  let active;
  let activeStyle;
  let animationDataUrl;
  let channelId;
  let disabled;
  let loop;
  let onAnimationFinished;
  let style;
  ({ active, disabled, accessibilityState } = arg0);
  ({ style, activeStyle, channelId, animationDataUrl, onAnimationFinished, loop } = arg0);
  let obj = require(1348) /* useIsMobileVisualRefreshExperimentEnabled */;
  const enabled = obj.useMobileVisualRefreshConfig({ location: "PremiumAnimatedGiftButton" }).enabled;
  let obj1 = require(3897) /* map */;
  const token = obj1.useToken(stateFromStores(712).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj2 = require(3897) /* map */;
  const token1 = obj2.useToken(stateFromStores(712).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const token2 = require(3897) /* map */.useToken(stateFromStores(712).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const tmp7 = callback(token, token1);
  const bound = Math.max(0, (token2 - token) / 2);
  const tmp9 = useRef(null);
  require = tmp9;
  const obj4 = require(3897) /* map */;
  const tmp3 = stateFromStores;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [channelId, stateFromStores];
  const effect = React.useEffect(() => {
    if (!stateFromStores) {
      if (obj.isIOS()) {
        if (tmp9 != null) {
          const current = tmp9.current;
          if (current != null) {
            current.reset();
          }
        }
      }
      if (tmp9 != null) {
        const current2 = tmp9.current;
        if (current2 != null) {
          current2.play();
        }
      }
      obj = tmp9(outer1_2[8]);
    }
  }, items1);
  let FadeOut;
  if (!stateFromStores) {
    FadeOut = tmp(4054).FadeOut;
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
  obj.children = jsx(tmp3(5510), { ref: tmp9, style: enabled ? tmp7.animationRefresh : tmp7.animation, source: { uri: animationDataUrl }, loop, autoPlay: false, onAnimationFinish: onAnimationFinished });
  obj[1] = jsx(require(4721) /* PressableBase */.PressableOpacity, { style: items2, hitSlop: null, accessibilityRole: "button", accessibilityState: null });
  return jsx(stateFromStores(4054).View, { style: items2, hitSlop: null, accessibilityRole: "button", accessibilityState: null });
};