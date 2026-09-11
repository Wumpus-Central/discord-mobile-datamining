// === Module 15916: useSecureFramesVerifiedUsers ===

// Module 15916 (useSecureFramesVerifiedUsers)
import initialize from "initialize" /* 504 */;
import VerifiedKeyStore from "VerifiedKeyStore" /* 9224 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [VerifiedKeyStore];
  return initialize.useStateFromStoresArray(items, () => userIds.getUserIds());
};