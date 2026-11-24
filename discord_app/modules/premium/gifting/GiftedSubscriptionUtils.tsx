// === Module 13845: GiftedSubscriptionUtils ===

// Module 13845 (GiftedSubscriptionUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import GiftSubscriptionConstants from "GiftSubscriptionConstants" /* 13846 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

function isGiftedSubscription(type) {
  let tmp = type.type === constants4.GIFT;
  if (tmp) {
    tmp = null != type.giftSubscription;
  }
  if (tmp) {
    tmp = type.status !== constants3.ENDED;
  }
  return tmp;
}
({ GiftSubscriptionPlans: c2, SubscriptionIntervalTypes: c3 } = PremiumConstants);
const constants2 = GiftSubscriptionConstants.GiftSubscriptionAgreementStatus;
({ SubscriptionStatusTypes: hasOwnProperty, SubscriptionTypes: closure_6 } = Constants);
const result = size.fileFinishedImporting("modules/premium/gifting/GiftedSubscriptionUtils.tsx");

export { isGiftedSubscription };
export function getGiftedSubscriptions(arg0) {
  const found = Array.from(arg0).filter(isGiftedSubscription);
  return found.sort((id, id2) => SnowflakeUtilsDefault.compare(id2.id, id.id));
}
export function getGiftedSubscriptionRowState(subscription) {
  ({ giftSubscription, status, canceledAt } = subscription);
  const recipientUserId = giftSubscription.recipientUserId;
  if (giftSubscription.status === constants2.PENDING) {
    const obj2 = { kind: "pending", expiresAt: giftSubscription.acceptanceExpiresAt, isCanceled: null != canceledAt };
    let obj = obj2;
  } else {
    if (status !== constants3.PAST_DUE) {
      if (status !== constants3.BILLING_RETRY) {
        if (null == canceledAt) {
          if (giftSubscription.status !== constants2.ENDED) {
            obj = { kind: "active", renewsAt: tmp, recipientUserId };
          }
        }
        const obj3 = { kind: "canceled", recipientUserId, canResubscribe: giftSubscription.status === constants2.ACTIVE };
        obj = obj3;
      }
    }
    const obj4 = { kind: "payment_failed", recipientUserId };
    obj = obj4;
  }
  return obj;
}
export function getGiftSubscriptionInterval(planId) {
  if (React2.PREMIUM_GIFT_MONTH_TIER_2 === planId) {
    const obj2 = { interval: constants.MONTH, intervalCount: 1 };
    return obj2;
  } else if (tmp.PREMIUM_GIFT_YEAR_TIER_2 === planId) {
    const obj = { interval: constants.YEAR, intervalCount: 1 };
    return obj;
  } else {
    return null;
  }
}
export function getPendingGiftSubscriptionGrants(stateFromStoresArray1) {
  const giftCodes = new Set();
  const entitlementIds = new Set();
  const iter = stateFromStoresArray1[Symbol.iterator]();
  while (iter !== undefined) {
    let giftSubscription = iter.next().giftSubscription;
    let tmp = giftSubscription;
    if (giftSubscription.status === constants2.PENDING) {
      if (null != tmp.initialGiftCode) {
        let addResult = giftCodes.add(tmp.initialGiftCode);
      }
      if (null != tmp.initialEntitlementId) {
        let addResult1 = entitlementIds.add(tmp.initialEntitlementId);
      }
    }
    continue;
  }
  return { giftCodes, entitlementIds };
}