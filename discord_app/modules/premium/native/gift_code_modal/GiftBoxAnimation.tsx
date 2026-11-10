// === Module 11662: GiftBoxAnimation ===

// Module 11662 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5747 */;
import _mod6613 from "module_6613" /* 6613 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5143 */;

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
    const match = _mod6613.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11663"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11663")).with(PremiumGiftStyles.BOX, () => require("module_11664"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11663")).with(PremiumGiftStyles.BOX, () => require("module_11664")).with(PremiumGiftStyles.CUP, () => require("module_11665"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11663")).with(PremiumGiftStyles.BOX, () => require("module_11664")).with(PremiumGiftStyles.CUP, () => require("module_11665")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10829"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11663")).with(PremiumGiftStyles.BOX, () => require("module_11664")).with(PremiumGiftStyles.CUP, () => require("module_11665")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10829")).with(PremiumGiftStyles.COFFEE, () => require("module_10838"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11663")).with(PremiumGiftStyles.BOX, () => require("module_11664")).with(PremiumGiftStyles.CUP, () => require("module_11665")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10829")).with(PremiumGiftStyles.COFFEE, () => require("module_10838")).with(PremiumGiftStyles.CHEST, () => require("module_10835"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11663")).with(PremiumGiftStyles.BOX, () => require("module_11664")).with(PremiumGiftStyles.CUP, () => require("module_11665")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10829")).with(PremiumGiftStyles.COFFEE, () => require("module_10838")).with(PremiumGiftStyles.CHEST, () => require("module_10835")).with(PremiumGiftStyles.CAKE, () => require("module_10832"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11663")).with(PremiumGiftStyles.BOX, () => require("module_11664")).with(PremiumGiftStyles.CUP, () => require("module_11665")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10829")).with(PremiumGiftStyles.COFFEE, () => require("module_10838")).with(PremiumGiftStyles.CHEST, () => require("module_10835")).with(PremiumGiftStyles.CAKE, () => require("module_10832")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10841"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11663")).with(PremiumGiftStyles.BOX, () => require("module_11664")).with(PremiumGiftStyles.CUP, () => require("module_11665")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10829")).with(PremiumGiftStyles.COFFEE, () => require("module_10838")).with(PremiumGiftStyles.CHEST, () => require("module_10835")).with(PremiumGiftStyles.CAKE, () => require("module_10832")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10841")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10844"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11663")).with(PremiumGiftStyles.BOX, () => require("module_11664")).with(PremiumGiftStyles.CUP, () => require("module_11665")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10829")).with(PremiumGiftStyles.COFFEE, () => require("module_10838")).with(PremiumGiftStyles.CHEST, () => require("module_10835")).with(PremiumGiftStyles.CAKE, () => require("module_10832")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10841")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10844")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10847"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11663")).with(PremiumGiftStyles.BOX, () => require("module_11664")).with(PremiumGiftStyles.CUP, () => require("module_11665")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10829")).with(PremiumGiftStyles.COFFEE, () => require("module_10838")).with(PremiumGiftStyles.CHEST, () => require("module_10835")).with(PremiumGiftStyles.CAKE, () => require("module_10832")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10841")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10844")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10847")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10850"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11663")).with(PremiumGiftStyles.BOX, () => require("module_11664")).with(PremiumGiftStyles.CUP, () => require("module_11665")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10829")).with(PremiumGiftStyles.COFFEE, () => require("module_10838")).with(PremiumGiftStyles.CHEST, () => require("module_10835")).with(PremiumGiftStyles.CAKE, () => require("module_10832")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10841")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10844")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10847")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10850")).otherwise(() => require("module_10829")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11663")).with(PremiumGiftStyles.BOX, () => require("module_11664")).with(PremiumGiftStyles.CUP, () => require("module_11665")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10829")).with(PremiumGiftStyles.COFFEE, () => require("module_10838")).with(PremiumGiftStyles.CHEST, () => require("module_10835")).with(PremiumGiftStyles.CAKE, () => require("module_10832")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10841")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10844")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10847")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10850")).otherwise(() => require("module_10829")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};