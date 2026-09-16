// === Module 11594: GiftBoxAnimation ===

// Module 11594 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import _mod4823 from "module_4823" /* 4823 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5615 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4630 */;

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
    const match = _mod4823.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11595"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11595")).with(PremiumGiftStyles.BOX, () => require("module_11596"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11595")).with(PremiumGiftStyles.BOX, () => require("module_11596")).with(PremiumGiftStyles.CUP, () => require("module_11597"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11595")).with(PremiumGiftStyles.BOX, () => require("module_11596")).with(PremiumGiftStyles.CUP, () => require("module_11597")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10980"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11595")).with(PremiumGiftStyles.BOX, () => require("module_11596")).with(PremiumGiftStyles.CUP, () => require("module_11597")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10980")).with(PremiumGiftStyles.COFFEE, () => require("module_10989"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11595")).with(PremiumGiftStyles.BOX, () => require("module_11596")).with(PremiumGiftStyles.CUP, () => require("module_11597")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10980")).with(PremiumGiftStyles.COFFEE, () => require("module_10989")).with(PremiumGiftStyles.CHEST, () => require("module_10986"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11595")).with(PremiumGiftStyles.BOX, () => require("module_11596")).with(PremiumGiftStyles.CUP, () => require("module_11597")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10980")).with(PremiumGiftStyles.COFFEE, () => require("module_10989")).with(PremiumGiftStyles.CHEST, () => require("module_10986")).with(PremiumGiftStyles.CAKE, () => require("module_10983"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11595")).with(PremiumGiftStyles.BOX, () => require("module_11596")).with(PremiumGiftStyles.CUP, () => require("module_11597")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10980")).with(PremiumGiftStyles.COFFEE, () => require("module_10989")).with(PremiumGiftStyles.CHEST, () => require("module_10986")).with(PremiumGiftStyles.CAKE, () => require("module_10983")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10992"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11595")).with(PremiumGiftStyles.BOX, () => require("module_11596")).with(PremiumGiftStyles.CUP, () => require("module_11597")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10980")).with(PremiumGiftStyles.COFFEE, () => require("module_10989")).with(PremiumGiftStyles.CHEST, () => require("module_10986")).with(PremiumGiftStyles.CAKE, () => require("module_10983")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10992")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10995"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11595")).with(PremiumGiftStyles.BOX, () => require("module_11596")).with(PremiumGiftStyles.CUP, () => require("module_11597")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10980")).with(PremiumGiftStyles.COFFEE, () => require("module_10989")).with(PremiumGiftStyles.CHEST, () => require("module_10986")).with(PremiumGiftStyles.CAKE, () => require("module_10983")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10992")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10995")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10998"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11595")).with(PremiumGiftStyles.BOX, () => require("module_11596")).with(PremiumGiftStyles.CUP, () => require("module_11597")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10980")).with(PremiumGiftStyles.COFFEE, () => require("module_10989")).with(PremiumGiftStyles.CHEST, () => require("module_10986")).with(PremiumGiftStyles.CAKE, () => require("module_10983")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10992")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10995")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10998")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11001"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11595")).with(PremiumGiftStyles.BOX, () => require("module_11596")).with(PremiumGiftStyles.CUP, () => require("module_11597")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10980")).with(PremiumGiftStyles.COFFEE, () => require("module_10989")).with(PremiumGiftStyles.CHEST, () => require("module_10986")).with(PremiumGiftStyles.CAKE, () => require("module_10983")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10992")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10995")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10998")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11001")).otherwise(() => require("module_10980")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11595")).with(PremiumGiftStyles.BOX, () => require("module_11596")).with(PremiumGiftStyles.CUP, () => require("module_11597")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10980")).with(PremiumGiftStyles.COFFEE, () => require("module_10989")).with(PremiumGiftStyles.CHEST, () => require("module_10986")).with(PremiumGiftStyles.CAKE, () => require("module_10983")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10992")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10995")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10998")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11001")).otherwise(() => require("module_10980")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};