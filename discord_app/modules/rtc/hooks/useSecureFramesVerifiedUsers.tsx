// === Module 17216: useSecureFramesVerifiedUsers ===

// Module 17216 (useSecureFramesVerifiedUsers)
import initialize from "initialize" /* 504 */;
import VerifiedKeyStore from "VerifiedKeyStore" /* 9571 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export function useSecureFramesVerifiedUserIds() {
  items = [VerifiedKeyStore];
  return initialize.useStateFromStoresArray(items, () => userIds.getUserIds());
}