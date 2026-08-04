import "toJS";
import createFromServer from "createFromServer";
import closure_4 from "createFromServer";
import { PremiumSubscriptionSKUToPremiumType as closure_5 } from "GuildFeatures";

const require = arg1;
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
  let application_id;
  let code;
  let max_uses;
  let sku_id;
  let uses;
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
    tmp4 = importDefault(3867)(user.expires_at);
  }
  const redeemed = user.redeemed;
  if (null != user.subscription_plan) {
    let subscription_plan_id = user.subscription_plan.id;
  } else {
    subscription_plan_id = user.subscription_plan_id;
  }
  let fromServer = null;
  if (null != user.subscription_plan) {
    fromServer = closure_4.createFromServer(user.subscription_plan);
  }
  let entitlement_branches = null;
  if (null != user.entitlement_branches) {
    entitlement_branches = user.entitlement_branches;
  }
  let num = 0;
  if (null != user.flags) {
    num = user.flags;
  }
  let tmp10 = null;
  if (null != user.subscription_trial) {
    const obj = { id: null, interval: null, intervalCount: null, skuId: null };
    obj[0] = user.subscription_trial.id;
    obj[1] = user.subscription_trial.interval;
    obj[2] = user.subscription_trial.interval_count;
    obj[3] = user.subscription_trial.sku_id;
    tmp10 = obj;
  }
  const promotion = user.promotion;
  let fromServer1 = null;
  if (null != promotion) {
    fromServer1 = createFromServer.createFromServer(user.promotion);
    const tmp11 = createFromServer;
  }
  if (typeof GiftCodeRecord !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const tmp13 = new GiftCodeRecord("Trying to call a non-function", tmp11, promotion, GiftCodeRecord, new.target, id, code, sku_id, application_id, uses, max_uses, tmp4, redeemed, id1, subscription_plan_id, fromServer, entitlement_branches, num);
  // ThrowIfThisInitialized (0x7c)
  tmp13.userId = id;
  tmp13.code = code;
  tmp13.skuId = sku_id;
  tmp13.applicationId = application_id;
  tmp13.uses = uses;
  tmp13.maxUses = max_uses;
  tmp13.expiresAt = tmp4;
  tmp13.redeemed = redeemed;
  tmp13.storeListingId = id1;
  tmp13.subscriptionPlanId = subscription_plan_id;
  tmp13.subscriptionPlan = fromServer;
  tmp13.revoked = false;
  tmp13.entitlementBranches = entitlement_branches;
  tmp13.flags = num;
  tmp13.subscriptionTrial = tmp10;
  tmp13.promotion = fromServer1;
  tmp13.giftStyle = user.gift_style;
  return tmp13;
};
prototype["isExpired"] = function isExpired() {
  const expiresAt = this.expiresAt;
  let isAfterResult = null != expiresAt;
  if (isAfterResult) {
    isAfterResult = importDefault(3867)().isAfter(expiresAt);
    const obj = importDefault(3867)();
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
    return !require(1384) /* hasFlag */.hasFlag(this.flags, frozen.NOT_SELF_REDEEMABLE);
  },
  set: undefined
});
Object.defineProperty(prototype, "isExistingPremiumSubscriptionDisallowed", {
  get: function isExistingPremiumSubscriptionDisallowed() {
    return require(1384) /* hasFlag */.hasFlag(this.flags, frozen.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED);
  },
  set: undefined
});
Object.defineProperty(prototype, "analyticsData", {
  get: function analyticsData(arg0) {
    return { gift_code: this.code, gift_code_max_uses: this.maxUses };
  },
  set: undefined
});
prototype["toString"] = function toString() {
  return this.code;
};
const result = require("createFromServer").fileFinishedImporting("records/GiftCodeRecord.tsx");

export default GiftCodeRecord;
export const GiftCodeFlags = frozen;