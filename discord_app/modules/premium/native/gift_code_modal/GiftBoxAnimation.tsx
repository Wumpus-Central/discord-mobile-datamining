// === Module 12850: GiftBoxAnimation ===

// Module 12850 (GiftBoxAnimation)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import t from "t" /* 4705 */;
import playDefault from "play" /* 5944 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import { PremiumGiftStyles } from "GuildFeatures" /* 1924 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  giftStyle = giftStyle.giftStyle;
  initialize;
  [][0] = closure_3;
  if (null == giftStyle) {
    return null;
  } else {
    const match = t.match(giftStyle);
    const str = t;
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12851));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12851)).with(PremiumGiftStyles.BOX, () => callback(12852));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12851)).with(PremiumGiftStyles.BOX, () => callback(12852)).with(PremiumGiftStyles.CUP, () => callback(12853));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12851)).with(PremiumGiftStyles.BOX, () => callback(12852)).with(PremiumGiftStyles.CUP, () => callback(12853)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10606));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12851)).with(PremiumGiftStyles.BOX, () => callback(12852)).with(PremiumGiftStyles.CUP, () => callback(12853)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10606)).with(PremiumGiftStyles.COFFEE, () => callback(10615));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12851)).with(PremiumGiftStyles.BOX, () => callback(12852)).with(PremiumGiftStyles.CUP, () => callback(12853)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10606)).with(PremiumGiftStyles.COFFEE, () => callback(10615)).with(PremiumGiftStyles.CHEST, () => callback(10612));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12851)).with(PremiumGiftStyles.BOX, () => callback(12852)).with(PremiumGiftStyles.CUP, () => callback(12853)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10606)).with(PremiumGiftStyles.COFFEE, () => callback(10615)).with(PremiumGiftStyles.CHEST, () => callback(10612)).with(PremiumGiftStyles.CAKE, () => callback(10609));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12851)).with(PremiumGiftStyles.BOX, () => callback(12852)).with(PremiumGiftStyles.CUP, () => callback(12853)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10606)).with(PremiumGiftStyles.COFFEE, () => callback(10615)).with(PremiumGiftStyles.CHEST, () => callback(10612)).with(PremiumGiftStyles.CAKE, () => callback(10609)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10618));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12851)).with(PremiumGiftStyles.BOX, () => callback(12852)).with(PremiumGiftStyles.CUP, () => callback(12853)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10606)).with(PremiumGiftStyles.COFFEE, () => callback(10615)).with(PremiumGiftStyles.CHEST, () => callback(10612)).with(PremiumGiftStyles.CAKE, () => callback(10609)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10618)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10621));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12851)).with(PremiumGiftStyles.BOX, () => callback(12852)).with(PremiumGiftStyles.CUP, () => callback(12853)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10606)).with(PremiumGiftStyles.COFFEE, () => callback(10615)).with(PremiumGiftStyles.CHEST, () => callback(10612)).with(PremiumGiftStyles.CAKE, () => callback(10609)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10618)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10621)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(10624));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12851)).with(PremiumGiftStyles.BOX, () => callback(12852)).with(PremiumGiftStyles.CUP, () => callback(12853)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10606)).with(PremiumGiftStyles.COFFEE, () => callback(10615)).with(PremiumGiftStyles.CHEST, () => callback(10612)).with(PremiumGiftStyles.CAKE, () => callback(10609)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10618)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10621)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(10624)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(10627));
    const obj = { source: null, autoPlay: null, style: null };
    obj[0] = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12851)).with(PremiumGiftStyles.BOX, () => callback(12852)).with(PremiumGiftStyles.CUP, () => callback(12853)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10606)).with(PremiumGiftStyles.COFFEE, () => callback(10615)).with(PremiumGiftStyles.CHEST, () => callback(10612)).with(PremiumGiftStyles.CAKE, () => callback(10609)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10618)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10621)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(10624)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(10627)).otherwise(() => callback(10606));
    obj[1] = !tmp4;
    obj[2] = { width: 320, height: 212 };
    return jsx(playDefault, { source: null, autoPlay: null, style: null });
  }
  const tmp = require;
};