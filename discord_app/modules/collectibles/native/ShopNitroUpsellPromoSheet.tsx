// discord_app/modules/collectibles/native/ShopNitroUpsellPromoSheet.tsx
import util from "../../../intl/index.native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import ButtonGroup from "../../../design/components/ButtonGroup/native/ButtonGroup.native.tsx";
import native from "../../../design/assets/native.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import EntitlementFeatureNames from "../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx";
import PremiumUpsellUtils from "../../../utils/native/PremiumUpsellUtils.tsx";
import PremiumFeatureUpsellUtils from "../../premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx";
import usePremiumFeatureUpsellGetNitroDefault from "../../premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx";
import NitroUpsellButtonDefault from "../../premium/components/native/NitroUpsellButton.tsx";
import PromoSheet from "../../../design/components/Sheet/native/PromoSheet.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const AnalyticsPages = fn(1074).AnalyticsPages;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/ShopNitroUpsellPromoSheet.tsx");

export default function ShopNitroUpsellPromoSheet(analyticsLocations) {
  analyticsLocations = analyticsLocations.analyticsLocations;
  if (analyticsLocations === undefined) {
    analyticsLocations = [];
  }
  const obj = PremiumUpsellUtils;
  const onViewAllPerks = obj.usePremiumUpsellConfig(
    PremiumFeatureUpsellUtils.getUpsellType(EntitlementFeatureNames.EntitlementFeatureNames.SHOP_MEMBER_PRICING),
    useAnalyticsLocationsDefault(analyticsLocations).analyticsLocations,
  ).onViewAllPerks;
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(
    false,
    onViewAllPerks,
    AnalyticsPages.PREMIUM_UPSELL_SHOP_MEMBER_PRICING,
    undefined,
    analyticsLocations,
  ));
  const obj3 = {
    illustration: React4(native.DiscountsMegaphoneSpotIllustration, {}),
    title: null,
    description: null,
    actions: null,
  };
  const intl = util.intl;
  obj3.title = intl.string(util.t.GZWBoL);
  const intl2 = util.intl;
  obj3.description = intl2.string(util.t["2+/rrF"]);
  const obj4 = { children: null };
  const obj5 = { text: null, loading: null, onPress: null, shiny: false };
  const tmp = usePremiumFeatureUpsellGetNitroDefault(
    false,
    onViewAllPerks,
    AnalyticsPages.PREMIUM_UPSELL_SHOP_MEMBER_PRICING,
    undefined,
    analyticsLocations,
  );
  const intl3 = util.intl;
  obj5.text = intl3.string(util.t["8x0jKT"]);
  obj5.loading = loading;
  obj5.onPress = onPress;
  const items = [React4(NitroUpsellButtonDefault, obj5)];
  const obj6 = { size: "lg", variant: "secondary", text: null, onPress: null };
  const intl4 = util.intl;
  obj6.text = intl4.string(util.t.PcTCB7);
  obj6.onPress = onViewAllPerks;
  items[1] = React4(components_Button_Button.Button, obj6);
  obj4.children = items;
  obj3.actions = hasOwnProperty(ButtonGroup.ButtonGroup, obj4);
  return React4(PromoSheet.PromoSheet, obj3);
}
