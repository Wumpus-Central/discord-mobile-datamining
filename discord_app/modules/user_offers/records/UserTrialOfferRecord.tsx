// discord_app/modules/user_offers/records/UserTrialOfferRecord.tsx
import toJSDefault from "../../../lib/Record.tsx";
import createFromServer from "../../billing/records/SubscriptionTrialRecord.tsx";

toJSDefault;
let UserTrialOfferRecord;
class UserTrialOfferRecord extends tmp2 {
  constructor(arg0) {
    tmp = new UserTrialOfferRecord(new.target, new.target, global);
    // ThrowIfThisInitialized (0x7c)
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
    let _Date2 = closure_0;
    fromServer = closure_0.createFromServer(expires_at.subscription_trial);
  }
  let date1 = null;
  if (null != expires_at.redeemed_at) {
    _Date2 = Date;
    date1 = new Date(expires_at.redeemed_at);
    const tmp9 = new.target;
  }
  if (typeof UserTrialOfferRecord !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const tmp13 = new UserTrialOfferRecord(str, _Date2, tmp9, UserTrialOfferRecord, new.target, id, user_id, trial_id, date, referrer_id, referrer);
  // ThrowIfThisInitialized (0x7c)
  tmp13.id = id;
  tmp13.userId = user_id;
  tmp13.trialId = trial_id;
  if (date == null) {
    date = null;
  }
  tmp13.expiresAt = date;
  if (referrer_id == null) {
    referrer_id = null;
  }
  tmp13.referrerId = referrer_id;
  if (referrer == null) {
    referrer = null;
  }
  tmp13.referrer = referrer;
  if (fromServer == null) {
    fromServer = null;
  }
  tmp13.subscriptionTrial = fromServer;
  if (date1 == null) {
    date1 = null;
  }
  tmp13.redeemedAt = date1;
  return tmp13;
};
prototype["hasExpired"] = function hasExpired() {
  let tmp2 = null != this.expiresAt;
  if (tmp2) {
    const _Date = Date;
    const expiresAt = tmp.expiresAt;
    const timestamp = Date.now();
    tmp2 = timestamp > expiresAt.getTime();
  }
  return tmp2;
};
prototype["isRedeemed"] = function isRedeemed() {
  return null != this.redeemedAt;
};
const result = require("obj132").fileFinishedImporting("modules/user_offers/records/UserTrialOfferRecord.tsx");

export default UserTrialOfferRecord;