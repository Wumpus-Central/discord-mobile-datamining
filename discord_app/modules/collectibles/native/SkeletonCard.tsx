// discord_app/modules/collectibles/native/SkeletonCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles((width, height) => {
  const obj = { skeletonCard: null };
  const size = {
    width,
    height,
    backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
    borderRadius: nativeDefault.radii.sm,
  };
  obj.skeletonCard = size;
  return obj;
});
const __initData = {
  code: "function SkeletonCardTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/SkeletonCard.tsx");

export default function _default(width) {
  let COLLECTIBLES_SHOP_CARD_WIDTH = width.width;
  if (COLLECTIBLES_SHOP_CARD_WIDTH === undefined) {
    COLLECTIBLES_SHOP_CARD_WIDTH = sharedValue(8764).COLLECTIBLES_SHOP_CARD_WIDTH;
  }
  let COLLECTIBLES_SHOP_CARD_HEIGHT = width.height;
  sharedValue = undefined;
  if (COLLECTIBLES_SHOP_CARD_HEIGHT == null) {
    COLLECTIBLES_SHOP_CARD_HEIGHT = sharedValue(8764).COLLECTIBLES_SHOP_CARD_HEIGHT;
  }
  let obj = sharedValue(4296);
  sharedValue = obj.useSharedValue(0.3);
  const items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj = ReanimatedRexport;
    const result = sharedValue.set(obj.withRepeat(timing.withTiming(1, { duration: 650 }), -1, true));
  }, items);
  const tmp3Result = closure_5(COLLECTIBLES_SHOP_CARD_WIDTH, COLLECTIBLES_SHOP_CARD_HEIGHT);
  class C {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  C.__closure = { opacity: sharedValue };
  C.__workletHash = 5620456625640;
  C.__initData = __initData;
  const animatedStyle = sharedValue(4296).useAnimatedStyle(C);
  obj = { style: null };
  const items1 = [tmp3Result.skeletonCard, width.style, animatedStyle];
  obj.style = items1;
  return jsx(ReanimatedRexportDefault.View, { style: null });
}
