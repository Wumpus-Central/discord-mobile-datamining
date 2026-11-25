// === Module 11899: GiftBoxAnimation ===

// Module 11899 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5597 */;
import _mod5805 from "module_5805" /* 5805 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5013 */;

const require = globalThis.__r;

require = fn;
const PremiumGiftStyles = fn(1388).PremiumGiftStyles;
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
    const match = _mod5805.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11900"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11900")).with(PremiumGiftStyles.BOX, () => require("module_11901"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11900")).with(PremiumGiftStyles.BOX, () => require("module_11901")).with(PremiumGiftStyles.CUP, () => require("module_11902"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11900")).with(PremiumGiftStyles.BOX, () => require("module_11901")).with(PremiumGiftStyles.CUP, () => require("module_11902")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11277"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11900")).with(PremiumGiftStyles.BOX, () => require("module_11901")).with(PremiumGiftStyles.CUP, () => require("module_11902")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11277")).with(PremiumGiftStyles.COFFEE, () => require("module_11286"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11900")).with(PremiumGiftStyles.BOX, () => require("module_11901")).with(PremiumGiftStyles.CUP, () => require("module_11902")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11277")).with(PremiumGiftStyles.COFFEE, () => require("module_11286")).with(PremiumGiftStyles.CHEST, () => require("module_11283"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11900")).with(PremiumGiftStyles.BOX, () => require("module_11901")).with(PremiumGiftStyles.CUP, () => require("module_11902")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11277")).with(PremiumGiftStyles.COFFEE, () => require("module_11286")).with(PremiumGiftStyles.CHEST, () => require("module_11283")).with(PremiumGiftStyles.CAKE, () => require("module_11280"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11900")).with(PremiumGiftStyles.BOX, () => require("module_11901")).with(PremiumGiftStyles.CUP, () => require("module_11902")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11277")).with(PremiumGiftStyles.COFFEE, () => require("module_11286")).with(PremiumGiftStyles.CHEST, () => require("module_11283")).with(PremiumGiftStyles.CAKE, () => require("module_11280")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11289"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11900")).with(PremiumGiftStyles.BOX, () => require("module_11901")).with(PremiumGiftStyles.CUP, () => require("module_11902")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11277")).with(PremiumGiftStyles.COFFEE, () => require("module_11286")).with(PremiumGiftStyles.CHEST, () => require("module_11283")).with(PremiumGiftStyles.CAKE, () => require("module_11280")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11289")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11292"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11900")).with(PremiumGiftStyles.BOX, () => require("module_11901")).with(PremiumGiftStyles.CUP, () => require("module_11902")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11277")).with(PremiumGiftStyles.COFFEE, () => require("module_11286")).with(PremiumGiftStyles.CHEST, () => require("module_11283")).with(PremiumGiftStyles.CAKE, () => require("module_11280")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11289")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11292")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11295"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11900")).with(PremiumGiftStyles.BOX, () => require("module_11901")).with(PremiumGiftStyles.CUP, () => require("module_11902")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11277")).with(PremiumGiftStyles.COFFEE, () => require("module_11286")).with(PremiumGiftStyles.CHEST, () => require("module_11283")).with(PremiumGiftStyles.CAKE, () => require("module_11280")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11289")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11292")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11295")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11298"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11900")).with(PremiumGiftStyles.BOX, () => require("module_11901")).with(PremiumGiftStyles.CUP, () => require("module_11902")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11277")).with(PremiumGiftStyles.COFFEE, () => require("module_11286")).with(PremiumGiftStyles.CHEST, () => require("module_11283")).with(PremiumGiftStyles.CAKE, () => require("module_11280")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11289")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11292")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11295")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11298")).otherwise(() => require("module_11277")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11900")).with(PremiumGiftStyles.BOX, () => require("module_11901")).with(PremiumGiftStyles.CUP, () => require("module_11902")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11277")).with(PremiumGiftStyles.COFFEE, () => require("module_11286")).with(PremiumGiftStyles.CHEST, () => require("module_11283")).with(PremiumGiftStyles.CAKE, () => require("module_11280")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11289")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11292")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11295")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11298")).otherwise(() => require("module_11277")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};