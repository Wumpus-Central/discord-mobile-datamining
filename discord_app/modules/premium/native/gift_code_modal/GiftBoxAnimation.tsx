// === Module 10564: GiftBoxAnimation ===

// Module 10564 (GiftBoxAnimation)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import t from "t" /* 4657 */;
import playDefault from "play" /* 5891 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4436 */;
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
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10565));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10565)).with(PremiumGiftStyles.BOX, () => callback(10566));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10565)).with(PremiumGiftStyles.BOX, () => callback(10566)).with(PremiumGiftStyles.CUP, () => callback(10567));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10565)).with(PremiumGiftStyles.BOX, () => callback(10566)).with(PremiumGiftStyles.CUP, () => callback(10567)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9802));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10565)).with(PremiumGiftStyles.BOX, () => callback(10566)).with(PremiumGiftStyles.CUP, () => callback(10567)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9802)).with(PremiumGiftStyles.COFFEE, () => callback(9811));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10565)).with(PremiumGiftStyles.BOX, () => callback(10566)).with(PremiumGiftStyles.CUP, () => callback(10567)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9802)).with(PremiumGiftStyles.COFFEE, () => callback(9811)).with(PremiumGiftStyles.CHEST, () => callback(9808));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10565)).with(PremiumGiftStyles.BOX, () => callback(10566)).with(PremiumGiftStyles.CUP, () => callback(10567)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9802)).with(PremiumGiftStyles.COFFEE, () => callback(9811)).with(PremiumGiftStyles.CHEST, () => callback(9808)).with(PremiumGiftStyles.CAKE, () => callback(9805));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10565)).with(PremiumGiftStyles.BOX, () => callback(10566)).with(PremiumGiftStyles.CUP, () => callback(10567)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9802)).with(PremiumGiftStyles.COFFEE, () => callback(9811)).with(PremiumGiftStyles.CHEST, () => callback(9808)).with(PremiumGiftStyles.CAKE, () => callback(9805)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9814));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10565)).with(PremiumGiftStyles.BOX, () => callback(10566)).with(PremiumGiftStyles.CUP, () => callback(10567)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9802)).with(PremiumGiftStyles.COFFEE, () => callback(9811)).with(PremiumGiftStyles.CHEST, () => callback(9808)).with(PremiumGiftStyles.CAKE, () => callback(9805)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9814)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9817));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10565)).with(PremiumGiftStyles.BOX, () => callback(10566)).with(PremiumGiftStyles.CUP, () => callback(10567)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9802)).with(PremiumGiftStyles.COFFEE, () => callback(9811)).with(PremiumGiftStyles.CHEST, () => callback(9808)).with(PremiumGiftStyles.CAKE, () => callback(9805)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9814)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9817)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9820));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10565)).with(PremiumGiftStyles.BOX, () => callback(10566)).with(PremiumGiftStyles.CUP, () => callback(10567)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9802)).with(PremiumGiftStyles.COFFEE, () => callback(9811)).with(PremiumGiftStyles.CHEST, () => callback(9808)).with(PremiumGiftStyles.CAKE, () => callback(9805)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9814)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9817)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9820)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(9823));
    const obj = { source: null, autoPlay: null, style: null };
    obj[0] = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10565)).with(PremiumGiftStyles.BOX, () => callback(10566)).with(PremiumGiftStyles.CUP, () => callback(10567)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9802)).with(PremiumGiftStyles.COFFEE, () => callback(9811)).with(PremiumGiftStyles.CHEST, () => callback(9808)).with(PremiumGiftStyles.CAKE, () => callback(9805)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9814)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9817)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9820)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(9823)).otherwise(() => callback(9802));
    obj[1] = !tmp4;
    obj[2] = { width: 320, height: 212 };
    return jsx(playDefault, { source: null, autoPlay: null, style: null });
  }
  const tmp = require;
};