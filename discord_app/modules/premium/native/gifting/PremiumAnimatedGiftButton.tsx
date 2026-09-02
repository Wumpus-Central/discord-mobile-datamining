// === Module 12039: PremiumAnimatedGiftButton ===

// Module 12039 (PremiumAnimatedGiftButton)
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "noop" /* 19 */;
import { useRef } from "noop" /* 19 */;
import closure_5 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
let closure_7 = createCacheKey.createStyles((width, marginHorizontal) => {
  let obj = { containerRefresh: null, animationRefresh: null };
  obj = { width, height: width, borderRadius: ThemesDefault.radii.sm, marginHorizontal, display: "flex", alignItems: "center", justifyContent: "center" };
  obj[0] = obj;
  obj[1] = { width: 24, height: 24 };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/premium/native/gifting/PremiumAnimatedGiftButton.tsx");

export const PremiumAnimatedGiftButton = function PremiumAnimatedGiftButton(arg0) {
  ({ active, disabled, accessibilityState } = arg0);
  ({ style, activeStyle, channelId, animationDataUrl, onAnimationFinished, loop } = arg0);
  let obj = _require(4197);
  const token = obj.useToken(stateFromStores(709).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  obj1 = _require(4197);
  const token1 = obj1.useToken(stateFromStores(709).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  let obj2 = _require(4197);
  const token2 = obj2.useToken(stateFromStores(709).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const tmp7 = callback(token, token1);
  const bound = Math.max(0, (token2 - token) / 2);
  const tmp9 = useRef(null);
  _require = tmp9;
  const items = [closure_5];
  stateFromStores = _require(586).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
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
      obj = ref(closure_1_2[7]);
    }
  }, items1);
  let FadeOut;
  if (!stateFromStores) {
    FadeOut = tmp(4217).FadeOut;
  }
  obj = { exiting: FadeOut, children: null };
  const items2 = [tmp7.containerRefresh, style, ];
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
  obj2 = { ref: tmp9, style: tmp7.animationRefresh, source: { uri: animationDataUrl }, loop, autoPlay: false, onAnimationFinish: onAnimationFinished };
  obj.children = jsx(stateFromStores(5952), { ref: tmp9, style: tmp7.animationRefresh, source: { uri: animationDataUrl }, loop, autoPlay: false, onAnimationFinish: onAnimationFinished });
  obj[1] = jsx(_require(5076).PressableOpacity, { style: items2, hitSlop: null, accessibilityRole: "button", accessibilityState: null });
  return jsx(stateFromStores(4217).View, { style: items2, hitSlop: null, accessibilityRole: "button", accessibilityState: null });
};