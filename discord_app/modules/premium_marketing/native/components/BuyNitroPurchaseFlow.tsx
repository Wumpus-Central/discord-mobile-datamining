// discord_app/modules/premium_marketing/native/components/BuyNitroPurchaseFlow.tsx
import NativeCheckoutStoreProviderDefault from "../../../checkout/native/stores/NativeCheckoutStoreProvider.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { useNativeCheckoutStore } from "../../../checkout/native/NativeCheckoutStore.tsx";
import usePremiumPlanPurchasedStore from "../../../premium/native/PremiumPlanPurchasedStore.tsx";
import ME from "../../../../Constants.tsx";
import { PaymentGateways } from "../../../../../discord_common/js/shared/Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
function BuyNitroPurchaseRunner(item) {
  item = item.item;
  const analyticsLocations = item.analyticsLocations;
  const analyticsLoadId = item.analyticsLoadId;
  const hasEmittedPaymentFlowStartedRef = item.hasEmittedPaymentFlowStartedRef;
  const applicationId = item.applicationId;
  const expectedPriceString = item.expectedPriceString;
  const stagedTrialId = item.stagedTrialId;
  const onExit = item.onExit;
  const onOrderPriceMismatch = item.onOrderPriceMismatch;
  const onOrderTrialUnavailable = item.onOrderTrialUnavailable;
  const onHostSheetClose = item.onHostSheetClose;
  const onPaymentSuccess = item.onPaymentSuccess;
  const onPaymentDismiss = item.onPaymentDismiss;
  closure_13 = undefined;
  closure_14 = undefined;
  let handlePremiumPurchase;
  closure_16 = undefined;
  let tmp = expectedPriceString((orderRecord) => orderRecord.orderRecord);
  closure_13 = tmp;
  const tmp2 = expectedPriceString((orderRequired) => orderRequired.orderRequired);
  closure_14 = tmp2;
  handlePremiumPurchase = item(analyticsLoadId[7]).useHandlePremiumPurchase();
  closure_16 = applicationId.useRef(false);
  const items = [tmp, tmp2, handlePremiumPurchase, analyticsLoadId, hasEmittedPaymentFlowStartedRef, analyticsLocations, applicationId, item, expectedPriceString, stagedTrialId, onExit, onOrderPriceMismatch, onOrderTrialUnavailable, onHostSheetClose, onPaymentSuccess, onPaymentDismiss];
  const effect = applicationId.useEffect(() => {
    function _runPurchase() {
      const self = this;
      const tmp = hasEmittedPaymentFlowStartedRef(function*() {
        closure_1 = tmp3;
        if (closure_1_14) {
          let priceString;
          if (closure_1_13 != null) {
            const checkoutContextRecord = tmp31.checkoutContextRecord;
            if (checkoutContextRecord != null) {
              let obj4 = closure_2_0(7152);
              const availablePlanForItems = checkoutContextRecord.getAvailablePlanForItems(obj4.getSubscriptionItemsForProduct(closure_1_0.productId));
              if (availablePlanForItems != null) {
                priceString = availablePlanForItems.getPriceString();
              }
            }
          }
          c0 = priceString;
          if (priceString == null) {
            c0 = null;
          }
          if (null != c5) {
            if (null != tmp36) {
              if (tmp36 !== c5) {
                closure_1_8(tmp36);
                c5 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = undefined;
                return obj1;
              }
            }
          }
          if (null != closure_1_6) {
            let subscriptionTrialId;
            if (tmp31 != null) {
              const subscriptionFacet = tmp31.subscriptionFacet;
              if (subscriptionFacet != null) {
                const subscriptionPreview = subscriptionFacet.subscriptionPreview;
                if (subscriptionPreview != null) {
                  subscriptionTrialId = subscriptionPreview.subscriptionTrialId;
                }
              }
            }
            if (subscriptionTrialId !== tmp37) {
              closure_1_9();
              c5 = 3;
              let obj2 = { value: null, done: true };
              obj2[0] = undefined;
              return obj2;
            }
          }
        }
        let obj6 = closure_2_1(698);
        const obj3 = { from_step: null, to_step: null, subscription_plan_gateway_plan_id: null, sku_id: null };
        obj3[0] = closure_2_0(10456).PaymentFlowStep.PLAN_SELECT;
        obj3[1] = closure_2_0(10456).PaymentFlowStep.EXTERNAL_PAYMENT;
        obj3[2] = closure_1_0.productId;
        obj3[3] = closure_1_0;
        obj6.track(closure_2_8.PAYMENT_FLOW_STEP, closure_2_0(10456).getPaymentFlowStepAnalyticsFields(closure_1_1, obj3));
        c4 = 1;
        obj4 = { productId: null, analyticsLocation: null, analyticsLoadId: null, analyticsLocations: null, orderId: null };
        obj4[0] = closure_1_0.productId;
        obj4[1] = closure_1_1.location;
        obj4[2] = c2;
        obj4[3] = closure_1_1;
        if (closure_1_13 != null) {
          const id = closure_1_13.id;
        }
        obj4[4] = id;
        yield closure_1_15(obj4);
        if (1 === tmp7) {
          c4 = 0;
          if (closure_3 instanceof closure_2_1(10481)) {
            obj1 = closure_2_0(4837);
            const subscriptions = obj1.fetchSubscriptions();
            obj2 = closure_2_1(4858);
            obj6 = { title: null, body: null, hideActionSheet: true };
            const intl = closure_2_0(1236).intl;
            obj6[0] = intl.string(closure_2_0(1236).t["U+H+kd"]);
            const intl2 = closure_2_0(1236).intl;
            obj6[1] = intl2.string(closure_2_0(1236).t.F9ktNa);
            obj2.show(obj6);
          }
          closure_1_7();
          c5 = 3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          c4 = 0;
        }
        c4 = 0;
        return arg1;
      });
      closure_2 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    if (!ref.current) {
      if (!closure_14) {
        tmp.current = true;
        let obj = item(analyticsLoadId[8]);
        let result = obj.isMobileWebRedirectCheckoutEnabled();
        obj1 = item(analyticsLoadId[9]);
        let obj2 = analyticsLocations(analyticsLoadId[9]);
        result1 = obj1.castPremiumSubscriptionAsSkuId(obj2.getSkuIdForPremiumType(result1.premiumTier));
        let obj3 = item(analyticsLoadId[10]);
        obj = { analyticsLoadId: null, analyticsLocation: null, analyticsLocations: null };
        obj[0] = _runPurchase;
        obj = { object: null, objectType: null, page: null, section: null };
        obj[0] = onOrderTrialUnavailable.BUTTON_CTA;
        obj[1] = onHostSheetClose.BUY;
        obj[2] = onPaymentSuccess.USER_SETTINGS;
        obj[3] = onPaymentDismiss.SETTINGS_PREMIUM;
        obj[1] = obj;
        obj[2] = basePurchaseFlowAnalyticsFields;
        basePurchaseFlowAnalyticsFields = obj3.getBasePurchaseFlowAnalyticsFields(obj);
        if (!hasEmittedPaymentFlowStartedRef.current) {
          hasEmittedPaymentFlowStartedRef.current = true;
          let tmp5Result = tmp5(tmp6[11]);
          obj1 = {};
          const merged = Object.assign(basePurchaseFlowAnalyticsFields);
          obj1.application_id = applicationId;
          obj1.subscription_plan_id = tmp9.basePlanId;
          obj1.sku_id = result1;
          let customCheckoutFlowForAnalytics;
          if (result) {
            tmp5Result = tmp5(tmp6[8]);
            customCheckoutFlowForAnalytics = tmp5Result.getCustomCheckoutFlowForAnalytics();
          }
          obj1.custom_checkout_flow = customCheckoutFlowForAnalytics;
          const result2 = tmp5Result.trackPaymentFlowStartedAnalyticsAndCTP(obj1);
        }
        obj2 = { productId: null, onPaymentSuccess: null, onPaymentDismiss: null };
        obj2[0] = result1.productId;
        obj2[1] = function onPaymentSuccess(arg0) {
          if (closure_10 != null) {
            tmp();
          }
          const result = result1(_runPurchase[12]).presentBuyNitroPurchaseSuccess(result1.premiumTier);
          if (closure_11 != null) {
            tmp4(arg0);
          }
        };
        obj2[2] = onPaymentDismiss;
        onExit(obj2);
        if (result) {
          const tmp5Result1 = tmp5(tmp6[13]);
          obj3 = { planId: null, isGift: false, loadId: null };
          obj3[0] = tmp9.basePlanId;
          obj3[2] = tmp11;
          const result3 = tmp5Result1.goToStandalonePremiumCheckoutFromMobileApp("premium_nitro_marketing_page", obj3, () => {
            closure_1_6();
            callback();
            if (callback2 != null) {
              callback2();
            }
          }, () => {
            let obj = basePurchaseFlowAnalyticsFields(_runPurchase[14]);
            obj = { title: null, body: null, hideActionSheet: true };
            const intl = result1(_runPurchase[15]).intl;
            obj[0] = intl.string(result1(_runPurchase[15]).t.NrBVjw);
            const intl2 = result1(_runPurchase[15]).intl;
            obj[1] = intl2.string(result1(_runPurchase[15]).t["gD+grx"]);
            obj.show(obj);
            callback();
          });
        } else {
          (function runPurchase() {
            const self = this;
            const apply = _runPurchase.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
        }
        tmp11 = _runPurchase;
      }
    }
  }, items);
  return null;
}
({ reset: closure_6, setInitiatedPurchaseFromNewFlow: error } = usePremiumPlanPurchasedStore);
({ AnalyticEvents: closure_8, AnalyticsObjects: c9, AnalyticsObjectTypes: c10, AnalyticsPages: unpackModuleId, AnalyticsSections: closure_12 } = ME);
let result = require("set").fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroPurchaseFlow.tsx");

export default function BuyNitroPurchaseFlow(item) {
  item = item.item;
  ({ stagedTrialId, onExit } = item);
  ({ analyticsLocations, analyticsLoadId, hasEmittedPaymentFlowStartedRef, applicationId, expectedPriceString, onOrderPriceMismatch, onOrderTrialUnavailable, onHostSheetClose, onPaymentSuccess, onPaymentDismiss } = item);
  const NitroACOMSubscriptionExperiment = item(8220).NitroACOMSubscriptionExperiment;
  let obj = item(500);
  if (obj.isIOS()) {
    if (NitroACOMSubscriptionExperiment.useConfig({ location: "BuyNitroPurchaseFlow" }).enabled) {
      let APPLE = tmp2.APPLE_ADVANCED_COMMERCE;
      let tmp4 = tmp2;
    } else {
      APPLE = tmp2.APPLE;
      tmp4 = tmp2;
    }
  } else {
    const GOOGLE = tmp2.GOOGLE;
    let tmp8;
    if (null != stagedTrialId) {
      obj = { subscription_preview: null };
      obj = { subscription_trial_id: null };
      obj[0] = stagedTrialId;
      obj[0] = obj;
      tmp8 = obj;
    }
    const items = [item.productId];
    const memo = React.useMemo(() => {
      const subscriptionItemsForProduct = item(closure_1_2[16]).getSubscriptionItemsForProduct(item.productId);
      return subscriptionItemsForProduct.map((planId) => {
        const obj = { subscriptionPlanId: planId.planId, skuId: null, quantity: null };
        const obj2 = callback(4139);
        obj[1] = obj2.castPremiumSubscriptionAsSkuId(callback2(4139).getSkuIdForPlan(planId.planId));
        obj[2] = planId.quantity;
        return obj;
      });
    }, items);
    obj1 = { paymentGateway: null, orderRequired: null, skuIds: null, defaultPlans: null, isGift: false, activeSubscription: null, initialSubscriptionFacet: null, onOrderRetryCancellation: null, children: null };
    obj1[0] = GOOGLE;
    obj1[1] = GOOGLE === tmp2.APPLE_ADVANCED_COMMERCE;
    obj1[2] = [];
    obj1[3] = memo;
    obj1[6] = tmp8;
    obj1[7] = onExit;
    let obj2 = { item: null, analyticsLocations: null, analyticsLoadId: null, hasEmittedPaymentFlowStartedRef: null, applicationId: null, expectedPriceString: null, stagedTrialId: null, onExit: null, onOrderPriceMismatch: null, onOrderTrialUnavailable: null, onHostSheetClose: null, onPaymentSuccess: null, onPaymentDismiss: null };
    obj2[0] = item;
    obj2[1] = analyticsLocations;
    obj2[2] = analyticsLoadId;
    obj2[3] = hasEmittedPaymentFlowStartedRef;
    obj2[4] = applicationId;
    obj2[5] = expectedPriceString;
    obj2[6] = stagedTrialId;
    obj2[7] = onExit;
    obj2[8] = onOrderPriceMismatch;
    obj2[9] = onOrderTrialUnavailable;
    obj2[10] = onHostSheetClose;
    obj2[11] = onPaymentSuccess;
    obj2[12] = onPaymentDismiss;
    obj1[8] = <BuyNitroPurchaseRunner item={null} analyticsLocations={null} analyticsLoadId={null} hasEmittedPaymentFlowStartedRef={null} applicationId={null} expectedPriceString={null} stagedTrialId={null} onExit={null} onOrderPriceMismatch={null} onOrderTrialUnavailable={null} onHostSheetClose={null} onPaymentSuccess={null} onPaymentDismiss={null} />;
    return jsx(NativeCheckoutStoreProviderDefault, { paymentGateway: null, orderRequired: null, skuIds: null, defaultPlans: null, isGift: false, activeSubscription: null, initialSubscriptionFacet: null, onOrderRetryCancellation: null, children: null });
  }
};