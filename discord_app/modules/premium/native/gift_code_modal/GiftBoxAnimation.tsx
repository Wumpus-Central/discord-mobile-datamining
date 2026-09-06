// === Module 11448: GiftBoxAnimation ===

// Module 11448 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5529 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

const _mod4745 = tmp(4745);
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
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11449"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11449")).with(PremiumGiftStyles.BOX, () => require("module_11450"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11449")).with(PremiumGiftStyles.BOX, () => require("module_11450")).with(PremiumGiftStyles.CUP, () => require("module_11451"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11449")).with(PremiumGiftStyles.BOX, () => require("module_11450")).with(PremiumGiftStyles.CUP, () => require("module_11451")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10834"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11449")).with(PremiumGiftStyles.BOX, () => require("module_11450")).with(PremiumGiftStyles.CUP, () => require("module_11451")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10834")).with(PremiumGiftStyles.COFFEE, () => require("module_10843"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11449")).with(PremiumGiftStyles.BOX, () => require("module_11450")).with(PremiumGiftStyles.CUP, () => require("module_11451")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10834")).with(PremiumGiftStyles.COFFEE, () => require("module_10843")).with(PremiumGiftStyles.CHEST, () => require("module_10840"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11449")).with(PremiumGiftStyles.BOX, () => require("module_11450")).with(PremiumGiftStyles.CUP, () => require("module_11451")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10834")).with(PremiumGiftStyles.COFFEE, () => require("module_10843")).with(PremiumGiftStyles.CHEST, () => require("module_10840")).with(PremiumGiftStyles.CAKE, () => require("module_10837"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11449")).with(PremiumGiftStyles.BOX, () => require("module_11450")).with(PremiumGiftStyles.CUP, () => require("module_11451")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10834")).with(PremiumGiftStyles.COFFEE, () => require("module_10843")).with(PremiumGiftStyles.CHEST, () => require("module_10840")).with(PremiumGiftStyles.CAKE, () => require("module_10837")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10846"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11449")).with(PremiumGiftStyles.BOX, () => require("module_11450")).with(PremiumGiftStyles.CUP, () => require("module_11451")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10834")).with(PremiumGiftStyles.COFFEE, () => require("module_10843")).with(PremiumGiftStyles.CHEST, () => require("module_10840")).with(PremiumGiftStyles.CAKE, () => require("module_10837")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10846")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10849"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11449")).with(PremiumGiftStyles.BOX, () => require("module_11450")).with(PremiumGiftStyles.CUP, () => require("module_11451")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10834")).with(PremiumGiftStyles.COFFEE, () => require("module_10843")).with(PremiumGiftStyles.CHEST, () => require("module_10840")).with(PremiumGiftStyles.CAKE, () => require("module_10837")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10846")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10849")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10852"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11449")).with(PremiumGiftStyles.BOX, () => require("module_11450")).with(PremiumGiftStyles.CUP, () => require("module_11451")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10834")).with(PremiumGiftStyles.COFFEE, () => require("module_10843")).with(PremiumGiftStyles.CHEST, () => require("module_10840")).with(PremiumGiftStyles.CAKE, () => require("module_10837")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10846")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10849")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10852")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10855"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11449")).with(PremiumGiftStyles.BOX, () => require("module_11450")).with(PremiumGiftStyles.CUP, () => require("module_11451")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10834")).with(PremiumGiftStyles.COFFEE, () => require("module_10843")).with(PremiumGiftStyles.CHEST, () => require("module_10840")).with(PremiumGiftStyles.CAKE, () => require("module_10837")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10846")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10849")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10852")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10855")).otherwise(() => require("module_10834")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11449")).with(PremiumGiftStyles.BOX, () => require("module_11450")).with(PremiumGiftStyles.CUP, () => require("module_11451")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10834")).with(PremiumGiftStyles.COFFEE, () => require("module_10843")).with(PremiumGiftStyles.CHEST, () => require("module_10840")).with(PremiumGiftStyles.CAKE, () => require("module_10837")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10846")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10849")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10852")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10855")).otherwise(() => require("module_10834")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};