// === Module 10734: shouldCheckUploadSizeOnlyAfterCompression ===

// Module 10734 (shouldCheckUploadSizeOnlyAfterCompression)
import PremiumTypeUtils from "PremiumTypeUtils" /* 2108 */;
import UserStore from "UserStore" /* 1386 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_uploads/shouldCheckUploadSizeOnlyAfterCompression.tsx");

export function shouldCheckUploadSizeOnlyAfterCompression() {
  return PremiumTypeUtils.isPremium(UserStore.getCurrentUser());
}