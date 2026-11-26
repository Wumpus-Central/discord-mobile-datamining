// === Module 11947: GiftBoxAnimation ===

// Module 11947 (GiftBoxAnimation)
import initialize from "initialize" /* 504 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5628 */;
import _mod5836 from "module_5836" /* 5836 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5044 */;

const require = globalThis.__r;

require = fn;
const PremiumGiftStyles = fn(1389).PremiumGiftStyles;
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
    const match = _mod5836.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11948"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11948")).with(PremiumGiftStyles.BOX, () => require("module_11949"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11948")).with(PremiumGiftStyles.BOX, () => require("module_11949")).with(PremiumGiftStyles.CUP, () => require("module_11950"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11948")).with(PremiumGiftStyles.BOX, () => require("module_11949")).with(PremiumGiftStyles.CUP, () => require("module_11950")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11323"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11948")).with(PremiumGiftStyles.BOX, () => require("module_11949")).with(PremiumGiftStyles.CUP, () => require("module_11950")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11323")).with(PremiumGiftStyles.COFFEE, () => require("module_11332"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11948")).with(PremiumGiftStyles.BOX, () => require("module_11949")).with(PremiumGiftStyles.CUP, () => require("module_11950")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11323")).with(PremiumGiftStyles.COFFEE, () => require("module_11332")).with(PremiumGiftStyles.CHEST, () => require("module_11329"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11948")).with(PremiumGiftStyles.BOX, () => require("module_11949")).with(PremiumGiftStyles.CUP, () => require("module_11950")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11323")).with(PremiumGiftStyles.COFFEE, () => require("module_11332")).with(PremiumGiftStyles.CHEST, () => require("module_11329")).with(PremiumGiftStyles.CAKE, () => require("module_11326"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11948")).with(PremiumGiftStyles.BOX, () => require("module_11949")).with(PremiumGiftStyles.CUP, () => require("module_11950")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11323")).with(PremiumGiftStyles.COFFEE, () => require("module_11332")).with(PremiumGiftStyles.CHEST, () => require("module_11329")).with(PremiumGiftStyles.CAKE, () => require("module_11326")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11335"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11948")).with(PremiumGiftStyles.BOX, () => require("module_11949")).with(PremiumGiftStyles.CUP, () => require("module_11950")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11323")).with(PremiumGiftStyles.COFFEE, () => require("module_11332")).with(PremiumGiftStyles.CHEST, () => require("module_11329")).with(PremiumGiftStyles.CAKE, () => require("module_11326")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11335")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11338"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11948")).with(PremiumGiftStyles.BOX, () => require("module_11949")).with(PremiumGiftStyles.CUP, () => require("module_11950")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11323")).with(PremiumGiftStyles.COFFEE, () => require("module_11332")).with(PremiumGiftStyles.CHEST, () => require("module_11329")).with(PremiumGiftStyles.CAKE, () => require("module_11326")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11335")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11338")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11341"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11948")).with(PremiumGiftStyles.BOX, () => require("module_11949")).with(PremiumGiftStyles.CUP, () => require("module_11950")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11323")).with(PremiumGiftStyles.COFFEE, () => require("module_11332")).with(PremiumGiftStyles.CHEST, () => require("module_11329")).with(PremiumGiftStyles.CAKE, () => require("module_11326")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11335")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11338")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11341")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11344"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11948")).with(PremiumGiftStyles.BOX, () => require("module_11949")).with(PremiumGiftStyles.CUP, () => require("module_11950")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11323")).with(PremiumGiftStyles.COFFEE, () => require("module_11332")).with(PremiumGiftStyles.CHEST, () => require("module_11329")).with(PremiumGiftStyles.CAKE, () => require("module_11326")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11335")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11338")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11341")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11344")).otherwise(() => require("module_11323")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11948")).with(PremiumGiftStyles.BOX, () => require("module_11949")).with(PremiumGiftStyles.CUP, () => require("module_11950")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11323")).with(PremiumGiftStyles.COFFEE, () => require("module_11332")).with(PremiumGiftStyles.CHEST, () => require("module_11329")).with(PremiumGiftStyles.CAKE, () => require("module_11326")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11335")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11338")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11341")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11344")).otherwise(() => require("module_11323")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};