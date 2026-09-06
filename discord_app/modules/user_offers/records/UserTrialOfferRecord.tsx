// discord_app/modules/user_offers/records/UserTrialOfferRecord.tsx
import Record from "../../../lib/Record.tsx";
import SubscriptionTrialRecord from "../../billing/records/SubscriptionTrialRecord.tsx";

let closure_1 = fn(1373).PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
let UserTrialOfferRecord;
class UserTrialOfferRecord extends tmp2 {
  constructor(arg0) {
    tmp = new UserTrialOfferRecord(new.target, new.target, global);
    ({ id: tmp.id, userId: tmp.userId, trialId: tmp.trialId, expiresAt } = global);
    if (expiresAt == null) {
      expiresAt = null;
    }
    tmp.expiresAt = expiresAt;
    referrerId = global.referrerId;
    if (referrerId == null) {
      referrerId = null;
    }
    tmp.referrerId = referrerId;
    referrer = global.referrer;
    if (referrer == null) {
      referrer = null;
    }
    tmp.referrer = referrer;
    subscriptionTrial = global.subscriptionTrial;
    if (subscriptionTrial == null) {
      subscriptionTrial = null;
    }
    tmp.subscriptionTrial = subscriptionTrial;
    redeemedAt = global.redeemedAt;
    if (redeemedAt == null) {
      redeemedAt = null;
    }
    tmp.redeemedAt = redeemedAt;
    return tmp;
  }
}
const prototype = UserTrialOfferRecord.prototype;
UserTrialOfferRecord["createFromServer"] = function createFromServer(expires_at) {
  ({ id, user_id, trial_id } = expires_at);
  let date = null;
  if (null != expires_at.expires_at) {
    const _Date = Date;
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
    let _Date2 = SubscriptionTrialRecord;
    fromServer = SubscriptionTrialRecord.createFromServer(expires_at.subscription_trial);
  }
  let date1 = null;
  if (null != expires_at.redeemed_at) {
    _Date2 = Date;
    date1 = new Date(expires_at.redeemed_at);
    const tmp10 = new.target;
  }
  if (typeof UserTrialOfferRecord === "function") {
    const tmp17 = new UserTrialOfferRecord(
      tmp4,
      _Date2,
      tmp10,
      UserTrialOfferRecord,
      new.target,
      id,
      user_id,
      trial_id,
      date,
      referrer_id,
      referrer,
    );
    tmp17.id = id;
    tmp17.userId = user_id;
    tmp17.trialId = trial_id;
    if (date == null) {
      date = null;
    }
    tmp17.expiresAt = date;
    if (referrer_id == null) {
      referrer_id = null;
    }
    tmp17.referrerId = referrer_id;
    if (referrer == null) {
      referrer = null;
    }
    tmp17.referrer = referrer;
    if (fromServer == null) {
      fromServer = null;
    }
    tmp17.subscriptionTrial = fromServer;
    if (date1 == null) {
      date1 = null;
    }
    tmp17.redeemedAt = date1;
    return tmp17;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
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
  set: undefined,
});
Object.defineProperty(prototype, "isRedeemed", {
  get: function isRedeemed() {
    return null != this.redeemedAt;
  },
  set: undefined,
});
Object.defineProperty(prototype, "hasAcknowledged", {
  get: function hasAcknowledged() {
    return null != this.expiresAt;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isReferralTrial", {
  get: function isReferralTrial() {
    let tmp = this.trialId === closure_1;
    if (!tmp) {
      tmp = null != this.referrerId;
    }
    return tmp;
  },
  set: undefined,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_offers/records/UserTrialOfferRecord.tsx");

export default UserTrialOfferRecord;
