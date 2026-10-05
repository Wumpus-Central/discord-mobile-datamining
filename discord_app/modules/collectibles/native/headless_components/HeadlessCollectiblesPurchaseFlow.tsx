// === Module 12999: HeadlessCollectiblesPurchaseFlow ===

// Module 12999 (HeadlessCollectiblesPurchaseFlow)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 1096 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4541 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import useProductPurchaseState from "useProductPurchaseState" /* 8496 */;
import ACOMExperiments from "ACOMExperiments" /* 8870 */;
import NativeCheckoutStoreProviderDefault from "NativeCheckoutStoreProvider" /* 10538 */;
import NativePaymentContext from "NativePaymentContext" /* 10551 */;
import useCollectiblesExternalGatewayFacetDefault from "useCollectiblesExternalGatewayFacet" /* 10745 */;
import HeadlessCollectiblesPurchaseRunner from "HeadlessCollectiblesPurchaseRunner" /* 13000 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const application_id = Constants.COLLECTIBLES_APPLICATION_ID;
const PaymentGateways = Constants2.PaymentGateways;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let analyticsLocations;
  let attempt;
  let first;
  let onBuySettled;
  let product;
  let result;
  let stageCollectibleChangeForEditProfile;
  let obj = react2;
  const cResult = obj.c(24);
  ({ product, attempt, analyticsLocations, onBuySettled, stageCollectibleChangeForEditProfile } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "CollectiblesPurchaseFlow" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const OTPACOMOrderExperiment = ACOMExperiments.OTPACOMOrderExperiment;
  const enabled = OTPACOMOrderExperiment.useConfig(first).enabled;
  const tmpResult = useProductPurchaseState;
  const isPurchased = tmpResult.useProductPurchaseState(product).isPurchased;
  useCollectiblesExternalGatewayFacetDefault(product);
  const tmpResult2 = PlatformUtils;
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
      cResult[11] = analyticsLocations;
      cResult[12] = attempt;
      cResult[13] = onBuySettled;
      cResult[14] = product;
      cResult[15] = stageCollectibleChangeForEditProfile;
      cResult[16] = jsx(HeadlessCollectiblesPurchaseRunner.HeadlessCollectiblesPurchaseRunner, { product, attempt, analyticsLocations, onBuySettled, stageCollectibleChangeForEditProfile });
      const tmp19 = jsx(HeadlessCollectiblesPurchaseRunner.HeadlessCollectiblesPurchaseRunner, { product, attempt, analyticsLocations, onBuySettled, stageCollectibleChangeForEditProfile });
    }
    const obj4 = { is_gift: false, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id };
    cResult[8] = analyticsLocations;
    cResult[9] = product.skuId;
    cResult[10] = obj4;
  }
  let tmp9 = !isPurchased;
  if (tmp9) {
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
}) : ((arg0) => {
  let GOOGLE;
  let analyticsLocations;
  let attempt;
  let onBuySettled;
  let product;
  let stageCollectibleChangeForEditProfile;
  let tmp6;
  ({ product, analyticsLocations } = arg0);
  ({ attempt, onBuySettled, stageCollectibleChangeForEditProfile } = arg0);
  const OTPACOMOrderExperiment = ACOMExperiments.OTPACOMOrderExperiment;
  const enabled = OTPACOMOrderExperiment.useConfig({ location: "CollectiblesPurchaseFlow" }).enabled;
  let obj = useProductPurchaseState;
  const isPurchased = obj.useProductPurchaseState(product).isPurchased;
  const tmp4 = useCollectiblesExternalGatewayFacetDefault(product);
  const obj2 = PlatformUtils;
  if (obj2.isIOS()) {
    GOOGLE = PaymentGateways.APPLE_ADVANCED_COMMERCE;
    tmp6 = PaymentGateways;
  } else {
    GOOGLE = PaymentGateways.GOOGLE;
    tmp6 = PaymentGateways;
  }
  let tmp7 = !isPurchased;
  if (tmp7) {
    let tmp8 = GOOGLE === tmp6.APPLE_ADVANCED_COMMERCE && enabled;
    if (!tmp8) {
      let result = GOOGLE === tmp6.GOOGLE;
      if (result) {
        const tmpResult = BillingPlatformUtils;
        result = tmpResult.isGooglePlayBillingSupported();
      }
      tmp8 = result;
    }
    tmp7 = tmp8;
  }
  const NativePaymentContextProvider = NativePaymentContext.NativePaymentContextProvider;
  const items = [product.skuId];
  const obj5 = { is_gift: false, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id };
  NativeCheckoutStoreProviderDefault;
  return <NativePaymentContextProvider skuIDs={[]} activeSubscription={null}>{null}</NativePaymentContextProvider>;
});
let result = size.fileFinishedImporting("modules/collectibles/native/headless_components/HeadlessCollectiblesPurchaseFlow.tsx");

export default tmp3;