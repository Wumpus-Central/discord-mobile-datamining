// === Module 15274: OrbCheckoutModalContext ===

// Module 15274 (OrbCheckoutModalContext)
import jsxProd from "jsxProd" /* 21 */;
import OrbCheckoutUtils from "OrbCheckoutUtils" /* 7556 */;
import OrbCheckoutHooks from "OrbCheckoutHooks" /* 15275 */;
import noop from "module_19" /* 19 */;
import OrderRecord from "OrderRecord" /* 7750 */;
import v1 from "v1" /* 1266 */;
import size from "module_2" /* 2 */;

({ useContext: c2, useMemo: c3 } = noop);
const jsx = jsxProd.jsx;
let obj = { skuId: "123", skuProductLine: null, skuApplicationId: "r", loadId: "PX_8", analyticsLocations: null, analyticsSourceLocation: null, isRedeeming: null, isCreatingOrder: null, orbRedemptionError: false, orbCheckoutErrorMessage: null, orbProductContext: true, orbChargeAmount: null, isOrdersCheckout: 500, onRedeemVirtualCurrency: null };
obj.loadId = v1.v4();
obj.analyticsLocations = [];
obj.onRedeemVirtualCurrency = function onRedeemVirtualCurrency() {

};
const context = noop.createContext(obj);
let result = size.fileFinishedImporting("modules/virtual_currency/checkout/OrbCheckoutModalContext.tsx");

export function useOrbCheckoutModalContextProvider(arg0) {
  ({ skuId, loadId, isOrdersCheckout } = arg0);
  ({ onCheckoutSuccess, onSignFailure, order } = arg0);
  if (isOrdersCheckout === undefined) {
    isOrdersCheckout = false;
  }
  const orbProductContext1 = OrbCheckoutHooks.useOrbProductContext({ skuId, shouldCaptureExceptions: true });
  ({ orbProductContext, skuProductLine, skuApplicationId } = orbProductContext1);
  const orbCheckoutRedemption = OrbCheckoutHooks.useOrbCheckoutRedemption({ skuId, loadId, useOrdersAPI: isOrdersCheckout, onCheckoutSuccess, onSignFailure, order });
  return { skuId, skuProductLine, skuApplicationId, loadId, orbProductContext, onRedeemVirtualCurrency: orbCheckoutRedemption.onRedeemVirtualCurrency, isRedeeming: orbCheckoutRedemption.isRedeeming, orbRedemptionError: orbCheckoutRedemption.orbRedemptionError };
}
export function OrbCheckoutModalContextProvider(children) {
  const skuId = children.skuId;
  const loadId = children.loadId;
  const analyticsSourceLocation = children.analyticsSourceLocation;
  const analyticsLocations = children.analyticsLocations;
  const order = children.order;
  let flag = children.isOrdersCheckout;
  ({ onCheckoutSuccess, onSignFailure } = children);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = children.isCreatingOrder;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let createOrderError = children.createOrderError;
  if (createOrderError === undefined) {
    createOrderError = null;
  }
  onRedeemVirtualCurrency = undefined;
  isRedeeming = undefined;
  orbRedemptionError = undefined;
  skuProductLine = undefined;
  skuApplicationId = undefined;
  let obj3;
  let invoicePreview;
  orbProductContext = undefined;
  let orbPriceAmount;
  let orbCheckoutErrorMessage;
  let flag3 = flag;
  if (flag === undefined) {
    flag3 = false;
  }
  const orbProductContext1 = skuId(loadId[4]).useOrbProductContext({ skuId, shouldCaptureExceptions: true });
  ({ orbProductContext, skuProductLine, skuApplicationId } = orbProductContext1);
  let obj = skuId(loadId[4]);
  const orbCheckoutRedemption = skuId(loadId[4]).useOrbCheckoutRedemption({ skuId, loadId, useOrdersAPI: flag3, onCheckoutSuccess, onSignFailure, order });
  ({ onRedeemVirtualCurrency, isRedeeming, orbRedemptionError } = orbCheckoutRedemption);
  items = [order];
  obj3 = analyticsLocations(() => {
    let fromServer = null;
    if (null != order) {
      fromServer = OrderRecord.createFromServer(tmp);
    }
    return fromServer;
  }, items);
  invoicePreview = null;
  if (null != obj3) {
    invoicePreview = obj3.getInvoicePreview();
  }
  const items1 = [flag, orbProductContext, invoicePreview, skuId];
  const tmp4Result = analyticsLocations(() => {
    if (flag) {
      let invoicePreviewLineItemUnitPriceForSku = null;
      if (null != invoicePreview) {
        invoicePreviewLineItemUnitPriceForSku = invoicePreview.getInvoicePreviewLineItemUnitPriceForSku(skuId);
      }
      const obj2 = { orbPriceAmount: invoicePreviewLineItemUnitPriceForSku };
      let tmp = obj2;
    } else {
      tmp = orbProductContext;
    }
    return tmp;
  }, items1);
  orbProductContext = tmp4Result;
  orbPriceAmount = null;
  if (flag) {
    let total = null;
    if (null != invoicePreview) {
      total = invoicePreview.total;
    }
    orbPriceAmount = total;
    let tmp7 = total;
  } else {
    tmp7 = null;
    if (null != orbProductContext) {
      orbPriceAmount = orbProductContext.orbPriceAmount;
      tmp7 = orbPriceAmount;
    }
  }
  const items2 = [flag, orbRedemptionError, createOrderError, obj3];
  const tmp4Result2 = analyticsLocations(() => {
    if (flag) {
      let result = null;
      if (null != obj3) {
        result = obj3.firstUnsatisfiedConstraintReasonCode();
      }
      let tmp6 = createOrderError;
      if (createOrderError == null) {
        tmp6 = orbRedemptionError;
      }
      return OrbCheckoutUtils.resolveOrbCheckoutErrorMessage(tmp6, result);
    } else {
      let message = null;
      if (null != orbRedemptionError) {
        message = orbRedemptionError.message;
      }
      return message;
    }
  }, items2);
  orbCheckoutErrorMessage = tmp4Result2;
  const items3 = [skuId, skuProductLine, skuApplicationId, loadId, analyticsLocations, analyticsSourceLocation, tmp4Result, tmp7, flag, onRedeemVirtualCurrency, isRedeeming, flag2, orbRedemptionError, tmp4Result2];
  let obj2 = skuId(loadId[4]);
  return flag(flag2.Provider, {
    value: analyticsLocations(() => {
      const obj = { skuId, skuProductLine, skuApplicationId, loadId, analyticsLocations: null, analyticsSourceLocation: null, orbProductContext: null, orbChargeAmount: null, isOrdersCheckout: null, onRedeemVirtualCurrency: null, isRedeeming: null, isCreatingOrder: null, orbRedemptionError: null, orbCheckoutErrorMessage: null };
      items = analyticsLocations;
      if (analyticsLocations == null) {
        items = [];
      }
      obj.analyticsLocations = items;
      obj.analyticsSourceLocation = analyticsSourceLocation;
      obj.orbProductContext = orbProductContext;
      obj.orbChargeAmount = orbPriceAmount;
      obj.isOrdersCheckout = flag;
      obj.onRedeemVirtualCurrency = onRedeemVirtualCurrency;
      obj.isRedeeming = isRedeeming;
      obj.isCreatingOrder = flag2;
      obj.orbRedemptionError = orbRedemptionError;
      obj.orbCheckoutErrorMessage = orbCheckoutErrorMessage;
      return obj;
    }, items3),
    children: children.children
  });
}
export function useOrbCheckoutModalContext() {
  return React2(closure_6);
}