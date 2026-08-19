// discord_app/modules/premium/native/PremiumAnalyticsUtils.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import v1 from "../../../../_runtime/00514_v1.js";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import getPremiumPlanItem from "../../../utils/PremiumUtils.tsx";
import ME from "../../../Constants.tsx";

({ SubscriptionTypes: c3, PurchaseTypeToAnalyticsPaymentType: c4, PurchaseTypes: c5, AnalyticEvents: closure_6 } = ME);
let obj = { WHAT_YOU_LOSE: 1, [1]: "WHAT_YOU_LOSE", CONFIRM: 2, [2]: "CONFIRM", PREVIEW: 3, [3]: "PREVIEW", DOWNGRADE_TO_TIER_0: 4, [4]: "DOWNGRADE_TO_TIER_0", MOBILE_SUBSCRIPTION_MANAGE: 5, [5]: "MOBILE_SUBSCRIPTION_MANAGE" };
const result = obj132.fileFinishedImporting("modules/premium/native/PremiumAnalyticsUtils.tsx");

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
export const getPaymentFlowCompletedAnalyticsFields = function getPaymentFlowCompletedAnalyticsFields(arg0, arg1) {
  const merged = Object.assign(arg0);
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
  let obj = { location_stack: analyticsLocations };
  let id;
  if (_require != null) {
    id = _require.id;
  }
  obj = { subscription_id: id, subscription_type: null, subscription_plan_id: null, subscription_plan_gateway_plan_id: null, subscription_status: null };
  let type;
  if (_require != null) {
    type = _require.type;
  }
  obj[1] = type;
  let tmp4;
  if (null != _require) {
    const premiumPlanItem = getPremiumPlanItem.getPremiumPlanItem(_require);
    let id1;
    if (premiumPlanItem != null) {
      id1 = premiumPlanItem.id;
    }
    tmp4 = id1;
  }
  obj[2] = tmp4;
  let paymentGatewayPlanId;
  if (_require != null) {
    paymentGatewayPlanId = _require.paymentGatewayPlanId;
  }
  obj[3] = paymentGatewayPlanId;
  let status;
  if (_require != null) {
    status = _require.status;
  }
  obj[4] = status;
  const merged = Object.assign(obj);
  obj.track(constants3.CANCELLATION_FLOW_STARTED, obj);
};
export const trackPremiumSubscriptionCancellationFlowStep = function trackPremiumSubscriptionCancellationFlowStep(subscription) {
  subscription = subscription.subscription;
  ({ fromStep, toStep, analyticsLocations } = subscription);
  let obj = { from_step: fromStep, to_step: toStep, location_stack: analyticsLocations };
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