// discord_app/modules/collectibles/native/headless_components/HeadlessCollectiblesPurchaseFlow.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import set from "../../../../utils/PlatformUtils.tsx";
import getProductPurchaseState from "../../hooks/useProductPurchaseState.tsx";
import apexExperiment from "../../../billing/native/ACOMExperiments.tsx";
import NativeCheckoutStoreProviderDefault from "../../../checkout/native/stores/NativeCheckoutStoreProvider.tsx";
import NativePaymentContextProvider from "../../../payments/native/NativePaymentContext.tsx";
import useCollectiblesExternalGatewayFacetDefault from "../hooks/useCollectiblesExternalGatewayFacet.android.tsx";
import HeadlessCollectiblesPurchaseRunner from "HeadlessCollectiblesPurchaseRunner.tsx";
import { COLLECTIBLES_APPLICATION_ID as closure_3 } from "../../../../Constants.tsx";
import { PaymentGateways } from "../../../../../discord_common/js/shared/Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
let result = require("set").fileFinishedImporting(
  "modules/collectibles/native/headless_components/HeadlessCollectiblesPurchaseFlow.tsx",
);

export default function HeadlessCollectiblesPurchaseFlow(arg0) {
  ({ product, analyticsLocations } = arg0);
  ({ attempt, onBuy, onBuySettled, stageCollectibleChangeForEditProfile } = arg0);
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
    let tmp8 =
      GOOGLE === tmp6.APPLE_ADVANCED_COMMERCE &&
      OTPACOMOrderExperiment.useConfig({ location: "CollectiblesPurchaseFlow" }).enabled;
    if (!tmp8) {
      let result = GOOGLE === tmp6.GOOGLE;
      if (result) {
        result = tmp(4231).isGooglePlayBillingSupported();
        const tmpResult = tmp(4231);
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
      return callback2(4527).hideActionSheet(callback(8176).PRODUCT_DETAILS_ACTION_SHEET_KEY);
    },
    checkoutAnalyticsFields: obj1,
    children: null,
  };
  items = [product.skuId];
  obj1 = {
    is_gift: false,
    location_stack: analyticsLocations,
    payment_type: "sku",
    sku_id: product.skuId,
    application_id: closure_3,
  };
  const tmp3 = importDefault;
  const tmp4 = useCollectiblesExternalGatewayFacetDefault(product);
  obj[9] = jsx(HeadlessCollectiblesPurchaseRunner.HeadlessCollectiblesPurchaseRunner, {
    product,
    attempt,
    analyticsLocations,
    onBuy,
    onBuySettled,
    stageCollectibleChangeForEditProfile,
  });
  obj[2] = jsx(
    NativeCheckoutStoreProviderDefault,
    {
      headless: true,
      paymentGateway: GOOGLE,
      orderRequired: tmp7,
      skuIds: items,
      isGift: false,
      activeSubscription: null,
      initialExternalGatewayFacet: useCollectiblesExternalGatewayFacetDefault(product),
      onOrderRetryCancellation() {
        return callback2(4527).hideActionSheet(callback(8176).PRODUCT_DETAILS_ACTION_SHEET_KEY);
      },
      checkoutAnalyticsFields: obj1,
      children: null,
    },
    product.skuId,
  );
  return jsx(NativePaymentContextProvider.NativePaymentContextProvider, {
    headless: true,
    paymentGateway: GOOGLE,
    orderRequired: tmp7,
    skuIds: items,
    isGift: false,
    activeSubscription: null,
    initialExternalGatewayFacet: useCollectiblesExternalGatewayFacetDefault(product),
    onOrderRetryCancellation() {
      return callback2(4527).hideActionSheet(callback(8176).PRODUCT_DETAILS_ACTION_SHEET_KEY);
    },
    checkoutAnalyticsFields: obj1,
    children: null,
  });
}
