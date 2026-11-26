// === Module 10780: shouldCheckUploadSizeOnlyAfterCompression ===

// Module 10780 (shouldCheckUploadSizeOnlyAfterCompression)
import PremiumTypeUtils from "PremiumTypeUtils" /* 2109 */;
import UserStore from "UserStore" /* 1387 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_uploads/shouldCheckUploadSizeOnlyAfterCompression.tsx");

export function shouldCheckUploadSizeOnlyAfterCompression() {
  return PremiumTypeUtils.isPremium(UserStore.getCurrentUser());
}