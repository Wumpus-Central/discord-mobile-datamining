// === Module 10655: GiftBoxAnimation ===

// Module 10655 (GiftBoxAnimation)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import t from "t" /* 4486 */;
import playDefault from "play" /* 7130 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
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
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10656));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10656)).with(PremiumGiftStyles.BOX, () => callback(10657));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10656)).with(PremiumGiftStyles.BOX, () => callback(10657)).with(PremiumGiftStyles.CUP, () => callback(10658));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10656)).with(PremiumGiftStyles.BOX, () => callback(10657)).with(PremiumGiftStyles.CUP, () => callback(10658)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9603));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10656)).with(PremiumGiftStyles.BOX, () => callback(10657)).with(PremiumGiftStyles.CUP, () => callback(10658)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9603)).with(PremiumGiftStyles.COFFEE, () => callback(9612));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10656)).with(PremiumGiftStyles.BOX, () => callback(10657)).with(PremiumGiftStyles.CUP, () => callback(10658)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9603)).with(PremiumGiftStyles.COFFEE, () => callback(9612)).with(PremiumGiftStyles.CHEST, () => callback(9609));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10656)).with(PremiumGiftStyles.BOX, () => callback(10657)).with(PremiumGiftStyles.CUP, () => callback(10658)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9603)).with(PremiumGiftStyles.COFFEE, () => callback(9612)).with(PremiumGiftStyles.CHEST, () => callback(9609)).with(PremiumGiftStyles.CAKE, () => callback(9606));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10656)).with(PremiumGiftStyles.BOX, () => callback(10657)).with(PremiumGiftStyles.CUP, () => callback(10658)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9603)).with(PremiumGiftStyles.COFFEE, () => callback(9612)).with(PremiumGiftStyles.CHEST, () => callback(9609)).with(PremiumGiftStyles.CAKE, () => callback(9606)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9615));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10656)).with(PremiumGiftStyles.BOX, () => callback(10657)).with(PremiumGiftStyles.CUP, () => callback(10658)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9603)).with(PremiumGiftStyles.COFFEE, () => callback(9612)).with(PremiumGiftStyles.CHEST, () => callback(9609)).with(PremiumGiftStyles.CAKE, () => callback(9606)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9615)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9618));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10656)).with(PremiumGiftStyles.BOX, () => callback(10657)).with(PremiumGiftStyles.CUP, () => callback(10658)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9603)).with(PremiumGiftStyles.COFFEE, () => callback(9612)).with(PremiumGiftStyles.CHEST, () => callback(9609)).with(PremiumGiftStyles.CAKE, () => callback(9606)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9615)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9618)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9621));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10656)).with(PremiumGiftStyles.BOX, () => callback(10657)).with(PremiumGiftStyles.CUP, () => callback(10658)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9603)).with(PremiumGiftStyles.COFFEE, () => callback(9612)).with(PremiumGiftStyles.CHEST, () => callback(9609)).with(PremiumGiftStyles.CAKE, () => callback(9606)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9615)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9618)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9621)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(9624));
    const obj = { source: null, autoPlay: null, style: null };
    obj[0] = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10656)).with(PremiumGiftStyles.BOX, () => callback(10657)).with(PremiumGiftStyles.CUP, () => callback(10658)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9603)).with(PremiumGiftStyles.COFFEE, () => callback(9612)).with(PremiumGiftStyles.CHEST, () => callback(9609)).with(PremiumGiftStyles.CAKE, () => callback(9606)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9615)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9618)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9621)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(9624)).otherwise(() => callback(9603));
    obj[1] = !tmp4;
    obj[2] = { width: 320, height: 212 };
    return jsx(playDefault, { source: null, autoPlay: null, style: null });
  }
  const tmp = require;
};