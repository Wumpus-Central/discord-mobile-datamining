// discord_app/records/GiftCodeRecord.tsx
import toJSDefault from "../lib/Record.tsx";
import tDefault from "../../_runtime/03975_t.js";
import createFromServer from "../modules/billing/records/SubscriptionTrialRecord.tsx";
import createFromServer2 from "PromotionRecord.tsx";
import createFromServer3 from "SubscriptionPlanRecord.tsx";
import { PremiumSubscriptionSKUToPremiumType as closure_6 } from "../modules/premium/PremiumConstants.tsx";
import { hasFlag } from "../../discord_common/js/shared/utils/FlagUtils.tsx";

const require = fn;
toJSDefault;
const frozen = Object.freeze({ PAYMENT_SOURCE_REQUIRED: 1, EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2, NOT_SELF_REDEEMABLE: 4 });
let GiftCodeRecord;
class GiftCodeRecord extends tmp2 {
  constructor(arg0) {
    tmp = new GiftCodeRecord(new.target, new.target);
    // ThrowIfThisInitialized (0x7c)
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
  let tmp4 = null;
  if (null != user.expires_at) {
    tmp4 = tDefault(user.expires_at);
  }
  const redeemed = user.redeemed;
  if (null != user.subscription_plan) {
    let subscription_plan_id = user.subscription_plan.id;
  } else {
    subscription_plan_id = user.subscription_plan_id;
  }
  let fromServer = null;
  if (null != user.subscription_plan) {
    fromServer = closure_5.createFromServer(user.subscription_plan);
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
    fromServer1 = closure_3.createFromServer(user.subscription_trial);
  }
  const promotion = user.promotion;
  let fromServer2 = null;
  if (null != promotion) {
    fromServer2 = closure_4.createFromServer(user.promotion);
  }
  if (typeof GiftCodeRecord !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const tmp14 = new GiftCodeRecord("Trying to call a non-function", closure_3, closure_4, promotion, GiftCodeRecord, new.target, id, code, sku_id, application_id, uses, max_uses, tmp4, redeemed, id1, subscription_plan_id, fromServer, entitlement_branches);
  // ThrowIfThisInitialized (0x7c)
  tmp14.userId = id;
  tmp14.code = code;
  tmp14.skuId = sku_id;
  tmp14.applicationId = application_id;
  tmp14.uses = uses;
  tmp14.maxUses = max_uses;
  tmp14.expiresAt = tmp4;
  tmp14.redeemed = redeemed;
  tmp14.storeListingId = id1;
  tmp14.subscriptionPlanId = subscription_plan_id;
  tmp14.subscriptionPlan = fromServer;
  tmp14.revoked = false;
  tmp14.entitlementBranches = entitlement_branches;
  tmp14.flags = num;
  tmp14.subscriptionTrial = fromServer1;
  tmp14.promotion = fromServer2;
  tmp14.giftStyle = user.gift_style;
  return tmp14;
};
prototype["isExpired"] = function isExpired() {
  const expiresAt = this.expiresAt;
  let isAfterResult = null != expiresAt;
  if (isAfterResult) {
    isAfterResult = tDefault().isAfter(expiresAt);
    const obj = tDefault();
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
      let tmp4 = table[tmp.skuId];
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
    return !hasFlag /* hasFlag */.hasFlag(this.flags, frozen.NOT_SELF_REDEEMABLE);
  },
  set: undefined
});
Object.defineProperty(prototype, "isExistingPremiumSubscriptionDisallowed", {
  get: function isExistingPremiumSubscriptionDisallowed() {
    return hasFlag /* hasFlag */.hasFlag(this.flags, frozen.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED);
  },
  set: undefined
});
Object.defineProperty(prototype, "analyticsData", {
  get: function analyticsData(dependencyMap) {
    return { gift_code: this.code, gift_code_max_uses: this.maxUses };
  },
  set: undefined
});
prototype["toString"] = function toString() {
  return this.code;
};
const result = require("obj132").fileFinishedImporting("records/GiftCodeRecord.tsx");

export default GiftCodeRecord;
export const GiftCodeFlags = frozen;