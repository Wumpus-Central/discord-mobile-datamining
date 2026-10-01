// === Module 11201: GiftBoxAnimation ===

// Module 11201 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import _mod5030 from "module_5030" /* 5030 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 6026 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4834 */;

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
    const match = _mod5030.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11202"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11202")).with(PremiumGiftStyles.BOX, () => require("module_11203"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11202")).with(PremiumGiftStyles.BOX, () => require("module_11203")).with(PremiumGiftStyles.CUP, () => require("module_11204"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11202")).with(PremiumGiftStyles.BOX, () => require("module_11203")).with(PremiumGiftStyles.CUP, () => require("module_11204")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10489"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11202")).with(PremiumGiftStyles.BOX, () => require("module_11203")).with(PremiumGiftStyles.CUP, () => require("module_11204")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10489")).with(PremiumGiftStyles.COFFEE, () => require("module_10498"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11202")).with(PremiumGiftStyles.BOX, () => require("module_11203")).with(PremiumGiftStyles.CUP, () => require("module_11204")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10489")).with(PremiumGiftStyles.COFFEE, () => require("module_10498")).with(PremiumGiftStyles.CHEST, () => require("module_10495"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11202")).with(PremiumGiftStyles.BOX, () => require("module_11203")).with(PremiumGiftStyles.CUP, () => require("module_11204")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10489")).with(PremiumGiftStyles.COFFEE, () => require("module_10498")).with(PremiumGiftStyles.CHEST, () => require("module_10495")).with(PremiumGiftStyles.CAKE, () => require("module_10492"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11202")).with(PremiumGiftStyles.BOX, () => require("module_11203")).with(PremiumGiftStyles.CUP, () => require("module_11204")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10489")).with(PremiumGiftStyles.COFFEE, () => require("module_10498")).with(PremiumGiftStyles.CHEST, () => require("module_10495")).with(PremiumGiftStyles.CAKE, () => require("module_10492")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10501"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11202")).with(PremiumGiftStyles.BOX, () => require("module_11203")).with(PremiumGiftStyles.CUP, () => require("module_11204")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10489")).with(PremiumGiftStyles.COFFEE, () => require("module_10498")).with(PremiumGiftStyles.CHEST, () => require("module_10495")).with(PremiumGiftStyles.CAKE, () => require("module_10492")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10501")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10504"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11202")).with(PremiumGiftStyles.BOX, () => require("module_11203")).with(PremiumGiftStyles.CUP, () => require("module_11204")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10489")).with(PremiumGiftStyles.COFFEE, () => require("module_10498")).with(PremiumGiftStyles.CHEST, () => require("module_10495")).with(PremiumGiftStyles.CAKE, () => require("module_10492")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10501")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10504")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10507"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11202")).with(PremiumGiftStyles.BOX, () => require("module_11203")).with(PremiumGiftStyles.CUP, () => require("module_11204")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10489")).with(PremiumGiftStyles.COFFEE, () => require("module_10498")).with(PremiumGiftStyles.CHEST, () => require("module_10495")).with(PremiumGiftStyles.CAKE, () => require("module_10492")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10501")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10504")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10507")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10510"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11202")).with(PremiumGiftStyles.BOX, () => require("module_11203")).with(PremiumGiftStyles.CUP, () => require("module_11204")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10489")).with(PremiumGiftStyles.COFFEE, () => require("module_10498")).with(PremiumGiftStyles.CHEST, () => require("module_10495")).with(PremiumGiftStyles.CAKE, () => require("module_10492")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10501")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10504")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10507")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10510")).otherwise(() => require("module_10489")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11202")).with(PremiumGiftStyles.BOX, () => require("module_11203")).with(PremiumGiftStyles.CUP, () => require("module_11204")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10489")).with(PremiumGiftStyles.COFFEE, () => require("module_10498")).with(PremiumGiftStyles.CHEST, () => require("module_10495")).with(PremiumGiftStyles.CAKE, () => require("module_10492")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10501")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10504")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10507")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10510")).otherwise(() => require("module_10489")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};