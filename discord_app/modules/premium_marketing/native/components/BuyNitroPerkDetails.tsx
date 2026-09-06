// === Module 13385: BuyNitroPerkDetails ===

// Module 13385 (BuyNitroPerkDetails)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4527 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import PromoSheet from "PromoSheet" /* 10230 */;
import useBuyNitroPlanSelection from "useBuyNitroPlanSelection" /* 13358 */;
import BuyNitroPlanPriceDetailsDefault from "BuyNitroPlanPriceDetails" /* 13386 */;
import BuyNitroPurchaseButtonDefault from "BuyNitroPurchaseButton" /* 13387 */;
import noop from "module_19" /* 19 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
const Image = fn(17).Image;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const BuyNitroPerkDetailsActionSheet = "BuyNitroPerkDetailsActionSheet";
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ illustration: { width: "100%", height: 180 } });
let closure_8 = noop.memo((perk) => {
  perk = perk.perk;
  ({ selectedTier, selectedProductId, analyticsLocations, applicationId, onPaymentSuccess, onPaymentDismiss } = perk);
  let obj = useBuyNitroPlanSelection;
  const buyNitroPlanSelection = obj.useBuyNitroPlanSelection({ tier: selectedTier, productId: selectedProductId });
  const detail = perk.detail;
  let tmp6Result = null;
  if (null != detail) {
    obj = { title: perk.label, description: null, illustration: null, actions: null };
    const intl = util.intl;
    obj.description = intl.string(detail.description);
    obj = { source: detail.image, style: tmp.illustration, resizeMode: "contain" };
    obj.illustration = React4(Image, obj);
    const obj1 = { spacing: nativeDefault.space.PX_12, children: null };
    tmp6Result = null != buyNitroPlanSelection.selection.item;
    if (tmp6Result) {
      const obj2 = { planSelection: buyNitroPlanSelection, item: buyNitroPlanSelection.selection.item, centered: true };
      tmp6Result = React4(BuyNitroPlanPriceDetailsDefault, obj2);
    }
    const items = [tmp6Result, ];
    const obj3 = {
      planSelection: buyNitroPlanSelection,
      location: AnalyticsLocationDefault.PREMIUM_MARKETING_PERK_CARD,
      sourceAnalyticsLocations: analyticsLocations,
      applicationId,
      onHostSheetClose() {
          return ActionSheetActionCreatorsDefault.hideActionSheet(BuyNitroPerkDetailsActionSheet);
        },
      onPaymentSuccess,
      onPaymentDismiss
    };
    items[1] = React4(BuyNitroPurchaseButtonDefault, obj3);
    obj1.children = items;
    obj.actions = hasOwnProperty(Stack_Stack.Stack, obj1);
    tmp6Result = React4(PromoSheet.PromoSheet, obj);
    const tmp9Result = BuyNitroPurchaseButtonDefault;
  }
  return tmp6Result;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroPerkDetails.tsx");

export const openBuyNitroPerkDetails = function openBuyNitroPerkDetails(perk, arg1) {
  let obj = { content: null, key: null };
  obj = { perk };
  const merged = Object.assign(arg1);
  obj.content = React4(closure_8, obj);
  obj.key = BuyNitroPerkDetailsActionSheet;
  obj.showActionSheet(obj);
};