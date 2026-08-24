// discord_app/modules/premium/gifting/hooks/useGiftStyles.tsx
import set from "../../../../../_runtime/00002_set.js";
import GuildFeatures from "../../PremiumConstants.tsx";

const PremiumGiftStyles = GuildFeatures.PremiumGiftStyles;
const result = set.fileFinishedImporting("modules/premium/gifting/hooks/useGiftStyles.tsx");

export const useGiftStyles = function useGiftStyles() {
  const items = [PremiumGiftStyles.STANDARD_BOX];
  return items;
};