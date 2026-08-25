// === Module 10496: GiftBoxAnimation ===

// Module 10496 (GiftBoxAnimation)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import t from "t" /* 4593 */;
import playDefault from "play" /* 5825 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4372 */;
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
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10497));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10497)).with(PremiumGiftStyles.BOX, () => callback(10498));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10497)).with(PremiumGiftStyles.BOX, () => callback(10498)).with(PremiumGiftStyles.CUP, () => callback(10499));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10497)).with(PremiumGiftStyles.BOX, () => callback(10498)).with(PremiumGiftStyles.CUP, () => callback(10499)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9736));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10497)).with(PremiumGiftStyles.BOX, () => callback(10498)).with(PremiumGiftStyles.CUP, () => callback(10499)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9736)).with(PremiumGiftStyles.COFFEE, () => callback(9745));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10497)).with(PremiumGiftStyles.BOX, () => callback(10498)).with(PremiumGiftStyles.CUP, () => callback(10499)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9736)).with(PremiumGiftStyles.COFFEE, () => callback(9745)).with(PremiumGiftStyles.CHEST, () => callback(9742));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10497)).with(PremiumGiftStyles.BOX, () => callback(10498)).with(PremiumGiftStyles.CUP, () => callback(10499)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9736)).with(PremiumGiftStyles.COFFEE, () => callback(9745)).with(PremiumGiftStyles.CHEST, () => callback(9742)).with(PremiumGiftStyles.CAKE, () => callback(9739));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10497)).with(PremiumGiftStyles.BOX, () => callback(10498)).with(PremiumGiftStyles.CUP, () => callback(10499)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9736)).with(PremiumGiftStyles.COFFEE, () => callback(9745)).with(PremiumGiftStyles.CHEST, () => callback(9742)).with(PremiumGiftStyles.CAKE, () => callback(9739)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9748));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10497)).with(PremiumGiftStyles.BOX, () => callback(10498)).with(PremiumGiftStyles.CUP, () => callback(10499)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9736)).with(PremiumGiftStyles.COFFEE, () => callback(9745)).with(PremiumGiftStyles.CHEST, () => callback(9742)).with(PremiumGiftStyles.CAKE, () => callback(9739)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9748)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9751));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10497)).with(PremiumGiftStyles.BOX, () => callback(10498)).with(PremiumGiftStyles.CUP, () => callback(10499)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9736)).with(PremiumGiftStyles.COFFEE, () => callback(9745)).with(PremiumGiftStyles.CHEST, () => callback(9742)).with(PremiumGiftStyles.CAKE, () => callback(9739)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9748)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9751)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9754));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10497)).with(PremiumGiftStyles.BOX, () => callback(10498)).with(PremiumGiftStyles.CUP, () => callback(10499)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9736)).with(PremiumGiftStyles.COFFEE, () => callback(9745)).with(PremiumGiftStyles.CHEST, () => callback(9742)).with(PremiumGiftStyles.CAKE, () => callback(9739)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9748)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9751)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9754)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(9757));
    const obj = { source: null, autoPlay: null, style: null };
    obj[0] = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10497)).with(PremiumGiftStyles.BOX, () => callback(10498)).with(PremiumGiftStyles.CUP, () => callback(10499)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9736)).with(PremiumGiftStyles.COFFEE, () => callback(9745)).with(PremiumGiftStyles.CHEST, () => callback(9742)).with(PremiumGiftStyles.CAKE, () => callback(9739)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9748)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9751)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9754)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(9757)).otherwise(() => callback(9736));
    obj[1] = !tmp4;
    obj[2] = { width: 320, height: 212 };
    return jsx(playDefault, { source: null, autoPlay: null, style: null });
  }
  const tmp = require;
};