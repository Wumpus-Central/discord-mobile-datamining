// discord_app/modules/checkout/native/gifting/UnifiedGiftModal.tsx
import util from "../../../../intl/index.native.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import UnifiedGiftModalTypes from "UnifiedGiftModalTypes.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModal.tsx");

export default function UnifiedGiftModal(analyticsLocations) {
  ({ skuId, lockedRecipientUser, onGiftModalDismiss, validateRecipient, renderProductDetails, renderPurchaseSection } =
    analyticsLocations);
  const tmp = validateRecipient(renderProductDetails.useState(lockedRecipientUser), 2);
  const first = tmp[0];
  closure_7 = tmp[1];
  const items = [onGiftModalDismiss];
  const callback = renderProductDetails.useCallback(() => {
    let arr = ModalActionCreatorsDefault;
    arr = arr.pop();
    if (onGiftModalDismiss != null) {
      onGiftModalDismiss();
    }
  }, items);
  let obj = skuId(onGiftModalDismiss[4]);
  const items1 = [
    lockedRecipientUser,
    first,
    skuId,
    callback,
    validateRecipient,
    renderProductDetails,
    renderPurchaseSection,
  ];
  const navigatorScreens = obj.useNavigatorScreens(() => {
    let obj = {};
    obj = { title: null, headerLeft: null, render: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["JCFN/y"]);
    obj.headerLeft = NavigatorHeader.getHeaderCloseButton(callback);
    obj.render = function render() {
      return renderPurchaseSection(lockedRecipientUser(onGiftModalDismiss[8]), {
        skuId,
        recipientUser,
        setRecipientUser,
        lockedRecipient: null != closure_1_1,
        validateRecipient,
        renderProductDetails,
        renderPurchaseSection,
      });
    };
    obj[UnifiedGiftModalTypes.UnifiedGiftModalScreens.GIFT_DETAIL] = obj;
    obj = { title: null, headerLeft: null, render: null };
    const intl2 = util.intl;
    obj.title = intl2.string(util.t.R0vK0N);
    obj.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj.render = function render() {
      return renderPurchaseSection(lockedRecipientUser(onGiftModalDismiss[9]), { setRecipientUser });
    };
    obj[UnifiedGiftModalTypes.UnifiedGiftModalScreens.RECIPENT_SELECT] = obj;
    return obj;
  }, items1);
  obj = { value: analyticsLocations.analyticsLocations, children: null };
  obj = {
    initialRouteName: skuId(onGiftModalDismiss[5]).UnifiedGiftModalScreens.GIFT_DETAIL,
    screens: navigatorScreens,
  };
  obj.children = renderPurchaseSection(skuId(onGiftModalDismiss[4]).Navigator, obj);
  return renderPurchaseSection(skuId(onGiftModalDismiss[10]).AnalyticsLocationProvider, obj);
}
