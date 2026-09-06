// === Module 11448: GiftBoxAnimation ===

// Module 11448 (GiftBoxAnimation)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 504 */;
import t from "t" /* 4745 */;
import playDefault from "play" /* 5529 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4552 */;
import { PremiumGiftStyles } from "GuildFeatures" /* 1373 */;
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
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11449));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11449)).with(PremiumGiftStyles.BOX, () => callback(11450));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11449)).with(PremiumGiftStyles.BOX, () => callback(11450)).with(PremiumGiftStyles.CUP, () => callback(11451));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11449)).with(PremiumGiftStyles.BOX, () => callback(11450)).with(PremiumGiftStyles.CUP, () => callback(11451)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10834));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11449)).with(PremiumGiftStyles.BOX, () => callback(11450)).with(PremiumGiftStyles.CUP, () => callback(11451)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10834)).with(PremiumGiftStyles.COFFEE, () => callback(10843));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11449)).with(PremiumGiftStyles.BOX, () => callback(11450)).with(PremiumGiftStyles.CUP, () => callback(11451)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10834)).with(PremiumGiftStyles.COFFEE, () => callback(10843)).with(PremiumGiftStyles.CHEST, () => callback(10840));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11449)).with(PremiumGiftStyles.BOX, () => callback(11450)).with(PremiumGiftStyles.CUP, () => callback(11451)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10834)).with(PremiumGiftStyles.COFFEE, () => callback(10843)).with(PremiumGiftStyles.CHEST, () => callback(10840)).with(PremiumGiftStyles.CAKE, () => callback(10837));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11449)).with(PremiumGiftStyles.BOX, () => callback(11450)).with(PremiumGiftStyles.CUP, () => callback(11451)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10834)).with(PremiumGiftStyles.COFFEE, () => callback(10843)).with(PremiumGiftStyles.CHEST, () => callback(10840)).with(PremiumGiftStyles.CAKE, () => callback(10837)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10846));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11449)).with(PremiumGiftStyles.BOX, () => callback(11450)).with(PremiumGiftStyles.CUP, () => callback(11451)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10834)).with(PremiumGiftStyles.COFFEE, () => callback(10843)).with(PremiumGiftStyles.CHEST, () => callback(10840)).with(PremiumGiftStyles.CAKE, () => callback(10837)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10846)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10849));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11449)).with(PremiumGiftStyles.BOX, () => callback(11450)).with(PremiumGiftStyles.CUP, () => callback(11451)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10834)).with(PremiumGiftStyles.COFFEE, () => callback(10843)).with(PremiumGiftStyles.CHEST, () => callback(10840)).with(PremiumGiftStyles.CAKE, () => callback(10837)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10846)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10849)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(10852));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11449)).with(PremiumGiftStyles.BOX, () => callback(11450)).with(PremiumGiftStyles.CUP, () => callback(11451)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10834)).with(PremiumGiftStyles.COFFEE, () => callback(10843)).with(PremiumGiftStyles.CHEST, () => callback(10840)).with(PremiumGiftStyles.CAKE, () => callback(10837)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10846)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10849)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(10852)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(10855));
    const obj = { source: null, autoPlay: null, style: null };
    obj[0] = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(11449)).with(PremiumGiftStyles.BOX, () => callback(11450)).with(PremiumGiftStyles.CUP, () => callback(11451)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10834)).with(PremiumGiftStyles.COFFEE, () => callback(10843)).with(PremiumGiftStyles.CHEST, () => callback(10840)).with(PremiumGiftStyles.CAKE, () => callback(10837)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10846)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10849)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(10852)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(10855)).otherwise(() => callback(10834));
    obj[1] = !tmp4;
    obj[2] = { width: 320, height: 212 };
    return jsx(playDefault, { source: null, autoPlay: null, style: null });
  }
  const tmp = require;
};