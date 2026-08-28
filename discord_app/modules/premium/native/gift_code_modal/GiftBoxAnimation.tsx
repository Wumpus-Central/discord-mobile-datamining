// === Module 12782: GiftBoxAnimation ===

// Module 12782 (GiftBoxAnimation)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import t from "t" /* 4671 */;
import playDefault from "play" /* 5909 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4438 */;
import { PremiumGiftStyles } from "GuildFeatures" /* 1925 */;
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
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12783));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12783)).with(PremiumGiftStyles.BOX, () => callback(12784));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12783)).with(PremiumGiftStyles.BOX, () => callback(12784)).with(PremiumGiftStyles.CUP, () => callback(12785));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12783)).with(PremiumGiftStyles.BOX, () => callback(12784)).with(PremiumGiftStyles.CUP, () => callback(12785)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10544));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12783)).with(PremiumGiftStyles.BOX, () => callback(12784)).with(PremiumGiftStyles.CUP, () => callback(12785)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10544)).with(PremiumGiftStyles.COFFEE, () => callback(10553));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12783)).with(PremiumGiftStyles.BOX, () => callback(12784)).with(PremiumGiftStyles.CUP, () => callback(12785)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10544)).with(PremiumGiftStyles.COFFEE, () => callback(10553)).with(PremiumGiftStyles.CHEST, () => callback(10550));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12783)).with(PremiumGiftStyles.BOX, () => callback(12784)).with(PremiumGiftStyles.CUP, () => callback(12785)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10544)).with(PremiumGiftStyles.COFFEE, () => callback(10553)).with(PremiumGiftStyles.CHEST, () => callback(10550)).with(PremiumGiftStyles.CAKE, () => callback(10547));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12783)).with(PremiumGiftStyles.BOX, () => callback(12784)).with(PremiumGiftStyles.CUP, () => callback(12785)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10544)).with(PremiumGiftStyles.COFFEE, () => callback(10553)).with(PremiumGiftStyles.CHEST, () => callback(10550)).with(PremiumGiftStyles.CAKE, () => callback(10547)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10556));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12783)).with(PremiumGiftStyles.BOX, () => callback(12784)).with(PremiumGiftStyles.CUP, () => callback(12785)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10544)).with(PremiumGiftStyles.COFFEE, () => callback(10553)).with(PremiumGiftStyles.CHEST, () => callback(10550)).with(PremiumGiftStyles.CAKE, () => callback(10547)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10556)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10559));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12783)).with(PremiumGiftStyles.BOX, () => callback(12784)).with(PremiumGiftStyles.CUP, () => callback(12785)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10544)).with(PremiumGiftStyles.COFFEE, () => callback(10553)).with(PremiumGiftStyles.CHEST, () => callback(10550)).with(PremiumGiftStyles.CAKE, () => callback(10547)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10556)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10559)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(10562));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12783)).with(PremiumGiftStyles.BOX, () => callback(12784)).with(PremiumGiftStyles.CUP, () => callback(12785)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10544)).with(PremiumGiftStyles.COFFEE, () => callback(10553)).with(PremiumGiftStyles.CHEST, () => callback(10550)).with(PremiumGiftStyles.CAKE, () => callback(10547)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10556)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10559)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(10562)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(10565));
    const obj = { source: null, autoPlay: null, style: null };
    obj[0] = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12783)).with(PremiumGiftStyles.BOX, () => callback(12784)).with(PremiumGiftStyles.CUP, () => callback(12785)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10544)).with(PremiumGiftStyles.COFFEE, () => callback(10553)).with(PremiumGiftStyles.CHEST, () => callback(10550)).with(PremiumGiftStyles.CAKE, () => callback(10547)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10556)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10559)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(10562)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(10565)).otherwise(() => callback(10544));
    obj[1] = !tmp4;
    obj[2] = { width: 320, height: 212 };
    return jsx(playDefault, { source: null, autoPlay: null, style: null });
  }
  const tmp = require;
};