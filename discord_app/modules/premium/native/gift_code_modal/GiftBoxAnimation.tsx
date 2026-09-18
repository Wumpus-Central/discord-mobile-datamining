// === Module 11700: GiftBoxAnimation ===

// Module 11700 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import _mod4907 from "module_4907" /* 4907 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5699 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4714 */;

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
    const match = _mod4907.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11701"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11701")).with(PremiumGiftStyles.BOX, () => require("module_11702"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11701")).with(PremiumGiftStyles.BOX, () => require("module_11702")).with(PremiumGiftStyles.CUP, () => require("module_11703"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11701")).with(PremiumGiftStyles.BOX, () => require("module_11702")).with(PremiumGiftStyles.CUP, () => require("module_11703")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11082"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11701")).with(PremiumGiftStyles.BOX, () => require("module_11702")).with(PremiumGiftStyles.CUP, () => require("module_11703")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11082")).with(PremiumGiftStyles.COFFEE, () => require("module_11091"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11701")).with(PremiumGiftStyles.BOX, () => require("module_11702")).with(PremiumGiftStyles.CUP, () => require("module_11703")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11082")).with(PremiumGiftStyles.COFFEE, () => require("module_11091")).with(PremiumGiftStyles.CHEST, () => require("module_11088"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11701")).with(PremiumGiftStyles.BOX, () => require("module_11702")).with(PremiumGiftStyles.CUP, () => require("module_11703")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11082")).with(PremiumGiftStyles.COFFEE, () => require("module_11091")).with(PremiumGiftStyles.CHEST, () => require("module_11088")).with(PremiumGiftStyles.CAKE, () => require("module_11085"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11701")).with(PremiumGiftStyles.BOX, () => require("module_11702")).with(PremiumGiftStyles.CUP, () => require("module_11703")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11082")).with(PremiumGiftStyles.COFFEE, () => require("module_11091")).with(PremiumGiftStyles.CHEST, () => require("module_11088")).with(PremiumGiftStyles.CAKE, () => require("module_11085")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11094"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11701")).with(PremiumGiftStyles.BOX, () => require("module_11702")).with(PremiumGiftStyles.CUP, () => require("module_11703")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11082")).with(PremiumGiftStyles.COFFEE, () => require("module_11091")).with(PremiumGiftStyles.CHEST, () => require("module_11088")).with(PremiumGiftStyles.CAKE, () => require("module_11085")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11094")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11097"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11701")).with(PremiumGiftStyles.BOX, () => require("module_11702")).with(PremiumGiftStyles.CUP, () => require("module_11703")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11082")).with(PremiumGiftStyles.COFFEE, () => require("module_11091")).with(PremiumGiftStyles.CHEST, () => require("module_11088")).with(PremiumGiftStyles.CAKE, () => require("module_11085")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11094")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11097")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11100"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11701")).with(PremiumGiftStyles.BOX, () => require("module_11702")).with(PremiumGiftStyles.CUP, () => require("module_11703")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11082")).with(PremiumGiftStyles.COFFEE, () => require("module_11091")).with(PremiumGiftStyles.CHEST, () => require("module_11088")).with(PremiumGiftStyles.CAKE, () => require("module_11085")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11094")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11097")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11100")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11103"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11701")).with(PremiumGiftStyles.BOX, () => require("module_11702")).with(PremiumGiftStyles.CUP, () => require("module_11703")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11082")).with(PremiumGiftStyles.COFFEE, () => require("module_11091")).with(PremiumGiftStyles.CHEST, () => require("module_11088")).with(PremiumGiftStyles.CAKE, () => require("module_11085")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11094")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11097")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11100")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11103")).otherwise(() => require("module_11082")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11701")).with(PremiumGiftStyles.BOX, () => require("module_11702")).with(PremiumGiftStyles.CUP, () => require("module_11703")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11082")).with(PremiumGiftStyles.COFFEE, () => require("module_11091")).with(PremiumGiftStyles.CHEST, () => require("module_11088")).with(PremiumGiftStyles.CAKE, () => require("module_11085")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11094")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11097")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11100")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11103")).otherwise(() => require("module_11082")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};