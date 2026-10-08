// === Module 9657: shouldCheckUploadSizeOnlyAfterCompression ===

// Module 9657 (shouldCheckUploadSizeOnlyAfterCompression)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1988 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_uploads/shouldCheckUploadSizeOnlyAfterCompression.tsx");

export const shouldCheckUploadSizeOnlyAfterCompression = function shouldCheckUploadSizeOnlyAfterCompression() {
  return PremiumTypeUtils.isPremium(UserStore.getCurrentUser());
};