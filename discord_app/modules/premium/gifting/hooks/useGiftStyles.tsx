// === Module 10415: useGiftStyles ===

// Module 10415 (useGiftStyles)
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1925 */;

const PremiumGiftStyles = GuildFeatures.PremiumGiftStyles;
const result = set.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export const useGiftStyles = function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
};