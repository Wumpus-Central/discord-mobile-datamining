// discord_app/modules/virtual_currency/checkout/OrbCheckoutModalContext.tsx
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import OrbCheckoutHooks from "OrbCheckoutHooks.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import v1 from "../../../../_runtime/01267_v1.js";
import size from "../../../../_runtime/metro/00002__.js";

({ useContext: c2, useMemo: c3, createContext } = noop);
const jsx = jsxProd.jsx;
let obj = {
  skuId: "123",
  skuProductLine: null,
  skuApplicationId: "r",
  loadId: "flexDirection",
  analyticsLocations: null,
  analyticsSourceLocation: null,
  isRedeeming: null,
  orbRedemptionError: "lg",
  orbProductContext: null,
  onRedeemVirtualCurrency: true,
};
obj.loadId = v1.v4();
obj.analyticsLocations = [];
obj.onRedeemVirtualCurrency = function onRedeemVirtualCurrency() {};
const redux = createContext(obj);
const result = size.fileFinishedImporting("modules/virtual_currency/checkout/OrbCheckoutModalContext.tsx");

export function useOrbCheckoutModalContextProvider(arg0) {
  ({ skuId, loadId } = arg0);
  ({ onCheckoutSuccess, onSignFailure, order } = arg0);
  const orbProductContext1 = OrbCheckoutHooks.useOrbProductContext({ skuId, shouldCaptureExceptions: true });
  ({ orbProductContext, skuProductLine, skuApplicationId } = orbProductContext1);
  const orbCheckoutRedemption = OrbCheckoutHooks.useOrbCheckoutRedemption({
    skuId,
    loadId,
    onCheckoutSuccess,
    onSignFailure,
    order,
  });
  return {
    skuId,
    skuProductLine,
    skuApplicationId,
    loadId,
    orbProductContext,
    onRedeemVirtualCurrency: orbCheckoutRedemption.onRedeemVirtualCurrency,
    isRedeeming: orbCheckoutRedemption.isRedeeming,
    orbRedemptionError: orbCheckoutRedemption.orbRedemptionError,
  };
}
export function OrbCheckoutModalContextProvider(children) {
  const skuId = children.skuId;
  const loadId = children.loadId;
  const analyticsSourceLocation = children.analyticsSourceLocation;
  const analyticsLocations = children.analyticsLocations;
  orbProductContext = undefined;
  onRedeemVirtualCurrency = undefined;
  isRedeeming = undefined;
  orbRedemptionError = undefined;
  skuProductLine = undefined;
  skuApplicationId = undefined;
  let obj = { skuId, loadId, onCheckoutSuccess: children.onCheckoutSuccess };
  const skuId2 = obj.skuId;
  ({ loadId: loadId2, onCheckoutSuccess, onSignFailure, order } = obj);
  const orbProductContext1 = OrbCheckoutHooks.useOrbProductContext({ skuId: skuId2, shouldCaptureExceptions: true });
  ({ orbProductContext, skuProductLine, skuApplicationId } = orbProductContext1);
  const orbCheckoutRedemption = OrbCheckoutHooks.useOrbCheckoutRedemption({
    skuId: skuId2,
    loadId: loadId2,
    onCheckoutSuccess,
    onSignFailure,
    order,
  });
  ({ onRedeemVirtualCurrency, isRedeeming, orbRedemptionError } = orbCheckoutRedemption);
  let items = [
    skuId,
    skuProductLine,
    skuApplicationId,
    loadId,
    analyticsLocations,
    analyticsSourceLocation,
    orbProductContext,
    onRedeemVirtualCurrency,
    isRedeeming,
    orbRedemptionError,
  ];
  return (
    <redux.Provider
      value={React3(() => {
        const obj = {
          skuId,
          skuProductLine,
          skuApplicationId,
          loadId,
          analyticsLocations: null,
          analyticsSourceLocation: null,
          orbProductContext: null,
          onRedeemVirtualCurrency: null,
          isRedeeming: null,
          orbRedemptionError: null,
        };
        let items = analyticsLocations;
        if (analyticsLocations == null) {
          items = [];
        }
        obj.analyticsLocations = items;
        obj.analyticsSourceLocation = analyticsSourceLocation;
        obj.orbProductContext = orbProductContext;
        obj.onRedeemVirtualCurrency = onRedeemVirtualCurrency;
        obj.isRedeeming = isRedeeming;
        obj.orbRedemptionError = orbRedemptionError;
        return obj;
      }, items)}
    >
      {children.children}
    </redux.Provider>
  );
}
export function useOrbCheckoutModalContext() {
  return React2(closure_5);
}
