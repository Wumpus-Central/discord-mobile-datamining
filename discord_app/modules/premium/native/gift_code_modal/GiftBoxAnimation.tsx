// discord_app/modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx
import "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { PremiumGiftStyles } from "GuildFeatures";
import { jsx } from "jsxProd";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { play } from "../../../../components_native/common/LottieAnimationView.tsx";

const require = arg1;
const result = require("GuildFeatures").fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  giftStyle = giftStyle.giftStyle;
  initialize;
  [][0] = maybeApplyNoTextColorForLightCustomTheme;
  if (null == giftStyle) {
    return null;
  } else {
    const match = tmp(4543).match(giftStyle);
    const str = tmp(4543);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10474));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10474)).with(PremiumGiftStyles.BOX, () => callback(10475));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10474)).with(PremiumGiftStyles.BOX, () => callback(10475)).with(PremiumGiftStyles.CUP, () => callback(10476));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10474)).with(PremiumGiftStyles.BOX, () => callback(10475)).with(PremiumGiftStyles.CUP, () => callback(10476)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9634));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10474)).with(PremiumGiftStyles.BOX, () => callback(10475)).with(PremiumGiftStyles.CUP, () => callback(10476)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9634)).with(PremiumGiftStyles.COFFEE, () => callback(9643));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10474)).with(PremiumGiftStyles.BOX, () => callback(10475)).with(PremiumGiftStyles.CUP, () => callback(10476)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9634)).with(PremiumGiftStyles.COFFEE, () => callback(9643)).with(PremiumGiftStyles.CHEST, () => callback(9640));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10474)).with(PremiumGiftStyles.BOX, () => callback(10475)).with(PremiumGiftStyles.CUP, () => callback(10476)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9634)).with(PremiumGiftStyles.COFFEE, () => callback(9643)).with(PremiumGiftStyles.CHEST, () => callback(9640)).with(PremiumGiftStyles.CAKE, () => callback(9637));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10474)).with(PremiumGiftStyles.BOX, () => callback(10475)).with(PremiumGiftStyles.CUP, () => callback(10476)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9634)).with(PremiumGiftStyles.COFFEE, () => callback(9643)).with(PremiumGiftStyles.CHEST, () => callback(9640)).with(PremiumGiftStyles.CAKE, () => callback(9637)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9646));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10474)).with(PremiumGiftStyles.BOX, () => callback(10475)).with(PremiumGiftStyles.CUP, () => callback(10476)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9634)).with(PremiumGiftStyles.COFFEE, () => callback(9643)).with(PremiumGiftStyles.CHEST, () => callback(9640)).with(PremiumGiftStyles.CAKE, () => callback(9637)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9646)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9649));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10474)).with(PremiumGiftStyles.BOX, () => callback(10475)).with(PremiumGiftStyles.CUP, () => callback(10476)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9634)).with(PremiumGiftStyles.COFFEE, () => callback(9643)).with(PremiumGiftStyles.CHEST, () => callback(9640)).with(PremiumGiftStyles.CAKE, () => callback(9637)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9646)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9649)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9652));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10474)).with(PremiumGiftStyles.BOX, () => callback(10475)).with(PremiumGiftStyles.CUP, () => callback(10476)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9634)).with(PremiumGiftStyles.COFFEE, () => callback(9643)).with(PremiumGiftStyles.CHEST, () => callback(9640)).with(PremiumGiftStyles.CAKE, () => callback(9637)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9646)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9649)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9652)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(9655));
    const obj = { source: null, autoPlay: null, style: null };
    obj[0] = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10474)).with(PremiumGiftStyles.BOX, () => callback(10475)).with(PremiumGiftStyles.CUP, () => callback(10476)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9634)).with(PremiumGiftStyles.COFFEE, () => callback(9643)).with(PremiumGiftStyles.CHEST, () => callback(9640)).with(PremiumGiftStyles.CAKE, () => callback(9637)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9646)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9649)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9652)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(9655)).otherwise(() => callback(9634));
    obj[1] = !tmp4;
    obj[2] = { width: 320, height: 212 };
    return jsx(play, { source: null, autoPlay: null, style: null });
  }
  tmp = require;
};