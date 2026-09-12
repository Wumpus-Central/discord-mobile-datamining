// === Module 13294: HeadlessCollectiblesPurchaseFlow ===

// Module 13294 (HeadlessCollectiblesPurchaseFlow)
import PlatformUtils from "PlatformUtils" /* 1150 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4307 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import openProductDetailsActionSheet from "openProductDetailsActionSheet" /* 8293 */;
import useProductPurchaseState from "useProductPurchaseState" /* 8967 */;
import ACOMExperiments from "ACOMExperiments" /* 9495 */;
import NativeCheckoutStoreProviderDefault from "NativeCheckoutStoreProvider" /* 10932 */;
import NativePaymentContext from "NativePaymentContext" /* 10950 */;
import useCollectiblesExternalGatewayFacetDefault from "useCollectiblesExternalGatewayFacet" /* 11143 */;
import HeadlessCollectiblesPurchaseRunner from "HeadlessCollectiblesPurchaseRunner" /* 13295 */;
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
    let GOOGLE = PaymentGateways.APPLE_ADVANCED_COMMERCE;
    let tmp6 = PaymentGateways;
  } else {
    GOOGLE = PaymentGateways.GOOGLE;
    tmp6 = PaymentGateways;
  }
  let tmp7 = !isPurchased;
  if (!isPurchased) {
    let tmp8 = GOOGLE === tmp6.APPLE_ADVANCED_COMMERCE && OTPACOMOrderExperiment.useConfig({ location: "CollectiblesPurchaseFlow" }).enabled;
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