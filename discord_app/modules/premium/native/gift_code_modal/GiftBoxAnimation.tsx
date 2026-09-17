// discord_app/modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import _mod4825 from "module_4825" /* 4825 */;
import LottieAnimationViewDefault from "../../../../components_native/common/LottieAnimationView.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

require = fn;
const PremiumGiftStyles = fn(1374).PremiumGiftStyles;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx");

export default function GiftBoxAnimation(giftStyle) {
  giftStyle = giftStyle.giftStyle;
  initialize;
  [][0] = AccessibilityStore;
  if (null == giftStyle) {
    return null;
  } else {
    const match = _mod4825.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () =>
      require("../../../../../_runtime/metro/11603__.js"),
    );
    const withResult1 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11603__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11604__.js"));
    const withResult2 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11603__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11604__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11605__.js"));
    const withResult3 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11603__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11604__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11605__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10988__.js"));
    const withResult4 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11603__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11604__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11605__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10988__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10997__.js"));
    const withResult5 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11603__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11604__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11605__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10988__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10997__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10994__.js"));
    const withResult6 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11603__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11604__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11605__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10988__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10997__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10994__.js"))
      .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10991__.js"));
    const withResult7 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11603__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11604__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11605__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10988__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10997__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10994__.js"))
      .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10991__.js"))
      .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/11000__.js"));
    const withResult8 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11603__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11604__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11605__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10988__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10997__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10994__.js"))
      .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10991__.js"))
      .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/11000__.js"))
      .with(PremiumGiftStyles.SEASONAL_CAKE, () => require("../../../../../_runtime/metro/11003__.js"));
    const withResult9 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11603__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11604__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11605__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10988__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10997__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10994__.js"))
      .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10991__.js"))
      .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/11000__.js"))
      .with(PremiumGiftStyles.SEASONAL_CAKE, () => require("../../../../../_runtime/metro/11003__.js"))
      .with(PremiumGiftStyles.SEASONAL_CHEST, () => require("../../../../../_runtime/metro/11006__.js"));
    const withResult10 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11603__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11604__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11605__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10988__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10997__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10994__.js"))
      .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10991__.js"))
      .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/11000__.js"))
      .with(PremiumGiftStyles.SEASONAL_CAKE, () => require("../../../../../_runtime/metro/11003__.js"))
      .with(PremiumGiftStyles.SEASONAL_CHEST, () => require("../../../../../_runtime/metro/11006__.js"))
      .with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("../../../../../_runtime/metro/11009__.js"));
    const obj = {
      source: match
        .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11603__.js"))
        .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11604__.js"))
        .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11605__.js"))
        .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10988__.js"))
        .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10997__.js"))
        .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10994__.js"))
        .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10991__.js"))
        .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/11000__.js"))
        .with(PremiumGiftStyles.SEASONAL_CAKE, () => require("../../../../../_runtime/metro/11003__.js"))
        .with(PremiumGiftStyles.SEASONAL_CHEST, () => require("../../../../../_runtime/metro/11006__.js"))
        .with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("../../../../../_runtime/metro/11009__.js"))
        .otherwise(() => require("../../../../../_runtime/metro/10988__.js")),
      autoPlay: !tmp4,
      style: { width: 320, height: 212 },
    };
    return jsx(LottieAnimationViewDefault, {
      source: match
        .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11603__.js"))
        .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11604__.js"))
        .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11605__.js"))
        .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10988__.js"))
        .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10997__.js"))
        .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10994__.js"))
        .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10991__.js"))
        .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/11000__.js"))
        .with(PremiumGiftStyles.SEASONAL_CAKE, () => require("../../../../../_runtime/metro/11003__.js"))
        .with(PremiumGiftStyles.SEASONAL_CHEST, () => require("../../../../../_runtime/metro/11006__.js"))
        .with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("../../../../../_runtime/metro/11009__.js"))
        .otherwise(() => require("../../../../../_runtime/metro/10988__.js")),
      autoPlay: !tmp4,
      style: { width: 320, height: 212 },
    });
  }
}
