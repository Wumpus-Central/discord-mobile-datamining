// === Module 11197: GiftBoxAnimation ===

// Module 11197 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import _mod5051 from "module_5051" /* 5051 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 6037 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4855 */;

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
    const match = _mod5051.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11198"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11198")).with(PremiumGiftStyles.BOX, () => require("module_11199"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11198")).with(PremiumGiftStyles.BOX, () => require("module_11199")).with(PremiumGiftStyles.CUP, () => require("module_11200"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11198")).with(PremiumGiftStyles.BOX, () => require("module_11199")).with(PremiumGiftStyles.CUP, () => require("module_11200")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10497"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11198")).with(PremiumGiftStyles.BOX, () => require("module_11199")).with(PremiumGiftStyles.CUP, () => require("module_11200")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10497")).with(PremiumGiftStyles.COFFEE, () => require("module_10506"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11198")).with(PremiumGiftStyles.BOX, () => require("module_11199")).with(PremiumGiftStyles.CUP, () => require("module_11200")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10497")).with(PremiumGiftStyles.COFFEE, () => require("module_10506")).with(PremiumGiftStyles.CHEST, () => require("module_10503"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11198")).with(PremiumGiftStyles.BOX, () => require("module_11199")).with(PremiumGiftStyles.CUP, () => require("module_11200")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10497")).with(PremiumGiftStyles.COFFEE, () => require("module_10506")).with(PremiumGiftStyles.CHEST, () => require("module_10503")).with(PremiumGiftStyles.CAKE, () => require("module_10500"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11198")).with(PremiumGiftStyles.BOX, () => require("module_11199")).with(PremiumGiftStyles.CUP, () => require("module_11200")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10497")).with(PremiumGiftStyles.COFFEE, () => require("module_10506")).with(PremiumGiftStyles.CHEST, () => require("module_10503")).with(PremiumGiftStyles.CAKE, () => require("module_10500")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10509"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11198")).with(PremiumGiftStyles.BOX, () => require("module_11199")).with(PremiumGiftStyles.CUP, () => require("module_11200")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10497")).with(PremiumGiftStyles.COFFEE, () => require("module_10506")).with(PremiumGiftStyles.CHEST, () => require("module_10503")).with(PremiumGiftStyles.CAKE, () => require("module_10500")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10509")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10512"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11198")).with(PremiumGiftStyles.BOX, () => require("module_11199")).with(PremiumGiftStyles.CUP, () => require("module_11200")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10497")).with(PremiumGiftStyles.COFFEE, () => require("module_10506")).with(PremiumGiftStyles.CHEST, () => require("module_10503")).with(PremiumGiftStyles.CAKE, () => require("module_10500")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10509")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10512")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10515"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11198")).with(PremiumGiftStyles.BOX, () => require("module_11199")).with(PremiumGiftStyles.CUP, () => require("module_11200")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10497")).with(PremiumGiftStyles.COFFEE, () => require("module_10506")).with(PremiumGiftStyles.CHEST, () => require("module_10503")).with(PremiumGiftStyles.CAKE, () => require("module_10500")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10509")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10512")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10515")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10518"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11198")).with(PremiumGiftStyles.BOX, () => require("module_11199")).with(PremiumGiftStyles.CUP, () => require("module_11200")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10497")).with(PremiumGiftStyles.COFFEE, () => require("module_10506")).with(PremiumGiftStyles.CHEST, () => require("module_10503")).with(PremiumGiftStyles.CAKE, () => require("module_10500")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10509")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10512")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10515")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10518")).otherwise(() => require("module_10497")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11198")).with(PremiumGiftStyles.BOX, () => require("module_11199")).with(PremiumGiftStyles.CUP, () => require("module_11200")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10497")).with(PremiumGiftStyles.COFFEE, () => require("module_10506")).with(PremiumGiftStyles.CHEST, () => require("module_10503")).with(PremiumGiftStyles.CAKE, () => require("module_10500")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10509")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10512")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10515")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10518")).otherwise(() => require("module_10497")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};