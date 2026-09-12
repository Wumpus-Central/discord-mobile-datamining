// === Module 11581: GiftBoxAnimation ===

// Module 11581 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import _mod4821 from "module_4821" /* 4821 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5610 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;

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
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11582"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11582")).with(PremiumGiftStyles.BOX, () => require("module_11583"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11582")).with(PremiumGiftStyles.BOX, () => require("module_11583")).with(PremiumGiftStyles.CUP, () => require("module_11584"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11582")).with(PremiumGiftStyles.BOX, () => require("module_11583")).with(PremiumGiftStyles.CUP, () => require("module_11584")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10962"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11582")).with(PremiumGiftStyles.BOX, () => require("module_11583")).with(PremiumGiftStyles.CUP, () => require("module_11584")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10962")).with(PremiumGiftStyles.COFFEE, () => require("module_10971"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11582")).with(PremiumGiftStyles.BOX, () => require("module_11583")).with(PremiumGiftStyles.CUP, () => require("module_11584")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10962")).with(PremiumGiftStyles.COFFEE, () => require("module_10971")).with(PremiumGiftStyles.CHEST, () => require("module_10968"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11582")).with(PremiumGiftStyles.BOX, () => require("module_11583")).with(PremiumGiftStyles.CUP, () => require("module_11584")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10962")).with(PremiumGiftStyles.COFFEE, () => require("module_10971")).with(PremiumGiftStyles.CHEST, () => require("module_10968")).with(PremiumGiftStyles.CAKE, () => require("module_10965"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11582")).with(PremiumGiftStyles.BOX, () => require("module_11583")).with(PremiumGiftStyles.CUP, () => require("module_11584")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10962")).with(PremiumGiftStyles.COFFEE, () => require("module_10971")).with(PremiumGiftStyles.CHEST, () => require("module_10968")).with(PremiumGiftStyles.CAKE, () => require("module_10965")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10974"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11582")).with(PremiumGiftStyles.BOX, () => require("module_11583")).with(PremiumGiftStyles.CUP, () => require("module_11584")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10962")).with(PremiumGiftStyles.COFFEE, () => require("module_10971")).with(PremiumGiftStyles.CHEST, () => require("module_10968")).with(PremiumGiftStyles.CAKE, () => require("module_10965")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10974")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10977"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11582")).with(PremiumGiftStyles.BOX, () => require("module_11583")).with(PremiumGiftStyles.CUP, () => require("module_11584")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10962")).with(PremiumGiftStyles.COFFEE, () => require("module_10971")).with(PremiumGiftStyles.CHEST, () => require("module_10968")).with(PremiumGiftStyles.CAKE, () => require("module_10965")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10974")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10977")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10980"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11582")).with(PremiumGiftStyles.BOX, () => require("module_11583")).with(PremiumGiftStyles.CUP, () => require("module_11584")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10962")).with(PremiumGiftStyles.COFFEE, () => require("module_10971")).with(PremiumGiftStyles.CHEST, () => require("module_10968")).with(PremiumGiftStyles.CAKE, () => require("module_10965")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10974")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10977")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10980")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10983"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11582")).with(PremiumGiftStyles.BOX, () => require("module_11583")).with(PremiumGiftStyles.CUP, () => require("module_11584")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10962")).with(PremiumGiftStyles.COFFEE, () => require("module_10971")).with(PremiumGiftStyles.CHEST, () => require("module_10968")).with(PremiumGiftStyles.CAKE, () => require("module_10965")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10974")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10977")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10980")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10983")).otherwise(() => require("module_10962")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11582")).with(PremiumGiftStyles.BOX, () => require("module_11583")).with(PremiumGiftStyles.CUP, () => require("module_11584")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10962")).with(PremiumGiftStyles.COFFEE, () => require("module_10971")).with(PremiumGiftStyles.CHEST, () => require("module_10968")).with(PremiumGiftStyles.CAKE, () => require("module_10965")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10974")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10977")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10980")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10983")).otherwise(() => require("module_10962")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};