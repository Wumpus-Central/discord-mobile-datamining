// === Module 11645: GiftBoxAnimation ===

// Module 11645 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5741 */;
import _mod6676 from "module_6676" /* 6676 */;
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
    const match = _mod6676.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11646"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11646")).with(PremiumGiftStyles.BOX, () => require("module_11647"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11646")).with(PremiumGiftStyles.BOX, () => require("module_11647")).with(PremiumGiftStyles.CUP, () => require("module_11648"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11646")).with(PremiumGiftStyles.BOX, () => require("module_11647")).with(PremiumGiftStyles.CUP, () => require("module_11648")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10831"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11646")).with(PremiumGiftStyles.BOX, () => require("module_11647")).with(PremiumGiftStyles.CUP, () => require("module_11648")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10831")).with(PremiumGiftStyles.COFFEE, () => require("module_10840"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11646")).with(PremiumGiftStyles.BOX, () => require("module_11647")).with(PremiumGiftStyles.CUP, () => require("module_11648")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10831")).with(PremiumGiftStyles.COFFEE, () => require("module_10840")).with(PremiumGiftStyles.CHEST, () => require("module_10837"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11646")).with(PremiumGiftStyles.BOX, () => require("module_11647")).with(PremiumGiftStyles.CUP, () => require("module_11648")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10831")).with(PremiumGiftStyles.COFFEE, () => require("module_10840")).with(PremiumGiftStyles.CHEST, () => require("module_10837")).with(PremiumGiftStyles.CAKE, () => require("module_10834"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11646")).with(PremiumGiftStyles.BOX, () => require("module_11647")).with(PremiumGiftStyles.CUP, () => require("module_11648")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10831")).with(PremiumGiftStyles.COFFEE, () => require("module_10840")).with(PremiumGiftStyles.CHEST, () => require("module_10837")).with(PremiumGiftStyles.CAKE, () => require("module_10834")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10843"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11646")).with(PremiumGiftStyles.BOX, () => require("module_11647")).with(PremiumGiftStyles.CUP, () => require("module_11648")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10831")).with(PremiumGiftStyles.COFFEE, () => require("module_10840")).with(PremiumGiftStyles.CHEST, () => require("module_10837")).with(PremiumGiftStyles.CAKE, () => require("module_10834")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10843")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10846"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11646")).with(PremiumGiftStyles.BOX, () => require("module_11647")).with(PremiumGiftStyles.CUP, () => require("module_11648")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10831")).with(PremiumGiftStyles.COFFEE, () => require("module_10840")).with(PremiumGiftStyles.CHEST, () => require("module_10837")).with(PremiumGiftStyles.CAKE, () => require("module_10834")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10843")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10846")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10849"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11646")).with(PremiumGiftStyles.BOX, () => require("module_11647")).with(PremiumGiftStyles.CUP, () => require("module_11648")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10831")).with(PremiumGiftStyles.COFFEE, () => require("module_10840")).with(PremiumGiftStyles.CHEST, () => require("module_10837")).with(PremiumGiftStyles.CAKE, () => require("module_10834")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10843")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10846")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10849")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10852"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11646")).with(PremiumGiftStyles.BOX, () => require("module_11647")).with(PremiumGiftStyles.CUP, () => require("module_11648")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10831")).with(PremiumGiftStyles.COFFEE, () => require("module_10840")).with(PremiumGiftStyles.CHEST, () => require("module_10837")).with(PremiumGiftStyles.CAKE, () => require("module_10834")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10843")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10846")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10849")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10852")).otherwise(() => require("module_10831")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11646")).with(PremiumGiftStyles.BOX, () => require("module_11647")).with(PremiumGiftStyles.CUP, () => require("module_11648")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10831")).with(PremiumGiftStyles.COFFEE, () => require("module_10840")).with(PremiumGiftStyles.CHEST, () => require("module_10837")).with(PremiumGiftStyles.CAKE, () => require("module_10834")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10843")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10846")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10849")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10852")).otherwise(() => require("module_10831")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};