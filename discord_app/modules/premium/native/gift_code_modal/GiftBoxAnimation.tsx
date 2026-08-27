// discord_app/modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import t from "../../../../../_runtime/04658_t.js";
import playDefault from "../../../../components_native/common/LottieAnimationView.tsx";
import closure_3 from "../../../a11y/AccessibilityStore.tsx";
import { PremiumGiftStyles } from "../../PremiumConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

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
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12764));
    const withResult1 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12764)).with(PremiumGiftStyles.BOX, () => callback(12765));
    const withResult2 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12764)).with(PremiumGiftStyles.BOX, () => callback(12765)).with(PremiumGiftStyles.CUP, () => callback(12766));
    const withResult3 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12764)).with(PremiumGiftStyles.BOX, () => callback(12765)).with(PremiumGiftStyles.CUP, () => callback(12766)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10526));
    const withResult4 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12764)).with(PremiumGiftStyles.BOX, () => callback(12765)).with(PremiumGiftStyles.CUP, () => callback(12766)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10526)).with(PremiumGiftStyles.COFFEE, () => callback(10535));
    const withResult5 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12764)).with(PremiumGiftStyles.BOX, () => callback(12765)).with(PremiumGiftStyles.CUP, () => callback(12766)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10526)).with(PremiumGiftStyles.COFFEE, () => callback(10535)).with(PremiumGiftStyles.CHEST, () => callback(10532));
    const withResult6 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12764)).with(PremiumGiftStyles.BOX, () => callback(12765)).with(PremiumGiftStyles.CUP, () => callback(12766)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10526)).with(PremiumGiftStyles.COFFEE, () => callback(10535)).with(PremiumGiftStyles.CHEST, () => callback(10532)).with(PremiumGiftStyles.CAKE, () => callback(10529));
    const withResult7 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12764)).with(PremiumGiftStyles.BOX, () => callback(12765)).with(PremiumGiftStyles.CUP, () => callback(12766)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10526)).with(PremiumGiftStyles.COFFEE, () => callback(10535)).with(PremiumGiftStyles.CHEST, () => callback(10532)).with(PremiumGiftStyles.CAKE, () => callback(10529)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10538));
    const withResult8 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12764)).with(PremiumGiftStyles.BOX, () => callback(12765)).with(PremiumGiftStyles.CUP, () => callback(12766)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10526)).with(PremiumGiftStyles.COFFEE, () => callback(10535)).with(PremiumGiftStyles.CHEST, () => callback(10532)).with(PremiumGiftStyles.CAKE, () => callback(10529)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10538)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10541));
    const withResult9 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12764)).with(PremiumGiftStyles.BOX, () => callback(12765)).with(PremiumGiftStyles.CUP, () => callback(12766)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10526)).with(PremiumGiftStyles.COFFEE, () => callback(10535)).with(PremiumGiftStyles.CHEST, () => callback(10532)).with(PremiumGiftStyles.CAKE, () => callback(10529)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10538)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10541)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(10544));
    const withResult10 = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12764)).with(PremiumGiftStyles.BOX, () => callback(12765)).with(PremiumGiftStyles.CUP, () => callback(12766)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10526)).with(PremiumGiftStyles.COFFEE, () => callback(10535)).with(PremiumGiftStyles.CHEST, () => callback(10532)).with(PremiumGiftStyles.CAKE, () => callback(10529)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10538)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10541)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(10544)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(10547));
    const obj = { source: null, autoPlay: null, style: null };
    obj[0] = match.with(PremiumGiftStyles.SNOWGLOBE, () => callback(12764)).with(PremiumGiftStyles.BOX, () => callback(12765)).with(PremiumGiftStyles.CUP, () => callback(12766)).with(PremiumGiftStyles.STANDARD_BOX, () => callback(10526)).with(PremiumGiftStyles.COFFEE, () => callback(10535)).with(PremiumGiftStyles.CHEST, () => callback(10532)).with(PremiumGiftStyles.CAKE, () => callback(10529)).with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => callback(10538)).with(PremiumGiftStyles.SEASONAL_CAKE, () => callback(10541)).with(PremiumGiftStyles.SEASONAL_CHEST, () => callback(10544)).with(PremiumGiftStyles.SEASONAL_COFFEE, () => callback(10547)).otherwise(() => callback(10526));
    obj[1] = !tmp4;
    obj[2] = { width: 320, height: 212 };
    return jsx(playDefault, { source: null, autoPlay: null, style: null });
  }
  const tmp = require;
};