// === Module 14434: sharedValue ===

// Module 14434 (sharedValue)
import ThemesDefault from "Themes" /* 712 */;
import _modDef4115 from "module_4115" /* 4115 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
let closure_5 = createCacheKey.createStyles((width, height) => {
  const obj = { width, height, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, borderRadius: ThemesDefault.radii.sm };
  obj[0] = obj;
  return obj;
});
let closure_6 = { code: "function SkeletonCardTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let result = require("obj132").fileFinishedImporting("modules/collectibles/native/SkeletonCard.tsx");

export default function _default(width) {
  let COLLECTIBLES_SHOP_CARD_WIDTH = width.width;
  if (COLLECTIBLES_SHOP_CARD_WIDTH === undefined) {
    COLLECTIBLES_SHOP_CARD_WIDTH = sharedValue(9172).COLLECTIBLES_SHOP_CARD_WIDTH;
  }
  let COLLECTIBLES_SHOP_CARD_HEIGHT = width.height;
  sharedValue = undefined;
  if (COLLECTIBLES_SHOP_CARD_HEIGHT == null) {
    COLLECTIBLES_SHOP_CARD_HEIGHT = sharedValue(9172).COLLECTIBLES_SHOP_CARD_HEIGHT;
  }
  const tmp3Result = callback(COLLECTIBLES_SHOP_CARD_WIDTH, COLLECTIBLES_SHOP_CARD_HEIGHT);
  sharedValue = sharedValue(4115).useSharedValue(0.3);
  const items = [sharedValue];
  const effect = React.useEffect(() => {
    const obj = sharedValue(dependencyMap[5]);
    const result = sharedValue.set(obj.withRepeat(sharedValue(dependencyMap[6]).withTiming(1, { duration: 650 }), -1, true));
  }, items);
  let obj = sharedValue(4115);
  class C {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  C.__closure = { opacity: sharedValue };
  C.__workletHash = 5620456625640;
  C.__initData = closure_6;
  const animatedStyle = sharedValue(4115).useAnimatedStyle(C);
  const style = [tmp3Result.skeletonCard, width.style, animatedStyle];
  return jsx(_modDef4115.View, { style });
};