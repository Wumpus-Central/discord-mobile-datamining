// === Module 12809: HeadlessCollectiblesPurchaseFlow ===

// Module 12809 (HeadlessCollectiblesPurchaseFlow)
import noopAll from "noop" /* 19 */;
import set from "set" /* 1234 */;
import apexExperiment from "apexExperiment" /* 8233 */;
import NativeCheckoutStoreProviderDefault from "NativeCheckoutStoreProvider" /* 10803 */;
import NativePaymentContextProvider from "NativePaymentContextProvider" /* 10819 */;
import useCollectiblesExternalGatewayFacetDefault from "useCollectiblesExternalGatewayFacet" /* 10968 */;
import getProductPurchaseState from "getProductPurchaseState" /* 12775 */;
import HeadlessCollectiblesPurchaseRunner from "HeadlessCollectiblesPurchaseRunner" /* 12810 */;
import { COLLECTIBLES_APPLICATION_ID as closure_3 } from "ME" /* 673 */;
import { PaymentGateways } from "sum" /* 502 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
let result = require("set").fileFinishedImporting("modules/collectibles/native/headless_components/HeadlessCollectiblesPurchaseFlow.tsx");

export default function HeadlessCollectiblesPurchaseFlow(arg0) {
  ({ product, analyticsLocations } = arg0);
  ({ attempt, onBuy, onBuySettled } = arg0);
  const OTPACOMOrderExperiment = apexExperiment.OTPACOMOrderExperiment;
  let obj = getProductPurchaseState;
  const isPurchased = obj.useProductPurchaseState(product).isPurchased;
  obj1 = set;
  if (obj1.isIOS()) {
    let GOOGLE = tmp5.APPLE_ADVANCED_COMMERCE;
    let tmp6 = tmp5;
  } else {
    GOOGLE = tmp5.GOOGLE;
    tmp6 = tmp5;
  }
  let tmp7 = !isPurchased;
  if (!isPurchased) {
    let tmp8 = GOOGLE === tmp6.APPLE_ADVANCED_COMMERCE && OTPACOMOrderExperiment.useConfig({ location: "CollectiblesPurchaseFlow" }).enabled;
    if (!tmp8) {
      let result = GOOGLE === tmp6.GOOGLE;
      if (result) {
        result = tmp(4152).isGooglePlayBillingSupported();
        const tmpResult = tmp(4152);
      }
      tmp8 = result;
    }
    tmp7 = tmp8;
  }
  obj = { skuIDs: [], activeSubscription: null, children: null };
  obj = {
    headless: true,
    paymentGateway: GOOGLE,
    orderRequired: tmp7,
    skuIds: items,
    isGift: false,
    activeSubscription: null,
    initialExternalGatewayFacet: useCollectiblesExternalGatewayFacetDefault(product),
    onOrderRetryCancellation() {
      return callback2(4445).hideActionSheet(callback(12763).PRODUCT_DETAILS_ACTION_SHEET_KEY);
    },
    checkoutAnalyticsFields: obj1,
    children: null
  };
  items = [product.skuId];
  obj1 = { is_gift: false, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id: closure_3 };
  const tmp3 = importDefault;
  const tmp4 = useCollectiblesExternalGatewayFacetDefault(product);
  obj[9] = jsx(HeadlessCollectiblesPurchaseRunner.HeadlessCollectiblesPurchaseRunner, { product, attempt, analyticsLocations, onBuy, onBuySettled });
  obj[2] = jsx(NativeCheckoutStoreProviderDefault, {
    headless: true,
    paymentGateway: GOOGLE,
    orderRequired: tmp7,
    skuIds: items,
    isGift: false,
    activeSubscription: null,
    initialExternalGatewayFacet: useCollectiblesExternalGatewayFacetDefault(product),
    onOrderRetryCancellation() {
      return callback2(4445).hideActionSheet(callback(12763).PRODUCT_DETAILS_ACTION_SHEET_KEY);
    },
    checkoutAnalyticsFields: obj1,
    children: null
  }, product.skuId);
  return jsx(NativePaymentContextProvider.NativePaymentContextProvider, {
    headless: true,
    paymentGateway: GOOGLE,
    orderRequired: tmp7,
    skuIds: items,
    isGift: false,
    activeSubscription: null,
    initialExternalGatewayFacet: useCollectiblesExternalGatewayFacetDefault(product),
    onOrderRetryCancellation() {
      return callback2(4445).hideActionSheet(callback(12763).PRODUCT_DETAILS_ACTION_SHEET_KEY);
    },
    checkoutAnalyticsFields: obj1,
    children: null
  });
};