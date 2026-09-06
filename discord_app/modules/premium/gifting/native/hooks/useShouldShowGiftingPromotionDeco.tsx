// === Module 10752: useShouldShowGiftingPromotionDeco ===

// Module 10752 (useShouldShowGiftingPromotionDeco)
import PremiumConstants from "PremiumConstants" /* 1373 */;
import NativeGiftContext from "NativeGiftContext" /* 10699 */;
import size from "module_2" /* 2 */;

const PremiumTypes = PremiumConstants.PremiumTypes;
const result = size.fileFinishedImporting("modules/premium/gifting/native/hooks/useShouldShowGiftingPromotionDeco.tsx");

export default function useShouldShowGiftingPromotionDeco(arg0) {
  const nativeGiftContext = NativeGiftContext.useNativeGiftContext();
  const claimableRewards = nativeGiftContext.claimableRewards;
  if (null != arg0) {
    let tmp4 = arg0 === PremiumTypes.TIER_2;
  } else {
    tmp4 = tmp2 === PremiumTypes.TIER_2;
  }
  let tmp6 = null != claimableRewards;
  if (tmp6) {
    tmp6 = claimableRewards.length > 0;
  }
  if (tmp6) {
    tmp6 = tmp4;
  }
  return tmp6;
};