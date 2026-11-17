// === Module 12598: GiftBoxAnimation ===

// Module 12598 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5917 */;
import _mod6786 from "module_6786" /* 6786 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5311 */;

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
    const match = _mod6786.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12599"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12599")).with(PremiumGiftStyles.BOX, () => require("module_12600"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12599")).with(PremiumGiftStyles.BOX, () => require("module_12600")).with(PremiumGiftStyles.CUP, () => require("module_12601"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12599")).with(PremiumGiftStyles.BOX, () => require("module_12600")).with(PremiumGiftStyles.CUP, () => require("module_12601")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10240"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12599")).with(PremiumGiftStyles.BOX, () => require("module_12600")).with(PremiumGiftStyles.CUP, () => require("module_12601")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10240")).with(PremiumGiftStyles.COFFEE, () => require("module_10249"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12599")).with(PremiumGiftStyles.BOX, () => require("module_12600")).with(PremiumGiftStyles.CUP, () => require("module_12601")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10240")).with(PremiumGiftStyles.COFFEE, () => require("module_10249")).with(PremiumGiftStyles.CHEST, () => require("module_10246"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12599")).with(PremiumGiftStyles.BOX, () => require("module_12600")).with(PremiumGiftStyles.CUP, () => require("module_12601")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10240")).with(PremiumGiftStyles.COFFEE, () => require("module_10249")).with(PremiumGiftStyles.CHEST, () => require("module_10246")).with(PremiumGiftStyles.CAKE, () => require("module_10243"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12599")).with(PremiumGiftStyles.BOX, () => require("module_12600")).with(PremiumGiftStyles.CUP, () => require("module_12601")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10240")).with(PremiumGiftStyles.COFFEE, () => require("module_10249")).with(PremiumGiftStyles.CHEST, () => require("module_10246")).with(PremiumGiftStyles.CAKE, () => require("module_10243")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10252"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12599")).with(PremiumGiftStyles.BOX, () => require("module_12600")).with(PremiumGiftStyles.CUP, () => require("module_12601")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10240")).with(PremiumGiftStyles.COFFEE, () => require("module_10249")).with(PremiumGiftStyles.CHEST, () => require("module_10246")).with(PremiumGiftStyles.CAKE, () => require("module_10243")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10252")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10255"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12599")).with(PremiumGiftStyles.BOX, () => require("module_12600")).with(PremiumGiftStyles.CUP, () => require("module_12601")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10240")).with(PremiumGiftStyles.COFFEE, () => require("module_10249")).with(PremiumGiftStyles.CHEST, () => require("module_10246")).with(PremiumGiftStyles.CAKE, () => require("module_10243")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10252")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10255")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10258"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12599")).with(PremiumGiftStyles.BOX, () => require("module_12600")).with(PremiumGiftStyles.CUP, () => require("module_12601")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10240")).with(PremiumGiftStyles.COFFEE, () => require("module_10249")).with(PremiumGiftStyles.CHEST, () => require("module_10246")).with(PremiumGiftStyles.CAKE, () => require("module_10243")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10252")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10255")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10258")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10261"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12599")).with(PremiumGiftStyles.BOX, () => require("module_12600")).with(PremiumGiftStyles.CUP, () => require("module_12601")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10240")).with(PremiumGiftStyles.COFFEE, () => require("module_10249")).with(PremiumGiftStyles.CHEST, () => require("module_10246")).with(PremiumGiftStyles.CAKE, () => require("module_10243")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10252")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10255")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10258")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10261")).otherwise(() => require("module_10240")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_12599")).with(PremiumGiftStyles.BOX, () => require("module_12600")).with(PremiumGiftStyles.CUP, () => require("module_12601")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_10240")).with(PremiumGiftStyles.COFFEE, () => require("module_10249")).with(PremiumGiftStyles.CHEST, () => require("module_10246")).with(PremiumGiftStyles.CAKE, () => require("module_10243")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_10252")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_10255")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_10258")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_10261")).otherwise(() => require("module_10240")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};