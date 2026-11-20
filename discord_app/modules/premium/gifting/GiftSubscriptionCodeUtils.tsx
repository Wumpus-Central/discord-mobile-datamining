// discord_app/modules/premium/gifting/GiftSubscriptionCodeUtils.tsx
import size from "../../../../_runtime/metro/00002__.js";

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
