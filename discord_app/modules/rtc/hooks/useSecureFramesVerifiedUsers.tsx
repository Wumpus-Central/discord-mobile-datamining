// === Module 15677: useSecureFramesVerifiedUserIds ===

// Module 15677 (useSecureFramesVerifiedUserIds)
import initialize from "initialize" /* 586 */;
import closure_2 from "initialize" /* 9845 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useSecureFramesVerifiedUsers.tsx");

export const useSecureFramesVerifiedUserIds = function useSecureFramesVerifiedUserIds() {
  const items = [closure_2];
  return initialize.useStateFromStoresArray(items, () => userIds.getUserIds());
};