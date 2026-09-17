// === Module 11602: GiftBoxAnimation ===

// Module 11602 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import _mod4825 from "module_4825" /* 4825 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5617 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4632 */;

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
    const match = _mod4825.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11603"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11603")).with(PremiumGiftStyles.BOX, () => require("module_11604"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11603")).with(PremiumGiftStyles.BOX, () => require("module_11604")).with(PremiumGiftStyles.CUP, () => require("module_11605"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11603")).with(PremiumGiftStyles.BOX, () => require("module_11604")).with(PremiumGiftStyles.CUP, () => require("module_11605")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10988"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11603")).with(PremiumGiftStyles.BOX, () => require("module_11604")).with(PremiumGiftStyles.CUP, () => require("module_11605")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10988")).with(PremiumGiftStyles.COFFEE, () => require("module_10997"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11603")).with(PremiumGiftStyles.BOX, () => require("module_11604")).with(PremiumGiftStyles.CUP, () => require("module_11605")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10988")).with(PremiumGiftStyles.COFFEE, () => require("module_10997")).with(PremiumGiftStyles.CHEST, () => require("module_10994"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11603")).with(PremiumGiftStyles.BOX, () => require("module_11604")).with(PremiumGiftStyles.CUP, () => require("module_11605")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10988")).with(PremiumGiftStyles.COFFEE, () => require("module_10997")).with(PremiumGiftStyles.CHEST, () => require("module_10994")).with(PremiumGiftStyles.CAKE, () => require("module_10991"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11603")).with(PremiumGiftStyles.BOX, () => require("module_11604")).with(PremiumGiftStyles.CUP, () => require("module_11605")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10988")).with(PremiumGiftStyles.COFFEE, () => require("module_10997")).with(PremiumGiftStyles.CHEST, () => require("module_10994")).with(PremiumGiftStyles.CAKE, () => require("module_10991")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11000"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11603")).with(PremiumGiftStyles.BOX, () => require("module_11604")).with(PremiumGiftStyles.CUP, () => require("module_11605")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10988")).with(PremiumGiftStyles.COFFEE, () => require("module_10997")).with(PremiumGiftStyles.CHEST, () => require("module_10994")).with(PremiumGiftStyles.CAKE, () => require("module_10991")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11000")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11003"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11603")).with(PremiumGiftStyles.BOX, () => require("module_11604")).with(PremiumGiftStyles.CUP, () => require("module_11605")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10988")).with(PremiumGiftStyles.COFFEE, () => require("module_10997")).with(PremiumGiftStyles.CHEST, () => require("module_10994")).with(PremiumGiftStyles.CAKE, () => require("module_10991")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11000")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11003")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11006"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11603")).with(PremiumGiftStyles.BOX, () => require("module_11604")).with(PremiumGiftStyles.CUP, () => require("module_11605")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10988")).with(PremiumGiftStyles.COFFEE, () => require("module_10997")).with(PremiumGiftStyles.CHEST, () => require("module_10994")).with(PremiumGiftStyles.CAKE, () => require("module_10991")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11000")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11003")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11006")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11009"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11603")).with(PremiumGiftStyles.BOX, () => require("module_11604")).with(PremiumGiftStyles.CUP, () => require("module_11605")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10988")).with(PremiumGiftStyles.COFFEE, () => require("module_10997")).with(PremiumGiftStyles.CHEST, () => require("module_10994")).with(PremiumGiftStyles.CAKE, () => require("module_10991")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11000")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11003")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11006")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11009")).otherwise(() => require("module_10988")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11603")).with(PremiumGiftStyles.BOX, () => require("module_11604")).with(PremiumGiftStyles.CUP, () => require("module_11605")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10988")).with(PremiumGiftStyles.COFFEE, () => require("module_10997")).with(PremiumGiftStyles.CHEST, () => require("module_10994")).with(PremiumGiftStyles.CAKE, () => require("module_10991")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11000")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11003")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11006")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11009")).otherwise(() => require("module_10988")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};