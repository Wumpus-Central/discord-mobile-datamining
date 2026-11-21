// === Module 11923: GiftBoxAnimation ===

// Module 11923 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5498 */;
import _mod6382 from "module_6382" /* 6382 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;

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
    const match = _mod6382.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11924"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11924")).with(PremiumGiftStyles.BOX, () => require("module_11925"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11924")).with(PremiumGiftStyles.BOX, () => require("module_11925")).with(PremiumGiftStyles.CUP, () => require("module_11926"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11924")).with(PremiumGiftStyles.BOX, () => require("module_11925")).with(PremiumGiftStyles.CUP, () => require("module_11926")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9620"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11924")).with(PremiumGiftStyles.BOX, () => require("module_11925")).with(PremiumGiftStyles.CUP, () => require("module_11926")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9620")).with(PremiumGiftStyles.COFFEE, () => require("module_9629"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11924")).with(PremiumGiftStyles.BOX, () => require("module_11925")).with(PremiumGiftStyles.CUP, () => require("module_11926")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9620")).with(PremiumGiftStyles.COFFEE, () => require("module_9629")).with(PremiumGiftStyles.CHEST, () => require("module_9626"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11924")).with(PremiumGiftStyles.BOX, () => require("module_11925")).with(PremiumGiftStyles.CUP, () => require("module_11926")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9620")).with(PremiumGiftStyles.COFFEE, () => require("module_9629")).with(PremiumGiftStyles.CHEST, () => require("module_9626")).with(PremiumGiftStyles.CAKE, () => require("module_9623"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11924")).with(PremiumGiftStyles.BOX, () => require("module_11925")).with(PremiumGiftStyles.CUP, () => require("module_11926")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9620")).with(PremiumGiftStyles.COFFEE, () => require("module_9629")).with(PremiumGiftStyles.CHEST, () => require("module_9626")).with(PremiumGiftStyles.CAKE, () => require("module_9623")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_9632"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11924")).with(PremiumGiftStyles.BOX, () => require("module_11925")).with(PremiumGiftStyles.CUP, () => require("module_11926")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9620")).with(PremiumGiftStyles.COFFEE, () => require("module_9629")).with(PremiumGiftStyles.CHEST, () => require("module_9626")).with(PremiumGiftStyles.CAKE, () => require("module_9623")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_9632")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_9635"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11924")).with(PremiumGiftStyles.BOX, () => require("module_11925")).with(PremiumGiftStyles.CUP, () => require("module_11926")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9620")).with(PremiumGiftStyles.COFFEE, () => require("module_9629")).with(PremiumGiftStyles.CHEST, () => require("module_9626")).with(PremiumGiftStyles.CAKE, () => require("module_9623")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_9632")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_9635")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_9638"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11924")).with(PremiumGiftStyles.BOX, () => require("module_11925")).with(PremiumGiftStyles.CUP, () => require("module_11926")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9620")).with(PremiumGiftStyles.COFFEE, () => require("module_9629")).with(PremiumGiftStyles.CHEST, () => require("module_9626")).with(PremiumGiftStyles.CAKE, () => require("module_9623")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_9632")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_9635")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_9638")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_9641"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11924")).with(PremiumGiftStyles.BOX, () => require("module_11925")).with(PremiumGiftStyles.CUP, () => require("module_11926")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9620")).with(PremiumGiftStyles.COFFEE, () => require("module_9629")).with(PremiumGiftStyles.CHEST, () => require("module_9626")).with(PremiumGiftStyles.CAKE, () => require("module_9623")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_9632")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_9635")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_9638")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_9641")).otherwise(() => require("module_9620")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11924")).with(PremiumGiftStyles.BOX, () => require("module_11925")).with(PremiumGiftStyles.CUP, () => require("module_11926")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_9620")).with(PremiumGiftStyles.COFFEE, () => require("module_9629")).with(PremiumGiftStyles.CHEST, () => require("module_9626")).with(PremiumGiftStyles.CAKE, () => require("module_9623")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_9632")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_9635")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_9638")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_9641")).otherwise(() => require("module_9620")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};