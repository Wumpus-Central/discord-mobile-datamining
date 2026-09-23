// === Module 11791: GiftBoxAnimation ===

// Module 11791 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import _mod5012 from "module_5012" /* 5012 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5832 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4819 */;

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
    const match = _mod5012.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11792"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11792")).with(PremiumGiftStyles.BOX, () => require("module_11793"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11792")).with(PremiumGiftStyles.BOX, () => require("module_11793")).with(PremiumGiftStyles.CUP, () => require("module_11794"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11792")).with(PremiumGiftStyles.BOX, () => require("module_11793")).with(PremiumGiftStyles.CUP, () => require("module_11794")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11178"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11792")).with(PremiumGiftStyles.BOX, () => require("module_11793")).with(PremiumGiftStyles.CUP, () => require("module_11794")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11178")).with(PremiumGiftStyles.COFFEE, () => require("module_11187"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11792")).with(PremiumGiftStyles.BOX, () => require("module_11793")).with(PremiumGiftStyles.CUP, () => require("module_11794")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11178")).with(PremiumGiftStyles.COFFEE, () => require("module_11187")).with(PremiumGiftStyles.CHEST, () => require("module_11184"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11792")).with(PremiumGiftStyles.BOX, () => require("module_11793")).with(PremiumGiftStyles.CUP, () => require("module_11794")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11178")).with(PremiumGiftStyles.COFFEE, () => require("module_11187")).with(PremiumGiftStyles.CHEST, () => require("module_11184")).with(PremiumGiftStyles.CAKE, () => require("module_11181"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11792")).with(PremiumGiftStyles.BOX, () => require("module_11793")).with(PremiumGiftStyles.CUP, () => require("module_11794")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11178")).with(PremiumGiftStyles.COFFEE, () => require("module_11187")).with(PremiumGiftStyles.CHEST, () => require("module_11184")).with(PremiumGiftStyles.CAKE, () => require("module_11181")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11190"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11792")).with(PremiumGiftStyles.BOX, () => require("module_11793")).with(PremiumGiftStyles.CUP, () => require("module_11794")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11178")).with(PremiumGiftStyles.COFFEE, () => require("module_11187")).with(PremiumGiftStyles.CHEST, () => require("module_11184")).with(PremiumGiftStyles.CAKE, () => require("module_11181")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11190")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11193"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11792")).with(PremiumGiftStyles.BOX, () => require("module_11793")).with(PremiumGiftStyles.CUP, () => require("module_11794")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11178")).with(PremiumGiftStyles.COFFEE, () => require("module_11187")).with(PremiumGiftStyles.CHEST, () => require("module_11184")).with(PremiumGiftStyles.CAKE, () => require("module_11181")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11190")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11193")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11196"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11792")).with(PremiumGiftStyles.BOX, () => require("module_11793")).with(PremiumGiftStyles.CUP, () => require("module_11794")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11178")).with(PremiumGiftStyles.COFFEE, () => require("module_11187")).with(PremiumGiftStyles.CHEST, () => require("module_11184")).with(PremiumGiftStyles.CAKE, () => require("module_11181")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11190")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11193")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11196")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11199"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11792")).with(PremiumGiftStyles.BOX, () => require("module_11793")).with(PremiumGiftStyles.CUP, () => require("module_11794")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11178")).with(PremiumGiftStyles.COFFEE, () => require("module_11187")).with(PremiumGiftStyles.CHEST, () => require("module_11184")).with(PremiumGiftStyles.CAKE, () => require("module_11181")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11190")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11193")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11196")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11199")).otherwise(() => require("module_11178")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11792")).with(PremiumGiftStyles.BOX, () => require("module_11793")).with(PremiumGiftStyles.CUP, () => require("module_11794")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11178")).with(PremiumGiftStyles.COFFEE, () => require("module_11187")).with(PremiumGiftStyles.CHEST, () => require("module_11184")).with(PremiumGiftStyles.CAKE, () => require("module_11181")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11190")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11193")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11196")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11199")).otherwise(() => require("module_11178")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};