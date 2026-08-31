// discord_app/modules/collectibles/native/headless_components/HeadlessCollectiblesPurchaseFlow.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import set from "../../../../utils/PlatformUtils.tsx";
import apexExperiment from "../../../billing/native/ACOMExperiments.tsx";
import apexExperiment2 from "../../../billing/experiments/AndroidShopOrdersExperiment.tsx";
import NativeCheckoutStoreProviderDefault from "../../../checkout/native/stores/NativeCheckoutStoreProvider.tsx";
import NativePaymentContextProvider from "../../../payments/native/NativePaymentContext.tsx";
import useCollectiblesExternalGatewayFacetDefault from "../hooks/useCollectiblesExternalGatewayFacet.android.tsx";
import getProductPurchaseState from "../../hooks/useProductPurchaseState.tsx";
import HeadlessCollectiblesPurchaseRunner from "HeadlessCollectiblesPurchaseRunner.tsx";
import { COLLECTIBLES_APPLICATION_ID as closure_3 } from "../../../../Constants.tsx";
import { PaymentGateways } from "../../../../../discord_common/js/shared/Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
let result = require("set").fileFinishedImporting("modules/collectibles/native/headless_components/HeadlessCollectiblesPurchaseFlow.tsx");

export default function HeadlessCollectiblesPurchaseFlow(arg0) {
  ({ product, analyticsLocations } = arg0);
  ({ attempt, onBuy, onBuySettled } = arg0);
  const OTPACOMOrderExperiment = apexExperiment.OTPACOMOrderExperiment;
  let obj = apexExperiment2;
  const androidShopOrdersEnabled = obj.useAndroidShopOrdersEnabled({ location: "CollectiblesPurchaseFlow" });
  obj1 = getProductPurchaseState;
  const isPurchased = obj1.useProductPurchaseState(product).isPurchased;
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
        result = tmp(4122).isGooglePlayBillingSupported();
        const tmpResult = tmp(4122);
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
      return callback2(4415).hideActionSheet(callback(12494).PRODUCT_DETAILS_ACTION_SHEET_KEY);
    },
    checkoutAnalyticsFields: obj1,
    children: null
  };
  items = [product.skuId];
  obj1 = { is_gift: false, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id: closure_3 };
  obj3 = set;
  obj[9] = jsx(HeadlessCollectiblesPurchaseRunner.HeadlessCollectiblesPurchaseRunner, { product, attempt, analyticsLocations, onBuy, onBuySettled });
  obj[2] = jsx(NativeCheckoutStoreProviderDefault, {
    headless: true,
    paymentGateway: GOOGLE,
    orderRequired: tmp8,
    skuIds: items,
    isGift: false,
    activeSubscription: null,
    initialExternalGatewayFacet: tmp5,
    onOrderRetryCancellation() {
      return callback2(4415).hideActionSheet(callback(12494).PRODUCT_DETAILS_ACTION_SHEET_KEY);
    },
    checkoutAnalyticsFields: obj1,
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
      return callback2(4415).hideActionSheet(callback(12494).PRODUCT_DETAILS_ACTION_SHEET_KEY);
    },
    checkoutAnalyticsFields: obj1,
    children: null
  });
};