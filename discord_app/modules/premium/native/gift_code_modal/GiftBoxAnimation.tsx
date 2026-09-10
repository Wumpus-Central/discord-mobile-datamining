// === Module 11520: GiftBoxAnimation ===

// Module 11520 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import _mod4790 from "module_4790" /* 4790 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5579 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4597 */;

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
    const match = _mod4790.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11521"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11521")).with(PremiumGiftStyles.BOX, () => require("module_11522"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11521")).with(PremiumGiftStyles.BOX, () => require("module_11522")).with(PremiumGiftStyles.CUP, () => require("module_11523"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11521")).with(PremiumGiftStyles.BOX, () => require("module_11522")).with(PremiumGiftStyles.CUP, () => require("module_11523")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10904"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11521")).with(PremiumGiftStyles.BOX, () => require("module_11522")).with(PremiumGiftStyles.CUP, () => require("module_11523")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10904")).with(PremiumGiftStyles.COFFEE, () => require("module_10913"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11521")).with(PremiumGiftStyles.BOX, () => require("module_11522")).with(PremiumGiftStyles.CUP, () => require("module_11523")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10904")).with(PremiumGiftStyles.COFFEE, () => require("module_10913")).with(PremiumGiftStyles.CHEST, () => require("module_10910"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11521")).with(PremiumGiftStyles.BOX, () => require("module_11522")).with(PremiumGiftStyles.CUP, () => require("module_11523")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10904")).with(PremiumGiftStyles.COFFEE, () => require("module_10913")).with(PremiumGiftStyles.CHEST, () => require("module_10910")).with(PremiumGiftStyles.CAKE, () => require("module_10907"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11521")).with(PremiumGiftStyles.BOX, () => require("module_11522")).with(PremiumGiftStyles.CUP, () => require("module_11523")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10904")).with(PremiumGiftStyles.COFFEE, () => require("module_10913")).with(PremiumGiftStyles.CHEST, () => require("module_10910")).with(PremiumGiftStyles.CAKE, () => require("module_10907")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10916"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11521")).with(PremiumGiftStyles.BOX, () => require("module_11522")).with(PremiumGiftStyles.CUP, () => require("module_11523")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10904")).with(PremiumGiftStyles.COFFEE, () => require("module_10913")).with(PremiumGiftStyles.CHEST, () => require("module_10910")).with(PremiumGiftStyles.CAKE, () => require("module_10907")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10916")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10919"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11521")).with(PremiumGiftStyles.BOX, () => require("module_11522")).with(PremiumGiftStyles.CUP, () => require("module_11523")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10904")).with(PremiumGiftStyles.COFFEE, () => require("module_10913")).with(PremiumGiftStyles.CHEST, () => require("module_10910")).with(PremiumGiftStyles.CAKE, () => require("module_10907")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10916")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10919")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10922"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11521")).with(PremiumGiftStyles.BOX, () => require("module_11522")).with(PremiumGiftStyles.CUP, () => require("module_11523")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10904")).with(PremiumGiftStyles.COFFEE, () => require("module_10913")).with(PremiumGiftStyles.CHEST, () => require("module_10910")).with(PremiumGiftStyles.CAKE, () => require("module_10907")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10916")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10919")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10922")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10925"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11521")).with(PremiumGiftStyles.BOX, () => require("module_11522")).with(PremiumGiftStyles.CUP, () => require("module_11523")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10904")).with(PremiumGiftStyles.COFFEE, () => require("module_10913")).with(PremiumGiftStyles.CHEST, () => require("module_10910")).with(PremiumGiftStyles.CAKE, () => require("module_10907")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10916")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10919")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10922")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10925")).otherwise(() => require("module_10904")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11521")).with(PremiumGiftStyles.BOX, () => require("module_11522")).with(PremiumGiftStyles.CUP, () => require("module_11523")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10904")).with(PremiumGiftStyles.COFFEE, () => require("module_10913")).with(PremiumGiftStyles.CHEST, () => require("module_10910")).with(PremiumGiftStyles.CAKE, () => require("module_10907")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10916")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10919")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10922")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10925")).otherwise(() => require("module_10904")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};