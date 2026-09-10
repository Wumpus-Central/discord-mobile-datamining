// discord_app/modules/premium/file_upload/useNitroFileUploadAnnouncementEligible.tsx
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/premium/file_upload/useNitroFileUploadAnnouncementEligible.tsx");

export const useNitroFileUploadAnnouncementEligible = function useNitroFileUploadAnnouncementEligible(
  MainViewTooltipActionSheets,
) {
  let hasTier2Premium = PremiumUtils.useHasTier2Premium();
  if (hasTier2Premium) {
    hasTier2Premium = obj2.useNitroFileUploadRolloutEnabled(MainViewTooltipActionSheets);
  }
  return hasTier2Premium;
};
