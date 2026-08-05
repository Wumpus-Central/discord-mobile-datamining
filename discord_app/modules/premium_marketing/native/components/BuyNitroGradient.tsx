// discord_app/modules/premium_marketing/native/components/BuyNitroGradient.tsx
import "noop";
import { PremiumTypes } from "GuildFeatures";
import jsxProd from "jsxProd";
import LinearGradient from "LinearGradient";
import importDefaultResult from "module_4146";

let c4;
let c5;
let closure_6;
const require = arg1;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
let closure_8 = { code: "function BuyNitroGradientTsx1(){const{withTiming,selectedTier,PremiumTypes,timingStandard}=this.__closure;return{opacity:withTiming(selectedTier===PremiumTypes.TIER_0?1:0,timingStandard)};}" };
const result = require("jsxProd").fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroGradient.tsx");

export default function BuyNitroGradient(selectedTier) {
  let basicColors;
  let end;
  let nitroColors;
  let start;
  let style;
  selectedTier = selectedTier.selectedTier;
  ({ start, end, style } = selectedTier);
  ({ nitroColors, basicColors } = selectedTier);
  let obj = selectedTier(4146);
  const fn = function f() {
    let obj = selectedTier(outer1_2[5]);
    let num = 0;
    if (selectedTier === outer1_3.TIER_0) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num, selectedTier(outer1_2[6]).timingStandard) };
    return obj;
  };
  obj = { withTiming: selectedTier(4286).withTiming, selectedTier, PremiumTypes, timingStandard: selectedTier(4289).timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 14014615431537;
  fn.__initData = closure_8;
  obj = { children: null };
  const animatedStyle = obj.useAnimatedStyle(fn);
  const items = [callback(importDefault(4706), { style, colors: nitroColors, start, end }), ];
  const items1 = [style, animatedStyle];
  items[1] = callback(LinearGradient, { style: items1, colors: basicColors, start, end });
  obj[0] = items;
  return callback2(closure_5, obj);
};