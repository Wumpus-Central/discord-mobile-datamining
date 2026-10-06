// === Module 6976: UserTrialOfferRecord ===

// Module 6976 (UserTrialOfferRecord)
import PremiumConstants from "PremiumConstants" /* 1379 */;
import Record from "Record" /* 1392 */;
import SubscriptionTrialRecord from "SubscriptionTrialRecord" /* 6977 */;
import size from "module_2" /* 2 */;

let closure_1 = PremiumConstants.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
class UserTrialOfferRecord extends Record {
  constructor(referrerId) {
    let expiresAt;
    const tmp = new UserTrialOfferRecord(new.target, this, referrerId);
    ({ id: tmp.id, userId: tmp.userId, trialId: tmp.trialId, expiresAt } = referrerId);
    if (expiresAt == null) {
      expiresAt = null;
    }
    tmp.expiresAt = expiresAt;
    referrerId = referrerId.referrerId;
    if (referrerId == null) {
      referrerId = null;
    }
    tmp.referrerId = referrerId;
    let referrer = referrerId.referrer;
    if (referrer == null) {
      referrer = null;
    }
    tmp.referrer = referrer;
    let subscriptionTrial = referrerId.subscriptionTrial;
    if (subscriptionTrial == null) {
      subscriptionTrial = null;
    }
    tmp.subscriptionTrial = subscriptionTrial;
    let redeemedAt = referrerId.redeemedAt;
    if (redeemedAt == null) {
      redeemedAt = null;
    }
    tmp.redeemedAt = redeemedAt;
    return tmp;
  }
  static createFromServer(expires_at) {
    let _Date2;
    let id;
    let self3;
    let trial_id;
    let user_id;
    ({ id, user_id, trial_id } = expires_at);
    let date = null;
    if (null != expires_at.expires_at) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date(expires_at.expires_at);
    }
    let referrer_id = expires_at.referrer_id;
    if (referrer_id == null) {
      referrer_id = null;
    }
    let referrer = expires_at.referrer;
    if (referrer == null) {
      referrer = null;
    }
    let fromServer = null;
    if (null != expires_at.subscription_trial) {
      _Date2 = SubscriptionTrialRecord;
      fromServer = SubscriptionTrialRecord.createFromServer(expires_at.subscription_trial);
    }
    let date1 = null;
    if (null != expires_at.redeemed_at) {
      _Date2 = Date;
      self3 = this;
      const self4 = this;
      date1 = new Date(expires_at.redeemed_at);
    }
    if (typeof UserTrialOfferRecord === "function") {
      const self5 = this;
      const self6 = this;
      const tmp11 = new UserTrialOfferRecord(tmp4, _Date2, self3, UserTrialOfferRecord, this, id, user_id, trial_id, date, referrer_id, referrer);
      tmp11.id = id;
      tmp11.userId = user_id;
      tmp11.trialId = trial_id;
      if (date == null) {
        date = null;
      }
      tmp11.expiresAt = date;
      if (referrer_id == null) {
        referrer_id = null;
      }
      tmp11.referrerId = referrer_id;
      if (referrer == null) {
        referrer = null;
      }
      tmp11.referrer = referrer;
      if (fromServer == null) {
        fromServer = null;
      }
      tmp11.subscriptionTrial = fromServer;
      if (date1 == null) {
        date1 = null;
      }
      tmp11.redeemedAt = date1;
      return tmp11;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const prototype = UserTrialOfferRecord.prototype;
Object.defineProperty(prototype, "hasExpired", {
  get: function hasExpired() {
    let tmp2 = null != this.expiresAt;
    if (tmp2) {
      const _Date = Date;
      const expiresAt = tmp.expiresAt;
      const timestamp = Date.now();
      tmp2 = timestamp > expiresAt.getTime();
    }
    return tmp2;
  },
  set: undefined
});
Object.defineProperty(prototype, "isRedeemed", {
  get: function isRedeemed() {
    return null != this.redeemedAt;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasAcknowledged", {
  get: function hasAcknowledged() {
    return null != this.expiresAt;
  },
  set: undefined
});
Object.defineProperty(prototype, "isReferralTrial", {
  get: function isReferralTrial() {
    return this.trialId === closure_1 || null != this.referrerId;
  },
  set: undefined
});
const result = size.fileFinishedImporting("modules/user_offers/records/UserTrialOfferRecord.tsx");

export default UserTrialOfferRecord;