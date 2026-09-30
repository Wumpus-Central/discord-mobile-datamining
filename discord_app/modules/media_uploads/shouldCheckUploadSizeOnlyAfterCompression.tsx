// discord_app/modules/media_uploads/shouldCheckUploadSizeOnlyAfterCompression.tsx
import PremiumTypeUtils from "../../utils/PremiumTypeUtils.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_uploads/shouldCheckUploadSizeOnlyAfterCompression.tsx");

export const shouldCheckUploadSizeOnlyAfterCompression = function shouldCheckUploadSizeOnlyAfterCompression() {
  return PremiumTypeUtils.isPremium(UserStore.getCurrentUser());
};
