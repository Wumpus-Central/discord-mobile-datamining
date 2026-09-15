// === Module 11586: GiftBoxAnimation ===

// Module 11586 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import _mod4824 from "module_4824" /* 4824 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5614 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4631 */;

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
    const match = _mod4824.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11587"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11587")).with(PremiumGiftStyles.BOX, () => require("module_11588"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11587")).with(PremiumGiftStyles.BOX, () => require("module_11588")).with(PremiumGiftStyles.CUP, () => require("module_11589"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11587")).with(PremiumGiftStyles.BOX, () => require("module_11588")).with(PremiumGiftStyles.CUP, () => require("module_11589")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10967"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11587")).with(PremiumGiftStyles.BOX, () => require("module_11588")).with(PremiumGiftStyles.CUP, () => require("module_11589")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10967")).with(PremiumGiftStyles.COFFEE, () => require("module_10976"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11587")).with(PremiumGiftStyles.BOX, () => require("module_11588")).with(PremiumGiftStyles.CUP, () => require("module_11589")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10967")).with(PremiumGiftStyles.COFFEE, () => require("module_10976")).with(PremiumGiftStyles.CHEST, () => require("module_10973"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11587")).with(PremiumGiftStyles.BOX, () => require("module_11588")).with(PremiumGiftStyles.CUP, () => require("module_11589")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10967")).with(PremiumGiftStyles.COFFEE, () => require("module_10976")).with(PremiumGiftStyles.CHEST, () => require("module_10973")).with(PremiumGiftStyles.CAKE, () => require("module_10970"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11587")).with(PremiumGiftStyles.BOX, () => require("module_11588")).with(PremiumGiftStyles.CUP, () => require("module_11589")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10967")).with(PremiumGiftStyles.COFFEE, () => require("module_10976")).with(PremiumGiftStyles.CHEST, () => require("module_10973")).with(PremiumGiftStyles.CAKE, () => require("module_10970")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10979"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11587")).with(PremiumGiftStyles.BOX, () => require("module_11588")).with(PremiumGiftStyles.CUP, () => require("module_11589")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10967")).with(PremiumGiftStyles.COFFEE, () => require("module_10976")).with(PremiumGiftStyles.CHEST, () => require("module_10973")).with(PremiumGiftStyles.CAKE, () => require("module_10970")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10979")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10982"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11587")).with(PremiumGiftStyles.BOX, () => require("module_11588")).with(PremiumGiftStyles.CUP, () => require("module_11589")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10967")).with(PremiumGiftStyles.COFFEE, () => require("module_10976")).with(PremiumGiftStyles.CHEST, () => require("module_10973")).with(PremiumGiftStyles.CAKE, () => require("module_10970")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10979")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10982")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10985"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11587")).with(PremiumGiftStyles.BOX, () => require("module_11588")).with(PremiumGiftStyles.CUP, () => require("module_11589")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10967")).with(PremiumGiftStyles.COFFEE, () => require("module_10976")).with(PremiumGiftStyles.CHEST, () => require("module_10973")).with(PremiumGiftStyles.CAKE, () => require("module_10970")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10979")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10982")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10985")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10988"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11587")).with(PremiumGiftStyles.BOX, () => require("module_11588")).with(PremiumGiftStyles.CUP, () => require("module_11589")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10967")).with(PremiumGiftStyles.COFFEE, () => require("module_10976")).with(PremiumGiftStyles.CHEST, () => require("module_10973")).with(PremiumGiftStyles.CAKE, () => require("module_10970")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10979")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10982")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10985")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10988")).otherwise(() => require("module_10967")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11587")).with(PremiumGiftStyles.BOX, () => require("module_11588")).with(PremiumGiftStyles.CUP, () => require("module_11589")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10967")).with(PremiumGiftStyles.COFFEE, () => require("module_10976")).with(PremiumGiftStyles.CHEST, () => require("module_10973")).with(PremiumGiftStyles.CAKE, () => require("module_10970")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10979")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10982")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10985")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10988")).otherwise(() => require("module_10967")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};