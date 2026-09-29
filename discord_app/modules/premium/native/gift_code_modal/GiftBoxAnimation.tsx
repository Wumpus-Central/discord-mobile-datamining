// discord_app/modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import _mod5021 from "module_5021" /* 5021 */;
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
    const match = _mod5021.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () =>
      require("../../../../../_runtime/metro/11162__.js"),
    );
    const withResult1 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11162__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11163__.js"));
    const withResult2 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11162__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11163__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11164__.js"));
    const withResult3 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11162__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11163__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11164__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10463__.js"));
    const withResult4 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11162__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11163__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11164__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10463__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10472__.js"));
    const withResult5 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11162__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11163__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11164__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10463__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10472__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10469__.js"));
    const withResult6 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11162__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11163__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11164__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10463__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10472__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10469__.js"))
      .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10466__.js"));
    const withResult7 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11162__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11163__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11164__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10463__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10472__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10469__.js"))
      .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10466__.js"))
      .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/10475__.js"));
    const withResult8 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11162__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11163__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11164__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10463__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10472__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10469__.js"))
      .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10466__.js"))
      .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/10475__.js"))
      .with(PremiumGiftStyles.SEASONAL_CAKE, () => require("../../../../../_runtime/metro/10478__.js"));
    const withResult9 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11162__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11163__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11164__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10463__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10472__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10469__.js"))
      .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10466__.js"))
      .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/10475__.js"))
      .with(PremiumGiftStyles.SEASONAL_CAKE, () => require("../../../../../_runtime/metro/10478__.js"))
      .with(PremiumGiftStyles.SEASONAL_CHEST, () => require("../../../../../_runtime/metro/10481__.js"));
    const withResult10 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11162__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11163__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11164__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10463__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10472__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10469__.js"))
      .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10466__.js"))
      .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/10475__.js"))
      .with(PremiumGiftStyles.SEASONAL_CAKE, () => require("../../../../../_runtime/metro/10478__.js"))
      .with(PremiumGiftStyles.SEASONAL_CHEST, () => require("../../../../../_runtime/metro/10481__.js"))
      .with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("../../../../../_runtime/metro/10484__.js"));
    const obj = {
      source: match
        .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11162__.js"))
        .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11163__.js"))
        .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11164__.js"))
        .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10463__.js"))
        .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10472__.js"))
        .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10469__.js"))
        .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10466__.js"))
        .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/10475__.js"))
        .with(PremiumGiftStyles.SEASONAL_CAKE, () => require("../../../../../_runtime/metro/10478__.js"))
        .with(PremiumGiftStyles.SEASONAL_CHEST, () => require("../../../../../_runtime/metro/10481__.js"))
        .with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("../../../../../_runtime/metro/10484__.js"))
        .otherwise(() => require("../../../../../_runtime/metro/10463__.js")),
      autoPlay: !tmp4,
      style: { width: 320, height: 212 },
    };
    return jsx(LottieAnimationViewDefault, {
      source: match
        .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11162__.js"))
        .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11163__.js"))
        .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11164__.js"))
        .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10463__.js"))
        .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10472__.js"))
        .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10469__.js"))
        .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10466__.js"))
        .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/10475__.js"))
        .with(PremiumGiftStyles.SEASONAL_CAKE, () => require("../../../../../_runtime/metro/10478__.js"))
        .with(PremiumGiftStyles.SEASONAL_CHEST, () => require("../../../../../_runtime/metro/10481__.js"))
        .with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("../../../../../_runtime/metro/10484__.js"))
        .otherwise(() => require("../../../../../_runtime/metro/10463__.js")),
      autoPlay: !tmp4,
      style: { width: 320, height: 212 },
    });
  }
}
