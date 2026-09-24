// === Module 11797: GiftBoxAnimation ===

// Module 11797 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import _mod5014 from "module_5014" /* 5014 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5834 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4821 */;

const require = globalThis.__r;

require = fn;
const PremiumGiftStyles = fn(1374).PremiumGiftStyles;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  giftStyle = giftStyle.giftStyle;
  initialize;
  [][0] = AccessibilityStore;
  if (null == giftStyle) {
    return null;
  } else {
    const match = _mod5014.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11798"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11798")).with(PremiumGiftStyles.BOX, () => require("module_11799"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11798")).with(PremiumGiftStyles.BOX, () => require("module_11799")).with(PremiumGiftStyles.CUP, () => require("module_11800"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11798")).with(PremiumGiftStyles.BOX, () => require("module_11799")).with(PremiumGiftStyles.CUP, () => require("module_11800")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11184"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11798")).with(PremiumGiftStyles.BOX, () => require("module_11799")).with(PremiumGiftStyles.CUP, () => require("module_11800")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11184")).with(PremiumGiftStyles.COFFEE, () => require("module_11193"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11798")).with(PremiumGiftStyles.BOX, () => require("module_11799")).with(PremiumGiftStyles.CUP, () => require("module_11800")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11184")).with(PremiumGiftStyles.COFFEE, () => require("module_11193")).with(PremiumGiftStyles.CHEST, () => require("module_11190"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11798")).with(PremiumGiftStyles.BOX, () => require("module_11799")).with(PremiumGiftStyles.CUP, () => require("module_11800")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11184")).with(PremiumGiftStyles.COFFEE, () => require("module_11193")).with(PremiumGiftStyles.CHEST, () => require("module_11190")).with(PremiumGiftStyles.CAKE, () => require("module_11187"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11798")).with(PremiumGiftStyles.BOX, () => require("module_11799")).with(PremiumGiftStyles.CUP, () => require("module_11800")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11184")).with(PremiumGiftStyles.COFFEE, () => require("module_11193")).with(PremiumGiftStyles.CHEST, () => require("module_11190")).with(PremiumGiftStyles.CAKE, () => require("module_11187")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11196"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11798")).with(PremiumGiftStyles.BOX, () => require("module_11799")).with(PremiumGiftStyles.CUP, () => require("module_11800")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11184")).with(PremiumGiftStyles.COFFEE, () => require("module_11193")).with(PremiumGiftStyles.CHEST, () => require("module_11190")).with(PremiumGiftStyles.CAKE, () => require("module_11187")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11196")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11199"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11798")).with(PremiumGiftStyles.BOX, () => require("module_11799")).with(PremiumGiftStyles.CUP, () => require("module_11800")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11184")).with(PremiumGiftStyles.COFFEE, () => require("module_11193")).with(PremiumGiftStyles.CHEST, () => require("module_11190")).with(PremiumGiftStyles.CAKE, () => require("module_11187")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11196")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11199")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11202"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11798")).with(PremiumGiftStyles.BOX, () => require("module_11799")).with(PremiumGiftStyles.CUP, () => require("module_11800")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11184")).with(PremiumGiftStyles.COFFEE, () => require("module_11193")).with(PremiumGiftStyles.CHEST, () => require("module_11190")).with(PremiumGiftStyles.CAKE, () => require("module_11187")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11196")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11199")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11202")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11205"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11798")).with(PremiumGiftStyles.BOX, () => require("module_11799")).with(PremiumGiftStyles.CUP, () => require("module_11800")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11184")).with(PremiumGiftStyles.COFFEE, () => require("module_11193")).with(PremiumGiftStyles.CHEST, () => require("module_11190")).with(PremiumGiftStyles.CAKE, () => require("module_11187")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11196")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11199")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11202")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11205")).otherwise(() => require("module_11184")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11798")).with(PremiumGiftStyles.BOX, () => require("module_11799")).with(PremiumGiftStyles.CUP, () => require("module_11800")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11184")).with(PremiumGiftStyles.COFFEE, () => require("module_11193")).with(PremiumGiftStyles.CHEST, () => require("module_11190")).with(PremiumGiftStyles.CAKE, () => require("module_11187")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11196")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11199")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11202")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11205")).otherwise(() => require("module_11184")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};