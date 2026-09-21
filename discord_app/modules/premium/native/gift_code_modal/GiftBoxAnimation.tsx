// === Module 11711: GiftBoxAnimation ===

// Module 11711 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import _mod4941 from "module_4941" /* 4941 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5746 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4748 */;

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
    const match = _mod4941.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11712"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11712")).with(PremiumGiftStyles.BOX, () => require("module_11713"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11712")).with(PremiumGiftStyles.BOX, () => require("module_11713")).with(PremiumGiftStyles.CUP, () => require("module_11714"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11712")).with(PremiumGiftStyles.BOX, () => require("module_11713")).with(PremiumGiftStyles.CUP, () => require("module_11714")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11096"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11712")).with(PremiumGiftStyles.BOX, () => require("module_11713")).with(PremiumGiftStyles.CUP, () => require("module_11714")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11096")).with(PremiumGiftStyles.COFFEE, () => require("module_11105"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11712")).with(PremiumGiftStyles.BOX, () => require("module_11713")).with(PremiumGiftStyles.CUP, () => require("module_11714")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11096")).with(PremiumGiftStyles.COFFEE, () => require("module_11105")).with(PremiumGiftStyles.CHEST, () => require("module_11102"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11712")).with(PremiumGiftStyles.BOX, () => require("module_11713")).with(PremiumGiftStyles.CUP, () => require("module_11714")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11096")).with(PremiumGiftStyles.COFFEE, () => require("module_11105")).with(PremiumGiftStyles.CHEST, () => require("module_11102")).with(PremiumGiftStyles.CAKE, () => require("module_11099"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11712")).with(PremiumGiftStyles.BOX, () => require("module_11713")).with(PremiumGiftStyles.CUP, () => require("module_11714")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11096")).with(PremiumGiftStyles.COFFEE, () => require("module_11105")).with(PremiumGiftStyles.CHEST, () => require("module_11102")).with(PremiumGiftStyles.CAKE, () => require("module_11099")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11108"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11712")).with(PremiumGiftStyles.BOX, () => require("module_11713")).with(PremiumGiftStyles.CUP, () => require("module_11714")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11096")).with(PremiumGiftStyles.COFFEE, () => require("module_11105")).with(PremiumGiftStyles.CHEST, () => require("module_11102")).with(PremiumGiftStyles.CAKE, () => require("module_11099")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11108")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11111"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11712")).with(PremiumGiftStyles.BOX, () => require("module_11713")).with(PremiumGiftStyles.CUP, () => require("module_11714")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11096")).with(PremiumGiftStyles.COFFEE, () => require("module_11105")).with(PremiumGiftStyles.CHEST, () => require("module_11102")).with(PremiumGiftStyles.CAKE, () => require("module_11099")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11108")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11111")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11114"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11712")).with(PremiumGiftStyles.BOX, () => require("module_11713")).with(PremiumGiftStyles.CUP, () => require("module_11714")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11096")).with(PremiumGiftStyles.COFFEE, () => require("module_11105")).with(PremiumGiftStyles.CHEST, () => require("module_11102")).with(PremiumGiftStyles.CAKE, () => require("module_11099")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11108")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11111")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11114")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11117"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11712")).with(PremiumGiftStyles.BOX, () => require("module_11713")).with(PremiumGiftStyles.CUP, () => require("module_11714")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11096")).with(PremiumGiftStyles.COFFEE, () => require("module_11105")).with(PremiumGiftStyles.CHEST, () => require("module_11102")).with(PremiumGiftStyles.CAKE, () => require("module_11099")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11108")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11111")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11114")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11117")).otherwise(() => require("module_11096")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11712")).with(PremiumGiftStyles.BOX, () => require("module_11713")).with(PremiumGiftStyles.CUP, () => require("module_11714")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11096")).with(PremiumGiftStyles.COFFEE, () => require("module_11105")).with(PremiumGiftStyles.CHEST, () => require("module_11102")).with(PremiumGiftStyles.CAKE, () => require("module_11099")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11108")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11111")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11114")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11117")).otherwise(() => require("module_11096")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};