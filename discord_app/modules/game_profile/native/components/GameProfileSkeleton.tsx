// === Module 8860: GameProfileSkeleton ===

// Module 8860 (GameProfileSkeleton)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4373 */;
import timing from "timing" /* 4637 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;

require = fn;
class GameProfileSkeletonPlaceholder {
  constructor(arg0) {
    obj = { style: null };
    items = [, ];
    items[0] = closure_7().placeholder;
    items[1] = global.style;
    obj.style = items;
    return jsx(View, obj);
  }
}
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4636);
let createStyles = { placeholder: null, button: null, buttonSm: null, buttonMd: null };
createStyles = { backgroundColor: nativeDefault.colors.ICON_MUTED };
createStyles.placeholder = createStyles;
createStyles.button = { borderRadius: nativeDefault.radii.sm };
let size = { width: 92, height: nativeDefault.space.PX_32, flexShrink: 0 };
createStyles.buttonSm = size;
const size1 = { width: "100%", height: nativeDefault.space.PX_40 };
createStyles.buttonMd = size1;
const React5 = createStyles.createStyles(createStyles);
let closure_8 = { sm: "buttonSm", md: "buttonMd" };
const __initData = { code: "function GameProfileSkeletonTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSkeleton.tsx");

export default GameProfileSkeletonPlaceholder;
export const SKELETON_CARD_ANIMATION_DELAY_MS = 150;
export const GameProfileSkeletonContainer = function GameProfileSkeletonContainer(animationDelayMs) {
  let num = animationDelayMs.animationDelayMs;
  if (num === undefined) {
    num = 0;
  }
  let sharedValue;
  ({ children, style } = animationDelayMs);
  let obj = num(sharedValue[6]);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let num2 = 0.05;
  if (stateFromStores) {
    num2 = 0.1;
  }
  sharedValue = num(sharedValue[7]).useSharedValue(num2);
  const items1 = [num, sharedValue, stateFromStores];
  const effect = noop.useEffect(() => {
    ReanimatedRexport.cancelAnimation(sharedValue);
    if (stateFromStores) {
      const result = set(0.1);
    } else {
      const result1 = set(0.05);
      const tmpResult = ReanimatedRexport;
      const result2 = sharedValue.set(tmpResult.withDelay(num, tmpResult.withRepeat(timing.withTiming(0.1, { duration: 650 }), -1, true)));
      return () => num(sharedValue[7]).cancelAnimation(closure_1_2);
    }
  }, items1);
  const obj2 = num(sharedValue[7]);
  const fn = function _() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 16774017266233;
  fn.__initData = __initData;
  const animatedStyle = num(sharedValue[7]).useAnimatedStyle(fn);
  obj = { style: null, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children };
  const items2 = [style, animatedStyle];
  obj.style = items2;
  return jsx(stateFromStores(sharedValue[7]).View, { style: null, accessible: false, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children });
};
export const GameProfileSkeletonButton = function GameProfileSkeletonButton(size) {
  let str = size.size;
  if (str === undefined) {
    str = "md";
  }
  const tmp = closure_7();
  const obj = { style: null };
  const items = [tmp.button, tmp[closure_8[str]], size.style];
  obj.style = items;
  return <GameProfileSkeletonPlaceholder style={null} />;
};