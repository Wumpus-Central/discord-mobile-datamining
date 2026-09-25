// === Module 12703: ShopNitroUpsellPromoSheet ===

// Module 12703 (ShopNitroUpsellPromoSheet)
import util from "util" /* 1115 */;
import components_Button_Button from "components/Button/Button" /* 5274 */;
import ButtonGroup from "ButtonGroup" /* 5740 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6578 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7268 */;
import PremiumUpsellUtils from "PremiumUpsellUtils" /* 8606 */;
import PremiumFeatureUpsellUtils from "PremiumFeatureUpsellUtils" /* 9410 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 9411 */;
import NitroUpsellButtonDefault from "NitroUpsellButton" /* 9414 */;
import PromoSheet from "PromoSheet" /* 9680 */;
import DiscountsMegaphoneSpotIllustration from "DiscountsMegaphoneSpotIllustration" /* 12704 */;
import noop from "module_19" /* 19 */;

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
  ({ title, description } = analyticsLocations);
  const obj = PremiumUpsellUtils;
  const onViewAllPerks = obj.usePremiumUpsellConfig(PremiumFeatureUpsellUtils.getUpsellType(EntitlementFeatureNames.EntitlementFeatureNames.SHOP_MEMBER_PRICING), useAnalyticsLocationsDefault(analyticsLocations).analyticsLocations).onViewAllPerks;
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(false, onViewAllPerks, AnalyticsPages.PREMIUM_UPSELL_SHOP_MEMBER_PRICING, undefined, analyticsLocations));
  const obj3 = { illustration: React4(DiscountsMegaphoneSpotIllustration.DiscountsMegaphoneSpotIllustration, {}), title, description, actions: null };
  const obj4 = { children: null };
  const obj5 = { text: null, loading: null, onPress: null, shiny: false };
  const tmp = usePremiumFeatureUpsellGetNitroDefault(false, onViewAllPerks, AnalyticsPages.PREMIUM_UPSELL_SHOP_MEMBER_PRICING, undefined, analyticsLocations);
  const intl = util.intl;
  obj5.text = intl.string(util.t["8x0jKT"]);
  obj5.loading = loading;
  obj5.onPress = onPress;
  const items = [React4(NitroUpsellButtonDefault, obj5), ];
  const obj6 = { size: "lg", variant: "secondary", text: null, onPress: null };
  const intl2 = util.intl;
  obj6.text = intl2.string(util.t.PcTCB7);
  obj6.onPress = onViewAllPerks;
  items[1] = React4(components_Button_Button.Button, obj6);
  obj4.children = items;
  obj3.actions = hasOwnProperty(ButtonGroup.ButtonGroup, obj4);
  return React4(PromoSheet.PromoSheet, obj3);
};