// discord_app/modules/collectibles/native/headless_components/HeadlessCollectiblesPurchaseFlow.tsx
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import BillingPlatformUtils from "../../../device/BillingPlatformUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import openProductDetailsActionSheet from "../openProductDetailsActionSheet.tsx";
import useProductPurchaseState from "../../hooks/useProductPurchaseState.tsx";
import ACOMExperiments from "../../../billing/native/ACOMExperiments.tsx";
import NativeCheckoutStoreProviderDefault from "../../../checkout/native/stores/NativeCheckoutStoreProvider.tsx";
import NativePaymentContext from "../../../payments/native/NativePaymentContext.tsx";
import useCollectiblesExternalGatewayFacetDefault from "../hooks/useCollectiblesExternalGatewayFacet.android.tsx";
import HeadlessCollectiblesPurchaseRunner from "HeadlessCollectiblesPurchaseRunner.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const application_id = fn(1074).COLLECTIBLES_APPLICATION_ID;
const PaymentGateways = fn(1085).PaymentGateways;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/collectibles/native/headless_components/HeadlessCollectiblesPurchaseFlow.tsx",
);

export default function HeadlessCollectiblesPurchaseFlow(arg0) {
  ({ product, analyticsLocations } = arg0);
  ({ attempt, onBuy, onBuySettled, stageCollectibleChangeForEditProfile } = arg0);
  const OTPACOMOrderExperiment = ACOMExperiments.OTPACOMOrderExperiment;
  const isPurchased = useProductPurchaseState.useProductPurchaseState(product).isPurchased;
  const tmp4 = useCollectiblesExternalGatewayFacetDefault(product);
  if (obj2.isIOS()) {
    let GOOGLE = PaymentGateways.APPLE_ADVANCED_COMMERCE;
    let tmp6 = PaymentGateways;
  } else {
    GOOGLE = PaymentGateways.GOOGLE;
    tmp6 = PaymentGateways;
  }
  let tmp7 = !isPurchased;
  if (!isPurchased) {
    let tmp8 =
      GOOGLE === tmp6.APPLE_ADVANCED_COMMERCE &&
      OTPACOMOrderExperiment.useConfig({ location: "CollectiblesPurchaseFlow" }).enabled;
    if (!tmp8) {
      let result = GOOGLE === tmp6.GOOGLE;
      if (result) {
        result = BillingPlatformUtils.isGooglePlayBillingSupported();
        const tmpResult = BillingPlatformUtils;
      }
      tmp8 = result;
    }
    tmp7 = tmp8;
  }
  const obj3 = { skuIDs: [], activeSubscription: null, children: null };
  const obj4 = {
    headless: true,
    paymentGateway: GOOGLE,
    orderRequired: tmp7,
    skuIds: null,
    isGift: false,
    activeSubscription: null,
    initialExternalGatewayFacet: tmp4,
    onOrderRetryCancellation() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(
        openProductDetailsActionSheet.PRODUCT_DETAILS_ACTION_SHEET_KEY,
      );
    },
    checkoutAnalyticsFields: {
      is_gift: false,
      location_stack: analyticsLocations,
      payment_type: "sku",
      sku_id: product.skuId,
      application_id,
    },
    children: null,
  };
  const items = [product.skuId];
  obj4.skuIds = items;
  obj2 = PlatformUtils;
  const obj5 = {
    is_gift: false,
    location_stack: analyticsLocations,
    payment_type: "sku",
    sku_id: product.skuId,
    application_id,
  };
  obj4.children = jsx(HeadlessCollectiblesPurchaseRunner.HeadlessCollectiblesPurchaseRunner, {
    product,
    attempt,
    analyticsLocations,
    onBuy,
    onBuySettled,
    stageCollectibleChangeForEditProfile,
  });
  obj3.children = jsx(
    NativeCheckoutStoreProviderDefault,
    {
      headless: true,
      paymentGateway: GOOGLE,
      orderRequired: tmp7,
      skuIds: null,
      isGift: false,
      activeSubscription: null,
      initialExternalGatewayFacet: tmp4,
      onOrderRetryCancellation() {
        return ActionSheetActionCreatorsDefault.hideActionSheet(
          openProductDetailsActionSheet.PRODUCT_DETAILS_ACTION_SHEET_KEY,
        );
      },
      checkoutAnalyticsFields: {
        is_gift: false,
        location_stack: analyticsLocations,
        payment_type: "sku",
        sku_id: product.skuId,
        application_id,
      },
      children: null,
    },
    product.skuId,
  );
  return jsx(NativePaymentContext.NativePaymentContextProvider, {
    skuIDs: [],
    activeSubscription: null,
    children: null,
  });
}
