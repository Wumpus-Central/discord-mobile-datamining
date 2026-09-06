// === Module 13164: HeadlessCollectiblesPurchaseFlow ===

// Module 13164 (HeadlessCollectiblesPurchaseFlow)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import openProductDetailsActionSheet from "openProductDetailsActionSheet" /* 8176 */;
import useProductPurchaseState from "useProductPurchaseState" /* 8842 */;
import ACOMExperiments from "ACOMExperiments" /* 9365 */;
import NativeCheckoutStoreProviderDefault from "NativeCheckoutStoreProvider" /* 10804 */;
import NativePaymentContext from "NativePaymentContext" /* 10822 */;
import useCollectiblesExternalGatewayFacetDefault from "useCollectiblesExternalGatewayFacet" /* 11009 */;
import HeadlessCollectiblesPurchaseRunner from "HeadlessCollectiblesPurchaseRunner" /* 13165 */;
import noop from "module_19" /* 19 */;

require = fn;
const application_id = fn(1074).COLLECTIBLES_APPLICATION_ID;
const PaymentGateways = fn(1085).PaymentGateways;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/headless_components/HeadlessCollectiblesPurchaseFlow.tsx");

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
    let tmp8 = GOOGLE === tmp6.APPLE_ADVANCED_COMMERCE && OTPACOMOrderExperiment.useConfig({ location: "CollectiblesPurchaseFlow" }).enabled;
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
      return ActionSheetActionCreatorsDefault.hideActionSheet(openProductDetailsActionSheet.PRODUCT_DETAILS_ACTION_SHEET_KEY);
    },
    checkoutAnalyticsFields: null,
    children: null
  };
  const items = [product.skuId];
  obj.skuIds = items;
  obj1 = { is_gift: false, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id };
  obj.checkoutAnalyticsFields = obj1;
  const tmp4 = useCollectiblesExternalGatewayFacetDefault(product);
  obj.children = jsx(HeadlessCollectiblesPurchaseRunner.HeadlessCollectiblesPurchaseRunner, { product, attempt, analyticsLocations, onBuy, onBuySettled, stageCollectibleChangeForEditProfile });
  obj.children = jsx(NativeCheckoutStoreProviderDefault, {
    headless: true,
    paymentGateway: GOOGLE,
    orderRequired: tmp7,
    skuIds: null,
    isGift: false,
    activeSubscription: null,
    initialExternalGatewayFacet: useCollectiblesExternalGatewayFacetDefault(product),
    onOrderRetryCancellation() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(openProductDetailsActionSheet.PRODUCT_DETAILS_ACTION_SHEET_KEY);
    },
    checkoutAnalyticsFields: null,
    children: null
  }, product.skuId);
  return jsx(NativePaymentContext.NativePaymentContextProvider, {
    headless: true,
    paymentGateway: GOOGLE,
    orderRequired: tmp7,
    skuIds: null,
    isGift: false,
    activeSubscription: null,
    initialExternalGatewayFacet: useCollectiblesExternalGatewayFacetDefault(product),
    onOrderRetryCancellation() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(openProductDetailsActionSheet.PRODUCT_DETAILS_ACTION_SHEET_KEY);
    },
    checkoutAnalyticsFields: null,
    children: null
  });
};