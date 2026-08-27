// === Module 12486: HeadlessCollectiblesPurchaseFlow ===

// Module 12486 (HeadlessCollectiblesPurchaseFlow)
import noopAll from "noop" /* 19 */;
import set from "set" /* 500 */;
import apexExperiment from "apexExperiment" /* 8152 */;
import apexExperiment2 from "apexExperiment" /* 10399 */;
import NativeCheckoutStoreProviderDefault from "NativeCheckoutStoreProvider" /* 10500 */;
import NativePaymentContextProvider from "NativePaymentContextProvider" /* 10514 */;
import useCollectiblesExternalGatewayFacetDefault from "useCollectiblesExternalGatewayFacet" /* 10663 */;
import getProductPurchaseState from "getProductPurchaseState" /* 12452 */;
import HeadlessCollectiblesPurchaseRunner from "HeadlessCollectiblesPurchaseRunner" /* 12487 */;
import { PaymentGateways } from "sum" /* 505 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
let result = require("set").fileFinishedImporting("modules/collectibles/native/headless_components/HeadlessCollectiblesPurchaseFlow.tsx");

export default function HeadlessCollectiblesPurchaseFlow(product) {
  product = product.product;
  ({ attempt, analyticsLocations, onBuy, onBuySettled } = product);
  const OTPACOMOrderExperiment = apexExperiment.OTPACOMOrderExperiment;
  let obj = apexExperiment2;
  const androidShopOrdersEnabled = obj.useAndroidShopOrdersEnabled({ location: "CollectiblesPurchaseFlow" });
  const isPurchased = getProductPurchaseState.useProductPurchaseState(product).isPurchased;
  const obj2 = getProductPurchaseState;
  const tmp4 = importDefault;
  const tmp5 = useCollectiblesExternalGatewayFacetDefault(product);
  if (obj3.isIOS()) {
    let GOOGLE = tmp6.APPLE_ADVANCED_COMMERCE;
    let tmp7 = tmp6;
  } else {
    GOOGLE = tmp6.GOOGLE;
    tmp7 = tmp6;
  }
  let tmp8 = !isPurchased;
  if (!isPurchased) {
    let tmp9 = GOOGLE === tmp7.APPLE_ADVANCED_COMMERCE && OTPACOMOrderExperiment.useConfig({ location: "CollectiblesPurchaseFlow" }).enabled;
    if (!tmp9) {
      let result = GOOGLE === tmp7.GOOGLE;
      if (result) {
        result = tmp(4120).isGooglePlayBillingSupported();
        const tmpResult = tmp(4120);
      }
      if (result) {
        result = androidShopOrdersEnabled;
      }
      tmp9 = result;
    }
    tmp8 = tmp9;
  }
  obj = { skuIDs: [], activeSubscription: null, children: null };
  obj = {
    headless: true,
    paymentGateway: GOOGLE,
    orderRequired: tmp8,
    skuIds: items,
    isGift: false,
    activeSubscription: null,
    initialExternalGatewayFacet: tmp5,
    onOrderRetryCancellation() {
      return callback2(4412).hideActionSheet(callback(12440).PRODUCT_DETAILS_ACTION_SHEET_KEY);
    },
    children: null
  };
  items = [product.skuId];
  obj3 = set;
  obj[8] = jsx(HeadlessCollectiblesPurchaseRunner.HeadlessCollectiblesPurchaseRunner, { product, attempt, analyticsLocations, onBuy, onBuySettled });
  obj[2] = jsx(NativeCheckoutStoreProviderDefault, {
    headless: true,
    paymentGateway: GOOGLE,
    orderRequired: tmp8,
    skuIds: items,
    isGift: false,
    activeSubscription: null,
    initialExternalGatewayFacet: tmp5,
    onOrderRetryCancellation() {
      return callback2(4412).hideActionSheet(callback(12440).PRODUCT_DETAILS_ACTION_SHEET_KEY);
    },
    children: null
  }, product.skuId);
  return jsx(NativePaymentContextProvider.NativePaymentContextProvider, {
    headless: true,
    paymentGateway: GOOGLE,
    orderRequired: tmp8,
    skuIds: items,
    isGift: false,
    activeSubscription: null,
    initialExternalGatewayFacet: tmp5,
    onOrderRetryCancellation() {
      return callback2(4412).hideActionSheet(callback(12440).PRODUCT_DETAILS_ACTION_SHEET_KEY);
    },
    children: null
  });
};