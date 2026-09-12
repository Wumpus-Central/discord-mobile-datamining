// === Module 8986: CollectiblesShopPricePlaceholder ===

// Module 8986 (CollectiblesShopPricePlaceholder)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4373 */;
import timing from "timing" /* 4637 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const jsx = fn(21).jsx;
fn(4636);
let createStyles = { skeletonContainer: null };
createStyles = { height: 16, flex: 1, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
createStyles.skeletonContainer = createStyles;
let closure_5 = createStyles.createStyles(createStyles);
const __initData = { code: "function CollectiblesShopPricePlaceholderTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopPricePlaceholder.tsx");

export const CollectiblesShopPricePlaceholder = function CollectiblesShopPricePlaceholder(style) {
  let sharedValue;
  let obj = sharedValue(4373);
  sharedValue = obj.useSharedValue(0.3);
  const items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj = ReanimatedRexport;
    const result = sharedValue.set(obj.withRepeat(timing.withTiming(1, { duration: 650 }), -1, true));
  }, items);
  const tmp = closure_5();
  const fn = function h() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 10107093534072;
  fn.__initData = __initData;
  const animatedStyle = sharedValue(4373).useAnimatedStyle(fn);
  obj = { style: null };
  const items1 = [tmp.skeletonContainer, style.style, animatedStyle];
  obj.style = items1;
  return jsx(ReanimatedRexportDefault.View, { style: null });
};