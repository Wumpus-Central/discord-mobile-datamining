// discord_app/modules/collectibles/native/headless_components/HeadlessCollectiblesPurchaseFlow.tsx
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
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
  let obj = useProductPurchaseState;
  const isPurchased = obj.useProductPurchaseState(product).isPurchased;
  let obj1 = PlatformUtils;
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
    skuIds: null,
    isGift: false,
    activeSubscription: null,
    initialExternalGatewayFacet: useCollectiblesExternalGatewayFacetDefault(product),
    onOrderRetryCancellation() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(
        openProductDetailsActionSheet.PRODUCT_DETAILS_ACTION_SHEET_KEY,
      );
    },
    checkoutAnalyticsFields: null,
    children: null,
  };
  const items = [product.skuId];
  obj.skuIds = items;
  obj1 = {
    is_gift: false,
    location_stack: analyticsLocations,
    payment_type: "sku",
    sku_id: product.skuId,
    application_id,
  };
  obj.checkoutAnalyticsFields = obj1;
  const tmp4 = useCollectiblesExternalGatewayFacetDefault(product);
  obj.children = jsx(HeadlessCollectiblesPurchaseRunner.HeadlessCollectiblesPurchaseRunner, {
    product,
    attempt,
    analyticsLocations,
    onBuy,
    onBuySettled,
    stageCollectibleChangeForEditProfile,
  });
  obj.children = jsx(
    NativeCheckoutStoreProviderDefault,
    {
      headless: true,
      paymentGateway: GOOGLE,
      orderRequired: tmp7,
      skuIds: null,
      isGift: false,
      activeSubscription: null,
      initialExternalGatewayFacet: useCollectiblesExternalGatewayFacetDefault(product),
      onOrderRetryCancellation() {
        return ActionSheetActionCreatorsDefault.hideActionSheet(
          openProductDetailsActionSheet.PRODUCT_DETAILS_ACTION_SHEET_KEY,
        );
      },
      checkoutAnalyticsFields: null,
      children: null,
    },
    product.skuId,
  );
  return jsx(NativePaymentContext.NativePaymentContextProvider, {
    headless: true,
    paymentGateway: GOOGLE,
    orderRequired: tmp7,
    skuIds: null,
    isGift: false,
    activeSubscription: null,
    initialExternalGatewayFacet: useCollectiblesExternalGatewayFacetDefault(product),
    onOrderRetryCancellation() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(
        openProductDetailsActionSheet.PRODUCT_DETAILS_ACTION_SHEET_KEY,
      );
    },
    checkoutAnalyticsFields: null,
    children: null,
  });
}
