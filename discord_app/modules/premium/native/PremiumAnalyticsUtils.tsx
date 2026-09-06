// === Module 10663: PaymentFlowStep ===

// Module 10663 (PaymentFlowStep)
import set from "set" /* 2 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 1242 */;
import v1 from "v1" /* 1256 */;
import getPremiumPlanItem from "getPremiumPlanItem" /* 4218 */;
import ME from "ME" /* 1074 */;

({ SubscriptionTypes: c3, PurchaseTypeToAnalyticsPaymentType: c4, PurchaseTypes: c5, AnalyticEvents: closure_6 } = ME);
let obj = { WHAT_YOU_LOSE: 1, [1]: "WHAT_YOU_LOSE", CONFIRM: 2, [2]: "CONFIRM", PREVIEW: 3, [3]: "PREVIEW", DOWNGRADE_TO_TIER_0: 4, [4]: "DOWNGRADE_TO_TIER_0", MOBILE_SUBSCRIPTION_MANAGE: 5, [5]: "MOBILE_SUBSCRIPTION_MANAGE" };
const result = set.fileFinishedImporting("modules/premium/native/PremiumAnalyticsUtils.tsx");

export const PaymentFlowStep = { SKU_SELECT: "sku_select", PLAN_SELECT: "plan_select", REVIEW: "review", CONFIRM: "confirm", MOBILE_WEB_REDIRECT_CHECKOUT: "mobile_web_redirect_checkout", YEARLY_UPSELL: "yearly_upsell", PREMIUM_UPSELL: "premium_upsell", EXTERNAL_PAYMENT: "external_payment", REWARD_SKU_SELECT: "reward_sku_select" };
export const getBasePurchaseFlowAnalyticsFields = function getBasePurchaseFlowAnalyticsFields(isGift) {
  let flag = isGift.isGift;
  if (flag === undefined) {
    flag = false;
  }
  const analyticsLocation = isGift.analyticsLocation;
  const obj = { load_id: isGift.analyticsLoadId, payment_type: table[constants2.SUBSCRIPTION], subscription_type: constants.PREMIUM, is_gift: flag, location: analyticsLocation, location_stack: isGift.analyticsLocations, location_section: null };
  let section;
  if (analyticsLocation != null) {
    section = analyticsLocation.section;
  }
  obj[6] = section;
  return obj;
};
export const getPaymentFlowCompletedAnalyticsFields = function getPaymentFlowCompletedAnalyticsFields(throwTypeErrorResult, arg1) {
  const merged = Object.assign(throwTypeErrorResult);
  const merged1 = Object.assign(arg1);
  return {};
};
export const getPaymentFlowStepAnalyticsFields = function getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, arg1) {
  const merged = Object.assign(basePurchaseAnalytics);
  const merged1 = Object.assign(arg1);
  return {};
};
export const getNewAnalyticsLoadId = function getNewAnalyticsLoadId() {
  return v1.v4();
};
export const CancellationFlowSteps = obj;
export const STEP_ANALYTICS_NAMES = { [obj.WHAT_YOU_LOSE]: "What You're Losing", [obj.DOWNGRADE_TO_TIER_0]: "Downgrade To Tier 0", [obj.CONFIRM]: "Confirm Cancellation", [obj.PREVIEW]: "Preview Updated Subscription", [obj.MOBILE_SUBSCRIPTION_MANAGE]: "Mobile Subscription Manage" };
export const trackPremiumSubscriptionCancellationStarted = function trackPremiumSubscriptionCancellationStarted(closure_0, analyticsLocations) {
  let obj = expandEventPropertiesDefault;
  obj = { location_stack: analyticsLocations };
  let id;
  if (closure_0 != null) {
    id = closure_0.id;
  }
  obj = { subscription_id: id, subscription_type: null, subscription_plan_id: null, subscription_plan_gateway_plan_id: null, subscription_status: null };
  let type;
  if (closure_0 != null) {
    type = closure_0.type;
  }
  obj[1] = type;
  let tmp4;
  if (null != closure_0) {
    const premiumPlanItem = getPremiumPlanItem.getPremiumPlanItem(closure_0);
    let id1;
    if (premiumPlanItem != null) {
      id1 = premiumPlanItem.id;
    }
    tmp4 = id1;
    const obj4 = getPremiumPlanItem;
  }
  obj[2] = tmp4;
  let paymentGatewayPlanId;
  if (closure_0 != null) {
    paymentGatewayPlanId = closure_0.paymentGatewayPlanId;
  }
  obj[3] = paymentGatewayPlanId;
  let status;
  if (closure_0 != null) {
    status = closure_0.status;
  }
  obj[4] = status;
  const merged = Object.assign(obj);
  obj.track(constants3.CANCELLATION_FLOW_STARTED, obj);
};
export const trackPremiumSubscriptionCancellationFlowStep = function trackPremiumSubscriptionCancellationFlowStep(subscription) {
  subscription = subscription.subscription;
  ({ fromStep, toStep, analyticsLocations } = subscription);
  let obj = expandEventPropertiesDefault;
  obj = { from_step: fromStep, to_step: toStep, location_stack: analyticsLocations };
  let id;
  if (subscription != null) {
    id = subscription.id;
  }
  obj = { subscription_id: id, subscription_type: null, subscription_plan_id: null, subscription_plan_gateway_plan_id: null, subscription_status: null };
  let type;
  if (subscription != null) {
    type = subscription.type;
  }
  obj[1] = type;
  let tmp4;
  if (null != subscription) {
    const premiumPlanItem = getPremiumPlanItem.getPremiumPlanItem(subscription);
    let id1;
    if (premiumPlanItem != null) {
      id1 = premiumPlanItem.id;
    }
    tmp4 = id1;
    const obj4 = getPremiumPlanItem;
  }
  obj[2] = tmp4;
  let paymentGatewayPlanId;
  if (subscription != null) {
    paymentGatewayPlanId = subscription.paymentGatewayPlanId;
  }
  obj[3] = paymentGatewayPlanId;
  let status;
  if (subscription != null) {
    status = subscription.status;
  }
  obj[4] = status;
  const merged = Object.assign(obj);
  obj.track(constants3.CANCELLATION_FLOW_STEP, obj);
};