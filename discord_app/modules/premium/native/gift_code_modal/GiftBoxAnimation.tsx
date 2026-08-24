// === Module 10694: GiftBoxAnimation ===

// Module 10694 (GiftBoxAnimation)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import t from "t" /* 4490 */;
import playDefault from "play" /* 7168 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4669 */;
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
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10695));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10695)).with(PremiumGiftStyles.BOX, () => callback(10696));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10695)).with(PremiumGiftStyles.BOX, () => callback(10696)).with(PremiumGiftStyles.CUP, () => callback(10697));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10695)).with(PremiumGiftStyles.BOX, () => callback(10696)).with(PremiumGiftStyles.CUP, () => callback(10697)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9640));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10695)).with(PremiumGiftStyles.BOX, () => callback(10696)).with(PremiumGiftStyles.CUP, () => callback(10697)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9640)).with(PremiumGiftStyles.COFFEE, () => callback(9649));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10695)).with(PremiumGiftStyles.BOX, () => callback(10696)).with(PremiumGiftStyles.CUP, () => callback(10697)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9640)).with(PremiumGiftStyles.COFFEE, () => callback(9649)).with(PremiumGiftStyles.CHEST, () => callback(9646));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10695)).with(PremiumGiftStyles.BOX, () => callback(10696)).with(PremiumGiftStyles.CUP, () => callback(10697)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9640)).with(PremiumGiftStyles.COFFEE, () => callback(9649)).with(PremiumGiftStyles.CHEST, () => callback(9646)).with(PremiumGiftStyles.CAKE, () => callback(9643));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10695)).with(PremiumGiftStyles.BOX, () => callback(10696)).with(PremiumGiftStyles.CUP, () => callback(10697)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9640)).with(PremiumGiftStyles.COFFEE, () => callback(9649)).with(PremiumGiftStyles.CHEST, () => callback(9646)).with(PremiumGiftStyles.CAKE, () => callback(9643)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9652));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10695)).with(PremiumGiftStyles.BOX, () => callback(10696)).with(PremiumGiftStyles.CUP, () => callback(10697)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9640)).with(PremiumGiftStyles.COFFEE, () => callback(9649)).with(PremiumGiftStyles.CHEST, () => callback(9646)).with(PremiumGiftStyles.CAKE, () => callback(9643)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9652)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9655));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10695)).with(PremiumGiftStyles.BOX, () => callback(10696)).with(PremiumGiftStyles.CUP, () => callback(10697)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9640)).with(PremiumGiftStyles.COFFEE, () => callback(9649)).with(PremiumGiftStyles.CHEST, () => callback(9646)).with(PremiumGiftStyles.CAKE, () => callback(9643)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9652)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9655)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9658));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10695)).with(PremiumGiftStyles.BOX, () => callback(10696)).with(PremiumGiftStyles.CUP, () => callback(10697)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9640)).with(PremiumGiftStyles.COFFEE, () => callback(9649)).with(PremiumGiftStyles.CHEST, () => callback(9646)).with(PremiumGiftStyles.CAKE, () => callback(9643)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9652)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9655)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9658)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(9661));
    const obj = { source: null, autoPlay: null, style: null };
    obj[0] = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10695)).with(PremiumGiftStyles.BOX, () => callback(10696)).with(PremiumGiftStyles.CUP, () => callback(10697)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9640)).with(PremiumGiftStyles.COFFEE, () => callback(9649)).with(PremiumGiftStyles.CHEST, () => callback(9646)).with(PremiumGiftStyles.CAKE, () => callback(9643)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9652)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9655)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9658)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(9661)).otherwise(() => callback(9640));
    obj[1] = !tmp4;
    obj[2] = { width: 320, height: 212 };
    return jsx(playDefault, { source: null, autoPlay: null, style: null });
  }
  const tmp = require;
};