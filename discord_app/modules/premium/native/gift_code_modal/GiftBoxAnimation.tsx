// === Module 11697: GiftBoxAnimation ===

// Module 11697 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5755 */;
import _mod6691 from "module_6691" /* 6691 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;

const require = globalThis.__r;

require = fn;
const PremiumGiftStyles = fn(1387).PremiumGiftStyles;
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
    const match = _mod6691.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11698"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11698")).with(PremiumGiftStyles.BOX, () => require("module_11699"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11698")).with(PremiumGiftStyles.BOX, () => require("module_11699")).with(PremiumGiftStyles.CUP, () => require("module_11700"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11698")).with(PremiumGiftStyles.BOX, () => require("module_11699")).with(PremiumGiftStyles.CUP, () => require("module_11700")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10879"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11698")).with(PremiumGiftStyles.BOX, () => require("module_11699")).with(PremiumGiftStyles.CUP, () => require("module_11700")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10879")).with(PremiumGiftStyles.COFFEE, () => require("module_10888"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11698")).with(PremiumGiftStyles.BOX, () => require("module_11699")).with(PremiumGiftStyles.CUP, () => require("module_11700")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10879")).with(PremiumGiftStyles.COFFEE, () => require("module_10888")).with(PremiumGiftStyles.CHEST, () => require("module_10885"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11698")).with(PremiumGiftStyles.BOX, () => require("module_11699")).with(PremiumGiftStyles.CUP, () => require("module_11700")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10879")).with(PremiumGiftStyles.COFFEE, () => require("module_10888")).with(PremiumGiftStyles.CHEST, () => require("module_10885")).with(PremiumGiftStyles.CAKE, () => require("module_10882"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11698")).with(PremiumGiftStyles.BOX, () => require("module_11699")).with(PremiumGiftStyles.CUP, () => require("module_11700")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10879")).with(PremiumGiftStyles.COFFEE, () => require("module_10888")).with(PremiumGiftStyles.CHEST, () => require("module_10885")).with(PremiumGiftStyles.CAKE, () => require("module_10882")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10891"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11698")).with(PremiumGiftStyles.BOX, () => require("module_11699")).with(PremiumGiftStyles.CUP, () => require("module_11700")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10879")).with(PremiumGiftStyles.COFFEE, () => require("module_10888")).with(PremiumGiftStyles.CHEST, () => require("module_10885")).with(PremiumGiftStyles.CAKE, () => require("module_10882")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10891")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10894"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11698")).with(PremiumGiftStyles.BOX, () => require("module_11699")).with(PremiumGiftStyles.CUP, () => require("module_11700")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10879")).with(PremiumGiftStyles.COFFEE, () => require("module_10888")).with(PremiumGiftStyles.CHEST, () => require("module_10885")).with(PremiumGiftStyles.CAKE, () => require("module_10882")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10891")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10894")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10897"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11698")).with(PremiumGiftStyles.BOX, () => require("module_11699")).with(PremiumGiftStyles.CUP, () => require("module_11700")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10879")).with(PremiumGiftStyles.COFFEE, () => require("module_10888")).with(PremiumGiftStyles.CHEST, () => require("module_10885")).with(PremiumGiftStyles.CAKE, () => require("module_10882")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10891")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10894")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10897")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10900"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11698")).with(PremiumGiftStyles.BOX, () => require("module_11699")).with(PremiumGiftStyles.CUP, () => require("module_11700")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10879")).with(PremiumGiftStyles.COFFEE, () => require("module_10888")).with(PremiumGiftStyles.CHEST, () => require("module_10885")).with(PremiumGiftStyles.CAKE, () => require("module_10882")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10891")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10894")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10897")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10900")).otherwise(() => require("module_10879")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11698")).with(PremiumGiftStyles.BOX, () => require("module_11699")).with(PremiumGiftStyles.CUP, () => require("module_11700")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10879")).with(PremiumGiftStyles.COFFEE, () => require("module_10888")).with(PremiumGiftStyles.CHEST, () => require("module_10885")).with(PremiumGiftStyles.CAKE, () => require("module_10882")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10891")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10894")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10897")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10900")).otherwise(() => require("module_10879")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};