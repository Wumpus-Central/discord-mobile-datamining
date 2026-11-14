// === Module 12392: GiftBoxAnimation ===

// Module 12392 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5923 */;
import _mod6788 from "module_6788" /* 6788 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;

const require = globalThis.__r;

require = fn;
const PremiumGiftStyles = fn(1390).PremiumGiftStyles;
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
    const match = _mod6788.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12393"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12393")).with(PremiumGiftStyles.BOX, () => require("module_12394"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12393")).with(PremiumGiftStyles.BOX, () => require("module_12394")).with(PremiumGiftStyles.CUP, () => require("module_12395"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12393")).with(PremiumGiftStyles.BOX, () => require("module_12394")).with(PremiumGiftStyles.CUP, () => require("module_12395")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11755"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12393")).with(PremiumGiftStyles.BOX, () => require("module_12394")).with(PremiumGiftStyles.CUP, () => require("module_12395")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11755")).with(PremiumGiftStyles.COFFEE, () => require("module_11764"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12393")).with(PremiumGiftStyles.BOX, () => require("module_12394")).with(PremiumGiftStyles.CUP, () => require("module_12395")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11755")).with(PremiumGiftStyles.COFFEE, () => require("module_11764")).with(PremiumGiftStyles.CHEST, () => require("module_11761"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12393")).with(PremiumGiftStyles.BOX, () => require("module_12394")).with(PremiumGiftStyles.CUP, () => require("module_12395")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11755")).with(PremiumGiftStyles.COFFEE, () => require("module_11764")).with(PremiumGiftStyles.CHEST, () => require("module_11761")).with(PremiumGiftStyles.CAKE, () => require("module_11758"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12393")).with(PremiumGiftStyles.BOX, () => require("module_12394")).with(PremiumGiftStyles.CUP, () => require("module_12395")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11755")).with(PremiumGiftStyles.COFFEE, () => require("module_11764")).with(PremiumGiftStyles.CHEST, () => require("module_11761")).with(PremiumGiftStyles.CAKE, () => require("module_11758")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11767"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12393")).with(PremiumGiftStyles.BOX, () => require("module_12394")).with(PremiumGiftStyles.CUP, () => require("module_12395")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11755")).with(PremiumGiftStyles.COFFEE, () => require("module_11764")).with(PremiumGiftStyles.CHEST, () => require("module_11761")).with(PremiumGiftStyles.CAKE, () => require("module_11758")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11767")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11770"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12393")).with(PremiumGiftStyles.BOX, () => require("module_12394")).with(PremiumGiftStyles.CUP, () => require("module_12395")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11755")).with(PremiumGiftStyles.COFFEE, () => require("module_11764")).with(PremiumGiftStyles.CHEST, () => require("module_11761")).with(PremiumGiftStyles.CAKE, () => require("module_11758")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11767")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11770")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11773"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12393")).with(PremiumGiftStyles.BOX, () => require("module_12394")).with(PremiumGiftStyles.CUP, () => require("module_12395")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11755")).with(PremiumGiftStyles.COFFEE, () => require("module_11764")).with(PremiumGiftStyles.CHEST, () => require("module_11761")).with(PremiumGiftStyles.CAKE, () => require("module_11758")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11767")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11770")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11773")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11776"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12393")).with(PremiumGiftStyles.BOX, () => require("module_12394")).with(PremiumGiftStyles.CUP, () => require("module_12395")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11755")).with(PremiumGiftStyles.COFFEE, () => require("module_11764")).with(PremiumGiftStyles.CHEST, () => require("module_11761")).with(PremiumGiftStyles.CAKE, () => require("module_11758")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11767")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11770")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11773")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11776")).otherwise(() => require("module_11755")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12393")).with(PremiumGiftStyles.BOX, () => require("module_12394")).with(PremiumGiftStyles.CUP, () => require("module_12395")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11755")).with(PremiumGiftStyles.COFFEE, () => require("module_11764")).with(PremiumGiftStyles.CHEST, () => require("module_11761")).with(PremiumGiftStyles.CAKE, () => require("module_11758")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11767")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11770")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11773")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11776")).otherwise(() => require("module_11755")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};