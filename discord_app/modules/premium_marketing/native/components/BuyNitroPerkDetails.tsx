// === Module 13385: openBuyNitroPerkDetails ===

// Module 13385 (openBuyNitroPerkDetails)
import ThemesDefault from "Themes" /* 576 */;
import ACTION_SHEET_HEIGHT_HALF from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 7182 */;
import PremiumTypes from "PremiumTypes" /* 13358 */;
import BuyNitroPurchaseButtonDefault from "BuyNitroPurchaseButton" /* 13387 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
const BuyNitroPerkDetailsActionSheet = "BuyNitroPerkDetailsActionSheet";
let closure_7 = createCacheKey.createStyles({ illustration: { width: "100%", height: 180 } });
let closure_8 = importAllResult.memo((perk) => {
  perk = perk.perk;
  ({ selectedTier, selectedProductId, analyticsLocations, applicationId, onPaymentSuccess, onPaymentDismiss } = perk);
  let obj = PremiumTypes;
  const buyNitroPlanSelection = obj.useBuyNitroPlanSelection({ tier: selectedTier, productId: selectedProductId });
  const detail = perk.detail;
  let tmp6Result = null;
  if (null != detail) {
    obj = { title: null, description: null, illustration: null, actions: null };
    obj[0] = perk.label;
    const intl = tmp2(1114).intl;
    obj[1] = intl.string(detail.description);
    obj = { source: null, style: null, resizeMode: "contain" };
    obj[0] = detail.image;
    obj[1] = tmp.illustration;
    obj[2] = callback(Image, obj);
    obj1 = { spacing: null, children: null };
    obj1[0] = ThemesDefault.space.PX_12;
    tmp6Result = null != buyNitroPlanSelection.selection.item;
    if (tmp6Result) {
      const obj2 = { planSelection: null, item: null, centered: true };
      obj2[0] = buyNitroPlanSelection;
      obj2[1] = buyNitroPlanSelection.selection.item;
      tmp6Result = tmp6(tmp9(13386), obj2);
    }
    const items = [tmp6Result, ];
    const obj3 = { planSelection: null, location: null, sourceAnalyticsLocations: null, applicationId: null, onHostSheetClose: null, onPaymentSuccess: null, onPaymentDismiss: null };
    obj3[0] = buyNitroPlanSelection;
    obj3[1] = QUICK_SWITCHERDefault.PREMIUM_MARKETING_PERK_CARD;
    obj3[2] = analyticsLocations;
    obj3[3] = applicationId;
    obj3[4] = function onHostSheetClose() {
      return callback(table[12]).hideActionSheet(closure_6);
    };
    obj3[5] = onPaymentSuccess;
    obj3[6] = onPaymentDismiss;
    items[1] = callback(BuyNitroPurchaseButtonDefault, obj3);
    obj1[1] = items;
    obj[3] = closure_5(tmp2(4973).Stack, obj1);
    tmp6Result = tmp6(tmp2(10230).PromoSheet, obj);
    const tmp8 = closure_5;
    const tmp9Result = BuyNitroPurchaseButtonDefault;
  }
  return tmp6Result;
});
const result = require("set").fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroPerkDetails.tsx");

export const openBuyNitroPerkDetails = function openBuyNitroPerkDetails(perk, arg1) {
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = { content: null, key: null };
  obj = { perk };
  const merged = Object.assign(arg1);
  obj[0] = callback(closure_8, obj);
  obj[1] = BuyNitroPerkDetailsActionSheet;
  obj.showActionSheet(obj);
};