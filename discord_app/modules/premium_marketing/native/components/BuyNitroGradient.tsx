// discord_app/modules/premium_marketing/native/components/BuyNitroGradient.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import LinearGradientDefault from "../../../../../_runtime/04826_LinearGradient.js";
import { PremiumTypes } from "../../../premium/PremiumConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import importDefaultResult from "../../../reanimated/ReanimatedRexport.tsx";

const require = arg1;
noopAll;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = importDefaultResult.createAnimatedComponent(LinearGradientDefault);
let closure_8 = { code: "function BuyNitroGradientTsx1(){const{withTiming,selectedTier,PremiumTypes,timingStandard}=this.__closure;return{opacity:withTiming(selectedTier===PremiumTypes.TIER_0?1:0,timingStandard)};}" };
const result = require("set").fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroGradient.tsx");

export default function BuyNitroGradient(selectedTier) {
  selectedTier = selectedTier.selectedTier;
  ({ start, end, style } = selectedTier);
  ({ nitroColors, basicColors } = selectedTier);
  let obj = selectedTier(4120);
  const fn = function f() {
    let obj = selectedTier(closure_1_2[5]);
    let num = 0;
    if (selectedTier === closure_1_3.TIER_0) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num, selectedTier(closure_1_2[6]).timingStandard) };
    return obj;
  };
  obj = { withTiming: selectedTier(4381).withTiming, selectedTier, PremiumTypes, timingStandard: selectedTier(4384).timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 14014615431537;
  fn.__initData = closure_8;
  obj = { children: null };
  const animatedStyle = obj.useAnimatedStyle(fn);
  const items = [callback(LinearGradientDefault, { style, colors: nitroColors, start, end }), ];
  const items1 = [style, animatedStyle];
  items[1] = callback(closure_7, { style: items1, colors: basicColors, start, end });
  obj[0] = items;
  return callback2(closure_5, obj);
};