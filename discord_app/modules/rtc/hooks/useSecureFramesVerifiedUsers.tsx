// === Module 15849: useSecureFramesVerifiedUserIds ===

// Module 15849 (useSecureFramesVerifiedUserIds)
import initialize from "initialize" /* 504 */;
import closure_2 from "initialize" /* 9134 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [closure_2];
  return initialize.useStateFromStoresArray(items, () => userIds.getUserIds());
};