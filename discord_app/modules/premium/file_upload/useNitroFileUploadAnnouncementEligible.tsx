// === Module 17052: useNitroFileUploadAnnouncementEligible ===

// Module 17052 (useNitroFileUploadAnnouncementEligible)
import PremiumUtils from "PremiumUtils" /* 4262 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/file_upload/useNitroFileUploadAnnouncementEligible.tsx");

export const useNitroFileUploadAnnouncementEligible = function useNitroFileUploadAnnouncementEligible(MainViewTooltipActionSheets) {
  let hasTier2Premium = PremiumUtils.useHasTier2Premium();
  if (hasTier2Premium) {
    hasTier2Premium = obj2.useNitroFileUploadRolloutEnabled(MainViewTooltipActionSheets);
  }
  return hasTier2Premium;
};