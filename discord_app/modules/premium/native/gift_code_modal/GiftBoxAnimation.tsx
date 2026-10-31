// === Module 11507: GiftBoxAnimation ===

// Module 11507 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5618 */;
import _mod6556 from "module_6556" /* 6556 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;

const require = globalThis.__r;

require = fn;
const PremiumGiftStyles = fn(1385).PremiumGiftStyles;
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
    const match = _mod6556.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11508"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11508")).with(PremiumGiftStyles.BOX, () => require("module_11509"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11508")).with(PremiumGiftStyles.BOX, () => require("module_11509")).with(PremiumGiftStyles.CUP, () => require("module_11510"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11508")).with(PremiumGiftStyles.BOX, () => require("module_11509")).with(PremiumGiftStyles.CUP, () => require("module_11510")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10701"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11508")).with(PremiumGiftStyles.BOX, () => require("module_11509")).with(PremiumGiftStyles.CUP, () => require("module_11510")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10701")).with(PremiumGiftStyles.COFFEE, () => require("module_10710"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11508")).with(PremiumGiftStyles.BOX, () => require("module_11509")).with(PremiumGiftStyles.CUP, () => require("module_11510")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10701")).with(PremiumGiftStyles.COFFEE, () => require("module_10710")).with(PremiumGiftStyles.CHEST, () => require("module_10707"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11508")).with(PremiumGiftStyles.BOX, () => require("module_11509")).with(PremiumGiftStyles.CUP, () => require("module_11510")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10701")).with(PremiumGiftStyles.COFFEE, () => require("module_10710")).with(PremiumGiftStyles.CHEST, () => require("module_10707")).with(PremiumGiftStyles.CAKE, () => require("module_10704"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11508")).with(PremiumGiftStyles.BOX, () => require("module_11509")).with(PremiumGiftStyles.CUP, () => require("module_11510")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10701")).with(PremiumGiftStyles.COFFEE, () => require("module_10710")).with(PremiumGiftStyles.CHEST, () => require("module_10707")).with(PremiumGiftStyles.CAKE, () => require("module_10704")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10713"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11508")).with(PremiumGiftStyles.BOX, () => require("module_11509")).with(PremiumGiftStyles.CUP, () => require("module_11510")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10701")).with(PremiumGiftStyles.COFFEE, () => require("module_10710")).with(PremiumGiftStyles.CHEST, () => require("module_10707")).with(PremiumGiftStyles.CAKE, () => require("module_10704")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10713")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10716"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11508")).with(PremiumGiftStyles.BOX, () => require("module_11509")).with(PremiumGiftStyles.CUP, () => require("module_11510")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10701")).with(PremiumGiftStyles.COFFEE, () => require("module_10710")).with(PremiumGiftStyles.CHEST, () => require("module_10707")).with(PremiumGiftStyles.CAKE, () => require("module_10704")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10713")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10716")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10719"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11508")).with(PremiumGiftStyles.BOX, () => require("module_11509")).with(PremiumGiftStyles.CUP, () => require("module_11510")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10701")).with(PremiumGiftStyles.COFFEE, () => require("module_10710")).with(PremiumGiftStyles.CHEST, () => require("module_10707")).with(PremiumGiftStyles.CAKE, () => require("module_10704")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10713")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10716")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10719")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10722"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11508")).with(PremiumGiftStyles.BOX, () => require("module_11509")).with(PremiumGiftStyles.CUP, () => require("module_11510")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10701")).with(PremiumGiftStyles.COFFEE, () => require("module_10710")).with(PremiumGiftStyles.CHEST, () => require("module_10707")).with(PremiumGiftStyles.CAKE, () => require("module_10704")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10713")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10716")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10719")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10722")).otherwise(() => require("module_10701")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11508")).with(PremiumGiftStyles.BOX, () => require("module_11509")).with(PremiumGiftStyles.CUP, () => require("module_11510")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10701")).with(PremiumGiftStyles.COFFEE, () => require("module_10710")).with(PremiumGiftStyles.CHEST, () => require("module_10707")).with(PremiumGiftStyles.CAKE, () => require("module_10704")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10713")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10716")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10719")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10722")).otherwise(() => require("module_10701")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};