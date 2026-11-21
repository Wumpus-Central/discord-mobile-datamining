// === Module 14251: HeadlessCollectiblesPurchaseFlow ===

// Module 14251 (HeadlessCollectiblesPurchaseFlow)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 2185 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import openProductDetailsActionSheet from "openProductDetailsActionSheet" /* 8918 */;
import ACOMExperiments from "ACOMExperiments" /* 8921 */;
import useProductPurchaseState from "useProductPurchaseState" /* 9038 */;
import NativeCheckoutStoreProviderDefault from "NativeCheckoutStoreProvider" /* 9246 */;
import NativePaymentContext from "NativePaymentContext" /* 9608 */;
import useCollectiblesExternalGatewayFacetDefault from "useCollectiblesExternalGatewayFacet" /* 13910 */;
import HeadlessCollectiblesPurchaseRunner from "HeadlessCollectiblesPurchaseRunner" /* 14252 */;
import noop from "module_19" /* 19 */;

require = fn;
const application_id = fn(1071).COLLECTIBLES_APPLICATION_ID;
const PaymentGateways = fn(1082).PaymentGateways;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/headless_components/HeadlessCollectiblesPurchaseFlow.tsx");

export default function HeadlessCollectiblesPurchaseFlow(arg0) {
  ({ product, analyticsLocations } = arg0);
  ({ attempt, onBuySettled, stageCollectibleChangeForEditProfile } = arg0);
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
      return ActionSheetActionCreatorsDefault.hideActionSheet(openProductDetailsActionSheet.PRODUCT_DETAILS_ACTION_SHEET_KEY);
    },
    checkoutAnalyticsFields: { is_gift: false, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id },
    children: null
  };
  items = [product.skuId];
  obj4.skuIds = items;
  obj2 = PlatformUtils;
  const obj5 = { is_gift: false, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id };
  obj4.children = jsx(HeadlessCollectiblesPurchaseRunner.HeadlessCollectiblesPurchaseRunner, { product, attempt, analyticsLocations, onBuySettled, stageCollectibleChangeForEditProfile });
  obj3.children = jsx(NativeCheckoutStoreProviderDefault, {
    headless: true,
    paymentGateway: GOOGLE,
    orderRequired: tmp7,
    skuIds: null,
    isGift: false,
    activeSubscription: null,
    initialExternalGatewayFacet: tmp4,
    onOrderRetryCancellation() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(openProductDetailsActionSheet.PRODUCT_DETAILS_ACTION_SHEET_KEY);
    },
    checkoutAnalyticsFields: { is_gift: false, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id },
    children: null
  }, product.skuId);
  return jsx(NativePaymentContext.NativePaymentContextProvider, { skuIDs: [], activeSubscription: null, children: null });
};