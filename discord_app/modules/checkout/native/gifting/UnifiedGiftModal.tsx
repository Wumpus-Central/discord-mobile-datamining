// discord_app/modules/checkout/native/gifting/UnifiedGiftModal.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModal.tsx");

export default function UnifiedGiftModal(analyticsLocations) {
  let applicationId;
  let lockedRecipientUser;
  let onGiftModalDismiss;
  let renderProductDetails;
  let renderPurchaseSection;
  let skuId;
  let validateRecipient;
  ({ skuId, applicationId, lockedRecipientUser, onGiftModalDismiss, validateRecipient, renderProductDetails, renderPurchaseSection } = analyticsLocations);
  let first;
  let closure_8;
  let callback;
  const tmp = onGiftModalDismiss(validateRecipient.useState(lockedRecipientUser), 2);
  first = tmp[0];
  closure_8 = tmp[1];
  const items = [onGiftModalDismiss];
  callback = validateRecipient.useCallback(() => {
    let arr = applicationId(lockedRecipientUser[3]);
    arr = arr.pop();
    if (onGiftModalDismiss != null) {
      onGiftModalDismiss();
    }
  }, items);
  let obj = skuId(lockedRecipientUser[4]);
  const items1 = [lockedRecipientUser, first, skuId, applicationId, callback, validateRecipient, renderProductDetails, renderPurchaseSection];
  const navigatorScreens = obj.useNavigatorScreens(() => {
    let obj = {};
    obj = { title: null, headerLeft: null, render: null };
    const intl = skuId(lockedRecipientUser[6]).intl;
    obj[0] = intl.string(skuId(lockedRecipientUser[6]).t["JCFN/y"]);
    obj[1] = skuId(lockedRecipientUser[7]).getHeaderCloseButton(callback);
    obj[2] = function render() {
      return outer1_5(outer1_1(outer1_2[8]), { skuId: closure_0, applicationId: closure_1, recipientUser: closure_7, setRecipientUser: closure_8, lockedRecipient: null != closure_2, validateRecipient: noop, renderProductDetails: closure_5, renderPurchaseSection: closure_6 });
    };
    obj[skuId(lockedRecipientUser[5]).UnifiedGiftModalScreens.GIFT_DETAIL] = obj;
    obj = { title: null, headerLeft: null, render: null };
    const intl2 = skuId(lockedRecipientUser[6]).intl;
    obj[0] = intl2.string(skuId(lockedRecipientUser[6]).t.R0vK0N);
    const obj3 = skuId(lockedRecipientUser[7]);
    obj[1] = skuId(lockedRecipientUser[7]).getHeaderBackButton();
    obj[2] = function render() {
      return outer1_5(outer1_1(outer1_2[9]), { setRecipientUser: closure_8 });
    };
    obj[skuId(lockedRecipientUser[5]).UnifiedGiftModalScreens.RECIPENT_SELECT] = obj;
    return obj;
  }, items1);
  obj = { value: analyticsLocations.analyticsLocations, children: null };
  obj = { initialRouteName: null, screens: null };
  obj[0] = skuId(lockedRecipientUser[5]).UnifiedGiftModalScreens.GIFT_DETAIL;
  obj[1] = navigatorScreens;
  obj[1] = renderProductDetails(skuId(lockedRecipientUser[4]).Navigator, obj);
  return renderProductDetails(skuId(lockedRecipientUser[10]).AnalyticsLocationProvider, obj);
};