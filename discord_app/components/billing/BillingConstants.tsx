// discord_app/components/billing/BillingConstants.tsx
import set from "../../../_runtime/00002_set.js";

let obj = {
  UNKNOWN: 0,
  [0]: "UNKNOWN",
  ADMIN: 1,
  [1]: "ADMIN",
  USER: 2,
  [2]: "USER",
  FRACTIONAL_PREMIUM: 3,
  [3]: "FRACTIONAL_PREMIUM",
  DEFERRED_START: 4,
  [4]: "DEFERRED_START",
  USER_TEMPORARY_BAN: 5,
  [5]: "USER_TEMPORARY_BAN",
};
obj = { CAN_MAKE_SUBSCRIPTION_UPDATES: null };
const items = [,];
({ FRACTIONAL_PREMIUM: arr[0], DEFERRED_START: arr[1] } = obj);
let set = new Set(items);
obj[0] = set;
const result = set.fileFinishedImporting("components/billing/BillingConstants.tsx");

export const RefundReason = {
  OTHER: 0,
  [0]: "OTHER",
  GIFTING_REFUND: 1,
  [1]: "GIFTING_REFUND",
  BUYERS_REMORSE: 2,
  [2]: "BUYERS_REMORSE",
  WRONG_PURCHASE: 3,
  [3]: "WRONG_PURCHASE",
  FORGOT_TO_CANCEL: 4,
  [4]: "FORGOT_TO_CANCEL",
  SERVER_BOOSTING_COOLDOWN: 5,
  [5]: "SERVER_BOOSTING_COOLDOWN",
  USER_CONFUSION: 6,
  [6]: "USER_CONFUSION",
  WANT_TO_SWITCH_TIERS: 7,
  [7]: "WANT_TO_SWITCH_TIERS",
  DONT_NEED: 8,
  [8]: "DONT_NEED",
};
export const PremiumRefundDisqualificationReason = {
  OTHER: 0,
  [0]: "OTHER",
  ALREADY_REFUNDED: 1,
  [1]: "ALREADY_REFUNDED",
  NOT_USER_REFUNDABLE_TYPE: 2,
  [2]: "NOT_USER_REFUNDABLE_TYPE",
  PAST_REFUNDABLE_DATE: 3,
  [3]: "PAST_REFUNDABLE_DATE",
  ENTITLEMENT_ALREADY_CONSUMED: 4,
  [4]: "ENTITLEMENT_ALREADY_CONSUMED",
  ALREADY_REFUNDED_PREMIUM: 5,
  [5]: "ALREADY_REFUNDED_PREMIUM",
  ALREADY_REFUNDED_PREMIUM_GUILD: 6,
  [6]: "ALREADY_REFUNDED_PREMIUM_GUILD",
};
export const AdyenResultCodes = { Authorised: "Authorised", Error: "Error" };
export const SubscriptionPauseReason = obj;
export const SubscriptionPauseReasonSets = obj;
export const UserLazyPerkSyncLevels = {
  NONE: 0,
  [0]: "NONE",
  ADD_PERKS_IF_DETECTED: 1,
  [1]: "ADD_PERKS_IF_DETECTED",
  FULL_RESYNC: 2,
  [2]: "FULL_RESYNC",
};
