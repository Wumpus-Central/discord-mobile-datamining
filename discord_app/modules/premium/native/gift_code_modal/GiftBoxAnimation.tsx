// === Module 11709: GiftBoxAnimation ===

// Module 11709 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import _mod4941 from "module_4941" /* 4941 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5741 */;
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
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11710"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11710")).with(PremiumGiftStyles.BOX, () => require("module_11711"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11710")).with(PremiumGiftStyles.BOX, () => require("module_11711")).with(PremiumGiftStyles.CUP, () => require("module_11712"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11710")).with(PremiumGiftStyles.BOX, () => require("module_11711")).with(PremiumGiftStyles.CUP, () => require("module_11712")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11095"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11710")).with(PremiumGiftStyles.BOX, () => require("module_11711")).with(PremiumGiftStyles.CUP, () => require("module_11712")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11095")).with(PremiumGiftStyles.COFFEE, () => require("module_11104"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11710")).with(PremiumGiftStyles.BOX, () => require("module_11711")).with(PremiumGiftStyles.CUP, () => require("module_11712")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11095")).with(PremiumGiftStyles.COFFEE, () => require("module_11104")).with(PremiumGiftStyles.CHEST, () => require("module_11101"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11710")).with(PremiumGiftStyles.BOX, () => require("module_11711")).with(PremiumGiftStyles.CUP, () => require("module_11712")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11095")).with(PremiumGiftStyles.COFFEE, () => require("module_11104")).with(PremiumGiftStyles.CHEST, () => require("module_11101")).with(PremiumGiftStyles.CAKE, () => require("module_11098"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11710")).with(PremiumGiftStyles.BOX, () => require("module_11711")).with(PremiumGiftStyles.CUP, () => require("module_11712")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11095")).with(PremiumGiftStyles.COFFEE, () => require("module_11104")).with(PremiumGiftStyles.CHEST, () => require("module_11101")).with(PremiumGiftStyles.CAKE, () => require("module_11098")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11107"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11710")).with(PremiumGiftStyles.BOX, () => require("module_11711")).with(PremiumGiftStyles.CUP, () => require("module_11712")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11095")).with(PremiumGiftStyles.COFFEE, () => require("module_11104")).with(PremiumGiftStyles.CHEST, () => require("module_11101")).with(PremiumGiftStyles.CAKE, () => require("module_11098")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11107")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11110"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11710")).with(PremiumGiftStyles.BOX, () => require("module_11711")).with(PremiumGiftStyles.CUP, () => require("module_11712")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11095")).with(PremiumGiftStyles.COFFEE, () => require("module_11104")).with(PremiumGiftStyles.CHEST, () => require("module_11101")).with(PremiumGiftStyles.CAKE, () => require("module_11098")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11107")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11110")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11113"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11710")).with(PremiumGiftStyles.BOX, () => require("module_11711")).with(PremiumGiftStyles.CUP, () => require("module_11712")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11095")).with(PremiumGiftStyles.COFFEE, () => require("module_11104")).with(PremiumGiftStyles.CHEST, () => require("module_11101")).with(PremiumGiftStyles.CAKE, () => require("module_11098")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11107")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11110")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11113")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11116"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11710")).with(PremiumGiftStyles.BOX, () => require("module_11711")).with(PremiumGiftStyles.CUP, () => require("module_11712")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11095")).with(PremiumGiftStyles.COFFEE, () => require("module_11104")).with(PremiumGiftStyles.CHEST, () => require("module_11101")).with(PremiumGiftStyles.CAKE, () => require("module_11098")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11107")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11110")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11113")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11116")).otherwise(() => require("module_11095")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11710")).with(PremiumGiftStyles.BOX, () => require("module_11711")).with(PremiumGiftStyles.CUP, () => require("module_11712")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11095")).with(PremiumGiftStyles.COFFEE, () => require("module_11104")).with(PremiumGiftStyles.CHEST, () => require("module_11101")).with(PremiumGiftStyles.CAKE, () => require("module_11098")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11107")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11110")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11113")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11116")).otherwise(() => require("module_11095")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};