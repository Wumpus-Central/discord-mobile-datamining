// === Module 13000: ShopNitroUpsellPromoSheet ===

// Module 13000 (ShopNitroUpsellPromoSheet)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import ButtonGroup from "ButtonGroup" /* 5599 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6664 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7494 */;
import PremiumUpsellUtils from "PremiumUpsellUtils" /* 8848 */;
import PremiumFeatureUpsellUtils from "PremiumFeatureUpsellUtils" /* 9657 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 9658 */;
import NitroUpsellButtonDefault from "NitroUpsellButton" /* 9661 */;
import PromoSheet from "PromoSheet" /* 10058 */;
import DiscountsMegaphoneSpotIllustration from "DiscountsMegaphoneSpotIllustration" /* 13001 */;
import noop from "module_19" /* 19 */;

require = fn;
const AnalyticsPages = fn(1085).AnalyticsPages;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/ShopNitroUpsellPromoSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(18);
  ({ analyticsLocations, title, description } = arg0);
  if (cResult[0] !== analyticsLocations) {
    let items = analyticsLocations;
    if (undefined === analyticsLocations) {
      items = [];
    }
    cResult[0] = analyticsLocations;
    cResult[1] = items;
    let tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const upsellType = PremiumFeatureUpsellUtils.getUpsellType(EntitlementFeatureNames.EntitlementFeatureNames.SHOP_MEMBER_PRICING);
    cResult[2] = upsellType;
    let tmp7 = upsellType;
    const tmpResult = PremiumFeatureUpsellUtils;
  } else {
    tmp7 = cResult[2];
  }
  const tmp6 = tmp4;
  const onViewAllPerks = PremiumUpsellUtils.usePremiumUpsellConfig(tmp7, useAnalyticsLocationsDefault(tmp4).analyticsLocations).onViewAllPerks;
  const tmpResult2 = PremiumUpsellUtils;
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(false, onViewAllPerks, AnalyticsPages.PREMIUM_UPSELL_SHOP_MEMBER_PRICING, undefined, tmp6));
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp12 = React4(DiscountsMegaphoneSpotIllustration.DiscountsMegaphoneSpotIllustration, {});
    cResult[3] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["8x0jKT"]);
    cResult[4] = stringResult;
    let tmp13 = stringResult;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] === loading) {
    if (cResult[6] === onPress) {
      let tmp15 = cResult[7];
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = util.intl;
      const stringResult1 = intl2.string(util.t.PcTCB7);
      cResult[8] = stringResult1;
      let tmp17 = stringResult1;
    } else {
      tmp17 = cResult[8];
    }
    if (cResult[9] !== onViewAllPerks) {
      const obj2 = { size: "lg", variant: "secondary", text: tmp17, onPress: onViewAllPerks };
      const tmp21 = React4(components_Button_Button.Button, obj2);
      cResult[9] = onViewAllPerks;
      cResult[10] = tmp21;
      let tmp19 = tmp21;
    } else {
      tmp19 = cResult[10];
    }
    if (cResult[11] === tmp15) {
      if (cResult[12] === tmp19) {
        let tmp22 = cResult[13];
      }
      if (cResult[14] === description) {
        if (cResult[15] === tmp22) {
          if (cResult[16] === title) {
            let tmp25 = cResult[17];
          }
          return tmp25;
        }
      }
      const obj3 = { illustration: tmp10, title, description, actions: tmp22 };
      const tmp27 = React4(PromoSheet.PromoSheet, obj3);
      cResult[14] = description;
      cResult[15] = tmp22;
      cResult[16] = title;
      cResult[17] = tmp27;
      tmp25 = tmp27;
    }
    const obj4 = { children: null };
    const items1 = [tmp15, tmp19];
    obj4.children = items1;
    const tmp24 = hasOwnProperty(ButtonGroup.ButtonGroup, obj4);
    cResult[11] = tmp15;
    cResult[12] = tmp19;
    cResult[13] = tmp24;
    tmp22 = tmp24;
  }
  const tmp16 = React4(NitroUpsellButtonDefault, { text: tmp13, loading, onPress, shiny: false });
  cResult[5] = loading;
  cResult[6] = onPress;
  cResult[7] = tmp16;
  tmp15 = tmp16;
  const tmp9 = usePremiumFeatureUpsellGetNitroDefault(false, onViewAllPerks, AnalyticsPages.PREMIUM_UPSELL_SHOP_MEMBER_PRICING, undefined, tmp6);
}) : ((analyticsLocations) => {
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
});