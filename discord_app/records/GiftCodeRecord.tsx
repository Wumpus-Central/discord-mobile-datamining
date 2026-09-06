// === Module 10700: GiftCodeRecord ===

// Module 10700 (GiftCodeRecord)
import _modDef4153 from "module_4153" /* 4153 */;
import Record from "Record" /* 1386 */;
import SubscriptionTrialRecord from "SubscriptionTrialRecord" /* 7455 */;
import PromotionRecord from "PromotionRecord" /* 10666 */;
import SubscriptionPlanRecord from "SubscriptionPlanRecord" /* 4219 */;

const require = fn;
let closure_6 = fn(1373).PremiumSubscriptionSKUToPremiumType;
const frozen = Object.freeze({ PAYMENT_SOURCE_REQUIRED: 1, EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2, NOT_SELF_REDEEMABLE: 4 });
let GiftCodeRecord;
class GiftCodeRecord extends tmp2 {
  constructor(arg0) {
    tmp = new GiftCodeRecord(new.target, new.target);
    ({ userId: tmp.userId, code: tmp.code, skuId: tmp.skuId, applicationId: tmp.applicationId, uses: tmp.uses, maxUses: tmp.maxUses, expiresAt: tmp.expiresAt, redeemed: tmp.redeemed, storeListingId: tmp.storeListingId, subscriptionPlanId: tmp.subscriptionPlanId, subscriptionPlan: tmp.subscriptionPlan, revoked: tmp.revoked, entitlementBranches: tmp.entitlementBranches, flags: tmp.flags, subscriptionTrial: tmp.subscriptionTrial, promotion: tmp.promotion, giftStyle: tmp.giftStyle } = global);
    return tmp;
  }
}
const prototype = GiftCodeRecord.prototype;
GiftCodeRecord["createFromServer"] = function createFromServer(user) {
  let id = null;
  if (null != user.user) {
    id = user.user.id;
  }
  ({ code, sku_id, application_id, uses, max_uses } = user);
  let id1 = null;
  if (null != user.store_listing) {
    id1 = user.store_listing.id;
  }
  let tmp5 = null;
  if (null != user.expires_at) {
    tmp5 = _modDef4153(user.expires_at);
  }
  const redeemed = user.redeemed;
  if (null != user.subscription_plan) {
    let subscription_plan_id = user.subscription_plan.id;
  } else {
    subscription_plan_id = user.subscription_plan_id;
  }
  let fromServer = null;
  if (null != user.subscription_plan) {
    fromServer = SubscriptionPlanRecord.createFromServer(user.subscription_plan);
  }
  let entitlement_branches = null;
  if (null != user.entitlement_branches) {
    entitlement_branches = user.entitlement_branches;
  }
  let num = 0;
  if (null != user.flags) {
    num = user.flags;
  }
  let fromServer1 = null;
  if (null != user.subscription_trial) {
    fromServer1 = SubscriptionTrialRecord.createFromServer(user.subscription_trial);
  }
  const promotion = user.promotion;
  let fromServer2 = null;
  if (null != promotion) {
    fromServer2 = PromotionRecord.createFromServer(user.promotion);
  }
  if (typeof GiftCodeRecord === "function") {
    const tmp18 = new GiftCodeRecord(tmp, SubscriptionTrialRecord, PromotionRecord, promotion, GiftCodeRecord, new.target, id, code, sku_id, application_id, uses, max_uses, tmp5, redeemed, id1, subscription_plan_id, fromServer, entitlement_branches);
    tmp18.userId = id;
    tmp18.code = code;
    tmp18.skuId = sku_id;
    tmp18.applicationId = application_id;
    tmp18.uses = uses;
    tmp18.maxUses = max_uses;
    tmp18.expiresAt = tmp5;
    tmp18.redeemed = redeemed;
    tmp18.storeListingId = id1;
    tmp18.subscriptionPlanId = subscription_plan_id;
    tmp18.subscriptionPlan = fromServer;
    tmp18.revoked = false;
    tmp18.entitlementBranches = entitlement_branches;
    tmp18.flags = num;
    tmp18.subscriptionTrial = fromServer1;
    tmp18.promotion = fromServer2;
    tmp18.giftStyle = user.gift_style;
    return tmp18;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
prototype["isExpired"] = function isExpired() {
  const expiresAt = this.expiresAt;
  let isAfterResult = null != expiresAt;
  if (isAfterResult) {
    isAfterResult = _modDef4153().isAfter(expiresAt);
    const obj = _modDef4153();
  }
  return isAfterResult;
};
Object.defineProperty(prototype, "hasMultipleCopies", {
  get: function hasMultipleCopies() {
    return this.maxUses > 1;
  },
  set: undefined
});
Object.defineProperty(prototype, "isClaimed", {
  get: function isClaimed() {
    return this.uses >= this.maxUses;
  },
  set: undefined
});
Object.defineProperty(prototype, "remainingUses", {
  get: function remainingUses() {
    return this.maxUses - this.uses;
  },
  set: undefined
});
Object.defineProperty(prototype, "isSubscription", {
  get: function isSubscription() {
    return null != this.subscriptionPlanId;
  },
  set: undefined
});
Object.defineProperty(prototype, "premiumSubscriptionType", {
  get: function premiumSubscriptionType() {
    let tmp2 = null;
    if (this.isSubscription) {
      let tmp4 = closure_6[tmp.skuId];
      if (tmp4 == null) {
        tmp4 = null;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  set: undefined
});
Object.defineProperty(prototype, "isSelfRedeemable", {
  get: function isSelfRedeemable() {
    return !require("FlagUtils").hasFlag(this.flags, frozen.NOT_SELF_REDEEMABLE);
  },
  set: undefined
});
Object.defineProperty(prototype, "isExistingPremiumSubscriptionDisallowed", {
  get: function isExistingPremiumSubscriptionDisallowed() {
    return require("FlagUtils").hasFlag(this.flags, frozen.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED);
  },
  set: undefined
});
Object.defineProperty(prototype, "analyticsData", {
  get: function analyticsData() {
    return { gift_code: this.code, gift_code_max_uses: this.maxUses };
  },
  set: undefined
});
prototype["toString"] = function toString() {
  return this.code;
};
const size = fn(2);
const result = size.fileFinishedImporting("records/GiftCodeRecord.tsx");

export default GiftCodeRecord;
export const GiftCodeFlags = frozen;