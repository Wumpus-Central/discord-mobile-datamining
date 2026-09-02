// === Module 13072: GiftBoxAnimation ===

// Module 13072 (GiftBoxAnimation)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 586 */;
import t from "t" /* 4705 */;
import playDefault from "play" /* 5952 */;
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
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(13073));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(13073)).with(PremiumGiftStyles.BOX, () => callback(13074));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(13073)).with(PremiumGiftStyles.BOX, () => callback(13074)).with(PremiumGiftStyles.CUP, () => callback(13075));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(13073)).with(PremiumGiftStyles.BOX, () => callback(13074)).with(PremiumGiftStyles.CUP, () => callback(13075)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10827));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(13073)).with(PremiumGiftStyles.BOX, () => callback(13074)).with(PremiumGiftStyles.CUP, () => callback(13075)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10827)).with(PremiumGiftStyles.COFFEE, () => callback(10836));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(13073)).with(PremiumGiftStyles.BOX, () => callback(13074)).with(PremiumGiftStyles.CUP, () => callback(13075)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10827)).with(PremiumGiftStyles.COFFEE, () => callback(10836)).with(PremiumGiftStyles.CHEST, () => callback(10833));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(13073)).with(PremiumGiftStyles.BOX, () => callback(13074)).with(PremiumGiftStyles.CUP, () => callback(13075)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10827)).with(PremiumGiftStyles.COFFEE, () => callback(10836)).with(PremiumGiftStyles.CHEST, () => callback(10833)).with(PremiumGiftStyles.CAKE, () => callback(10830));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(13073)).with(PremiumGiftStyles.BOX, () => callback(13074)).with(PremiumGiftStyles.CUP, () => callback(13075)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10827)).with(PremiumGiftStyles.COFFEE, () => callback(10836)).with(PremiumGiftStyles.CHEST, () => callback(10833)).with(PremiumGiftStyles.CAKE, () => callback(10830)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10839));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(13073)).with(PremiumGiftStyles.BOX, () => callback(13074)).with(PremiumGiftStyles.CUP, () => callback(13075)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10827)).with(PremiumGiftStyles.COFFEE, () => callback(10836)).with(PremiumGiftStyles.CHEST, () => callback(10833)).with(PremiumGiftStyles.CAKE, () => callback(10830)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10839)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10842));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(13073)).with(PremiumGiftStyles.BOX, () => callback(13074)).with(PremiumGiftStyles.CUP, () => callback(13075)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10827)).with(PremiumGiftStyles.COFFEE, () => callback(10836)).with(PremiumGiftStyles.CHEST, () => callback(10833)).with(PremiumGiftStyles.CAKE, () => callback(10830)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10839)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10842)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(10845));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(13073)).with(PremiumGiftStyles.BOX, () => callback(13074)).with(PremiumGiftStyles.CUP, () => callback(13075)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10827)).with(PremiumGiftStyles.COFFEE, () => callback(10836)).with(PremiumGiftStyles.CHEST, () => callback(10833)).with(PremiumGiftStyles.CAKE, () => callback(10830)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10839)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10842)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(10845)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(10848));
    const obj = { source: null, autoPlay: null, style: null };
    obj[0] = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(13073)).with(PremiumGiftStyles.BOX, () => callback(13074)).with(PremiumGiftStyles.CUP, () => callback(13075)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10827)).with(PremiumGiftStyles.COFFEE, () => callback(10836)).with(PremiumGiftStyles.CHEST, () => callback(10833)).with(PremiumGiftStyles.CAKE, () => callback(10830)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10839)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10842)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(10845)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(10848)).otherwise(() => callback(10827));
    obj[1] = !tmp4;
    obj[2] = { width: 320, height: 212 };
    return jsx(playDefault, { source: null, autoPlay: null, style: null });
  }
  const tmp = require;
};