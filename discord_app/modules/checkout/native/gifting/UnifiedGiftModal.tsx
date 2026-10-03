// === Module 10558: UnifiedGiftModal ===

// Module 10558 (UnifiedGiftModal)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import Navigator from "Navigator" /* 6496 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6657 */;
import UnifiedGiftModalTypes from "UnifiedGiftModalTypes" /* 10559 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? ((skuId) => {
  const cResult = skuId(onGiftModalDismiss[4]).c(11);
  skuId = skuId.skuId;
  const lockedRecipientUser = skuId.lockedRecipientUser;
  onGiftModalDismiss = skuId.onGiftModalDismiss;
  const validateRecipient = skuId.validateRecipient;
  const renderProductDetails = skuId.renderProductDetails;
  const renderPurchaseSection = skuId.renderPurchaseSection;
  const tmp4 = validateRecipient(renderProductDetails.useState(lockedRecipientUser), 2);
  const first = tmp4[0];
  closure_7 = tmp4[1];
  if (cResult[0] !== onGiftModalDismiss) {
    const fn = function o() {
      ModalActionCreatorsDefault.pop();
      if (onGiftModalDismiss != null) {
        onGiftModalDismiss();
      }
    };
    cResult[0] = onGiftModalDismiss;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  closure_8 = tmp6;
  if (cResult[2] === tmp6) {
    if (cResult[3] === lockedRecipientUser) {
      if (cResult[4] === first) {
        if (cResult[5] === renderProductDetails) {
          if (cResult[6] === renderPurchaseSection) {
            if (cResult[7] === skuId) {
              if (cResult[8] === validateRecipient) {
                let tmp7 = cResult[9];
                let tmp8 = cResult[10];
              }
              return skuId(onGiftModalDismiss[11]).useNavigatorScreens(tmp7, tmp8);
            }
          }
        }
      }
    }
  }
  class D {
    constructor() {
      obj = {};
      obj1 = { title: null, headerLeft: null, render: null };
      intl = closure_0(closure_2[7]).intl;
      obj1.title = intl.string(closure_0(closure_2[7]).t["JCFN/y"]);
      obj3 = closure_0(closure_2[8]);
      obj1.headerLeft = obj3.getHeaderCloseButton(closure_8);
      obj1.render = function render() {
        return renderPurchaseSection(lockedRecipientUser(onGiftModalDismiss[9]), { skuId, recipientUser, setRecipientUser, lockedRecipient: null != closure_1_1, validateRecipient, renderProductDetails, renderPurchaseSection });
      };
      obj[closure_0(closure_2[6]).UnifiedGiftModalScreens.GIFT_DETAIL] = obj1;
      obj6 = { title: null, headerLeft: null, render: null };
      intl2 = closure_0(closure_2[7]).intl;
      obj6.title = intl2.string(closure_0(closure_2[7]).t.R0vK0N);
      obj5 = closure_0(closure_2[8]);
      obj6.headerLeft = obj5.getHeaderBackButton();
      obj6.render = function render() {
        return renderPurchaseSection(lockedRecipientUser(onGiftModalDismiss[10]), { setRecipientUser });
      };
      obj[closure_0(closure_2[6]).UnifiedGiftModalScreens.RECIPENT_SELECT] = obj6;
      return obj;
    }
  }
  const items = [lockedRecipientUser, first, skuId, tmp6, validateRecipient, renderProductDetails, renderPurchaseSection];
  cResult[2] = tmp6;
  cResult[3] = lockedRecipientUser;
  cResult[4] = first;
  cResult[5] = renderProductDetails;
  cResult[6] = renderPurchaseSection;
  cResult[7] = skuId;
  cResult[8] = validateRecipient;
  cResult[9] = D;
  cResult[10] = items;
  tmp8 = items;
  tmp7 = D;
}) : ((skuId) => {
  skuId = skuId.skuId;
  const lockedRecipientUser = skuId.lockedRecipientUser;
  const onGiftModalDismiss = skuId.onGiftModalDismiss;
  const validateRecipient = skuId.validateRecipient;
  const renderProductDetails = skuId.renderProductDetails;
  const renderPurchaseSection = skuId.renderPurchaseSection;
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
  return skuId(onGiftModalDismiss[11]).useNavigatorScreens(() => {
    const obj = {};
    const obj2 = { title: null, headerLeft: null, render: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t["JCFN/y"]);
    obj2.headerLeft = NavigatorHeader.getHeaderCloseButton(callback);
    obj2.render = function render() {
      return renderPurchaseSection(lockedRecipientUser(onGiftModalDismiss[9]), { skuId, recipientUser, setRecipientUser, lockedRecipient: null != closure_1_1, validateRecipient, renderProductDetails, renderPurchaseSection });
    };
    obj[UnifiedGiftModalTypes.UnifiedGiftModalScreens.GIFT_DETAIL] = obj2;
    const obj4 = { title: null, headerLeft: null, render: null };
    const intl2 = util.intl;
    obj4.title = intl2.string(util.t.R0vK0N);
    obj4.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj4.render = function render() {
      return renderPurchaseSection(lockedRecipientUser(onGiftModalDismiss[10]), { setRecipientUser });
    };
    obj[UnifiedGiftModalTypes.UnifiedGiftModalScreens.RECIPENT_SELECT] = obj4;
    return obj;
  }, items1);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(12);
  ({ skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, validateRecipient, renderProductDetails, renderPurchaseSection } = arg0);
  if (cResult[0] === lockedRecipientUser) {
    if (cResult[1] === onGiftModalDismiss) {
      if (cResult[2] === renderProductDetails) {
        if (cResult[3] === renderPurchaseSection) {
          if (cResult[4] === skuId) {
            if (cResult[5] === validateRecipient) {
              let tmp4 = cResult[6];
            }
            const tmp6 = closure_6(tmp4);
            if (cResult[7] !== tmp6) {
              const obj2 = { initialRouteName: UnifiedGiftModalTypes.UnifiedGiftModalScreens.GIFT_DETAIL, screens: tmp6 };
              const tmp9 = jsx(Navigator.Navigator, { initialRouteName: UnifiedGiftModalTypes.UnifiedGiftModalScreens.GIFT_DETAIL, screens: tmp6 });
              cResult[7] = tmp6;
              cResult[8] = tmp9;
              let tmp7 = tmp9;
            } else {
              tmp7 = cResult[8];
            }
            if (cResult[9] === analyticsLocations) {
              if (cResult[10] === tmp7) {
                let tmp10 = cResult[11];
              }
              return tmp10;
            }
            const obj3 = { value: analyticsLocations, children: tmp7 };
            const tmp12 = jsx(useAnalyticsLocations.AnalyticsLocationProvider, { value: analyticsLocations, children: tmp7 });
            cResult[9] = analyticsLocations;
            cResult[10] = tmp7;
            cResult[11] = tmp12;
            tmp10 = tmp12;
          }
        }
      }
    }
  }
  const obj4 = { skuId, lockedRecipientUser, onGiftModalDismiss, validateRecipient, renderProductDetails, renderPurchaseSection };
  cResult[0] = lockedRecipientUser;
  cResult[1] = onGiftModalDismiss;
  cResult[2] = renderProductDetails;
  cResult[3] = renderPurchaseSection;
  cResult[4] = skuId;
  cResult[5] = validateRecipient;
  cResult[6] = obj4;
  tmp4 = obj4;
}) : ((skuId) => {
  const obj2 = { value: skuId.analyticsLocations, children: null };
  const obj = { skuId: skuId.skuId, lockedRecipientUser: skuId.lockedRecipientUser, onGiftModalDismiss: skuId.onGiftModalDismiss, validateRecipient: skuId.validateRecipient, renderProductDetails: skuId.renderProductDetails, renderPurchaseSection: skuId.renderPurchaseSection };
  const tmp = closure_6({ skuId: skuId.skuId, lockedRecipientUser: skuId.lockedRecipientUser, onGiftModalDismiss: skuId.onGiftModalDismiss, validateRecipient: skuId.validateRecipient, renderProductDetails: skuId.renderProductDetails, renderPurchaseSection: skuId.renderPurchaseSection });
  obj2.children = jsx(Navigator.Navigator, { initialRouteName: UnifiedGiftModalTypes.UnifiedGiftModalScreens.GIFT_DETAIL, screens: closure_6({ skuId: skuId.skuId, lockedRecipientUser: skuId.lockedRecipientUser, onGiftModalDismiss: skuId.onGiftModalDismiss, validateRecipient: skuId.validateRecipient, renderProductDetails: skuId.renderProductDetails, renderPurchaseSection: skuId.renderPurchaseSection }) });
  return jsx(useAnalyticsLocations.AnalyticsLocationProvider, { value: skuId.analyticsLocations, children: null });
});