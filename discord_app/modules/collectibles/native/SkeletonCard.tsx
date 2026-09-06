// === Module 15085: sharedValue ===

// Module 15085 (sharedValue)
import ThemesDefault from "Themes" /* 576 */;
import _modDef4296 from "module_4296" /* 4296 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
let closure_5 = createCacheKey.createStyles((width, height) => {
  let obj = { skeletonCard: null };
  obj = { width, height, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, borderRadius: ThemesDefault.radii.sm };
  obj[0] = obj;
  return obj;
});
let closure_6 = { code: "function SkeletonCardTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let result = require("set").fileFinishedImporting("modules/collectibles/native/SkeletonCard.tsx");

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
  const tmp3 = closure_5;
  const tmp3Result = closure_5(COLLECTIBLES_SHOP_CARD_WIDTH, COLLECTIBLES_SHOP_CARD_HEIGHT);
  sharedValue = sharedValue(4296).useSharedValue(0.3);
  const items = [sharedValue];
  const effect = React.useEffect(() => {
    const obj = sharedValue(closure_1_2[5]);
    const result = sharedValue.set(obj.withRepeat(sharedValue(closure_1_2[6]).withTiming(1, { duration: 650 }), -1, true));
  }, items);
  let obj = sharedValue(4296);
  class C {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  C.__closure = { opacity: sharedValue };
  C.__workletHash = 5620456625640;
  C.__initData = closure_6;
  const animatedStyle = sharedValue(4296).useAnimatedStyle(C);
  const style = [tmp3Result.skeletonCard, width.style, animatedStyle];
  return jsx(_modDef4296.View, { style });
};