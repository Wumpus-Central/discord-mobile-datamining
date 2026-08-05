// discord_app/modules/premium_marketing/native/components/BuyNitroPerkDetails.tsx
import { Image } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const BuyNitroPerkDetailsActionSheet = "BuyNitroPerkDetailsActionSheet";
let closure_7 = createCacheKey.createStyles({ illustration: { width: "100%", height: 180 } });
let closure_8 = require("noop").memo((perk) => {
  let analyticsLocations;
  let applicationId;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let selectedProductId;
  let selectedTier;
  perk = perk.perk;
  ({ selectedTier, selectedProductId, analyticsLocations, applicationId, onPaymentSuccess, onPaymentDismiss } = perk);
  let obj = require("../hooks/useBuyNitroPlanSelection.tsx") /* PremiumTypes */;
  const buyNitroPlanSelection = obj.useBuyNitroPlanSelection({ tier: selectedTier, productId: selectedProductId });
  const detail = perk.detail;
  let tmp6Result = null;
  if (null != detail) {
    obj = { title: null, description: null, illustration: null, actions: null };
    obj[0] = perk.label;
    const intl = tmp2(1236).intl;
    obj[1] = intl.string(detail.description);
    obj = { source: null, style: null, resizeMode: "contain" };
    obj[0] = detail.image;
    obj[1] = tmp.illustration;
    obj[2] = callback(Image, obj);
    const obj1 = { spacing: null, children: null };
    obj1[0] = require("../../../../../discord_common/js/packages/tokens/native.tsx").space.PX_12;
    tmp6Result = null != buyNitroPlanSelection.selection.item;
    if (tmp6Result) {
      const obj2 = { planSelection: null, item: null, centered: true };
      obj2[0] = buyNitroPlanSelection;
      obj2[1] = buyNitroPlanSelection.selection.item;
      tmp6Result = tmp6(tmp9(7657), obj2);
    }
    const items = [tmp6Result, ];
    const obj3 = { planSelection: null, location: null, sourceAnalyticsLocations: null, applicationId: null, onHostSheetClose: null, onPaymentSuccess: null, onPaymentDismiss: null };
    obj3[0] = buyNitroPlanSelection;
    obj3[1] = require("../../../app_analytics/AnalyticsLocation.tsx").PREMIUM_MARKETING_PERK_CARD;
    obj3[2] = analyticsLocations;
    obj3[3] = applicationId;
    obj3[4] = function onHostSheetClose() {
      return callback(table[12]).hideActionSheet(closure_6);
    };
    obj3[5] = onPaymentSuccess;
    obj3[6] = onPaymentDismiss;
    items[1] = callback(require("purchase_button/BuyNitroPurchaseButton.tsx"), obj3);
    obj1[1] = items;
    obj[3] = closure_5(tmp2(4693).Stack, obj1);
    tmp6Result = tmp6(tmp2(7654).PromoSheet, obj);
    const tmp8 = closure_5;
    const tmp9Result = require("purchase_button/BuyNitroPurchaseButton.tsx");
  }
  return tmp6Result;
});
const result = require("jsxProd").fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroPerkDetails.tsx");

export const openBuyNitroPerkDetails = function openBuyNitroPerkDetails(perk, arg1) {
  let obj = require("../../../action_sheet/native/ActionSheetActionCreators.tsx") /* ACTION_SHEET_HEIGHT_HALF */;
  obj = { content: null, key: null };
  obj = { perk };
  const merged = Object.assign(arg1);
  obj[0] = callback(closure_8, obj);
  obj[1] = BuyNitroPerkDetailsActionSheet;
  obj.showActionSheet(obj);
};