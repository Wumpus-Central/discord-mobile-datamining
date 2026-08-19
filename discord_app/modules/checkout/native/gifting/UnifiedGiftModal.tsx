// === Module 9594: UnifiedGiftModal ===

// Module 9594 (UnifiedGiftModal)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModal.tsx");

export default function UnifiedGiftModal(analyticsLocations) {
  ({ skuId, applicationId, lockedRecipientUser, onGiftModalDismiss, validateRecipient, renderProductDetails, renderPurchaseSection } = analyticsLocations);
  const tmp = onGiftModalDismiss(validateRecipient.useState(lockedRecipientUser), 2);
  const first = tmp[0];
  closure_8 = tmp[1];
  const items = [onGiftModalDismiss];
  const callback = validateRecipient.useCallback(() => {
    let arr = applicationId(lockedRecipientUser[3]);
    arr = arr.pop();
    if (onGiftModalDismiss != null) {
      onGiftModalDismiss();
    }
  }, items);
  let obj = skuId(lockedRecipientUser[4]);
  const items1 = [lockedRecipientUser, first, skuId, applicationId, callback, validateRecipient, renderProductDetails, renderPurchaseSection];
  const navigatorScreens = obj.useNavigatorScreens(() => {
    let obj = { title: null, headerLeft: null, render: null };
    const intl = skuId(lockedRecipientUser[6]).intl;
    obj[0] = intl.string(skuId(lockedRecipientUser[6]).t["JCFN/y"]);
    obj[1] = skuId(lockedRecipientUser[7]).getHeaderCloseButton(callback);
    obj[2] = function render() {
      return renderProductDetails(applicationId(lockedRecipientUser[8]), { skuId: closure_0, applicationId: closure_1, recipientUser: closure_7, setRecipientUser: closure_8, lockedRecipient: null != closure_2, validateRecipient: closure_4, renderProductDetails: closure_5, renderPurchaseSection: closure_6 });
    };
    obj[skuId(lockedRecipientUser[5]).UnifiedGiftModalScreens.GIFT_DETAIL] = obj;
    obj = { title: null, headerLeft: null, render: null };
    const intl2 = skuId(lockedRecipientUser[6]).intl;
    obj[0] = intl2.string(skuId(lockedRecipientUser[6]).t.R0vK0N);
    const obj3 = skuId(lockedRecipientUser[7]);
    obj[1] = skuId(lockedRecipientUser[7]).getHeaderBackButton();
    obj[2] = function render() {
      return renderProductDetails(applicationId(lockedRecipientUser[9]), { setRecipientUser: closure_8 });
    };
    obj[skuId(lockedRecipientUser[5]).UnifiedGiftModalScreens.RECIPENT_SELECT] = obj;
    return obj;
  }, items1);
  obj = { initialRouteName: skuId(lockedRecipientUser[5]).UnifiedGiftModalScreens.GIFT_DETAIL, screens: navigatorScreens };
  obj[1] = renderProductDetails(skuId(lockedRecipientUser[4]).Navigator, obj);
  return renderProductDetails(skuId(lockedRecipientUser[10]).AnalyticsLocationProvider, obj);
};