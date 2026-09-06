// discord_app/modules/premium/gifting/hooks/useGiftingPromotionDefaultSelection.tsx
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/premium/gifting/hooks/useGiftingPromotionDefaultSelection.tsx");

export const useGiftingPromotionDefaultSelectionV2 = function useGiftingPromotionDefaultSelectionV2(
  claimableRewards,
  selectedGiftingPromotionReward,
) {
  if (null != claimableRewards) {
    if (0 !== claimableRewards.length) {
      let first = selectedGiftingPromotionReward;
      if (null == selectedGiftingPromotionReward) {
        first = claimableRewards[0];
      }
      return first;
    }
  }
};
