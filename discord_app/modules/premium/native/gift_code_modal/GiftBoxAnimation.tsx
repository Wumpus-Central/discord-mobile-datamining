// === Module 12303: GiftBoxAnimation ===

// Module 12303 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5860 */;
import _mod6725 from "module_6725" /* 6725 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;

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
    const match = _mod6725.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12304"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12304")).with(PremiumGiftStyles.BOX, () => require("module_12305"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12304")).with(PremiumGiftStyles.BOX, () => require("module_12305")).with(PremiumGiftStyles.CUP, () => require("module_12306"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12304")).with(PremiumGiftStyles.BOX, () => require("module_12305")).with(PremiumGiftStyles.CUP, () => require("module_12306")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11695"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12304")).with(PremiumGiftStyles.BOX, () => require("module_12305")).with(PremiumGiftStyles.CUP, () => require("module_12306")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11695")).with(PremiumGiftStyles.COFFEE, () => require("module_11704"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12304")).with(PremiumGiftStyles.BOX, () => require("module_12305")).with(PremiumGiftStyles.CUP, () => require("module_12306")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11695")).with(PremiumGiftStyles.COFFEE, () => require("module_11704")).with(PremiumGiftStyles.CHEST, () => require("module_11701"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12304")).with(PremiumGiftStyles.BOX, () => require("module_12305")).with(PremiumGiftStyles.CUP, () => require("module_12306")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11695")).with(PremiumGiftStyles.COFFEE, () => require("module_11704")).with(PremiumGiftStyles.CHEST, () => require("module_11701")).with(PremiumGiftStyles.CAKE, () => require("module_11698"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12304")).with(PremiumGiftStyles.BOX, () => require("module_12305")).with(PremiumGiftStyles.CUP, () => require("module_12306")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11695")).with(PremiumGiftStyles.COFFEE, () => require("module_11704")).with(PremiumGiftStyles.CHEST, () => require("module_11701")).with(PremiumGiftStyles.CAKE, () => require("module_11698")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11707"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12304")).with(PremiumGiftStyles.BOX, () => require("module_12305")).with(PremiumGiftStyles.CUP, () => require("module_12306")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11695")).with(PremiumGiftStyles.COFFEE, () => require("module_11704")).with(PremiumGiftStyles.CHEST, () => require("module_11701")).with(PremiumGiftStyles.CAKE, () => require("module_11698")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11707")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11710"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12304")).with(PremiumGiftStyles.BOX, () => require("module_12305")).with(PremiumGiftStyles.CUP, () => require("module_12306")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11695")).with(PremiumGiftStyles.COFFEE, () => require("module_11704")).with(PremiumGiftStyles.CHEST, () => require("module_11701")).with(PremiumGiftStyles.CAKE, () => require("module_11698")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11707")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11710")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11713"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12304")).with(PremiumGiftStyles.BOX, () => require("module_12305")).with(PremiumGiftStyles.CUP, () => require("module_12306")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11695")).with(PremiumGiftStyles.COFFEE, () => require("module_11704")).with(PremiumGiftStyles.CHEST, () => require("module_11701")).with(PremiumGiftStyles.CAKE, () => require("module_11698")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11707")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11710")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11713")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11716"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12304")).with(PremiumGiftStyles.BOX, () => require("module_12305")).with(PremiumGiftStyles.CUP, () => require("module_12306")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11695")).with(PremiumGiftStyles.COFFEE, () => require("module_11704")).with(PremiumGiftStyles.CHEST, () => require("module_11701")).with(PremiumGiftStyles.CAKE, () => require("module_11698")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11707")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11710")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11713")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11716")).otherwise(() => require("module_11695")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12304")).with(PremiumGiftStyles.BOX, () => require("module_12305")).with(PremiumGiftStyles.CUP, () => require("module_12306")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11695")).with(PremiumGiftStyles.COFFEE, () => require("module_11704")).with(PremiumGiftStyles.CHEST, () => require("module_11701")).with(PremiumGiftStyles.CAKE, () => require("module_11698")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11707")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11710")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11713")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11716")).otherwise(() => require("module_11695")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};