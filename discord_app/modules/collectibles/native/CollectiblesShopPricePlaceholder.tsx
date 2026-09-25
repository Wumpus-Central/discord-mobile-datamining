// === Module 8318: CollectiblesShopPricePlaceholder ===

// Module 8318 (CollectiblesShopPricePlaceholder)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4563 */;
import timing from "timing" /* 4830 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
const obj2 = { skeletonContainer: { height: 16, flex: 1, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND } };
let closure_5 = createStyles.createStyles(obj2);
const __initData = { code: "function CollectiblesShopPricePlaceholderTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopPricePlaceholder.tsx");

export const CollectiblesShopPricePlaceholder = function CollectiblesShopPricePlaceholder(style) {
  let sharedValue;
  const tmp = closure_5();
  sharedValue = sharedValue(4563).useSharedValue(0.3);
  const items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj = ReanimatedRexport;
    const result = sharedValue.set(obj.withRepeat(timing.withTiming(1, { duration: 650 }), -1, true));
  }, items);
  let obj = sharedValue(4563);
  const fn = function h() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 10107093534072;
  fn.__initData = __initData;
  const animatedStyle = sharedValue(4563).useAnimatedStyle(fn);
  const obj3 = { style: null };
  const items1 = [tmp.skeletonContainer, style.style, animatedStyle];
  obj3.style = items1;
  return jsx(ReanimatedRexportDefault.View, { style: null });
};