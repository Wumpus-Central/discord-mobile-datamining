// === Module 13084: GiftBoxAnimation ===

// Module 13084 (GiftBoxAnimation)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 586 */;
import t from "t" /* 4706 */;
import playDefault from "play" /* 5953 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import { PremiumGiftStyles } from "GuildFeatures" /* 1923 */;
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
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(13085));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(13085)).with(PremiumGiftStyles.BOX, () => callback(13086));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(13085)).with(PremiumGiftStyles.BOX, () => callback(13086)).with(PremiumGiftStyles.CUP, () => callback(13087));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(13085)).with(PremiumGiftStyles.BOX, () => callback(13086)).with(PremiumGiftStyles.CUP, () => callback(13087)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10831));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(13085)).with(PremiumGiftStyles.BOX, () => callback(13086)).with(PremiumGiftStyles.CUP, () => callback(13087)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10831)).with(PremiumGiftStyles.COFFEE, () => callback(10840));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(13085)).with(PremiumGiftStyles.BOX, () => callback(13086)).with(PremiumGiftStyles.CUP, () => callback(13087)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10831)).with(PremiumGiftStyles.COFFEE, () => callback(10840)).with(PremiumGiftStyles.CHEST, () => callback(10837));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(13085)).with(PremiumGiftStyles.BOX, () => callback(13086)).with(PremiumGiftStyles.CUP, () => callback(13087)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10831)).with(PremiumGiftStyles.COFFEE, () => callback(10840)).with(PremiumGiftStyles.CHEST, () => callback(10837)).with(PremiumGiftStyles.CAKE, () => callback(10834));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(13085)).with(PremiumGiftStyles.BOX, () => callback(13086)).with(PremiumGiftStyles.CUP, () => callback(13087)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10831)).with(PremiumGiftStyles.COFFEE, () => callback(10840)).with(PremiumGiftStyles.CHEST, () => callback(10837)).with(PremiumGiftStyles.CAKE, () => callback(10834)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10843));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(13085)).with(PremiumGiftStyles.BOX, () => callback(13086)).with(PremiumGiftStyles.CUP, () => callback(13087)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10831)).with(PremiumGiftStyles.COFFEE, () => callback(10840)).with(PremiumGiftStyles.CHEST, () => callback(10837)).with(PremiumGiftStyles.CAKE, () => callback(10834)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10843)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10846));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(13085)).with(PremiumGiftStyles.BOX, () => callback(13086)).with(PremiumGiftStyles.CUP, () => callback(13087)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10831)).with(PremiumGiftStyles.COFFEE, () => callback(10840)).with(PremiumGiftStyles.CHEST, () => callback(10837)).with(PremiumGiftStyles.CAKE, () => callback(10834)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10843)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10846)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(10849));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(13085)).with(PremiumGiftStyles.BOX, () => callback(13086)).with(PremiumGiftStyles.CUP, () => callback(13087)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10831)).with(PremiumGiftStyles.COFFEE, () => callback(10840)).with(PremiumGiftStyles.CHEST, () => callback(10837)).with(PremiumGiftStyles.CAKE, () => callback(10834)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10843)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10846)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(10849)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(10852));
    const obj = { source: null, autoPlay: null, style: null };
    obj[0] = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(13085)).with(PremiumGiftStyles.BOX, () => callback(13086)).with(PremiumGiftStyles.CUP, () => callback(13087)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10831)).with(PremiumGiftStyles.COFFEE, () => callback(10840)).with(PremiumGiftStyles.CHEST, () => callback(10837)).with(PremiumGiftStyles.CAKE, () => callback(10834)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10843)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10846)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(10849)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(10852)).otherwise(() => callback(10831));
    obj[1] = !tmp4;
    obj[2] = { width: 320, height: 212 };
    return jsx(playDefault, { source: null, autoPlay: null, style: null });
  }
  const tmp = require;
};