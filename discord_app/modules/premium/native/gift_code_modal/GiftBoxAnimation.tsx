// === Module 11473: GiftBoxAnimation ===

// Module 11473 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5613 */;
import _mod6550 from "module_6550" /* 6550 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;

const require = globalThis.__r;

require = fn;
const PremiumGiftStyles = fn(1386).PremiumGiftStyles;
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
    const match = _mod6550.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11474"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11474")).with(PremiumGiftStyles.BOX, () => require("module_11475"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11474")).with(PremiumGiftStyles.BOX, () => require("module_11475")).with(PremiumGiftStyles.CUP, () => require("module_11476"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11474")).with(PremiumGiftStyles.BOX, () => require("module_11475")).with(PremiumGiftStyles.CUP, () => require("module_11476")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10681"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11474")).with(PremiumGiftStyles.BOX, () => require("module_11475")).with(PremiumGiftStyles.CUP, () => require("module_11476")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10681")).with(PremiumGiftStyles.COFFEE, () => require("module_10690"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11474")).with(PremiumGiftStyles.BOX, () => require("module_11475")).with(PremiumGiftStyles.CUP, () => require("module_11476")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10681")).with(PremiumGiftStyles.COFFEE, () => require("module_10690")).with(PremiumGiftStyles.CHEST, () => require("module_10687"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11474")).with(PremiumGiftStyles.BOX, () => require("module_11475")).with(PremiumGiftStyles.CUP, () => require("module_11476")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10681")).with(PremiumGiftStyles.COFFEE, () => require("module_10690")).with(PremiumGiftStyles.CHEST, () => require("module_10687")).with(PremiumGiftStyles.CAKE, () => require("module_10684"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11474")).with(PremiumGiftStyles.BOX, () => require("module_11475")).with(PremiumGiftStyles.CUP, () => require("module_11476")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10681")).with(PremiumGiftStyles.COFFEE, () => require("module_10690")).with(PremiumGiftStyles.CHEST, () => require("module_10687")).with(PremiumGiftStyles.CAKE, () => require("module_10684")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10693"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11474")).with(PremiumGiftStyles.BOX, () => require("module_11475")).with(PremiumGiftStyles.CUP, () => require("module_11476")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10681")).with(PremiumGiftStyles.COFFEE, () => require("module_10690")).with(PremiumGiftStyles.CHEST, () => require("module_10687")).with(PremiumGiftStyles.CAKE, () => require("module_10684")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10693")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10696"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11474")).with(PremiumGiftStyles.BOX, () => require("module_11475")).with(PremiumGiftStyles.CUP, () => require("module_11476")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10681")).with(PremiumGiftStyles.COFFEE, () => require("module_10690")).with(PremiumGiftStyles.CHEST, () => require("module_10687")).with(PremiumGiftStyles.CAKE, () => require("module_10684")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10693")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10696")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10699"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11474")).with(PremiumGiftStyles.BOX, () => require("module_11475")).with(PremiumGiftStyles.CUP, () => require("module_11476")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10681")).with(PremiumGiftStyles.COFFEE, () => require("module_10690")).with(PremiumGiftStyles.CHEST, () => require("module_10687")).with(PremiumGiftStyles.CAKE, () => require("module_10684")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10693")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10696")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10699")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10702"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11474")).with(PremiumGiftStyles.BOX, () => require("module_11475")).with(PremiumGiftStyles.CUP, () => require("module_11476")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10681")).with(PremiumGiftStyles.COFFEE, () => require("module_10690")).with(PremiumGiftStyles.CHEST, () => require("module_10687")).with(PremiumGiftStyles.CAKE, () => require("module_10684")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10693")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10696")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10699")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10702")).otherwise(() => require("module_10681")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11474")).with(PremiumGiftStyles.BOX, () => require("module_11475")).with(PremiumGiftStyles.CUP, () => require("module_11476")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10681")).with(PremiumGiftStyles.COFFEE, () => require("module_10690")).with(PremiumGiftStyles.CHEST, () => require("module_10687")).with(PremiumGiftStyles.CAKE, () => require("module_10684")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10693")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10696")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10699")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10702")).otherwise(() => require("module_10681")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};