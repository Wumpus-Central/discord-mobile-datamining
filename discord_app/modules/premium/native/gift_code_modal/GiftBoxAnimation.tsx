// === Module 11542: GiftBoxAnimation ===

// Module 11542 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import _mod4791 from "module_4791" /* 4791 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5580 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4598 */;

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
    const match = _mod4791.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11543"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11543")).with(PremiumGiftStyles.BOX, () => require("module_11544"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11543")).with(PremiumGiftStyles.BOX, () => require("module_11544")).with(PremiumGiftStyles.CUP, () => require("module_11545"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11543")).with(PremiumGiftStyles.BOX, () => require("module_11544")).with(PremiumGiftStyles.CUP, () => require("module_11545")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10923"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11543")).with(PremiumGiftStyles.BOX, () => require("module_11544")).with(PremiumGiftStyles.CUP, () => require("module_11545")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10923")).with(PremiumGiftStyles.COFFEE, () => require("module_10932"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11543")).with(PremiumGiftStyles.BOX, () => require("module_11544")).with(PremiumGiftStyles.CUP, () => require("module_11545")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10923")).with(PremiumGiftStyles.COFFEE, () => require("module_10932")).with(PremiumGiftStyles.CHEST, () => require("module_10929"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11543")).with(PremiumGiftStyles.BOX, () => require("module_11544")).with(PremiumGiftStyles.CUP, () => require("module_11545")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10923")).with(PremiumGiftStyles.COFFEE, () => require("module_10932")).with(PremiumGiftStyles.CHEST, () => require("module_10929")).with(PremiumGiftStyles.CAKE, () => require("module_10926"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11543")).with(PremiumGiftStyles.BOX, () => require("module_11544")).with(PremiumGiftStyles.CUP, () => require("module_11545")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10923")).with(PremiumGiftStyles.COFFEE, () => require("module_10932")).with(PremiumGiftStyles.CHEST, () => require("module_10929")).with(PremiumGiftStyles.CAKE, () => require("module_10926")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10935"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11543")).with(PremiumGiftStyles.BOX, () => require("module_11544")).with(PremiumGiftStyles.CUP, () => require("module_11545")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10923")).with(PremiumGiftStyles.COFFEE, () => require("module_10932")).with(PremiumGiftStyles.CHEST, () => require("module_10929")).with(PremiumGiftStyles.CAKE, () => require("module_10926")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10935")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10938"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11543")).with(PremiumGiftStyles.BOX, () => require("module_11544")).with(PremiumGiftStyles.CUP, () => require("module_11545")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10923")).with(PremiumGiftStyles.COFFEE, () => require("module_10932")).with(PremiumGiftStyles.CHEST, () => require("module_10929")).with(PremiumGiftStyles.CAKE, () => require("module_10926")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10935")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10938")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10941"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11543")).with(PremiumGiftStyles.BOX, () => require("module_11544")).with(PremiumGiftStyles.CUP, () => require("module_11545")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10923")).with(PremiumGiftStyles.COFFEE, () => require("module_10932")).with(PremiumGiftStyles.CHEST, () => require("module_10929")).with(PremiumGiftStyles.CAKE, () => require("module_10926")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10935")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10938")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10941")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10944"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11543")).with(PremiumGiftStyles.BOX, () => require("module_11544")).with(PremiumGiftStyles.CUP, () => require("module_11545")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10923")).with(PremiumGiftStyles.COFFEE, () => require("module_10932")).with(PremiumGiftStyles.CHEST, () => require("module_10929")).with(PremiumGiftStyles.CAKE, () => require("module_10926")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10935")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10938")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10941")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10944")).otherwise(() => require("module_10923")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11543")).with(PremiumGiftStyles.BOX, () => require("module_11544")).with(PremiumGiftStyles.CUP, () => require("module_11545")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10923")).with(PremiumGiftStyles.COFFEE, () => require("module_10932")).with(PremiumGiftStyles.CHEST, () => require("module_10929")).with(PremiumGiftStyles.CAKE, () => require("module_10926")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10935")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10938")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10941")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10944")).otherwise(() => require("module_10923")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};