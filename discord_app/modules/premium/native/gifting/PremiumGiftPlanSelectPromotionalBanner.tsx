// discord_app/modules/premium/native/gifting/PremiumGiftPlanSelectPromotionalBanner.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/04826_LinearGradient.js";
import create from "../../../../../discord_common/js/packages/protos/discord_protos/premium_marketing/v1/gift_plan_selection_card_banner.tsx";
import useThemeAndReducedMotionAwareAssetUrl from "../../promotions/MarketingComponentHooks.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles(() => {
  let obj = { gradient: { minHeight: 60 }, bannerImage: { position: "absolute", top: 0, left: 0, right: 0, width: "100%", aspectRatio: 5 }, content: null, heading: null, subheading: null, logoContainer: null, logoContainerLargeTilted: null, logo: null, logoLargeTilted: null };
  obj = { minHeight: 60, justifyContent: "center", gap: 2, paddingTop: ThemesDefault.space.PX_12, paddingBottom: ThemesDefault.space.PX_12, paddingStart: ThemesDefault.space.PX_24, paddingEnd: 120 };
  obj[2] = obj;
  obj[3] = {};
  obj[4] = {};
  obj[5] = { position: "absolute", top: 0, bottom: 0, right: 10, justifyContent: "center", alignItems: "center" };
  const items = [{ rotate: "-7deg" }, { translateY: 8 }];
  obj[6] = { transform: items };
  obj[7] = { width: 95, height: 95 };
  obj[8] = { width: 120, height: 120 };
  return obj;
});
const memoResult = importAllResult.memo(function PremiumGiftPlanSelectPromotionalBanner(giftPlanSelectionCardBannerComponent) {
  giftPlanSelectionCardBannerComponent = giftPlanSelectionCardBannerComponent.giftPlanSelectionCardBannerComponent;
  ({ claimableRewards, isSelected, onLayout } = giftPlanSelectionCardBannerComponent);
  const tmp = callback2();
  const gradient = giftPlanSelectionCardBannerComponent.gradient;
  let obj = useThemeAndReducedMotionAwareAssetUrl;
  const themeAndReducedMotionAwareAssetUrl = obj.useThemeAndReducedMotionAwareAssetUrl(giftPlanSelectionCardBannerComponent.mobileBannerAsset);
  obj1 = useThemeAndReducedMotionAwareAssetUrl;
  const themeAndReducedMotionAwareAssetUrl1 = obj1.useThemeAndReducedMotionAwareAssetUrl(giftPlanSelectionCardBannerComponent.avatarAsset, true);
  obj = { style: tmp.gradient, useAngle: true, angle: null, angleCenter: null, colors: null, onLayout: null, children: null };
  let num;
  if (gradient != null) {
    num = gradient.angle;
  }
  if (num == null) {
    num = 90;
  }
  obj[2] = num;
  obj[3] = { x: 0.5, y: 0.5 };
  let colors;
  if (gradient != null) {
    colors = gradient.colors;
  }
  if (colors == null) {
    colors = [];
  }
  obj[4] = colors;
  obj[5] = onLayout;
  let tmp9 = null != themeAndReducedMotionAwareAssetUrl;
  if (tmp9) {
    obj = { style: null, resizeMode: "cover", source: null };
    obj[0] = tmp.bannerImage;
    obj1 = { uri: null };
    obj1[0] = themeAndReducedMotionAwareAssetUrl;
    obj[2] = obj1;
    tmp9 = callback(tmp7(5374), obj);
  }
  const items = [tmp9, , ];
  const obj2 = { style: tmp.content, children: null };
  const obj3 = { style: tmp.heading, variant: "text-md/bold", color: "text-overlay-light", children: null };
  const intl = tmp2(1236).intl;
  obj3[3] = intl.string(getSystemLocale.t.OEtqpm);
  const items1 = [callback(Text.Text, obj3), ];
  const obj4 = { style: tmp.subheading, variant: "text-md/medium", color: "text-overlay-light", children: null };
  const intl2 = tmp2(1236).intl;
  obj4[3] = intl2.formatToPlainString(getSystemLocale.t["2h5M+X"], { availableCount: claimableRewards.length });
  items1[1] = callback(Text.Text, obj4);
  obj2[1] = items1;
  items[1] = closure_5(View, obj2);
  let tmp12Result = null != themeAndReducedMotionAwareAssetUrl1;
  if (tmp12Result) {
    let logoLargeTilted = giftPlanSelectionCardBannerComponent.assetVariant === create.GiftPlanSelectionCardBanner_AssetVariant.LARGE_TILTED;
    const items2 = [tmp.logoContainer, ];
    let logoContainerLargeTilted = logoLargeTilted;
    if (logoLargeTilted) {
      logoContainerLargeTilted = tmp.logoContainerLargeTilted;
    }
    const obj6 = { style: null, children: null };
    items2[1] = logoContainerLargeTilted;
    obj6[0] = items2;
    const obj7 = { shouldAnimate: null, promoRotatingStyle: null, rotatingAvatarImageUrl: null };
    obj7[0] = isSelected;
    const items3 = [tmp.logo, ];
    if (logoLargeTilted) {
      logoLargeTilted = tmp.logoLargeTilted;
    }
    items3[1] = logoLargeTilted;
    obj7[1] = items3;
    obj7[2] = themeAndReducedMotionAwareAssetUrl1;
    obj6[1] = tmp12(tmp7(10198), obj7);
    tmp12Result = tmp12(View, obj6);
    const tmp7Result = tmp7(10198);
  }
  items[2] = tmp12Result;
  obj[6] = items;
  return closure_5(LinearGradientDefault, obj);
});
const result = require("set").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftPlanSelectPromotionalBanner.tsx");

export default memoResult;