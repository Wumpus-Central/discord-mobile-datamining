// === Module 10979: GiftBoxAnimation ===

// Module 10979 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import _mod5014 from "module_5014" /* 5014 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5836 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4821 */;

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
    const match = _mod5014.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10980"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10980")).with(PremiumGiftStyles.BOX, () => require("module_10981"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10980")).with(PremiumGiftStyles.BOX, () => require("module_10981")).with(PremiumGiftStyles.CUP, () => require("module_10982"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10980")).with(PremiumGiftStyles.BOX, () => require("module_10981")).with(PremiumGiftStyles.CUP, () => require("module_10982")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10282"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10980")).with(PremiumGiftStyles.BOX, () => require("module_10981")).with(PremiumGiftStyles.CUP, () => require("module_10982")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10282")).with(PremiumGiftStyles.COFFEE, () => require("module_10291"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10980")).with(PremiumGiftStyles.BOX, () => require("module_10981")).with(PremiumGiftStyles.CUP, () => require("module_10982")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10282")).with(PremiumGiftStyles.COFFEE, () => require("module_10291")).with(PremiumGiftStyles.CHEST, () => require("module_10288"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10980")).with(PremiumGiftStyles.BOX, () => require("module_10981")).with(PremiumGiftStyles.CUP, () => require("module_10982")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10282")).with(PremiumGiftStyles.COFFEE, () => require("module_10291")).with(PremiumGiftStyles.CHEST, () => require("module_10288")).with(PremiumGiftStyles.CAKE, () => require("module_10285"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10980")).with(PremiumGiftStyles.BOX, () => require("module_10981")).with(PremiumGiftStyles.CUP, () => require("module_10982")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10282")).with(PremiumGiftStyles.COFFEE, () => require("module_10291")).with(PremiumGiftStyles.CHEST, () => require("module_10288")).with(PremiumGiftStyles.CAKE, () => require("module_10285")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10294"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10980")).with(PremiumGiftStyles.BOX, () => require("module_10981")).with(PremiumGiftStyles.CUP, () => require("module_10982")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10282")).with(PremiumGiftStyles.COFFEE, () => require("module_10291")).with(PremiumGiftStyles.CHEST, () => require("module_10288")).with(PremiumGiftStyles.CAKE, () => require("module_10285")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10294")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10297"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10980")).with(PremiumGiftStyles.BOX, () => require("module_10981")).with(PremiumGiftStyles.CUP, () => require("module_10982")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10282")).with(PremiumGiftStyles.COFFEE, () => require("module_10291")).with(PremiumGiftStyles.CHEST, () => require("module_10288")).with(PremiumGiftStyles.CAKE, () => require("module_10285")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10294")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10297")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10300"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10980")).with(PremiumGiftStyles.BOX, () => require("module_10981")).with(PremiumGiftStyles.CUP, () => require("module_10982")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10282")).with(PremiumGiftStyles.COFFEE, () => require("module_10291")).with(PremiumGiftStyles.CHEST, () => require("module_10288")).with(PremiumGiftStyles.CAKE, () => require("module_10285")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10294")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10297")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10300")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10303"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10980")).with(PremiumGiftStyles.BOX, () => require("module_10981")).with(PremiumGiftStyles.CUP, () => require("module_10982")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10282")).with(PremiumGiftStyles.COFFEE, () => require("module_10291")).with(PremiumGiftStyles.CHEST, () => require("module_10288")).with(PremiumGiftStyles.CAKE, () => require("module_10285")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10294")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10297")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10300")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10303")).otherwise(() => require("module_10282")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_10980")).with(PremiumGiftStyles.BOX, () => require("module_10981")).with(PremiumGiftStyles.CUP, () => require("module_10982")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10282")).with(PremiumGiftStyles.COFFEE, () => require("module_10291")).with(PremiumGiftStyles.CHEST, () => require("module_10288")).with(PremiumGiftStyles.CAKE, () => require("module_10285")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10294")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10297")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10300")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10303")).otherwise(() => require("module_10282")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};