// === Module 11653: GiftBoxAnimation ===

// Module 11653 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5745 */;
import _mod6611 from "module_6611" /* 6611 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;

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
    const match = _mod6611.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11654"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11654")).with(PremiumGiftStyles.BOX, () => require("module_11655"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11654")).with(PremiumGiftStyles.BOX, () => require("module_11655")).with(PremiumGiftStyles.CUP, () => require("module_11656"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11654")).with(PremiumGiftStyles.BOX, () => require("module_11655")).with(PremiumGiftStyles.CUP, () => require("module_11656")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10820"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11654")).with(PremiumGiftStyles.BOX, () => require("module_11655")).with(PremiumGiftStyles.CUP, () => require("module_11656")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10820")).with(PremiumGiftStyles.COFFEE, () => require("module_10829"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11654")).with(PremiumGiftStyles.BOX, () => require("module_11655")).with(PremiumGiftStyles.CUP, () => require("module_11656")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10820")).with(PremiumGiftStyles.COFFEE, () => require("module_10829")).with(PremiumGiftStyles.CHEST, () => require("module_10826"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11654")).with(PremiumGiftStyles.BOX, () => require("module_11655")).with(PremiumGiftStyles.CUP, () => require("module_11656")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10820")).with(PremiumGiftStyles.COFFEE, () => require("module_10829")).with(PremiumGiftStyles.CHEST, () => require("module_10826")).with(PremiumGiftStyles.CAKE, () => require("module_10823"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11654")).with(PremiumGiftStyles.BOX, () => require("module_11655")).with(PremiumGiftStyles.CUP, () => require("module_11656")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10820")).with(PremiumGiftStyles.COFFEE, () => require("module_10829")).with(PremiumGiftStyles.CHEST, () => require("module_10826")).with(PremiumGiftStyles.CAKE, () => require("module_10823")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10832"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11654")).with(PremiumGiftStyles.BOX, () => require("module_11655")).with(PremiumGiftStyles.CUP, () => require("module_11656")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10820")).with(PremiumGiftStyles.COFFEE, () => require("module_10829")).with(PremiumGiftStyles.CHEST, () => require("module_10826")).with(PremiumGiftStyles.CAKE, () => require("module_10823")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10832")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10835"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11654")).with(PremiumGiftStyles.BOX, () => require("module_11655")).with(PremiumGiftStyles.CUP, () => require("module_11656")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10820")).with(PremiumGiftStyles.COFFEE, () => require("module_10829")).with(PremiumGiftStyles.CHEST, () => require("module_10826")).with(PremiumGiftStyles.CAKE, () => require("module_10823")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10832")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10835")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10838"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11654")).with(PremiumGiftStyles.BOX, () => require("module_11655")).with(PremiumGiftStyles.CUP, () => require("module_11656")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10820")).with(PremiumGiftStyles.COFFEE, () => require("module_10829")).with(PremiumGiftStyles.CHEST, () => require("module_10826")).with(PremiumGiftStyles.CAKE, () => require("module_10823")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10832")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10835")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10838")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10841"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11654")).with(PremiumGiftStyles.BOX, () => require("module_11655")).with(PremiumGiftStyles.CUP, () => require("module_11656")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10820")).with(PremiumGiftStyles.COFFEE, () => require("module_10829")).with(PremiumGiftStyles.CHEST, () => require("module_10826")).with(PremiumGiftStyles.CAKE, () => require("module_10823")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10832")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10835")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10838")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10841")).otherwise(() => require("module_10820")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11654")).with(PremiumGiftStyles.BOX, () => require("module_11655")).with(PremiumGiftStyles.CUP, () => require("module_11656")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10820")).with(PremiumGiftStyles.COFFEE, () => require("module_10829")).with(PremiumGiftStyles.CHEST, () => require("module_10826")).with(PremiumGiftStyles.CAKE, () => require("module_10823")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10832")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10835")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10838")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10841")).otherwise(() => require("module_10820")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};