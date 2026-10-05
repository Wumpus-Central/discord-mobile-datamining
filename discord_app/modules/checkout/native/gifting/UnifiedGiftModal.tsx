// === Module 10558: UnifiedGiftModal ===

// Module 10558 (UnifiedGiftModal)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import Navigator2 from "Navigator" /* 6496 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6657 */;
import UnifiedGiftModalTypes from "UnifiedGiftModalTypes" /* 10559 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj1, obj6;

const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? ((skuId) => {
  let onGiftModalDismiss;
  let tmp6;
  let obj = skuId(onGiftModalDismiss[4]);
  const cResult = obj.c(11);
  const tmp = skuId;
  skuId = skuId.skuId;
  const lockedRecipientUser = skuId.lockedRecipientUser;
  const tmp2 = onGiftModalDismiss;
  onGiftModalDismiss = skuId.onGiftModalDismiss;
  const validateRecipient = skuId.validateRecipient;
  const renderProductDetails = skuId.renderProductDetails;
  const renderPurchaseSection = skuId.renderPurchaseSection;
  const tmp4 = validateRecipient(renderProductDetails.useState(lockedRecipientUser), 2);
  const first = tmp4[0];
  let closure_7 = tmp4[1];
  if (cResult[0] !== onGiftModalDismiss) {
    const fn = function o() {
      const arr = ModalActionCreatorsDefault;
      arr.pop();
      if (onGiftModalDismiss != null) {
        onGiftModalDismiss();
      }
    };
    cResult[0] = onGiftModalDismiss;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  let closure_8 = tmp6;
  if (cResult[2] === tmp6) {
    if (cResult[3] === lockedRecipientUser) {
      if (cResult[4] === first) {
        if (cResult[5] === renderProductDetails) {
          if (cResult[6] === renderPurchaseSection) {
            if (cResult[7] === skuId) {
              let tmp7;
              let tmp8;
              if (cResult[8] === validateRecipient) {
                tmp7 = cResult[9];
                tmp8 = cResult[10];
              }
              const tmpResult = tmp(tmp2[11]);
              return tmpResult.useNavigatorScreens(tmp7, tmp8);
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
      GIFT_DETAIL = closure_0(closure_2[6]).UnifiedGiftModalScreens.GIFT_DETAIL;
      intl = closure_0(closure_2[7]).intl;
      obj1.title = intl.string(closure_0(closure_2[7]).t["JCFN/y"]);
      obj3 = closure_0(closure_2[8]);
      obj1.headerLeft = obj3.getHeaderCloseButton(closure_8);
      obj1.render = function render() {
        const obj = { skuId, recipientUser, setRecipientUser, lockedRecipient: null != closure_1_1, validateRecipient, renderProductDetails, renderPurchaseSection };
        return renderPurchaseSection(lockedRecipientUser(onGiftModalDismiss[9]), obj);
      };
      obj[GIFT_DETAIL] = obj1;
      obj6 = { title: null, headerLeft: null, render: null };
      RECIPENT_SELECT = closure_0(closure_2[6]).UnifiedGiftModalScreens.RECIPENT_SELECT;
      intl2 = closure_0(closure_2[7]).intl;
      obj6.title = intl2.string(closure_0(closure_2[7]).t.R0vK0N);
      obj5 = closure_0(closure_2[8]);
      obj6.headerLeft = obj5.getHeaderBackButton();
      obj6.render = function render() {
        const obj = { setRecipientUser };
        return renderPurchaseSection(lockedRecipientUser(onGiftModalDismiss[10]), obj);
      };
      obj[RECIPENT_SELECT] = obj6;
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
  let closure_7 = tmp[1];
  const items = [onGiftModalDismiss];
  const callback = renderProductDetails.useCallback(() => {
    const arr = ModalActionCreatorsDefault;
    arr.pop();
    if (onGiftModalDismiss != null) {
      onGiftModalDismiss();
    }
  }, items);
  let obj = skuId(onGiftModalDismiss[11]);
  const items1 = [lockedRecipientUser, first, skuId, callback, validateRecipient, renderProductDetails, renderPurchaseSection];
  return obj.useNavigatorScreens(() => {
    let intl;
    let intl2;
    let obj3;
    let obj5;
    let recipientUser;
    let setRecipientUser;
    let obj = {};
    const obj2 = {
      title: intl.string(intl3.t["JCFN/y"]),
      headerLeft: obj3.getHeaderCloseButton(callback),
      render() {
        const obj = { skuId, recipientUser, setRecipientUser, lockedRecipient: null != closure_1_1, validateRecipient, renderProductDetails, renderPurchaseSection };
        return renderPurchaseSection(lockedRecipientUser(onGiftModalDismiss[9]), obj);
      }
    };
    const GIFT_DETAIL = UnifiedGiftModalTypes.UnifiedGiftModalScreens.GIFT_DETAIL;
    intl = intl3.intl;
    obj[GIFT_DETAIL] = obj2;
    obj3 = NavigatorHeader;
    const obj4 = {
      title: intl2.string(intl3.t.R0vK0N),
      headerLeft: obj5.getHeaderBackButton(),
      render() {
        const obj = { setRecipientUser };
        return renderPurchaseSection(lockedRecipientUser(onGiftModalDismiss[10]), obj);
      }
    };
    const RECIPENT_SELECT = UnifiedGiftModalTypes.UnifiedGiftModalScreens.RECIPENT_SELECT;
    intl2 = intl3.intl;
    obj[RECIPENT_SELECT] = obj4;
    obj5 = NavigatorHeader;
    return obj;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let analyticsLocations;
  let lockedRecipientUser;
  let onGiftModalDismiss;
  let renderProductDetails;
  let renderPurchaseSection;
  let skuId;
  let validateRecipient;
  const obj = react2;
  const cResult = obj.c(12);
  ({ skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, validateRecipient, renderProductDetails, renderPurchaseSection } = arg0);
  if (cResult[0] === lockedRecipientUser) {
    if (cResult[1] === onGiftModalDismiss) {
      if (cResult[2] === renderProductDetails) {
        if (cResult[3] === renderPurchaseSection) {
          if (cResult[4] === skuId) {
            let tmp4;
            let tmp7;
            if (cResult[5] === validateRecipient) {
              tmp4 = cResult[6];
            }
            const tmp6 = closure_6(tmp4);
            if (cResult[7] !== tmp6) {
              const Navigator = Navigator2.Navigator;
              const tmp9 = <Navigator initialRouteName={UnifiedGiftModalTypes.UnifiedGiftModalScreens.GIFT_DETAIL} screens={tmp6} />;
              cResult[7] = tmp6;
              cResult[8] = tmp9;
              tmp7 = tmp9;
            } else {
              tmp7 = cResult[8];
            }
            if (cResult[9] === analyticsLocations) {
              let tmp10;
              if (cResult[10] === tmp7) {
                tmp10 = cResult[11];
              }
              return tmp10;
            }
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
  const analyticsLocations = skuId.analyticsLocations;
  const obj = { skuId: skuId.skuId, lockedRecipientUser: skuId.lockedRecipientUser, onGiftModalDismiss: skuId.onGiftModalDismiss, validateRecipient: skuId.validateRecipient, renderProductDetails: skuId.renderProductDetails, renderPurchaseSection: skuId.renderPurchaseSection };
  const tmp = closure_6(obj);
  const AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
  ({ initialRouteName: UnifiedGiftModalTypes.UnifiedGiftModalScreens.GIFT_DETAIL, screens: tmp });
  const Navigator = Navigator2.Navigator;
  return <AnalyticsLocationProvider value={analyticsLocations}>{null}</AnalyticsLocationProvider>;
});
const result = size.fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModal.tsx");

export default tmp2;