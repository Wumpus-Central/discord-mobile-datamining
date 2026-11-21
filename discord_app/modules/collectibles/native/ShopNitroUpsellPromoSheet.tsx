// === Module 14227: ShopNitroUpsellPromoSheet ===

// Module 14227 (ShopNitroUpsellPromoSheet)
import util from "util" /* 1112 */;
import components_Button_Button from "components/Button/Button" /* 5511 */;
import ButtonGroup from "ButtonGroup" /* 6545 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7520 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8547 */;
import PremiumUpsellUtils from "PremiumUpsellUtils" /* 10459 */;
import PremiumFeatureUpsellUtils from "PremiumFeatureUpsellUtils" /* 10949 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 10950 */;
import NitroUpsellButtonDefault from "NitroUpsellButton" /* 10952 */;
import PromoSheet from "PromoSheet" /* 11225 */;
import DiscountsMegaphoneSpotIllustration from "DiscountsMegaphoneSpotIllustration" /* 14228 */;
import noop from "module_19" /* 19 */;

require = fn;
const AnalyticsPages = fn(1071).AnalyticsPages;
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
  items = [React4(NitroUpsellButtonDefault, obj5), ];
  const obj6 = { size: "lg", variant: "secondary", text: null, onPress: null };
  const intl2 = util.intl;
  obj6.text = intl2.string(util.t.PcTCB7);
  obj6.onPress = onViewAllPerks;
  items[1] = React4(components_Button_Button.Button, obj6);
  obj4.children = items;
  obj3.actions = hasOwnProperty(ButtonGroup.ButtonGroup, obj4);
  return React4(PromoSheet.PromoSheet, obj3);
};