// === Module 11453: GiftBoxAnimation ===

// Module 11453 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import _mod4745 from "module_4745" /* 4745 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5529 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
const PremiumGiftStyles = fn(1373).PremiumGiftStyles;
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
    const match = _mod4745.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11454"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11454")).with(PremiumGiftStyles.BOX, () => require("module_11455"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11454")).with(PremiumGiftStyles.BOX, () => require("module_11455")).with(PremiumGiftStyles.CUP, () => require("module_11456"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11454")).with(PremiumGiftStyles.BOX, () => require("module_11455")).with(PremiumGiftStyles.CUP, () => require("module_11456")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10839"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11454")).with(PremiumGiftStyles.BOX, () => require("module_11455")).with(PremiumGiftStyles.CUP, () => require("module_11456")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10839")).with(PremiumGiftStyles.COFFEE, () => require("module_10848"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11454")).with(PremiumGiftStyles.BOX, () => require("module_11455")).with(PremiumGiftStyles.CUP, () => require("module_11456")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10839")).with(PremiumGiftStyles.COFFEE, () => require("module_10848")).with(PremiumGiftStyles.CHEST, () => require("module_10845"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11454")).with(PremiumGiftStyles.BOX, () => require("module_11455")).with(PremiumGiftStyles.CUP, () => require("module_11456")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10839")).with(PremiumGiftStyles.COFFEE, () => require("module_10848")).with(PremiumGiftStyles.CHEST, () => require("module_10845")).with(PremiumGiftStyles.CAKE, () => require("module_10842"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11454")).with(PremiumGiftStyles.BOX, () => require("module_11455")).with(PremiumGiftStyles.CUP, () => require("module_11456")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10839")).with(PremiumGiftStyles.COFFEE, () => require("module_10848")).with(PremiumGiftStyles.CHEST, () => require("module_10845")).with(PremiumGiftStyles.CAKE, () => require("module_10842")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10851"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11454")).with(PremiumGiftStyles.BOX, () => require("module_11455")).with(PremiumGiftStyles.CUP, () => require("module_11456")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10839")).with(PremiumGiftStyles.COFFEE, () => require("module_10848")).with(PremiumGiftStyles.CHEST, () => require("module_10845")).with(PremiumGiftStyles.CAKE, () => require("module_10842")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10851")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10854"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11454")).with(PremiumGiftStyles.BOX, () => require("module_11455")).with(PremiumGiftStyles.CUP, () => require("module_11456")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10839")).with(PremiumGiftStyles.COFFEE, () => require("module_10848")).with(PremiumGiftStyles.CHEST, () => require("module_10845")).with(PremiumGiftStyles.CAKE, () => require("module_10842")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10851")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10854")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10857"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11454")).with(PremiumGiftStyles.BOX, () => require("module_11455")).with(PremiumGiftStyles.CUP, () => require("module_11456")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10839")).with(PremiumGiftStyles.COFFEE, () => require("module_10848")).with(PremiumGiftStyles.CHEST, () => require("module_10845")).with(PremiumGiftStyles.CAKE, () => require("module_10842")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10851")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10854")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10857")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10860"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11454")).with(PremiumGiftStyles.BOX, () => require("module_11455")).with(PremiumGiftStyles.CUP, () => require("module_11456")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10839")).with(PremiumGiftStyles.COFFEE, () => require("module_10848")).with(PremiumGiftStyles.CHEST, () => require("module_10845")).with(PremiumGiftStyles.CAKE, () => require("module_10842")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10851")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10854")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10857")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10860")).otherwise(() => require("module_10839")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11454")).with(PremiumGiftStyles.BOX, () => require("module_11455")).with(PremiumGiftStyles.CUP, () => require("module_11456")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10839")).with(PremiumGiftStyles.COFFEE, () => require("module_10848")).with(PremiumGiftStyles.CHEST, () => require("module_10845")).with(PremiumGiftStyles.CAKE, () => require("module_10842")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10851")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10854")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10857")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10860")).otherwise(() => require("module_10839")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};