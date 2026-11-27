// === Module 11955: GiftBoxAnimation ===

// Module 11955 (GiftBoxAnimation)
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
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11956"));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11956")).with(PremiumGiftStyles.BOX, () => require("module_11957"));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11956")).with(PremiumGiftStyles.BOX, () => require("module_11957")).with(PremiumGiftStyles.CUP, () => require("module_11958"));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11956")).with(PremiumGiftStyles.BOX, () => require("module_11957")).with(PremiumGiftStyles.CUP, () => require("module_11958")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11324"));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11956")).with(PremiumGiftStyles.BOX, () => require("module_11957")).with(PremiumGiftStyles.CUP, () => require("module_11958")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11324")).with(PremiumGiftStyles.COFFEE, () => require("module_11333"));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11956")).with(PremiumGiftStyles.BOX, () => require("module_11957")).with(PremiumGiftStyles.CUP, () => require("module_11958")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11324")).with(PremiumGiftStyles.COFFEE, () => require("module_11333")).with(PremiumGiftStyles.CHEST, () => require("module_11330"));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11956")).with(PremiumGiftStyles.BOX, () => require("module_11957")).with(PremiumGiftStyles.CUP, () => require("module_11958")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11324")).with(PremiumGiftStyles.COFFEE, () => require("module_11333")).with(PremiumGiftStyles.CHEST, () => require("module_11330")).with(PremiumGiftStyles.CAKE, () => require("module_11327"));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11956")).with(PremiumGiftStyles.BOX, () => require("module_11957")).with(PremiumGiftStyles.CUP, () => require("module_11958")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11324")).with(PremiumGiftStyles.COFFEE, () => require("module_11333")).with(PremiumGiftStyles.CHEST, () => require("module_11330")).with(PremiumGiftStyles.CAKE, () => require("module_11327")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11336"));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11956")).with(PremiumGiftStyles.BOX, () => require("module_11957")).with(PremiumGiftStyles.CUP, () => require("module_11958")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11324")).with(PremiumGiftStyles.COFFEE, () => require("module_11333")).with(PremiumGiftStyles.CHEST, () => require("module_11330")).with(PremiumGiftStyles.CAKE, () => require("module_11327")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11336")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11339"));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11956")).with(PremiumGiftStyles.BOX, () => require("module_11957")).with(PremiumGiftStyles.CUP, () => require("module_11958")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11324")).with(PremiumGiftStyles.COFFEE, () => require("module_11333")).with(PremiumGiftStyles.CHEST, () => require("module_11330")).with(PremiumGiftStyles.CAKE, () => require("module_11327")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11336")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11339")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11342"));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11956")).with(PremiumGiftStyles.BOX, () => require("module_11957")).with(PremiumGiftStyles.CUP, () => require("module_11958")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11324")).with(PremiumGiftStyles.COFFEE, () => require("module_11333")).with(PremiumGiftStyles.CHEST, () => require("module_11330")).with(PremiumGiftStyles.CAKE, () => require("module_11327")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11336")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11339")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11342")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11345"));
    const obj = { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11956")).with(PremiumGiftStyles.BOX, () => require("module_11957")).with(PremiumGiftStyles.CUP, () => require("module_11958")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11324")).with(PremiumGiftStyles.COFFEE, () => require("module_11333")).with(PremiumGiftStyles.CHEST, () => require("module_11330")).with(PremiumGiftStyles.CAKE, () => require("module_11327")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11336")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11339")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11342")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11345")).otherwise(() => require("module_11324")), autoPlay: !tmp4, style: { width: 320, height: 212 } };
    return jsx(LottieAnimationViewDefault, { source: match.with(PremiumGiftStyles.SNOWGLOBE, () => require("module_11956")).with(PremiumGiftStyles.BOX, () => require("module_11957")).with(PremiumGiftStyles.CUP, () => require("module_11958")).with(PremiumGiftStyles.STANDARD_BOX, () => require("module_11324")).with(PremiumGiftStyles.COFFEE, () => require("module_11333")).with(PremiumGiftStyles.CHEST, () => require("module_11330")).with(PremiumGiftStyles.CAKE, () => require("module_11327")).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("module_11336")).with(PremiumGiftStyles.SEASONAL_CAKE, () => require("module_11339")).with(PremiumGiftStyles.SEASONAL_CHEST, () => require("module_11342")).with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("module_11345")).otherwise(() => require("module_11324")), autoPlay: !tmp4, style: { width: 320, height: 212 } });
  }
};