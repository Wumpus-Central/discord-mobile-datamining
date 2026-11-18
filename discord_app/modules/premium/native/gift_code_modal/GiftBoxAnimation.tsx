// discord_app/modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import LottieAnimationViewDefault from "../../../../components_native/common/LottieAnimationView.tsx";
import _mod6289 from "module_6289" /* 6289 */;
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
    const match = _mod6289.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () =>
      require("../../../../../_runtime/metro/11884__.js"),
    );
    const withResult1 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11884__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11885__.js"));
    const withResult2 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11884__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11885__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11886__.js"));
    const withResult3 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11884__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11885__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11886__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/09521__.js"));
    const withResult4 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11884__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11885__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11886__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/09521__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/09530__.js"));
    const withResult5 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11884__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11885__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11886__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/09521__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/09530__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/09527__.js"));
    const withResult6 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11884__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11885__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11886__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/09521__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/09530__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/09527__.js"))
      .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/09524__.js"));
    const withResult7 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11884__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11885__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11886__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/09521__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/09530__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/09527__.js"))
      .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/09524__.js"))
      .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/09533__.js"));
    const withResult8 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11884__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11885__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11886__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/09521__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/09530__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/09527__.js"))
      .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/09524__.js"))
      .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/09533__.js"))
      .with(PremiumGiftStyles.SEASONAL_CAKE, () => require("../../../../../_runtime/metro/09536__.js"));
    const withResult9 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11884__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11885__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11886__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/09521__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/09530__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/09527__.js"))
      .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/09524__.js"))
      .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/09533__.js"))
      .with(PremiumGiftStyles.SEASONAL_CAKE, () => require("../../../../../_runtime/metro/09536__.js"))
      .with(PremiumGiftStyles.SEASONAL_CHEST, () => require("../../../../../_runtime/metro/09539__.js"));
    const withResult10 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11884__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11885__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11886__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/09521__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/09530__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/09527__.js"))
      .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/09524__.js"))
      .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/09533__.js"))
      .with(PremiumGiftStyles.SEASONAL_CAKE, () => require("../../../../../_runtime/metro/09536__.js"))
      .with(PremiumGiftStyles.SEASONAL_CHEST, () => require("../../../../../_runtime/metro/09539__.js"))
      .with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("../../../../../_runtime/metro/09542__.js"));
    const obj = {
      source: match
        .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11884__.js"))
        .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11885__.js"))
        .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11886__.js"))
        .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/09521__.js"))
        .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/09530__.js"))
        .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/09527__.js"))
        .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/09524__.js"))
        .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/09533__.js"))
        .with(PremiumGiftStyles.SEASONAL_CAKE, () => require("../../../../../_runtime/metro/09536__.js"))
        .with(PremiumGiftStyles.SEASONAL_CHEST, () => require("../../../../../_runtime/metro/09539__.js"))
        .with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("../../../../../_runtime/metro/09542__.js"))
        .otherwise(() => require("../../../../../_runtime/metro/09521__.js")),
      autoPlay: !tmp4,
      style: { width: 320, height: 212 },
    };
    return jsx(LottieAnimationViewDefault, {
      source: match
        .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11884__.js"))
        .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11885__.js"))
        .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11886__.js"))
        .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/09521__.js"))
        .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/09530__.js"))
        .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/09527__.js"))
        .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/09524__.js"))
        .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/09533__.js"))
        .with(PremiumGiftStyles.SEASONAL_CAKE, () => require("../../../../../_runtime/metro/09536__.js"))
        .with(PremiumGiftStyles.SEASONAL_CHEST, () => require("../../../../../_runtime/metro/09539__.js"))
        .with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("../../../../../_runtime/metro/09542__.js"))
        .otherwise(() => require("../../../../../_runtime/metro/09521__.js")),
      autoPlay: !tmp4,
      style: { width: 320, height: 212 },
    });
  }
}
