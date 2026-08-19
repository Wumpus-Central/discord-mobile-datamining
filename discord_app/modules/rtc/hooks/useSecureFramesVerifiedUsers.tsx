// === Module 14991: useSecureFramesVerifiedUserIds ===

// Module 14991 (useSecureFramesVerifiedUserIds)
import initialize from "initialize" /* 589 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [closure_2];
  return initialize.useStateFromStoresArray(items, () => userIds.getUserIds());
};