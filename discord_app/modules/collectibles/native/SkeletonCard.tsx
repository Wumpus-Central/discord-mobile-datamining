// === Module 8567: SkeletonCard ===

// Module 8567 (SkeletonCard)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_5 = createStyles.createStyles((width, height) => {
  const obj = { skeletonCard: null };
  const size = { width, height, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm };
  obj.skeletonCard = size;
  return obj;
});
const __initData = { code: "function SkeletonCardTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const __initData2 = { code: "function SkeletonCardTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/SkeletonCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = sharedValue(576).c(7);
  ({ width, height, style } = arg0);
  if (undefined === width) {
    width = tmp(8451).COLLECTIBLES_SHOP_CARD_WIDTH;
  }
  if (height == null) {
    height = tmp(8451).COLLECTIBLES_SHOP_CARD_HEIGHT;
  }
  const tmp4Result = closure_5(width, height);
  let obj = sharedValue(576);
  sharedValue = sharedValue(4618).useSharedValue(0.3);
  if (cResult[0] !== sharedValue) {
    const fn = function _() {
      const obj = ReanimatedRexport;
      const result = sharedValue.set(obj.withRepeat(timing.withTiming(1, { duration: 650 }), -1, true));
    };
    const items = [sharedValue];
    cResult[0] = sharedValue;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp8 = items;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const effect = noop.useEffect(tmp7, tmp8);
  const tmpResult = sharedValue(4618);
  class L {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  L.__closure = { opacity: sharedValue };
  L.__workletHash = 5620456625640;
  L.__initData = __initData;
  const animatedStyle = sharedValue(4618).useAnimatedStyle(L);
  if (cResult[3] === animatedStyle) {
    if (cResult[4] === style) {
      if (cResult[5] === tmp4Result.skeletonCard) {
        let tmp11 = cResult[6];
      }
      return tmp11;
    }
  }
  const obj2 = { style: null };
  const items1 = [tmp4Result.skeletonCard, style, animatedStyle];
  obj2.style = items1;
  const tmp12 = jsx(ReanimatedRexportDefault.View, { style: null });
  cResult[3] = animatedStyle;
  cResult[4] = style;
  cResult[5] = tmp4Result.skeletonCard;
  cResult[6] = tmp12;
  tmp11 = tmp12;
  const tmpResult2 = sharedValue(4618);
}) : ((width) => {
  let COLLECTIBLES_SHOP_CARD_WIDTH = width.width;
  if (COLLECTIBLES_SHOP_CARD_WIDTH === undefined) {
    COLLECTIBLES_SHOP_CARD_WIDTH = sharedValue(8451).COLLECTIBLES_SHOP_CARD_WIDTH;
  }
  let COLLECTIBLES_SHOP_CARD_HEIGHT = width.height;
  sharedValue = undefined;
  if (COLLECTIBLES_SHOP_CARD_HEIGHT == null) {
    COLLECTIBLES_SHOP_CARD_HEIGHT = sharedValue(8451).COLLECTIBLES_SHOP_CARD_HEIGHT;
  }
  const tmp3Result = closure_5(COLLECTIBLES_SHOP_CARD_WIDTH, COLLECTIBLES_SHOP_CARD_HEIGHT);
  sharedValue = sharedValue(4618).useSharedValue(0.3);
  const items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj = ReanimatedRexport;
    const result = sharedValue.set(obj.withRepeat(timing.withTiming(1, { duration: 650 }), -1, true));
  }, items);
  let obj = sharedValue(4618);
  const fn = function h() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 5179355353643;
  fn.__initData = __initData2;
  const animatedStyle = sharedValue(4618).useAnimatedStyle(fn);
  const obj3 = { style: null };
  const items1 = [tmp3Result.skeletonCard, width.style, animatedStyle];
  obj3.style = items1;
  return jsx(ReanimatedRexportDefault.View, { style: null });
});