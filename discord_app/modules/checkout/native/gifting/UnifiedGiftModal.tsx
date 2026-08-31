// === Module 10560: UnifiedGiftModal ===

// Module 10560 (UnifiedGiftModal)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModal.tsx");

export default function UnifiedGiftModal(analyticsLocations) {
  ({ skuId, lockedRecipientUser, onGiftModalDismiss, validateRecipient, renderProductDetails, renderPurchaseSection } = analyticsLocations);
  let first;
  closure_7 = undefined;
  let callback;
  const tmp = validateRecipient(renderProductDetails.useState(lockedRecipientUser), 2);
  first = tmp[0];
  closure_7 = tmp[1];
  const items = [onGiftModalDismiss];
  callback = renderProductDetails.useCallback(() => {
    let arr = lockedRecipientUser(onGiftModalDismiss[3]);
    arr = arr.pop();
    if (onGiftModalDismiss != null) {
      onGiftModalDismiss();
    }
  }, items);
  let obj = skuId(onGiftModalDismiss[4]);
  const items1 = [lockedRecipientUser, first, skuId, callback, validateRecipient, renderProductDetails, renderPurchaseSection];
  const navigatorScreens = obj.useNavigatorScreens(() => {
    let obj = {};
    obj = { title: null, headerLeft: null, render: null };
    const intl = skuId(onGiftModalDismiss[6]).intl;
    obj[0] = intl.string(skuId(onGiftModalDismiss[6]).t["JCFN/y"]);
    obj[1] = skuId(onGiftModalDismiss[7]).getHeaderCloseButton(callback);
    obj[2] = function render() {
      return closure_1_5(closure_1_1(closure_1_2[8]), { skuId: closure_0, recipientUser: closure_6, setRecipientUser: closure_7, lockedRecipient: null != closure_1, validateRecipient: closure_3, renderProductDetails: closure_4, renderPurchaseSection: closure_5 });
    };
    obj[skuId(onGiftModalDismiss[5]).UnifiedGiftModalScreens.GIFT_DETAIL] = obj;
    obj = { title: null, headerLeft: null, render: null };
    const intl2 = skuId(onGiftModalDismiss[6]).intl;
    obj[0] = intl2.string(skuId(onGiftModalDismiss[6]).t.R0vK0N);
    const obj3 = skuId(onGiftModalDismiss[7]);
    obj[1] = skuId(onGiftModalDismiss[7]).getHeaderBackButton();
    obj[2] = function render() {
      return closure_1_5(closure_1_1(closure_1_2[9]), { setRecipientUser: closure_7 });
    };
    obj[skuId(onGiftModalDismiss[5]).UnifiedGiftModalScreens.RECIPENT_SELECT] = obj;
    return obj;
  }, items1);
  obj = { value: analyticsLocations.analyticsLocations, children: null };
  obj = { initialRouteName: skuId(onGiftModalDismiss[5]).UnifiedGiftModalScreens.GIFT_DETAIL, screens: navigatorScreens };
  obj[1] = renderPurchaseSection(skuId(onGiftModalDismiss[4]).Navigator, obj);
  return renderPurchaseSection(skuId(onGiftModalDismiss[10]).AnalyticsLocationProvider, obj);
};