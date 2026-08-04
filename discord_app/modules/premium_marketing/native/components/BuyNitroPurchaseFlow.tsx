// discord_app/modules/premium_marketing/native/components/BuyNitroPurchaseFlow.tsx
import sum from "sum";
import _deletePaymentSource from "_deletePaymentSource";
import { useNativeCheckoutStore } from "context";
import usePremiumPlanPurchasedStore from "usePremiumPlanPurchasedStore";
import ME from "ME";
import { PaymentGateways } from "sum";
import { jsx } from "set";

let c10;
let c9;
let closure_12;
let closure_6;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function BuyNitroPurchaseRunner(item) {
  item = item.item;
  const analyticsLocations = item.analyticsLocations;
  const analyticsLoadId = item.analyticsLoadId;
  const hasEmittedPaymentFlowStartedRef = item.hasEmittedPaymentFlowStartedRef;
  const applicationId = item.applicationId;
  const expectedPriceString = item.expectedPriceString;
  const onExit = item.onExit;
  const onOrderPriceMismatch = item.onOrderPriceMismatch;
  const onHostSheetClose = item.onHostSheetClose;
  const onPaymentSuccess = item.onPaymentSuccess;
  const onPaymentDismiss = item.onPaymentDismiss;
  let c11;
  let c12;
  let handlePremiumPurchase;
  let closure_14;
  let tmp = expectedPriceString((orderRecord) => orderRecord.orderRecord);
  c11 = tmp;
  const tmp2 = expectedPriceString((orderRequired) => orderRequired.orderRequired);
  c12 = tmp2;
  handlePremiumPurchase = item(analyticsLoadId[7]).useHandlePremiumPurchase();
  closure_14 = applicationId.useRef(false);
  const items = [tmp, tmp2, handlePremiumPurchase, analyticsLoadId, hasEmittedPaymentFlowStartedRef, analyticsLocations, applicationId, item, expectedPriceString, onExit, onOrderPriceMismatch, onHostSheetClose, onPaymentSuccess, onPaymentDismiss];
  const effect = applicationId.useEffect(() => {
    function _runPurchase() {
      const self = this;
      const tmp = hasEmittedPaymentFlowStartedRef(function*() {
        if (c5 === 2) {
          c5 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_1 = tmp3;
                if (outer1_12) {
                  let priceString;
                  if (outer1_11 != null) {
                    const checkoutContextRecord = outer1_11.checkoutContextRecord;
                    if (checkoutContextRecord != null) {
                      let obj4 = outer2_0(6253);
                      const availablePlanForItems = checkoutContextRecord.getAvailablePlanForItems(obj4.getSubscriptionItemsForProduct(outer1_0.productId));
                      if (availablePlanForItems != null) {
                        priceString = availablePlanForItems.getPriceString();
                      }
                    }
                  }
                  let c0 = priceString;
                  if (priceString == null) {
                    c0 = null;
                  }
                  if (null != c5) {
                    if (null != tmp35) {
                      if (tmp35 !== c5) {
                        outer1_7(tmp35);
                        c5 = 3;
                        let obj1 = { value: null, done: true };
                        obj1[0] = undefined;
                        return obj1;
                      }
                    }
                  }
                }
                const obj7 = outer2_1(698);
                let obj2 = { from_step: null, to_step: null, subscription_plan_gateway_plan_id: null, sku_id: null };
                obj2[0] = outer2_0(6298).PaymentFlowStep.PLAN_SELECT;
                obj2[1] = outer2_0(6298).PaymentFlowStep.EXTERNAL_PAYMENT;
                obj2[2] = outer1_0.productId;
                obj2[3] = outer1_0;
                obj7.track(outer2_8.PAYMENT_FLOW_STEP, outer2_0(6298).getPaymentFlowStepAnalyticsFields(outer1_1, obj2));
                let c4 = 1;
                const obj3 = { productId: null, analyticsLocation: null, analyticsLoadId: null, analyticsLocations: null, orderId: null };
                obj3[0] = outer1_0.productId;
                obj3[1] = outer1_1.location;
                obj3[2] = c2;
                obj3[3] = outer1_1;
                let id;
                if (outer1_11 != null) {
                  id = outer1_11.id;
                }
                obj3[4] = id;
                c2 = 2;
                c5 = 1;
                obj4 = { value: null, done: false };
                obj4[0] = outer1_13(obj3);
                return obj4;
              }
            } else {
              if (1 === tmp7) {
                c4 = 0;
                if (sum instanceof outer2_1(6256)) {
                  obj1 = outer2_0(4513);
                  const subscriptions = obj1.fetchSubscriptions();
                  obj2 = outer2_1(4533);
                  const obj5 = { title: null, body: null, hideActionSheet: true };
                  const intl = outer2_0(1236).intl;
                  obj5[0] = intl.string(outer2_0(1236).t["U+H+kd"]);
                  const intl2 = outer2_0(1236).intl;
                  obj5[1] = intl2.string(outer2_0(1236).t.F9ktNa);
                  obj2.show(obj5);
                }
                outer1_6();
                c5 = 3;
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                c4 = 0;
              }
              c4 = 0;
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          } catch (tmp55) {
            sum = tmp55;
            if (tmp4 === c4) {
              c5 = tmp2;
              throw tmp55;
            } else {
              c2 = tmp;
            }
          }
        }
      });
      const _runPurchase = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    if (!ref.current) {
      if (!_undefined2) {
        tmp.current = true;
        let obj = item(analyticsLoadId[8]);
        let result = obj.isMobileWebRedirectCheckoutEnabled();
        let obj1 = item(analyticsLoadId[9]);
        let obj2 = analyticsLocations(analyticsLoadId[9]);
        result1 = obj1.castPremiumSubscriptionAsSkuId(obj2.getSkuIdForPremiumType(result1.premiumTier));
        let obj3 = item(analyticsLoadId[10]);
        obj = { analyticsLoadId: null, analyticsLocation: null, analyticsLocations: null };
        obj[0] = _runPurchase;
        obj = { object: null, objectType: null, page: null, section: null };
        obj[0] = onPaymentSuccess.BUTTON_CTA;
        obj[1] = onPaymentDismiss.BUY;
        obj[2] = _undefined.USER_SETTINGS;
        obj[3] = _undefined2.SETTINGS_PREMIUM;
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
          if (closure_8 != null) {
            tmp();
          }
          const result = result1(_runPurchase[12]).presentBuyNitroPurchaseSuccess(result1.premiumTier);
          if (closure_9 != null) {
            tmp4(arg0);
          }
        };
        obj2[2] = onPaymentDismiss;
        onOrderPriceMismatch(obj2);
        if (result) {
          const tmp5Result1 = tmp5(tmp6[13]);
          obj3 = { planId: null, isGift: false, loadId: null };
          obj3[0] = tmp9.basePlanId;
          obj3[2] = tmp11;
          const result3 = tmp5Result1.goToStandalonePremiumCheckoutFromMobileApp("premium_nitro_marketing_page", obj3, () => {
            outer1_6();
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
({ AnalyticEvents: metroImportAll, AnalyticsObjects: c9, AnalyticsObjectTypes: c10, AnalyticsPages: unpackModuleId, AnalyticsSections: closure_12 } = ME);
let result = require("context").fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroPurchaseFlow.tsx");

export default function BuyNitroPurchaseFlow(item) {
  let analyticsLoadId;
  let analyticsLocations;
  let applicationId;
  let expectedPriceString;
  let hasEmittedPaymentFlowStartedRef;
  let onHostSheetClose;
  let onOrderPriceMismatch;
  let onPaymentDismiss;
  let onPaymentSuccess;
  item = item.item;
  const onExit = item.onExit;
  ({ analyticsLocations, analyticsLoadId, hasEmittedPaymentFlowStartedRef, applicationId, expectedPriceString, onOrderPriceMismatch, onHostSheetClose, onPaymentSuccess, onPaymentDismiss } = item);
  const NitroACOMSubscriptionExperiment = item(6505).NitroACOMSubscriptionExperiment;
  const enabled = NitroACOMSubscriptionExperiment.useConfig({ location: "PremiumPlanSelectionActionSheetWithOrderCTX" }).enabled;
  let obj = item(500);
  if (obj.isIOS()) {
    if (enabled) {
      let APPLE = tmp3.APPLE_ADVANCED_COMMERCE;
      let tmp5 = tmp3;
    } else {
      APPLE = tmp3.APPLE;
      tmp5 = tmp3;
    }
  } else {
    const GOOGLE = tmp3.GOOGLE;
    let tmpResult = tmp(500);
    tmpResult = tmp(6245);
    const premiumTrialOffer = tmpResult.usePremiumTrialOffer();
    let tmp10;
    if (!tmp8) {
      let trial_id;
      if (premiumTrialOffer != null) {
        trial_id = premiumTrialOffer.trial_id;
      }
      tmp10 = trial_id;
    }
    let tmp14;
    if (null != tmp10) {
      obj = { subscription_preview: null };
      obj = { subscription_trial_id: null };
      obj[0] = tmp10;
      obj[0] = obj;
      tmp14 = obj;
    }
    const items = [item.productId];
    const memo = React.useMemo(() => {
      const subscriptionItemsForProduct = item(outer1_2[16]).getSubscriptionItemsForProduct(item.productId);
      return subscriptionItemsForProduct.map((planId) => {
        const obj = { subscriptionPlanId: planId.planId, skuId: null, quantity: null };
        const obj2 = callback(3839);
        obj[1] = obj2.castPremiumSubscriptionAsSkuId(callback2(3839).getSkuIdForPlan(planId.planId));
        obj[2] = planId.quantity;
        return obj;
      });
    }, items);
    const obj1 = { paymentGateway: null, orderRequired: null, skuIds: null, defaultPlans: null, isGift: false, activeSubscription: null, initialSubscriptionFacet: null, onOrderRetryCancellation: null, children: null };
    obj1[0] = GOOGLE;
    obj1[1] = GOOGLE === tmp3.APPLE_ADVANCED_COMMERCE;
    obj1[2] = [];
    obj1[3] = memo;
    obj1[6] = tmp14;
    obj1[7] = onExit;
    let obj2 = { item: null, analyticsLocations: null, analyticsLoadId: null, hasEmittedPaymentFlowStartedRef: null, applicationId: null, expectedPriceString: null, onExit: null, onOrderPriceMismatch: null, onHostSheetClose: null, onPaymentSuccess: null, onPaymentDismiss: null };
    obj2[0] = item;
    obj2[1] = analyticsLocations;
    obj2[2] = analyticsLoadId;
    obj2[3] = hasEmittedPaymentFlowStartedRef;
    obj2[4] = applicationId;
    obj2[5] = expectedPriceString;
    obj2[6] = onExit;
    obj2[7] = onOrderPriceMismatch;
    obj2[8] = onHostSheetClose;
    obj2[9] = onPaymentSuccess;
    obj2[10] = onPaymentDismiss;
    tmp8 = tmpResult.isIOS() && enabled;
    obj1[8] = <BuyNitroPurchaseRunner item={null} analyticsLocations={null} analyticsLoadId={null} hasEmittedPaymentFlowStartedRef={null} applicationId={null} expectedPriceString={null} onExit={null} onOrderPriceMismatch={null} onHostSheetClose={null} onPaymentSuccess={null} onPaymentDismiss={null} />;
    return jsx(importDefault(6668), { paymentGateway: null, orderRequired: null, skuIds: null, defaultPlans: null, isGift: false, activeSubscription: null, initialSubscriptionFacet: null, onOrderRetryCancellation: null, children: null });
  }
};