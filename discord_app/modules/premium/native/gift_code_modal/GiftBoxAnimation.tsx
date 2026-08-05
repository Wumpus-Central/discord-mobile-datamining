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
    const match = tmp(4484).match(giftStyle);
    const str = tmp(4484);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10342));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10342)).with(PremiumGiftStyles.BOX, () => callback(10343));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10342)).with(PremiumGiftStyles.BOX, () => callback(10343)).with(PremiumGiftStyles.CUP, () => callback(10344));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10342)).with(PremiumGiftStyles.BOX, () => callback(10343)).with(PremiumGiftStyles.CUP, () => callback(10344)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9507));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10342)).with(PremiumGiftStyles.BOX, () => callback(10343)).with(PremiumGiftStyles.CUP, () => callback(10344)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9507)).with(PremiumGiftStyles.COFFEE, () => callback(9516));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10342)).with(PremiumGiftStyles.BOX, () => callback(10343)).with(PremiumGiftStyles.CUP, () => callback(10344)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9507)).with(PremiumGiftStyles.COFFEE, () => callback(9516)).with(PremiumGiftStyles.CHEST, () => callback(9513));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10342)).with(PremiumGiftStyles.BOX, () => callback(10343)).with(PremiumGiftStyles.CUP, () => callback(10344)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9507)).with(PremiumGiftStyles.COFFEE, () => callback(9516)).with(PremiumGiftStyles.CHEST, () => callback(9513)).with(PremiumGiftStyles.CAKE, () => callback(9510));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10342)).with(PremiumGiftStyles.BOX, () => callback(10343)).with(PremiumGiftStyles.CUP, () => callback(10344)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9507)).with(PremiumGiftStyles.COFFEE, () => callback(9516)).with(PremiumGiftStyles.CHEST, () => callback(9513)).with(PremiumGiftStyles.CAKE, () => callback(9510)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9519));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10342)).with(PremiumGiftStyles.BOX, () => callback(10343)).with(PremiumGiftStyles.CUP, () => callback(10344)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9507)).with(PremiumGiftStyles.COFFEE, () => callback(9516)).with(PremiumGiftStyles.CHEST, () => callback(9513)).with(PremiumGiftStyles.CAKE, () => callback(9510)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9519)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9522));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10342)).with(PremiumGiftStyles.BOX, () => callback(10343)).with(PremiumGiftStyles.CUP, () => callback(10344)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9507)).with(PremiumGiftStyles.COFFEE, () => callback(9516)).with(PremiumGiftStyles.CHEST, () => callback(9513)).with(PremiumGiftStyles.CAKE, () => callback(9510)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9519)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9522)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9525));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10342)).with(PremiumGiftStyles.BOX, () => callback(10343)).with(PremiumGiftStyles.CUP, () => callback(10344)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9507)).with(PremiumGiftStyles.COFFEE, () => callback(9516)).with(PremiumGiftStyles.CHEST, () => callback(9513)).with(PremiumGiftStyles.CAKE, () => callback(9510)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9519)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9522)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9525)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(9528));
    const obj = { source: null, autoPlay: null, style: null };
    obj[0] = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10342)).with(PremiumGiftStyles.BOX, () => callback(10343)).with(PremiumGiftStyles.CUP, () => callback(10344)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9507)).with(PremiumGiftStyles.COFFEE, () => callback(9516)).with(PremiumGiftStyles.CHEST, () => callback(9513)).with(PremiumGiftStyles.CAKE, () => callback(9510)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9519)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9522)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9525)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(9528)).otherwise(() => callback(9507));
    obj[1] = !tmp4;
    obj[2] = { width: 320, height: 212 };
    return jsx(play, { source: null, autoPlay: null, style: null });
  }
  tmp = require;
};