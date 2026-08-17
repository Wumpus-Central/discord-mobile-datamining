// discord_app/modules/premium_marketing/native/components/BuyNitroGradient.tsx
import noopAll from "noop" /* 19 */;
import LinearGradientDefault from "LinearGradient" /* 4756 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;
import importDefaultResult from "module_4115" /* 4115 */;

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
  let obj = selectedTier(4115);
  const fn = function f() {
    let obj = selectedTier(closure_1_2[5]);
    let num = 0;
    if (selectedTier === closure_1_3.TIER_0) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num, selectedTier(closure_1_2[6]).timingStandard) };
    return obj;
  };
  obj = { withTiming: selectedTier(4664).withTiming, selectedTier, PremiumTypes, timingStandard: selectedTier(4667).timingStandard };
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