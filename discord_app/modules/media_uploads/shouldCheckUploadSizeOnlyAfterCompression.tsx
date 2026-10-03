// === Module 7469: shouldCheckUploadSizeOnlyAfterCompression ===

// Module 7469 (shouldCheckUploadSizeOnlyAfterCompression)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1976 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_uploads/shouldCheckUploadSizeOnlyAfterCompression.tsx");

export const shouldCheckUploadSizeOnlyAfterCompression = function shouldCheckUploadSizeOnlyAfterCompression() {
  return PremiumTypeUtils.isPremium(UserStore.getCurrentUser());
};