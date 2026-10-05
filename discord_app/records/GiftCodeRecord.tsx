// discord_app/records/GiftCodeRecord.tsx
import PremiumConstants from "../modules/premium/PremiumConstants.tsx";
import _modDef4461 from "../../_runtime/metro/04461__.js";
import Record from "../lib/Record.tsx";
import SubscriptionTrialRecord from "../modules/billing/records/SubscriptionTrialRecord.tsx";
import PromotionRecord from "PromotionRecord.tsx";
import SubscriptionPlanRecord from "SubscriptionPlanRecord.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let closure_6 = PremiumConstants.PremiumSubscriptionSKUToPremiumType;
const frozen = Object.freeze({
  PAYMENT_SOURCE_REQUIRED: 1,
  EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
  NOT_SELF_REDEEMABLE: 4,
});
class GiftCodeRecord extends Record {
  constructor(arg0) {
    const tmp = new GiftCodeRecord(new.target, this);
    ({
      userId: tmp.userId,
      code: tmp.code,
      skuId: tmp.skuId,
      applicationId: tmp.applicationId,
      uses: tmp.uses,
      maxUses: tmp.maxUses,
      expiresAt: tmp.expiresAt,
      redeemed: tmp.redeemed,
      storeListingId: tmp.storeListingId,
      subscriptionPlanId: tmp.subscriptionPlanId,
      subscriptionPlan: tmp.subscriptionPlan,
      revoked: tmp.revoked,
      entitlementBranches: tmp.entitlementBranches,
      flags: tmp.flags,
      subscriptionTrial: tmp.subscriptionTrial,
      promotion: tmp.promotion,
      giftStyle: tmp.giftStyle,
    } = arg0);
    return tmp;
  }
  static createFromServer(user) {
    let application_id;
    let code;
    let max_uses;
    let sku_id;
    let subscription_plan_id;
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
    let tmp5 = null;
    if (null != user.expires_at) {
      tmp5 = _modDef4461(user.expires_at);
    }
    const redeemed = user.redeemed;
    if (null != user.subscription_plan) {
      subscription_plan_id = user.subscription_plan.id;
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
    const gift_style = user.gift_style;
    if (null != user.subscription_trial) {
      fromServer1 = SubscriptionTrialRecord.createFromServer(user.subscription_trial);
    }
    const promotion = user.promotion;
    let fromServer2 = null;
    if (null != promotion) {
      fromServer2 = PromotionRecord.createFromServer(user.promotion);
    }
    if (typeof GiftCodeRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp16 = new GiftCodeRecord(
        tmp,
        SubscriptionTrialRecord,
        PromotionRecord,
        promotion,
        GiftCodeRecord,
        this,
        id,
        code,
        sku_id,
        application_id,
        uses,
        max_uses,
        tmp5,
        redeemed,
        id1,
        subscription_plan_id,
        fromServer,
        entitlement_branches,
      );
      tmp16.userId = id;
      tmp16.code = code;
      tmp16.skuId = sku_id;
      tmp16.applicationId = application_id;
      tmp16.uses = uses;
      tmp16.maxUses = max_uses;
      tmp16.expiresAt = tmp5;
      tmp16.redeemed = redeemed;
      tmp16.storeListingId = id1;
      tmp16.subscriptionPlanId = subscription_plan_id;
      tmp16.subscriptionPlan = fromServer;
      tmp16.revoked = false;
      tmp16.entitlementBranches = entitlement_branches;
      tmp16.flags = num;
      tmp16.subscriptionTrial = fromServer1;
      tmp16.promotion = fromServer2;
      tmp16.giftStyle = gift_style;
      return tmp16;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  isExpired() {
    const expiresAt = this.expiresAt;
    let isAfterResult = null != expiresAt;
    if (isAfterResult) {
      const obj = _modDef4461();
      isAfterResult = obj.isAfter(expiresAt);
    }
    return isAfterResult;
  }
  toString() {
    return this.code;
  }
}
const prototype = GiftCodeRecord.prototype;
Object.defineProperty(prototype, "hasMultipleCopies", {
  get: function hasMultipleCopies() {
    return this.maxUses > 1;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isClaimed", {
  get: function isClaimed() {
    return this.uses >= this.maxUses;
  },
  set: undefined,
});
Object.defineProperty(prototype, "remainingUses", {
  get: function remainingUses() {
    return this.maxUses - this.uses;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isSubscription", {
  get: function isSubscription() {
    return null != this.subscriptionPlanId;
  },
  set: undefined,
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
  set: undefined,
});
Object.defineProperty(prototype, "isSelfRedeemable", {
  get: function isSelfRedeemable() {
    const obj = require("FlagUtils");
    return !obj.hasFlag(this.flags, frozen.NOT_SELF_REDEEMABLE);
  },
  set: undefined,
});
Object.defineProperty(prototype, "isExistingPremiumSubscriptionDisallowed", {
  get: function isExistingPremiumSubscriptionDisallowed() {
    const obj = require("FlagUtils");
    return obj.hasFlag(this.flags, frozen.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED);
  },
  set: undefined,
});
Object.defineProperty(prototype, "analyticsData", {
  get: function analyticsData() {
    return { gift_code: this.code, gift_code_max_uses: this.maxUses };
  },
  set: undefined,
});
const result = size.fileFinishedImporting("records/GiftCodeRecord.tsx");

export default GiftCodeRecord;
export const GiftCodeFlags = frozen;
