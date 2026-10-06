// === Module 10407: PremiumAnalyticsUtils ===

// Module 10407 (PremiumAnalyticsUtils)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import v1 from "v1" /* 1266 */;
import PremiumUtils from "PremiumUtils" /* 4534 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ SubscriptionTypes: c3, PurchaseTypeToAnalyticsPaymentType: closure_4, PurchaseTypes: hasOwnProperty, AnalyticEvents: metroRequire } = Constants);
let obj = { WHAT_YOU_LOSE: 1, [1]: "WHAT_YOU_LOSE", CONFIRM: 2, [2]: "CONFIRM", PREVIEW: 3, [3]: "PREVIEW", DOWNGRADE_TO_TIER_0: 4, [4]: "DOWNGRADE_TO_TIER_0", MOBILE_SUBSCRIPTION_MANAGE: 5, [5]: "MOBILE_SUBSCRIPTION_MANAGE" };
const result = size.fileFinishedImporting("modules/premium/native/PremiumAnalyticsUtils.tsx");

export const PaymentFlowStep = { SKU_SELECT: "sku_select", PLAN_SELECT: "plan_select", REVIEW: "review", CONFIRM: "confirm", MOBILE_WEB_REDIRECT_CHECKOUT: "mobile_web_redirect_checkout", YEARLY_UPSELL: "yearly_upsell", PREMIUM_UPSELL: "premium_upsell", EXTERNAL_PAYMENT: "external_payment", REWARD_SKU_SELECT: "reward_sku_select" };
export const getBasePurchaseFlowAnalyticsFields = function getBasePurchaseFlowAnalyticsFields(isGift) {
  let section;
  let flag = isGift.isGift;
  const analyticsLoadId = isGift.analyticsLoadId;
  if (flag === undefined) {
    flag = false;
  }
  const analyticsLocation = isGift.analyticsLocation;
  const obj = { load_id: analyticsLoadId, payment_type: React3[hasOwnProperty.SUBSCRIPTION], subscription_type: constants.PREMIUM, is_gift: flag, location: analyticsLocation, location_stack: isGift.analyticsLocations, location_section: section };
  section = undefined;
  if (analyticsLocation != null) {
    section = analyticsLocation.section;
  }
  return obj;
};
export const getPaymentFlowCompletedAnalyticsFields = function getPaymentFlowCompletedAnalyticsFields(arg0, arg1) {
  const obj = {};
  const merged = Object.assign(arg0);
  const merged1 = Object.assign(arg1);
  return obj;
};
export const getPaymentFlowStepAnalyticsFields = function getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, arg1) {
  const obj = {};
  const merged = Object.assign(basePurchaseAnalytics);
  const merged1 = Object.assign(arg1);
  return obj;
};
export const getNewAnalyticsLoadId = function getNewAnalyticsLoadId() {
  const obj = v1;
  return obj.v4();
};
export const CancellationFlowSteps = obj;
export const STEP_ANALYTICS_NAMES = { [obj.WHAT_YOU_LOSE]: "What You're Losing", [obj.DOWNGRADE_TO_TIER_0]: "Downgrade To Tier 0", [obj.CONFIRM]: "Confirm Cancellation", [obj.PREVIEW]: "Preview Updated Subscription", [obj.MOBILE_SUBSCRIPTION_MANAGE]: "Mobile Subscription Manage" };
export const trackPremiumSubscriptionCancellationStarted = function trackPremiumSubscriptionCancellationStarted(subscription, analyticsLocations) {
  let paymentGatewayPlanId;
  let status;
  let tmp5;
  let type;
  let id;
  const track = AnalyticsUtilsDefault.track;
  const CANCELLATION_FLOW_STARTED = metroRequire.CANCELLATION_FLOW_STARTED;
  const obj = { location_stack: analyticsLocations };
  AnalyticsUtilsDefault;
  if (subscription != null) {
    id = subscription.id;
  }
  const obj2 = { subscription_id: id, subscription_type: type, subscription_plan_id: tmp5, subscription_plan_gateway_plan_id: paymentGatewayPlanId, subscription_status: status };
  type = undefined;
  if (subscription != null) {
    type = subscription.type;
  }
  tmp5 = undefined;
  if (null != subscription) {
    const obj3 = PremiumUtils;
    const premiumPlanItem = obj3.getPremiumPlanItem(subscription);
    let id1;
    if (premiumPlanItem != null) {
      id1 = premiumPlanItem.id;
    }
    tmp5 = id1;
  }
  paymentGatewayPlanId = undefined;
  if (subscription != null) {
    paymentGatewayPlanId = subscription.paymentGatewayPlanId;
  }
  status = undefined;
  if (subscription != null) {
    status = subscription.status;
  }
  const merged = Object.assign(obj2);
  track(CANCELLATION_FLOW_STARTED, obj);
};
export const trackPremiumSubscriptionCancellationFlowStep = function trackPremiumSubscriptionCancellationFlowStep(subscription) {
  let analyticsLocations;
  let fromStep;
  let paymentGatewayPlanId;
  let status;
  let tmp5;
  let toStep;
  let type;
  subscription = subscription.subscription;
  ({ fromStep, toStep, analyticsLocations } = subscription);
  let id;
  const track = AnalyticsUtilsDefault.track;
  const CANCELLATION_FLOW_STEP = metroRequire.CANCELLATION_FLOW_STEP;
  const obj = { from_step: fromStep, to_step: toStep, location_stack: analyticsLocations };
  AnalyticsUtilsDefault;
  if (subscription != null) {
    id = subscription.id;
  }
  const obj2 = { subscription_id: id, subscription_type: type, subscription_plan_id: tmp5, subscription_plan_gateway_plan_id: paymentGatewayPlanId, subscription_status: status };
  type = undefined;
  if (subscription != null) {
    type = subscription.type;
  }
  tmp5 = undefined;
  if (null != subscription) {
    const obj3 = PremiumUtils;
    const premiumPlanItem = obj3.getPremiumPlanItem(subscription);
    let id1;
    if (premiumPlanItem != null) {
      id1 = premiumPlanItem.id;
    }
    tmp5 = id1;
  }
  paymentGatewayPlanId = undefined;
  if (subscription != null) {
    paymentGatewayPlanId = subscription.paymentGatewayPlanId;
  }
  status = undefined;
  if (subscription != null) {
    status = subscription.status;
  }
  const merged = Object.assign(obj2);
  track(CANCELLATION_FLOW_STEP, obj);
};