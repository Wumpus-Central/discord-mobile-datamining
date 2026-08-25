// discord_app/modules/collectibles/native/CollectiblesShopPricePlaceholder.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4120 from "../../reanimated/ReanimatedRexport.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
createCacheKey = { skeletonContainer: null };
createCacheKey = { height: 16, flex: 1, borderRadius: ThemesDefault.radii.xs, backgroundColor: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
let closure_6 = { code: "function CollectiblesShopPricePlaceholderTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let result = require("set").fileFinishedImporting("modules/collectibles/native/CollectiblesShopPricePlaceholder.tsx");

export const CollectiblesShopPricePlaceholder = function CollectiblesShopPricePlaceholder(style) {
  let sharedValue;
  const tmp = callback();
  sharedValue = sharedValue(4120).useSharedValue(0.3);
  const items = [sharedValue];
  const effect = React.useEffect(() => {
    const obj = sharedValue(closure_1_2[4]);
    const result = sharedValue.set(obj.withRepeat(sharedValue(closure_1_2[5]).withTiming(1, { duration: 650 }), -1, true));
  }, items);
  let obj = sharedValue(4120);
  const fn = function h() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 10107093534072;
  fn.__initData = closure_6;
  const animatedStyle = sharedValue(4120).useAnimatedStyle(fn);
  style = [tmp.skeletonContainer, style.style, animatedStyle];
  return jsx(_modDef4120.View, { style });
};