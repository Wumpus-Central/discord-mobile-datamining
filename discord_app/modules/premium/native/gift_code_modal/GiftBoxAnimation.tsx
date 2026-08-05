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
    const match = tmp(4454).match(giftStyle);
    const str = tmp(4454);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10314));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10314)).with(PremiumGiftStyles.BOX, () => callback(10315));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10314)).with(PremiumGiftStyles.BOX, () => callback(10315)).with(PremiumGiftStyles.CUP, () => callback(10316));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10314)).with(PremiumGiftStyles.BOX, () => callback(10315)).with(PremiumGiftStyles.CUP, () => callback(10316)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9478));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10314)).with(PremiumGiftStyles.BOX, () => callback(10315)).with(PremiumGiftStyles.CUP, () => callback(10316)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9478)).with(PremiumGiftStyles.COFFEE, () => callback(9487));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10314)).with(PremiumGiftStyles.BOX, () => callback(10315)).with(PremiumGiftStyles.CUP, () => callback(10316)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9478)).with(PremiumGiftStyles.COFFEE, () => callback(9487)).with(PremiumGiftStyles.CHEST, () => callback(9484));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10314)).with(PremiumGiftStyles.BOX, () => callback(10315)).with(PremiumGiftStyles.CUP, () => callback(10316)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9478)).with(PremiumGiftStyles.COFFEE, () => callback(9487)).with(PremiumGiftStyles.CHEST, () => callback(9484)).with(PremiumGiftStyles.CAKE, () => callback(9481));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10314)).with(PremiumGiftStyles.BOX, () => callback(10315)).with(PremiumGiftStyles.CUP, () => callback(10316)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9478)).with(PremiumGiftStyles.COFFEE, () => callback(9487)).with(PremiumGiftStyles.CHEST, () => callback(9484)).with(PremiumGiftStyles.CAKE, () => callback(9481)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9490));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10314)).with(PremiumGiftStyles.BOX, () => callback(10315)).with(PremiumGiftStyles.CUP, () => callback(10316)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9478)).with(PremiumGiftStyles.COFFEE, () => callback(9487)).with(PremiumGiftStyles.CHEST, () => callback(9484)).with(PremiumGiftStyles.CAKE, () => callback(9481)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9490)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9493));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10314)).with(PremiumGiftStyles.BOX, () => callback(10315)).with(PremiumGiftStyles.CUP, () => callback(10316)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9478)).with(PremiumGiftStyles.COFFEE, () => callback(9487)).with(PremiumGiftStyles.CHEST, () => callback(9484)).with(PremiumGiftStyles.CAKE, () => callback(9481)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9490)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9493)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9496));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10314)).with(PremiumGiftStyles.BOX, () => callback(10315)).with(PremiumGiftStyles.CUP, () => callback(10316)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9478)).with(PremiumGiftStyles.COFFEE, () => callback(9487)).with(PremiumGiftStyles.CHEST, () => callback(9484)).with(PremiumGiftStyles.CAKE, () => callback(9481)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9490)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9493)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9496)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(9499));
    const obj = { source: null, autoPlay: null, style: null };
    obj[0] = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(10314)).with(PremiumGiftStyles.BOX, () => callback(10315)).with(PremiumGiftStyles.CUP, () => callback(10316)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(9478)).with(PremiumGiftStyles.COFFEE, () => callback(9487)).with(PremiumGiftStyles.CHEST, () => callback(9484)).with(PremiumGiftStyles.CAKE, () => callback(9481)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(9490)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(9493)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(9496)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(9499)).otherwise(() => callback(9478));
    obj[1] = !tmp4;
    obj[2] = { width: 320, height: 212 };
    return jsx(play, { source: null, autoPlay: null, style: null });
  }
  tmp = require;
};