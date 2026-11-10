// discord_app/modules/premium/native/gift_code_modal/GiftBoxAnimation.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import LottieAnimationViewDefault from "../../../../components_native/common/LottieAnimationView.tsx";
import _mod6613 from "module_6613" /* 6613 */;
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

require = fn;
const PremiumGiftStyles = fn(1387).PremiumGiftStyles;
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
    const match = _mod6613.match(giftStyle);
    const withResult = match.with(PremiumGiftStyles.SNOWGLOBE, () =>
      require("../../../../../_runtime/metro/11663__.js"),
    );
    const withResult1 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11663__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11664__.js"));
    const withResult2 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11663__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11664__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11665__.js"));
    const withResult3 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11663__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11664__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11665__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10829__.js"));
    const withResult4 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11663__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11664__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11665__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10829__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10838__.js"));
    const withResult5 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11663__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11664__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11665__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10829__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10838__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10835__.js"));
    const withResult6 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11663__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11664__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11665__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10829__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10838__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10835__.js"))
      .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10832__.js"));
    const withResult7 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11663__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11664__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11665__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10829__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10838__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10835__.js"))
      .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10832__.js"))
      .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/10841__.js"));
    const withResult8 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11663__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11664__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11665__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10829__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10838__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10835__.js"))
      .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10832__.js"))
      .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/10841__.js"))
      .with(PremiumGiftStyles.SEASONAL_CAKE, () => require("../../../../../_runtime/metro/10844__.js"));
    const withResult9 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11663__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11664__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11665__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10829__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10838__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10835__.js"))
      .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10832__.js"))
      .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/10841__.js"))
      .with(PremiumGiftStyles.SEASONAL_CAKE, () => require("../../../../../_runtime/metro/10844__.js"))
      .with(PremiumGiftStyles.SEASONAL_CHEST, () => require("../../../../../_runtime/metro/10847__.js"));
    const withResult10 = match
      .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11663__.js"))
      .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11664__.js"))
      .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11665__.js"))
      .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10829__.js"))
      .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10838__.js"))
      .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10835__.js"))
      .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10832__.js"))
      .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/10841__.js"))
      .with(PremiumGiftStyles.SEASONAL_CAKE, () => require("../../../../../_runtime/metro/10844__.js"))
      .with(PremiumGiftStyles.SEASONAL_CHEST, () => require("../../../../../_runtime/metro/10847__.js"))
      .with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("../../../../../_runtime/metro/10850__.js"));
    const obj = {
      source: match
        .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11663__.js"))
        .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11664__.js"))
        .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11665__.js"))
        .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10829__.js"))
        .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10838__.js"))
        .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10835__.js"))
        .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10832__.js"))
        .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/10841__.js"))
        .with(PremiumGiftStyles.SEASONAL_CAKE, () => require("../../../../../_runtime/metro/10844__.js"))
        .with(PremiumGiftStyles.SEASONAL_CHEST, () => require("../../../../../_runtime/metro/10847__.js"))
        .with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("../../../../../_runtime/metro/10850__.js"))
        .otherwise(() => require("../../../../../_runtime/metro/10829__.js")),
      autoPlay: !tmp4,
      style: { width: 320, height: 212 },
    };
    return jsx(LottieAnimationViewDefault, {
      source: match
        .with(PremiumGiftStyles.SNOWGLOBE, () => require("../../../../../_runtime/metro/11663__.js"))
        .with(PremiumGiftStyles.BOX, () => require("../../../../../_runtime/metro/11664__.js"))
        .with(PremiumGiftStyles.CUP, () => require("../../../../../_runtime/metro/11665__.js"))
        .with(PremiumGiftStyles.STANDARD_BOX, () => require("../../../../../_runtime/metro/10829__.js"))
        .with(PremiumGiftStyles.COFFEE, () => require("../../../../../_runtime/metro/10838__.js"))
        .with(PremiumGiftStyles.CHEST, () => require("../../../../../_runtime/metro/10835__.js"))
        .with(PremiumGiftStyles.CAKE, () => require("../../../../../_runtime/metro/10832__.js"))
        .with(PremiumGiftStyles.SEASONAL_STANDARD_BOX, () => require("../../../../../_runtime/metro/10841__.js"))
        .with(PremiumGiftStyles.SEASONAL_CAKE, () => require("../../../../../_runtime/metro/10844__.js"))
        .with(PremiumGiftStyles.SEASONAL_CHEST, () => require("../../../../../_runtime/metro/10847__.js"))
        .with(PremiumGiftStyles.SEASONAL_COFFEE, () => require("../../../../../_runtime/metro/10850__.js"))
        .otherwise(() => require("../../../../../_runtime/metro/10829__.js")),
      autoPlay: !tmp4,
      style: { width: 320, height: 212 },
    });
  }
}
