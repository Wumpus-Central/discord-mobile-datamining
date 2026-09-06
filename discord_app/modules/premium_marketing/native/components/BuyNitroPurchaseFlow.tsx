// discord_app/modules/premium_marketing/native/components/BuyNitroPurchaseFlow.tsx
import PremiumBundledPlansUtils from "../../../premium/native/PremiumBundledPlansUtils.tsx";
import NativeCheckoutStoreProviderDefault from "../../../checkout/native/stores/NativeCheckoutStoreProvider.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function BuyNitroPurchaseRunner(item) {
  item = item.item;
  let analyticsLocations = item.analyticsLocations;
  let analyticsLoadId = item.analyticsLoadId;
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
  let tmp = expectedPriceString((orderRecord) => orderRecord.orderRecord);
  closure_13 = tmp;
  const tmp2 = expectedPriceString((orderRequired) => orderRequired.orderRequired);
  closure_14 = tmp2;
  const handlePremiumPurchase = item(analyticsLoadId[7]).useHandlePremiumPurchase();
  applicationId.useRef(false);
  const items = [
    tmp,
    tmp2,
    handlePremiumPurchase,
    analyticsLoadId,
    hasEmittedPaymentFlowStartedRef,
    analyticsLocations,
    applicationId,
    item,
    expectedPriceString,
    stagedTrialId,
    onExit,
    onOrderPriceMismatch,
    onOrderTrialUnavailable,
    onHostSheetClose,
    onPaymentSuccess,
    onPaymentDismiss,
  ];
  const effect = applicationId.useEffect(() => {
    analyticsLoadId = function _runPurchase() {
      const self = this;
      const tmp = asyncGeneratorStep(async () => {
        analyticsLocations = tmp3;
        if (closure_1_14) {
          let priceString;
          if (id != null) {
            const checkoutContextRecord = tmp31.checkoutContextRecord;
            if (checkoutContextRecord != null) {
              let obj4 = sku_id(7409);
              const availablePlanForItems = checkoutContextRecord.getAvailablePlanForItems(
                obj4.getSubscriptionItemsForProduct(_null.productId),
              );
              if (availablePlanForItems != null) {
                priceString = availablePlanForItems.getPriceString();
              }
            }
          }
          _null = priceString;
          if (priceString == null) {
            _null = null;
          }
          if (null != c5) {
            if (null != tmp36) {
              if (tmp36 !== c5) {
                constants(tmp36);
                c5 = 3;
                let obj1 = { value: undefined, done: true };
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
              let obj2 = { value: undefined, done: true };
              return obj2;
            }
          }
        }
        let obj6 = basePurchaseFlowAnalyticsFields(1242);
        obj6.track(
          constants.PAYMENT_FLOW_STEP,
          sku_id(10663).getPaymentFlowStepAnalyticsFields(basePurchaseFlowAnalyticsFields, {
            from_step: sku_id(10663).PaymentFlowStep.PLAN_SELECT,
            to_step: sku_id(10663).PaymentFlowStep.EXTERNAL_PAYMENT,
            subscription_plan_gateway_plan_id: _null.productId,
            sku_id,
          }),
        );
        obj4 = {
          productId: _null.productId,
          analyticsLocation: basePurchaseFlowAnalyticsFields.location,
          analyticsLoadId,
          analyticsLocations,
          orderId: null,
        };
        if (id != null) {
          id = id.id;
        }
        obj4.orderId = id;
        await closure_1_15(obj4);
        if (1 === tmp7) {
          c4 = 0;
          if (closure_3 instanceof basePurchaseFlowAnalyticsFields(10704)) {
            obj1 = sku_id(4884);
            const subscriptions = obj1.fetchSubscriptions();
            obj2 = basePurchaseFlowAnalyticsFields(4905);
            obj6 = { title: null, body: null, hideActionSheet: true };
            const intl = sku_id(1114).intl;
            obj6.title = intl.string(sku_id(1114).t["U+H+kd"]);
            const intl2 = sku_id(1114).intl;
            obj6.body = intl2.string(sku_id(1114).t.F9ktNa);
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
        return arg1;
      });
      dependencyMap = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    if (!ref.current) {
      if (!closure_14) {
        tmp.current = true;
        let obj = item(analyticsLoadId[8]);
        let result = obj.isMobileWebRedirectCheckoutEnabled();
        let obj1 = item(analyticsLoadId[9]);
        let obj2 = analyticsLocations(analyticsLoadId[9]);
        result1 = obj1.castPremiumSubscriptionAsSkuId(obj2.getSkuIdForPremiumType(result1.premiumTier));
        let obj3 = item(analyticsLoadId[10]);
        obj = { analyticsLoadId, analyticsLocation: null, analyticsLocations: null };
        obj = {
          object: onOrderTrialUnavailable.BUTTON_CTA,
          objectType: onHostSheetClose.BUY,
          page: onPaymentSuccess.USER_SETTINGS,
          section: onPaymentDismiss.SETTINGS_PREMIUM,
        };
        obj.analyticsLocation = obj;
        obj.analyticsLocations = basePurchaseFlowAnalyticsFields;
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
        obj2 = {
          productId: result1.productId,
          onPaymentSuccess(arg0) {
            if (onHostSheetClose != null) {
              tmp();
            }
            const result = item(analyticsLoadId[12]).presentBuyNitroPurchaseSuccess(result1.premiumTier);
            if (onPaymentSuccess != null) {
              tmp4(arg0);
            }
          },
          onPaymentDismiss,
        };
        onExit(obj2);
        if (result) {
          const tmp5Result1 = tmp5(tmp6[13]);
          obj3 = { planId: tmp9.basePlanId, isGift: false, loadId: tmp11 };
          const result3 = tmp5Result1.goToStandalonePremiumCheckoutFromMobileApp(
            "premium_nitro_marketing_page",
            obj3,
            () => {
              stagedTrialId();
              onExit();
              if (onHostSheetClose != null) {
                onHostSheetClose();
              }
            },
            () => {
              analyticsLocations(analyticsLoadId[14]);
              const obj = { title: null, body: null, hideActionSheet: true };
              const intl = item(analyticsLoadId[15]).intl;
              obj.title = intl.string(item(analyticsLoadId[15]).t.NrBVjw);
              const intl2 = item(analyticsLoadId[15]).intl;
              obj.body = intl2.string(item(analyticsLoadId[15]).t["gD+grx"]);
              obj.show(obj);
              onExit();
            },
          );
        } else {
          (function runPurchase() {
            const self = this;
            const apply = closure_2.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
        }
        tmp11 = analyticsLoadId;
      }
    }
  }, items);
  return null;
}
const useNativeCheckoutStore = fn(7424).useNativeCheckoutStore;
const PremiumPlanPurchasedStore = fn(7421);
({ reset: metroRequire, setInitiatedPurchaseFromNewFlow: closure_7 } = PremiumPlanPurchasedStore);
const Constants = fn(1074);
({
  AnalyticEvents: closure_8,
  AnalyticsObjects: closure_9,
  AnalyticsObjectTypes: c10,
  AnalyticsPages: closure_11,
  AnalyticsSections: closure_12,
} = Constants);
const PaymentGateways = fn(1085).PaymentGateways;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroPurchaseFlow.tsx");

export default function BuyNitroPurchaseFlow(item) {
  item = item.item;
  ({ stagedTrialId, onExit } = item);
  ({
    analyticsLocations,
    analyticsLoadId,
    hasEmittedPaymentFlowStartedRef,
    applicationId,
    expectedPriceString,
    onOrderPriceMismatch,
    onOrderTrialUnavailable,
    onHostSheetClose,
    onPaymentSuccess,
    onPaymentDismiss,
  } = item);
  const NitroACOMSubscriptionExperiment = item(9365).NitroACOMSubscriptionExperiment;
  let obj = item(1115);
  if (obj.isIOS()) {
    if (NitroACOMSubscriptionExperiment.useConfig({ location: "BuyNitroPurchaseFlow" }).enabled) {
      let APPLE = tmp2.APPLE_ADVANCED_COMMERCE;
    } else {
      APPLE = tmp2.APPLE;
    }
  } else {
    const GOOGLE = tmp2.GOOGLE;
    let tmp8;
    if (null != stagedTrialId) {
      obj = { subscription_preview: null };
      obj = { subscription_trial_id: stagedTrialId };
      obj.subscription_preview = obj;
      tmp8 = obj;
    }
    const items = [item.productId];
    const memo = noop.useMemo(() => {
      const subscriptionItemsForProduct = PremiumBundledPlansUtils.getSubscriptionItemsForProduct(item.productId);
      return subscriptionItemsForProduct.map((planId) => {
        const obj = { subscriptionPlanId: planId.planId, skuId: null, quantity: null };
        const obj2 = item(4218);
        obj.skuId = obj2.castPremiumSubscriptionAsSkuId(closure_1_1(4218).getSkuIdForPlan(planId.planId));
        obj.quantity = planId.quantity;
        return obj;
      });
    }, items);
    const obj1 = {
      paymentGateway: GOOGLE,
      orderRequired: GOOGLE === tmp2.APPLE_ADVANCED_COMMERCE,
      skuIds: [],
      defaultPlans: memo,
      isGift: false,
      activeSubscription: null,
      initialSubscriptionFacet: tmp8,
      onOrderRetryCancellation: onExit,
      children: null,
    };
    let obj2 = {
      item,
      analyticsLocations,
      analyticsLoadId,
      hasEmittedPaymentFlowStartedRef,
      applicationId,
      expectedPriceString,
      stagedTrialId,
      onExit,
      onOrderPriceMismatch,
      onOrderTrialUnavailable,
      onHostSheetClose,
      onPaymentSuccess,
      onPaymentDismiss,
    };
    obj1.children = (
      <BuyNitroPurchaseRunner
        item={item}
        analyticsLocations={analyticsLocations}
        analyticsLoadId={analyticsLoadId}
        hasEmittedPaymentFlowStartedRef={hasEmittedPaymentFlowStartedRef}
        applicationId={applicationId}
        expectedPriceString={expectedPriceString}
        stagedTrialId={stagedTrialId}
        onExit={onExit}
        onOrderPriceMismatch={onOrderPriceMismatch}
        onOrderTrialUnavailable={onOrderTrialUnavailable}
        onHostSheetClose={onHostSheetClose}
        onPaymentSuccess={onPaymentSuccess}
        onPaymentDismiss={onPaymentDismiss}
      />
    );
    return jsx(NativeCheckoutStoreProviderDefault, {
      paymentGateway: GOOGLE,
      orderRequired: GOOGLE === tmp2.APPLE_ADVANCED_COMMERCE,
      skuIds: [],
      defaultPlans: memo,
      isGift: false,
      activeSubscription: null,
      initialSubscriptionFacet: tmp8,
      onOrderRetryCancellation: onExit,
      children: null,
    });
  }
}
