// discord_app/modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import LottieAnimationViewDefault from "../../../../components_native/common/LottieAnimationView.tsx";
import _mod6786 from "module_6786" /* 6786 */;
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

require = fn;
const PremiumGiftStyles = fn(1390).PremiumGiftStyles;
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
    const match = _mod6786.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () =>
      require("../../../../../_runtime/metro/12599__.js"),
    );
    const withResult1 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/12599__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/12600__.js"));
    const withResult2 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/12599__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/12600__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/12601__.js"));
    const withResult3 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/12599__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/12600__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/12601__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10240__.js"));
    const withResult4 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/12599__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/12600__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/12601__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10240__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10249__.js"));
    const withResult5 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/12599__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/12600__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/12601__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10240__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10249__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10246__.js"));
    const withResult6 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/12599__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/12600__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/12601__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10240__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10249__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10246__.js"))
      .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10243__.js"));
    const withResult7 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/12599__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/12600__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/12601__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10240__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10249__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10246__.js"))
      .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10243__.js"))
      .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/10252__.js"));
    const withResult8 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/12599__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/12600__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/12601__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10240__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10249__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10246__.js"))
      .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10243__.js"))
      .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/10252__.js"))
      .with(PremiumGiftStyles.SEASONAL_CAKE, () => require("../../../../../_runtime/metro/10255__.js"));
    const withResult9 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/12599__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/12600__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/12601__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10240__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10249__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10246__.js"))
      .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10243__.js"))
      .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/10252__.js"))
      .with(PremiumGiftStyles.SEASONAL_CAKE, () => require("../../../../../_runtime/metro/10255__.js"))
      .with(PremiumGiftStyles.SEASONAL_CHEST, () => require("../../../../../_runtime/metro/10258__.js"));
    const withResult10 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/12599__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/12600__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/12601__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10240__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10249__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10246__.js"))
      .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10243__.js"))
      .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/10252__.js"))
      .with(PremiumGiftStyles.SEASONAL_CAKE, () => require("../../../../../_runtime/metro/10255__.js"))
      .with(PremiumGiftStyles.SEASONAL_CHEST, () => require("../../../../../_runtime/metro/10258__.js"))
      .with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("../../../../../_runtime/metro/10261__.js"));
    const obj = {
      source: match
        .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/12599__.js"))
        .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/12600__.js"))
        .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/12601__.js"))
        .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10240__.js"))
        .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10249__.js"))
        .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10246__.js"))
        .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10243__.js"))
        .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/10252__.js"))
        .with(PremiumGiftStyles.SEASONAL_CAKE, () => require("../../../../../_runtime/metro/10255__.js"))
        .with(PremiumGiftStyles.SEASONAL_CHEST, () => require("../../../../../_runtime/metro/10258__.js"))
        .with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("../../../../../_runtime/metro/10261__.js"))
        .otherwise(() => require("../../../../../_runtime/metro/10240__.js")),
      autoPlay: !tmp4,
      style: { width: 320, height: 212 },
    };
    return jsx(LottieAnimationViewDefault, {
      source: match
        .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/12599__.js"))
        .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/12600__.js"))
        .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/12601__.js"))
        .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10240__.js"))
        .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10249__.js"))
        .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10246__.js"))
        .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10243__.js"))
        .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/10252__.js"))
        .with(PremiumGiftStyles.SEASONAL_CAKE, () => require("../../../../../_runtime/metro/10255__.js"))
        .with(PremiumGiftStyles.SEASONAL_CHEST, () => require("../../../../../_runtime/metro/10258__.js"))
        .with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("../../../../../_runtime/metro/10261__.js"))
        .otherwise(() => require("../../../../../_runtime/metro/10240__.js")),
      autoPlay: !tmp4,
      style: { width: 320, height: 212 },
    });
  }
}
