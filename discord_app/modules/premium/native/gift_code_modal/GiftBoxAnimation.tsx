// === Module 11883: GiftBoxAnimation ===

// Module 11883 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5408 */;
import _mod6289 from "module_6289" /* 6289 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4824 */;

const require = globalThis.__r;

require = fn;
const PremiumGiftStyles = fn(1390).PremiumGiftStyles;
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
    const match = _mod6289.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11884"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11884")).with(PremiumGiftStyles.BOX, () => require("module_11885"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11884")).with(PremiumGiftStyles.BOX, () => require("module_11885")).with(PremiumGiftStyles.CUP, () => require("module_11886"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11884")).with(PremiumGiftStyles.BOX, () => require("module_11885")).with(PremiumGiftStyles.CUP, () => require("module_11886")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9521"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11884")).with(PremiumGiftStyles.BOX, () => require("module_11885")).with(PremiumGiftStyles.CUP, () => require("module_11886")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9521")).with(PremiumGiftStyles.COFFEE, () => require("module_9530"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11884")).with(PremiumGiftStyles.BOX, () => require("module_11885")).with(PremiumGiftStyles.CUP, () => require("module_11886")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9521")).with(PremiumGiftStyles.COFFEE, () => require("module_9530")).with(PremiumGiftStyles.CHEST, () => require("module_9527"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11884")).with(PremiumGiftStyles.BOX, () => require("module_11885")).with(PremiumGiftStyles.CUP, () => require("module_11886")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9521")).with(PremiumGiftStyles.COFFEE, () => require("module_9530")).with(PremiumGiftStyles.CHEST, () => require("module_9527")).with(PremiumGiftStyles.CAKE, () => require("module_9524"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11884")).with(PremiumGiftStyles.BOX, () => require("module_11885")).with(PremiumGiftStyles.CUP, () => require("module_11886")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9521")).with(PremiumGiftStyles.COFFEE, () => require("module_9530")).with(PremiumGiftStyles.CHEST, () => require("module_9527")).with(PremiumGiftStyles.CAKE, () => require("module_9524")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_9533"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11884")).with(PremiumGiftStyles.BOX, () => require("module_11885")).with(PremiumGiftStyles.CUP, () => require("module_11886")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9521")).with(PremiumGiftStyles.COFFEE, () => require("module_9530")).with(PremiumGiftStyles.CHEST, () => require("module_9527")).with(PremiumGiftStyles.CAKE, () => require("module_9524")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_9533")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_9536"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11884")).with(PremiumGiftStyles.BOX, () => require("module_11885")).with(PremiumGiftStyles.CUP, () => require("module_11886")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9521")).with(PremiumGiftStyles.COFFEE, () => require("module_9530")).with(PremiumGiftStyles.CHEST, () => require("module_9527")).with(PremiumGiftStyles.CAKE, () => require("module_9524")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_9533")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_9536")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_9539"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11884")).with(PremiumGiftStyles.BOX, () => require("module_11885")).with(PremiumGiftStyles.CUP, () => require("module_11886")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9521")).with(PremiumGiftStyles.COFFEE, () => require("module_9530")).with(PremiumGiftStyles.CHEST, () => require("module_9527")).with(PremiumGiftStyles.CAKE, () => require("module_9524")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_9533")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_9536")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_9539")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_9542"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11884")).with(PremiumGiftStyles.BOX, () => require("module_11885")).with(PremiumGiftStyles.CUP, () => require("module_11886")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9521")).with(PremiumGiftStyles.COFFEE, () => require("module_9530")).with(PremiumGiftStyles.CHEST, () => require("module_9527")).with(PremiumGiftStyles.CAKE, () => require("module_9524")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_9533")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_9536")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_9539")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_9542")).otherwise(() => require("module_9521")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11884")).with(PremiumGiftStyles.BOX, () => require("module_11885")).with(PremiumGiftStyles.CUP, () => require("module_11886")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9521")).with(PremiumGiftStyles.COFFEE, () => require("module_9530")).with(PremiumGiftStyles.CHEST, () => require("module_9527")).with(PremiumGiftStyles.CAKE, () => require("module_9524")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_9533")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_9536")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_9539")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_9542")).otherwise(() => require("module_9521")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};