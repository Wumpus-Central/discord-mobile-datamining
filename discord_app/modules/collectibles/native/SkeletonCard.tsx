// discord_app/modules/collectibles/native/SkeletonCard.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4184 from "../../reanimated/ReanimatedRexport.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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
    COLLECTIBLES_SHOP_CARD_WIDTH = sharedValue(9560).COLLECTIBLES_SHOP_CARD_WIDTH;
  }
  let COLLECTIBLES_SHOP_CARD_HEIGHT = width.height;
  sharedValue = undefined;
  if (COLLECTIBLES_SHOP_CARD_HEIGHT == null) {
    COLLECTIBLES_SHOP_CARD_HEIGHT = sharedValue(9560).COLLECTIBLES_SHOP_CARD_HEIGHT;
  }
  const tmp3 = closure_5;
  const tmp3Result = closure_5(COLLECTIBLES_SHOP_CARD_WIDTH, COLLECTIBLES_SHOP_CARD_HEIGHT);
  sharedValue = sharedValue(4184).useSharedValue(0.3);
  const items = [sharedValue];
  const effect = React.useEffect(() => {
    const obj = sharedValue(closure_1_2[5]);
    const result = sharedValue.set(obj.withRepeat(sharedValue(closure_1_2[6]).withTiming(1, { duration: 650 }), -1, true));
  }, items);
  let obj = sharedValue(4184);
  class C {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  C.__closure = { opacity: sharedValue };
  C.__workletHash = 5620456625640;
  C.__initData = closure_6;
  const animatedStyle = sharedValue(4184).useAnimatedStyle(C);
  const style = [tmp3Result.skeletonCard, width.style, animatedStyle];
  return jsx(_modDef4184.View, { style });
};