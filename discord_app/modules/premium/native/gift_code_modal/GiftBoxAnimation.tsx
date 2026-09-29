// === Module 11161: GiftBoxAnimation ===

// Module 11161 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import _mod5021 from "module_5021" /* 5021 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 6007 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;

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
    const match = _mod5021.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11162"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11162")).with(PremiumGiftStyles.BOX, () => require("module_11163"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11162")).with(PremiumGiftStyles.BOX, () => require("module_11163")).with(PremiumGiftStyles.CUP, () => require("module_11164"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11162")).with(PremiumGiftStyles.BOX, () => require("module_11163")).with(PremiumGiftStyles.CUP, () => require("module_11164")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10463"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11162")).with(PremiumGiftStyles.BOX, () => require("module_11163")).with(PremiumGiftStyles.CUP, () => require("module_11164")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10463")).with(PremiumGiftStyles.COFFEE, () => require("module_10472"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11162")).with(PremiumGiftStyles.BOX, () => require("module_11163")).with(PremiumGiftStyles.CUP, () => require("module_11164")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10463")).with(PremiumGiftStyles.COFFEE, () => require("module_10472")).with(PremiumGiftStyles.CHEST, () => require("module_10469"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11162")).with(PremiumGiftStyles.BOX, () => require("module_11163")).with(PremiumGiftStyles.CUP, () => require("module_11164")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10463")).with(PremiumGiftStyles.COFFEE, () => require("module_10472")).with(PremiumGiftStyles.CHEST, () => require("module_10469")).with(PremiumGiftStyles.CAKE, () => require("module_10466"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11162")).with(PremiumGiftStyles.BOX, () => require("module_11163")).with(PremiumGiftStyles.CUP, () => require("module_11164")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10463")).with(PremiumGiftStyles.COFFEE, () => require("module_10472")).with(PremiumGiftStyles.CHEST, () => require("module_10469")).with(PremiumGiftStyles.CAKE, () => require("module_10466")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10475"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11162")).with(PremiumGiftStyles.BOX, () => require("module_11163")).with(PremiumGiftStyles.CUP, () => require("module_11164")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10463")).with(PremiumGiftStyles.COFFEE, () => require("module_10472")).with(PremiumGiftStyles.CHEST, () => require("module_10469")).with(PremiumGiftStyles.CAKE, () => require("module_10466")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10475")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10478"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11162")).with(PremiumGiftStyles.BOX, () => require("module_11163")).with(PremiumGiftStyles.CUP, () => require("module_11164")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10463")).with(PremiumGiftStyles.COFFEE, () => require("module_10472")).with(PremiumGiftStyles.CHEST, () => require("module_10469")).with(PremiumGiftStyles.CAKE, () => require("module_10466")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10475")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10478")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10481"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11162")).with(PremiumGiftStyles.BOX, () => require("module_11163")).with(PremiumGiftStyles.CUP, () => require("module_11164")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10463")).with(PremiumGiftStyles.COFFEE, () => require("module_10472")).with(PremiumGiftStyles.CHEST, () => require("module_10469")).with(PremiumGiftStyles.CAKE, () => require("module_10466")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10475")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10478")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10481")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10484"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11162")).with(PremiumGiftStyles.BOX, () => require("module_11163")).with(PremiumGiftStyles.CUP, () => require("module_11164")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10463")).with(PremiumGiftStyles.COFFEE, () => require("module_10472")).with(PremiumGiftStyles.CHEST, () => require("module_10469")).with(PremiumGiftStyles.CAKE, () => require("module_10466")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10475")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10478")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10481")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10484")).otherwise(() => require("module_10463")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11162")).with(PremiumGiftStyles.BOX, () => require("module_11163")).with(PremiumGiftStyles.CUP, () => require("module_11164")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10463")).with(PremiumGiftStyles.COFFEE, () => require("module_10472")).with(PremiumGiftStyles.CHEST, () => require("module_10469")).with(PremiumGiftStyles.CAKE, () => require("module_10466")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10475")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10478")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10481")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10484")).otherwise(() => require("module_10463")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};