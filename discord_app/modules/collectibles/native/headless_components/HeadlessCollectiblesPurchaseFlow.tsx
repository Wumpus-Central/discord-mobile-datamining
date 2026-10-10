// === Module 13441: HeadlessCollectiblesPurchaseFlow ===

// Module 13441 (HeadlessCollectiblesPurchaseFlow)
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4782 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import useProductPurchaseState from "useProductPurchaseState" /* 9044 */;
import ACOMExperiments from "ACOMExperiments" /* 9397 */;
import NativeCheckoutStoreProviderDefault from "NativeCheckoutStoreProvider" /* 10162 */;
import NativePaymentContext from "NativePaymentContext" /* 10175 */;
import useCollectiblesExternalGatewayFacetDefault from "useCollectiblesExternalGatewayFacet" /* 12704 */;
import HeadlessCollectiblesPurchaseRunner from "HeadlessCollectiblesPurchaseRunner" /* 13442 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const application_id = fn(1085).COLLECTIBLES_APPLICATION_ID;
const PaymentGateways = fn(1096).PaymentGateways;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/headless_components/HeadlessCollectiblesPurchaseFlow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function HeadlessCollectiblesPurchaseFlow(arg0) {
  const cResult = c.c(24);
  ({ product, attempt, analyticsLocations, onBuySettled, stageCollectibleChangeForEditProfile } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "CollectiblesPurchaseFlow" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const OTPACOMOrderExperiment = ACOMExperiments.OTPACOMOrderExperiment;
  const enabled = OTPACOMOrderExperiment.useConfig(first).enabled;
  const isPurchased = useProductPurchaseState.useProductPurchaseState(product).isPurchased;
  useCollectiblesExternalGatewayFacetDefault(product);
  const tmpResult = useProductPurchaseState;
  if (tmpResult2.isIOS()) {
    let GOOGLE = PaymentGateways.APPLE_ADVANCED_COMMERCE;
  } else {
    GOOGLE = PaymentGateways.GOOGLE;
  }
  if (cResult[1] === isPurchased) {
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [];
      cResult[4] = items;
    }
    if (cResult[5] !== product.skuId) {
      const items1 = [product.skuId];
      cResult[5] = product.skuId;
      cResult[6] = items1;
    }
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor() {
          obj = closure_1_1(closure_1_2[11]);
          return obj.hideActionSheet(closure_1_0(closure_1_2[12]).PRODUCT_DETAILS_ACTION_SHEET_KEY);
        }
      }
      cResult[7] = S;
    } else {
      class S {
        constructor() {
          obj = closure_1_1(closure_1_2[11]);
          return obj.hideActionSheet(closure_1_0(closure_1_2[12]).PRODUCT_DETAILS_ACTION_SHEET_KEY);
        }
      }
    }
    if (cResult[8] === analyticsLocations) {
      class S {
        constructor() {
          obj = closure_1_1(closure_1_2[11]);
          return obj.hideActionSheet(closure_1_0(closure_1_2[12]).PRODUCT_DETAILS_ACTION_SHEET_KEY);
        }
      }
      if (cResult[11] === analyticsLocations) {
        class S {
          constructor() {
            obj = closure_1_1(closure_1_2[11]);
            return obj.hideActionSheet(closure_1_0(closure_1_2[12]).PRODUCT_DETAILS_ACTION_SHEET_KEY);
          }
        }
      }
      const obj3 = { product, attempt, analyticsLocations, onBuySettled, stageCollectibleChangeForEditProfile };
      const tmp19 = jsx(HeadlessCollectiblesPurchaseRunner.HeadlessCollectiblesPurchaseRunner, { product, attempt, analyticsLocations, onBuySettled, stageCollectibleChangeForEditProfile });
      cResult[11] = analyticsLocations;
      cResult[12] = attempt;
      cResult[13] = onBuySettled;
      cResult[14] = product;
      cResult[15] = stageCollectibleChangeForEditProfile;
      cResult[16] = tmp19;
    }
    const obj4 = { is_gift: false, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id };
    cResult[8] = analyticsLocations;
    cResult[9] = product.skuId;
    cResult[10] = obj4;
  }
  let tmp9 = !isPurchased;
  if (!isPurchased) {
    class S {
      constructor() {
        obj = closure_1_1(closure_1_2[11]);
        return obj.hideActionSheet(closure_1_0(closure_1_2[12]).PRODUCT_DETAILS_ACTION_SHEET_KEY);
      }
    }
    if (!tmp10) {
      class S {
        constructor() {
          obj = closure_1_1(closure_1_2[11]);
          return obj.hideActionSheet(closure_1_0(closure_1_2[12]).PRODUCT_DETAILS_ACTION_SHEET_KEY);
        }
      }
      if (result) {
        class S {
          constructor() {
            obj = closure_1_1(closure_1_2[11]);
            return obj.hideActionSheet(closure_1_0(closure_1_2[12]).PRODUCT_DETAILS_ACTION_SHEET_KEY);
          }
        }
        result = obj5.isGooglePlayBillingSupported();
      }
    }
    tmp9 = tmp10;
  }
  cResult[1] = isPurchased;
  cResult[2] = enabled;
  cResult[3] = tmp9;
  tmpResult2 = PlatformUtils;
}) : (function HeadlessCollectiblesPurchaseFlow(arg0) {
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
      return ActionSheetActionCreatorsDefault.hideActionSheet(require("openProductDetailsActionSheet").PRODUCT_DETAILS_ACTION_SHEET_KEY);
    },
    checkoutAnalyticsFields: { is_gift: false, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id },
    children: null
  };
  const items = [product.skuId];
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
      return ActionSheetActionCreatorsDefault.hideActionSheet(require("openProductDetailsActionSheet").PRODUCT_DETAILS_ACTION_SHEET_KEY);
    },
    checkoutAnalyticsFields: { is_gift: false, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id },
    children: null
  }, product.skuId);
  return jsx(NativePaymentContext.NativePaymentContextProvider, { skuIDs: [], activeSubscription: null, children: null });
});