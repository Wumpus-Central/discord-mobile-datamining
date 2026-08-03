// === Module 12346: GiftBoxAnimation ===

// Module 12346 (GiftBoxAnimation)
import "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { PremiumGiftStyles } from "GuildFeatures";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("GuildFeatures").fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  giftStyle = giftStyle.giftStyle;
  require(589) /* initialize */;
  [][0] = maybeApplyNoTextColorForLightCustomTheme;
  if (null == giftStyle) {
    return null;
  } else {
    const match = tmp(4393).match(giftStyle);
    const str = tmp(4393);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12347));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12347)).with(PremiumGiftStyles.BOX, () => callback(12348));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12347)).with(PremiumGiftStyles.BOX, () => callback(12348)).with(PremiumGiftStyles.CUP, () => callback(12349));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12347)).with(PremiumGiftStyles.BOX, () => callback(12348)).with(PremiumGiftStyles.CUP, () => callback(12349)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8791));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12347)).with(PremiumGiftStyles.BOX, () => callback(12348)).with(PremiumGiftStyles.CUP, () => callback(12349)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8791)).with(PremiumGiftStyles.COFFEE, () => callback(8800));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12347)).with(PremiumGiftStyles.BOX, () => callback(12348)).with(PremiumGiftStyles.CUP, () => callback(12349)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8791)).with(PremiumGiftStyles.COFFEE, () => callback(8800)).with(PremiumGiftStyles.CHEST, () => callback(8797));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12347)).with(PremiumGiftStyles.BOX, () => callback(12348)).with(PremiumGiftStyles.CUP, () => callback(12349)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8791)).with(PremiumGiftStyles.COFFEE, () => callback(8800)).with(PremiumGiftStyles.CHEST, () => callback(8797)).with(PremiumGiftStyles.CAKE, () => callback(8794));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12347)).with(PremiumGiftStyles.BOX, () => callback(12348)).with(PremiumGiftStyles.CUP, () => callback(12349)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8791)).with(PremiumGiftStyles.COFFEE, () => callback(8800)).with(PremiumGiftStyles.CHEST, () => callback(8797)).with(PremiumGiftStyles.CAKE, () => callback(8794)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(8803));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12347)).with(PremiumGiftStyles.BOX, () => callback(12348)).with(PremiumGiftStyles.CUP, () => callback(12349)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8791)).with(PremiumGiftStyles.COFFEE, () => callback(8800)).with(PremiumGiftStyles.CHEST, () => callback(8797)).with(PremiumGiftStyles.CAKE, () => callback(8794)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(8803)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(8806));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12347)).with(PremiumGiftStyles.BOX, () => callback(12348)).with(PremiumGiftStyles.CUP, () => callback(12349)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8791)).with(PremiumGiftStyles.COFFEE, () => callback(8800)).with(PremiumGiftStyles.CHEST, () => callback(8797)).with(PremiumGiftStyles.CAKE, () => callback(8794)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(8803)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(8806)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(8809));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12347)).with(PremiumGiftStyles.BOX, () => callback(12348)).with(PremiumGiftStyles.CUP, () => callback(12349)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8791)).with(PremiumGiftStyles.COFFEE, () => callback(8800)).with(PremiumGiftStyles.CHEST, () => callback(8797)).with(PremiumGiftStyles.CAKE, () => callback(8794)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(8803)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(8806)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(8809)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(8812));
    const obj = { source: null, autoPlay: null, style: null };
    obj[0] = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12347)).with(PremiumGiftStyles.BOX, () => callback(12348)).with(PremiumGiftStyles.CUP, () => callback(12349)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8791)).with(PremiumGiftStyles.COFFEE, () => callback(8800)).with(PremiumGiftStyles.CHEST, () => callback(8797)).with(PremiumGiftStyles.CAKE, () => callback(8794)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(8803)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(8806)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(8809)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(8812)).otherwise(() => callback(8791));
    obj[1] = !tmp4;
    obj[2] = { width: 320, height: 212 };
    return jsx(importDefault(5510), { source: null, autoPlay: null, style: null });
  }
  tmp = require;
};