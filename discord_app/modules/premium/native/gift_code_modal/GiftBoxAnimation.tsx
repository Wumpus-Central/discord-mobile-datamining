// === Module 11582: GiftBoxAnimation ===

// Module 11582 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import _mod4821 from "module_4821" /* 4821 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5610 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;

const require = globalThis.__r;

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
    const match = _mod4821.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11583"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11583")).with(PremiumGiftStyles.BOX, () => require("module_11584"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11583")).with(PremiumGiftStyles.BOX, () => require("module_11584")).with(PremiumGiftStyles.CUP, () => require("module_11585"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11583")).with(PremiumGiftStyles.BOX, () => require("module_11584")).with(PremiumGiftStyles.CUP, () => require("module_11585")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10963"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11583")).with(PremiumGiftStyles.BOX, () => require("module_11584")).with(PremiumGiftStyles.CUP, () => require("module_11585")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10963")).with(PremiumGiftStyles.COFFEE, () => require("module_10972"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11583")).with(PremiumGiftStyles.BOX, () => require("module_11584")).with(PremiumGiftStyles.CUP, () => require("module_11585")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10963")).with(PremiumGiftStyles.COFFEE, () => require("module_10972")).with(PremiumGiftStyles.CHEST, () => require("module_10969"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11583")).with(PremiumGiftStyles.BOX, () => require("module_11584")).with(PremiumGiftStyles.CUP, () => require("module_11585")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10963")).with(PremiumGiftStyles.COFFEE, () => require("module_10972")).with(PremiumGiftStyles.CHEST, () => require("module_10969")).with(PremiumGiftStyles.CAKE, () => require("module_10966"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11583")).with(PremiumGiftStyles.BOX, () => require("module_11584")).with(PremiumGiftStyles.CUP, () => require("module_11585")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10963")).with(PremiumGiftStyles.COFFEE, () => require("module_10972")).with(PremiumGiftStyles.CHEST, () => require("module_10969")).with(PremiumGiftStyles.CAKE, () => require("module_10966")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10975"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11583")).with(PremiumGiftStyles.BOX, () => require("module_11584")).with(PremiumGiftStyles.CUP, () => require("module_11585")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10963")).with(PremiumGiftStyles.COFFEE, () => require("module_10972")).with(PremiumGiftStyles.CHEST, () => require("module_10969")).with(PremiumGiftStyles.CAKE, () => require("module_10966")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10975")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10978"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11583")).with(PremiumGiftStyles.BOX, () => require("module_11584")).with(PremiumGiftStyles.CUP, () => require("module_11585")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10963")).with(PremiumGiftStyles.COFFEE, () => require("module_10972")).with(PremiumGiftStyles.CHEST, () => require("module_10969")).with(PremiumGiftStyles.CAKE, () => require("module_10966")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10975")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10978")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10981"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11583")).with(PremiumGiftStyles.BOX, () => require("module_11584")).with(PremiumGiftStyles.CUP, () => require("module_11585")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10963")).with(PremiumGiftStyles.COFFEE, () => require("module_10972")).with(PremiumGiftStyles.CHEST, () => require("module_10969")).with(PremiumGiftStyles.CAKE, () => require("module_10966")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10975")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10978")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10981")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10984"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11583")).with(PremiumGiftStyles.BOX, () => require("module_11584")).with(PremiumGiftStyles.CUP, () => require("module_11585")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10963")).with(PremiumGiftStyles.COFFEE, () => require("module_10972")).with(PremiumGiftStyles.CHEST, () => require("module_10969")).with(PremiumGiftStyles.CAKE, () => require("module_10966")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10975")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10978")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10981")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10984")).otherwise(() => require("module_10963")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11583")).with(PremiumGiftStyles.BOX, () => require("module_11584")).with(PremiumGiftStyles.CUP, () => require("module_11585")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10963")).with(PremiumGiftStyles.COFFEE, () => require("module_10972")).with(PremiumGiftStyles.CHEST, () => require("module_10969")).with(PremiumGiftStyles.CAKE, () => require("module_10966")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10975")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10978")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10981")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10984")).otherwise(() => require("module_10963")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};