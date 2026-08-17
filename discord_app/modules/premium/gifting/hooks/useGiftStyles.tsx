// discord_app/modules/premium/gifting/hooks/useGiftStyles.tsx
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;

const PremiumGiftStyles = GuildFeatures.PremiumGiftStyles;
const result = set.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export const useGiftStyles = function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
};