// === Module 11803: GiftBoxAnimation ===

// Module 11803 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5379 */;
import _mod6263 from "module_6263" /* 6263 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4795 */;

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
    const match = _mod6263.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11804"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11804")).with(PremiumGiftStyles.BOX, () => require("module_11805"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11804")).with(PremiumGiftStyles.BOX, () => require("module_11805")).with(PremiumGiftStyles.CUP, () => require("module_11806"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11804")).with(PremiumGiftStyles.BOX, () => require("module_11805")).with(PremiumGiftStyles.CUP, () => require("module_11806")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9500"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11804")).with(PremiumGiftStyles.BOX, () => require("module_11805")).with(PremiumGiftStyles.CUP, () => require("module_11806")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9500")).with(PremiumGiftStyles.COFFEE, () => require("module_9509"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11804")).with(PremiumGiftStyles.BOX, () => require("module_11805")).with(PremiumGiftStyles.CUP, () => require("module_11806")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9500")).with(PremiumGiftStyles.COFFEE, () => require("module_9509")).with(PremiumGiftStyles.CHEST, () => require("module_9506"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11804")).with(PremiumGiftStyles.BOX, () => require("module_11805")).with(PremiumGiftStyles.CUP, () => require("module_11806")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9500")).with(PremiumGiftStyles.COFFEE, () => require("module_9509")).with(PremiumGiftStyles.CHEST, () => require("module_9506")).with(PremiumGiftStyles.CAKE, () => require("module_9503"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11804")).with(PremiumGiftStyles.BOX, () => require("module_11805")).with(PremiumGiftStyles.CUP, () => require("module_11806")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9500")).with(PremiumGiftStyles.COFFEE, () => require("module_9509")).with(PremiumGiftStyles.CHEST, () => require("module_9506")).with(PremiumGiftStyles.CAKE, () => require("module_9503")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_9512"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11804")).with(PremiumGiftStyles.BOX, () => require("module_11805")).with(PremiumGiftStyles.CUP, () => require("module_11806")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9500")).with(PremiumGiftStyles.COFFEE, () => require("module_9509")).with(PremiumGiftStyles.CHEST, () => require("module_9506")).with(PremiumGiftStyles.CAKE, () => require("module_9503")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_9512")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_9515"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11804")).with(PremiumGiftStyles.BOX, () => require("module_11805")).with(PremiumGiftStyles.CUP, () => require("module_11806")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9500")).with(PremiumGiftStyles.COFFEE, () => require("module_9509")).with(PremiumGiftStyles.CHEST, () => require("module_9506")).with(PremiumGiftStyles.CAKE, () => require("module_9503")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_9512")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_9515")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_9518"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11804")).with(PremiumGiftStyles.BOX, () => require("module_11805")).with(PremiumGiftStyles.CUP, () => require("module_11806")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9500")).with(PremiumGiftStyles.COFFEE, () => require("module_9509")).with(PremiumGiftStyles.CHEST, () => require("module_9506")).with(PremiumGiftStyles.CAKE, () => require("module_9503")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_9512")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_9515")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_9518")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_9521"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11804")).with(PremiumGiftStyles.BOX, () => require("module_11805")).with(PremiumGiftStyles.CUP, () => require("module_11806")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9500")).with(PremiumGiftStyles.COFFEE, () => require("module_9509")).with(PremiumGiftStyles.CHEST, () => require("module_9506")).with(PremiumGiftStyles.CAKE, () => require("module_9503")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_9512")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_9515")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_9518")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_9521")).otherwise(() => require("module_9500")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11804")).with(PremiumGiftStyles.BOX, () => require("module_11805")).with(PremiumGiftStyles.CUP, () => require("module_11806")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9500")).with(PremiumGiftStyles.COFFEE, () => require("module_9509")).with(PremiumGiftStyles.CHEST, () => require("module_9506")).with(PremiumGiftStyles.CAKE, () => require("module_9503")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_9512")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_9515")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_9518")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_9521")).otherwise(() => require("module_9500")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};