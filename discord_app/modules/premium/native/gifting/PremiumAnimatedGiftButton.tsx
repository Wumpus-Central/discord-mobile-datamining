// === Module 12249: PremiumAnimatedGiftButton ===

// Module 12249 (PremiumAnimatedGiftButton)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
const useRef = fn(19).useRef;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles((width, marginHorizontal) => {
  const obj = { containerRefresh: null, animationRefresh: null };
  const size = { width, height: width, borderRadius: nativeDefault.radii.sm, marginHorizontal, display: "flex", alignItems: "center", justifyContent: "center" };
  obj.containerRefresh = size;
  obj.animationRefresh = { width: 24, height: 24 };
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumAnimatedGiftButton.tsx");

export const PremiumAnimatedGiftButton = function PremiumAnimatedGiftButton(arg0) {
  ({ active, disabled, accessibilityState } = arg0);
  ({ style, activeStyle, channelId, animationDataUrl, onAnimationFinished, loop } = arg0);
  let obj = require("useToken");
  const token = obj.useToken(stateFromStores(576).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj1 = require("useToken");
  const token1 = obj1.useToken(stateFromStores(576).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  let obj2 = require("useToken");
  const token2 = obj2.useToken(stateFromStores(576).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const tmp7 = closure_7(token, token1);
  const bound = Math.max(0, (token2 - token) / 2);
  const tmp9 = useRef(null);
  _require = tmp9;
  const items = [AccessibilityStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [channelId, stateFromStores];
  const effect = noop.useEffect(() => {
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
      obj = PlatformUtils;
    }
  }, items1);
  let FadeOut;
  if (!stateFromStores) {
    FadeOut = tmp(4296).FadeOut;
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
  obj.hitSlop = tmp14;
  obj1 = { disabled };
  const merged = Object.assign(accessibilityState);
  obj.accessibilityState = obj1;
  const merged1 = Object.assign(arg0);
  obj2 = { ref: tmp9, style: tmp7.animationRefresh, source: { uri: animationDataUrl }, loop, autoPlay: false, onAnimationFinish: onAnimationFinished };
  obj.children = jsx(stateFromStores(5529), { ref: tmp9, style: tmp7.animationRefresh, source: { uri: animationDataUrl }, loop, autoPlay: false, onAnimationFinish: onAnimationFinished });
  obj.children = jsx(require("Pressables").PressableOpacity, { style: items2, hitSlop: null, accessibilityRole: "button", accessibilityState: null });
  return jsx(stateFromStores(4296).View, { style: items2, hitSlop: null, accessibilityRole: "button", accessibilityState: null });
};