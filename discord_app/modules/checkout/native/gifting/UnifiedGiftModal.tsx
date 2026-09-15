// === Module 10959: UnifiedGiftModal ===

// Module 10959 (UnifiedGiftModal)
import util from "util" /* 1115 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4842 */;
import NavigatorHeader from "NavigatorHeader" /* 5709 */;
import UnifiedGiftModalTypes from "UnifiedGiftModalTypes" /* 10960 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModal.tsx");

export default function UnifiedGiftModal(analyticsLocations) {
  ({ skuId, lockedRecipientUser, onGiftModalDismiss, validateRecipient, renderProductDetails, renderPurchaseSection } = analyticsLocations);
  const tmp = validateRecipient(renderProductDetails.useState(lockedRecipientUser), 2);
  const first = tmp[0];
  closure_7 = tmp[1];
  const items = [onGiftModalDismiss];
  const callback = renderProductDetails.useCallback(() => {
    ModalActionCreatorsDefault.pop();
    if (onGiftModalDismiss != null) {
      onGiftModalDismiss();
    }
  }, items);
  const items1 = [lockedRecipientUser, first, skuId, callback, validateRecipient, renderProductDetails, renderPurchaseSection];
  const navigatorScreens = skuId(onGiftModalDismiss[4]).useNavigatorScreens(() => {
    const obj = {};
    const obj2 = { title: null, headerLeft: null, render: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t["JCFN/y"]);
    obj2.headerLeft = NavigatorHeader.getHeaderCloseButton(callback);
    obj2.render = function render() {
      return renderPurchaseSection(lockedRecipientUser(onGiftModalDismiss[8]), { skuId, recipientUser, setRecipientUser, lockedRecipient: null != closure_1_1, validateRecipient, renderProductDetails, renderPurchaseSection });
    };
    obj[UnifiedGiftModalTypes.UnifiedGiftModalScreens.GIFT_DETAIL] = obj2;
    const obj4 = { title: null, headerLeft: null, render: null };
    const intl2 = util.intl;
    obj4.title = intl2.string(util.t.R0vK0N);
    obj4.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj4.render = function render() {
      return renderPurchaseSection(lockedRecipientUser(onGiftModalDismiss[9]), { setRecipientUser });
    };
    obj[UnifiedGiftModalTypes.UnifiedGiftModalScreens.RECIPENT_SELECT] = obj4;
    return obj;
  }, items1);
  let obj2 = { value: analyticsLocations.analyticsLocations, children: null };
  let obj = skuId(onGiftModalDismiss[4]);
  obj2.children = renderPurchaseSection(skuId(onGiftModalDismiss[4]).Navigator, { initialRouteName: skuId(onGiftModalDismiss[5]).UnifiedGiftModalScreens.GIFT_DETAIL, screens: navigatorScreens });
  return renderPurchaseSection(skuId(onGiftModalDismiss[10]).AnalyticsLocationProvider, obj2);
};