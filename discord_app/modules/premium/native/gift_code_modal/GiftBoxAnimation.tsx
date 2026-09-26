// === Module 10992: GiftBoxAnimation ===

// Module 10992 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import _mod5021 from "module_5021" /* 5021 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5841 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;

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
    const match = _mod5021.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10993"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10993")).with(PremiumGiftStyles.BOX, () => require("module_10994"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10993")).with(PremiumGiftStyles.BOX, () => require("module_10994")).with(PremiumGiftStyles.CUP, () => require("module_10995"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10993")).with(PremiumGiftStyles.BOX, () => require("module_10994")).with(PremiumGiftStyles.CUP, () => require("module_10995")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10294"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10993")).with(PremiumGiftStyles.BOX, () => require("module_10994")).with(PremiumGiftStyles.CUP, () => require("module_10995")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10294")).with(PremiumGiftStyles.COFFEE, () => require("module_10303"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10993")).with(PremiumGiftStyles.BOX, () => require("module_10994")).with(PremiumGiftStyles.CUP, () => require("module_10995")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10294")).with(PremiumGiftStyles.COFFEE, () => require("module_10303")).with(PremiumGiftStyles.CHEST, () => require("module_10300"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10993")).with(PremiumGiftStyles.BOX, () => require("module_10994")).with(PremiumGiftStyles.CUP, () => require("module_10995")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10294")).with(PremiumGiftStyles.COFFEE, () => require("module_10303")).with(PremiumGiftStyles.CHEST, () => require("module_10300")).with(PremiumGiftStyles.CAKE, () => require("module_10297"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10993")).with(PremiumGiftStyles.BOX, () => require("module_10994")).with(PremiumGiftStyles.CUP, () => require("module_10995")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10294")).with(PremiumGiftStyles.COFFEE, () => require("module_10303")).with(PremiumGiftStyles.CHEST, () => require("module_10300")).with(PremiumGiftStyles.CAKE, () => require("module_10297")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10306"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10993")).with(PremiumGiftStyles.BOX, () => require("module_10994")).with(PremiumGiftStyles.CUP, () => require("module_10995")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10294")).with(PremiumGiftStyles.COFFEE, () => require("module_10303")).with(PremiumGiftStyles.CHEST, () => require("module_10300")).with(PremiumGiftStyles.CAKE, () => require("module_10297")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10306")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10309"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10993")).with(PremiumGiftStyles.BOX, () => require("module_10994")).with(PremiumGiftStyles.CUP, () => require("module_10995")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10294")).with(PremiumGiftStyles.COFFEE, () => require("module_10303")).with(PremiumGiftStyles.CHEST, () => require("module_10300")).with(PremiumGiftStyles.CAKE, () => require("module_10297")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10306")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10309")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10312"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10993")).with(PremiumGiftStyles.BOX, () => require("module_10994")).with(PremiumGiftStyles.CUP, () => require("module_10995")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10294")).with(PremiumGiftStyles.COFFEE, () => require("module_10303")).with(PremiumGiftStyles.CHEST, () => require("module_10300")).with(PremiumGiftStyles.CAKE, () => require("module_10297")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10306")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10309")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10312")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10315"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10993")).with(PremiumGiftStyles.BOX, () => require("module_10994")).with(PremiumGiftStyles.CUP, () => require("module_10995")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10294")).with(PremiumGiftStyles.COFFEE, () => require("module_10303")).with(PremiumGiftStyles.CHEST, () => require("module_10300")).with(PremiumGiftStyles.CAKE, () => require("module_10297")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10306")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10309")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10312")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10315")).otherwise(() => require("module_10294")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10993")).with(PremiumGiftStyles.BOX, () => require("module_10994")).with(PremiumGiftStyles.CUP, () => require("module_10995")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10294")).with(PremiumGiftStyles.COFFEE, () => require("module_10303")).with(PremiumGiftStyles.CHEST, () => require("module_10300")).with(PremiumGiftStyles.CAKE, () => require("module_10297")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10306")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10309")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10312")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10315")).otherwise(() => require("module_10294")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};