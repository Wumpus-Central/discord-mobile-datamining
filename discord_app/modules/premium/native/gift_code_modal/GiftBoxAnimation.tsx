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
    const match = tmp(4455).match(giftStyle);
    const str = tmp(4455);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12445));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12445)).with(PremiumGiftStyles.BOX, () => callback(12446));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12445)).with(PremiumGiftStyles.BOX, () => callback(12446)).with(PremiumGiftStyles.CUP, () => callback(12447));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12445)).with(PremiumGiftStyles.BOX, () => callback(12446)).with(PremiumGiftStyles.CUP, () => callback(12447)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8968));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12445)).with(PremiumGiftStyles.BOX, () => callback(12446)).with(PremiumGiftStyles.CUP, () => callback(12447)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8968)).with(PremiumGiftStyles.COFFEE, () => callback(8977));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12445)).with(PremiumGiftStyles.BOX, () => callback(12446)).with(PremiumGiftStyles.CUP, () => callback(12447)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8968)).with(PremiumGiftStyles.COFFEE, () => callback(8977)).with(PremiumGiftStyles.CHEST, () => callback(8974));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12445)).with(PremiumGiftStyles.BOX, () => callback(12446)).with(PremiumGiftStyles.CUP, () => callback(12447)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8968)).with(PremiumGiftStyles.COFFEE, () => callback(8977)).with(PremiumGiftStyles.CHEST, () => callback(8974)).with(PremiumGiftStyles.CAKE, () => callback(8971));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12445)).with(PremiumGiftStyles.BOX, () => callback(12446)).with(PremiumGiftStyles.CUP, () => callback(12447)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8968)).with(PremiumGiftStyles.COFFEE, () => callback(8977)).with(PremiumGiftStyles.CHEST, () => callback(8974)).with(PremiumGiftStyles.CAKE, () => callback(8971)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(8980));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12445)).with(PremiumGiftStyles.BOX, () => callback(12446)).with(PremiumGiftStyles.CUP, () => callback(12447)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8968)).with(PremiumGiftStyles.COFFEE, () => callback(8977)).with(PremiumGiftStyles.CHEST, () => callback(8974)).with(PremiumGiftStyles.CAKE, () => callback(8971)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(8980)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(8983));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12445)).with(PremiumGiftStyles.BOX, () => callback(12446)).with(PremiumGiftStyles.CUP, () => callback(12447)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8968)).with(PremiumGiftStyles.COFFEE, () => callback(8977)).with(PremiumGiftStyles.CHEST, () => callback(8974)).with(PremiumGiftStyles.CAKE, () => callback(8971)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(8980)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(8983)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(8986));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12445)).with(PremiumGiftStyles.BOX, () => callback(12446)).with(PremiumGiftStyles.CUP, () => callback(12447)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8968)).with(PremiumGiftStyles.COFFEE, () => callback(8977)).with(PremiumGiftStyles.CHEST, () => callback(8974)).with(PremiumGiftStyles.CAKE, () => callback(8971)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(8980)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(8983)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(8986)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(8989));
    const obj = { source: null, autoPlay: null, style: null };
    obj[0] = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12445)).with(PremiumGiftStyles.BOX, () => callback(12446)).with(PremiumGiftStyles.CUP, () => callback(12447)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(8968)).with(PremiumGiftStyles.COFFEE, () => callback(8977)).with(PremiumGiftStyles.CHEST, () => callback(8974)).with(PremiumGiftStyles.CAKE, () => callback(8971)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(8980)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(8983)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(8986)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(8989)).otherwise(() => callback(8968));
    obj[1] = !tmp4;
    obj[2] = { width: 320, height: 212 };
    return jsx(importDefault(5572), { source: null, autoPlay: null, style: null });
  }
  tmp = require;
};