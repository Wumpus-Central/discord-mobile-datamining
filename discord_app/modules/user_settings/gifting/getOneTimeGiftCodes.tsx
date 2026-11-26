// === Module 14047: getOneTimeGiftCodes ===

// Module 14047 (getOneTimeGiftCodes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/gifting/getOneTimeGiftCodes.tsx");

export default function getOneTimeGiftCodes(arr, pendingGiftSubscriptionCodes, giftStyle) {
  closure_1 = giftStyle;
  return arr.filter((isClaimed) => {
    isClaimed = isClaimed.isClaimed;
    let tmp = !isClaimed;
    if (!isClaimed) {
      tmp = !set.has(isClaimed.code);
    }
    if (tmp) {
      tmp = isClaimed.giftStyle === closure_1;
    }
    return tmp;
  });
};