// === Module 13394: BuyNitroGradient ===

// Module 13394 (BuyNitroGradient)
import timing from "timing" /* 4561 */;
import timingPresets from "timingPresets" /* 4564 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;

require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
const __initData = { code: "function BuyNitroGradientTsx1(){const{withTiming,selectedTier,PremiumTypes,timingStandard}=this.__closure;return{opacity:withTiming(selectedTier===PremiumTypes.TIER_0?1:0,timingStandard)};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroGradient.tsx");

export default function BuyNitroGradient(selectedTier) {
  selectedTier = selectedTier.selectedTier;
  ({ start, end, style } = selectedTier);
  ({ nitroColors, basicColors } = selectedTier);
  selectedTier(4296);
  const fn = function f() {
    let obj = timing;
    let num = 0;
    if (selectedTier === PremiumTypes.TIER_0) {
      num = 1;
    }
    obj = { opacity: obj.withTiming(num, timingPresets.timingStandard) };
    return obj;
  };
  let obj = { withTiming: selectedTier(4561).withTiming, selectedTier, PremiumTypes, timingStandard: selectedTier(4564).timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 14014615431537;
  fn.__initData = __initData;
  obj = { children: null };
  const animatedStyle = obj.useAnimatedStyle(fn);
  const items = [closure_4(LinearGradientDefault, { style, colors: nitroColors, start, end }), ];
  const obj1 = { style: null, colors: basicColors, start, end };
  const items1 = [style, animatedStyle];
  obj1.style = items1;
  items[1] = closure_4(LinearGradient, obj1);
  obj.children = items;
  return closure_6(closure_5, obj);
};