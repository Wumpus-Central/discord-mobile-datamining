// === Module 11941: GiftSubscriptionCodeUtils ===

// Module 11941 (GiftSubscriptionCodeUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/GiftSubscriptionCodeUtils.tsx");

export function isPendingGiftSubscriptionCode(giftCode) {
  return null != giftCode.giftSubscriptionAgreement;
}
export function needsGiftSubscriptionAgreement(isSubscription) {
  let tmp = null != isSubscription && isSubscription.isSubscription;
  if (tmp) {
    tmp = undefined === isSubscription.giftSubscriptionAgreement;
  }
  return tmp;
}